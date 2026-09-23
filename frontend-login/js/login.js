const loginForm = document.getElementById("login-form");

const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");

const emailError = document.getElementById("login-email-error");
const passwordError = document.getElementById("login-password-error");
const loginError = document.getElementById("login-error");

const passwordToggle = document.getElementById("login-password-toggle");
const submitButton = document.getElementById("login-submit");

/*
 * Phạm vi của module:
 * - Xử lý giao diện Login.
 * - Validation phía Frontend.
 * - Hiển thị lỗi/trạng thái.
 *
 * Không xử lý:
 * - Database
 * - BCrypt
 * - JWT / Access Token
 * - Refresh Token
 * - Khóa tài khoản
 * - Gọi API Authentication thật
 *
 * Phần kết nối API thuộc Frontend Integration.
 */

function clearErrors() {
    emailError.textContent = "";
    passwordError.textContent = "";
    loginError.textContent = "";

    emailInput.classList.remove("login-form__input--invalid");
    passwordInput.classList.remove("login-form__input--invalid");
}

function validateForm() {
    let isValid = true;

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email) {
        emailError.textContent = "Vui lòng nhập email.";
        emailInput.classList.add("login-form__input--invalid");
        isValid = false;
    } else if (!emailInput.validity.valid) {
        emailError.textContent = "Email không hợp lệ.";
        emailInput.classList.add("login-form__input--invalid");
        isValid = false;
    }

    if (!password) {
        passwordError.textContent = "Vui lòng nhập mật khẩu.";
        passwordInput.classList.add("login-form__input--invalid");
        isValid = false;
    }

    return isValid;
}

passwordToggle.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";

    passwordInput.type = isPassword ? "text" : "password";
    passwordToggle.textContent = isPassword ? "Ẩn" : "Hiện";
    passwordToggle.setAttribute(
        "aria-label",
        isPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"
    );
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    clearErrors();

    if (!validateForm()) {
        return;
    }

    /*
     * Chưa gọi API ở module này.
     * Frontend Integration sẽ lấy dữ liệu:
     *
     * const email = emailInput.value.trim();
     * const password = passwordInput.value;
     *
     * rồi kết nối với Backend Login API.
     */

    loginError.textContent =
        "Thông tin hợp lệ. Chờ kết nối với hệ thống đăng nhập.";
});
