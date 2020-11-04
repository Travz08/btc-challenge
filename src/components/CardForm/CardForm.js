import React from 'react';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg'
import { ReactComponent as AddressBook } from '../../assets/icons/addressBook.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Website } from '../../assets/icons/website.svg'

const classNameSpace = 'cardForm';
const classNameSpaceDefault = 'card';

const CardForm = ({ userProfile, dispatch }) => {
    const onChange = (e) => dispatch({ field: e.target.name, value: e.target.value });

    return (
        <div className={classNameSpaceDefault}>
            <div className={`${classNameSpaceDefault}__imageContainer`}>
                <div className={`${classNameSpaceDefault}__imageContainer__image`}>
                    <img src={userProfile.image || 'https://via.placeholder.com/150'} alt="User Avatar"/>
                </div>
            </div>
            <div className={`${classNameSpaceDefault}__infoContainer`}>
                <div className={`${classNameSpaceDefault}__infoContainer__firstName`}>
                    <input 
                        className={`${classNameSpace}__firstName__input`}
                        placeholder="First Name"
                        name="name"
                        type="text"
                        value={userProfile.name || ''}
                        onChange={onChange}
                    />
                </div>
                <div className={`${classNameSpaceDefault}__infoContainer__detail`}>
                    <Mail className={`${classNameSpaceDefault}__infoContainer__detail__icon`}/>
                    <input 
                        className={`${classNameSpace}__detail__input`} 
                        placeholder="Email"
                        name="email"
                        type="text"
                        value={userProfile.email || ''}
                        onChange={onChange}
                    />
                </div>
                <div className={`${classNameSpaceDefault}__infoContainer__detail`}>
                    <AddressBook className={`${classNameSpaceDefault}__infoContainer__detail__icon`}/>
                    <input 
                        className={`${classNameSpace}__detail__input`} 
                        placeholder="Address"
                        name="address"
                        type="text"
                        value={userProfile.address || ''}
                        onChange={onChange}
                    />
                </div>
                <div className={`${classNameSpaceDefault}__infoContainer__detail`}>
                    <Phone className={`${classNameSpaceDefault}__infoContainer__detail__icon`}/>
                    <input 
                        className={`${classNameSpace}__detail__input`} 
                        placeholder="Phone Number"
                        name="phoneNumber"
                        type="text"
                        value={userProfile.phoneNumber || ''}
                        onChange={onChange}
                    />
                </div>
                <div className={`${classNameSpaceDefault}__infoContainer__detail`}>
                    <Website className={`${classNameSpaceDefault}__infoContainer__detail__icon`}/>
                    <input 
                        className={`${classNameSpace}__detail__input`} 
                        placeholder="Website"
                        name="website"
                        type="text"
                        value={userProfile.website || ''}
                        onChange={onChange}
                    />
                </div>
                <div className={`${classNameSpaceDefault}__infoContainer__company`}>
                    <div className={`${classNameSpaceDefault}__infoContainer__company__image`}>
                        <img src={userProfile.companyImage || 'https://via.placeholder.com/150'} alt="Company Avatar"/>
                    </div>
                    <div className={`${classNameSpaceDefault}__infoContainer__company__detail`}>
                        <div className={`${classNameSpaceDefault}__infoContainer__company__detail__name`}>
                            <input 
                                className={`${classNameSpace}__company__input`} 
                                placeholder="Company Name"
                                name="company"
                                type="text"
                                value={userProfile.company || ''}
                                onChange={onChange}
                            />
                        </div>
                        <div className={`${classNameSpaceDefault}__infoContainer__company__detail__description`}>
                            <input 
                                className={`${classNameSpace}__company__input`} 
                                placeholder="Company Motto"
                                name="companyCatchPhrase"
                                type="text"
                                value={userProfile.companyCatchPhrase || ''}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardForm;