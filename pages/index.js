import Layout from "components/Layout";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <div>
              <h1>JupyStrip</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
