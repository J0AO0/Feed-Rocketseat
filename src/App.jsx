import {Post} from './components/Post';
import {Header} from './components/header';

import styles from './app.module.css'

import './global.css';
import {Sidebar} from "./components/Sidebar.jsx";


export function App() {
	return (
		<div>
			<Header/>

			<div className={styles.wrapper}>
				<Sidebar/>
				<main>
					<Post
						author='Diego Fernandes'
						content='Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.'
					/>
					<Post
						author='Patinho Feio'
						content='Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.'
					/>
				</main>
			</div>
		</div>
	);
}
