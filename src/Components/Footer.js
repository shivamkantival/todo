import React from 'react';
import ListFilter from './ContainerListFilter';

const Footer = () => (
    <div>
        <p>
            Show:
            {'   '}      
            <span>
                <ListFilter filter='SHOW_ALL' text='All' />
                {'  '}
                <ListFilter filter='SHOW_COMPLETED' text='Completed' />
                {'  '}
                <ListFilter filter='SHOW_ACTIVE' text='Active' />
            </span>
        </p>
    </div>
)

export default Footer;