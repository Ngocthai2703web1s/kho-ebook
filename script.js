const ImageList = (function() {
  const images = [
    { date: "01-02-2025", name: "Bá Võ - Khai Hoang", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
	{ date: "01-02-2025", name: "Bậc Thầy Phong Thủy - Đào Hoa Độ", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bac-thay-phong-thuy-dao-hoa-do.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BA%ADc%20Th%E1%BA%A7y%20Phong%20Th%E1%BB%A7y%20-%20%C4%90%C3%A0o%20Hoa%20%C4%90%E1%BB%99.epub" },
	{ date: "01-02-2025", name: "Bảo Ngươi Làm Trò Chơi Ngươi Lại Làm Video CG - Tiềm Thủy Đích Oa Ba", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bao-nguoi-lam-tro-choi2c-nguoi-lai-lam-video-cg_-tiem-thuy-dich-oa-ba.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BA%A3o%20Ng%C6%B0%C6%A1i%20L%C3%A0m%20Tr%C3%B2%20Ch%C6%A1i%20Ng%C6%B0%C6%A1i%20L%E1%BA%A1i%20L%C3%A0m%20Video%20CG%20-%20Ti%E1%BB%81m%20Th%E1%BB%A7y%20%C4%90%C3%ADch%20Oa%20Ba.epub" },
	{ date: "01-02-2025", name: "Bắt Đầu Đánh Dấu Hoang Cổ Thánh Thể - J Thần", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bat-dau-danh-dau-hoang-co-thanh-the-j-than.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BA%AFt%20%C4%90%E1%BA%A7u%20%C4%90%C3%A1nh%20D%E1%BA%A5u%20Hoang%20C%E1%BB%95%20Th%C3%A1nh%20Th%E1%BB%83%20-%20J%20Th%E1%BA%A7n.epub" },
	{ date: "01-02-2025", name: "Bắt Đầu Nạp Tiền Một Tỷ - Tiểu Tiểu Yêu Tiên", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bat-dau-nap-tien-mot-ty-tieu-tieu-yeu-tien.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BA%AFt%20%C4%90%E1%BA%A7u%20N%E1%BA%A1p%20Ti%E1%BB%81n%20M%E1%BB%99t%20T%E1%BB%B7%20-%20Ti%E1%BB%83u%20Ti%E1%BB%83u%20Y%C3%AAu%20Ti%C3%AAn.epub" },
	{ date: "01-02-2025", name: "Bắt Đầu Quá Mạnh Làm Sao Bây Giờ - Phạm Thần", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bat-dau-qua-manh-lam-sao-bay-gio-pham-than.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BA%AFt%20%C4%90%E1%BA%A7u%20Qu%C3%A1%20M%E1%BA%A1nh%20L%C3%A0m%20Sao%20B%C3%A2y%20Gi%E1%BB%9D%20-%20Ph%E1%BA%A1m%20Th%E1%BA%A7n.epub" },
	{ date: "01-02-2025", name: "Bắt Đầu Từ Hỗn Độn Thể - Tiên Nữ Xuyên Liễu Bàn Thứ", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/huyen-huyen-bat-dau-tu-hon-don-the-tien-nu-xuyen-lieu-ban-thu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BA%AFt%20%C4%90%E1%BA%A7u%20T%E1%BB%AB%20H%E1%BB%97n%20%C4%90%E1%BB%99n%20Th%E1%BB%83%20-%20Ti%C3%AAn%20N%E1%BB%AF%20Xuy%C3%AAn%20Li%E1%BB%85u%20B%C3%A0n%20Th%E1%BB%A9.epub" },
	{ date: "01-02-2025", name: "Bảy Vị Sư Tỷ Tuyệt Sắc Của Ta - Lạp Mỗ Ca", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bay-vi-su-ty-tuyet-sac-cua-ta-lap-mo-ca.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BA%A3y%20V%E1%BB%8B%20S%C6%B0%20T%E1%BB%B7%20Tuy%E1%BB%87t%20S%E1%BA%AFc%20C%E1%BB%A7a%20Ta%20-%20L%E1%BA%A1p%20M%E1%BB%97%20Ca.epub" },
	{ date: "01-02-2025", name: "Bột Mì Vĩnh Cửu - Alexander Romanovich Belyaev", imageUrl: "https://ebookvie.com/wp-content/uploads/2025/01/bot-mi-vinh-cuu-alexander-romanovich-belyaev-le-khanh-truong-dich-pham-dang-que-dich.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BB%99t%20M%C3%AC%20V%C4%A9nh%20C%E1%BB%ADu%20-%20Alexander%20Romanovich%20Belyaev.epub" },
	{ date: "01-02-2025", name: "Cái Nguyền Rủa Này Thật Quá Tuyệt Vời - Hành Giả Hữu Tam", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/cai-nguyen-rua-nay-that-qua-tuyet-voi-hanh-gia-huu-tam.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/C%C3%A1i%20Nguy%E1%BB%81n%20R%E1%BB%A7a%20N%C3%A0y%20Th%E1%BA%ADt%20Qu%C3%A1%20Tuy%E1%BB%87t%20V%E1%BB%9Di%20-%20H%C3%A0nh%20Gi%E1%BA%A3%20H%E1%BB%AFu%20Tam.epub" },
	{ date: "01-02-2025", name: "Càn Khôn Kiếm Thần - Trần Sơn", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/can-khon-kiem-than-tran-son.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/C%C3%A0n%20Kh%C3%B4n%20Ki%E1%BA%BFm%20Th%E1%BA%A7n%20-%20Tr%E1%BA%A7n%20S%C6%A1n.epub" },
	{ date: "01-02-2025", name: "Cậu Cả Tu Chân - Vũ Hạ Đích Hảo Đại", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/cau-ca-tu-chan-vu-ha-dich-hao-dai.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/C%E1%BA%ADu%20C%E1%BA%A3%20Tu%20Ch%C3%A2n%20-%20V%C5%A9%20H%E1%BA%A1%20%C4%90%C3%ADch%20H%E1%BA%A3o%20%C4%90%E1%BA%A1i.epub" },
	{ date: "01-02-2025", name: "Câu Lạc Bộ Thiên Tài - Thành Thành Dữ Thiền", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/cau-lac-bo-thien-tai-thanh-thanh-du-thien.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/C%C3%A2u%20L%E1%BA%A1c%20B%E1%BB%99%20Thi%C3%AAn%20T%C3%A0i%20-%20Th%C3%A0nh%20Th%C3%A0nh%20D%E1%BB%AF%20Thi%E1%BB%81n.epub" },
	{ date: "01-02-2025", name: "Cày Tại Tận Thế Thêm Điểm Thăng Cấp - Tân Phong", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/cay-tai-tan-the-them-diem-thang-cap-tan-phong.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/C%C3%A0y%20T%E1%BA%A1i%20T%E1%BA%ADn%20Th%E1%BA%BF%20Th%C3%AAm%20%C4%90i%E1%BB%83m%20Th%C4%83ng%20C%E1%BA%A5p%20-%20T%C3%A2n%20Phong.epub" },
	{ date: "01-02-2025", name: "Chăn Nuôi Toàn Nhân Loại - Tam Bách Cân Đích Vi Tiếu", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/chan-nuoi-toan-nhan-loai-tam-bach-can-dich-vi-tieu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ch%C4%83n%20Nu%C3%B4i%20To%C3%A0n%20Nh%C3%A2n%20Lo%E1%BA%A1i%20-%20Tam%20B%C3%A1ch%20C%C3%A2n%20%C4%90%C3%ADch%20Vi%20Ti%E1%BA%BFu.epub" },
	{ date: "01-02-2025", name: "Chuyện Làm Mai Mối Trước Giờ Ta Chưa Phục Ai Cả - Nhị Xà", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/chuyen-lam-mai-moi-truoc-gio-ta-chua-phuc-ai-ca-nhi-xa.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Chuy%E1%BB%87n%20L%C3%A0m%20Mai%20M%E1%BB%91i%20Tr%C6%B0%E1%BB%9Bc%20Gi%E1%BB%9D%20Ta%20Ch%C6%B0a%20Ph%E1%BB%A5c%20Ai%20C%E1%BA%A3%20-%20Nh%E1%BB%8B%20X%C3%A0.epub" },
	{ date: "01-02-2025", name: "Circe - Madeline Miller - Madeline Miller", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/09/Circe-Madeline-Miller.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Circe%20-%20Madeline%20Miller%20-%20Madeline%20Miller.epub" },
	{ date: "01-02-2025", name: "Cỗ Máy Thời Gian - Herbert George Wells", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/09/Co-May-Thoi-Gian.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/C%E1%BB%97%20M%C3%A1y%20Th%E1%BB%9Di%20Gian%20-%20Herbert%20George%20Wells.epub" },
	{ date: "01-02-2025", name: "Cuộc Sống Hàng Ngày Của Đại Sư Huyền Học - Ngư Diệu Thanh", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/cuoc-song-hang-ngay-cua-dai-su-huyen-hoc-ngu-dieu-thanh.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Cu%E1%BB%99c%20S%E1%BB%91ng%20H%C3%A0ng%20Ng%C3%A0y%20C%E1%BB%A7a%20%C4%90%E1%BA%A1i%20S%C6%B0%20Huy%E1%BB%81n%20H%E1%BB%8Dc%20-%20Ng%C6%B0%20Di%E1%BB%87u%20Thanh.epub" },
	{ date: "01-02-2025", name: "Đại Minh Trong Chiếc Hộp - Tam Thập Nhị Biến", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/dai-minh-trong-chiec-hop-tam-thap-nhi-bien.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/%C4%90%E1%BA%A1i%20Minh%20Trong%20Chi%E1%BA%BFc%20H%E1%BB%99p%20-%20Tam%20Th%E1%BA%ADp%20Nh%E1%BB%8B%20Bi%E1%BA%BFn.epub" },
	{ date: "01-02-2025", name: "Đập Nồi Bán Sắt Đi Học - Hồng Thứ Bắc", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/dap-noi-ban-sat-di-hoc-hong-thu-bac.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/%C4%90%E1%BA%ADp%20N%E1%BB%93i%20B%C3%A1n%20S%E1%BA%AFt%20%C4%90i%20H%E1%BB%8Dc%20-%20H%E1%BB%93ng%20Th%E1%BB%A9%20B%E1%BA%AFc.epub" },
	{ date: "01-02-2025", name: "Dark Matter Người Chạy Xuyên Không Gian - Blake Crouch", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/07/Dark-Matter-Nguoi-Chay-Xuyen-Khong-Gian.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Dark%20Matter%20Ng%C6%B0%E1%BB%9Di%20Ch%E1%BA%A1y%20Xuy%C3%AAn%20Kh%C3%B4ng%20Gian%20-%20Blake%20Crouch.epub" },
	{ date: "01-02-2025", name: "Dạy Đồ Vạn Lần Trả Về Vi Sư Chưa Từng Tàng Tư - Tố Dữ", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/day-do-van-lan-tra-ve-vi-su-chua-tung-tang-tu-to-du.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/D%E1%BA%A1y%20%C4%90%E1%BB%93%20V%E1%BA%A1n%20L%E1%BA%A7n%20Tr%E1%BA%A3%20V%E1%BB%81%20Vi%20S%C6%B0%20Ch%C6%B0a%20T%E1%BB%ABng%20T%C3%A0ng%20T%C6%B0%20-%20T%E1%BB%91%20D%E1%BB%AF.epub" },
	{ date: "01-02-2025", name: "Dị Giới Dược Tề Sư - Nhất Điều Hàm Ngư C", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/di-gioi-duoc-te-su-nhat-dieu-ham-ngu-c.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/D%E1%BB%8B%20Gi%E1%BB%9Bi%20D%C6%B0%E1%BB%A3c%20T%E1%BB%81%20S%C6%B0%20-%20Nh%E1%BA%A5t%20%C4%90i%E1%BB%81u%20H%C3%A0m%20Ng%C6%B0%20C.epub" },
	{ date: "01-02-2025", name: "Diệt Chủng - Takano Kazuaki - Takano Kazuaki", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/07/Diet-Chung.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Di%E1%BB%87t%20Ch%E1%BB%A7ng%20-%20Takano%20Kazuaki%20-%20Takano%20Kazuaki.epub" },
	{ date: "01-02-2025", name: "Đỉnh Phong Thiên Hạ - SS Hà Thần", imageUrl: "https://ebookvie.com/wp-content/uploads/2025/01/dinh-phong-thien-ha-ss-ha-than.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/%C4%90%E1%BB%89nh%20Phong%20Thi%C3%AAn%20H%E1%BA%A1%20-%20SS%20H%C3%A0%20Th%E1%BA%A7n.epub" },
	{ date: "01-02-2025", name: "Gia Gia Tạo Phản Tại Dị Giới Ta Liền Vô Địch Ở Đô Thị - Nhất Chích Vi Bàn Đích Bì Bì Hà", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/gia-gia-tao-phan-tai-di-gioi-ta-lien-vo-dich-o-do-thi-nhat-chich-vi-ban-dich-bi-bi-ha.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Gia%20Gia%20T%E1%BA%A1o%20Ph%E1%BA%A3n%20T%E1%BA%A1i%20D%E1%BB%8B%20Gi%E1%BB%9Bi%20Ta%20Li%E1%BB%81n%20V%C3%B4%20%C4%90%E1%BB%8Bch%20%E1%BB%9E%20%C4%90%C3%B4%20Th%E1%BB%8B%20-%20Nh%E1%BA%A5t%20Ch%C3%ADch%20Vi%20B%C3%A0n%20%C4%90%C3%ADch%20B%C3%AC%20B%C3%AC%20H%C3%A0.epub" },
	{ date: "01-02-2025", name: "Hệ Thống Cứu Vãn Nữ Thần - Thanh Sơn Đào Cốc", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/he-thong-cuu-van-nu-than-thanh-son-dao-coc.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/H%E1%BB%87%20Th%E1%BB%91ng%20C%E1%BB%A9u%20V%C3%A3n%20N%E1%BB%AF%20Th%E1%BA%A7n%20-%20Thanh%20S%C6%A1n%20%C4%90%C3%A0o%20C%E1%BB%91c.epub" },
	{ date: "01-02-2025", name: "Hệ Thống Trung Y - Ức Ốc Ngư", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/he-thong-trung-y-uc-oc-ngu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/H%E1%BB%87%20Th%E1%BB%91ng%20Trung%20Y%20-%20%E1%BB%A8c%20%E1%BB%90c%20Ng%C6%B0.epub" },
	{ date: "01-02-2025", name: "Hoả Chủng Vạn Năng - Hạ Quân Cát", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/Hoa-Chung-Van-Nang.png", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ho%E1%BA%A3%20Ch%E1%BB%A7ng%20V%E1%BA%A1n%20N%C4%83ng%20-%20H%E1%BA%A1%20Qu%C3%A2n%20C%C3%A1t.epub" },
	{ date: "01-02-2025", name: "Huấn Luyện Viên Zombies - Khắc Văn", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/huan-luyen-vien-zombies-khac-van.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Hu%E1%BA%A5n%20Luy%E1%BB%87n%20Vi%C3%AAn%20Zombies%20-%20Kh%E1%BA%AFc%20V%C4%83n.epub" },
	{ date: "01-02-2025", name: "Huyền Môn Thần Toán Bói Quẻ Quá Linh Toàn Kinh Thành Chấn Động - Xán Lam", imageUrl: "https://ebookvie.com/wp-content/uploads/2025/01/huyen-mon-than-toan-boi-que-qua-linh-toan-kinh-thanh-chan-dong-xan-lam.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Huy%E1%BB%81n%20M%C3%B4n%20Th%E1%BA%A7n%20To%C3%A1n%20B%C3%B3i%20Qu%E1%BA%BB%20Qu%C3%A1%20Linh%20To%C3%A0n%20Kinh%20Th%C3%A0nh%20Ch%E1%BA%A5n%20%C4%90%E1%BB%99ng%20-%20X%C3%A1n%20Lam.epub" },
	{ date: "01-02-2025", name: "Khai Cuộc Nữ Đế Làm Chính Cung - Kình Bạo Tiểu Long Hà", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/khai-cuoc-nu-de-lam-chinh-cung-kinh-bao-tieu-long-ha.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Khai%20Cu%E1%BB%99c%20N%E1%BB%AF%20%C4%90%E1%BA%BF%20L%C3%A0m%20Ch%C3%ADnh%20Cung%20-%20K%C3%ACnh%20B%E1%BA%A1o%20Ti%E1%BB%83u%20Long%20H%C3%A0.epub" },
	{ date: "01-02-2025", name: "Khí Vũ Trụ - Ta Là Lão Ngũ", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/khi-vu-tru-ta-la-lao-ngu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Kh%C3%AD%20V%C5%A9%20Tr%E1%BB%A5%20-%20Ta%20L%C3%A0%20L%C3%A3o%20Ng%C5%A9.epub" },
	{ date: "01-02-2025", name: "Khiếm Thị Bẩm Sinh Khởi Nghiệp Từ Chơi Đàn Nhị - Ai Hào Đích Cuồng Phong", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/khiem-thi-bam-sinh-khoi-nghiep-tu-choi-dan-nhi-ai-hao-dich-cuong-phong.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Khi%E1%BA%BFm%20Th%E1%BB%8B%20B%E1%BA%A9m%20Sinh%20Kh%E1%BB%9Fi%20Nghi%E1%BB%87p%20T%E1%BB%AB%20Ch%C6%A1i%20%C4%90%C3%A0n%20Nh%E1%BB%8B%20-%20Ai%20H%C3%A0o%20%C4%90%C3%ADch%20Cu%E1%BB%93ng%20Phong.epub" },
	{ date: "01-02-2025", name: "Không Để Ta Chết Nữa Ta Vô Địch Thật Đấy - Cần Phấn Mã Tự Nhân", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Ma Pháp Công Nghiệp Đế Quốc - Buổi Tối Giờ Cao Điểm", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ma-phap-cong-nghiep-de-quoc-buoi-toi-gio-cao-diem.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Mạt Thế Chi Toàn Năng Đại Sư - Tần Tiểu Từ", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Mạt Thế Chi Toàn Năng Đại Sư - Tần Tiểu Từ", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Mệnh Luân Chi Chủ - Mệnh Cấp Nhĩ Hành Bất Hành", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/Vong-Du-Chi-Menh-Luan-Chi-Chu.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Mỗi Tuần Ta Có Một Nghề Mới - Vô Hữu", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/moi-tuan-ta-co-mot-nghe-moi-vo-huu.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Ngự Thú Chi Vương - Khinh Tuyền Lưu Hưởng", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ngu-thu-chi-vuong-khinh-tuyen-luu-huong.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Người Lữ Khách Vô Hình - Paul Jacques Bonzon", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Nhà Tiên Tri Được Chọn - Mộc Xích Tố", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Nhân Đạo Đại Thánh - Mạc Mặc", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Nữ Đế Phu Quân Ẩn Cư Mười Năm Một Kiếm Trảm Tiên Đế - Nhất Quyền Manh Vương", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Nữ Hiệp Chậm Đã - Quan Quan Công Tử", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Nương Tử Nhà Ta Là Kiếm Thần - Nhất Sinh Yếu Cường Đích Phì Tử", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/nuong-tu-nha-ta-la-kiem-than-nhat-sinh-yeu-cuong-dich-phi-tu.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Quầy Hàng Vỉa Hè Của Ta Cực Mạnh - Dịch Thanh Phong", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Quốc Vương - Tân Hải Nguyệt 1", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Sét Hòn Tử Thần Trên Sa Mạc Gobi - Lưu Từ Hân", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Silo Tháp Giống 1 - Len Chùi - Hugh Howey", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/05/Len-Chui-Silo-Thap-Giong-1.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Silo Tháp Giống 2 - Ca Trực - Hugh Howey", imageUrl: "https://ebookvie.com/wp-content/uploads/2025/02/Ca-Truc-Silo-Thap-Giong-2.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Sư Phụ Ta Mỗi Đến Đại Nạn Mới Đột Phá - Trư Nhục 200 Cân", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/su-phu-ta-moi-den-dai-nan-moi-dot-pha-tru-nhuc-200-can.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Ta Là Thần Cấp Đại Phản Phái - Anh Tuấn Đích Tiểu Cáp", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ta-la-than-cap-dai-phan-phai-anh-tuan-dich-tieu-cap.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Ta Mô Phỏng Con Đường Trường Sinh Trong Nhóm Chat - Nộn Lăng Như Mộng", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ta-mo-phong-con-duong-truong-sinh-trong-nhom-chat-non-lang-nhu-mong.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Ta Sửa Đổi Vô Hạn Độc Đoán Vạn Cổ - Khán Bản Thư Đích Nhân Đô Suất", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ta-sua-doi-vo-han-doc-doan-van-co-khan-ban-thu-dich-nhan-do-suat.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Ta Tại Tận Thế Nhặt Bảo Rương - Tử Vong Chàng Kích", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ta-tai-tan-the-nhat-bao-ruong-tu-vong-chang-kich.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Ta Thật Không Muốn Trọng Sinh A - Liễu Ngạn Hoa Hựu Minh", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ta-that-khong-muon-trong-sinh-a-lieu-ngan-hoa-huu-minh.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Ta Trở Thành Truyền Thuyết Ở Hồng Kông - Phượng Trào Hoàng", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Ta Vô Địch Từ Phá Của Bắt Đầu - Chiến Thiên Ngân", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Thần Cấp Đại Điếm Trưởng - Ly Thiên Võng Lượng", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Thế Giới Chúng Thần (Thế Giới Của Các Vị Thần) - Vĩnh Hằng Chi Hỏa", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/the-gioi-chung-than-the-gioi-cua-cac-vi-than-vinh-hang-chi-hoa.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Thiên Tài Tiên Đạo - Bông Lan", imageUrl: "https://ebookvie.com/wp-content/uploads/2025/01/thien-tai-tien-dao-bong-lan.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Thuật Sĩ - Thanh Kiếm Định Mệnh - Andrzej Sapkowski", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Toàn Dân Võng Du - Bắt Đầu Vô Hạn Điểm Kỹ Năng - Trần Thần Tinh", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/toan-dan-vong-du-bat-dau-vo-han-diem-ky-nang-tran-than-tinh.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Tôi Muốn Đi Sờ Cá Ở Cục Yêu Quái - Giang Nguyệt Niên Niên", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/toi-muon-di-so-ca-o-cuc-yeu-quai-giang-nguyet-nien-nien.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Tu Chân Liêu Thiên Quần - Thánh Kỵ Sĩ Truyền Thuyết", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "Tuyệt Phẩm Thiên Y - Diệp Thiên Nam", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/tuyet-pham-thien-y-diep-thien-nam.jpg", linkUrl: "#" },
	{ date: "01-02-2025", name: "Võng Du Sống Cùng Mỹ Nữ - Long Quy", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "01-02-2025", name: "#", imageUrl: "#", linkUrl: "#" }
  ];

  // Hiển thị danh sách ảnh dưới dạng thẻ li
  function displayImages(imageArray) {
    const listContainer = document.getElementById("imageList");
    listContainer.innerHTML = ""; // Xóa danh sách cũ

    imageArray.forEach(image => {
      // Nếu imageUrl và linkUrl đều là "#", bỏ qua đối tượng đó.
      if (image.imageUrl === "#" && image.linkUrl === "#") {
        return;
      }

      // Nếu linkUrl là "#" thì hiển thị nút "Đang cập nhật"
      let buttonHTML = "";
      if (image.linkUrl === "#") {
        buttonHTML = `<span class="button disabled">Đang cập nhật</span>`;
      } else {
        buttonHTML = `<a href="${image.linkUrl}" target="_blank" rel="noopener noreferrer" class="button">Download</a>`;
      }

      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <img src="${image.imageUrl}" alt="${image.name}">
        <div class="download-button">
          ${buttonHTML}
        </div>
      `;
      listContainer.appendChild(listItem);
    });
  }

  // Sắp xếp mảng đối tượng theo thuộc tính name (A → Z)
  function sortImagesByName(arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Lọc các đối tượng theo truy vấn tìm kiếm dựa trên name (không phân biệt chữ hoa, chữ thường)
  function filterImages(query) {
    const lowerQuery = query.toLowerCase();
    return images.filter(image => image.name.toLowerCase().includes(lowerQuery));
  }

  // Khởi tạo: hiển thị danh sách ảnh và thiết lập sự kiện cho thanh tìm kiếm
  function init() {
    // Hiển thị tất cả các ảnh (sắp xếp theo name)
    displayImages(sortImagesByName([...images])); // Sử dụng bản sao của mảng images

    // Thiết lập sự kiện cho thanh tìm kiếm
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", function() {
        const query = searchInput.value;
        // Lọc theo truy vấn và sắp xếp theo name trước khi hiển thị
        const filtered = sortImagesByName(filterImages(query));
        displayImages(filtered);
      });
    }
  }

  init();

  return {
    displayImages,
    sortImagesByName,
    filterImages
  };
})();
