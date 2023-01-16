const Card = ({firstname, surname, picture, email, phone}) => {
return (
    <div className='cardContact'>
        <div className='cardFullName'>{firstname} {surname}</div> 
        <img className='cardImg' src={picture} alt={surname}/> 
        <div className='cardEmail'>{email}</div>
        <div className='cardPhone'>{phone}</div>
    </div>
)
}
export default Card; 