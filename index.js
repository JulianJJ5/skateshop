let productos = [
  {
    imagen: "./imag/tabla1.jpg",
    nombre: "Tabla Alien Believe Black",
    descripcion:
      "Tabla de skate profesional de 7 capas de arce con diseño de Alien.",
    precio: 300000,
    cantidad: 12,
  },
  {
    imagen: "./imag/tabla2.avif",
    nombre: "Tabla Moderna Trivial blacdex",
    descripcion:
      "Tabla de skate estilo cruiser de 8.5 pulgadas con gráficos trivales.",
    precio: 270000,
    cantidad: 10,
  },
  {
    imagen: "./imag/tabla3.png",
    nombre: "Tabla ChromeWheels Negra",
    descripcion:
      "Tabla de skate street de 7.75 pulgadas con estilo urbano y acabado antideslizante.",
    precio: 300000,
    cantidad: 8,
  },
  {
    imagen: "./imag/tabla4.webp",
    nombre: "Tabla Canadian maple",
    descripcion:
      "Tabla de skate de bambú de 8 pulgadas con grabado de hoja de maple.",
    precio: 300000,
    cantidad: 12,
  },
  {
    imagen: "./imag/tabla5.jpg",
    nombre: "Tabla Sr Oscuro Jart",
    descripcion:
      "Tabla de skate para principiantes de 7.25 pulgadas con diseño siniestro y ruedas suaves.",
    precio: 300000,
    cantidad: 12,
  },
  {
    imagen: "./imag/tabla6.jpg",
    nombre: "Tabla Aesthetic ghost red Jart",
    descripcion:
      "Tabla de skate old school de 9 pulgadas con ilustraciones retro de los años 80.",
    precio: 300000,
    cantidad: 12,
  },
  {
    imagen: "./imag/tabla7.jpg",
    nombre: "Tabla Scream dark Jart",
    descripcion:
      "Tabla de skate con estampado de  redondeados.",
    precio: 300000,
    cantidad: 12,
  },
  {
    imagen: "./imag/tabla8.jpg",
    nombre: "Tabla Kiss Jart",
    descripcion:
      "Tabla de skate de colección edición limitada de 8.25 pulgadas con arte urbano exclusivo.",
    precio: 300000,
    cantidad: 12,
  },
  {
    imagen: "./imag/tabla9.jpg",
    nombre: "Tabla simple sk8",
    descripcion:
      "Tabla de skate de arce canadiense de 7.75 pulgadas con acabado brillante y grip tape de alta calidad.",
    precio: 300000,
    cantidad: 12,
  },
  {
    imagen: "./imag/tabla10.webp",
    nombre: "Tabla Sk8 blue mfa",
    descripcion:
      "Tabla de skate doble kick de 8.0 pulgadas con diseño abstracto en tonos pastel y construcción robusta.",
    precio: 300000,
    cantidad: 12,
  },
  {
    imagen: "./imag/tabla11.webp",
    nombre: "Tabla Jart Gold Edition",
    descripcion:
      "Tabla de skate de 8.125 pulgadas con forma cóncava y gráficos psicodélicos inspirados en el arte pop de los años 60.",
    precio: 300000,
    cantidad: 12,
  },
  {
    imagen: "./imag/tabla12.png",
    nombre: "Tabla Anime Blue ",
    descripcion:
      "Tabla de skate de 7 capas de arce con tecnología de prensado en frío para una mayor durabilidad, cuenta con diseño minimalista en blanco y negro.",
    precio: 300000,
    cantidad: 12,
  },
];




document.addEventListener("DOMContentLoaded", () => {
  pintar();
});

const pintar = () => {
  productos.forEach((item, i) => {
    const divProducto = document.createElement("div");
    divProducto.setAttribute("class", "tabla");
    tablas.appendChild(divProducto);

    let imagen = document.createElement("div");
    divProducto.appendChild(imagen);

    let img = document.createElement("img");
    img.setAttribute("class", "imagen");
    img.src = item.imagen;
    imagen.appendChild(img);

    let titulo = document.createElement("div");
    titulo.setAttribute("class", "titulo");
    titulo.textContent = item.nombre;
    divProducto.appendChild(titulo);

    let descripcion = document.createElement("div");
    descripcion.setAttribute("class","descripcion");
    descripcion.textContent = item.descripcion;
    divProducto.appendChild(descripcion);

    let boton = document.createElement("button");
    boton.setAttribute("class", "boton");
    boton.textContent = "comprar"
    boton.appendChild(divProducto)

    document.getElementById("tablas").appendChild(divProducto);
  });
};
