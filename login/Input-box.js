import { forwardRef, useState } from "react";

const Input = forwardRef((props, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isIn, setIsIn] = useState(false);
    const [haveValue, setHaveValue] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
    const handleMouseEnter = () => {

        setIsIn(true);

    }
    const handleMouseLeave = () => {

        setIsIn(false);

    };

    const handleChange = (event) => {
        if (event.target.value != '')
            setHaveValue(true)
        else
            setHaveValue(false)
        props.onChange(event);

    }

    return (
        <div className="input-div">
            <label
                htmlFor={props.name}
                className={`form-label-base ${isFocused || isIn || haveValue? 'form-label-focus' : 'form-label'}`}
                style={{ transition: 'all 0.3s' }}
            >
                {props.title}
            </label>
            <input
                type={props.type}
                className='input-login'
                id={props.name}
                ref={ref}
                name={props.name}
                placeholder={props.placeholder}
                onChange={handleChange}
                autoComplete={props.autoComplete}
                value={props.value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />

            <div className={props.errorDiv}>{props.errorMsg}</div>
        </div>

    )
})

export default Input;