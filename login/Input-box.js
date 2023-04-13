import { forwardRef, useState } from "react";

const Input = forwardRef((props, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
    const handleMouseLeave = () => {
        if (!isFocused && !ref.current.value) {
          setIsFocused(false);
        }
      };
    return (
        <div className="mb-3">
            <label 
                htmlFor={props.name} 
                className={`form-label ${isFocused ? 'form-label-focus' : ''}`}
                style={{ transition: 'all 0.3s' }}
            >
                {props.title}
            </label>
            <input
                type={props.type}
                className={props.className}
                id={props.name}
                ref={ref}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                autoComplete={props.autoComplete}
                value={props.value}
                style={{
                    background: 'none',
                    border: 'none',
                }}
                onBlur={handleBlur}
                onMouseEnter={handleFocus}
                onMouseLeave={handleMouseLeave}              
            />
            <div className={props.errorDiv}>{props.errorMsg}</div>
        </div>

    )
})

export default Input;