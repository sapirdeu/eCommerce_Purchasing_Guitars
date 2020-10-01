import React from 'react'

function FormFields({id, formData, change}) {

    const showError = () => {
        let errorMessage = null;

        if(formData.validation && !formData.valid){
            errorMessage = (
                <div className="error_label">
                    {formData.validationMessage}
                </div>
            )
        }
        
        return errorMessage
    }

    const renderTemplate = () => {
        let formTemplate = null;

        switch(formData.element){
            case('input'):
                formTemplate = (
                    <div className="formBlock">
                        <input
                            {...formData.config}
                            value={formData.value}
                            onBlur={(event)=> change({event,id, blur:true})}
                            onChange={(event)=> change({event,id})}
                        />
                        { showError() }
                    </div>
                )
            break;
            // case('select'):
            //     formTemplate = (
            //         <div>
            //             { formData.showlabel ?
            //                 <div className="label_inputs">
            //                     {formData.config.label}
            //                 </div>
            //                 :null
            //             }
            //             <select
            //                 value={formData.value}
            //                 onChange={(event)=> change({event,id})}
            //             >
            //                 <option value="">Select one</option>
            //                 {
            //                     formData.config.options.map((item)=>(
            //                        <option key={item.key} value={item.key}>
            //                             {item.value}
            //                        </option> 
            //                     ))
            //                 }
            //             </select>
            //             { showError() }
            //         </div>
            //     )
            // break;
            default:
                formTemplate = null;

        }
        return formTemplate;
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    )
}

export default FormFields
