import React, { useState} from 'react'
import { data } from './../../data/data';
import Avatar from '@mui/material/Avatar';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
function Card() {
    const [persons, setPersons] = useState([...data]);
    const [buttonTitle, setButtontitle] = useState(['expertise', 'industry', 'tools']);
    const [clicked, setClicked] = useState(0);
    const [id, setId] = useState(persons[0].id);
    return (
        <>
            {
                persons.map((item, index) => {
                    return (
                        <div className="card" key={item.id}>
                            <div className="person">
                                <Avatar alt="Remy Sharp" src={item.avatar} />
                                <div className="personal-info">
                                    <h3><a href="#">{item.name}</a></h3>
                                    <div className="info">
                                        <p>{item.jops}</p>
                                        <div className="loc">
                                            <span><LocationOnOutlinedIcon />{item.location}</span>
                                            <span><LanguageOutlinedIcon />{item.languages}</span>
                                            <span>from {item.gelocation}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews">
                                    <span className="rating"><StarOutlinedIcon />{item.rating}</span>
                                    <span className='section'>{item.reviews} reviews / {item.sections} sections</span>
                                    <span className="paid-status">{item.paid}<CreditCardOutlinedIcon /></span>
                                </div>
                            </div>
                            <div className="person cl-2">
                                <div className="cl-3">
                                    <p>{item.description}</p>
                                    <div className="experience">
                                        <div className="exp-con">
                                            {
                                                buttonTitle.map((e_item, e_index) => {
                                                    return <button key={e_index} className={clicked == e_index ? 'active' : ''}>{e_item}</button>
                                                })
                                            }
                                        </div>
                                        <div className="expo-des">
                                            {
                                                item.expertise.map((e_item, index) => {
                                                    return <span key={index}>{e_item.title}</span>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="cl-4">
                                    <span><CalendarMonthOutlinedIcon />{item.avilability}</span>
                                    <a href="#">Request A Call</a>
                                    <a href="#">View Profile</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card