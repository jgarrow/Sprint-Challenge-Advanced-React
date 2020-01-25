/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Component } from "react";
import styled from "@emotion/styled";

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

class App extends Component {
    constructor() {
        super();
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/players")
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({ ...this.state, players: res });
            })
            .catch(err => console.log("Error fetching data: ", err));
    }

    render() {
        return (
            <AppContainer>
                {this.state.players !== [] &&
                    this.state.players.map(player => (
                        <Card key={player.id}>
                            <h2 css={{ textAlign: "center" }}>{player.name}</h2>
                            <Grid>
                                <p
                                    css={{
                                        justifySelf: "flex-end"
                                    }}
                                >
                                    Player country:
                                </p>
                                <p>{player.country}</p>
                                <p
                                    css={{
                                        justifySelf: "flex-end"
                                    }}
                                >
                                    # internet searches:
                                </p>
                                <p>{player.searches}</p>
                            </Grid>
                        </Card>
                    ))}
            </AppContainer>
        );
    }
}

export default App;
