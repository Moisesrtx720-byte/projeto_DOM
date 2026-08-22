const produtos = [
    {
        id: 1,
        nome: "Bruschetta Italiana",
        categoria: "entrada",
        descricao: "Pão italiano, tomate fresco, manjericão e azeite de oliva.",
        preco: 24.90,
        imagem: "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        nome: "Salada Caesar",
        categoria: "entrada",
        descricao: "Alface crocante, frango grelhado, parmesão e molho Caesar.",
        preco: 29.90,
        imagem: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        nome: "Pastéis da Casa",
        categoria: "entrada",
        descricao: "Porção com 6 pastéis recheados com sabores variados.",
        preco: 22.90,
        imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        nome: "Classic Burger",
        categoria: "prato-principal",
        descricao: "Pão brioche, hambúrguer artesanal, queijo, alface e tomate.",
        preco: 32.90,
        imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        nome: "Chicken Especial",
        categoria: "prato-principal",
        descricao: "Frango grelhado, arroz, legumes e molho especial da casa.",
        preco: 38.90,
        imagem: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        nome: "Fettuccine Alfredo",
        categoria: "prato-principal",
        descricao: "Massa fresca com molho cremoso, parmesão e ervas.",
        preco: 36.90,
        imagem: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        nome: "Refrigerante",
        categoria: "bebida",
        descricao: "Coca-Cola, Guaraná ou Fanta.",
        preco: 7.00,
        imagem: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        nome: "Suco Natural",
        categoria: "bebida",
        descricao: "Laranja, maracujá, morango ou abacaxi.",
        preco: 9.90,
        imagem: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        nome: "Combo Burger",
        categoria: "combo",
        descricao: "Hambúrguer artesanal, batata frita e refrigerante.",
        preco: 44.90,
        imagem: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        nome: "Combo Família",
        categoria: "combo",
        descricao: "3 hambúrgueres, batata grande e 3 refrigerantes.",
        preco: 89.90,
        imagem: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        nome: "Cheesecake",
        categoria: "sobremesa",
        descricao: "Cheesecake cremoso com calda de frutas vermelhas.",
        preco: 18.90,
        imagem: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        nome: "Sorvete Especial",
        categoria: "sobremesa",
        descricao: "Duas bolas de sorvete com cobertura e frutas.",
        preco: 15.90,
        imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 13,
        nome: "Batata Frita",
        categoria: "porcao",
        descricao: "Batatas crocantes acompanhadas de molho especial.",
        preco: 24.90,
        imagem: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        nome: "Chicken Wings",
        categoria: "porcao",
        descricao: "Asinhas de frango crocantes com molho barbecue.",
        preco: 34.90,
        imagem: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80"
    }
];


function carregarEntradas(produtos) {
    produtos.map((produto) => {
        if (produto.categoria === "entrada") {
            let div = document.querySelector("#products-entrada")
            div.innerHTML += `<article class="food-card" data-id="${produto.id}">

    <div class="food-card-image">
        <img
            src="${produto.imagem}"
            alt="${produto.nome}"
        >
    </div>

    <div class="food-card-content">

        <div class="food-card-top">
            <h3>${produto.nome}</h3>

            <span class="food-card-rating">
                ★ 4.9
            </span>
        </div>

        <p class="food-card-description">
            ${produto.descricao}
        </p>

        <div class="food-card-bottom">

            <span class="food-card-price">
                R$ ${produto.preco}
            </span>

            <!-- NOVO: Container de ações -->
            <div class="food-card-actions">
                
                <!-- Botão Editar -->
                <button 
                    class="food-card-action edit-action" 
                    onclick="editarProduto(${produto.id})"
                    aria-label="Editar produto"
                    title="Editar"
                >
                    ✏️
                </button>

                <!-- Botão Deletar -->
                <button 
                    class="food-card-action delete-action" 
                    onclick="deletarProduto(${produto.id})"
                    aria-label="Deletar produto"
                    title="Deletar"
                >
                    🗑️
                </button>

                <!-- Botão Adicionar (seu botão original) -->
                <button 
                    class="food-card-button" 
                    onclick=""
                    aria-label="Adicionar ao carrinho"
                >
                    <span>+</span>
                </button>

            </div>

        </div>

    </div>

</article>
            `
        }
    })


}

