import CustomTable from 'app/froms/CustomTable'
import React, { useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator'
const Certificate = () => {
    const [certificate, setCertificate] = useState({})
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(10)

    const onChange = (e) => {
        setCertificate({
            ...certificate,
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
            title: 'Tên chứng chỉ',
            field: 'certificateName',
            align: 'center',
        },
        {
            title: 'Ngày cấp',
            field: 'issueDate',
            align: 'center',
        },
        {
            title: 'Lĩnh vực',
            field: 'field',
            align: 'center',
        },
        {
            title: 'Nội dung',
            field: 'content',
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
                                    Tên chứng chỉ
                                </span>
                            }
                            type="text"
                            size="small"
                            value={certificate?.certificateName || ''}
                            name="certificateName"
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
                                    Ngày cấp
                                </span>
                            }
                            type="text"
                            size="small"
                            value={certificate?.issueDate || new Date().toISOString().split('T')[0]}
                            name="issueDate"
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
                                    Lĩnh vực
                                </span>
                            }
                            type="text"
                            size="small"
                            value={certificate?.field || ''}
                            name="field"
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
                                    Nội dung
                                </span>
                            }
                            type="text"
                            size="small"
                            value={certificate?.content || ''}
                            name="content"
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

export default Certificate
