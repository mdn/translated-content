---
title: Express Web Framework (Node.js/JavaScript)
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs
original_slug: Learn/Server-side/Express_Nodejs
---

{{LearnSidebar}}

Express é um popular framework web estruturado, escrito em JavaScript que roda sobre o ambiente node.js em tempo de execução. Este módulo explica alguns dos principais benefícios deste framework, como configurar o seu ambiente de desenvolvimento e como executar tarefas comuns de desenvolvimento e implantação da web.

## Pré-requisitos

Antes de iniciar este módulo, você precisará entender o que é programação web e as estruturas do lado do servidor são, o ideal é ler os tópicos em nosso [Módulo de primeiros passos da programação de sites do lado servidor](/pt-BR/docs/Learn_web_development/Extensions/Server-side/First_steps). Um conhecimento geral de conceitos de programação e JavaScript é altamente recomendado, mas não é essencial para a compreensão dos conceitos fundamentais.

> [!NOTE]
> Nota: Este site possui muitos recursos úteis para aprender JavaScript no contexto do desenvolvimento do lado do cliente: JavaScript, Guia de JavaScript, princípios básicos de JavaScript, JavaScript (aprendizagem). O core JavaScript linguagem e conceitos são os mesmos para o desenvolvimento do lado do servidor no Node.js e este material será relevante. O Node.js oferece APIs adicionais para suportar funcionalidades que são úteis em ambientes sem navegador, e. Para criar servidores HTTP e acessar o sistema de arquivos, mas não suporta APIs JavaScript para trabalhar com o navegador e o DOM.
>
> Este guia fornecerá algumas informações sobre como trabalhar com o Node.js e o Express, e existem inúmeros outros recursos excelentes na Internet e em livros - alguns desses relacionados de Como faço para começar com Node.js (StackOverflow) e O que são os Melhores recursos para aprender Node.js? (Quora).

## Tutoriais

- [Express/Node introdução](/pt-BR/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)
  - : Neste primeiro artigo Express, respondemos as perguntas "O que é Node?" E "O que é Express?" E dar-lhe uma visão geral do que torna a estrutura web Express especial. Apresentaremos os principais recursos e mostraremos alguns dos principais blocos de construção de um aplicativo Express (embora neste momento você ainda não tenha um ambiente de desenvolvimento para testá-lo).
- [Configurando um ambiente de desenvolvimento em Node (Express)](/pt-BR/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)
  - : Agora que você sabe o que o Express é, vamos mostrar-lhe como configurar e testar um ambiente de desenvolvimento de Node.js / Express no Windows, Linux (Ubuntu) e Mac OS X. Qualquer sistema operacional comum que você esteja usando, este artigo deve Dê o que você precisa para começar a desenvolver aplicativos Express.
- [Tutorial Express: O site da Biblioteca Local](/pt-BR/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : O primeiro artigo da nossa série de tutoriais práticos explica o que você aprenderá e fornecer uma visão geral do exemplo de site da "biblioteca local", no qual estaremos trabalhando e evoluindo em artigos subsquentes.
- [Express Tutorial Part 2: Creating a skeleton website](/pt-BR/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website)
  - : Este artigo mostra como você pode criar um projeto de "esqueleto" de website, no qual você pode popular com as rotas específicas do site, modelos/vizualizações e bancos de dados.

- [Express Tutorial Part 3: Using a Database (with Mongoose)](/pt-BR/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose)
  - : This article briefly introduces databases for Node/Express. It then goes on to show how we can use [Mongoose](http://mongoosejs.com/) to provide database access for the _LocalLibrary_ website. It explains how object schema and models are declared, the main field types, and basic validation. It also briefly shows a few of the main ways you can access model data.
- [Express Tutorial Part 4: Routes and controllers](/pt-BR/docs/Learn/Server-side/Express_Nodejs/routes)
  - : In this tutorial we'll set up routes (URL handling code) with "dummy" handler functions for all the resource endpoints that we'll eventually need in the _LocalLibrary_ website. On completion, we'll have a modular structure for our route handling code, that we can extend with real handler functions in the following articles. We'll also have a really good understanding of how to create modular routes using Express.
- [Express Tutorial Part 5: Displaying library data](/pt-BR/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
  - : We're now ready to add the pages that display the _LocalLibrary_ website books and other data. The pages will include a home page that shows how many records we have of each model type, and list and detail pages for all of our models. Along the way we'll gain practical experience in getting records from the database, and using templates.
- [Express Tutorial Part 6: Working with forms](/pt-BR/docs/Learn/Server-side/Express_Nodejs/forms)
  - : In this tutorial we'll show you how to work with [HTML Forms](/pt-BR/docs/Learn_web_development/Extensions/Forms) in Express, using Pug, and in particular how to write forms to create, update, and delete documents from the database.
- [Express Tutorial Part 7: Deploying to production](/pt-BR/docs/Learn/Server-side/Express_Nodejs/deployment)
  - : Now you've created an awesome _LocalLibrary_ website, you're going to want to install it on a public web server so that it can be accessed by library staff and members over the Internet. This article provides an overview of how you might go about finding a host to deploy your website, and what you need to do in order to get your site ready for production.

## See also

- [Installing LocalLibrary on PWS/Cloud Foundry](/pt-BR/docs/Learn/Server-side/Express_Nodejs/Installing_on_PWS_Cloud_Foundry)
  - : This article provides a practical demonstration of how to install _LocalLibrary_ on the [Pivotal Web Services PaaS cloud](http://run.pivotal.io) — this is a full-featured, open source alternative to Heroku, the PaaS cloud service used in Part 7 of the tutorial, listed above. PWS/Cloud Foundry is definitely worth checking out if you are looking for an alternative to Heroku (or another PaaS cloud service), or simply feel like trying something different.

## Adding more tutorials

That's the end of the tutorial articles (for now). If you would like to extend it, other interesting topics to cover are:

- Using sessions
- User authentication
- User authorisation and permissions
- Testing an Express web application
- Web security for Express web applications.

And of course it would be excellent to have an assessment task!
