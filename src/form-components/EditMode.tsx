import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    let [edit, setEdit] = useState<boolean>(false);
    let [name, setName] = useState<string>("Your Name");
    let [isStudent, setStudent] = useState<boolean>(true);
    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="in-editMode-check"
                label="editMode?"
                checked={edit}
                onChange={updateEdit}
            />
            {edit ?
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                    <Form.Group controlId="edit-name">
                        <Form.Label>Name: </Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={updateName}
                        />
                    </Form.Group>
                </div>
            :   <div>
                    {name} {isStudent ? "is a student" : "is not a student"}.
                </div>
            }
        </div>
    );
}
