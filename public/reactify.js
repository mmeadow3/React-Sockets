
var HelloWorld = React.createClass({
        render: function() {
        return <div>
            <h1>Hello World from React</h1>
            <p>Text from REACT</p>
        </div>

    }
});
var example = document.getElementById("example")
React.render(<HelloWorld />, example);
