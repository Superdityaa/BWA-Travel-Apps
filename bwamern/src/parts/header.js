import React from 'react';
import Button from 'elements/Button';
import IconText from './iconText';

export default function header(props) {
    
    const getNavLinkClass = path => {
        return props.location.pathname === path ? "active" : "";
    };
    return (
    <header className="spacing-sm">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <IconText />
            </nav>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className={'nav-item${getNavLinkClass("/")}'}>
                        <Button className="nav-link" href="/" type="link">
                            Home
                        </Button>
                    </li>
                    <li className={'nav-item${getNavLinkClass("/browse-by")}'}>
                        <Button className="nav-link" href="/browse-by" type="link">
                            Browse By
                        </Button>
                    </li>
                    <li className={'nav-item${getNavLinkClass("/stories")}'}>
                        <Button className="nav-link" href="/stories" type="link">
                            Stories
                        </Button>
                    </li>
                    <li className={'nav-item${getNavLinkClass("/agents")}'}>
                        <Button className="nav-link" href="/agents" type="link">
                            Agents
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
        
    </header>
  )
}
