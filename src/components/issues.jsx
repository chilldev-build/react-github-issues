import React, { Component } from "react";
import { Card, CardHeader, CardHeaderTitle, CardHeaderIcon, CardImage, Image, CardContent, Media, MediaContent, MediaLeft, Title, Subtitle, Content, Icon } from 'bloomer';
import { loadData } from "../utils/loadData"


class Issues extends Component {
    state = {
        issues: []
    }

    //lifecycle method
    async componentDidMount() {

        this.getIssues(); //call getQuote function
    }    

    getIssues = async issue => {
        const issues = await loadData(
            `https://api.github.com/repos/facebook/create-react-app/issues`
        );
            console.log(issues);
        this.setState({
            issues
        })
    }

    //render method
    render(){
        const { issues } = this.state; //deconstruction this. refers to the class we are in

        return (
            <>
                { issues.map((issues, index) => (

                    <Card key={ issues.id } >
                        <CardHeader>
                            <CardHeaderTitle>
                                Issue
                            </CardHeaderTitle>
                            <CardHeaderIcon>
                                <Icon className="fa fa-angle-down" />
                            </CardHeaderIcon>
                        </CardHeader>
                        <CardContent>
                            <Media>
                                <MediaContent>
                                    <a href={issues.url}><Title isSize={4}>{ issues.title}</Title></a>
                                </MediaContent>
                            </Media>
                            <Content>
                            { issues.body }
                            </Content>
                        </CardContent>
                    </Card>
                        // <p></p>
                        // <a href={issues.url}>{issues.url}</a>

                ))}
            </>
        );
    }
}


export default Issues;