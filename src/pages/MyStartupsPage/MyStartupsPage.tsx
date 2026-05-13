import { useEffect, useState } from 'react';
import { axiosApi } from '../../axiosApi';
import type { IStartup } from '../../types';
import { StartupCard } from '../../components/StartupCard/StartupCard';
import styles from './styles.module.css';

export const MyStartupsPage = () => {
    const [startups, setStartups] = useState<IStartup[]>([])

    useEffect(() => {
        const getMyStartups = async() => {
            try {
                const response = await axiosApi.get('/startups/my_startups/1')

                setStartups(response.data)
            } catch (e) {
                console.log(e)
            }
        }

        getMyStartups();
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerBlock}>
                <Typography
                    variant="h3"
                    className={styles.title}
                >
                    My Startups
                </Typography>

                <Typography className={styles.subtitle}>
                    Track projects created by your account
                </Typography>
            </div>

            <div className={styles.container}>
                {
                    startups.map((startup) => (
                        <StartupCard
                            key={startup.id}
                            startup={startup}
                        />
                    ))
                }
            </div>
        </div>
    )
}
