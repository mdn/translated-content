---
title: Entendendo frameworks JavaScript do lado do cliente
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks
---

{{LearnSidebar}}

As estruturas JavaScript são uma parte essencial do desenvolvimento front-end da Web moderna, que fornecem aos desenvolvedores ferramentas utilizadas e testadas para a criação de aplicativos Web interativos e escalonáveis. Muitas empresas modernas usam estruturas como parte padrão de suas ferramentas, portanto, muitos trabalhos de desenvolvimento front-end agora exigem experiência em estruturas.

Como um desenvolvedor front-end iniciante, pode ser difícil descobrir por onde começar ao aprender frameworks - com tantos frameworks diferentes para escolher, novos aparecem o tempo todo, geralmente funcionam de maneira semelhante, mas fazem algumas coisas de forma diferente, e há alguns cuidados específicos a serem seguidos ao se usar frameworks.

Neste conjunto de artigos, nosso objetivo é fornecer um ponto de partida confortável para ajudá-lo a começar a aprender frameworks. Não pretendemos ensinar exaustivamente tudo o que você precisa saber sobre o React / ReactDOM, ou Vue, ou algum outro framework específico; os próprios documentos das equipes do framework já fazem esse trabalho. Em vez disso, queremos fazer backup e responder primeiro a perguntas mais fundamentais, como:

- Por que devo usar um framework? Que problemas eles resolvem para mim?
- Que perguntas devo fazer ao tentar escolher um framwork? Eu preciso mesmo usar um framework?
- Quais recursos os frameworks têm? Como funcionam em geral e como as implementações dos frameworks desses recursos diferem?
- Como se relacionam com JavaScript ou HTML "vanilla"?

Depois disso, forneceremos alguns tutoriais que abordam os fundamentos de alguns dos principais frameworks, que fornecem contexto e familiaridade suficientes para começar a se aprofundar mais. Queremos que avance e aprenda sobre estruturas de uma maneira pragmática que não se esqueça das melhores práticas fundamentais da plataforma da web, como acessibilidade.

**[Comece agora, com "Introdução às estruturas do lado do cliente"](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)**

## Pré - requisitos

Você deve aprender o básico das principais linguagens para web(**HTML**, **CSS** e principalmente **Javascript**) antes de estudar os frameworks voltados para client-side.Dessa forma, o seu código será mais rico e profissional, preparando você para lidar com problemas com mais confiança, resultado do bom entendimento sobre os recursos fundamentais dos frameworks que constroem as plataformas.

## Guias de introdução

