import { Component } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";

class AlbumDetails extends Component{
    constructor() {
        super();
        this.state = {
            albumdata: [] // default empty array
        }
    }
    // addList: add a new task inside the state
    addList = (event)=> {
        event.preventDefault(); // stop default behaviour
        //console.log(event.target.albumTitle.value);
        const data = event.target,
        newTodo = {
            albumTitle: data.albumTitle.value,
            artist: data.artist.value,
            time: data.time.value
        }
        //console.log(newTodo);
        // updating the array but not re-rendering
        this.state.albumdata.push(newTodo);
        // updating state and re-render
        this.setState({
            albumdata: this.state.albumdata
        })
    }
    // delete todo from the array
    deleteList = (event)=> {
        // splice(indexNumber, howmanyTodelete)
        this.state.albumdata.splice(event.target.value, 1)
        this.setState({
            albumdata: this.state.albumdata
        })
    }
    render() {
        console.log(this.state.albumdata)
        return(
            <>
            <Form onSubmit={this.addList}>
                <Form.Group controlId="formBasicalbumTitle">
                    <Form.Label>Task Title:</Form.Label>
                    <Form.Control type="text"  name="albumTitle"/>
                </Form.Group>
                <Form.Group controlId="formBasicartist">
                    <Form.Label>Task artist:</Form.Label>
                    <Form.Control type="text" name="artist"/>
                </Form.Group>
                <Form.Group controlId="formBasicTime">
                    <Form.Label>Task Time:</Form.Label>
                    <Form.Control type="text" name="time"/>
                </Form.Group>
                <Button type="submit" className="btn btn-success">
                    Add Album
                </Button>
            </Form>

            <ListGroup>
                {
                    this.state.albumdata.map((task, index)=> {
                        return(
                            <ListGroup.Item key={index} variant="success">
                                 {task.albumTitle} at {task.time}, artist: {task.artist}
                                 <Button type="button" variant="danger" onClick={this.deleteList} value={index}>
                                     Delete
                                 </Button>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            </>
        )
    }
}

export default AlbumDetails;