import React from 'react';

export const Fab = (props) => {

    return <div className="fab">
        <span className="tooltip">Change the Theme</span>
        <button onClick={props.themeColor} className="fab button">
            <svg
                viewBox="0 0 24 24"
                style={{
                    marginBottom: "0.2rem"
                }}
                width="24" height="24"
                stroke="#CFD8DC"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="css-i6dzq1">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
        </button>
    </div>
}