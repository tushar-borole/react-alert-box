import React, {Component} from 'react';
import * as PropTypes from "prop-types";
// import { showAlert } from './index'

class App extends Component {
    render() {
        // const alert = showAlert()
        // console.log(alert)
        return (
            <div>
                <button
                >
                    Show Alert
                </button>
            </div>
        );
    }
}

App.propTypes = {showAlert: PropTypes.any}

export default App;
