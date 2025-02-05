const ImageList = (function() {
  const images = [
    { date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://via.placeholder.com/426x275", linkUrl: "https://example.com/anh-nui" },
    { date: "01-02-2025", name: "Ảnh Biển", imageUrl: "https://via.placeholder.com/426x275", linkUrl: "https://example.com/anh-bien" },
    { date: "02-02-2025", name: "Ảnh Rừng", imageUrl: "https://via.placeholder.com/426x275", linkUrl: "https://example.com/anh-rung" },
    { date: "05-02-2025", name: "Ảnh Hồ", imageUrl: "https://via.placeholder.com/426x275", linkUrl: "https://example.com/anh-ho" },
    { date: "04-02-2025", name: "Ảnh Đồi", imageUrl: "https://via.placeholder.com/426x275", linkUrl: "https://example.com/anh-doi" },
	{ date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://via.placeholder.com/426x275", linkUrl: "https://example.com/anh-nui" },
    { date: "01-02-2025", name: "Ảnh Biển", imageUrl: "https://via.placeholder.com/426x275", linkUrl: "https://example.com/anh-bien" },
    { date: "02-02-2025", name: "Ảnh Rừng", imageUrl: "https://via.placeholder.com/426x275", linkUrl: "https://example.com/anh-rung" },
    { date: "05-02-2025", name: "Ảnh Hồ", imageUrl: "https://via.placeholder.com/426x275", linkUrl: "https://example.com/anh-ho" },
    { date: "04-02-2025", name: "Ảnh Đồi", imageUrl: "https://via.placeholder.com/426x275", linkUrl: "https://example.com/anh-doi" },
	{ date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://via.placeholder.com/426x275", linkUrl: "https://example.com/anh-nui" },
    { date: "01-02-2025", name: "Ảnh Biển", imageUrl: "https://via.placeholder.com/426x275", linkUrl: "https://example.com/anh-bien" },
    { date: "02-02-2025", name: "Ảnh Rừng", imageUrl: "https://via.placeholder.com/426x275", linkUrl: "https://example.com/anh-rung" },
    { date: "05-02-2025", name: "Ảnh Hồ", imageUrl: "https://via.placeholder.com/426x275", linkUrl: "https://example.com/anh-ho" },
    { date: "04-02-2025", name: "Ảnh Đồi", imageUrl: "https://via.placeholder.com/426x275", linkUrl: "https://example.com/anh-doi" }
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
