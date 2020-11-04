import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { v4 as uuid } from 'uuid';
import { addUserProfile } from '../../app/reducer';
import CardForm from '../../components/CardForm'

const classNameSpace = 'addUserProfile';

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}

const initialUserState = {
    id: '',
    image: 'https://via.placeholder.com/150',
    name: '',
    email: '',
    address: '',
    website: '',
    phoneNumber: '',
    company: '',
    companyCatchPhrase: '',
    companyImage: 'https://via.placeholder.com/150'
}

const AddUserProfile = () => {
    const history = useHistory()
    const dispatchForm = useDispatch()
    const [userProfile, dispatch] = useReducer(reducer, initialUserState)

    const handleOnClick = () => {
        // a bit of trouble trying to create a unique id for each user created
        // dispatch({ field: 'id', value: uuid() });
        dispatchForm(addUserProfile(userProfile));
        history.push("/");
    }
    return (
        <div className={classNameSpace}>
            <div className={`${classNameSpace}__cardContainer`}>
                <CardForm userProfile={userProfile} dispatch={dispatch} />
                <input 
                    className={`${classNameSpace}__cardContainer__button`} 
                    type="button" 
                    value="submit" 
                    onClick={handleOnClick}
                />
            </div>
        </div>
    )
};

export default AddUserProfile;
