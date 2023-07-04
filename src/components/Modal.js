import Card from './Card'

function Modal(props) {

    function hideModel(e) {
        const target = e.target;
      
        if (target.id === 'modal') {

            props.onHideModal()
        }

 
    }




    return (<div id='modal' onClick={hideModel} className={props.show ? "modal" : "modal hide"}>
        <Card className="cardModal"> {props.children}</Card>
    </div>)
}




export default Modal