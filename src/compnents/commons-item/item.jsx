import React,{Component} from 'react'
import Pubsub from 'pubsub-js'

class Item extends Component{

    constructor(props) {
        super(props);
        this.delCommons = this.delCommons.bind(this);
    }

    delCommons = i => {
        console.log(i.target.dataset.id);
        Pubsub.publish("message",i.target.dataset.id);
    };

    render() {
        return (
            <div className="item-container" style={{height:"auto"}}>
                <ul style={{listStyle:"none",height:"auto"}}>
                    {this.props.items.length === 0 ? "暂无评论" :this.props.items.map((cur,i)=>{
                        return (
                            <li key={i} style={{marginBottom:"5px",padding:"10px",width:"90%",height:"40px",borderRadius:"2px",border:"1px solid #ddd"}}>
                                <label> {cur.uname}说： <a style={{float:"right"}} data-id={i} onClick={this.delCommons}>删除</a></label>
                                <br/>
                                <p style={{textIndent:"4em"}}> {cur.content} </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Item;