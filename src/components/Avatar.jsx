import styles from "./Avatar.module.css";


export function Avatar({hasBorder = true, src}){


    return(
        // eslint-disable-next-line react/prop-types
        <img className={hasBorder ? styles.avatarWithBorder: styles.avatar}
             /* eslint-disable-next-line react/prop-types */
             src={src}/>
    );
}