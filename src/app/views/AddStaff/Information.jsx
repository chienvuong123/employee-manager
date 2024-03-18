import React, { useState } from 'react'
import { Grid, Button, IconButton, MenuItem } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator'
import { useDispatch } from 'react-redux'
import { addStaffAction } from 'app/redux/actions/StaffAction'
import { GENDER, TEMA } from 'app/constants/StaffConstant'
const Information = (props) => {
    const { formRef } = props
    const [staffInformation, setStaffInformation] = useState({})
    const [selectedImage, setSelectedImage] = useState(null)
    const dispatch = useDispatch()
    const onChange = (e) => {
        // const file = e.target.files[0]
        // if (file) {
        //     const reader = new FileReader()
        //     reader.onload = () => {
        //         setSelectedImage(reader.result)
        //     }
        //     reader.readAsDataURL(file)
        // }
        setStaffInformation({
            ...staffInformation,
            [e.target.name]: e.target.value,
            image: '',
            // certificatesDto: [],
            // employeeFamilyDtos: [],
        })
    }
    const handleSubmitStaff = () => {
        if (staffInformation.id) {
        } else {
            dispatch(addStaffAction(staffInformation))
        }
    }

    const today = new Date().toISOString().split('T')[0]

    return (
        <div>
            <ValidatorForm ref={formRef} onSubmit={handleSubmitStaff}>
                <Grid container spacing={2} justify="space-between">
                    <Grid container alignItems="center" justify="center" md={4} lg={4}>
                        <label htmlFor="image-upload-input">
                            <img
                                src={
                                    selectedImage ||
                                    'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-dep-44.jpg'
                                }
                                alt=""
                                className="image"
                                style={{ cursor: 'pointer' }}
                            />
                        </label>
                        <input
                            accept="image/*"
                            id="icon-button-file"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={(e) => onChange(e)}
                        />
                        <label htmlFor="icon-button-file">
                            <IconButton component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </Grid>
                    <Grid container spacing={2} md={8} lg={8}>
                        <Grid item md={4} lg={4}>
                            <TextValidator
                                className="w-100 mb-4"
                                label={
                                    <span>
                                        <span className="text-red">*</span>
                                        Mã nhân viên
                                    </span>
                                }
                                type="text"
                                size="small"
                                value={staffInformation?.code || ''}
                                name="code"
                                onChange={(e) => onChange(e)}
                                validators={['required', 'matchRegexp:^NV[A-Za-z0-9]{5}$', 'matchRegexp:^(?!\\s*$).+']}
                                errorMessages={[
                                    'Không được để trống mã nhân viên',
                                    'Mã nhân viên sai định dạng(VD: NV....)',
                                    'Mã nhân viên không được để trắng',
                                ]}
                            />
                        </Grid>
                        <Grid item md={4} lg={4}>
                            <TextValidator
                                className="w-100 mb-4"
                                label={
                                    <span>
                                        <span className="text-red">*</span>
                                        Tên nhân viên
                                    </span>
                                }
                                type="text"
                                size="small"
                                value={staffInformation?.name || ''}
                                name="name"
                                onChange={(e) => onChange(e)}
                                validators={['required', 'matchRegexp:^[a-zA-Z0-9\\s]{1,100}$']}
                                errorMessages={['Bạn chưa nhập tên nhân viên', 'Tên nhân viên không được để trắng']}
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
                                value={staffInformation?.gender || ''}
                                name="gender"
                                onChange={(e) => onChange(e)}
                                validators={['required']}
                                errorMessages={['Bạn chưa chọn giới tính']}
                            >
                                {GENDER?.map((item) => {
                                    return (
                                        <MenuItem key={item?.id} value={item?.id}>
                                            {`${item?.name}`}
                                        </MenuItem>
                                    )
                                })}
                            </SelectValidator>
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <SelectValidator
                                className="w-100 mb-4"
                                label={
                                    <span>
                                        <span className="text-red">*</span>
                                        Nhóm
                                    </span>
                                }
                                type="text"
                                size="small"
                                value={staffInformation?.team || ''}
                                name="team"
                                onChange={(e) => onChange(e)}
                                validators={['required']}
                                errorMessages={['Bạn chưa chọn nhóm']}
                            >
                                {TEMA?.map((item) => {
                                    return (
                                        <MenuItem key={item?.id} value={item?.id}>
                                            {`${item?.name}`}
                                        </MenuItem>
                                    )
                                })}
                            </SelectValidator>
                        </Grid>
                        <Grid item md={4} lg={4}>
                            <TextValidator
                                className="w-100 mb-4"
                                label={
                                    <span>
                                        <span className="text-red">*</span>
                                        Email
                                    </span>
                                }
                                type="text"
                                size="small"
                                value={staffInformation?.email || ''}
                                name="email"
                                onChange={(e) => onChange(e)}
                                validators={['required']}
                                errorMessages={['Bạn chưa nhập Email']}
                            />
                        </Grid>
                        <Grid item md={4} lg={4}>
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
                                value={staffInformation?.phone || ''}
                                name="phone"
                                onChange={(e) => onChange(e)}
                                validators={['required']}
                                errorMessages={['Bạn chưa nhập số điện thoại']}
                            />
                        </Grid>
                        <Grid item md={4} lg={4}>
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
                                value={staffInformation?.dateOfBirth || today}
                                name="dateOfBirth"
                                onChange={(e) => onChange(e)}
                                validators={['required']}
                                errorMessages={['Bạn chưa nhập số điện thoại']}
                            />
                        </Grid>
                        <Grid item md={4} lg={4}>
                            <TextValidator
                                className="w-100 mb-4"
                                label={
                                    <span>
                                        <span className="text-red">*</span>
                                        CCCD/CMTND
                                    </span>
                                }
                                type="number"
                                size="small"
                                value={staffInformation?.citizenIdentificationNumber || ''}
                                name="citizenIdentificationNumber"
                                onChange={(e) => onChange(e)}
                                validators={['required']}
                                errorMessages={['Bạn chưa nhập số điện thoại']}
                            />
                        </Grid>
                        <Grid item md={4} lg={4}>
                            <TextValidator
                                className="w-100 mb-4"
                                label={
                                    <span>
                                        <span className="text-red">*</span>
                                        Ngày cấp
                                    </span>
                                }
                                type="date"
                                size="small"
                                value={staffInformation?.dateOfIssuanceCard || today}
                                name="dateOfIssuanceCard"
                                onChange={(e) => onChange(e)}
                                validators={['required']}
                                errorMessages={['Bạn chưa nhập số điện thoại']}
                            />
                        </Grid>
                        <Grid item md={4} lg={4}>
                            <TextValidator
                                className="w-100 mb-4"
                                label={
                                    <span>
                                        <span className="text-red">*</span>
                                        Nơi cấp
                                    </span>
                                }
                                type="text"
                                size="small"
                                value={staffInformation?.placeOfIssueCard || ''}
                                name="placeOfIssueCard"
                                onChange={(e) => onChange(e)}
                                validators={['required']}
                                errorMessages={['Bạn chưa nhập số điện thoại']}
                            />
                        </Grid>
                        <Grid item md={4} lg={4}>
                            <TextValidator
                                className="w-100 mb-4"
                                label={
                                    <span>
                                        <span className="text-red">*</span>
                                        Dân tộc
                                    </span>
                                }
                                type="text"
                                size="small"
                                value={staffInformation?.ethnic || ''}
                                name="ethnic"
                                onChange={(e) => onChange(e)}
                                validators={['required']}
                                errorMessages={['Bạn chưa nhập Email']}
                            />
                        </Grid>
                        <Grid item md={4} lg={4}>
                            <TextValidator
                                className="w-100 mb-4"
                                label={
                                    <span>
                                        <span className="text-red">*</span>
                                        Tôn giáo
                                    </span>
                                }
                                type="text"
                                size="small"
                                value={staffInformation?.religion || ''}
                                name="religion"
                                onChange={(e) => onChange(e)}
                                validators={['required']}
                                errorMessages={['Bạn chưa nhập Email']}
                            />
                        </Grid>
                        <Grid item md={4} lg={4}>
                            <TextValidator
                                className="w-100"
                                label={
                                    <span>
                                        <span className="text-red">*</span>
                                        Địa chỉ
                                    </span>
                                }
                                type="text"
                                size="small"
                                value={staffInformation?.address || ''}
                                name="address"
                                onChange={(e) => onChange(e)}
                                validators={['required']}
                                errorMessages={['Bạn chưa nhập Email']}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </ValidatorForm>
        </div>
    )
}

export default Information
