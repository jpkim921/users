import React from "react";

// export default class User extends React.Component {
//   render() {
//     console.log(this.props.user);
//     return (
//       <div className="user-block">
//         <div className="user-name">
//           <p>{this.props.user.name}</p>
//         </div>
//         <div className="user-id">
//           <p>{"PI-" + this.props.user.id}</p>
//         </div>
//         <div className="user-admit-number">
//           <p>
//             {"AN-" + this.props.user.id + Math.round(Math.random() * 1000000)}
//           </p>
//         </div>
//         <div className="user-phone">
//           <p>{this.props.user.phone}</p>
//         </div>
//         <div className="user-email">
//           <p>{this.props.user.email}</p>
//         </div>
//       </div>
//     );
//   }
// }

export default class User extends React.Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="user-grid-container">
        <div>{this.props.user.name}</div>
        <div>{"PI-" + this.props.user.id}</div>
        <div className="user-admit-number">
          {"AN-" + this.props.user.id + Math.round(Math.random() * 1000000)}
        </div>
        <div className="user-phone">{this.props.user.phone}</div>
        <div className="user-email">{this.props.user.email}</div>
      </div>
    );
  }
}
