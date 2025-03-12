// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");
    const successMessage = document.getElementById("successMessage");

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const formData = new FormData(orderForm);

        fetch(orderForm.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log("Заявка відправлена:");
                console.log("ПІБ:", formData.get("fullName"));
                console.log("Номер телефону:", formData.get("phoneNumber"));
                console.log("Email:", formData.get("email"));

                orderForm.reset();
                successMessage.style.display = "block";
            }
        });
    });
});
