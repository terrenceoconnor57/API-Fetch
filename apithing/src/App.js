import React from 'react';
import './App.css';

/**
 * App
 *
 * Simple react js fetch example
 */
class App extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            items: []

        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    buttonApi = () => {

        fetch('https://jsonterrence.s3.amazonaws.com/data.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json

                })
            }).catch((err) => {
                console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {

        const { isLoaded, items } = this.state;




        return (
            <div className="App">
            <button onClick = {this.buttonApi}>Click</button>
                <div className = 'cards'>
                    {items.map(item => (
                      <nav className = 'wrap'>
                        <li key={item.id} className = 'list'>
                            Name: {item.name} | Email: {item.email}

                        </li>
                        </nav>
                    ))}
                </div>
            </div>
        );

    }

}

export default App;
