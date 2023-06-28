import './App.css';
import React, { useEffect, useState, useMemo } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Table } from './Table';

function App() {
  const [query, setQuery] = useState("");
  const [exact, setExact] = useState(false);
  const [page, setPage] = useState(0);
  const [data, setData] = useState();

  const fetchData = async () => {
    const url = `http://localhost:5000/search?query=${query}&exact=${exact}&page=${page}`
    const { data: response } = await axios.get(url);
    setData(response);
  }

  useEffect(() => {
    fetchData()
  }, [query, exact, page])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <header className="App-header">
      <Form className="mb-3" style={{ width: '40%' }}>
        <Form.Group  >
          <Form.Label style={{ margin: '10px' }} >Search</Form.Label>
          <Form.Control style={{ margin: "10px 0" }} placeholder="Search..." onChange={(e) => {
            setQuery(e.target.value);
            setPage(0)
          }}
          />
          <Form.Check type="checkbox" label="Exact Matches Only" onClick={(e) => {
            setExact(!exact);
            setPage(0)
          }} />
        </Form.Group>
      </Form>
      <Table data={data} page={page} setPage={setPage} />
    </header>
  );
}

export default App;
