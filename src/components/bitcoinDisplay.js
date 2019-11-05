import React from 'react';

function BitDisplay(props) {
    return (
        <div>
            {props.data.map((bitcoin) => {
                return (
                <div>
                    <h1>{bitcoin.symbol}</h1>
                </div>
                )
            })}
        </div>
    )
}

export default BitDisplay;