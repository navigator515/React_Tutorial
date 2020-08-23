import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';
class Customer extends React.Component{
    render(){
        return(
                // <TableRow>
                //     <TableCell>{this.props.id}</TableCell>
                //     <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                //     <TableCell>{this.props.name}</TableCell>
                //     <TableCell>{this.props.birthday}</TableCell>
                //     <TableCell>{this.props.gender}</TableCell>
                //     <TableCell>{this.props.job}</TableCell>
                //     <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id} /></TableCell>
                // </TableRow>
<section id="main_container">
<div class="inner">
    <div class="contents_box">
    <div class="contents">
                    <header class="top">
                        <div class="user_container">
                            <div class="profile_img">
                                <img src={this.props.image} alt="프로필이미지"/>
                            </div>
                            <div class="user_name">
                                    <div class="nick_name m_text">{this.props.name}</div>
                                <div class="country s_text">{this.props.birthday}</div>
                            </div>

                        </div>

                        <div >
                            {/* <ul class="toggle_box">
                               <li><input type="submit" class="follow" value="팔로우" data-name="follow"/></li>
                                <li><a></a>수정</li>
                                <li>삭제</li>
                            </ul> */}

                                    <CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id} />
                        </div>
                    </header>

                    <div class="img_section">
                        <div class="trans_inner">
                            <div><img src={this.props.image}  alt="visual01"/></div>
                        </div>
                    </div>

                    <div class="bottom_icons">
                        <div class="left_icons">
                            <div class="heart_btn">
                                <div class="sprite_heart_icon_outline" name="39" data-name="heartbeat"></div>
                            </div>
                            <div class="sprite_bubble_icon"></div>
                            <div class="sprite_share_icon" data-name="share"></div>
                        </div>
                        <div class="right_icon">
                            <div class="sprite_bookmark_outline" data-name="bookmark"></div>
                        </div>
                    </div>

                    <div class="likes m_text">
                        좋아요
                        <span id="like-count-39">2,346</span>
                        <span id="bookmark-count-39"></span>
                        개
                    </div>

                    <div class="comment_container">
                        <div class="comment" id="comment-list-ajax-post37">
                            <div class="comment-detail">
                                <div class="nick_name m_text">{this.props.name}</div>
                                <div>{this.props.gender}</div>
                            </div>
                        </div>
                        <div class="small_heart">
                            <div class="sprite_small_heart_icon_outline"></div>
                        </div>
                    </div>

                    <div class="timer">1시간 전</div>

                    <div class="comment_field" id="add-comment-post37">
                        <input type="text" placeholder="댓글달기..."/>
                        <div class="upload_btn m_text" data-name="comment">게시</div>
                    </div>
                </div>
                </div>
                </div>
                </section>

       
        )
    }
}





export default Customer;