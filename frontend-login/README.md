# Frontend Login Module

Module này thuộc phần việc của **Đào Văn Quý — Frontend** trong Sprint 1.

## Phạm vi theo phân công

- Form đăng nhập
- Input Email
- Input Mật khẩu
- Nút Đăng nhập
- Che mật khẩu
- Hiển thị lỗi
- Chuyển sang trang chính khi đăng nhập thành công

## Trong module

### UI
- Form Login
- Email
- Password
- Nút Đăng nhập
- Hiện/ẩn mật khẩu
- Link `Quên mật khẩu?`
- Link `Chưa có tài khoản? Đăng ký`

Hai link cuối chỉ là **UI/điều hướng placeholder**, không triển khai chức năng Register/Forgot Password trong module này.

### Validation
- Email bỏ trống
- Email sai định dạng
- Mật khẩu bỏ trống
- Hiển thị lỗi trực tiếp trên form

## Không thuộc module

Không triển khai:

- Backend API
- Database
- BCrypt
- Access Token/JWT
- Refresh Token
- Khóa tài khoản
- Gọi API Login thật

Theo phân công Sprint 1, phần kết nối form với API và xử lý token thuộc **Frontend Integration**.

## Cấu trúc

```text
frontend-login-module/
├── index.html
├── css/
│   └── login.css
├── js/
│   └── login.js
└── README.md
```

## Tích hợp vào project

Có thể copy:

```text
index.html
css/login.css
js/login.js
```

vào project frontend hiện tại.

Khi Frontend Integration kết nối API, phần UI có sẵn có thể được giữ nguyên; chỉ cần nối logic submit với API Login của Backend.

## Git

Nên làm trên branch riêng:

```bash
git checkout -b feature/frontend-login
```

Commit đề xuất:

```bash
git add .
git commit -m "feat: implement frontend login module"
git push origin feature/frontend-login
```