function carregarPrincipal(produtos) {
    produtos.map((produto) => {
        if (produto.categoria === "prato-principal") {
            let div = document.querySelector("#products-prato-principal")
            div.innerHTML += `

<article class="food-card">

    <div class="food-card-image">
        <img
            src="${produto.imagem}"
            alt="Classic Burger"
        >
    </div>

    <div class="food-card-content">

        <div class="food-card-top">
            <h3>${produto.nome}</h3>

            <span class="food-card-rating">
                ★ 4.9
            </span>
        </div>

        <p class="food-card-description">
            ${produto.descricao}
        </p>

        <div class="food-card-bottom">

            <span class="food-card-price">
                R$ ${produto.preco}
            </span>

<!-- NOVO: Container de ações -->
            <div class="food-card-actions">
                
                <!-- Botão Editar -->
                <button 
                    class="food-card-action edit-action" 
                    onclick="editarProduto(${produto.id})"
                    aria-label="Editar produto"
                    title="Editar"
                >
                    ✏️
                </button>

                <!-- Botão Deletar -->
                <button 
                    class="food-card-action delete-action" 
                    onclick="deletarProduto(${produto.id})"
                    aria-label="Deletar produto"
                    title="Deletar"
                >
                    🗑️
                </button>

                <!-- Botão Adicionar (seu botão original) -->
                <button 
                    class="food-card-button" 
                    onclick=""
                    aria-label="Adicionar ao carrinho"
                >
                    <span>+</span>
                </button>

            </div>

        </div>

    </div>

</article>
            `
        }
    })


}

function carregarBebidas(produtos) {
    produtos.map((produto) => {
        if (produto.categoria === "bebida") {
            let div = document.querySelector("#products-bebida")
            div.innerHTML += `

<article class="food-card">

    <div class="food-card-image">
        <img
            src="${produto.imagem}"
            alt="Classic Burger"
        >
    </div>

    <div class="food-card-content">

        <div class="food-card-top">
            <h3>${produto.nome}</h3>

            <span class="food-card-rating">
                ★ 4.9
            </span>
        </div>

        <p class="food-card-description">
            ${produto.descricao}
        </p>

        <div class="food-card-bottom">

            <span class="food-card-price">
                R$ ${produto.preco}
            </span>

<!-- NOVO: Container de ações -->
            <div class="food-card-actions">
                
                <!-- Botão Editar -->
                <button 
                    class="food-card-action edit-action" 
                    onclick="editarProduto(${produto.id})"
                    aria-label="Editar produto"
                    title="Editar"
                >
                    ✏️
                </button>

                <!-- Botão Deletar -->
                <button 
                    class="food-card-action delete-action" 
                    onclick="deletarProduto(${produto.id})"
                    aria-label="Deletar produto"
                    title="Deletar"
                >
                    🗑️
                </button>

                <!-- Botão Adicionar (seu botão original) -->
                <button 
                    class="food-card-button" 
                    onclick=""
                    aria-label="Adicionar ao carrinho"
                >
                    <span>+</span>
                </button>

            </div>

        </div>

    </div>

</article>
            `
        }
    })


}

function carregarCombos(produtos) {
    produtos.map((produto) => {
        if (produto.categoria === "combo") {
            let div = document.querySelector("#products-combo")
            div.innerHTML += `

<article class="food-card">

    <div class="food-card-image">
        <img
            src="${produto.imagem}"
            alt="Classic Burger"
        >
    </div>

    <div class="food-card-content">

        <div class="food-card-top">
            <h3>${produto.nome}</h3>

            <span class="food-card-rating">
                ★ 4.9
            </span>
        </div>

        <p class="food-card-description">
            ${produto.descricao}
        </p>

        <div class="food-card-bottom">

            <span class="food-card-price">
                R$ ${produto.preco}
            </span>

<!-- NOVO: Container de ações -->
            <div class="food-card-actions">
                
                <!-- Botão Editar -->
                <button 
                    class="food-card-action edit-action" 
                    onclick="editarProduto(${produto.id})"
                    aria-label="Editar produto"
                    title="Editar"
                >
                    ✏️
                </button>

                <!-- Botão Deletar -->
                <button 
                    class="food-card-action delete-action" 
                    onclick="deletarProduto(${produto.id})"
                    aria-label="Deletar produto"
                    title="Deletar"
                >
                    🗑️
                </button>

                <!-- Botão Adicionar (seu botão original) -->
                <button 
                    class="food-card-button" 
                    onclick=""
                    aria-label="Adicionar ao carrinho"
                >
                    <span>+</span>
                </button>

            </div>

        </div>

    </div>

</article>
            `
        }
    })


}

