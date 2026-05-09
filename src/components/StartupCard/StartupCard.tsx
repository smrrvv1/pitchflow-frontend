import {Card, CardContent, Typography, Button} from '@mui/material';
import type { IStartup } from '../../types';
import styles from './styles.module.css';

interface Props {
    startup: IStartup;
}

export const StartupCard = ({ startup }: Props) => {
    return (
        <Card className={styles.card}>
            <CardContent>
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

                <Button
                    variant="contained"
                    className={styles.button}>
                    Connect
                </Button>
            </CardContent>
        </Card>
    )
}