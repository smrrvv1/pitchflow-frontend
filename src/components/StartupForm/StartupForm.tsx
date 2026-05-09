import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import styles from './styles.module.css';

interface Props {
    onSubmit: (startupData: StartupFormData) => void
}

export interface StartupFormData {
    title: string;
    one_liner: string;
    description: string;
    tags: string;
    stage: string;
    target_amount: string;
}

export const StartupForm = ({ onSubmit }: Props) => {
    const [form, setForm] = useState<StartupFormData>({
        title: '',
        one_liner: '',
        description: '',
        tags: '',
        stage: '',
        target_amount: '',

    })

    const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        onSubmit(form)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}>
            <TextField
                label="Title"
                name="title"
                value={form.title}
                onChange={changeForm}/>

            <TextField
                label="Short Description "
                name="one_liner"
                value={form.one_liner}
                onChange={changeForm}/>

            <TextField
                label="Description"
                name="description"
                value={form.description}
                onChange={changeForm}/>

            <TextField
                label="Tags"
                name="tags"
                value={form.tags}
                onChange={changeForm}/>

            <TextField
                label="Stage"
                name="stage"
                value={form.stage}
                onChange={changeForm}/>

            <TextField
                label="Target amount"
                name="target_amount"
                value={form.target_amount}
                onChange={changeForm}/>

            <Button
                type="submit"
                variant="contained">
                Create Startup
            </Button>
        </form>
    )
}