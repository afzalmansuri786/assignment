import React, { forwardRef } from "react";

const ThumbPic = forwardRef(({ images, tab }, ref) => {
    return (
        <div className="thumb" ref={ref}>
            {images.map((img, index) => (
                <img src={img} alt={img} key={index}
                    onClick={() => tab(index)}
                />
            ))}
        </div>
    );
});

export default ThumbPic;
