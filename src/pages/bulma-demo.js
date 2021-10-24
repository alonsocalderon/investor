import React from 'react';
import './bulma-demo.scss';

const BulmaDemoPage = () => (
    <div>
        <h1 className="title">
            Bulma Demo Page
        </h1>
        <div className="columns">
            <div className="column">
                <div class="block">
                    This is a block element
                </div>
            </div>
            <div className="column">
                <div className="box">
                    This is a box element
                </div>
            </div>
        </div>
    </div>
);

export default BulmaDemoPage;
