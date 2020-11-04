import React from 'react';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg'
import { ReactComponent as AddressBook } from '../../assets/icons/addressBook.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Website } from '../../assets/icons/website.svg'

const classNameSpace = 'card';

const Card = ({ profile }) => {
    return (
        <div className={classNameSpace}>
            <div className={`${classNameSpace}__imageContainer`}>
                <div className={`${classNameSpace}__imageContainer__image`}>
                    <img src={profile.image} alt="User Avatar"/>
                </div>
            </div>
            <div className={`${classNameSpace}__infoContainer`}>
                <div className={`${classNameSpace}__infoContainer__firstName`}>
                    <span>{profile.name}</span>
                </div>
                <div className={`${classNameSpace}__infoContainer__detail`}>
                    <Mail className={`${classNameSpace}__infoContainer__detail__icon`}/>
                    <span>{profile.email}</span>
                </div>
                <div className={`${classNameSpace}__infoContainer__detail`}>
                    <AddressBook className={`${classNameSpace}__infoContainer__detail__icon`}/>
                    <span>{profile.address}</span>
                </div>
                <div className={`${classNameSpace}__infoContainer__detail`}>
                    <Phone className={`${classNameSpace}__infoContainer__detail__icon`}/>
                    <span>{profile.phoneNumber}</span>
                </div>
                <div className={`${classNameSpace}__infoContainer__detail`}>
                    <Website className={`${classNameSpace}__infoContainer__detail__icon`}/>
                    <span>{profile.website}</span>
                </div>
                <div className={`${classNameSpace}__infoContainer__company`}>
                    <div className={`${classNameSpace}__infoContainer__company__image`}>
                        <img src={profile.companyImage} alt="Company Avatar"/>
                    </div>
                    <div className={`${classNameSpace}__infoContainer__company__detail`}>
                        <div className={`${classNameSpace}__infoContainer__company__detail__name`}>
                            <span>{profile.company}</span>
                        </div>
                        <div className={`${classNameSpace}__infoContainer__company__detail__description`}>
                            <span>{profile.companyCatchPhrase}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;