document.addEventListener("DOMContentLoaded", function () {
  const catalog = [
    {
      title: "Arreglo para el dia del padre",
      img: "images/bouquet-1.jpg",
      price: "$55.00",
    },
    {
      title: "Bouquet",
      img: "images/bouquet-2.jpg",
      price: "$40.00",
    },
    {
      title: "Vaso #1",
      img: "images/bouquet-3.JPG",
      price: "$25.00",
    },
    {
      title: "Bouquet #1",
      img: "images/bouquet-4.jpg",
      price: "$55.00",
    },
    {
      title: "Fresas #1",
      img: "images/caketopper-1.jpg",
      price: "$40.00",
    },
    {
      title: "Vaso #1",
      img: "images/caketopper-2.JPG",
      price: "$25.00",
    },
    {
      title: "Bouquet #1",
      img: "images/caketopper-3.jpg",
      price: "$55.00",
    },
    {
      title: "Fresas #1",
      img: "images/camisa-1.jpg",
      price: "$40.00",
    },
    {
      title: "Vaso #1",
      img: "images/camisa-2.JPG",
      price: "$25.00",
    },
    {
      title: "Vaso #1",
      img: "images/camisa-3.JPG",
      price: "$25.00",
    },
    {
      title: "Bouquet #1",
      img: "images/fresas-1.jpg",
      price: "$55.00",
    },
    {
      title: "Fresas #1",
      img: "images/fresas-2.jpg",
      price: "$40.00",
    },
    {
      title: "Vaso #1",
      img: "images/fresas-3.JPG",
      price: "$25.00",
    },
    {
      title: "Bouquet #1",
      img: "images/llavero-1.jpg",
      price: "$55.00",
    },
    {
      title: "Fresas #1",
      img: "images/llavero-2.jpg",
      price: "$40.00",
    },
    {
      title: "Vaso #1",
      img: "images/moño-1.JPG",
      price: "$25.00",
    },
    {
      title: "Bouquet #1",
      img: "images/moño-2.jpg",
      price: "$55.00",
    },
    {
      title: "Fresas #1",
      img: "images/pastel-1.jpg",
      price: "$40.00",
    },
    {
      title: "Vaso #1",
      img: "images/pastel-2.JPG",
      price: "$25.00",
    },
    {
      title: "Bouquet #1",
      img: "images/pastel-3.jpg",
      price: "$55.00",
    },
    {
      title: "Fresas #1",
      img: "images/termo-1.jpg",
      price: "$40.00",
    },
    {
      title: "Vaso #1",
      img: "images/termo-2.JPG",
      price: "$25.00",
    },
    {
      title: "Bouquet #1",
      img: "images/termo-3.jpg",
      price: "$55.00",
    },
    {
      title: "Fresas #1",
      img: "images/vaso-1.jpg",
      price: "$40.00",
    },
    {
      title: "Vaso #1",
      img: "images/vaso-2.JPG",
      price: "$25.00",
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
