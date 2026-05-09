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
                <Typography variant="h5">
                    {startup.title}
                </Typography>

                <Typography className={styles.oneLiner}>
                    {startup.one_liner}
                </Typography>

                <Typography>
                    Stage: {startup.stage}
                </Typography>

                <Typography>
                    {startup.target_amount}
                </Typography>

                <div className={styles.buttons}>
                    <Button
                        variant="contained"
                        className={styles.button}>
                        Connect
                    </Button>

                    <Button
                        variant="outlined"
                        color="error"
                        onClick={deleteStartup}>
                        Delete
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}