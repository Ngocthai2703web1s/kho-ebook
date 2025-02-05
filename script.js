const ImageList = (function() {
  const images = [
    { date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
    { date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
    { date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
    { date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
    { date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
	{ date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
    { date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
    { date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
    { date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
    { date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
	{ date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
    { date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
    { date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
    { date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" },
    { date: "03-02-2025", name: "Ảnh Núi", imageUrl: "https://ebookvie.com/wp-content/uploads/2024/12/ba-vo-khai-hoang.jpg", linkUrl: "https://archive.org/download/ebook-vien-tuong/B%C3%A1%20V%C3%B5%20-%20Khai%20Hoang.epub" }
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
