import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';

test ("shouldnt allowed click button if isDisabled is exist", () =>{
    const { container } = render(<Button isDisable></Button>)

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});