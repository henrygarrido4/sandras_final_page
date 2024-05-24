document.addEventListener("DOMContentLoaded", function () {
  const catalog = [
    {
      title: "Regalo para el dia del padre",
      img: "images/bouquet-1.jpg",
      price: "$54.99",
    },
    {
      title: "Arreglo para un cumpleaños",
      img: "images/bouquet-2.jpg",
      price: "$64.99",
    },
    {
      title: "Regalo para el dia del padre",
      img: "images/bouquet-3.jpg",
      price: "$54.99",
    },
    {
      title: "Regalo de San Valentin",
      img: "images/bouquet-4.jpg",
      price: "$44.99",
    },
    {
      title: "Caketopper de niña",
      img: "images/caketopper-1.jpg",
      price: "$39.99",
    },
    {
      title: "Caketopper para bautizo",
      img: "images/caketopper-2.jpg",
      price: "$54.99",
    },
    {
      title: "Caketopper de niño",
      img: "images/caketopper-3.jpg",
      price: "$34.99",
    },
    {
      title: "Camisa para papa",
      img: "images/camisa-1.jpg",
      price: "$19.99",
    },
    {
      title: "Camisa para papa",
      img: "images/camisa-2.jpg",
      price: "$19.99",
    },
    {
      title: "Camisa personalizada de cumpleaños",
      img: "images/camisa-3.jpg",
      price: "$24.99",
    },
    {
      title: "Detalle para San Valentin",
      img: "images/fresas-1.jpg",
      price: "$39.99",
    },

    {
      title: "Caja de rosas y fresas",
      img: "images/fresas-2.jpg",
      price: "$54.99",
    },
    {
      title: "Caja de fresas",
      img: "images/fresas-3.jpg",
      price: "$34.99",
    },
    {
      title: "Corazon y fresas de chocolate",
      img: "images/fresas-4.jpg",
      price: "$29.99",
    },
    {
      title: "Llavero personalizado",
      img: "images/llavero-1.jpg",
      price: "$54.99",
    },
    {
      title: "Llavero personalizado",
      img: "images/llavero-2.jpg",
      price: "$39.99",
    },
    {
      title: "Moño para niña",
      img: "images/moño-1.jpg",
      price: "$24.99",
    },
    {
      title: "Moño para niña",
      img: "images/moño-2.jpg",
      price: "$54.99",
    },
    {
      title: "Chocoflan circular",
      img: "images/pastel-1.jpg",
      price: "$54.99",
    },
    {
      title: "Chocoflan de corazon",
      img: "images/pastel-2.jpg",
      price: "$39.99",
    },
    {
      title: "Mini Chocoflan",
      img: "images/pastel-3.jpg",
      price: "$39.99",
    },

    {
      title: "Vaso de vidrio personalizado",
      img: "images/vaso-1.jpg",
      price: "$24.99",
    },
    {
      title: "Vaso de vidrio personalizado",
      img: "images/vaso-2.jpg",
      price: "$24.99",
    },

    // Add more items as needed
  ];
  const catalogContainer = document.getElementById("catalog");
  let catalogHTML = "";

  catalog.forEach((item, index) => {
    const imageId = `image-${index + 1}`;
    catalogHTML += `
      <div class="shop-item" data-index="${index + 1}">
        <h2 class="shop-item-title">${item.title}</h2>
        <img id="${imageId}" class="img-cover" src="${item.img}" alt="${
      item.title
    }" onclick="showLightbox(${index})">
        <div class="shop-item-details">
          <span class="shop-item-price text-center">${item.price}</span>
        </div>
      </div>
    `;
  });

  catalogContainer.innerHTML = catalogHTML;
});

let currentImageIndex = 0;

function showLightbox(index) {
  currentImageIndex = index;
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const catalog = document.querySelectorAll(".shop-item img");
  lightboxImage.src = catalog[index].src;
  lightboxImage.classList.add("show");
  lightbox.style.display = "flex";
  document.body.classList.add("no-scroll");

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

function navigateLightbox(direction) {
  const catalog = document.querySelectorAll(".shop-item img");
  const lightboxImage = document.getElementById("lightboxImage");
  lightboxImage.classList.remove("show");
  lightboxImage.classList.add(direction > 0 ? "hide-left" : "hide-right");

  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = catalog.length - 1;
  } else if (currentImageIndex >= catalog.length) {
    currentImageIndex = 0;
  }

  setTimeout(() => {
    lightboxImage.src = catalog[currentImageIndex].src;
    lightboxImage.classList.remove("hide-left", "hide-right");
    lightboxImage.classList.add("show");
  }, 100); // Match the transition duration
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  lightboxImage.classList.remove("show");
  lightbox.style.display = "none";
  document.body.classList.remove("no-scroll");
}

document.addEventListener("keydown", function (event) {
  if (document.getElementById("lightbox").style.display === "flex") {
    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowLeft") {
      navigateLightbox(-1);
    } else if (event.key === "ArrowRight") {
      navigateLightbox(1);
    }
  }
});

let startX = 0;
let endX = 0;

document.getElementById("lightbox").addEventListener("touchstart", function (event) {
  startX = event.touches[0].clientX;
});

document.getElementById("lightbox").addEventListener("touchmove", function (event) {
  endX = event.touches[0].clientX;
});

document.getElementById("lightbox").addEventListener("touchend", function (event) {
  if (startX - endX > 50) {
    navigateLightbox(1);
  } else if (endX - startX > 50) {
    navigateLightbox(-1);
  }
});
