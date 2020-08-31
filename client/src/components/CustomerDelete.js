import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

class CustomerDelete extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    open: false
    }

this.handleClickOpen = this.handleClickOpen.bind(this)
this.handleClose = this.handleClose.bind(this);
    }
handleClickOpen() {
this.setState({
open: true
});
}

handleClose() {
this.setState({
open: false
})
}

deleteCustomer(id){

const url = '/api/customers/' + id;

fetch(url, {

method: 'DELETE'

});
this.props.stateRefresh();
this.setState({
    open: false
    })
    window.location.reload();   //전체 새로고침
}

render() {
return (
<div>
<Button variant="contained" onClick={this.handleClickOpen}>
삭제
</Button>

<Dialog onClose={this.handleClose} open={this.state.open}>

<DialogTitle onClose={this.handleClose}>
삭제 경고
</DialogTitle>

<DialogContent>
<Typography gutterBottom>
선택된 포스트가 삭제됩니다.
</Typography>
</DialogContent>

   <DialogActions>
    <Button variant="contained" color="primary" onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</Button>
    <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
    </DialogActions>

</Dialog>
</div>
)
}
}
export default CustomerDelete;
