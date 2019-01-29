import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
    it('renders all of the buttons', () => {
        const { getByText } = render(<Dashboard />);

        const strikeButton = getByText(/strike/i);
        const ballButton = getByText(/ball/i);
        const singleButton = getByText(/single/i);
        const doubleButton = getByText(/double/i);
        const tripleButton = getByText(/triple/i);
        const homerunButton = getByText(/home run/i);
        const outButton = getByText(/out/i);

        expect(strikeButton).toHaveTextContent(/strike/i);
        expect(ballButton).toHaveTextContent(/ball/i);
        expect(singleButton).toHaveTextContent(/single/i);
        expect(doubleButton).toHaveTextContent(/double/i);
        expect(tripleButton).toHaveTextContent(/triple/i);
        expect(homerunButton).toHaveTextContent(/home run/i);
        expect(outButton).toHaveTextContent(/out/i);
    });
});