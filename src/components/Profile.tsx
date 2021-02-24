
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/ruhtracBP.png" alt="Arthur CBP"/>
            <div>
                <strong>Arthur CBP</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}