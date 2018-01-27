import React from 'react';
import ReactDOM from 'react-dom';

//
// const title = React.createElement('h1', {}, 'My First React Code');
// const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');
// const container = React.createElement('div', {}, [title, paragraph]);


// <div class="me">
//   <h1>An Awesome Person</h1>
//   <p>Who is learning React</p>
//
//   <ul class="my-interests">
//     <li>JavaScript</li>
//     <li>React</li>
//     <li>Movies</li>
//     <li>Ice cream</li>
//   </ul>
// </div>

const meInReact =
  React.createElement('div', { className: 'me'},
    React.createElement('h1', {}, 'An Awesome Person'),
    React.createElement('p', {}, 'Who is learning React'),
    React.createElement('ul', { className: "my-interests"},
      [
        React.createElement('li',{}, 'JavaScript'),
        React.createElement('li',{},  'React'),
        React.createElement('li',{},  'Movies'),
        React.createElement('li',{},  'Ice cream')
      ]
    )
  );


ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact

// IMPORTANT!!!! uncomment the lines below to make your tests work
/*
ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
*/
