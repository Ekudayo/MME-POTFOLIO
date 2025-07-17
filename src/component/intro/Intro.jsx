import MyInfo from "../user-info/MyInfo"
import Text from "../introText/Text"
import styles from "../intro/intro.module.css"
const Intro = () => {
  return (
    <div className={styles.infor}>
      < MyInfo />
      <Text />
    </div>
  )
}

export default Intro