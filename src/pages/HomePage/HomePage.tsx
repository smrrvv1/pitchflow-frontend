import { useEffect, useState } from 'react';
import { axiosApi } from '../../axiosApi';
import type { IStartup } from '../../types';
import { StartupCard } from '../../components/StartupCard/StartupCard';
import styles from './styles.module.css';

export const HomePage = () => {
  const [startups, setStartups] = useState<IStartup[]>([])

  useEnhancedEffect(() => {
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
    )
  }