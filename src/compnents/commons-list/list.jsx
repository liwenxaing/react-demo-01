import React,{Component} from 'react'
import Item from "../commons-item/item"

class List extends Component{
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div className="list-container">
                 <div style={{width:"100%",height:"auto",marginBottom:"5px"}} className="list-container-title">
                      <h2 style={{fontSize:"20px",fontWeight:100}}> 评论回复 </h2>
                 </div>
                 <div className="list-container-body" style={{width:"100%",height:"auto",minHeight:"50px"}}>
                      <Item items={this.props.itemValue}/>
                 </div>
            </div>
        )
    }
}

export default List;