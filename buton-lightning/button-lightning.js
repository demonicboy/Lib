import React, { useRef, useState, useEffect } from 'react';
import './button-lightning.css'
const ButtonLightning = (props) => {
    const divRef = useRef(null);
    const [divHeight, setDivHeight] = useState(0);
    const [divWidth, setDivWidth] = useState(0);

    const injectKeyframes = () => {
        const keyframes = generateKeyframes();
        const styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.innerHTML = keyframes;
        document.head.appendChild(styleElement);
      };

    const generateKeyframes = () => {
        return `
          @keyframes turning {
            0% {
              clip-path: polygon(0px -19px, 20px -19px, 20px 1px, 0px 1px);
            }
            
            ${((divWidth-20) / ((divHeight + divWidth) * 2)) * 100}% {
 
                clip-path: polygon(${divWidth-20}px -19px, ${divWidth}px  -19px, ${divWidth}px 1px, ${divWidth-20}px 1px); 
            }
        
        
            ${((divWidth) / ((divHeight + divWidth) * 2)) * 100}% {
        
                clip-path: polygon(${divWidth-1}px 0px, ${divWidth+19}px  0px, ${divWidth+19}px  20px, ${divWidth-1}px 20px); 
            }
        
            ${((divWidth+divHeight-20) / ((divHeight + divWidth) * 2)) * 100}% {
          
                clip-path: polygon(${divWidth-1}px ${divHeight-20}px, ${divWidth+19}px  ${divHeight-20}px, ${divWidth+19}px ${divHeight}px, ${divWidth-1}px ${divHeight}px); 
            }

            ${((divWidth+divHeight) / ((divHeight + divWidth) * 2)) * 100}%  {
          
                clip-path: polygon(${divWidth-20}px  ${divHeight-1}px, ${divWidth}px ${divHeight-1}px, ${divWidth}px ${divHeight+19}px, ${divWidth-20}px  ${divHeight+19}px); 
            }

            ${((2*divWidth+divHeight-20) / ((divHeight + divWidth) * 2)) * 100}%  {
          
                clip-path: polygon(0px ${divHeight-1}px, 20px ${divHeight-1}px, 20px ${divHeight+19}px, 0px ${divHeight+19}px); 
            }

            ${((2*divWidth+divHeight) / ((divHeight + divWidth) * 2)) * 100}% {
          
                clip-path: polygon(-19px ${divHeight-20}px, 2px ${divHeight-20}px, 2px ${divHeight}px, -19px ${divHeight}px); 
            }
            
            ${((2*divWidth+2*divHeight-20) / ((divHeight + divWidth) * 2)) * 100}% {
          
                clip-path: polygon(-19px 0px, 1px 0px, 1px 20px, -19px 20px); 
            }
      
            100% {
              clip-path: polygon(0px -19px, 20px -19px, 20px 1px, 0px 1px);
            }
          }
        `;
    };


    useEffect(() => {
        if (divRef.current) {
            setDivHeight(divRef.current.offsetHeight);
            setDivWidth(divRef.current.offsetWidth);
        }
    }, [divRef]);

    useEffect(()=>{
        injectKeyframes(); 
    },[divHeight]);

    return (
        <div
            className="button-lightning-div"
            ref={divRef}
            style={{
                '--div-height': `${divHeight}px`,
                '--div-width': `${divWidth}px`,
            }}
        >
            <div className="button-lightning-border" />
            <div className="button-lightning-content">{props.content}</div>
        </div>
    )
}

export default ButtonLightning;