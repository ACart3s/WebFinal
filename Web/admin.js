document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('.dropdown-menu a.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            var newState = this.innerText; 
            var row = this.closest('tr'); 
            
            row.querySelector('.dropdown-toggle').innerText = newState;

        });
    });
  
    var addProductForm = document.getElementById("addProductForm");
    var productList = document.getElementById("productList");
    var orderSelect = document.getElementById("orderSelect");
  
    cargarProductos();
  
    addProductForm.addEventListener("submit", function (event) {
      event.preventDefault();
      
      var productName = document.getElementById("productName").value;
      var productPrice = document.getElementById("productPrice").value;
      var productStock = document.getElementById("productStock").value;
      
      productPrice = "$" + productPrice;
  
      var product = {
        name: productName,
        price: productPrice,
        stock: productStock
      };
  
      var products = JSON.parse(localStorage.getItem("products")) || [];
  
      products.push(product);
  
      localStorage.setItem("products", JSON.stringify(products));
  
      cargarProductos();
  
      addProductForm.reset();
    });
  
    orderSelect.addEventListener("change", function () {
      cargarProductos();
    });
  
    function cargarProductos() {
      var products = JSON.parse(localStorage.getItem("products")) || [];
  
      if (products.length === 0) {
        products.push(
          { name: "Chanchito-Antidepresion informatico", price: "$50.000", stock: 4 },
          { name: "Paila de greda pal huevito", price: "$40.000", stock: 1 },
          { name: "Chanchito Autista", price: "$100.000", stock: 1 }
        );
        localStorage.setItem("products", JSON.stringify(products));
      }
  
      var order = orderSelect.value === "stockAsc" || orderSelect.value === "priceAsc" ? 1 : -1;
  
      products.sort(function (a, b) {
        if (orderSelect.value === "stockAsc" || orderSelect.value === "stockDesc") {
          return order * (a.stock - b.stock);
        } else {
          var priceA = parseFloat(a.price.replace(/[^\d.-]/g, ''));
          var priceB = parseFloat(b.price.replace(/[^\d.-]/g, ''));
          return order * (priceA - priceB);
        }
      });
  
      productList.innerHTML = "";
  
      products.forEach(function(product) {
        var formattedPrice = product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        var newRow = document.createElement("tr");
        newRow.innerHTML = `
          <td>${product.name}</td>
          <td>${formattedPrice}</td>
          <td>${product.stock}</td>
          <td>
            <button type="button" class="btn btn-danger btn-sm delete-btn" onclick="eliminarProducto(this)">Eliminar</button>
            <button type="button" class="btn btn-info btn-sm edit-btn text-white" onclick="editarProducto('${product.name}', '${product.price}', '${product.stock}')">Editar</button>
          </td>
        `;
        productList.appendChild(newRow);
      });
    }
  });
  
  function eliminarProducto(button) {
    var row = button.closest("tr");
    var productName = row.cells[0].innerText;
    
    var products = JSON.parse(localStorage.getItem("products")) || [];
  
    products = products.filter(function(product) {
      return product.name !== productName;
    });
  
    localStorage.setItem("products", JSON.stringify(products));
  
    row.remove();
  }
  
  function editarProducto(name, price, stock) {
    var newProductName = prompt("Ingrese el nuevo nombre del producto:", name);
    var newProductPrice = prompt("Ingrese el nuevo precio del producto:", price);
    var newProductStock = prompt("Ingrese el nuevo stock del producto:", stock);
  
    if (newProductName && newProductPrice && newProductStock) {
      var products = JSON.parse(localStorage.getItem("products")) || [];
  
      products.forEach(function(product) {
        if (product.name === name) {
          product.name = newProductName;
          product.price = newProductPrice;
          product.stock = newProductStock;
        }
      });
      localStorage.setItem("products", JSON.stringify(products));
      cargarProductos();
    }
  }
  
  function mostrarUsuarios() {
    document.getElementById("admin-contenido").style.display = "none";
    document.getElementById("usuarios-lista").style.display = "block";
    document.getElementById("pedidos-lista").style.display = "none";
  }
  
  function mostrarProductos() {
    document.getElementById("admin-contenido").style.display = "block";
    document.getElementById("usuarios-lista").style.display = "none";
    document.getElementById("pedidos-lista").style.display = "none";
  }
  
  function mostrarPedidos() {
    document.getElementById("admin-contenido").style.display = "none";
    document.getElementById("usuarios-lista").style.display = "none";
    document.getElementById("pedidos-lista").style.display = "block";
  }
  
  function eliminarUsuario(button) {
    var row = button.closest("tr");
    var usuarioNombre = row.cells[0].innerText;
    
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    usuarios = usuarios.filter(function(usuario) {
      return usuario.nombre !== usuarioNombre;
    });
  
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
    row.remove();
  }
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.dropdown-menu a.dropdown-item').forEach(item => {
      item.addEventListener('click', function() {
          var newState = this.innerText; 
          var row = this.closest('tr'); 
          
          row.querySelector('.dropdown-toggle').innerText = newState;
          
      });
  });

  var addProductForm = document.getElementById("addProductForm");
  var productList = document.getElementById("productList");
  var orderSelect = document.getElementById("orderSelect");

  cargarProductos();

  addProductForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    var productName = document.getElementById("productName").value;
    var productPrice = document.getElementById("productPrice").value;
    var productStock = document.getElementById("productStock").value;
    
    productPrice = "$" + productPrice;

    var product = {
      name: productName,
      price: productPrice,
      stock: productStock
    };

    var products = JSON.parse(localStorage.getItem("products")) || [];

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    cargarProductos();

    addProductForm.reset();
  });

  orderSelect.addEventListener("change", function () {
    cargarProductos();
  });

  function cargarProductos() {
    var products = JSON.parse(localStorage.getItem("products")) || [];

    if (products.length === 0) {
      products.push(
        { name: "Chanchito-Antidepresion informatico", price: "$50.000", stock: 4 },
        { name: "Paila de greda pal huevito", price: "$40.000", stock: 1 },
        { name: "Chanchito Autista", price: "$100.000", stock: 1 }
      );
      localStorage.setItem("products", JSON.stringify(products));
    }

    var order = orderSelect.value === "stockAsc" || orderSelect.value === "priceAsc" ? 1 : -1;

    products.sort(function (a, b) {
      if (orderSelect.value === "stockAsc" || orderSelect.value === "stockDesc") {
        return order * (a.stock - b.stock);
      } else {
        var priceA = parseFloat(a.price.replace(/[^\d.-]/g, ''));
        var priceB = parseFloat(b.price.replace(/[^\d.-]/g, ''));
        return order * (priceA - priceB);
      }
    });

    productList.innerHTML = "";

    products.forEach(function(product) {
      var formattedPrice = product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      var newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${product.name}</td>
        <td>${formattedPrice}</td>
        <td>${product.stock}</td>
        <td>
          <button type="button" class="btn btn-danger btn-sm delete-btn" onclick="eliminarProducto(this)">Eliminar</button>
          <button type="button" class="btn btn-info btn-sm edit-btn text-white" onclick="editarProducto('${product.name}', '${product.price}', '${product.stock}')">Editar</button>
        </td>
      `;
      productList.appendChild(newRow);
    });
  }
});

function eliminarProducto(button) {
  var row = button.closest("tr");
  var productName = row.cells[0].innerText;
  
  var products = JSON.parse(localStorage.getItem("products")) || [];

  products = products.filter(function(product) {
    return product.name !== productName;
  });

  localStorage.setItem("products", JSON.stringify(products));

  row.remove();
}

function editarProducto(name, price, stock) {
  var newProductName = prompt("Ingrese el nuevo nombre del producto:", name);
  var newProductPrice = prompt("Ingrese el nuevo precio del producto:", price);
  var newProductStock = prompt("Ingrese el nuevo stock del producto:", stock);

  if (newProductName && newProductPrice && newProductStock) {
    var products = JSON.parse(localStorage.getItem("products")) || [];

    products.forEach(function(product) {
      if (product.name === name) {
        product.name = newProductName;
        product.price = newProductPrice;
        product.stock = newProductStock;
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    cargarProductos();
  }
}

function mostrarUsuarios() {
  document.getElementById("admin-contenido").style.display = "none";
  document.getElementById("usuarios-lista").style.display = "block";
  document.getElementById("pedidos-lista").style.display = "none";
}

function mostrarProductos() {
  document.getElementById("admin-contenido").style.display = "block";
  document.getElementById("usuarios-lista").style.display = "none";
  document.getElementById("pedidos-lista").style.display = "none";
}

function mostrarPedidos() {
  document.getElementById("admin-contenido").style.display = "none";
  document.getElementById("usuarios-lista").style.display = "none";
  document.getElementById("pedidos-lista").style.display = "block";
}

function eliminarUsuario(button) {
  var row = button.closest("tr");
  var usuarioNombre = row.cells[0].innerText;
  
  var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  usuarios = usuarios.filter(function(usuario) {
    return usuario.nombre !== usuarioNombre;
  });

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  row.remove();
}
  