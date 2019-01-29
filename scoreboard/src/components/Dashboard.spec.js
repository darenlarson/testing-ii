import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
    it('renders all of the buttons', () => {
        const { getByText } = render(<Dashboard />);

        const strikeButton = getByText(/strike/i);
        const ballButton = getByText(/ball/i);
        const hitButton = getByText(/hit/i);
        const outButton = getByText(/out/i);

        expect(strikeButton).toHaveTextContent(/strike/i);
        expect(ballButton).toHaveTextContent(/ball/i);
        expect(hitButton).toHaveTextContent(/hit/i);
        expect(outButton).toHaveTextContent(/out/i);
    });
});