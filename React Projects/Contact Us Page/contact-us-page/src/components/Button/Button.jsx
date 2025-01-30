import styles from './Button.module.css'

const Button = ({ isOutline, icon, text, ...rest}) => {
  return (
    <button 
      {...rest} 
      className={isOutline? styles.outline_btn: styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Button

//? Technique 1
//! const Button = (props) => {
//    return (
//      <button 
//?       className={props.isOutline ? styles.outline : styles.primary_btn}>
//?       {props.icon}
//?       {props.text}
//     </button>
//   );
// };

//? Technique 2
//! const Button = (props) => {
//?  const { isOutline, icon, text} = props; <- Destructuring
//   return (
//      <button 
//!       className={isOutline ? styles.outline : styles.primary_btn}>
//!       {icon}
//!       {text}
//     </button>
//   );
// };
