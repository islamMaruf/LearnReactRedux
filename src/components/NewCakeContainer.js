import React from 'react'
import {buyCake} from '../redux/index'
import {connect} from 'react-redux'
import { useState } from 'react'

function NewCakeContainer(props) {
    const {numOfCakes,buyCake} = props;
    const [number,setNummber] = useState(1);
    return (
        <div>
            <h2>Number of Cake - {numOfCakes}</h2>
            <input type="text" value={number} onChange={ (e) => setNummber(e.target.value)} />
            <button onClick={() => buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        numOfCakes : state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : number => dispatch(buyCake(number))
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(NewCakeContainer)
