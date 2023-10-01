import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';
import { BrowserRouter as Router} from 'react-router-dom'


test ("shouldnt allowed click button if isDisabled is exist", () =>{
    const { container } = render(<Button isDisable></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

//testing componen button when button is loading
test ("Should render loading/spinner", () =>{
    const { container, getByText } = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
});

//testing componen button when button is navigate to link a tag
test ("Should render <a> tag", () =>{
    const { container } = render(<Button type="link" isExternal></Button>)

    expect(container.querySelector("a")).toBeInTheDocument();
});

//testing componen button when button is navigate to link component
test ("Should render <link> component", () =>{
    const { container } = render(<Router><Button href="" isExternal></Button></Router>)

    expect(container.querySelector("a")).toBeInTheDocument();
});