function carregarSobremesas(produtos) {
    produtos.map((produto) => {
        if (produto.categoria === "sobremesa") {
            let div = document.querySelector("#products-sobremesa")
            div.innerHTML += `

<article class="food-card">

    <div class="food-card-image">
        <img
            src="${produto.imagem}"
            alt="Classic Burger"
        >
    </div>

    <div class="food-card-content">

        <div class="food-card-top">
            <h3>${produto.nome}</h3>

            <span class="food-card-rating">
                ★ 4.9
            </span>
        </div>

        <p class="food-card-description">
            ${produto.descricao}
        </p>

        <div class="food-card-bottom">

            <span class="food-card-price">
                R$ ${produto.preco}
            </span>

<!-- NOVO: Container de ações -->
            <div class="food-card-actions">
                
                <!-- Botão Editar -->
                <button 
                    class="food-card-action edit-action" 
                    onclick="editarProduto(${produto.id})"
                    aria-label="Editar produto"
                    title="Editar"
                >
                    ✏️
                </button>

                <!-- Botão Deletar -->
                <button 
                    class="food-card-action delete-action" 
                    onclick="deletarProduto(${produto.id})"
                    aria-label="Deletar produto"
                    title="Deletar"
                >
                    🗑️
                </button>

                <!-- Botão Adicionar (seu botão original) -->
                <button 
                    class="food-card-button" 
                    onclick=""
                    aria-label="Adicionar ao carrinho"
                >
                    <span>+</span>
                </button>

            </div>

        </div>

    </div>

</article>
            `
        }
    })


}

function carregarPorcoes(produtos) {
    produtos.map((produto) => {
        if (produto.categoria === "porcao") {
            let div = document.querySelector("#products-porcao")
            div.innerHTML += `

<article class="food-card">

    <div class="food-card-image">
        <img
            src="${produto.imagem}"
            alt="Classic Burger"
        >
    </div>

    <div class="food-card-content">

        <div class="food-card-top">
            <h3>${produto.nome}</h3>

            <span class="food-card-rating">
                ★ 4.9
            </span>
        </div>

        <p class="food-card-description">
            ${produto.descricao}
        </p>

        <div class="food-card-bottom">

            <span class="food-card-price">
                R$ ${produto.preco}
            </span>

<!-- NOVO: Container de ações -->
            <div class="food-card-actions">
                
                <!-- Botão Editar -->
                <button 
                    class="food-card-action edit-action" 
                    onclick="editarProduto(${produto.id})"
                    aria-label="Editar produto"
                    title="Editar"
                >
                    ✏️
                </button>

                <!-- Botão Deletar -->
                <button 
                    class="food-card-action delete-action" 
                    onclick="deletarProduto(${produto.id})"
                    aria-label="Deletar produto"
                    title="Deletar"
                >
                    🗑️
                </button>

                <!-- Botão Adicionar (seu botão original) -->
                <button 
                    class="food-card-button" 
                    onclick=""
                    aria-label="Adicionar ao carrinho"
                >
                    <span>+</span>
                </button>

            </div>

        </div>

    </div>

</article>
            `
        }
    })


}

carregarEntradas(produtos)
carregarPrincipal(produtos)
carregarBebidas(produtos)
carregarCombos(produtos)
carregarSobremesas(produtos)
carregarPorcoes(produtos)


function carregarFormularioProdutos() {
    let button = document.querySelector("#add-product-button")
    let body = document.querySelector("body")
    body.innerHTML += `<!-- MODAL -->
<div class="modal-overlay" id="product-modal">

    <div class="product-modal">

        <!-- HEADER -->
        <div class="modal-header">

            <div>
                <h2>Cadastrar produto</h2>
                <p>Adicione um novo produto ao cardápio.</p>
            </div>

            <button
                type="button"
                class="modal-close"
                onclick="closeModal()"
                aria-label="Fechar modal"
            >
                &times;
            </button>

        </div>


        <!-- CONTEÚDO -->
        <div class="product-form">

            <!-- NOME -->
            <div class="form-group">

                <label for="product-name">
                    Nome do produto
                </label>

                <input
                    type="text"
                    id="product-name"
                    placeholder="Ex: Hambúrguer artesanal"
                >

            </div>


            <!-- DESCRIÇÃO -->
            <div class="form-group">

                <label for="product-description">
                    Descrição
                </label>

                <textarea
                    id="product-description"
                    placeholder="Descreva o produto..."
                ></textarea>

            </div>


            <!-- PREÇO + CATEGORIA -->
            <div class="form-row">

                <!-- PREÇO -->
                <div class="form-group">

                    <label for="product-price">
                        Preço
                    </label>

                    <input
                        type="number"
                        id="product-price"
                        placeholder="0,00"
                        step="0.01"
                        min="0"
                    >

                </div>


                <!-- CATEGORIA -->
                <div class="form-group">

                    <label for="product-category">
                        Categoria
                    </label>

                    <select id="product-category">

                        <option value="">
                            Selecione
                        </option>

                        <option value="entrada">
                            Entradas
                        </option>

                        <option value="prato-principal">
                            Prato Principal
                        </option>

                        <option value="bebida">
                            Bebidas
                        </option>

                        <option value="combo">
                            Combos
                        </option>

                        <option value="sobremesa">
                            Sobremesas
                        </option>

                        <option value="porcao">
                            Porções
                        </option>

                    </select>

                </div>

            </div>


            <!-- IMAGEM -->
            <div class="form-group">

                <label for="product-image">
                    Imagem do produto
                </label>
                    <input
                        type="text"
                        id="product-image"
                        
                    >
            </div>


            <!-- FOOTER -->
            <div class="modal-footer">

                <button
                    type="button"
                    class="button-cancel"
                    onclick="closeModal()"
                >
                    Cancelar
                </button>

                <button
                    type="button"
                    class="button-save"
                    onclick="cadastrarProduto(produtos)"
                >
                    Cadastrar produto
                </button>

            </div>

        </div>

    </div>

</div>`
}

function closeModal() {
    let modal = document.querySelector("#product-modal")
    let body = document.querySelector("body")
    body.removeChild(modal)
}

function cadastrarProduto(produtos) {
    let name = document.querySelector("#product-name").value
    let descricao = document.querySelector("#product-description").value
    let preco = document.querySelector("#product-price").value
    let categoria = document.querySelector("#product-category").value
    let imagem = document.querySelector("#product-image").value


    let divPrincipal = document.querySelector("#products-prato-principal")
    let divEntrada = document.querySelector("#products-entrada")
    let divBebidas = document.querySelector("#products-bebida")
    let divCombo = document.querySelector("#products-combo")
    let divPorcao = document.querySelector("#products-porcao")
    let divSobremesa = document.querySelector("#products-sobremesa")

    let novoProduto = {
        id: produtos.length + 1,
        nome: name,
        categoria: categoria,
        descricao: descricao,
        preco: preco,
        imagem: imagem,
    }

    produtos.push(novoProduto)

    divPrincipal.innerHTML = ""
    divEntrada.innerHTML = ""
    divBebidas.innerHTML = ""
    divCombo.innerHTML = ""
    divPorcao.innerHTML = ""
    divSobremesa.innerHTML = ""

    carregarEntradas(produtos)
    carregarPrincipal(produtos)
    carregarBebidas(produtos)
    carregarCombos(produtos)
    carregarSobremesas(produtos)
    carregarPorcoes(produtos)

    closeModal()
}


function deletarProduto(id) {
    let index = produtos.findIndex((produto) => produto.id === id ) 
    let produto = produtos.find((produto) => produto.id === id ) 
    let divEntrada = document.querySelector("#products-entrada")
    let divPrincipal = document.querySelector("#products-prato-principal")
    let divBebida = document.querySelector("#products-bebida")
    let divCombo = document.querySelector("#products-combo")
    let divSobremesa = document.querySelector("#products-sobremesa")
    let divPorcao = document.querySelector("#products-porcao")

    if(produto.categoria === "entrada"){
        produtos.splice(index, 1)
        divEntrada.innerHTML = ""
        carregarEntradas(produtos)
    }
    if(produto.categoria === "prato-principal"){
        produtos.splice(index, 1)
        divPrincipal.innerHTML = ""
        carregarPrincipal(produtos)
    }
    if(produto.categoria === "bebida"){
        produtos.splice(index, 1)
        divBebida.innerHTML = ""
        carregarBebidas(produtos)
    }
    if(produto.categoria === "combo"){
        produtos.splice(index, 1)
        divCombo.innerHTML = ""
        carregarCombos(produtos)
    }
    if(produto.categoria === "sobremesa"){
        produtos.splice(index, 1)
        divSobremesa.innerHTML = ""
        carregarSobremesas(produtos)
    }
    if(produto.categoria === "porcao"){
        produtos.splice(index, 1)
        divPorcao.innerHTML = ""
        carregarPorcoes(produtos)
    }
}

