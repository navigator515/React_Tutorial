import React from 'react';

import CustomerDelete from './CustomerDelete';
class Customer extends React.Component{
    render(){
        return(
              
<section id="main_container">
<div className="inner">
    <div className="contents_box">
    <div className="contents">
                    <header className="top">
                        <div className="user_container">
                            <div className="profile_img">
                                <img src={this.props.image} alt="프로필이미지"/>
                            </div>
                            <div className="user_name">
                                    <div className="nick_name m_text">{this.props.name}</div>
                                <div className="country s_text">{this.props.birthday}</div>
                            </div>

                        </div>

                        <div >
                        {/* 삭제버튼 */}
                        <CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id} />
                        </div>
                    </header>

                    <div className="img_section">
                        <div className="trans_inner">
                            <div><img src={this.props.image} style={{width: '614px', height: '614px'}} alt="visual01"/></div>
                        </div>
                    </div>

                    <div className="bottom_icons">
                        <div className="left_icons">
                            <div className="heart_btn">
                                <div className="sprite_heart_icon_outline" name="39" data-name="heartbeat"></div>
                            </div>
                            <div className="sprite_bubble_icon"></div>
                            <div className="sprite_share_icon" data-name="share"></div>
                        </div>
                        <div className="right_icon">
                            <div className="sprite_bookmark_outline" data-name="bookmark"></div>
                        </div>
                    </div>

                    <div className="likes m_text">
                        좋아요
                        <span id="like-count-39">2,346</span>
                        <span id="bookmark-count-39"></span>
                        개
                    </div>

                    <div className="comment_container">
                        <div className="comment" id="comment-list-ajax-post37">
                            <div className="comment-detail">
                                <div className="nick_name m_text">{this.props.name}</div>
                                <div>{this.props.gender}</div>
                            </div>
                        </div>
                        <div className="small_heart">
                            <div className="sprite_small_heart_icon_outline"></div>
                        </div>
                    </div>

                    <div className="timer">1시간 전</div>

                    <div className="comment_field" id="add-comment-post37">
                        <input type="text" placeholder="댓글달기..."/>
                        <div className="upload_btn m_text" data-name="comment">게시</div>
                    </div>
                </div>
                </div>
                </div>
                </section>      
        )
    }
}
export default Customer;