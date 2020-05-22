import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../redux'

function UserContainer({ fetchUsers, userData }) {
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])
    return userData.loading ? (<h2>loading.....</h2>) : userData.error ? (<h2>{userData.error}</h2>) :
        <div>
            <h1>User List</h1>
            <div>
                {
                    userData && userData.users && userData.users.map((user,key) => <p key={key} >{user.name}</p>)
                }
            </div>
        </div>
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
