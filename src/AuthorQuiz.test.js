import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {mount, shalow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()});

const state = {
  turnData: {
    books: ['The Shining', 'IT', 'David Copperfield', 'Roughing It'],
    author:    
    {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: [
          'The Adventures of Huckleberry Finn',
          'Life on the Mississipi',
          'Roughing It'
      ]        
    }
  },
  highlight: 'none'
}

describe("Author Quiz", () =>
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={()=>{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
);
