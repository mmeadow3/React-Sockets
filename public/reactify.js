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

////////////////////button logic/////////////////
class SendText extends React.Component {

///////////////sending data back to the server////////
  // sendText() {
  //     socket.emit("my other event", {
  //       message: "hello server"
  //     });
  // }
////////////////////////////////////////////

writeText(){
  console.log("working")
}



  render() {
    return (
      <div onClick={this.writeText}>
        <button>Click for Text</button>
      </div>
    );
  }
}

React.render(
  <SendText />,
  document.getElementById('button')
);

class DocumentInput extends React.Component {
  render() {
    return <input
      type="file"
      name={ `document-${ this.props.index }-document` }
    />;
  }
}





//////////////////This is for file uploading/////////////
class DocumentsFieldSet extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      documents: []
    }

    this.add = this.add.bind(this);
  }

  add() {
    const documents = this.state.documents.concat(DocumentInput);
    this.setState({ documents });
  }

  render () {
    const documents = this.state.documents.map((Element, index) => {
      return <Element key={ index } index={ index } />
    });

    return <div>
      <button onClick={ this.add }>Add File</button>

      <div className="inputs">
        { documents }
      </div>
    </div>
  }
}

React.render(
  <DocumentsFieldSet />,
  document.getElementById('container')
);
//////////////////////////////////////////////////////
