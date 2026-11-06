// PAWSITIVE PET ACADEMY WEBSITE
// COURSE FEE CALCULATOR

const feeForm = document.getElementById("feeForm");

if (feeForm) {

    const result = document.getElementById("feeResult");

    feeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const selectedCourses = document.querySelectorAll(
            'input[name="course"]:checked'
        );

        let total = 0;

        selectedCourses.forEach(function(course) {
            total += Number(course.value);
        });

        const numberOfCourses = selectedCourses.length;

        if (numberOfCourses === 0) {
            result.innerHTML = "Please select at least one course.";
            return;
        }

        let discount = 0;

        if (numberOfCourses >= 4) {
            discount = 15;
        } else if (numberOfCourses === 3) {
            discount = 10;
        } else if (numberOfCourses === 2) {
            discount = 5;
        }

        const discountAmount = total * discount / 100;
        const finalTotal = total - discountAmount;

        result.innerHTML = `
            <h3>Your Fee Calculation</h3>
            <p>Courses selected: ${numberOfCourses}</p>
            <p>Original total: R${total.toLocaleString("en-ZA")}</p>
            <p>Discount: ${discount}%</p>
            <p>Discount amount: R${discountAmount.toLocaleString("en-ZA")}</p>
            <h3>Final Total: R${finalTotal.toLocaleString("en-ZA")}</h3>
        `;
    });

    // RESET CALCULATOR
    feeForm.addEventListener("reset", function() {
        result.innerHTML = "Your calculated fees will appear here.";
    });
}


// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const result = document.getElementById("contactResult");

        result.innerHTML = `
            <h3>Thank You, ${name}!</h3>
            <p>Your enquiry has been recorded in this demonstration.</p>
            <p>Please note: this demonstration does not send an email.</p>
        `;

        contactForm.reset();
    });
}