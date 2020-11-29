import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class TextInputBox extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: '',
        };
    }

    handleChange = (e: any) => {
        this.setState({value: e.target.value});
    }

    render() {
        return (
          <div>
                <Form className="mx-5 mt-3 center-mobile text-center col-6">
                    <FormGroup >
                        <Label>Input Text</Label>
                        <Input type="textarea" onChange={this.handleChange} value={this.state.value} name="text" />
                    </FormGroup>
                    <Button
                        onClick={() => 
                            this.props.calculateWordCount(this.state.value)
                        }
                    >
                        Count Words
                    </Button>
                </Form>
          </div>
        );
    }
}
