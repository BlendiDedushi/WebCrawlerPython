import re
import requests
from bs4 import BeautifulSoup
import csv
import json


def get_books(file):
    urls = []
    with open(file) as fh:
        csv_urls = csv.reader(fh, delimiter=' ', quotechar='|')
        for url in csv_urls:
            urls.append(url[0])
    return urls


def get_html(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.text
    else:
        raise Exception(f"Error: {response.status_code}")


def scrape(html, url):
    soup = BeautifulSoup(html, 'html.parser')

    book_title = soup.select_one('#content_inner > article > div.row > div.col-sm-6.product_main > h1').text
    book_image = soup.select_one('#product_gallery > div > div > div > img')['src']
    book_desc = soup.select_one('#content_inner > article > p').text

    return {'title': book_title, 'image': 'https://books.toscrape.com/'+book_image, 'desc': book_desc, 'url': url}


def get_book(urls):
    books = []

    if len(urls) == 0:
        raise Exception("URLs list is empty!")

    for url in urls:
        try:
            html = get_html(url)
            book = scrape(html, url)
            books.append(book)
            print('Scraping: ' + book['title'])

        except Exception as e:
            print(e)

    return books


def save_books(books, file):
    if len(books) == 0:
        raise Exception("Books list is empty!")

    with open(file, 'w') as fh:
        json.dump(books, fh)

    print('Done!')


try:
    travel_urls = get_books('travel_books.csv')
    travel_books = get_book(travel_urls)
    save_books(travel_books, 'travel_books.json')

    mystery_urls = get_books('mystery_books.csv')
    mystery_books = get_book(mystery_urls)
    save_books(mystery_books, 'mystery_books.json')

    classic_urls = get_books('classic_books.csv')
    classic_books = get_book(classic_urls)
    save_books(classic_books, 'classic_books.json')
except Exception as e:
    print(e)
