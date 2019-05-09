import React from "react";
import "../style/main.scss";

const uuidv4 = require("uuid/v4");

const Tags = props => {
    let style = {};
    if (props.right) {
        style = { margin: "5px 20px 0 0" };
    }

    const tags = props.tags.map(value => (
        <span className={`tags`} style={style} key={uuidv4()}>
            <div className="tag-text">{value}</div>
        </span>
    ));

    return <div>{tags}</div>;
};

export default Tags;
