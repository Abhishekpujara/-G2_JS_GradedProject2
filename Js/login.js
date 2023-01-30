        function check(form) {
            if (form.userid.value == "johnsmith" && form.pswrd.value == "password123") {
                window.open('resume.html')
            }
            else {
                alert("Error Password or Username")
            }
        }