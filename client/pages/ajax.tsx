import * as React from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';

interface IAjaxState {
  people: string[];
}

class Ajax extends React.Component<{}, IAjaxState> {
  private constructor(props) {
    super(props);
    this.state = {people: []};
  }

  public componentWillMount() {
    axios.get('/starwars.json')
      .then(response => this.setState({people: response.data.results}));
  }

  private getEntry = (person, index) => (
    <tr key={person.name}>
      <td>{index + 1}</td>
      <td>{person.name}</td>
      <td>{person.height}</td>
      <td>{person.mass}</td>
    </tr>
  )

  public render() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
          </tr>
        </thead>
        <tbody>
          {this.state.people.map(this.getEntry)}
        </tbody>
      </Table>
    );
  }
}

export default Ajax;
