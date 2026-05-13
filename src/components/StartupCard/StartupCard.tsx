import {Card, CardContent, Typography, Button} from '@mui/material';
import type { IStartup } from '../../types';
import styles from './styles.module.css';
import { axiosApi } from '../../axiosApi';

interface Props {
    startup: IStartup;
}

export const StartupCard = ({ startup }: Props) => {
    const deleteStartup = async() => {
        try {
            await axiosApi.delete( `/startups/${startup.id}`)
    
            window.location.reload()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Card className={styles.card}>
            <CardContent >
                <Typography 
                    variant="h5"
                    className={styles.title}
                >
                    {startup.title}
                </Typography>

                <Typography className={styles.oneLiner}>
                    {startup.one_liner}
                </Typography>

                <Typography className={styles.info}>
                    Stage: {startup.stage}
                </Typography>

                <Typography className={styles.info}>
                    Target: {startup.target_amount}
                </Typography>

                <span className={styles.tags}>
                    {startup.tags}
                </span>

                <div className={styles.buttons}>
                    <Button
                        variant="contained"
                        className={styles.button}>
                        Connect
                    </Button>

                    <Button
                        variant="outlined"
                        color="error"
                        onClick={deleteStartup}
                        className={styles.deleteBtn}>
                        Delete
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}