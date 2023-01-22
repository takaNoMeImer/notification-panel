import UseApp from "../hooks/useApp";
import Notification from "./Notification";

const Home = () => {

    const { data } = UseApp();
    
    const counterNotifications = () => {
        return data.filter(item => item.read == false).length
    }

    return (
        <>
            <div className="home container has-background-grey-lighter p-4 m-3">
                <nav className="navbar p-1" role="navigation" aria-label="main navigation">
                    <div id="navbarNotification" className="navbar-menu">
                        <div className="navbar-start">
                            <div style={{ display: 'flex', columnGap: '1rem' }} className="navbar-item">
                                <p style={{fontWeight: '500', color: 'black'}}>NOTIFICATIONS</p>
                                <p className="badge-number">{counterNotifications()}</p>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-light">
                                        Marcar como leidos
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="notifications">
                    {data.map(item => (
                        <Notification key={item.remitente} itemProp={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;