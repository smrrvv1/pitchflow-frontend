import { useState } from 'react';
import {Button,TextField,Typography} from '@mui/material';
import { axiosApi } from '../../axiosApi';
import styles from './styles.module.css';

export const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
})

  const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }))
  }

  const login = async(e: React.FormEvent) => {
    e.preventDefault()

    try {
        const response = await axiosApi.post(
            '/users/login',
            form
        )

        console.log(response.data)

        alert('Login success')
    } catch (e) {
        console.log(e)

        alert('Wrong email or password')
    }
  }

    return (
      <div className={styles.wrapper}>
        <form
            onSubmit={login}
            className={styles.form}>
            <Typography
                variant="h4"
                align="center">
                Login
            </Typography>

            <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={changeForm}/>

            <TextField
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={changeForm}/>

            <Button
                type="submit"
                variant="contained">
                Login
            </Button>
        </form>
  </div>
    )
  }