import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import travel_books from './data/travel_books.json'
import mystery_books from './data/mystery_books.json'
import classic_books from './data/classic_books.json'

function App() {
  return (
    <Container>
      <Row className='p-2'>
        <h1>Travel Books</h1>
        {
          travel_books?.map(book => (
            <Col>
              <Card className="my-4" style={{ width: '18rem', height: '55vh'}}>
                <Card.Img variant="top" src={book.image} style={{ height: '25vh'}}/>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text style={{ maxHeight: '10vh', overflow: 'hidden' }}>
                    {book.desc}
                  </Card.Text>
                  <Button variant="link" href={book.url}>See more...</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
      <Row className='p-2'>
        <h1>Mystery Books</h1>
        {
          mystery_books?.map(book => (
            <Col>
              <Card className="my-4" style={{ width: '18rem', height: '55vh'}}>
                <Card.Img variant="top" src={book.image} style={{ height: '25vh'}}/>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text style={{ maxHeight: '10vh', overflow: 'hidden' }}>
                    {book.desc}
                  </Card.Text>
                  <Button variant="link" href={book.url}>See more...</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
      <Row className='p-2'>
        <h1>Classic Books</h1>
        {
          classic_books?.map(book => (
            <Col>
              <Card className="my-4" style={{ width: '18rem', height: '55vh'}}>
                <Card.Img variant="top" src={book.image} style={{ height: '25vh'}}/>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text style={{ maxHeight: '10vh', overflow: 'hidden' }}>
                    {book.desc}
                  </Card.Text>
                  <Button variant="link" href={book.url}>See more...</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

export default App;
