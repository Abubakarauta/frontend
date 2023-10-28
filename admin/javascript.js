
        function searchUser() {
            // Get the email entered in the search bar
            const userEmail = document.getElementById("user-email").value;

            // Send an API request to your backend to search for the user by email
            // Replace the following lines with your actual API call
            const apiUrl = `/api/search_user?email=${userEmail}`;
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Display user details in the "user-profile" div
                    const userProfile = document.getElementById("user-profile");
                    userProfile.innerHTML = `
                        <p><strong>User ID:</strong> ${data.userId}</p>
                        <p><strong>Username:</strong> ${data.username}</p>
                        <p><strong>Email:</strong> ${data.email}</p>
                        <!-- Add more user details here -->
                        <div class="text-center mt-3">
                            <a href="edit_user.html" class="btn btn-secondary">Edit User</a>
                            <a href="#" class="btn btn-danger">Delete User</a>
                        </div>
                    `;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    
