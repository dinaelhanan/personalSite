
/*kodus to this codepen for the highlighted style:
https://codepen.io/carlitocenteno/pen/myxgod
*/
import React from "react"
import logo from "../../static/logo.png"
class Logo extends React.Component {
  render() {
    return (
        <p style={{textAlign: "center"}} ><img src={logo} /></p>
     
    )
  }
}

export default Logo