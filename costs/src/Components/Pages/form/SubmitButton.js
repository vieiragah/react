import styles from './SubmitButton.module.css'

function Submitbutton({ text }){
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}
export default Submitbutton