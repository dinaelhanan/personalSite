
/*kodus to this codepen for the highlighted style:
https://codepen.io/carlitocenteno/pen/myxgod
*/
import React from "react"
class Header extends React.Component {
  render() {
    return (
        <div class="header">
      <ul>
      <em><a href="http://dinaelhanan.com"><li>> home</li></a></em>
     <em><a href="http://dinaelhanan.com/blog.js"><li>> the blog</li></a></em>
      <em><a href="http://dinaelhanan.com/about.js"><li>> more on me</li></a></em>
    </ul>
     </div>
    )
  }
}

export default Header