const Card = (props) => {
    const classes = 'card ' + props.className //все что мы будем получать в качестве cln мы будем отображать в этой строке
    return <div className={classes}>{props.children}</div>; //весь контент CostItem будет значением children//
}

export default Card;