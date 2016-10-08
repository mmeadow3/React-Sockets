socket.on("news", function (data){
  console.log(data);
  var HelloWorld = React.createClass({
          render: function() {
          return <div>
              <h1>Hello World from React</h1>
              <h1>this should equal "world" from the socket: {data}</h1>
              <p>Text from REACT</p>
          </div>

      }
  });
  var example = document.getElementById("example")
  React.render(<HelloWorld />, example);
})
