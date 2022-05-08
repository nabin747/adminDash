import smartschool from '../../images/smartschool.png'
import './Dashboard.css'

export const Dashboard = ()=>{
    return <>
        <div className="top-container">
            <div className="main-layout">
                <div className="left-panel"></div>
                <div className="main-display">
                    <div className="profile-area"><img className='user-logo' src={smartschool} alt="school logo" /></div>
                    <div className="bashbody">dashboard area</div>
                </div>
            </div>
        </div>
    </>
}