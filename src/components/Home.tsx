const Home = () => {
    return (
        <>
            <div className="container is-primary">
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div id="navbarNotification" className="navbar-menu">
                        <div className="navbar-start">
                            <div style={{display: 'flex', columnGap: '1rem'}} className="navbar-item">
                                <p>Notification</p>
                                <p>3</p>
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
            </div>
        </>
    )
}

export default Home;