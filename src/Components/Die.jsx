/* eslint-disable react/prop-types */
export default function Die(props){
    const styles={
        backgroundColor:props.isHeld ? '#59e391':'white'
    }
    return(
        <button style={styles}>{props.value}</button>
    )
}