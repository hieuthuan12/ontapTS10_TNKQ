// File: /api/check-password.js
export default function handler(req, res) {
    // Chỉ nhận dữ liệu dạng POST gửi lên
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Phương thức không hợp lệ' });
    }

    const { password } = req.body;

    // Vercel sẽ tự động bốc mật khẩu an toàn thầy đã tạo trong hình điền vào đây
    const securePassword = process.env.TEACHER_PASSWORD;

    // Đối chiếu bảo mật trên Server (Học sinh F12 hoàn toàn không thấy được)
    if (password === securePassword) {
        return res.status(200).json({ success: true });
    } else {
        return res.status(401).json({ success: false, message: 'Mật khẩu giáo viên không chính xác!' });
    }
}