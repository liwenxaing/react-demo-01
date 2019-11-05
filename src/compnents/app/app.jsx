import React,{Component} from 'react'
import "./app.css"
import Add from '../commons-add/add'
import List from "../commons-list/list";
class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            form: []
        };
        this.handlerAddCallback=this.handlerAddCallback.bind(this);
    }

    handlerAddCallback(form){
        this.setState({
            form:form
        });
        console.log("调用.....")
    }


    render() {
        return (
            <div className="app-container">
                <div className="app-header">
                    <h3 className="app-header-h3">Lusn -  React Demo 01 </h3>
                </div>
                <div className="app-main">
                   <div className="app-main-left">
                                <Add addValue={this.handlerAddCallback}/>
                   </div>
                    <div className="app-main-right">
                        <List itemValue={this.state.form}/>
                    </div>
                </div>
                <div className="app-footer">
                    &copy;<a href="http://liwenxiang.top" style={{textDecoration:"none",color:"white"}} target="_blank"> 更多教程地址点击访问</a> ©2019 豫ICP备19006382号
                </div>
            </div>
        )
    }
}

export default App;