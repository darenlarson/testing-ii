import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  describe('strike button', () => {
      it('should increase the strike count by 1', () => {
          const { getByText, getByTestId } = render(<App />);

          const strikeCount = getByTestId('strike-count');
          const strikeButton = getByText(/strike/i);

          fireEvent.click(strikeButton);

          expect(strikeCount).toHaveTextContent('1');
      });
      it('should should reset the strike count to zero after 3 clicks', () => {
        const { getByText, getByTestId } = render(<App />);

        const strikeCount = getByTestId('strike-count');
        const strikeButton = getByText(/strike/i);

        fireEvent.click(strikeButton);
        fireEvent.click(strikeButton);
        fireEvent.click(strikeButton);
        
        expect(strikeCount).toHaveTextContent('0');
    });
  });

  describe('ball button', () => {
    it('should increase the ball count by 1', () => {
      const { getByText, getByTestId } = render(<App />);

      const ballCount = getByTestId('ball-count');
      const ballButton = getByText(/ball/i);

      fireEvent.click(ballButton);

      expect(ballCount).toHaveTextContent('1');
    });
  });
});
