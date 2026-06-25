function loadData() {
  // Loading message
  document.getElementById("status").innerHTML = "Loading...";

  // 2 seconds delay
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        let output = "";

        data.forEach((user) => {
          output += `
                        <div class="card">
                            <h3>${user.name}</h3>
                            <p>Email: ${user.email}</p>
                            <p>Phone: ${user.phone}</p>
                        </div>
                    `;
        });

        document.getElementById("result").innerHTML = output;

        // Success message
        document.getElementById("status").innerHTML = "Loaded successfully";
      })

      .catch((error) => {
        document.getElementById("status").innerHTML = "Error loading data";
      });
  }, 2000);
}
