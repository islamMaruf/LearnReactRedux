import React from 'react'
import {buyIceCream} from '../redux/index'
import {connect} from 'react-redux'

function IceCreamContainer(props) {
    const {numOfIceCream,buyIceCream} = props;
    return (
        <div>
            <h2>Number of Ice Cream - {numOfIceCream}</h2>
            <button onClick={buyIceCream}>Buy Ice Cream</button>
            
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        numOfIceCream : state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream : () => dispatch(buyIceCream())
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(IceCreamContainer)