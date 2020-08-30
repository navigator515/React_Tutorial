import React ,{Component} from 'react';


class Login extends Component{
    render(){
        return(
<div id="main_container">
<div className="form_container">
    <div className="form">
        <h1 className="sprite_insta_big_logo title"></h1>
        <form action="#">
            <p className="login_user_name">
                <label for="user_name">사용자명:</label>
                <input type="text" id="user_name"/>
            </p>

            <p className="login_user_password">
                <label for="user_password">비밀번호:</label>
                <input type="text" id="user_password"/>
            </p>

            <input type="submit" id="submit_btn" value="로그인" class="submit_btn"/>
        </form>
   </div>
    <div className="bottom_box">
        <div>
            <span>아이디가 없으신가요?</span><a href="#">회원가입</a>
        </div>
    </div>
</div>
</div>
    )
    }
    
}
export default Login;