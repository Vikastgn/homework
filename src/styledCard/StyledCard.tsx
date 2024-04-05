import React from "react";
import {StyledButton} from "./../components/StyledButton";
import {Box} from "./../components/Box.styled";
import {Text} from "./../components/Text";
import { Title } from "./../components/Title"
import { Image } from './../components/Image';
import { Card } from './../components//Card';

type StyledCardPropsType = {
    title?: string,
    text?: string,
    src?: string
}

export function StyledCard(props: StyledCardPropsType) {
    return (
            <Card>
                <Image src={props.src} alt=""/>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                    <Box>
                        <StyledButton type="primary">See more</StyledButton>
                        <StyledButton type="secondary">Save</StyledButton>
                        {/*<SubButton>Save</SubButton>*/}
                    </Box>
            </Card>
    )

}


