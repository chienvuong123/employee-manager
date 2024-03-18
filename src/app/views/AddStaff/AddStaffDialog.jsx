import React, { useRef, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogActions,
    DialogTitle,
    Button,
    IconButton,
    Icon,
    Grid,
    Tabs,
    Tab,
} from '@material-ui/core'
import Information from './Information'
import Family from './Family'
import Certificate from './Certificate'
const AddStaffDialog = (props) => {
    const { handleOpenDialogClose, t } = props
    const [value, setValue] = useState('1')
    const formRef = useRef(null)

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    const handleSubmit = () => {
        if (value === '1') {
            formRef.current.submit()
        } else {
            handleOpenDialogClose()
        }
    }

    return (
        <div className="m-sm-24">
            <Dialog open={true} fullWidth={true} maxWidth={'lg'}>
                <DialogTitle id="draggable-dialog-title">
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item>
                            <h3>Thêm nhân viên</h3>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={handleOpenDialogClose}>
                                <Icon color="secondary">close</Icon>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Thông tin nhân viên" value="1" />
                        <Tab label="Quan hệ gia đình" value="2" />
                        <Tab label="Thông tin văn bằng" value="3" />
                    </Tabs>
                </DialogTitle>
                <DialogContent className="overflow">
                    {value === '1' && <Information formRef={formRef} t={t} />}
                    {value === '2' && <Family t={t} />}
                    {value === '3' && <Certificate t={t} />}
                </DialogContent>
                <DialogActions className="justify-center">
                    <Button variant="contained" color="primary">
                        Đăng ký
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Lưu
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleOpenDialogClose}>
                        Hủy
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddStaffDialog
