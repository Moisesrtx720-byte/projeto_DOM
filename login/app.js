const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao.silva@email.com",
    senha: "123456",
    idade: 28,
    cargo: "Administrador",
    ativo: true,
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    senha: "maria123",
    idade: 31,
    cargo: "Usuário",
    ativo: true,
  },
  {
    id: 3,
    nome: "Pedro Santos",
    email: "pedro.santos@email.com",
    senha: "pedro@2026",
    idade: 24,
    cargo: "Editor",
    ativo: false,
  },
  {
    id: 4,
    nome: "Ana Costa",
    email: "ana.costa@email.com",
    senha: "ana321",
    idade: 29,
    cargo: "Usuário",
    ativo: true,
  },
  {
    id: 5,
    nome: "Lucas Ferreira",
    email: "lucas.ferreira@email.com",
    senha: "lucas123",
    idade: 35,
    cargo: "Gerente",
    ativo: true,
  },
  {
    id: 6,
    nome: "Carla Souza",
    email: "carla.souza@email.com",
    senha: "carla456",
    idade: 27,
    cargo: "Editor",
    ativo: false,
  },
  {
    id: 7,
    nome: "Rafael Lima",
    email: "rafael.lima@email.com",
    senha: "rafael789",
    idade: 33,
    cargo: "Usuário",
    ativo: true,
  },
  {
    id: 8,
    nome: "Juliana Alves",
    email: "juliana.alves@email.com",
    senha: "ju12345",
    idade: 26,
    cargo: "Suporte",
    ativo: true,
  },
  {
    id: 9,
    nome: "Bruno Martins",
    email: "bruno.martins@email.com",
    senha: "bruno@123",
    idade: 38,
    cargo: "Administrador",
    ativo: false,
  },
  {
    id: 10,
    nome: "Fernanda Rocha",
    email: "fernanda.rocha@email.com",
    senha: "fernanda2026",
    idade: 30,
    cargo: "Usuário",
    ativo: true,
  },
  {
    id: 11,
    nome: "Fernanda Rocha",
    email: "moisesrtx720@gmail.com",
    senha: "123",
    idade: 30,
    cargo: "Usuário",
    ativo: true,
  },
];

function darkmode() {
    let body = document.querySelector("body")
    body.classList.toggle("dark")
}

function login(usuarios) {
    let email = document.querySelector("#email").value
    let senha = document.querySelector("#senha").value

    console.log(email, senha);

    let usuarioEncontrado = usuarios.find((usuario) => email === usuario.email && senha === usuario.senha)
    
    if (usuarioEncontrado === undefined){
        let p = document.querySelector("#mensagem-erro")
        p.innerText = "Usuário não encontrado"
        p.classList.add("erro")
        return
        
    }

    window.location.href="../dashboard/dashboard.html"

}

function name(params) {
  
}