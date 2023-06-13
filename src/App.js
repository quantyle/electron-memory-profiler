import React from 'react';
import './App.css';
import { LineChart, Table } from './components';
import { Box, Grid } from '@mui/material';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      rows: []
    }
  }

  componentDidMount() {
    const serverUrl = 'ws://localhost:8080'
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
    let data = { time: currentUnixTimestamp, value: totalCPU }

    if (this.state.data.length) {

      if (this.state.data[this.state.data.length - 1].time < currentUnixTimestamp) {
        this.setState({
          data: [...this.state.data, data],
          rows: processes
        })
      }

    } else {
      this.setState({
        data: [data],
        rows: processes
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

    const { data, rows } = this.state;

    return (
      <div className="App">
          <Grid container>
            <Grid item xs={12} >
              <Box
                sx={{
                  // height: "100vh", 
                  // overflow: "scroll",
                  margin: "auto",
                  // marginTop: 2,
                  maxWidth: "800px",
                  padding: 2
                }}
              >
                <LineChart data={data} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  margin: "auto",
                  maxWidth: "800px"

                  // marginTop: 2,
                }}
              >
                <Table rows={rows} />
              </Box>
            </Grid>
          </Grid>
      </div>
    );
  }
}

export default App;
