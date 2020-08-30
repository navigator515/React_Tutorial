import React from 'react';
import {post} from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles'
import { TextareaAutosize } from '@material-ui/core';


const styles=theme=>({
    hidden:{
        display:'none'
    }
});

class CustomerAdd extends React.Component{

    constructor(props){
        super(props);
        this.state={
            file:null,
            userName:'',
            birthday:'',
            gender:'',
            job:'',
            fileName: '',
            open :false
        }
    }

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
                fileName:'',
                open:false
            })
            // window.location.reload();  //전체 새로고침 
            this.props.stateRefresh();
    }

 //하나의 파일만 선택해서 올릴 수 있도록 구성  그래서 0인덱스..
 handleFileChange = (e) => {
     this.setState({
         file : e.target.files[0],  
         fileName : e.target.value

     })
 }
handleValueChange=(e)=>{
    let nextState={};
    nextState[e.target.name]=e.target.value;
    this.setState(nextState);
}

handleClickOpen=()=> {

    this.setState({    
    open: true    
    });
        }


handleClose=()=>{
    this.setState({
        file:null,
        userName:'',
        birthday:'',
        gender:'',
        job:'',
        fileName:'',
        open:false
    })

}
    render(){
    const{classes}=this.props;
        return(
            <div>
                <div class="sprite_camera_icon" onClick={this.handleClickOpen} ></div>
                
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle align="center">게시물 추가</DialogTitle>
                    <DialogContent align="center">
                     <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                    <label htmlFor="raised-button-file">
                    <Button variant="contained" color="primary" component="span" name="file">
                    {this.state.fileName === ''? "게시글 이미지 선택" : this.state.fileName}
                    </Button>
                    </label><br/>


                      <TextField label="계정" type="text" name="userName" value={this.state.userName} onChange={this.state.userName} onChange ={this.handleValueChange}/><br/>
                         <TextField label="장소" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/><br/>
                        <textarea cols="30" rows="10"label="내용" type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                       {/* <TextField label="직업" type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/> */}

                        </DialogContent>
                    <DialogActions>

                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                  </DialogActions>

                </Dialog>
            </div>
            
            // <form onSubmit={this.handleFormSubmit}>
            //     <h1>고객추가</h1>
            //     프로필 이미지 : <input type="file" name ="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
            //     이름 : <input type="text" name="userName" value={this.state.userName} onChange={this.state.userName} onChange ={this.handleValueChange}/><br/>
            //     생년월일 : <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
            //     성별 : <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
            //     직업 :  <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/>
            //     <button type="submit">추가하기</button>
        
            // </form>
        )
    }


}
export default withStyles(styles)(CustomerAdd);