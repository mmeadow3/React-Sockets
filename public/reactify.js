socket.on("news", function (data){
  console.log(data);


  var divStyle = {
    color: 'red',
    background: "lightblue",
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };


  var HelloWorld = React.createClass({
          render: function() {
          return <div style={divStyle}>
              <h1>Hello World from React</h1>
              <h1>this should equal "world" from the socket: {data}</h1>
              <p>Text from REACT</p>
          </div>

      }
  });
  var example = document.getElementById("example")
  React.render(<HelloWorld />, example);
})
