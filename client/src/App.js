import React, { Component } from 'react';
import axios from 'axios';



export default class App extends Component {
  constructor() {
    super();
  }

  handleClick() {

    console.log('Click happened');
    const filepathname = document.getElementById('filepicker').addEventListener('change', function (event) {
      let output = document.getElementById('listing');
      let files = event.target.files;
      const notes = event.target.files;
      debugger;
      console.log(notes);
      for (let i = 0; i < files.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = files[i].webkitRelativePath;
        output.appendChild(item);


      };
    }, false);




  }


  render() {

    return (

      <div className="App">
        <script src="script.js" defer></script>
        <h1>Welcome to App</h1>

        <input type="file" id="filepicker" name="fileList" webkitdirectory="true" onClick={() => this.handleClick()} mozdirectory="true" directory="true" />
        <ul id="listing"></ul>

      </div>

    );
  }
}