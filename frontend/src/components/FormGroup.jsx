import React from "react";

const FormGroup = (props) => {

    
    return (
        <div className="form-group">
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor={props.name}>{props.label}</label>
            <input required
            className={`block ${props.class} w-full rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            onChange={(e) => props.onChange(e.target.value)} 
            value={props.value} 
            type="text"
            name={props.name} 
            disabled={props.disabled}
            />
        </div>
    )

}


export default FormGroup;