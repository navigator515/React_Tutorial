import React ,{Component} from 'react';
import { render } from '@testing-library/react';
import { Button } from '@material-ui/core';
import {post} from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles'
import './NewPost.css'
import {BrowserRouter, Link} from 'react-router-dom';
class NewPost extends Component{
    constructor(props){
        super(props);
        this.state={
            file:null,
            userName:'',
            birthday:'',
            gender:'',
            job:'',
            fileName: '',
            open :false,
            previewURL : ''
        }
        
    }
    /////////////////////////////////////////
   

  
//////////////////////////////////////////

    addCustomer=() =>{
        const url='/api/customers';
        const formData=new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);

        const config={
            headers:{
                'content-type': 'multipart/form-data'     // 전달하고자 하는 데이터에 file 이 포함되어 있으면 설정해줘야하는 요소중 하나 
            }
        }
        return post(url,formData,config);
    }

    handleFormSubmit=(e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response)=>{
                console.log(response.data);
                this.props.stateRefresh();
            })
            this.setState({
                file:null,
                userName:'',
                birthday:'',
                gender:'',
                job:'',
                fileName:''
               
            })
             window.location.reload();  //전체 새로고침 
            this.props.stateRefresh();
    }
 //하나의 파일만 선택해서 올릴 수 있도록 구성  그래서 0인덱스..
//  단순 파일만 읽기
//  handleFileChange = (e) => {
//     this.setState({
//         file : e.target.files[0],  
//         fileName : e.target.value

//     })
// }



    handleValueChange=(e)=>{
        let nextState={};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState);
    }

    //이미지 파일 읽어서 미리보기 기능 추가
      handleFileOnChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        this.setState({
        
            fileName : e.target.value
            
          })
        reader.onloadend = () => {
          this.setState({
            file : file,
            
            previewURL : reader.result
          })
        }
        reader.readAsDataURL(file);
      }

render(){
   
    return(

<div id="main_container">

<div className="post_form_container">
    <form action="#" className="post_form">
        <div className="title">
            NEW POST
        </div>
            <div className="preview">

            {this.state.file ?
      <img className='profile_preview' src={this.state.previewURL} style={{width: '300px', height: '300px', margin:'79px' }}></img>
    :
    
        <div class="preview">
        <div class="upload">
            <div class="post_btn" >
                <div className="plus_icon"><span></span>
                    <span></span>
                </div>
                <p>포스트 이미지 추가</p>
                <canvas id="imageCanvas"></canvas>
            </div>
        </div>
    </div>
    }
    
            
        </div>
            {/* <p>
            <input accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
     
         </p> */}
         

    <div>
      <input type='file' 
          accept='image/*' 
          name='profile_img' 
          
          file={this.state.file} 
          value={this.state.fileName}
          onChange={this.handleFileOnChange}>
      </input>
    
    </div>
<div>
<p> </p>
         <p>
            계정: <input type="text" name="userName" placeholder="ID 입력해주세요" cols="50"rows="5" value={this.state.userName} onChange={this.handleValueChange}/>
         </p>
         <p>
            장소: <input type="text" name="birthday" placeholder="장소 입력해주세요" cols="50" rows="5" value={this.state.birthday} onChange={this.handleValueChange}/>
         </p>
         <p> </p>
         </div>
        <p>

                {/* <textarea name="content" id="text_field" cols="50" rows="5" placeholder="140자 까지 등록 가능합니다.
    #태그명 을 통해서 검색 태그를 등록할 수 있습니다.
    예시 : I # love # insta!"></textarea> */}
                        <textarea cols="50" rows="5"label="내용" type="text" name="gender" value={this.state.gender} placeholder="140자 까지 등록 가능합니다.
#태그명 을 통해서 검색 태그를 등록할 수 있습니다.
        예시 : I # love # insta!" onChange={this.handleValueChange}/><br/>
        

        </p>
   <div><Button class="submit_btn" type="submit" value="저장" onClick={this.handleFormSubmit}>저장<Link to="/"></Link></Button></div>
    </form>

</div>


</div>



    )
}
}

export default NewPost;