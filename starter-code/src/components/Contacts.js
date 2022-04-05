import React, { Component } from 'react'
import contacts from '../contacts.json'
import ContactCard from './ContactCard'

export class Contacts extends Component {
    constructor(){
        super()
        this.state = {
            info: [
                contacts.slice(0, 5)
            ],
            id: 0
        }
    }

    randomHandler = () => {
        let contactsCopy = this.state.info[0]
        let randomContact = contacts[Math.floor(Math.random() * contacts.length - 1)] 
        contactsCopy.push(randomContact)
        this.setState({ info: [contactsCopy] })
        console.log(contactsCopy);
    }

    sortHandler = () => {
        let contactsCopy = this.state.info[0];
        contactsCopy.sort(function(a, b) {
            let textA = a.name;
            let textB = b.name;
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
        this.setState({ info: [contactsCopy] })
    }

  render() {
      console.log(typeof this.state.info[0]);
    return (
      <div>
        <button onClick={this.randomHandler}>Add Random</button>
        <button onClick={this.sortHandler}>Sort by name</button>
          <table className="contacts-table">
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
              {
                  this.state.info[0].map((oneContact, index) => {
                      return(
                          <ContactCard key={index} {...oneContact}></ContactCard>
                      )
                  })
              }
          </table>
      </div>
    )
  }
}

export default Contacts