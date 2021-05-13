import React from 'react'
import ListContacts from './ListContacts'
import './index.css'

class App extends React.Component {
  //This will only function with babel
  state = {
    contacts: [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }
  //Remove function that updates UI and remove an element from the list
  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
}

  render() {
    return (
      <div> 
        <ListContacts 
        contacts={this.state.contacts}
        onDeleteContact={this.removeContact}

        />
      </div>
    )
  }
}

export default App;
