document.addEventListener("DOMContentLoaded", () => {
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const menuOverlay = document.getElementById("menuOverlay");
  const menuSidebar = document.getElementById("menuSidebar");
  const closeMenuBtnInner = document.getElementById("closeMenuBtnInner");
  
  const mainNavbar = document.getElementById("mainNavbar");
  const mobilePlaceholder = document.getElementById("mobileMenuPlaceholder");
  
  // Lấy danh sách cố định các thẻ cần dịch chuyển ngay khi vừa tải trang
  const menuItems = Array.from(mainNavbar.querySelectorAll('.item, .itemS, .cart'));

  const checkResponsiveMenu = () => {
    if (window.innerWidth <= 992) {
      // Di chuyển toàn bộ danh mục vào bên trong cột sidebar mobile
      menuItems.forEach(item => {
        if (!mobilePlaceholder.contains(item)) {
          mobilePlaceholder.appendChild(item);
        }
      });
    } else {
      // Trả mọi thứ về lại thanh navbar nằm ngang trên desktop
      menuItems.forEach(item => {
        if (!mainNavbar.contains(item)) {
          mainNavbar.insertBefore(item, menuToggleBtn);
        }
      });
      closeMenu();
    }
  };

  const openMenu = () => {
    menuOverlay.classList.add("active");
    menuToggleBtn.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    menuOverlay.classList.remove("active");
    menuToggleBtn.classList.remove("open");
    document.body.style.overflow = "";
  };

  menuToggleBtn.addEventListener("click", () => {
    if (menuOverlay.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeMenuBtnInner.addEventListener("click", closeMenu);

  menuOverlay.addEventListener("click", (event) => {
    if (!menuSidebar.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("resize", checkResponsiveMenu);
  checkResponsiveMenu(); // Chạy kích hoạt lần đầu tiên
});