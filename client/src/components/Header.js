import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class Header extends Component{
    
    render(){
        const { classes } = this.props;
        return(
    <header id="header">
        <section className="inner">

            <h1 className="logo">
                <Link to="/">
                    <div className="sprite_insta_icon"></div>
                    <div className="sprite_write_logo"></div>
                </Link>
            </h1>

            <div className="search_box">
                <input type="text" placeholder="검색" id="search-field" 
                      classes={{
                      root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      name="searchKeyword"
                      value={this.props.searchKeyword}
                      onChange={this.handleValueChange}/>

                <div className="fake_field" >
                    <span className="sprite_small_search_icon"></span>
                    
                    <span >검색</span>
                </div>
            </div>

            <div className="right_icons">
            
                <Link to="/NewPost"onClick={function(){
                        console.log('camera ');
                   
                    this.props.onChangePage();      
                }.bind(this)}>
                    <div className="sprite_camera_icon"/></Link>

                <Link to="/login" onClick={function(){
                    console.log('camera ');
                  
                    this.props.onChangePage();
                }.bind(this)}>
                <div className="sprite_compass_icon"></div></Link>

                <Link to="/follow"><div className="sprite_heart_icon_outline"></div></Link>
                <Link to="/profile"><div className="sprite_user_icon_outline"></div></Link>
            </div>
        </section>
    </header>
        )
    }
}
export default Header;