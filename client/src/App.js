import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import "./App.css";

import DarkModeToggle from "./components/DarkModeToggle";

const AppContainer = styled.div`
    width: 80%;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const Card = styled.div`
    width: 300px;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 1rem 0.5rem;
    margin: 10px;
    box-shadow: 0px 0px 5px 0px lightgrey;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-gap: 10px;
`;

const FlexEnd = styled.p`
    justify-self: flex-end;
`;

class App extends Component {
    constructor() {
        super();
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/api/players")
            .then(res => {
                this.setState({ ...this.state, players: res.data });
            })
            .catch(err => console.log("Error fetching data: ", err));
    }

    render() {
        return (
            <AppContainer>
                <DarkModeToggle />
                {this.state.players !== [] &&
                    this.state.players.map(player => (
                        <Card key={player.id} data-testid="card">
                            <h2
                                data-testid="player-name"
                                style={{ textAlign: "center" }}
                            >
                                {player.name}
                            </h2>
                            <Grid>
                                <FlexEnd>Player country:</FlexEnd>
                                <p>{player.country}</p>
                                <FlexEnd># internet searches:</FlexEnd>
                                <p>{player.searches}</p>
                            </Grid>
                        </Card>
                    ))}
            </AppContainer>
        );
    }
}

export default App;
