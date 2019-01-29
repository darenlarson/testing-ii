import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display.js';

describe('<Display />', () => {
    it('should show the strike count', () => {
        const strikes = 0;
        const { getByTestId } = render(<Display strikes={strikes} />)

        const strikeDisplay = getByTestId('strike-count');

        expect(strikeDisplay).toHaveTextContent(strikes);
    });

    it('should show the ball count', () => {
        const balls = 0;
        const { getByTestId } = render(<Display balls={balls} />)

        const ballDisplay = getByTestId('strike-count');

        expect(ballDisplay).toHaveTextContent(balls);
    })
});