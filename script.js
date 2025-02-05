const ImageList = (function() {
  const images = [
    { date: "05-02-2025", name: "Bá Võ - Khai Hoang", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
	{ date: "05-02-2025", name: "Bậc Thầy Phong Thủy - Đào Hoa Độ", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bac-thay-phong-thuy-dao-hoa-do.jpg", linkUrl: "#" },
	{ date: "05-02-2025", name: "Bảo Ngươi Làm Trò Chơi Ngươi Lại Làm Video CG - Tiềm Thủy Đích Oa Ba", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bao-nguoi-lam-tro-choi2c-nguoi-lai-lam-video-cg_-tiem-thuy-dich-oa-ba.jpg", linkUrl: "#" },
	{ date: "05-02-2025", name: "Bắt Đầu Đánh Dấu Hoang Cổ Thánh Thể - J Thần", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bat-dau-danh-dau-hoang-co-thanh-the-j-than.jpg", linkUrl: "#" },
	{ date: "05-02-2025", name: "Bắt Đầu Nạp Tiền Một Tỷ - Tiểu Tiểu Yêu Tiên", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bat-dau-nap-tien-mot-ty-tieu-tieu-yeu-tien.jpg", linkUrl: "#" },
	{ date: "05-02-2025", name: "Bắt Đầu Quá Mạnh Làm Sao Bây Giờ - Phạm Thần", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bat-dau-qua-manh-lam-sao-bay-gio-pham-than.jpg", linkUrl: "#" },
	{ date: "05-02-2025", name: "Bắt Đầu Từ Hỗn Độn Thể - Tiên Nữ Xuyên Liễu Bàn Thứ", imageUrl: "Bắt Đầu Từ Hỗn Độn Thể - Tiên Nữ Xuyên Liễu Bàn Thứ", linkUrl: "#" },
	{ date: "05-02-2025", name: "Bảy Vị Sư Tỷ Tuyệt Sắc Của Ta - Lạp Mỗ Ca", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/bay-vi-su-ty-tuyet-sac-cua-ta-lap-mo-ca.jpg", linkUrl: "#" },
	{ date: "05-02-2025", name: "Bột Mì Vĩnh Cửu - Alexander Romanovich Belyaev", imageUrl: "https://ebookvie.com/wp-content/uploads/2025/01/bot-mi-vinh-cuu-alexander-romanovich-belyaev-le-khanh-truong-dich-pham-dang-que-dich.jpg", linkUrl: "#" },
	{ date: "05-02-2025", name: "Cái Nguyền Rủa Này Thật Quá Tuyệt Vời - Hành Giả Hữu Tam", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/cai-nguyen-rua-nay-that-qua-tuyet-voi-hanh-gia-huu-tam.jpg", linkUrl: "#" },
	{ date: "05-02-2025", name: "Cậu Cả Tu Chân - Vũ Hạ Đích Hảo Đại", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/cau-ca-tu-chan-vu-ha-dich-hao-dai.jpg", linkUrl: "#" },
	{ date: "05-02-2025", name: "Câu Lạc Bộ Thiên Tài - Thành Thành Dữ Thiền", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/cau-lac-bo-thien-tai-thanh-thanh-du-thien.jpg", linkUrl: "#" },
	{ date: "05-02-2025", name: "Cày Tại Tận Thế Thêm Điểm Thăng Cấp - Tân Phong", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/cay-tai-tan-the-them-diem-thang-cap-tan-phong.jpg", linkUrl: "#" },
	{ date: "05-02-2025", name: "Chăn Nuôi Toàn Nhân Loại - Tam Bách Cân Đích Vi Tiếu", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/chan-nuoi-toan-nhan-loai-tam-bach-can-dich-vi-tieu.jpg", linkUrl: "#" },
	{ date: "05-02-2025", name: "Chuyện Làm Mai Mối Trước Giờ Ta Chưa Phục Ai Cả - Nhị Xà", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/chuyen-lam-mai-moi-truoc-gio-ta-chua-phuc-ai-ca-nhi-xa.jpg", linkUrl: "#" },
	{ date: "05-02-2025", name: "Cuộc Sống Hàng Ngày Của Đại Sư Huyền Học - Ngư Diệu Thanh", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/cuoc-song-hang-ngay-cua-dai-su-huyen-hoc-ngu-dieu-thanh.jpg", linkUrl: "#" },
	{ date: "05-02-2025", name: "Đại Minh Trong Chiếc Hộp - Tam Thập Nhị Biến", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Đập Nồi Bán Sắt Đi Học - Hồng Thứ Bắc", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Dạy Đồ Vạn Lần Trả Về Vi Sư Chưa Từng Tàng Tư - Tố Dữ", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Dị Giới Dược Tề Sư - Nhất Điều Hàm Ngư C", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Đỉnh Phong Thiên Hạ - SS Hà Thần", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Gia Gia Tạo Phản Tại Dị Giới Ta Liền Vô Địch Ở Đô Thị - Nhất Chích Vi Bàn Đích Bì Bì Hà", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Hệ Thống Trung Y - Ức Ốc Ngư", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Huấn Luyện Viên Zombies - Khắc Văn", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Huyền Môn Thần Toán Bói Quẻ Quá Linh Toàn Kinh Thành Chấn Động - Xán Lam", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Khai Cuộc Nữ Đế Làm Chính Cung - Kình Bạo Tiểu Long Hà", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Khí Vũ Trụ - Ta Là Lão Ngũ", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Ma Pháp Công Nghiệp Đế Quốc - Buổi Tối Giờ Cao Điểm", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Mệnh Luân Chi Chủ - Mệnh Cấp Nhĩ Hành Bất Hành", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Mỗi Tuần Ta Có Một Nghề Mới - Vô Hữu", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Ngự Thú Chi Vương - Khinh Tuyền Lưu Hưởng", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Nương Tử Nhà Ta Là Kiếm Thần - Nhất Sinh Yếu Cường Đích Phì Tử", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Silo Tháp Giống 1 - Len Chùi - Hugh Howey", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Silo Tháp Giống 2 - Ca Trực - Hugh Howey", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Sư Phụ Ta Mỗi Đến Đại Nạn Mới Đột Phá - Trư Nhục 200 Cân", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Ta Là Thần Cấp Đại Phản Phái - Anh Tuấn Đích Tiểu Cáp", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Ta Mô Phỏng Con Đường Trường Sinh Trong Nhóm Chat - Nộn Lăng Như Mộng", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Ta Sửa Đổi Vô Hạn Độc Đoán Vạn Cổ - Khán Bản Thư Đích Nhân Đô Suất", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Ta Tại Tận Thế Nhặt Bảo Rương - Tử Vong Chàng Kích", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Ta Thật Không Muốn Trọng Sinh A - Liễu Ngạn Hoa Hựu Minh", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Thế Giới Chúng Thần (Thế Giới Của Các Vị Thần) - Vĩnh Hằng Chi Hỏa", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Thiên Tài Tiên Đạo - Bông Lan", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Toàn Dân Võng Du - Bắt Đầu Vô Hạn Điểm Kỹ Năng - Trần Thần Tinh", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Tôi Muốn Đi Sờ Cá Ở Cục Yêu Quái - Giang Nguyệt Niên Niên", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "Tuyệt Phẩm Thiên Y - Diệp Thiên Nam", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "#", imageUrl: "#", linkUrl: "#" },
	{ date: "05-02-2025", name: "#", imageUrl: "#", linkUrl: "#" }
  ];

  function displayImages(imageArray) {
    const listContainer = document.getElementById("imageList");
    listContainer.innerHTML = ""; // Xóa danh sách cũ
    imageArray.forEach(image => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <img src="${image.imageUrl}" alt="${image.name}">
        <div class="download-button">
          <a href="${image.linkUrl}" target="_blank" rel="noopener noreferrer" class="button">Download</a>
        </div>
      `;
      listContainer.appendChild(listItem);
    });
  }

  function sortListByName() {
    images.sort((a, b) => a.name.localeCompare(b.name));
    displayImages(images);
  }

  // Sắp xếp và hiển thị danh sách ngay khi trang tải
  sortListByName();
})();

{ date: "05-02-2025", name: "#", imageUrl: "#", linkUrl: "#" }
