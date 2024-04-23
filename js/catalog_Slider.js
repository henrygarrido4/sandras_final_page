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
      title: "Tumbler para niños",
      img: "images/termo-1.jpg",
      price: "$19.99",
    },
    {
      title: "Tumbler de 20oz",
      img: "images/termo-2.jpg",
      price: "$34.99",
    },
    {
      title: "Skinny tumbler 20oz",
      img: "images/termo-3.jpg",
      price: "$34.99",
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
          <div class="shop-item">
              <h2 class="shop-item-title">${item.title}</h2>
              <img id="${imageId}" class="img-cover" src="${item.img}" alt="${item.title}" onclick="showLightbox(this)">
              <div class="shop-item-details">
                  <span class="shop-item-price text-center">${item.price}</span>
              </div>
          </div>
      `;
  });

  catalogContainer.innerHTML = catalogHTML;
});

function showLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  lightboxImage.src = imgElement.src; // Sets the source for the lightbox image
  lightbox.style.display = "flex"; // Makes the lightbox visible
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none"; // Hides the lightbox
}
