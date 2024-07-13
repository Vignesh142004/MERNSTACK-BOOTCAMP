import { Component } from "react";
class Components extends Component
{
    constructor(props)
    {
        super(props);
        this.state={count:0};
    }
    increment=()=>{
        this.setState(prevstate=>({count:prevstate.count+1}));
    }
    render()
    {
        return(
            <div>
                <p>This Counter is Implemented using Class Components in React.</p>
                <buttton onClick={this.increment}>Increment</buttton>
                {this.state.count}
                <br/>
            </div>
        )
        
    }
}
export default Components;