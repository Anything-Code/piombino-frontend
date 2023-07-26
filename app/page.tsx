import styles from '../styles/page.module.css';
import OrderForm from './OrderForm';

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.first}>
                <div>
                    <h1>Plan your stay 😊</h1>
                    <OrderForm />
                </div>
            </div>
        </main>
    );
}