function editarProduto(id) {
    let produto = produtos.find((produto) => produto.id === id)
    let body = document.querySelector("body")

    body.innerHTML += `<!-- MODAL -->
<div class="modal-overlay" id="product-modal">

    <div class="product-modal">

        <!-- HEADER -->
        <div class="modal-header">

            <div>
                <h2>Editar produto</h2>
                <p>Adicione um novo produto ao cardápio.</p>
            </div>

            <button
                type="button"
                class="modal-close"
                onclick="closeModal()"
                aria-label="Fechar modal"
            >
                &times;
            </button>

        </div>


        <!-- CONTEÚDO -->
        <div class="product-form">

            <!-- NOME -->
            <div class="form-group">

                <label for="product-name">
                    Nome do produto
                </label>

                <input
                    type="text"
                    id="product-name"
                    placeholder="Ex: Hambúrguer artesanal"
                    value="${produto.nome}"
                >

            </div>


            <!-- DESCRIÇÃO -->
            <div class="form-group">

                <label for="product-description">
                    Descrição
                </label>

                <textarea
                    id="product-description"
                    placeholder="Descreva o produto..."
                    
                ></textarea>

            </div>


            <!-- PREÇO + CATEGORIA -->
            <div class="form-row">

                <!-- PREÇO -->
                <div class="form-group">

                    <label for="product-price">
                        Preço
                    </label>

                    <input
                        type="number"
                        id="product-price"
                        placeholder="0,00"
                        step="0.01"
                        min="0"
                        value="${produto.preco}"
                    >

                </div>


                <!-- CATEGORIA -->
                <div class="form-group" >

                    <label for="product-category">
                        Categoria
                    </label>

                    <select id="product-category" >

                        <option value="">
                            Selecione
                        </option>

                        <option value="entrada">
                            Entradas
                        </option>

                        <option value="prato-principal">
                            Prato Principal
                        </option>

                        <option value="bebida">
                            Bebidas
                        </option>

                        <option value="combo">
                            Combos
                        </option>

                        <option value="sobremesa">
                            Sobremesas
                        </option>

                        <option value="porcao">
                            Porções
                        </option>

                    </select>

                </div>

            </div>


            <!-- IMAGEM -->
            <div class="form-group">

                <label for="product-image">
                    Imagem do produto
                </label>
                    <input
                        type="text"
                        id="product-image"
                        value="${produto.imagem}"
                    >
            </div>


            <!-- FOOTER -->
            <div class="modal-footer">

                <button
                    type="button"
                    class="button-cancel"
                    onclick="closeModal()"
                >
                    Cancelar
                </button>

                <button
                    type="button"
                    class="button-save"
                    onclick="editar(${id})"
                >
                    Editar produto
                </button>

            </div>

        </div>

    </div>

    </div>`
    document.querySelector("#product-description").value = `${produto.descricao}`
    document.querySelector("#product-category").value = `${produto.categoria}`
}

function editar(id) {
    let index = produtos.findIndex((produto) => produto.id === id)
    let name = document.querySelector("#product-name").value
    let descricao = document.querySelector("#product-description").value
    let preco = document.querySelector("#product-price").value
    let categoria = document.querySelector("#product-category").value
    let imagem = document.querySelector("#product-image").value

    produtos[index] = {
        id: id,
        nome: name,
        categoria: categoria,
        descricao: descricao,
        preco: preco,
        imagem: imagem
    }

    let divEntrada = document.querySelector("#products-entrada")
    let divPrincipal = document.querySelector("#products-prato-principal")
    let divBebida = document.querySelector("#products-bebida")
    let divCombo = document.querySelector("#products-combo")
    let divSobremesa = document.querySelector("#products-sobremesa")
    let divPorcao = document.querySelector("#products-porcao")
    let produto = produtos.find((produto) => produto.id === id)


    if(produto.categoria === "entrada"){
        divEntrada.innerHTML = ""
        carregarEntradas(produtos)
    }
    if(produto.categoria === "prato-principal"){
        divPrincipal.innerHTML = ""
        carregarPrincipal(produtos)
    }
    if(produto.categoria === "bebida"){
        divBebida.innerHTML = ""
        carregarBebidas(produtos)
    }
    if(produto.categoria === "combo"){
        divCombo.innerHTML = ""
        carregarCombos(produtos)
    }
    if(produto.categoria === "sobremesa"){
        divSobremesa.innerHTML = ""
        carregarSobremesas(produtos)
    }
    if(produto.categoria === "porcao"){
        divPorcao.innerHTML = ""
        carregarPorcoes(produtos)
    }

    closeModal()
}




