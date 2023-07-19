---
title: Django Web Framework (Python)
slug: Learn/Server-side/Django
---

{{LearnSidebar}}

Django é um framework de web server-side extremamente popular e repleto de características, escrito em Python. O módulo mostra por que o Django é um dos frameworks web mais populares, como configurar um ambiente de desenvolvimento e como começar a usa-lo para criar seus próprios aplicativos da Web.

## Pré-requisitos

Antes de iniciar este módulo você não precisa ter nenhum conhecimento de Django. Você precisará entender o que programação server-side e web frameworks são, idealmente lendo os tópicos em nosso módulo [Server-side programação de website primeiros passos](/pt-BR/docs/Learn/Server-side/First_steps).

Um conhecimento geral de conceitos de programação e Python é recomendado, mas não essenciais para entendimento dos conceitos principais.

> **Nota:** O Python é uma das linguagens de programação mais fáceis para os iniciantes lerem e entenderem. Dito isto, se você quiser entender melhor este módulo, então existem inúmeros livros e tutoriais gratuitos disponíveis pela Internet (programadores iniciantes podem querer ver a página [Python for não programadores](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers) no wiki do python.org)

## Como começar?

- [Introdução ao Django](/pt-BR/docs/Learn/Server-side/Django/Introdu%C3%A7%C3%A3o)
  - : Neste primeiro artigo sobre Django vamos responder a questão "O que é Django?" e mostrar um resumo sobre o que faz esse web framework ser especial. Nós vamos resumir os recursos principais, incluindo algumas das funcionalidades avançadas que não teremos tempo de detalhar neste módulo. Também mostraremos alguns dos principais blocos de construção de um aplicativo Django, para que você tenha uma idéia do que ele pode fazer antes de continuar e configurá-lo e começar a se divertir.
- [Configurando um ambiente de desenvolvimento Django](/pt-BR/docs/Learn/Server-side/Django/development_environment)
  - : Agora que você sabe para quê o Django serve, iremos mostrar-lhe como configurar e testar um ambiente de desenvolvimento Django no Windows, Linux (Ubuntu) e Mac OS X - ou qualquer outro sistema operacional que você esteja usando, esse artigo deve ajudá-lo no que precisa para começar a desenvolver aplicações no Django.
- [Tutorial Django: Website de uma Biblioteca Local](/pt-BR/docs/Learn/Server-side/Django/Tutorial_local_library_website)
  - : O primeiro artigo em nossa série de tutoria prática explica o que você irá aprender, e provê uma visão geral do site de exemplo "biblioteca geral" que estaremos trabalhando e evoluindo nos artigos subsequentes.
- [Tutorial Django Parte 2: Criando a base do website](/pt-BR/docs/Learn/Server-side/Django/skeleton_website)
  - : Esse artigo mostra como você pode criar um projeto de site "esqueleto" como base, o qual poderá ser preenchido com configurações, urls, models, views e templates de um site específico.
- [Tutorial Django Parte 3: Utilizando models](/pt-BR/docs/Learn/Server-side/Django/Models)
  - : Este artigo mostra como definir modelos para o site _BibliotecaLocal_ - os modelos representam as estruturas de dados em que queremos armazenar os dados do aplicativo, além de permitirem o Django armazenar dados em banco de dados pela gente (e modificá-los depois). Ele explica o que é um modelo, como declará-lo, e alguns dos principais tipos de campos. Além de brevemente apresentar algumas das principais maneiras de acessar os dados de um modelo.
- [Tutorial Django Parte 4: Django admin site](/pt-BR/docs/Learn/Server-side/Django/Admin_site)
  - : Agora que nós criamos os modelos para o site _BibliotecaLocal,_ iremos usar o site Django Admin para adicionar alguns dados "reais" de livros. Primeiros mostraremos como registrar os modelos com o site admin, e então veremos como fazer login e criar alguns dados. Ao final iremos mostrar algumas maneiras de aprimorar ainda mais a apresentação do site de administração.
- [Tutorial Django Parte 5: Criando nossa página principal](/pt-BR/docs/Learn/Server-side/Django/Home_page)
  - : Agora estamos prontos para adicionar o código para exibir nossa primeira página inteira - uma home page para a BibliotecaLocal que mostra quantos registros temos de cada tipo de modelo e fornece links de navegação da barra lateral para nossas outras páginas. Ao longo do caminho, obteremos experiência prática ao escrever mapas e visualizações de URLs básicos, obtendo registros do banco de dados e usando modelos.
