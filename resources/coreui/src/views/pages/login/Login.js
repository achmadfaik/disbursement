import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import {useFormik} from "formik";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {postLogin, setCurrentUser} from "../../../services/authService";

const Login = (props) => {
  const initialValues = {
    email: '',
    password: ''
  }

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Format email salah!')
      .min(3, 'Minimal 3 karakter')
      .max(50, 'Maksimal 50 karakter')
      .required('Harus diisi!'),
    password: Yup.string()
      .min(3, 'Minimal 3 karakter')
      .max(50, 'Maksimal 50 karakter')
      .required('Harus diisi!'),
  });

  /** handle form */
  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit:   (values, { setStatus }) => {
      console.log(values);
      postLogin(values).then((res) => {
        const data = res.data;
        if(!data.error) {
          setCurrentUser(data.data);
          setRedirectToReferrer(true);
        }
      }).catch((err) => {
        console.log('err', err.response);
        setStatus(err.response.data.message);
      });
    }
  });

  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const { from } = props.location.state || { from: { pathname: '/dashboard' } }
  if (redirectToReferrer === true) {
    return <Redirect to={from} />
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <form onSubmit={formik.handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="email" name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="Username" autoComplete="username" required/>
                    </CInputGroup>
                    <CInputGroup className="mb-2">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name="password" value={formik.values.password} onChange={formik.handleChange} placeholder="Password" autoComplete="current-password" required/>
                    </CInputGroup>
                    {
                      (formik.status)?
                        <div className="text-danger mb-2">{formik.status}</div>
                        :
                        null
                    }
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </form>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
