import { useEffect, useState } from 'react';
import { axiosApi } from '../../axiosApi';
import type { IStartup } from '../../types';
import { StartupCard } from '../../components/StartupCard/StartupCard';
import styles from './styles.module.css';
import { Typography } from '@mui/material';

export const HomePage = () => {
  const [startups, setStartups] = useState<IStartup[]>([])

  useEffect(() => {
    const getStartups = async() => {
        try {
            const response = await axiosApi.get('/startups/')

            setStartups(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    getStartups()
    }, [])

    return (
      <div className={styles.wrapper}>
            <div className={styles.headerBlock}>
                <Typography
                    variant="h3"
                    className={styles.title}
                >
                    Startup Feed
                </Typography>

                <Typography className={styles.subtitle}>
                    Explore startup ideas and connect with interesting projects
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