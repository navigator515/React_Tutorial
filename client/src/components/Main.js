import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Customer from "./Customer";


class Main extends Component{
    
      stateRefresh=()=>{
        this.setState({
          customers:'',
          completed:0
        });
        this.callApi()
        .then(res => this.setState({customers:res}))
        .catch(err => console.log(err));
      }
      
      componentDidMount(){
        this.timer =setInterval(this.progress, 20);
        this.callApi()
        .then(res => this.setState({customers:res}))
        .catch(err => console.log(err));
        
      }
      componentWillUnmount() {
        clearInterval(this.timer);
        }
      
      
        
      callApi= async() => {
        const response = await fetch('/api/customers');
        const body = await response.json();
        return body;
      }
      
      progress=() => {
        const{completed} =this.this.props.completed;
        this.setState({completed: completed >=100 ? 0 : completed+1});
      }
      
      handleValueChange=(e)=>{
        let nextState={};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState);
      }
        progress=() => {
            const{completed} =this.props.completed;
            this.setState({completed: completed >=100 ? 0 : completed+1});
          }
    render(){
        
        const filteredComponents = (data) => {
            data = data.filter((c) => {
            return c.name.indexOf(this.props.searchKeyword) > -1;
            });
            return data.map((c) => {
              return <Customer stateRefresh={this.stateRefresh} key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
            });
            }  
          
        return(
            <div >
            {this.props.customers ?
                filteredComponents(this.props.customers) :
                
                      <CircularProgress variant="determinate" value={this.props.completed} />
                    
                  }
              </div>
          )
    }
}

export default Main;