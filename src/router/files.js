import React, { Component } from 'react'
import axios from 'axios';
export default class Files extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            holy: [],
        };
    }
    componentDidMount() {
        axios
            .get("https://servicesemployeemanagement.herokuapp.com/api/holiday")
            .then(result => {
                const holy = result.data
      this.setState({ holy })
            });
    }
    deleteHoliday(holidayId) {
        console.log("in")
        axios.delete(`https://servicesemployeemanagement.herokuapp.com/api/holiday/delete/${holidayId}`)
            .then(res => {
                const holy = this.state.holy.filter(item => item.holidayId !== holidayId);
                this.setState({ holy })
            })
    }
    
    render() {
        return (
         <div class ="za">
            <h3>  </h3>
            {this.state.holy.map((item => (
                <div key={item.holidayId}>
                 <h2>{item.date}</h2>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <img src={item.description} />
                    {/* <p>{item.date}</p>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <img src={item.image} width={"50px"} height={"50px"}/> */}
                    <br></br>
                    <br></br>


                    // nj jn kj 
                    <button class="oo" onClick={(e) => this.deleteHoliday(item.holidayId, e)}>Delete</button>
                    {/* <p>_ _ _ _</p> */}
                </div>
            )))}
        </div>
        )
    }
}