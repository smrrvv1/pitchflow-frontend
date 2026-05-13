import { useState } from 'react';
import { Button,MenuItem,TextField,Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { axiosApi } from '../../axiosApi';
import styles from './styles.module.css';

export const RegisterPage = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        full_name: '',
        email: '',
        password: '',
        role: 'founder',
    })

    const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const register = async(e: React.FormEvent) => {
        e.preventDefault()

        try {
            await axiosApi.post('/users/',form)

            navigate('/login')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={styles.wrapper}>
            <form
                onSubmit={register}
                className={styles.form}>
                <Typography
                    variant="h4"
                    align="center">
                    Register
                </Typography>

                <TextField
                    label="Full Name"
                    name="full_name"
                    value={form.full_name}
                    onChange={(e) => {
                        const value = e.target.value
                
                        if (/^[A-Za-zА-Яа-я ]*$/.test(value)) {
                            changeForm(e)
                        }
                    }}/>

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

                <TextField
                    select
                    label="Role"
                    name="role"
                    value={form.role}
                    onChange={changeForm}>
                    <MenuItem value="founder">
                        Founder
                    </MenuItem>

                    <MenuItem value="investor">
                        Investor
                    </MenuItem>
                </TextField>

                <Button
                    type="submit"
                    variant="contained">
                    Register
                </Button>
            </form>
        </div>
    )
}