export default function handler(req, res) {
    
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Phương thức không hợp lệ' });
    }

    const { password } = req.body;

    
    const securePassword = process.env.TEACHER_PASSWORD;

   
    if (password === securePassword) {
        return res.status(200).json({ success: true });
    } else {
        return res.status(401).json({ success: false, message: 'Mật khẩu giáo viên không chính xác' });
    }
}
