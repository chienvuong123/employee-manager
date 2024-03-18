import React, { useEffect, useState } from 'react'
import { Grid, Button, IconButton, Icon, TextField } from '@material-ui/core'
// import SearchIcon from '@mui/icons-material/Search'
import { Edit as EditIcon, Delete as DeleteIcon, Visibility as VisibilityIcon } from '@material-ui/icons'
import CustomTable from 'app/froms/CustomTable'
import { Breadcrumb, ConfirmationDialog } from 'egret'
import { useDispatch, useSelector } from 'react-redux'
import { searchByPageAction } from 'app/redux/actions/StaffAction'
import AddStaffDialog from './AddStaffDialog'
import { StaffListSelector, totalElementsSelector } from 'app/redux/selector/StaffSelector'
import moment from 'moment'
import { GENDER, SUBMIT_PROFILE_STATUS, TEMA } from 'app/constants/StaffConstant'

const Staff = ({ t }) => {
    const dataStaff = useSelector(StaffListSelector)
    const totalElements = useSelector(totalElementsSelector)
    const [pageSize, setPageSize] = useState(10)
    const [page, setPage] = useState(0)
    const [keyword, setKeyword] = useState('')
    const [staff, setStaff] = useState({})
    const [showOpenDialogEdit, setShowOpenDialogEdit] = useState(false)
    const [shouldConfirDialog, setShouldConfirDialog] = useState(false)
    const dispatch = useDispatch()

    const updatePage = () => {
        const objectPage = {
            keyword: keyword,
            pageIndex: page + 1,
            pageSize: pageSize,
            listStatus: 1,
        }
        dispatch(searchByPageAction(objectPage))
    }
    useEffect(() => {
        updatePage()
    }, [keyword, pageSize, page])

    const handleOpenDialogClose = () => {
        setShowOpenDialogEdit(false)
    }
    const handleOpenConfirClose = (item) => {
        setShouldConfirDialog(true)
        setStaff(item)
    }
    const handleAddStaff = () => {
        setShowOpenDialogEdit(true)
    }

    const handleEditStaff = () => {
        dispatch()
    }
    const handleDelete = () => {
        console.log(staff.id)
    }
    const Action = (props) => {
        const item = props.item
        return (
            <div>
                <IconButton size="small" onClick={() => handleEditStaff(item)}>
                    <EditIcon color="primary" fontSize="small" />
                </IconButton>

                <IconButton size="small" onClick={() => handleDelete(item)}>
                    <DeleteIcon color="secondary" fontSize="small" />
                </IconButton>

                <IconButton size="small">
                    <VisibilityIcon color="secondary" fontSize="small" />
                </IconButton>
            </div>
        )
    }

    let columns = [
        {
            title: 'Thao tác',
            field: 'custum',
            align: 'center',
            maxWidth: '110px',
            minWidth: '110px',
            render: (rowData) => <Action item={rowData} />,
        },
        {
            title: 'STT',
            align: 'center',
            maxWidth: '60px',
            minWidth: '60px',
            render: (rowData) => rowData.tableData?.id + 1,
        },
        {
            title: 'Mã nhân viên',
            field: 'code',
            align: 'center',
            maxWidth: '120px',
            minWidth: '120px',
        },
        {
            title: 'Tên nhân viên',
            field: 'name',
            align: 'center',
        },
        {
            title: 'Ngày sinh',
            field: 'dateOfBirth',
            align: 'center',
            render: (rowData) => moment(rowData.dateOfBirth).format('YYYY-MM-DD'),
        },
        {
            title: 'Giới tính',
            // field: 'gender',
            align: 'center',
            maxWidth: '90px',
            minWidth: '90px',
            render: (rowData) => {
                const nameGender = GENDER.find((item) => item.id === rowData.gender)
                return nameGender ? nameGender.name : ''
            },
        },
        {
            title: 'Nhóm',
            field: 'team',
            align: 'center',
            maxWidth: '150px',
            minWidth: '150px',
            render: (rowData) => {
                const nameTeam = TEMA.find((item) => item.id === rowData.team)
                return nameTeam ? nameTeam.name : ''
            },
        },
        {
            title: 'Điện thoại',
            field: 'phone',
            align: 'center',
        },
        {
            title: 'Địa chỉ',
            field: 'address',
            align: 'center',
        },
        {
            title: 'Trạng thái',
            field: 'submitProfileStatus',
            align: 'center',
            // render: (rowData) => rowData.submitProfileStatus,
            render: (rowData) => {
                const nameStatus = SUBMIT_PROFILE_STATUS.find((item) => item.id == rowData.submitProfileStatus)
                return nameStatus ? nameStatus.name : 'lỗi'
            },
        },
    ]
    return (
        <div className="m-sm-24">
            <div className="mb-sm-24">
                <Breadcrumb routeSegments={[{ name: 'Quản lí nhân viên', path: 'staff_manager/AddStaff' }]} />
            </div>
            <Grid container justify="space-between" spacing={2} className="mb-2">
                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Button variant="contained" onClick={handleAddStaff} color="primary">
                        Thêm mới
                    </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={4}>
                    <TextField
                        placeholder="Nhập từ khóa tìm kiếm"
                        onChange={(e) => setKeyword(e.target.value)}
                        className="w-100"
                    />
                </Grid>
            </Grid>
            <Grid>
                {showOpenDialogEdit && (
                    <AddStaffDialog open={showOpenDialogEdit} handleOpenDialogClose={handleOpenDialogClose} t={t} />
                )}
                <div>
                    {shouldConfirDialog && (
                        <ConfirmationDialog
                            title={t('general.confirm')}
                            t={t}
                            onConfirmDialogClose={handleOpenConfirClose}
                            onYesClick={handleDelete}
                            text={t('general.deleteConfirm')}
                            Yes={t('general.Yes')}
                            No={t('general.cancel')}
                        />
                    )}
                </div>
            </Grid>
            <CustomTable
                data={dataStaff}
                totalElements={totalElements}
                page={page}
                pageSize={pageSize}
                columns={columns}
                setPage={setPage}
                setPageSize={setPageSize}
            />
        </div>
    )
}

export default Staff
