function logoutUser() {
    let token = localStorage.getItem('token');
    fetch('http://localhost:8000/api/user/logout/', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (response.status === 200) {
            alert('Logged out successfully');
            // Clear the token and any user data from local storage
            localStorage.removeItem('token');
            // Redirect to the login page
            window.location.href = 'login.html';
        } else {
            // Handle errors or show a message to the user
            console.error('Logout failed');
        }
    })
    .catch(error => {
        // Handle any network errors here
        console.error('Network error:', error);
    });
}
