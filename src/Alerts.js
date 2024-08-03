import React from 'react'

export default function Alerts(props) {
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
   <div style={{height: '40px'}}>
    {props.alert && <div className={`alert alert-${props.alert.types} alert-dismissible fade show`}  role="alert">
      <strong> {capitalize(props.alert.types)} </strong>{props.alert.msg}
        <button type="button"  className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
   </div>
  )
}
