import React from 'react';
import Card from '../../components/Card'

const classNameSpace = 'userProfiles';

const UserProfiles = () => {
    return (
        <div className={classNameSpace}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
};

export default UserProfiles;