- [1.Introdução a frameworks para client-side](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
  - : Nós iniciamos nosso olhar sobre frameworks com uma visão geral da área, olhando para uma breve história do JavaScript e frameworks, por que frameworks existem e o que eles nos fornecem, como começar a pensar na escolha de um framework para aprender e quais alternativas de frameworks para o lado do cliente existem.
- [2.Principais recursos para frameworks](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
  - : Cada framework JavaScript principal tem uma abordagem diferente para atualizar o DOM, manipular eventos do navegador e fornecer uma experiência agradável de desenvolvimento. Este artigo explorará os principais recursos dos "quatro maiores" frameworks, observando como eles tendem a funcionar a partir de um nível superficial e as diferenças entre si.

## Tutoriais de React

> [!NOTE]
> Tutoriais de React testados pela última vez em Maio de 2020, com React/ReactDOM 16.13.1 e create-react-app 3.4.1.
>
> Se você precisar conferir seu código em relação à nossa versão, você pode encontrar a versão finalizada do código de exemplo da aplicação React em nosso [repositório todo-react](https://github.com/mdn/todo-react). Para uma versão executada ao vivo, veja <https://mdn.github.io/todo-react-build/>.

- [1. Começando com o React](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - : Neste artigo nós vamos dar olá para o React. Descobriremos um pouco dos detalhes sobre seu histórico e casos de uso, configurar uma cadeia de ferramentas React básica em nosso computador local, e criar e brincar com um aplicativo inicial simples, aprendendo um pouco sobre como o React funciona no processo.
- [2. Começando com a nossa lista "to do" do React](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - : Digamos que recebemos a tarefa de criar uma prova de conceito em React - uma aplicação que permite aos usuários adicionar, editar e deletar tarefas nas quais desejam trabalhar e também marcar tarefas como concluídas sem excluí-las. Este artigo irá orientá-lo sobre como colocar a estrutura básica e estilizações do componente `App` no lugar, pronto para a definição e interatividade de componentes individuais, que adicionaremos mais tarde.
- [3. Componetizando o nosso app React](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - : Neste ponto, nossa aplicação é um monólito. Antes que possamos fazê-lo fazer as coisas, nós precisamos dividi-lo em componentes gerenciáveis e descritivos. React não tem regras rígidas para o que é ou não um componente – isso é com você! Neste artigo mostraremos a você uma forma sensível de dividir nossa aplicação em componentes.
- [4. Interatividade React : Eventos e estado](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - : Com nosso plano de componentes realizado, agora é hora de começar a atualizar nossa aplicação de uma interface de usuário completamente estática para uma que realmente nos permita interagir e alterar as coisas. Neste artigo faremos isso, investigando os eventos e estados ao longo do caminho.
- [5. Interatividade com o React : Editando, filltrando e renderizando](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - : À medida que nos aproximamos do final da nossa jornada React (pelo menos por enquanto), adicionaremos os toques finais para as principais áreas de funcionalidade da nossa aplicação de lista "to do". Isso inclui permitir que você edite tarefas existentes e filtre a lista de tarefas entre todas as tarefas, concluídas e incompletas. Veremos a renderização condicional da interface de usuário ao longo do caminho.
- [6. Acessibilidade com o React](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - : Em nosso artigo tutorial final, vamos focar (trocadilho intencional) na acessibilidade, incluindo o gerenciamento de foco no React, que pode melhorar a usabilidade e reduzir a confusão tanto para os usuários de teclado quanto usuários leitores de tela.
- [7. Recursos do React](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)
  - : Nosso artigo final fornece uma lista de recursos do React que você pode usar para avançar no seu aprendizado.

## Ember tutorials

> [!NOTE]
> Ember tutorials last tested in May 2020, with Ember/Ember CLI version 3.18.0.
>
> If you need to check your code against our version, you can find a finished version of the sample Ember app code in the [ember-todomvc-tutorial repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc). For a running live version, see <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> (this also includes a few additional features not covered in the tutorial).

- [1. Getting started with Ember](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - : In our first Ember article we will look at how Ember works and what it's useful for, install the Ember toolchain locally, create a sample app, and then do some initial setup to get it ready for development.
- [2. Ember app structure and componentization](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - : In this article we'll get right on with planning out the structure of our TodoMVC Ember app, adding in the HTML for it, and then breaking that HTML structure into components.
- [3. Ember interactivity: Events, classes and state](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - : At this point we'll start adding some interactivity to our app, providing the ability to add and display new todo items. Along the way, we'll look at using events in Ember, creating component classes to contain JavaScript code to control interactive features, and setting up a service to keep track of the data state of our app.
- [4. Ember Interactivity: Footer functionality, conditional rendering](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - : Now it's time to start tackling the footer functionality in our app. Here we'll get the todo counter to update to show the correct number of todos still to complete, and correctly apply styling to completed todos (i.e. where the checkbox has been checked). We'll also wire up our "Clear completed" button. Along the way, we'll learn about using conditional rendering in our templates.
- [5. Routing in Ember](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - : In this article we learn about routing or URL-based filtering as it is sometimes referred to. We'll use it to provide a unique URL for each of the three todo views — "All", "Active", and "Completed".
- [6. Ember resources and troubleshooting](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)
  - : Our final Ember article provides you with a list of resources that you can use to go further in your learning, plus some useful troubleshooting and other information.

## Vue tutorials

> [!NOTE]
> Vue tutorials last tested in May 2020, with Vue 2.6.11.
>
> If you need to check your code against our version, you can find a finished version of the sample Vue app code in our [todo-vue repository](https://github.com/mdn/todo-vue). For a running live version, see <https://mdn.github.io/todo-vue/dist/>.

- [1. Getting started with Vue](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - : Now let's introduce Vue, the third of our frameworks. In this article, we'll look at a little bit of Vue background, learn how to install it and create a new project, study the high-level structure of the whole project and an individual component, see how to run the project locally, and get it prepared to start building our example.
- [2. Creating our first Vue component](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - : Now it's time to dive deeper into Vue, and create our own custom component — we'll start by creating a component to represent each item in the todo list. Along the way, we'll learn about a few important concepts such as calling components inside other components, passing data to them via props and saving data state.
- [3. Rendering a list of Vue components](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - : At this point we've got a fully working component; we're now ready to add multiple `ToDoItem` components to our App. In this article we'll look at adding a set of todo item data to our `App.vue` component, which we'll then loop through and display inside `ToDoItem` components using the `v-for` directive.
- [4. Adding a new todo form: Vue events, methods, and models](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - : We now have sample data in place and a loop that takes each bit of data and renders it inside a `ToDoItem` in our app. What we really need next is the ability to allow our users to enter their own todo items into the app, and for that, we'll need a text `<input>`, an event to fire when the data is submitted, a method to fire upon submission to add the data and rerender the list, and a model to control the data. This is what we'll cover in this article.
- [5. Styling Vue components with CSS](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - : The time has finally come to make our app look a bit nicer. In this article, we'll explore the different ways of styling Vue components with CSS.
- [6. Using Vue computed properties](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - : In this article we'll add a counter that displays the number of completed todo items, using a feature of Vue called computed properties. These work similarly to methods but only re-run when one of their dependencies changes.
- [7. Vue conditional rendering: editing existing todos](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - : Now it is time to add one of the major parts of functionality that we're still missing — the ability to edit existing todo items. To do this, we will take advantage of Vue's conditional rendering capabilities — namely `v-if` and `v-else` — to allow us to toggle between the existing todo item view and an edit view where you can update todo item labels. We'll also look at adding functionality to delete todo items.
- [8. Focus management with Vue refs](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - : We are nearly done with Vue. The last bit of functionality to look at is focus management, or put another way, how we can improve our app's keyboard accessibility. We'll look at using Vue refs to handle this — an advanced feature that allows you to have direct access to the underlying DOM nodes below the virtual DOM, or direct access from one component to the internal DOM structure of a child component.
- [9. Vue resources](/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)
  - : Now we'll round off our study of Vue by giving you a list of resources that you can use to go further in your learning, plus some other useful tips.

## Which frameworks did we choose?

We are publishing our initial set of articles with guides focusing on three of the major frameworks out there — React/ReactDOM, Ember, and Vue. There is a variety of reasons for this:

- They are popular choices that will be around for a while — like with any software tool, it is good to stick with actively-developed choices that are likely to not be discontinued next week, and which will be desirable additions to your skill set when looking for a job.
- They have strong communities and good documentation. It is very important to be able to get help with learning a complex subject, especially when you are just starting out.
- We don't have the resources to cover _all_ modern frameworks. That list would be very difficult to keep up-to-date anyway, as new ones appear all the time.
- As a beginner, trying to choose what to focus on out of the huge number of choices available is a very real problem. Keeping the list short is therefore helpful.

We want to say this upfront — we've **not** chosen the frameworks we are focusing on because we think they are the best, or because we endorse them in any way. We just think they score highly on the above criteria.

Note that we were hoping to have more frameworks included upon initial publication, but we decided to release the content and then add more framework guides later, rather than delay it longer. If your favourite framework is not represented in this content and you'd like to help change that, feel free to discuss it with us! Get in touch with us via [Matrix](https://wiki.mozilla.org/Matrix), or [Discourse](https://discourse.mozilla.org/c/mdn), or drop us a mail on the [mdn-admins list](mailto:mdn-admins@mozilla.org).
