import React, { useRef, useState, useEffect, useCallback } from 'react';
import './button-fly.css'

const ButtonFly = (props) => {

    const borderlength = 50;
    const speed = 10;//speed càng nhỏ chạy càng nhanh

    const divRef = useRef(null);
    const [divHeight, setDivHeight] = useState(0);
    const [divWidth, setDivWidth] = useState(0);
    const [horizontaltop, setHorizontalTop] = useState(0);
    const [horizontalbot, setHorizontalBot] = useState(0);
    const [verticalleft, setVerticalLeft] = useState(0);
    const [verticalright, setVerticalRight] = useState(-borderlength - 1);
    const [tickChange, setTickChange] = useState(true);
    const [headOn, setHeeadOn] = useState(0);
    const [savehead, setSaveHead] = useState(1);

    useEffect(() => {
        if (divRef.current) {
            setDivHeight(divRef.current.offsetHeight);
            setDivWidth(divRef.current.offsetWidth);
            setHorizontalBot(divRef.current.offsetWidth + 1);
            setVerticalLeft(divRef.current.offsetHeight + 1)
            setVerticalRight(-borderlength - 1);
        }
    }, [divRef]);


    const ticking = useCallback(() => {
        setTickChange((x) => {
            return !x
        });
    }, []);

    useEffect(() => {
        // Set up the interval
        const interval = setInterval(ticking, speed);
        // Clean up the interval when the component is unmounted
        return () => {
            clearInterval(interval);
        };

    }, [divHeight, divWidth]);

    useEffect(() => {

        if (divHeight === 0) return;
        if (headOn === 0) {
            return;
        }
        if (headOn === 1) {
            setHorizontalTop(horizontaltop + 1);
            if (horizontaltop + borderlength > divWidth - 4) {
                setHeeadOn(2);
            }

        } else {
            if (horizontaltop < divWidth && horizontaltop > -borderlength - 1)
                setHorizontalTop(horizontaltop + 1)
            else
                setHorizontalTop(-borderlength - 1);
        }

        if (headOn === 2) {
            setVerticalRight(verticalright + 1);
            if (verticalright + borderlength > divHeight - 4)
                setHeeadOn(3);
        } else {
            if (verticalright < divHeight && verticalright > -borderlength - 1)
                setVerticalRight(verticalright + 1);
            else
                setVerticalRight(-borderlength - 1);
        }

        if (headOn === 3) {
            setHorizontalBot(horizontalbot - 1);
            if (horizontalbot < 4)
                setHeeadOn(4);
        } else {
            if (horizontalbot < divWidth + 1 && horizontalbot > -borderlength - 1)
                setHorizontalBot(horizontalbot - 1);
            else setHorizontalBot(divWidth + 1);
        }

        if (headOn === 4) {
            setVerticalLeft(verticalleft - 1);
            if (verticalleft < 4)
                setHeeadOn(1);
        } else {
            if (verticalleft < divHeight + 1 && verticalleft > -borderlength - 1)
                setVerticalLeft(verticalleft - 1);
            else setVerticalLeft(divHeight + 1)
        }


    }, [tickChange])

    const handleMouseEnter = () => {
        setHeeadOn(savehead);
    }
    const handleMouseLeave = () => {
        setSaveHead(headOn);
        setHeeadOn(0);
    }
    return (
        <div
            className="button-fly-div"
            ref={divRef}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
        >
            <div className="button-fly-border vertical-left"
                style={
                    {
                        'top': `${verticalleft}px`,
                        'height': `${borderlength}px`,
                        display: headOn === 0 ? 'none' : 'block'
                    }
                } />
            <div className="button-fly-border vertical-right"
                style={
                    {
                        'top': `${verticalright}px`,
                        'height': `${borderlength}px`,
                        display: headOn === 0 ? 'none' : 'block'
                    }
                } />
            <div className="button-fly-border horizontal-top"
                style={{
                    'left': `${horizontaltop}px`,
                    'width': `${borderlength}px`,
                    display: headOn === 0 ? 'none' : 'block'
                }} />
            <div className="button-fly-border horizontal-bot"
                style={{
                    'left': `${horizontalbot}px`,
                    'width': `${borderlength}px`,
                    display: headOn === 0 ? 'none' : 'block'
                }} />

            <div className="button-fly-content">{props.content}</div>
        </div>
    )
}

export default ButtonFly;