- [Tutorial Django Parte 6: Lista genérica e detail views](/pt-BR/docs/Learn/Server-side/Django/Generic_views)
  - : Este tutorial estende nosso website _BibliotecaLocal_ adicionando páginas de listagem e de detalhes, para livros e autores. Aqui nós vamos aprender sobre visualizações genéricas baseadas em classes e mostrar como elas podem reduzir a quantidade de código que você tem que escrever para casos comuns. Nós também entraremos na manipulação de URL em maiores detalhes, mostrando como realizar correspondências de padrões básicas.
- [Tutorial Django Parte 7: Framework de Sessões](/pt-BR/docs/Learn/Server-side/Django/Sessions)
  - : Este tutorial estende nosso site _BibliotecaLocal_, adicionando um contador de visitas baseado em sessão à home page. Esse é um exemplo relativamente simples, mas mostra como você pode usar a estrutura da sessão para prover um comportamento persistente para usuários anônimos em seus próprios sites.
- [Django Tutorial Part 8: Autenticação de Usuário e permissões](/pt-BR/docs/Learn/Server-side/Django/Authentication)
  - : Neste tutorial, mostraremos como permitir que os usuários façam login em seu site com suas próprias contas e como controlar o que podem fazer e ver com base no fato de estarem ou não logados e de suas permissões. Como parte dessa demonstração, ampliaremos o site da LocalLibrary, adicionando páginas de login e logout e páginas específicas de usuários e funcionários para a visualização de livros que foram emprestados.
- [Tutorial Django Parte 9: Trabalhando com formulários](/pt-BR/docs/Learn/Server-side/Django/Forms)
  - : Neste tutorial iremos mostrar como trabalhar com [HTML Forms](/pt-BR/docs/Web/Guide/HTML/Forms) no Django, e em particular a maneira mais fácil para escrever formulários para criar, atualizar e excluir instâncias do modelo. Como parte desta demonstração ampliaremos o website _BibliotecaLocal_ para que bibliotecários possam renovar livros, e criar, atualizar e excluir autores usando usindo nossos próprios formulários (em vez de usar o aplicativo administrativo).
- [Tutorial Django Parte 10: Testando uma aplicação web Django](/pt-BR/docs/Learn/Server-side/Django/Testing)
  - : Conforme os sites crescem, tornam-se mais difíceis de testar manualmente - não apenas há mais para testar, mas à medida que as interações entre os componentes se tornam mais complexas, uma pequena alteração em uma área pode exigir muitos testes adicionais para verificar seu impacto em outras áreas. Uma forma de mitigar esses problemas é escrever testes automatizados, que podem ser executados de maneira fácil e confiável sempre que você fizer uma alteração. Este tutorial mostra como automatizar _o teste de unidade_ do seu site usando a estrutura de teste do Django.
- [Tutorial Django Parte 11: Implantando Django em produção](/pt-BR/docs/Learn/Server-side/Django/Deployment)
  - : Agora você criou (e testou) um site da LocalLibrary incrível, você vai querer instalá-lo em um servidor web público para que ele possa ser acessado pela equipe da biblioteca e membros pela Internet. Este artigo fornece uma visão geral de como você pode encontrar um host para implantar seu site e o que você precisa fazer para preparar seu site para a produção.
- [Segurança de aplicações web Django](/pt-BR/docs/Learn/Server-side/Django/web_application_security)
  - : Proteger os dados do usuário é uma parte essencial do design de qualquer site. Anteriormente, explicamos algumas das ameaças de segurança mais comuns no artigo [Web security](/pt-BR/docs/Web/Security) - este artigo fornece uma demonstração prática de como as proteções internas do Django lidam com essas ameaças.

## Assessments

A avaliação a seguir testará sua compreensão de como criar um site usando o Django, conforme descrito nos guias listados acima.

- [DIY Django mini blog](/pt-BR/docs/Learn/Server-side/Django/django_assessment_blog)
  - : Nesta avaliação, você usará alguns dos conhecimentos que aprendeu neste módulo para criar seu próprio blog.
