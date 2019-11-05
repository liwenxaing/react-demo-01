import React,{Component} from 'react'
import "./add.css"
import Pubsub from 'pubsub-js'

class Add extends Component{

    constructor(props) {
        super(props);
        this.state = {
            values:[]
        };
        this.handlerSubmit = this.handlerSubmit.bind(this);
        Pubsub.subscribe("message",(msgName,data)=>{
              let tv = this.state.values;
              tv.splice(data,1);
              this.setState({
                  values:tv
              });
              this.props.addValue(this.state.values);
        });
    }

    handlerSubmit = event => {
        event.preventDefault();
        let newUNameValue = event.target.uname.value;
        let newContentValue = event.target.uname.value;
        if (newUNameValue == null || newUNameValue.length <= 0 || newUNameValue === ""){
             alert("不可以为空");
        }else{
             let {values} = this.state;

             this.form = {
                 uname:newUNameValue,
                 content:newContentValue
             };

             values.push(this.form);

             this.setState({
                 values
             });

             this.props.addValue(this.state.values);
        }
        event.target.uname.value = "";
        event.target.content.value = "";
    };

    render() {
        return (
            <div className="add-container" >
               <form onSubmit={this.handlerSubmit} className="add-form">
                   <div className="add-form-uname">
                       <label htmlFor="uname">用户名</label>
                       <input type="text" name="uname" required placeholder="请输入姓名" id="uname"/>
                   </div>
                   <div className="add-form-content">
                       <label htmlFor="content">评论内容</label>
                       <input className="add-form-content-textarea"  name="content" placeholder="请输入评论"  required />
                   </div>
                   <div className="add-form-submit">
                       <button type="submit"> 提交 </button>
                   </div>
               </form>
            </div>
        )
    }
}

export default Add;