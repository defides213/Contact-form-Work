function sweetAlert() {
    Swal.fire({
        title: "Form sent",
        text: "We'll send you an email as soon as possible!",
        icon: "success"
    });
    document.getElementById("consulting").checked = false
    document.getElementById("socialMedia").checked = false
    document.getElementById("websites").checked = false
    document.getElementById("other").checked = false
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("phoneNumber").value = ""
    document.getElementById("message").value = ""
}