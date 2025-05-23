const ImageList = (function() {
  const images = [
    { genes: "Viễn Tưởng, Tiểu Thuyết", name: "Bá Võ - Khai Hoang", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
	{ genes: "Viễn Tưởng, Hiện Thực, Tiểu Thuyết", name: "Bậc Thầy Phong Thủy - Đào Hoa Độ", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bac-thay-phong-thuy-dao-hoa-do.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BA%ADc%20Th%E1%BA%A7y%20Phong%20Th%E1%BB%A7y%20-%20%C4%90%C3%A0o%20Hoa%20%C4%90%E1%BB%99.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Bảo Ngươi Làm Trò Chơi Ngươi Lại Làm Video CG - Tiềm Thủy Đích Oa Ba", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bao-nguoi-lam-tro-choi2c-nguoi-lai-lam-video-cg_-tiem-thuy-dich-oa-ba.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BA%A3o%20Ng%C6%B0%C6%A1i%20L%C3%A0m%20Tr%C3%B2%20Ch%C6%A1i%20Ng%C6%B0%C6%A1i%20L%E1%BA%A1i%20L%C3%A0m%20Video%20CG%20-%20Ti%E1%BB%81m%20Th%E1%BB%A7y%20%C4%90%C3%ADch%20Oa%20Ba.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Bắt Đầu Đánh Dấu Hoang Cổ Thánh Thể - J Thần", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bat-dau-danh-dau-hoang-co-thanh-the-j-than.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BA%AFt%20%C4%90%E1%BA%A7u%20%C4%90%C3%A1nh%20D%E1%BA%A5u%20Hoang%20C%E1%BB%95%20Th%C3%A1nh%20Th%E1%BB%83%20-%20J%20Th%E1%BA%A7n.epub" },
	{ genes: "Viễn Tưởng", name: "Bắt Đầu Nạp Tiền Một Tỷ - Tiểu Tiểu Yêu Tiên", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bat-dau-nap-tien-mot-ty-tieu-tieu-yeu-tien.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BA%AFt%20%C4%90%E1%BA%A7u%20N%E1%BA%A1p%20Ti%E1%BB%81n%20M%E1%BB%99t%20T%E1%BB%B7%20-%20Ti%E1%BB%83u%20Ti%E1%BB%83u%20Y%C3%AAu%20Ti%C3%AAn.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Bắt Đầu Quá Mạnh Làm Sao Bây Giờ - Phạm Thần", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bat-dau-qua-manh-lam-sao-bay-gio-pham-than.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BA%AFt%20%C4%90%E1%BA%A7u%20Qu%C3%A1%20M%E1%BA%A1nh%20L%C3%A0m%20Sao%20B%C3%A2y%20Gi%E1%BB%9D%20-%20Ph%E1%BA%A1m%20Th%E1%BA%A7n.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Bắt Đầu Từ Hỗn Độn Thể - Tiên Nữ Xuyên Liễu Bàn Thứ", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/huyen-huyen-bat-dau-tu-hon-don-the-tien-nu-xuyen-lieu-ban-thu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BA%AFt%20%C4%90%E1%BA%A7u%20T%E1%BB%AB%20H%E1%BB%97n%20%C4%90%E1%BB%99n%20Th%E1%BB%83%20-%20Ti%C3%AAn%20N%E1%BB%AF%20Xuy%C3%AAn%20Li%E1%BB%85u%20B%C3%A0n%20Th%E1%BB%A9.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Bảy Vị Sư Tỷ Tuyệt Sắc Của Ta - Lạp Mỗ Ca", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bay-vi-su-ty-tuyet-sac-cua-ta-lap-mo-ca.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BA%A3y%20V%E1%BB%8B%20S%C6%B0%20T%E1%BB%B7%20Tuy%E1%BB%87t%20S%E1%BA%AFc%20C%E1%BB%A7a%20Ta%20-%20L%E1%BA%A1p%20M%E1%BB%97%20Ca.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Bột Mì Vĩnh Cửu - Alexander Romanovich Belyaev", imageUrl: "https://ebookvie.com/wp-content/uploads/2025/01/bot-mi-vinh-cuu-alexander-romanovich-belyaev-le-khanh-truong-dich-pham-dang-que-dich.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%E1%BB%99t%20M%C3%AC%20V%C4%A9nh%20C%E1%BB%ADu%20-%20Alexander%20Romanovich%20Belyaev.epub" },
	{ genes: "Viễn Tưởng", name: "Cái Nguyền Rủa Này Thật Quá Tuyệt Vời - Hành Giả Hữu Tam", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/cai-nguyen-rua-nay-that-qua-tuyet-voi-hanh-gia-huu-tam.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/C%C3%A1i%20Nguy%E1%BB%81n%20R%E1%BB%A7a%20N%C3%A0y%20Th%E1%BA%ADt%20Qu%C3%A1%20Tuy%E1%BB%87t%20V%E1%BB%9Di%20-%20H%C3%A0nh%20Gi%E1%BA%A3%20H%E1%BB%AFu%20Tam.epub" },
	{ genes: "Viễn Tưởng", name: "Càn Khôn Kiếm Thần - Trần Sơn", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/can-khon-kiem-than-tran-son.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/C%C3%A0n%20Kh%C3%B4n%20Ki%E1%BA%BFm%20Th%E1%BA%A7n%20-%20Tr%E1%BA%A7n%20S%C6%A1n.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Cậu Cả Tu Chân - Vũ Hạ Đích Hảo Đại", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/cau-ca-tu-chan-vu-ha-dich-hao-dai.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/C%E1%BA%ADu%20C%E1%BA%A3%20Tu%20Ch%C3%A2n%20-%20V%C5%A9%20H%E1%BA%A1%20%C4%90%C3%ADch%20H%E1%BA%A3o%20%C4%90%E1%BA%A1i.epub" },
	{ genes: "Viễn Tưởng", name: "Câu Lạc Bộ Thiên Tài - Thành Thành Dữ Thiền", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/cau-lac-bo-thien-tai-thanh-thanh-du-thien.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/C%C3%A2u%20L%E1%BA%A1c%20B%E1%BB%99%20Thi%C3%AAn%20T%C3%A0i%20-%20Th%C3%A0nh%20Th%C3%A0nh%20D%E1%BB%AF%20Thi%E1%BB%81n.epub" },
	{ genes: "Viễn Tưởng", name: "Cày Tại Tận Thế Thêm Điểm Thăng Cấp - Tân Phong", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/cay-tai-tan-the-them-diem-thang-cap-tan-phong.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/C%C3%A0y%20T%E1%BA%A1i%20T%E1%BA%ADn%20Th%E1%BA%BF%20Th%C3%AAm%20%C4%90i%E1%BB%83m%20Th%C4%83ng%20C%E1%BA%A5p%20-%20T%C3%A2n%20Phong.epub" },
	{ genes: "Viễn Tưởng", name: "Chăn Nuôi Toàn Nhân Loại - Tam Bách Cân Đích Vi Tiếu", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/chan-nuoi-toan-nhan-loai-tam-bach-can-dich-vi-tieu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ch%C4%83n%20Nu%C3%B4i%20To%C3%A0n%20Nh%C3%A2n%20Lo%E1%BA%A1i%20-%20Tam%20B%C3%A1ch%20C%C3%A2n%20%C4%90%C3%ADch%20Vi%20Ti%E1%BA%BFu.epub" },
	{ genes: "Viễn Tưởng, Hài Hước", name: "Chuyện Làm Mai Mối Trước Giờ Ta Chưa Phục Ai Cả - Nhị Xà", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/chuyen-lam-mai-moi-truoc-gio-ta-chua-phuc-ai-ca-nhi-xa.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Chuy%E1%BB%87n%20L%C3%A0m%20Mai%20M%E1%BB%91i%20Tr%C6%B0%E1%BB%9Bc%20Gi%E1%BB%9D%20Ta%20Ch%C6%B0a%20Ph%E1%BB%A5c%20Ai%20C%E1%BA%A3%20-%20Nh%E1%BB%8B%20X%C3%A0.epub" },
	{ genes: "Viễn Tưởng", name: "Circe - Madeline Miller - Madeline Miller", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/09/Circe-Madeline-Miller.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Circe%20-%20Madeline%20Miller%20-%20Madeline%20Miller.epub" },
	{ genes: "Viễn Tưởng", name: "Cỗ Máy Thời Gian - Herbert George Wells", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/09/Co-May-Thoi-Gian.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/C%E1%BB%97%20M%C3%A1y%20Th%E1%BB%9Di%20Gian%20-%20Herbert%20George%20Wells.epub" },
	{ genes: "Viễn Tưởng", name: "Cuộc Sống Hàng Ngày Của Đại Sư Huyền Học - Ngư Diệu Thanh", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/cuoc-song-hang-ngay-cua-dai-su-huyen-hoc-ngu-dieu-thanh.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Cu%E1%BB%99c%20S%E1%BB%91ng%20H%C3%A0ng%20Ng%C3%A0y%20C%E1%BB%A7a%20%C4%90%E1%BA%A1i%20S%C6%B0%20Huy%E1%BB%81n%20H%E1%BB%8Dc%20-%20Ng%C6%B0%20Di%E1%BB%87u%20Thanh.epub" },
	{ genes: "Viễn Tưởng, Lịch Sử", name: "Đại Minh Trong Chiếc Hộp - Tam Thập Nhị Biến", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/dai-minh-trong-chiec-hop-tam-thap-nhi-bien.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/%C4%90%E1%BA%A1i%20Minh%20Trong%20Chi%E1%BA%BFc%20H%E1%BB%99p%20-%20Tam%20Th%E1%BA%ADp%20Nh%E1%BB%8B%20Bi%E1%BA%BFn.epub" },
	{ genes: "Viễn Tưởng, Xuyên Không, Hài Hước", name: "Đập Nồi Bán Sắt Đi Học - Hồng Thứ Bắc", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/dap-noi-ban-sat-di-hoc-hong-thu-bac.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/%C4%90%E1%BA%ADp%20N%E1%BB%93i%20B%C3%A1n%20S%E1%BA%AFt%20%C4%90i%20H%E1%BB%8Dc%20-%20H%E1%BB%93ng%20Th%E1%BB%A9%20B%E1%BA%AFc.epub" },
	{ genes: "Viễn Tưởng", name: "Dark Matter Người Chạy Xuyên Không Gian - Blake Crouch", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/07/Dark-Matter-Nguoi-Chay-Xuyen-Khong-Gian.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Dark%20Matter%20Ng%C6%B0%E1%BB%9Di%20Ch%E1%BA%A1y%20Xuy%C3%AAn%20Kh%C3%B4ng%20Gian%20-%20Blake%20Crouch.epub" },
	{ genes: "Viễn Tưởng, Phiêu Lưu", name: "Dạy Đồ Vạn Lần Trả Về Vi Sư Chưa Từng Tàng Tư - Tố Dữ", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/day-do-van-lan-tra-ve-vi-su-chua-tung-tang-tu-to-du.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/D%E1%BA%A1y%20%C4%90%E1%BB%93%20V%E1%BA%A1n%20L%E1%BA%A7n%20Tr%E1%BA%A3%20V%E1%BB%81%20Vi%20S%C6%B0%20Ch%C6%B0a%20T%E1%BB%ABng%20T%C3%A0ng%20T%C6%B0%20-%20T%E1%BB%91%20D%E1%BB%AF.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Dị Giới Dược Tề Sư - Nhất Điều Hàm Ngư C", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/di-gioi-duoc-te-su-nhat-dieu-ham-ngu-c.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/D%E1%BB%8B%20Gi%E1%BB%9Bi%20D%C6%B0%E1%BB%A3c%20T%E1%BB%81%20S%C6%B0%20-%20Nh%E1%BA%A5t%20%C4%90i%E1%BB%81u%20H%C3%A0m%20Ng%C6%B0%20C.epub" },
	{ genes: "Viễn Tưởng", name: "Diệt Chủng - Takano Kazuaki - Takano Kazuaki", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/07/Diet-Chung.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Di%E1%BB%87t%20Ch%E1%BB%A7ng%20-%20Takano%20Kazuaki%20-%20Takano%20Kazuaki.epub" },
	{ genes: "Viễn Tưởng, Lãng Mạn, Tiểu Thuyết", name: "Đỉnh Phong Thiên Hạ - SS Hà Thần", imageUrl: "https://ebookvie.com/wp-content/uploads/2025/01/dinh-phong-thien-ha-ss-ha-than.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/%C4%90%E1%BB%89nh%20Phong%20Thi%C3%AAn%20H%E1%BA%A1%20-%20SS%20H%C3%A0%20Th%E1%BA%A7n.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Gia Gia Tạo Phản Tại Dị Giới Ta Liền Vô Địch Ở Đô Thị - Nhất Chích Vi Bàn Đích Bì Bì Hà", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/gia-gia-tao-phan-tai-di-gioi-ta-lien-vo-dich-o-do-thi-nhat-chich-vi-ban-dich-bi-bi-ha.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Gia%20Gia%20T%E1%BA%A1o%20Ph%E1%BA%A3n%20T%E1%BA%A1i%20D%E1%BB%8B%20Gi%E1%BB%9Bi%20Ta%20Li%E1%BB%81n%20V%C3%B4%20%C4%90%E1%BB%8Bch%20%E1%BB%9E%20%C4%90%C3%B4%20Th%E1%BB%8B%20-%20Nh%E1%BA%A5t%20Ch%C3%ADch%20Vi%20B%C3%A0n%20%C4%90%C3%ADch%20B%C3%AC%20B%C3%AC%20H%C3%A0.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Hệ Thống Cứu Vãn Nữ Thần - Thanh Sơn Đào Cốc", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/he-thong-cuu-van-nu-than-thanh-son-dao-coc.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/H%E1%BB%87%20Th%E1%BB%91ng%20C%E1%BB%A9u%20V%C3%A3n%20N%E1%BB%AF%20Th%E1%BA%A7n%20-%20Thanh%20S%C6%A1n%20%C4%90%C3%A0o%20C%E1%BB%91c.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Hệ Thống Trung Y - Ức Ốc Ngư", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/he-thong-trung-y-uc-oc-ngu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/H%E1%BB%87%20Th%E1%BB%91ng%20Trung%20Y%20-%20%E1%BB%A8c%20%E1%BB%90c%20Ng%C6%B0.epub" },
	{ genes: "Viễn Tưởng", name: "Hoả Chủng Vạn Năng - Hạ Quân Cát", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/Hoa-Chung-Van-Nang.png", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ho%E1%BA%A3%20Ch%E1%BB%A7ng%20V%E1%BA%A1n%20N%C4%83ng%20-%20H%E1%BA%A1%20Qu%C3%A2n%20C%C3%A1t.epub" },
	{ genes: "Viễn Tưởng", name: "Huấn Luyện Viên Zombies - Khắc Văn", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/huan-luyen-vien-zombies-khac-van.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Hu%E1%BA%A5n%20Luy%E1%BB%87n%20Vi%C3%AAn%20Zombies%20-%20Kh%E1%BA%AFc%20V%C4%83n.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Huyền Môn Thần Toán Bói Quẻ Quá Linh Toàn Kinh Thành Chấn Động - Xán Lam", imageUrl: "https://ebookvie.com/wp-content/uploads/2025/01/huyen-mon-than-toan-boi-que-qua-linh-toan-kinh-thanh-chan-dong-xan-lam.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Huy%E1%BB%81n%20M%C3%B4n%20Th%E1%BA%A7n%20To%C3%A1n%20B%C3%B3i%20Qu%E1%BA%BB%20Qu%C3%A1%20Linh%20To%C3%A0n%20Kinh%20Th%C3%A0nh%20Ch%E1%BA%A5n%20%C4%90%E1%BB%99ng%20-%20X%C3%A1n%20Lam.epub" },
	{ genes: "Viễn Tưởng", name: "Khai Cuộc Nữ Đế Làm Chính Cung - Kình Bạo Tiểu Long Hà", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/khai-cuoc-nu-de-lam-chinh-cung-kinh-bao-tieu-long-ha.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Khai%20Cu%E1%BB%99c%20N%E1%BB%AF%20%C4%90%E1%BA%BF%20L%C3%A0m%20Ch%C3%ADnh%20Cung%20-%20K%C3%ACnh%20B%E1%BA%A1o%20Ti%E1%BB%83u%20Long%20H%C3%A0.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Khí Vũ Trụ - Ta Là Lão Ngũ", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/khi-vu-tru-ta-la-lao-ngu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Kh%C3%AD%20V%C5%A9%20Tr%E1%BB%A5%20-%20Ta%20L%C3%A0%20L%C3%A3o%20Ng%C5%A9.epub" },
	{ genes: "Viễn Tưởng", name: "Khiếm Thị Bẩm Sinh Khởi Nghiệp Từ Chơi Đàn Nhị - Ai Hào Đích Cuồng Phong", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/khiem-thi-bam-sinh-khoi-nghiep-tu-choi-dan-nhi-ai-hao-dich-cuong-phong.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Khi%E1%BA%BFm%20Th%E1%BB%8B%20B%E1%BA%A9m%20Sinh%20Kh%E1%BB%9Fi%20Nghi%E1%BB%87p%20T%E1%BB%AB%20Ch%C6%A1i%20%C4%90%C3%A0n%20Nh%E1%BB%8B%20-%20Ai%20H%C3%A0o%20%C4%90%C3%ADch%20Cu%E1%BB%93ng%20Phong.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Không Để Ta Chết Nữa Ta Vô Địch Thật Đấy - Cần Phấn Mã Tự Nhân", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/khong-de-ta-chet-nua-ta-vo-dich-that-day-can-phan-ma-tu-nhan.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Kh%C3%B4ng%20%C4%90%E1%BB%83%20Ta%20Ch%E1%BA%BFt%20N%E1%BB%AFa%20Ta%20V%C3%B4%20%C4%90%E1%BB%8Bch%20Th%E1%BA%ADt%20%C4%90%E1%BA%A5y%20-%20C%E1%BA%A7n%20Ph%E1%BA%A5n%20M%C3%A3%20T%E1%BB%B1%20Nh%C3%A2n.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Ma Pháp Công Nghiệp Đế Quốc - Buổi Tối Giờ Cao Điểm", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ma-phap-cong-nghiep-de-quoc-buoi-toi-gio-cao-diem.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ma%20Ph%C3%A1p%20C%C3%B4ng%20Nghi%E1%BB%87p%20%C4%90%E1%BA%BF%20Qu%E1%BB%91c%20-%20Bu%E1%BB%95i%20T%E1%BB%91i%20Gi%E1%BB%9D%20Cao%20%C4%90i%E1%BB%83m.epub" },
	{ genes: "Viễn Tưởng, Xuyên Không", name: "Mạt Thế Chi Toàn Năng Đại Sư - Tần Tiểu Từ", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/mat-the-chi-toan-nang-dai-su-tan-tieu-tu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/M%E1%BA%A1t%20Th%E1%BA%BF%20Chi%20To%C3%A0n%20N%C4%83ng%20%C4%90%E1%BA%A1i%20S%C6%B0%20-%20T%E1%BA%A7n%20Ti%E1%BB%83u%20T%E1%BB%AB.epub" },
	{ genes: "Viễn Tưởng", name: "Max Cấp Ngoan Nhân - Phật Bất Độ", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/Max-Cap-Ngoan-Nhan.webp", linkUrl: "https://archive.org/download/ebook-vien-tuong/Max%20C%E1%BA%A5p%20Ngoan%20Nh%C3%A2n%20-%20Ph%E1%BA%ADt%20B%E1%BA%A5t%20%C4%90%E1%BB%99.epub" },
	{ genes: "Viễn Tưởng", name: "Mệnh Luân Chi Chủ - Mệnh Cấp Nhĩ Hành Bất Hành", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/Vong-Du-Chi-Menh-Luan-Chi-Chu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/M%E1%BB%87nh%20Lu%C3%A2n%20Chi%20Ch%E1%BB%A7%20-%20M%E1%BB%87nh%20C%E1%BA%A5p%20Nh%C4%A9%20H%C3%A0nh%20B%E1%BA%A5t%20H%C3%A0nh.epub" },
	{ genes: "Viễn Tưởng", name: "Mỗi Tuần Ta Có Một Nghề Mới - Vô Hữu", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/moi-tuan-ta-co-mot-nghe-moi-vo-huu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/M%E1%BB%97i%20Tu%E1%BA%A7n%20Ta%20C%C3%B3%20M%E1%BB%99t%20Ngh%E1%BB%81%20M%E1%BB%9Bi%20-%20V%C3%B4%20H%E1%BB%AFu.epub" },
	{ genes: "Viễn Tưởng", name: "Ngự Thú Chi Vương - Khinh Tuyền Lưu Hưởng", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ngu-thu-chi-vuong-khinh-tuyen-luu-huong.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ng%E1%BB%B1%20Th%C3%BA%20Chi%20V%C6%B0%C6%A1ng%20-%20Khinh%20Tuy%E1%BB%81n%20L%C6%B0u%20H%C6%B0%E1%BB%9Fng.epub" },
	{ genes: "Viễn Tưởng", name: "Người Lữ Khách Vô Hình - Paul Jacques Bonzon", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/07/nguoi-lu-khach-vo-hinh-paul-jacques-bonzon-ngo-chanh-dich.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ng%C6%B0%E1%BB%9Di%20L%E1%BB%AF%20Kh%C3%A1ch%20V%C3%B4%20H%C3%ACnh%20-%20Paul%20Jacques%20Bonzon.epub" },
	{ genes: "Viễn Tưởng", name: "Nhà Tiên Tri Được Chọn - Mộc Xích Tố", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/nha-tien-tri-duoc-chon-moc-xich-to.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Nh%C3%A0%20Ti%C3%AAn%20Tri%20%C4%90%C6%B0%E1%BB%A3c%20Ch%E1%BB%8Dn%20-%20M%E1%BB%99c%20X%C3%ADch%20T%E1%BB%91.epub" },
	{ genes: "Viễn Tưởng", name: "Nhân Đạo Đại Thánh - Mạc Mặc", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/nhan-dao-dai-thanh.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Nh%C3%A2n%20%C4%90%E1%BA%A1o%20%C4%90%E1%BA%A1i%20Th%C3%A1nh%20-%20M%E1%BA%A1c%20M%E1%BA%B7c.epub" },
	{ genes: "Viễn Tưởng", name: "Nữ Đế Phu Quân Ẩn Cư Mười Năm Một Kiếm Trảm Tiên Đế - Nhất Quyền Manh Vương", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/nu-de_-phu-quan-an-cu-muoi-nam-mot-kiem-tram-tien-de-nhat-quyen-manh-vuong.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/N%E1%BB%AF%20%C4%90%E1%BA%BF%20Phu%20Qu%C3%A2n%20%E1%BA%A8n%20C%C6%B0%20M%C6%B0%E1%BB%9Di%20N%C4%83m%20M%E1%BB%99t%20Ki%E1%BA%BFm%20Tr%E1%BA%A3m%20Ti%C3%AAn%20%C4%90%E1%BA%BF%20-%20Nh%E1%BA%A5t%20Quy%E1%BB%81n%20Manh%20V%C6%B0%C6%A1ng.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Nữ Hiệp Chậm Đã - Quan Quan Công Tử", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/nu-hiep-cham-da-quan-quan-cong-tu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/N%E1%BB%AF%20Hi%E1%BB%87p%20Ch%E1%BA%ADm%20%C4%90%C3%A3%20-%20Quan%20Quan%20C%C3%B4ng%20T%E1%BB%AD.epub" },
	{ genes: "Viễn Tưởng, Xuyên Không", name: "Nương Tử Nhà Ta Là Kiếm Thần - Nhất Sinh Yếu Cường Đích Phì Tử", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/nuong-tu-nha-ta-la-kiem-than-nhat-sinh-yeu-cuong-dich-phi-tu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/N%C6%B0%C6%A1ng%20T%E1%BB%AD%20Nh%C3%A0%20Ta%20L%C3%A0%20Ki%E1%BA%BFm%20Th%E1%BA%A7n%20-%20Nh%E1%BA%A5t%20Sinh%20Y%E1%BA%BFu%20C%C6%B0%E1%BB%9Dng%20%C4%90%C3%ADch%20Ph%C3%AC%20T%E1%BB%AD.epub" },
	{ genes: "Viễn Tưởng", name: "Quầy Hàng Vỉa Hè Của Ta Cực Mạnh - Dịch Thanh Phong", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/quay-hang-via-he-cua-ta-cuc-manh-dich-thanh-phong.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Qu%E1%BA%A7y%20H%C3%A0ng%20V%E1%BB%89a%20H%C3%A8%20C%E1%BB%A7a%20Ta%20C%E1%BB%B1c%20M%E1%BA%A1nh%20-%20D%E1%BB%8Bch%20Thanh%20Phong.epub" },
	{ genes: "Viễn Tưởng", name: "Quốc Vương - Tân Hải Nguyệt 1", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/quoc-vuong-tan-hai-nguyet-1.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Qu%E1%BB%91c%20V%C6%B0%C6%A1ng%20-%20T%C3%A2n%20H%E1%BA%A3i%20Nguy%E1%BB%87t%201.epub" },
	{ genes: "Viễn Tưởng", name: "Sét Hòn Tử Thần Trên Sa Mạc Gobi - Lưu Từ Hân", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/08/Set-Hon-Tu-Than-Tren-Sa-Mac-Gobi.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/S%C3%A9t%20H%C3%B2n%20T%E1%BB%AD%20Th%E1%BA%A7n%20Tr%C3%AAn%20Sa%20M%E1%BA%A1c%20Gobi%20-%20L%C6%B0u%20T%E1%BB%AB%20H%C3%A2n.epub" },
	{ genes: "Viễn Tưởng", name: "Silo Tháp Giống 1 - Len Chùi - Hugh Howey", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/05/Len-Chui-Silo-Thap-Giong-1.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Len%20Ch%C3%B9i%20-%20Silo%20Th%C3%A1p%20Gi%E1%BB%91ng%201%20-%20%20Hugh%20Howey.epub" },
	{ genes: "Viễn Tưởng", name: "Silo Tháp Giống 2 - Ca Trực - Hugh Howey", imageUrl: "https://ebookvie.com/wp-content/uploads/2025/02/Ca-Truc-Silo-Thap-Giong-2.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ca%20Tr%E1%BB%B1c%20-%20Silo%20Th%C3%A1p%20Gi%E1%BB%91ng%202%20-%20Hugh%20Howey.epub" },
	{ genes: "Viễn Tưởng", name: "Sư Phụ Ta Mỗi Đến Đại Nạn Mới Đột Phá - Trư Nhục 200 Cân", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/su-phu-ta-moi-den-dai-nan-moi-dot-pha-tru-nhuc-200-can.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/S%C6%B0%20Ph%E1%BB%A5%20Ta%20M%E1%BB%97i%20%C4%90%E1%BA%BFn%20%C4%90%E1%BA%A1i%20N%E1%BA%A1n%20M%E1%BB%9Bi%20%C4%90%E1%BB%99t%20Ph%C3%A1%20-%20Tr%C6%B0%20Nh%E1%BB%A5c%20200%20C%C3%A2n.epub" },
	{ genes: "Viễn Tưởng, Xuyên Không", name: "Ta Là Thần Cấp Đại Phản Phái - Anh Tuấn Đích Tiểu Cáp", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ta-la-than-cap-dai-phan-phai-anh-tuan-dich-tieu-cap.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ta%20L%C3%A0%20Th%E1%BA%A7n%20C%E1%BA%A5p%20%C4%90%E1%BA%A1i%20Ph%E1%BA%A3n%20Ph%C3%A1i%20-%20Anh%20Tu%E1%BA%A5n%20%C4%90%C3%ADch%20Ti%E1%BB%83u%20C%C3%A1p.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Ta Mô Phỏng Con Đường Trường Sinh Trong Nhóm Chat - Nộn Lăng Như Mộng", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ta-mo-phong-con-duong-truong-sinh-trong-nhom-chat-non-lang-nhu-mong.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ta%20M%C3%B4%20Ph%E1%BB%8Fng%20Con%20%C4%90%C6%B0%E1%BB%9Dng%20Tr%C6%B0%E1%BB%9Dng%20Sinh%20Trong%20Nh%C3%B3m%20Chat%20-%20N%E1%BB%99n%20L%C4%83ng%20Nh%C6%B0%20M%E1%BB%99ng.epub" },
	{ genes: "Viễn Tưởng, Phiêu Lưu", name: "Ta Sửa Đổi Vô Hạn Độc Đoán Vạn Cổ - Khán Bản Thư Đích Nhân Đô Suất", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ta-sua-doi-vo-han-doc-doan-van-co-khan-ban-thu-dich-nhan-do-suat.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ta%20S%E1%BB%ADa%20%C4%90%E1%BB%95i%20V%C3%B4%20H%E1%BA%A1n%20%C4%90%E1%BB%99c%20%C4%90o%C3%A1n%20V%E1%BA%A1n%20C%E1%BB%95%20-%20Kh%C3%A1n%20B%E1%BA%A3n%20Th%C6%B0%20%C4%90%C3%ADch%20Nh%C3%A2n%20%C4%90%C3%B4%20Su%E1%BA%A5t.epub" },
	{ genes: "Viễn Tưởng", name: "Ta Tại Tận Thế Nhặt Bảo Rương - Tử Vong Chàng Kích", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ta-tai-tan-the-nhat-bao-ruong-tu-vong-chang-kich.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ta%20T%E1%BA%A1i%20T%E1%BA%ADn%20Th%E1%BA%BF%20Nh%E1%BA%B7t%20B%E1%BA%A3o%20R%C6%B0%C6%A1ng%20-%20T%E1%BB%AD%20Vong%20Ch%C3%A0ng%20K%C3%ADch.epub" },
	{ genes: "Viễn Tưởng, Xuyên Không", name: "Ta Thật Không Muốn Trọng Sinh A - Liễu Ngạn Hoa Hựu Minh", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ta-that-khong-muon-trong-sinh-a-lieu-ngan-hoa-huu-minh.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ta%20Th%E1%BA%ADt%20Kh%C3%B4ng%20Mu%E1%BB%91n%20Tr%E1%BB%8Dng%20Sinh%20A%20-%20Li%E1%BB%85u%20Ng%E1%BA%A1n%20Hoa%20H%E1%BB%B1u%20Minh.epub" },
	{ genes: "Viễn Tưởng", name: "Ta Trở Thành Truyền Thuyết Ở Hồng Kông - Phượng Trào Hoàng", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ta-tro-thanh-truyen-thuyet-o-hong-kong-phuong-trao-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ta%20Tr%E1%BB%9F%20Th%C3%A0nh%20Truy%E1%BB%81n%20Thuy%E1%BA%BFt%20%E1%BB%9E%20H%E1%BB%93ng%20K%C3%B4ng%20-%20Ph%C6%B0%E1%BB%A3ng%20Tr%C3%A0o%20Ho%C3%A0ng.epub" },
	{ genes: "Viễn Tưởng", name: "Ta Vô Địch Từ Phá Của Bắt Đầu - Chiến Thiên Ngân", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ta-vo-dich-tu-pha-cua-bat-dau-chien-thien-ngan.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ta%20V%C3%B4%20%C4%90%E1%BB%8Bch%20T%E1%BB%AB%20Ph%C3%A1%20C%E1%BB%A7a%20B%E1%BA%AFt%20%C4%90%E1%BA%A7u%20-%20Chi%E1%BA%BFn%20Thi%C3%AAn%20Ng%C3%A2n.epub" },
	{ genes: "Viễn Tưởng", name: "Thần Cấp Đại Điếm Trưởng - Ly Thiên Võng Lượng", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/than-cap-dai-diem-truong-ly-thien-vong-luong.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Th%E1%BA%A7n%20C%E1%BA%A5p%20%C4%90%E1%BA%A1i%20%C4%90i%E1%BA%BFm%20Tr%C6%B0%E1%BB%9Fng%20-%20Ly%20Thi%C3%AAn%20V%C3%B5ng%20L%C6%B0%E1%BB%A3ng.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Thế Giới Chúng Thần (Thế Giới Của Các Vị Thần) - Vĩnh Hằng Chi Hỏa", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/the-gioi-chung-than-the-gioi-cua-cac-vi-than-vinh-hang-chi-hoa.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Th%E1%BA%BF%20Gi%E1%BB%9Bi%20Ch%C3%BAng%20Th%E1%BA%A7n%20%28Th%E1%BA%BF%20Gi%E1%BB%9Bi%20C%E1%BB%A7a%20C%C3%A1c%20V%E1%BB%8B%20Th%E1%BA%A7n%29%20-%20V%C4%A9nh%20H%E1%BA%B1ng%20Chi%20H%E1%BB%8Fa.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết, Kiếm Hiệp", name: "Thiên Tài Tiên Đạo - Bông Lan", imageUrl: "https://ebookvie.com/wp-content/uploads/2025/01/thien-tai-tien-dao-bong-lan.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Thi%C3%AAn%20T%C3%A0i%20Ti%C3%AAn%20%C4%90%E1%BA%A1o%20-%20B%C3%B4ng%20Lan.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Thuật Sĩ - Thanh Kiếm Định Mệnh - Andrzej Sapkowski", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/thuat-si-thanh-kiem-dinh-menh-andrzej-sapkowski-thanh-nguyen-dich.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Thu%E1%BA%ADt%20S%C4%A9%20-%20Thanh%20Ki%E1%BA%BFm%20%C4%90%E1%BB%8Bnh%20M%E1%BB%87nh%20-%20Andrzej%20Sapkowski.epub" },
	{ genes: "Viễn Tưởng, Võng Du", name: "Toàn Dân Võng Du - Bắt Đầu Vô Hạn Điểm Kỹ Năng - Trần Thần Tinh", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/toan-dan-vong-du-bat-dau-vo-han-diem-ky-nang-tran-than-tinh.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/To%C3%A0n%20D%C3%A2n%20V%C3%B5ng%20Du%20-%20B%E1%BA%AFt%20%C4%90%E1%BA%A7u%20V%C3%B4%20H%E1%BA%A1n%20%C4%90i%E1%BB%83m%20K%E1%BB%B9%20N%C4%83ng%20-%20Tr%E1%BA%A7n%20Th%E1%BA%A7n%20Tinh.epub" },
	{ genes: "Viễn Tưởng, Hài Hước", name: "Tôi Muốn Đi Sờ Cá Ở Cục Yêu Quái - Giang Nguyệt Niên Niên", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/toi-muon-di-so-ca-o-cuc-yeu-quai-giang-nguyet-nien-nien.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/T%C3%B4i%20Mu%E1%BB%91n%20%C4%90i%20S%E1%BB%9D%20C%C3%A1%20%E1%BB%9E%20C%E1%BB%A5c%20Y%C3%AAu%20Qu%C3%A1i%20-%20Giang%20Nguy%E1%BB%87t%20Ni%C3%AAn%20Ni%C3%AAn.epub" },
	{ genes: "Viễn Tưởng", name: "Tu Chân Nói Chuyện Phiếm Quần - Thánh Kỵ Sĩ Truyền Thuyết", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/07/tu-chan-lieu-thien-quan-thanh-ky-si-truyen-thuyet.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Tu%20Ch%C3%A2n%20Li%C3%AAu%20Thi%C3%AAn%20Qu%E1%BA%A7n%20-%20Th%C3%A1nh%20K%E1%BB%B5%20S%C4%A9%20Truy%E1%BB%81n%20Thuy%E1%BA%BFt.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Tuyệt Phẩm Thiên Y - Diệp Thiên Nam", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/tuyet-pham-thien-y-diep-thien-nam.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Tuy%E1%BB%87t%20Ph%E1%BA%A9m%20Thi%C3%AAn%20Y%20-%20Di%E1%BB%87p%20Thi%C3%AAn%20Nam.epub" },
	{ genes: "Viễn Tưởng, Võng Du", name: "Võng Du Sống Cùng Mỹ Nữ - Long Quy", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/vong-du-song-cung-my-nu-long-quy.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/V%C3%B5ng%20Du%20S%E1%BB%91ng%20C%C3%B9ng%20M%E1%BB%B9%20N%E1%BB%AF%20-%20Long%20Quy.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Nhà Máy Chế Tạo Siêu Nhiên - Karel Capek", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/04/Nha-May-Che-Tao-Sieu-Nhien.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Nh%C3%A0%20M%C3%A1y%20Ch%E1%BA%BF%20T%E1%BA%A1o%20Si%C3%AAu%20Nhi%C3%AAn%20-%20Karel%20Capek.epub" },
	{ genes: "Viễn Tưởng", name: "Những Cái Bóng Sống - Cornelia Funke", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/06/Nhung-Cai-Bong-Song.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Nh%E1%BB%AFng%20C%C3%A1i%20B%C3%B3ng%20S%E1%BB%91ng%20-%20Cornelia%20Funke.epub" },
	{ genes: "Viễn Tưởng", name: "Pinball 1973 - Haruki Murakami", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/07/Pinball-1973.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Pinball%201973%20-%20Haruki%20Murakami.epub" },
	{ genes: "Viễn Tưởng", name: "Thiếu Chủ Bí Mật - Phi Điểu Bất Tuyệt", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/07/thieu-chu-bi-mat-phi-dieu-bat-tuyet.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Thi%E1%BA%BFu%20Ch%E1%BB%A7%20B%C3%AD%20M%E1%BA%ADt%20-%20Phi%20%C4%90i%E1%BB%83u%20B%E1%BA%A5t%20Tuy%E1%BB%87t.epub" },
	{ genes: "Viễn Tưởng, Xuyên Không", name: "Xuyên Nhanh Nữ Phụ Bình Tĩnh Một Chút - Đỗ Liễu Liễu", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/07/xuyen-nhanh_-nu-phoi-binh-tinh-mot-chut-do-lieu-lieu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Xuy%C3%AAn%20Nhanh%20N%E1%BB%AF%20Ph%E1%BB%A5%20B%C3%ACnh%20T%C4%A9nh%20M%E1%BB%99t%20Ch%C3%BAt%20-%20%C4%90%E1%BB%97%20Li%E1%BB%85u%20Li%E1%BB%85u.epub" },
	{ genes: "Viễn Tưởng", name: "Silo Tháp Giống 3 - Cát Bụi - Hugh Howey", imageUrl: "https://ebookvie.com/wp-content/uploads/2025/02/Cat-Bui-Silo-Thap-Giong-3.webp", linkUrl: "https://archive.org/download/ebook-vien-tuong/Silo%20Th%C3%A1p%20Gi%E1%BB%91ng%203%20-%20C%C3%A1t%20B%E1%BB%A5i%20-%20Hugh%20Howey.pdf" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "Nơi Khu Rừng Chạm Tới Những Vì Sao - Glendy Vanderah", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/04/Noi-Khu-Rung-Cham-Toi-Nhung-Vi-Sao.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/N%C6%A1i%20Khu%20R%E1%BB%ABng%20Ch%E1%BA%A1m%20T%E1%BB%9Bi%20Nh%E1%BB%AFng%20V%C3%AC%20Sao%20-%20Glendy%20Vanderah.epub" },
	{ genes: "Viễn Tưởng, Truyện Ngắn", name: "Mắt Đá - Otsuichi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/04/Mat-Da-Otsuichi.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/M%E1%BA%AFt%20%C4%90%C3%A1%20-%20Otsuichi.epub" },
	{ genes: "Viễn Tưởng, Tiểu Thuyết", name: "28 - Jeong You Jeong", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/04/28-Jeong-You-Jeong.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/28%20-%20Jeong%20You-Jeong.epub" },
	{ genes: "Viễn Tưởng, Trinh Thám", name: "Dữ Liệu Bạch Kim - Higashino Keigo", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/04/Du-Lieu-Bach-Kim.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/D%E1%BB%AF%20Li%E1%BB%87u%20B%E1%BA%A1ch%20Kim%20-%20Higashino%20Keigo.epub" },
	{ genes: "Viễn Tưởng", name: "Phản Diện Siêu Cấp - Cao Lạnh", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/phan-dien-sieu-cap.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Pha%CC%89n%20Die%CC%A3%CC%82n%20Sie%CC%82u%20Ca%CC%82%CC%81p%20-%20Cao%20La%CC%A3nh.epub" },
	{ genes: "Viễn Tưởng, Trinh Thám", name: "Quan Tài Đầu Đông - Tôn Thấm Văn", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/04/Quan-Tai-Dau-Dong.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Quan%20T%C3%A0i%20%C4%90%E1%BA%A7u%20%C4%90%C3%B4ng%20-%20T%C3%B4n%20Th%E1%BA%A5m%20V%C4%83n.epub" },
	{ genes: "Viễn Tưởng", name: "Bách Hóa Giấc Mơ Của Ngài Dollargut - Lee Miye", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/04/Bach-Hoa-Giac-Mo-Cua-Ngai-Dollargut.png", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1ch%20H%C3%B3a%20Gi%E1%BA%A5c%20M%C6%A1%20C%E1%BB%A7a%20Ng%C3%A0i%20Dollargut%20-%20Lee%20Miye.epub" },
	{ genes: "Viễn Tưởng, Phiêu Lưu", name: "Những Thành Phố Vô Hình - Italo Calvino", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/04/Nhung-Thanh-Pho-Vo-Hinh.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Nh%E1%BB%AFng%20Th%C3%A0nh%20Ph%E1%BB%91%20V%C3%B4%20H%C3%ACnh%20-%20Italo%20Calvino.epub" },
	{ genes: "Viễn Tưởng", name: "Vô Địch Thật Tịch Mịch - Tân Phong", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/vo-dich-that-tich-mich.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Vo%CC%82%20%C4%90i%CC%A3ch%20Tha%CC%A3%CC%82t%20Ti%CC%A3ch%20Mi%CC%A3ch%20-%20Ta%CC%82n%20Phong.epub" },
	{ genes: "Viễn Tưởng", name: "Wechat Của Ta Kết Nối Thông Tam Giới - Lang Yên", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/wechat-cua-ta-ket-noi-thong-tam-gioi.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Wechat%20Cu%CC%89a%20Ta%20Ke%CC%82%CC%81t%20No%CC%82%CC%81i%20Tho%CC%82ng%20Tam%20Gio%CC%9B%CC%81i%20-%20Lang%20Ye%CC%82n.epub" },
	{ genes: "Viễn Tưởng", name: "Thiên Cơ Điện - Duyên Phận 0", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/thien-co-dien.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Thi%C3%AAn%20C%C6%A1%20%C4%90i%E1%BB%87n%20-%20Duy%C3%AAn%20Ph%E1%BA%ADn%200.epub" },
	{ genes: "Viễn Tưởng", name: "Thần Sủng Tiến Hóa - Tửu Trì Túy", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/than-sung-tien-hoa.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Th%E1%BA%A7n%20S%E1%BB%A7ng%20Ti%E1%BA%BFn%20H%C3%B3a%20-%20T%E1%BB%ADu%20Tr%C3%AC%20T%C3%BAy.epub" },
	{ genes: "Viễn Tưởng", name: "Siêu Phẩm Vu Sư - Cửu Đăng Hiền Lành", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/sieu-pham-vu-su.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Sie%CC%82u%20Pha%CC%82%CC%89m%20Vu%20Su%CC%9B%20-%20Cu%CC%9B%CC%89u%20%C4%90a%CC%86ng%20Hie%CC%82%CC%80n%20La%CC%80nh.epub" },
	{ genes: "Viễn Tưởng", name: "Bóng Tối Trỗi Dậy - Susan Cooper", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/bong-toi-troi-day.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%B3ng%20T%E1%BB%91i%20Tr%E1%BB%97i%20D%E1%BA%ADy%20-%20Susan%20Cooper.epub" },
	{ genes: "Viễn Tưởng", name: "Vô Địch Sư Thúc Tổ - Cửu Thứ Tuyệt", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/vo-dich-su-thuc-to.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Vo%CC%82%20%C4%90i%CC%A3ch%20Su%CC%9B%20Thu%CC%81c%20To%CC%82%CC%89%20-%20Cu%CC%9B%CC%89u%20Thu%CC%9B%CC%81%20Tuye%CC%A3%CC%82t.epub" },
	{ genes: "Viễn Tưởng", name: "Thần Thoại Bắc Âu - Neil Gaiman", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/than-thoai-bac-au.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Tha%CC%82%CC%80n%20Thoa%CC%A3i%20Ba%CC%86%CC%81c%20A%CC%82u%20-%20Neil%20Gaiman.epub" },
	{ genes: "Viễn Tưởng", name: "Vạn Đạo Long Hoàng - Mục Đồng Thính Trúc", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/van-dao-long-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/V%E1%BA%A1n%20%C4%90%E1%BA%A1o%20Long%20Ho%C3%A0ng%20-%20M%E1%BB%A5c%20%C4%90%E1%BB%93ng%20Th%C3%ADnh%20Tr%C3%BAc.epub" },
	{ genes: "Viễn Tưởng", name: "Đường Tam Trọng Sinh - Đường Gia Tam Thiếu", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/duong-tam-trong-sinh-duong-gia-tam-thieu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/%C4%90%C6%B0%E1%BB%9Dng%20Tam%20Tr%E1%BB%8Dng%20Sinh%20-%20%C4%90%C6%B0%E1%BB%9Dng%20Gia%20Tam%20Thi%E1%BA%BFu.epub" },
	{ genes: "Viễn Tưởng", name: "Siêu Cấp Phù Không Thành - Chư Sinh Phù Đồ", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/sieu-cap-phu-khong-thanh-5bc5d-chu-sinh-phu-do.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Si%C3%AAu%20C%E1%BA%A5p%20Ph%C3%B9%20Kh%C3%B4ng%20Th%C3%A0nh%20-%20Ch%C6%B0%20Sinh%20Ph%C3%B9%20%C4%90%E1%BB%93.epub" },
	{ genes: "Viễn Tưởng", name: "Thần Huyết Chiến Sĩ - Ngân Sương Kỵ Sĩ", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/than-huyet-chien-si-5bc5d-ngan-suong-ky-si.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Th%E1%BA%A7n%20Huy%E1%BA%BFt%20Chi%E1%BA%BFn%20S%C4%A9%20-%20Ng%C3%A2n%20S%C6%B0%C6%A1ng%20K%E1%BB%B5%20S%C4%A9.epub" },
	{ genes: "Viễn Tưởng", name: "Thế Phù Thần - Đông Phương Hành Vân", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/tuyet-the-phu-than-5bc5d-dong-phuong-hanh-van.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Th%E1%BA%BF%20Ph%C3%B9%20Th%E1%BA%A7n%20-%20%C4%90%C3%B4ng%20Ph%C6%B0%C6%A1ng%20H%C3%A0nh%20V%C3%A2n.epub" },
	{ genes: "Viễn Tưởng", name: "Thiên Thần Quyết - Thái Nhất Sinh Thủy", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/thien-than-quyet.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Thi%C3%AAn%20Th%E1%BA%A7n%20Quy%E1%BA%BFt%20-%20Th%C3%A1i%20Nh%E1%BA%A5t%20Sinh%20Th%E1%BB%A7y.epub" },
	{ genes: "Viễn Tưởng", name: "Màn Đêm - Richelle Mead", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/man-dem-richelle-mead.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/M%C3%A0n%20%C4%90%C3%AAm%20-%20Richelle%20Mead.epub" },
	{ genes: "Viễn Tưởng", name: "World of Warcraft Tập 2 Chronicle - Chris Metzen", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/world-of-warcraft-chronicle-quyen-2-chris-metzen-matt-burns-robert-brooks.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/World%20of%20Warcraft%20T%E1%BA%ADp%202%20Chronicle%20-%20Chris%20Metzen.epub" },
	{ genes: "Viễn Tưởng", name: "Ngã Đích Nữ Vu Muội Muội Môn - Cùng Tứ", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/nga-dich-nu-vu-muoi-muoi-mon-5bc5d-cung-tu.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ng%C3%A3%20%C4%90%C3%ADch%20N%E1%BB%AF%20Vu%20Mu%E1%BB%99i%20Mu%E1%BB%99i%20M%C3%B4n%20-%20C%C3%B9ng%20T%E1%BB%A9.epub" },
	{ genes: "Viễn Tưởng", name: "Nhất Đao Phách Khai Sinh Tử Lộ - Dạ Dữ Tuyết", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/nhat-dao-phach-khai-sinh-tu-lo-5bc5d-da-du-tuyet.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Nh%E1%BA%A5t%20%C4%90ao%20Ph%C3%A1ch%20Khai%20Sinh%20T%E1%BB%AD%20L%E1%BB%99%20-%20D%E1%BA%A1%20D%E1%BB%AF%20Tuy%E1%BA%BFt.epub" },
	{ genes: "Viễn Tưởng", name: "Trầm Nguyệt Chi Thược - Thủy Tuyền", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/tram-nguyet-chi-thuoc-thuy-tuyen.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Tr%E1%BA%A7m%20Nguy%E1%BB%87t%20Chi%20Th%C6%B0%E1%BB%A3c%20-%20Th%E1%BB%A7y%20Tuy%E1%BB%81n.epub" },
	{ genes: "Viễn Tưởng", name: "Tối Cường Cơ Nhân - -90º", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/toi-cuong-co-nhan-5bc5d-90o.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/T%E1%BB%91i%20C%C6%B0%E1%BB%9Dng%20C%C6%A1%20Nh%C3%A2n%20-%20-90%C2%BA.epub" },
	{ genes: "Viễn Tưởng", name: "Chàng Rể Mạnh Nhất Lịch Sử - Cao Điểm Trầm Mặc", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/chang-re-manh-nhat-lich-su.png", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ch%C3%A0ng%20R%E1%BB%83%20M%E1%BA%A1nh%20Nh%E1%BA%A5t%20L%E1%BB%8Bch%20S%E1%BB%AD%20-%20Cao%20%C4%90i%E1%BB%83m%20Tr%E1%BA%A7m%20M%E1%BA%B7c.epub" },
	{ genes: "Viễn Tưởng", name: "Vô Địch Kiếm Vực - Thanh Loan Phong Thượng", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/vo-dich-kiem-vuc.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Vo%CC%82%20%C4%90i%CC%A3ch%20Kie%CC%82%CC%81m%20Vu%CC%9B%CC%A3c%20-%20Thanh%20Loan%20Phong%20Thu%CC%9Bo%CC%9B%CC%A3ng.epub" },
	{ genes: "Viễn Tưởng", name: "World of Warcraft Tập 1 Chronicle - Chris Metzen", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/world-of-warcraft-chronicle-quyen-1-chris-metzen-matt-burns-robert-brooks.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/World%20of%20Warcraft%20T%E1%BA%ADp%201%20Chronicle%20-%20Chris%20Metzen.epub" },
	{ genes: "Viễn Tưởng", name: "World of Warcraft Tập 6 Arthas Thi Vương Trỗi Dậy - Christie Golden", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/arthas_-thi-vuong-troi-day-christie-golden.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/World%20of%20Warcraft%20T%E1%BA%ADp%206%20Arthas%20Thi%20V%C6%B0%C6%A1ng%20Tr%E1%BB%97i%20D%E1%BA%ADy%20-%20Christie%20Golden.epub" },
	{ genes: "Viễn Tưởng", name: "Hệ Thống Xuyên Nhanh: Boss Phản Diện Đột Kích - Mặc Linh", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/he-thong-xuyen-nhanh_-boss-phan-dien-dot-kich-mac-linh.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/H%E1%BB%87%20Th%E1%BB%91ng%20Xuy%C3%AAn%20Nhanh%20Boss%20Ph%E1%BA%A3n%20Di%E1%BB%87n%20%C4%90%E1%BB%99t%20K%C3%ADch%20-%20M%E1%BA%B7c%20Linh.epub" },
	{ genes: "Viễn Tưởng", name: "Thư Viện Linh Hồn – Ransom Riggs", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/36131827411_3def6f98d7_o.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Th%C6%B0%20Vi%E1%BB%87n%20Linh%20H%E1%BB%93n%20%E2%80%93%20Ransom%20Riggs.epub" },
	{ genes: "Viễn Tưởng", name: "Ma Thần Hoàng Thiên - Đình Kiên", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/ma-than-hoang-thien-dinh-kien.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ma%20Th%E1%BA%A7n%20Ho%C3%A0ng%20Thi%C3%AAn%20-%20%C4%90%C3%ACnh%20Ki%C3%AAn.epub" },
	{ genes: "Viễn Tưởng", name: "Colorful – Mori Eto", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/35415133823_aea74f2817_o.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Colorful%20%E2%80%93%20Mori%20Eto.epub" },
	{ genes: "Viễn Tưởng", name: "Tôi Là Số 4 - Hồ Sơ Thất Lạc Tập 4: Hành Trình Tìm Kiếm Sam - Pittacus Lore", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/36029470272_831819728b_o.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/T%C3%B4i%20L%C3%A0%20S%E1%BB%91%204%20-%20H%E1%BB%93%20S%C6%A1%20Th%E1%BA%A5t%20L%E1%BA%A1c%204%20H%C3%A0nh%20Tr%C3%ACnh%20T%C3%ACm%20Ki%E1%BA%BFm%20Sam%20-%20Pittacus%20Lore.epub" },
	{ genes: "Viễn Tưởng", name: "Sự Cố Bắc Cực – Eoin Colfer", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/su-co-bac-cuc-eoin-colfer.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/S%E1%BB%B1%20C%E1%BB%91%20B%E1%BA%AFc%20C%E1%BB%B1c%20%E2%80%93%20Eoin%20Colfer.epub" },
	{ genes: "Viễn Tưởng", name: "Tôi Là Số 4 - Hồ Sơ Thất Lạc Tập 5: Những Ngày Cuối của Lorien - Pittacus Lore", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/35511004904_0ebe653600_o.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/T%C3%B4i%20L%C3%A0%20S%E1%BB%91%204%20-%20H%E1%BB%93%20S%C6%A1%20Th%E1%BA%A5t%20L%E1%BA%A1c%205%20Nh%E1%BB%AFng%20Ng%C3%A0y%20Cu%E1%BB%91i%20c%E1%BB%A7a%20Lorien%20-%20Pittacus%20Lore.epub" },
	{ genes: "Viễn Tưởng", name: "Phụ Lục Percy Jackson: Cẩm Nang Thần Thánh - Mary-Jane Knight", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/36389371916_f185253a4c_o.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ph%E1%BB%A5%20L%E1%BB%A5c%20Percy%20Jackson%20C%E1%BA%A9m%20Nang%20Th%E1%BA%A7n%20Th%C3%A1nh%20-%20Mary-Jane%20Knight.epub" },
	{ genes: "Viễn Tưởng", name: "Đêm Khoái Lạc – Sherrilyn Kenyon", imageUrl: "https://ebookvie.com/wp-content/uploads/2023/12/36139991046_350ff7493a_o.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/%C4%90%C3%AAm%20Kho%C3%A1i%20L%E1%BA%A1c%20%E2%80%93%20Sherrilyn%20Kenyon.epub" },
	{ genes: "Phiêu Lưu, Kinh Dị", name: "Ngôi Nhà Kỳ Quái - Uketsu", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/03/Ngoi-Nha-Ky-Quai-ebookvie.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/Ng%C3%B4i%20Nh%C3%A0%20K%E1%BB%B3%20Qu%C3%A1i%20-%20Uketsu.epub" }
  ];

   // Các biến lọc
  let selectedGene = "all";      // "all" nghĩa là không lọc theo thể loại
  let selectedStatus = "all";    // "all" nghĩa là không lọc theo trạng thái; "updating" để chỉ lấy các sách có linkUrl === "#"

  // Tạo các button lọc theo thể loại (genes)
  function generateGeneButtons() {
    // Tạo tập hợp các giá trị genes duy nhất (xử lý trường hợp có nhiều thể loại trong một chuỗi)
    const geneSet = new Set();
    images.forEach(image => {
      image.genes.split(",").forEach(g => {
        geneSet.add(g.trim());
      });
    });
    const genes = Array.from(geneSet).sort((a, b) => a.localeCompare(b));
    // Thêm "all" làm tùy chọn mặc định
    genes.unshift("all");

    const container = document.querySelector(".genes-container");
    container.innerHTML = "";
    // Tạo button lọc theo thể loại
    genes.forEach(gene => {
      const button = document.createElement("button");
      button.textContent = gene === "all" ? "Tất Cả" : gene;
      button.dataset.gene = gene;
      // Nếu đang được chọn (active) thì thêm class active
      if (gene === selectedGene) {
        button.classList.add("active");
      }
      button.addEventListener("click", function() {
        selectedGene = this.dataset.gene;
        // Nếu chọn lọc theo thể loại, reset trạng thái lọc về "all"
        selectedStatus = "all";
        // Cập nhật trạng thái active cho các button trong container
        document.querySelectorAll(".genes-container button").forEach(btn => {
          // Loại bỏ active của tất cả các button có dataset.gene (và của button trạng thái nếu có)
          if(btn.dataset.gene) {
            btn.classList.remove("active");
          }
        });
        this.classList.add("active");
        // Cũng cập nhật trạng thái active cho button lọc theo trạng thái nếu có (bỏ active nếu có)
        const statusBtn = document.querySelector(".genes-container button[data-status='updating']");
        if(statusBtn) statusBtn.classList.remove("active");
        applyFilters();
      });
      container.appendChild(button);
    });
  }

  // Tạo thêm 1 button để lọc theo trạng thái "Đang cập nhật"
  function generateStatusButton() {
    const container = document.querySelector(".genes-container");
    const button = document.createElement("button");
    button.textContent = "Đang cập nhật";
    button.dataset.status = "updating";
    // Nếu trạng thái lọc hiện tại là "updating" thì thêm class active
    if (selectedStatus === "updating") {
      button.classList.add("active");
    }
    button.addEventListener("click", function() {
      // Nếu chưa ở trạng thái "updating", set về "updating"; nếu đã, reset về "all"
      if (selectedStatus !== "updating") {
        selectedStatus = "updating";
        this.classList.add("active");
      } else {
        selectedStatus = "all";
        this.classList.remove("active");
      }
      // Khi lọc theo trạng thái, reset bộ lọc theo thể loại về "all"
      selectedGene = "all";
      // Cập nhật active cho các button có dataset.gene
      document.querySelectorAll(".genes-container button[data-gene]").forEach(btn => btn.classList.remove("active"));
      applyFilters();
    });
    container.appendChild(button);
  }

  // Hàm áp dụng bộ lọc: kết hợp tìm kiếm theo tên, lọc theo thể loại (genes) và trạng thái
  function applyFilters() {
    const searchInput = document.getElementById("searchInput");
    const query = searchInput ? searchInput.value.toLowerCase() : "";
    let filtered = images;
    if (query) {
      filtered = filtered.filter(image => image.name.toLowerCase().includes(query));
    }
    if (selectedGene !== "all") {
      filtered = filtered.filter(image => {
        const geneArr = image.genes.split(",").map(g => g.trim().toLowerCase());
        return geneArr.includes(selectedGene.toLowerCase());
      });
    }
    if (selectedStatus !== "all") {
      if (selectedStatus === "updating") {
        filtered = filtered.filter(image => image.linkUrl === "#");
      }
    }
    displayImages(sortImagesByName(filtered));
  }

  // Hiển thị danh sách sách dưới dạng thẻ li
  function displayImages(imageArray) {
    const listContainer = document.getElementById("imageList");
    listContainer.innerHTML = "";
    imageArray.forEach(image => {
      // Nếu imageUrl và linkUrl đều là "#", bỏ qua đối tượng đó.
      if (image.imageUrl === "#" && image.linkUrl === "#") {
        return;
      }
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

  // Khởi tạo: tạo các button lọc, thiết lập sự kiện cho tìm kiếm và hiển thị danh sách ban đầu
  function init() {
    generateGeneButtons();
    generateStatusButton();
    applyFilters();
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", function() {
        applyFilters();
      });
    }
  }

  init();

  return {
    displayImages,
    sortImagesByName,
    filterImages,
    applyFilters
  };
})();
