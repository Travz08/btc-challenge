import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserProfiles } from '../../app/reducer';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg'
import Card from '../../components/Card'

const classNameSpace = 'userProfiles';

const UserProfiles = () => {
    const userProfiles = useSelector(selectUserProfiles);

    return (
        <div className={classNameSpace}>
            <div className={`${classNameSpace}__add`}>
                <Link to="/edit">
                    <Plus className={`${classNameSpace}__add__icon`}/>
                </Link>
            </div>
            <div className={`${classNameSpace}__cardContainer`}>
                { userProfiles && userProfiles.map((profile) => <Card key={profile.id} profile={profile}/>)}
            </div>
        </div>
    )
};

export default UserProfiles;