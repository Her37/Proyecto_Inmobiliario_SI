import React from "react";

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;
    return (
        <div className="novedades">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <img src={imagen} alt='' />
            <div deangerouslySetInnerHTML={{ __html: body }} />
            <a href={body}> <h5>Link</h5> </a>
            <hr />
        </div >
    );
};

export default NovedadItem;