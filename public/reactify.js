socket.on("connection", function (data){
  // console.log(data);

/////////////style variables ///////////////////////
  var divStyle = {
    color: 'red',
    background: "lightblue",
    border: "1px solid black",
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

  var pStyle = {
    color: "green"
  }
 /////////////////////// /////////////////////// /////////////////////// ///////////////////////

  var HelloWorld = React.createClass({
          render: function() {
          return <div style={divStyle}>
              <h1>Hello User {data.id} from React</h1>
              <h1>{data}</h1>
              <p style={pStyle}>Text from REACT</p>
          </div>

      }
  });
  var example = document.getElementById("example")
  React.render(<HelloWorld />, example);
//////////////////////////
  var UsersInRoom = React.createClass({
          render: function() {
          return <div>
            <h1>Users in Room: {data.userNumber}</h1>
          </div>
        }
  });
  var users = document.getElementById("userDiv")
  React.render(<UsersInRoom />, users);

});/////////end socket data

class SendText extends React.Component {

  sendText() {
  console.log("hey");
  }
  render() {
    return (
      <div onClick={this.sendText}>
        <button>Click for Text</button>
      </div>
    );
  }
}

React.render(
  <SendText />,
  document.getElementById('button')
);
