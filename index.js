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
  }];

  let productosR = [
    {
        imagen: "./imag/a1.webp",
        nombre: "Anti Hero Eagle Real Tree Black",
        precio: 90000,
        cantidad: 12,
    },
    {
        imagen: "./imag/a2.webp",
        nombre: "Baker Eagle Harley",
        precio: 90000,
        cantidad: 10,
    },
    {
        imagen: "./imag/a3.webp",
        nombre: "Camibuso Body Glove Black",
        precio: 99900,
        cantidad: 8,
    },
    {
        imagen: "./imag/a4.webp",
        nombre: "Camibuso Hanes Beefy Henley Ebony",
        precio: 120000,
        cantidad: 12,
    },
    {
        imagen: "./imag/a5.webp",
        nombre: "Camibuso Hanes Beefy T Henley Grey Oxford Pizarra Jaspeado",
        precio: 99900,
        cantidad: 12,
    },
    {
        imagen: "./imag/a6.webp",
        nombre: "Camibuso Hanes Beefy T Henley Green Grey",
        precio: 99900,
        cantidad: 12,
    },
    {
        imagen: "./imag/a7.webp",
        nombre: "Camibuso MJ Soffe Army Brown",
       precio: 99900,
        cantidad: 12,
    },
    {
        imagen: "./imag/a8.webp",
        nombre: "Camiseta 3/4 Champion Red Black",
        precio: 99900,
        cantidad: 12,
    },
    {
        imagen: "./imag/a9.webp",
        nombre: "Chaqueta Clop Oversize",
        precio: 80000,
        cantidad: 12,
    },
    {
        imagen: "./imag/a10.webp",
        nombre: "Chaqueta Dc Howsthat Grey",
        precio: 270000,
        cantidad: 12,
    }];

let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
  pintar();
  eventosCarrito();
  eventosBusqueda();
  pintar2();
});

const pintar = () => {
  const tablas = document.getElementById("tablas");
  productos.forEach((item, i) => {
      const divProducto = document.createElement("div");
      divProducto.setAttribute("class", "tabla");

      let imagen = document.createElement("div");
      imagen.innerHTML = `<img class="imagen" src="${item.imagen}" alt="${item.nombre}">`;

      let titulo = document.createElement("div");
      titulo.setAttribute("class", "titulo");
      titulo.textContent = item.nombre;

      let cantidad = document.createElement("div");
      cantidad.setAttribute("class", "cantidad");
      cantidad.textContent = "cantidad:" + item.cantidad;

      let br = document.createElement("br");

      let descripcion = document.createElement("div");
      descripcion.setAttribute("class", "descripcion");
      descripcion.textContent = item.descripcion;

      let precio = document.createElement("div");
      precio.setAttribute("class", "precio");
      precio.textContent = "$" + item.precio.toFixed(2);

      let boton2 = document.createElement("button");
      boton2.setAttribute("class", "botonzz");
      boton2.textContent = "AGREGAR";
      boton2.addEventListener("click", () => agregarAlCarrito(item));

      divProducto.appendChild(imagen);
      divProducto.appendChild(titulo);
      divProducto.appendChild(cantidad);
      divProducto.appendChild(br);
      divProducto.appendChild(descripcion);
      divProducto.appendChild(precio);
      divProducto.appendChild(boton2);

      tablas.appendChild(divProducto);
  });
};



const pintar2 = () => {
  const ropa = document.getElementById("ropa");
  productosR.forEach((item, i) => {
      const divProducto = document.createElement("div");
      divProducto.setAttribute("class", "tabla2");

      let imagen = document.createElement("div");
      imagen.innerHTML = `<img class="imagen" src="${item.imagen}" alt="${item.nombre}">`;

      let titulo = document.createElement("div");
      titulo.setAttribute("class", "titulo");
      titulo.textContent = item.nombre;

      let cantidad = document.createElement("div");
      cantidad.setAttribute("class", "cantidad");
      cantidad.textContent = "cantidad:" + item.cantidad;

      let br = document.createElement("br");

      let precio = document.createElement("div");
      precio.setAttribute("class", "precio");
      precio.textContent = "$" + item.precio.toFixed(2);

      let boton2 = document.createElement("button");
      boton2.setAttribute("class", "botonzz");
      boton2.textContent = "AGREGAR";
      boton2.addEventListener("click", () => agregarAlCarrito(item));

      divProducto.appendChild(imagen);
      divProducto.appendChild(titulo);
      divProducto.appendChild(cantidad);
      divProducto.appendChild(br);
      divProducto.appendChild(precio);
      divProducto.appendChild(boton2);

      ropa.appendChild(divProducto);
  });
};

const eventosCarrito = () => {
  const modal = document.getElementById("exampleModal");
  modal.addEventListener("show.bs.modal", () => {
      mostrarCarrito();
  });
};

const agregarAlCarrito = (producto) => {
  carrito.push(producto);
  mostrarCarrito();
};

const mostrarCarrito = () => {
  const carritoLista = document.getElementById("carrito-lista");
  const totalCost = document.getElementById("total-cost");

  carritoLista.innerHTML = "";
  totalCost.innerHTML = ""; // Limpia el contenido anterior del total del costo

  let total_costo = 0;

  carrito.forEach((producto, index) => {
      const itemCarrito = document.createElement("div");
      itemCarrito.setAttribute("class", "item-carrito");

      let imagen = document.createElement("img");
      imagen.setAttribute("src", producto.imagen);
      imagen.setAttribute("class", "img-carrito");
      itemCarrito.appendChild(imagen);

      // Agrega el nombre y precio del producto al carrito
      let textoProducto = document.createElement("span");
      textoProducto.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
      itemCarrito.appendChild(textoProducto);

      // Agrega el botón de eliminación al carrito
      let botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.setAttribute("class", "btn btn-danger btn-sm");
      botonEliminar.addEventListener("click", () => eliminarDelCarrito(index));
      itemCarrito.appendChild(botonEliminar);

      carritoLista.appendChild(itemCarrito);

      total_costo += producto.precio;
  });

  totalCost.textContent = `Total COP: $${total_costo}`;
};

const eliminarDelCarrito = (index) => {
  carrito.splice(index, 1);
  mostrarCarrito();
};

const eventosBusqueda = () => {
  const btnBuscar = document.getElementById("btn_buscar");
  const buscador = document.getElementById("buscador");

  btnBuscar.addEventListener("click", () => {
      const valorBusqueda = buscador.value.trim().toLowerCase();

      // Implementa la lógica de búsqueda según tus necesidades
      console.log("Realizar búsqueda con el valor:", valorBusqueda);
  });
};