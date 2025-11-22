# 🍕 Pizzaria – Formulário de Pedido (JS + OOP)

Projeto simples e divertido para treinar JavaScript puro com orientação a objetos, construindo uma mini "biblioteca" de componentes para montar um formulário de pedido de pizza.

Tudo é criado dinamicamente via classes — sem frameworks.

## 🚀 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript ES6+
* Programação Orientada a Objetos
* LocalStorage

## 📂 Estrutura do Projeto

```
Pizzaria/
├─ img/
│  └─ bg.jpg
├─ js/
│  ├─ app.js
│  ├─ Button.js
│  ├─ Component.js
│  ├─ Div.js
│  ├─ Form.js
│  ├─ Header.js
│  ├─ Icon.js
│  ├─ Input.js
│  ├─ Label.js
│  └─ Select.js
├─ index.html
└─ style.css
```

## 🧱 Componentes criados

O projeto utiliza uma abordagem OOP para gerar cada parte da interface:

* **Component.js** → classe base para todos elementos
* **Form.js** → cria o `<form>`
* **Input.js** → cria `<input>`
* **Label.js** → cria `<label>`
* **Select.js** → cria `<select>` com placeholder oculto
* **Button.js** → cria `<button>`
* **Div.js** → cria `<div>`
* **Header.js** → cria `<h1>`, `<h2>`, etc
* **Icon.js** → adiciona SVGs inline

Isso deixa o projeto organizado e fácil de expandir.

## 🎯 Funcionalidades

✔️ Formulário gerado dinamicamente  
✔️ Seleção de sabor de pizza com opção padrão oculta  
✔️ Validação simples dos campos  
✔️ Salva o último pedido no localStorage  
✔️ Alerta com o resumo formatado usando `"=".repeat(20)`  
✔️ Background com padrão de pizza  
✔️ Container centralizado na tela  

## ▶️ Como Executar

1. Faça o clone:

```bash
git clone https://github.com/SEU-USUARIO/Pizzaria.git
```

2. Abra o arquivo:

```
Pizzaria/index.html
```

Nenhuma instalação é necessária.

## 📸 Screenshot

(Adicione uma imagem depois) `./img/screenshot.png`

## 📌 Melhorias Futuras

* Histórico completo de pedidos
* Menu de sabores vindo de JSON
* Animações e melhores estilos
* Enviar o pedido para uma API real

## 🧑‍💻 Autor

**Davi Mafra**  
Desenvolvedor Web  
🔗 https://dev.davimafra.com

---

⭐ Se este projeto te ajudou, deixe uma estrela no repositório!
