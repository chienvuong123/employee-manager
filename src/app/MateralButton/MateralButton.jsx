import { IconButton, Icon } from '@material-ui/core'
import React from 'react'
export const EDIT_ACTION = 0
export const DELETE_ACTION = 1
function MaterialButton(props) {
    const item = props.item
    return (
        <div>
            <IconButton size="small" onClick={() => props.onSelect(item, 0)}>
                <Icon fontSize="small" color="primary">
                    edit
                </Icon>
            </IconButton>
            <IconButton size="small" onClick={() => props.onSelect(item, 1)}>
                <Icon fontSize="small" color="error">
                    delete
                </Icon>
            </IconButton>
        </div>
    )
}

export default MaterialButton
