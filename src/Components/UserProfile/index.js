import './index.css'
const UserProfile =(props)=>{
    const {InUserDetailsList,deleteUser}=props
    const {imgul,Names,role,uniquNo}=InUserDetailsList
    const onDelete=()=>{ 
        deleteUser(uniquNo)
    }
    return(
    <li className='usercard'>
        <img src={imgul} className='vatar' alt='Avatr'/>
        <div className='user-deatils'>
            <h1 className='user-name'>{Names}</h1>
            <p className='user-designation'>{role}</p>
        </div>
        <button type='button' className='delete-button' onClick={onDelete}>
            Delete
        </button>
    </li>
    )
   
    }
export default  UserProfile