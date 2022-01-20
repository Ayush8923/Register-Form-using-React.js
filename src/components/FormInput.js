import "./formInput.css"

const FormInput = (props) => {
    const {label, errorMessage, onChange, id, ...inputProps} = props;
    return (
        <div className="formInput">
            <label>{props.label}</label>
            <input {...inputProps} onChange={onChange} />
             <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput;