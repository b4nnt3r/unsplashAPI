import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
     super(props);
     this.state = {
       'photos': []
     }
   }

   handleSubmit = (data) => {
     console.log('click', data);
     this.props.handleSubmit(data)
   }

   componentDidMount() {
     let url = `https://api.unsplash.com/photos/?client_id=c7a739f46376e520be49ff6b337d186ef00b135a10ab3512b9d99e5033a2f0d7`;
     // Fetch data from API
     fetch(url).then((response) => {
       return response.json();
     }).then((data) => {
       this.setState({photos: data.results})
     });
   }
    render() {
      return (
        <div className="header">
          <h1>hello</h1>
        </div>
      );
    }

  }

export default Results;
