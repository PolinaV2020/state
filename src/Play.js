import React from "react";



class Play extends React.Component {
  state = {
    value: "No repeat", 
  }


  onRepeat = () => {
  if(this.state.value === "No repeat") {
    this.setState({value: "Repeat"})
  } else if (this.state.value === "Repeat") {
    this.setState({value: "Repeat again"})
  } else {
    this.setState({value: "No repeat"})
  }
  }


  render() {
    return (
  <div onClick={this.onRepeat}>{this.state.value}</div>
    )
}
}


export default Play