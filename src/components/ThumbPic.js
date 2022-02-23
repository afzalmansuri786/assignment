import React from "react";
export class ThumbPic extends React.Component {
    render(){
        const {images , tab, myRef} =  this.props;
        return(
            <div className="thumb" ref={myRef}>
                {
                  images.map((img,index) => (
                    <img src={img} alt={img} key={index}
                      onClick={() => tab(index) }
                    />
                  ))
                }
              </div>
        );
    }
}
export default ThumbPic;