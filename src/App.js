import React from 'react';
import './App.css';
import { LineChart } from './components';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const serverUrl = 'ws://localhost:8080'
    // ticks websocket
    this.wss = new WebSocket(serverUrl);
    this.wss.addEventListener("message", this.handleSocketMessage);
    this.wss.addEventListener("error", this.handleSocketError);
  }

  handleSocketMessage = (msg) => {
    const processes = JSON.parse(msg.data);
    console.log(processes)

    let totalCPU = 0.0;
    // console.log(processes)
    processes.forEach(proc => {
      totalCPU += proc.cpu
    });
    console.log(totalCPU)
    const currentUnixTimestamp = Math.floor(Date.now() / 1000);
    console.log(currentUnixTimestamp)
    let data = { time: currentUnixTimestamp, value: totalCPU}

    if(this.state.data.length){

      if(this.state.data[this.state.data.length - 1].time < currentUnixTimestamp){
        this.setState({
          data: [...this.state.data, data]
        })
      }

    } else {
      this.setState({
        data: [data]
      })
    }

  }

  handleSocketError = (error) => {
    console.log(error);
  }

  componentWillUnmount() {
    this.wss.close();
    this.wss.removeEventListener("message", this.handleSocketMessage);
    this.wss.removeEventListener("error", this.handleSocketMessage);
  }

  render() {

    const { data } = this.state;

    return (
      <div className="App">
        <div>
          <LineChart data={data}/>
        </div>
      </div>
    );
  }
}

export default App;
