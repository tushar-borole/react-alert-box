import './Modal.css'
import React, {Component, Fragment} from 'react';
import Context from './Context'

class AlerboxProvider extends Component {
    value = {
        showAlert: () => {
        }
    };
    render() {
        const { value, props: { children } } = this;
        return (
            <Fragment>
                <div className='react-alert-box'>
                    <span className='closebtn'>&times;</span>
                    This is an alert box.
                </div>
                <Context.Provider value={value}>{children}</Context.Provider>
            </Fragment>
        );
    }
}


export default AlerboxProvider;
