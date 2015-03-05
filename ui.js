/**
* UI Code
* This stuff is for rendering the text box using react
* More awesome input 
* @author: Arjo Chakravarty
*/
var MathInput = React.createClass({displayName: 'MathInput',
  getInitialState: function(){
    return ({
      text: ""
    });
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
    evaluateEnterredText(this.state.text);
  },
  render: function() {
    return (
      React.createElement('form', {className: "form-group"},
        React.createElement('TextArea', {value: this.state.text, onChange: this.onChange})
      )
    );
  }
});