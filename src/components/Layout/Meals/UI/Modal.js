import React, {Fragment, useState} from 'react';
import classes from './Modal.module.css';
import ReactDom from 'react-dom';


const Backdrop = (props) => {
    
    return <div className={classes.backdrop} onClick={props.onClose}>

    </div>
}
const ModalOverlay = (props) => {

    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>

}

//Backdrop is used to stop interaction in behind the modal
const portalElement = document.getElementById('overlays');      //go get access to the overlays div in index

const Modal = (props) => {

    return (<Fragment>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>,portalElement )}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>); 
}

export default Modal;
