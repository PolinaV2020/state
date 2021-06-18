import React from "react";


class Checkbox extends React.Component {
  state = {
    checked: true,
    value: "-"
  }

  switchState = () => {
  if(this.state.checked){
    this.setState({checked: false, value: "+" })
  } else {
    this.setState({checked: true, value: "-"})
  }
  }

  render() {
    return (
      <div onClick={this.switchState}>{this.state.value}</div>
    )
  }
}


export default Checkbox