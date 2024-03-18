import CustomTable from 'app/froms/CustomTable'
import React, { useState } from 'react'
import { ValidatorForm, TextValidator, SelectValidator, ValidatorActions } from 'react-material-ui-form-validator'
import { Grid, Button } from '@material-ui/core'
const Family = () => {
    const [family, setFamily] = useState({})
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const onChange = (e) => {
        setFamily({
            ...family,
            [e.target.name]: e.target.value,
        })
    }

    let columns = [
        {
            title: 'Thao tác',
            field: 'custom',
            align: 'center',
        },
        {
            title: 'STT',
            align: 'center',
        },
        {
            title: 'Tên người thân',
            field: 'name',
            align: 'center',
        },
        {
            title: 'Ngày sinh',
            field: 'dateOfBirth',
            align: 'center',
        },
        {
            title: 'Giới tính',
            field: 'gender',
            align: 'center',
        },
        {
            title: 'Quan hệ',
            field: 'relationShip',
            align: 'center',
        },
        {
            title: 'Số điện thoại',
            field: 'phoneNumber',
            align: 'center',
        },
        {
            title: 'Địa chỉ',
            field: 'address',
            align: 'center',
        },
    ]
    return (
        <div>
            <ValidatorForm>
                <Grid container spacing={2} lg={12} md={12}>
                    <Grid item lg={4} md={4}>
                        <TextValidator
                            className="w-100 mb-4"
                            label={
                                <span>
                                    <span className="text-red">*</span>
                                    Tên người thân
                                </span>
                            }
                            type="text"
                            size="small"
                            value={family?.name || ''}
                            name="name"
                            onChange={(e) => onChange(e)}
                            validators={['required']}
                            errorMessages={['Không được để trống mã nhân viên']}
                        />
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <SelectValidator
                            className="w-100 mb-4"
                            label={
                                <span>
                                    <span className="text-red">*</span>
                                    Giới tính
                                </span>
                            }
                            type="text"
                            size="small"
                            value={family?.gender || ''}
                            name="gender"
                            onChange={(e) => onChange(e)}
                            validators={['required']}
                            errorMessages={['Không được để trống mã nhân viên']}
                        ></SelectValidator>
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <TextValidator
                            className="w-100 mb-4"
                            label={
                                <span>
                                    <span className="text-red">*</span>
                                    Ngày sinh
                                </span>
                            }
                            type="date"
                            size="small"
                            value={family?.dateOfBirth || new Date().toISOString().split('T')[0]}
                            name="dateOfBirth"
                            onChange={(e) => onChange(e)}
                            validators={['required']}
                            errorMessages={['Không được để trống mã nhân viên']}
                        />
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <SelectValidator
                            className="w-100 mb-4"
                            label={
                                <span>
                                    <span className="text-red">*</span>
                                    Quan hệ
                                </span>
                            }
                            type="text"
                            size="small"
                            value={family?.relationShip || ''}
                            name="relationShip"
                            onChange={(e) => onChange(e)}
                            validators={['required']}
                            errorMessages={['Không được để trống mã nhân viên']}
                        ></SelectValidator>
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <TextValidator
                            className="w-100 mb-4"
                            label={
                                <span>
                                    <span className="text-red">*</span>
                                    Số CCCD/CMTND
                                </span>
                            }
                            type="number"
                            size="small"
                            value={family?.citizenIdentificationNumber || ''}
                            name="citizenIdentificationNumber"
                            onChange={(e) => onChange(e)}
                            validators={['required']}
                            errorMessages={['Không được để trống mã nhân viên']}
                        />
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <TextValidator
                            className="w-100 mb-4"
                            label={
                                <span>
                                    <span className="text-red">*</span>
                                    Số điện thoại
                                </span>
                            }
                            type="number"
                            size="small"
                            value={family?.phoneNumber || ''}
                            name="phoneNumber"
                            onChange={(e) => onChange(e)}
                            validators={['required']}
                            errorMessages={['Không được để trống mã nhân viên']}
                        />
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <TextValidator
                            className="w-100 mb-4"
                            label={
                                <span>
                                    <span className="text-red">*</span>
                                    Email
                                </span>
                            }
                            type="number"
                            size="small"
                            value={family?.email || ''}
                            name="email"
                            onChange={(e) => onChange(e)}
                            validators={['required']}
                            errorMessages={['Không được để trống mã nhân viên']}
                        />
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <TextValidator
                            className="w-100 mb-4"
                            label={
                                <span>
                                    <span className="text-red">*</span>
                                    Địa chỉ
                                </span>
                            }
                            type="text"
                            size="small"
                            value={family?.address || ''}
                            name="address"
                            onChange={(e) => onChange(e)}
                            validators={['required']}
                            errorMessages={['Không được để trống mã nhân viên']}
                        />
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <Button variant="contained" color="primary">
                            Thêm
                        </Button>
                        <Button variant="contained" color="secondary">
                            Hủy
                        </Button>
                    </Grid>
                </Grid>
            </ValidatorForm>
            <CustomTable
                columns={columns}
                page={page}
                pageSize={pageSize}
                setPage={setPage}
                setPageSize={setPageSize}
            />
        </div>
    )
}

export default Family
