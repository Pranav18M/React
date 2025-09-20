import f1 from './assets/f1.jpg'

const Course1="F1 ideas"

function Course(props){

return(
<div className="card">
<img src={props.image} alt="" className='car' />
    <h4>{props.name}</h4>
    <p>{props.price}</p>
</div>

);

}
export default Course