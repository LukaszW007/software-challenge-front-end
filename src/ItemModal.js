import React from "react";
import {Modal} from "react-bootstrap";

const ItemModal = ({scan, onItemChange, ...rest}) => {

    return (
        <Modal {...rest} bsSize="large">
            <Modal.Header closeButton>
                <Modal.Title>Edit {scan.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="text"
                    value={scan.name}
                    name="name"
                    onChange={onItemChange(scan.id)}
                />
                <input
                    type="text"
                    value={scan.userName}
                    name="userName"
                    onChange={onItemChange(scan.id)}
                />
                <input
                    type="number"
                    value={scan.elevationMax}
                    step={0.01}
                    name="elevationMax"
                    onChange={onItemChange(scan.id)}
                />
                <input
                    type="number"
                    value={scan.elevationMin}
                    step={0.01}
                    name="elevationMin"
                    onChange={onItemChange(scan.id)}
                />

            </Modal.Body>
            <Modal.Footer/>
        </Modal>
    );
};

export default ItemModal;
