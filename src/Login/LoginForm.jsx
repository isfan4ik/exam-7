import React, { useState, useEffect } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            const { username, password } = JSON.parse(storedUser);
            setUsername(username);
            setPassword(password);
            setIsLoggedIn(true);
        }
    }, []);

    function handleLogin() {
        if (username === 'Isfandiyor' && password === 'isfandiyor') {
            const user = { username, password };
            localStorage.setItem('user', JSON.stringify(user));
            setIsLoggedIn(true);
        } else {
            alert('???');
        }
    }

    const handleLogout = newFunction(setUsername, setPassword, setIsLoggedIn);

    return (
        <div style={{ }}>
            <div style={{}}>
                {isLoggedIn ? (
                    <>
                        <h2>Welcome, {username}!</h2>
                        <button onClick={handleLogout} style={{ width: '100%', backgroundColor: '#ff4d4f', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>
                    </>
                ) : (
                    <>
                        <h2>Login</h2>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '10px', margin: '10px 0', border: '5px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '500%', padding: '10px', margin: '10px 0', border: '5px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
                        <button onClick={handleLogin} style={{ width: '100%', backgroundColor: '#4CAF50', color: 'white', padding: '14px 20px', margin: '300px 0', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>Login</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginForm;
function newFunction(setUsername, setPassword, setIsLoggedIn) {
    return () => {
        localStorage.removeItem('user');
        setUsername('');
        setPassword('');
        setIsLoggedIn(false);
    };
}

