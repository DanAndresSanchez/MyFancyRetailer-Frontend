import React from 'react';
import { InputGroupAddon, Input, InputGroup, FormGroup, Button } from "reactstrap";

const Searchbar = ({searchField, searchChange}) => {
    return (
        <div className="justify-content-md-center">
            <FormGroup>
                <InputGroup>
                    <Input type="text" placeholder="Search for Products" onChange={searchChange}/>
                    <InputGroupAddon addonType="prepend">
                        <Button type="submit">
                            <i className="nc-icon nc-zoom-split" /> Search
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>

        </div>
    );
}

export default Searchbar;