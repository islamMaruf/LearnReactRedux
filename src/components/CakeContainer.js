import React from 'react'
import {buyCake} from '../redux/index'
import {connect} from 'react-redux'

function CakeContainer(props) {
    const {numOfCakes,buyCake} = props;
    return (
        <div>
            <h2>Number of Cake - {numOfCakes}</h2>
            <button onClick={buyCake}>Buy Cake</button>
            
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
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(CakeContainer)
