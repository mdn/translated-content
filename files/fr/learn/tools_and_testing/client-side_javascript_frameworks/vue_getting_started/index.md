---
title: Prise en main de Vue
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started
translation_of: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started
---
{{LearnSidebar}}

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Présentons Maintenant Vue, le troisième de nos cadres. Dans cet article, nous allons examiner un peu de fond Vue, apprendre à l’installer et créer un nouveau projet, étudier la structure de haut niveau de l’ensemble du projet et un composant individuel, voir comment exécuter le projet localement, et le préparer à commencer à construire notre exemple.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Conditions préalables:</th>
      <td>
        <p>
          Familiarité avec les langages <a href="/fr/docs/Learn/HTML">HTML</a>,
          <a href="/fr/docs/Learn/CSS">CSS</a>et
          <a href="/fr/docs/Learn/JavaScript">JavaScript,</a> connaissance de la
          <a
            href="/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >ligne terminal/commande</a
          >.
        </p>
        <p>
          Les composants Vue sont écrits sous la forme d’une combinaison
          d’objets JavaScript qui gèrent les données de l’application et d’une
          syntaxe de modèle html qui cartographie la structure DOM sous-jacente.
          Pour l’installation et pour utiliser certaines des fonctionnalités les
          plus avancées de Vue (comme les composants de fichier unique ou les
          fonctions de rendu), vous aurez besoin d’un terminal avec nœud + npm
          installé.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        Pour configurer un environnement de développement Vue local, créez une
        application de démarrage et comprenez les bases de son fonctionnement.
      </td>
    </tr>
  </tbody>
</table>

## Une Vue plus claire

Vue est un cadre JavaScript moderne qui fournit des installations utiles pour une amélioration progressive - contrairement à beaucoup d’autres cadres, vous pouvez utiliser Vue pour améliorer html existant. Cela vous permet d’utiliser Vue comme un remplacement de drop-in pour une bibliothèque comme [JQuery](/fr/docs/Glossary/jQuery).

Cela étant dit, vous pouvez également utiliser Vue pour écrire des applications à page unique entières (SPA). Cela vous permet de créer un balisage géré entièrement par Vue, ce qui peut améliorer l’expérience et les performances des développeurs lors de la gestion d’applications complexes. Il vous permet également de profiter des bibliothèques pour le routage côté client et la gestion de l’État lorsque vous en avez besoin. En outre, Vue adopte une approche « intermédiaire » pour l’outillage comme le routage côté client et la gestion de l’État. Bien que l’équipe de base de Vue gère des bibliothèques suggérées pour ces fonctions, elles ne sont pas directement regroupées dans Vue. Cela vous permet de sélectionner une bibliothèque de routage/gestion d’état différente si elle correspond mieux à votre application.

En plus de vous permettre d’intégrer progressivement Vue dans vos applications, Vue propose également une approche progressive du balisage de l’écriture. Comme la plupart des cadres, Vue vous permet de créer des blocs réutilisables de balisage via des composants. La plupart du temps, les composants Vue sont écrits à l’aide d’une syntaxe de modèle HTML spéciale. Lorsque vous avez besoin de plus de contrôle que ne le permet la syntaxe HTML, vous pouvez écrire des fonctions JSX ou JavaScript simples pour définir vos composants.

Au fur et à mesure que vous travaillez sur ce didacticiel, vous pouvez garder le [guide Vue](https://vuejs.org/v2/guide/) et la [documentation API](https://vuejs.org/v2/api/) ouverts dans d’autres onglets, de sorte que vous pouvez vous référer à eux si vous voulez plus d’informations sur n’importe quel sous-sujet.
Pour une bonne comparaison (mais potentiellement biaisée) entre Vue et plusieurs des autres cadres, voir [Vue Docs: Comparison with Other Frameworks](https://vuejs.org/v2/guide/comparison.html).

## Installation

Pour utiliser Vue dans un site existant, vous pouvez déposer l’un des éléments suivants sur une page. Cela vous permet de commencer à utiliser Vue sur les sites existants, c’est pourquoi Vue se targue d’être un cadre progressif. Il s’agit d’une excellente option lors de la migration d’un projet existant à l’aide d’une bibliothèque comme JQuery à Vue. Avec cette méthode, vous pouvez utiliser un grand nombre des fonctionnalités de base de Vue, telles que les attributs, les composants personnalisés et la gestion des données.[`<script>`](/fr/docs/Web/HTML/Element/script)

- Script de développement (Non optimisé, mais inclut les avertissements de console. Idéal pour le développement

  ```html
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  ```

- Production Script (Optimized version, minimal console warnings. It is recommended that you specify a version number when including Vue on your site so that any framework updates do not break your live site without you knowing.)

  ```html
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  ```

However, this approach has some limitations. To build more complex apps, you’ll want to use the [Vue NPM package](https://www.npmjs.com/package/vue). This will let you use advanced features of Vue and take advantage of bundlers like WebPack. To make building apps with Vue easier, there is a CLI to streamline the development process. To use the npm package & the CLI you will need:

1.  Node.js 8.11+ installed.
2.  npm or yarn.

> **Note :** If you don't have the above installed, find out [more about installing npm and Node.js](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#Adding_powerups) here.

To install the CLI, run the following command in your terminal:

```bash
npm install --global @vue/cli
```

Or if you'd prefer to use yarn:

```bash
yarn global add @vue/cli
```

Once installed, to initialize a new project you can then open a terminal in the directory you want to create the project in, and run . The CLI will then give you a list of project configurations you can use. There are a few preset ones, and you can make your own. These options let you configure things like TypeScript, linting, vue-router, testing, and more.`vue create <project-name>`

We’ll look at using this below.

## Initializing a new project

To explore various features of Vue, we will be building up a sample todo list app. We'll begin by using the Vue CLI to create a new app framework to build our app into. Follow the steps below:

1.  In terminal, to where you'd like to create your sample app, then run .` cd``vue create moz-todo-vue `
2.  Use the arrow keys and to select the "Manually select features" option.

    <kbd>Enter</kbd>

3.  The first menu you’ll be presented with allows you to choose which features you want to include in your project. Make sure that "Babel" and "Linter / Formatter" are selected. If they are not, use the arrow keys and the space bar to toggle them on. Once they are selected, press to proceed.

    <kbd>Enter</kbd>

4.  Next you’ll select a config for the linter / formatter. Navigate to "Eslint with error prevention only" and hit again. This will help us catch common errors, but not be overly opinionated.

    <kbd>Enter</kbd>

5.  Next you are asked to configure what kind of automated linting we want. Select "Lint on save". This will check for errors when we save a file inside the project. Hit to continue.

    <kbd>Enter</kbd>

6.  Now, you will select how we want your config files to be managed. "In dedicated config files" will put your config settings for things like ESLint into their own, dedicated files. The other option, "In package.json", will put all of your config settings into the app's file. Select "In dedicated config files" and push .`package.json`

    <kbd>Enter</kbd>

7.  Finally, you are asked if you want to save this as a preset for future options. This is entirely up to you. If you like these settings over the existing presets and want to use them again, type , otherwise type .

    <kbd>y</kbd>

    <kbd>n</kbd>

The CLI will now begin scaffolding out your project, and installing all of your dependencies.

If you've never run the Vue CLI before, you'll get one more question — you'll be asked to choose a package manager. You can use the arrow keys to select which one you prefer. The Vue CLI will default to this package manager from now on. If you need to use a different package manager after this, you can pass in a flag , when you run .  So if you wanted to create the project with npm and you'd previously chosen yarn, you’d run .` --packageManager=<package-manager>``vue create``moz-todo-vue``vue create moz-todo-vue --packageManager=npm `

> **Note :** We've not gone over all of the options here, but you can [find more information on the CLI](https://cli.vuejs.org) in the Vue docs.

## Project structure

If everything went successfully, the CLI should have created a series of files and directories for your project. The most significant ones are as follows:

- `.eslintrc.js`: This is a config file for [eslint](https://eslint.org/). You can use this to manage your linting rules.
- `babel.config.js`: This is the config file for [Babel](https://babeljs.io/), which transforms modern JavaScript features being used in development code into older syntax that is more cross-browser compatible in production code. You can register additional babel plugins in this file.
- `.browserslistrc`: This is a config for [Browserslist](https://github.com/browserslist/browserslist). You can use this to control which browsers your tooling optimizes for.
- `public`: This directory contains static assets that are published, but not processed by [Webpack](https://webpack.js.org/) during build (with one exception; gets some processing).`index.html`

  - `favicon.ico`: This is the favicon for your app. Currently, it's the Vue logo.
  - `index.html`: This is the template for your app. Your Vue app is run from this HTML page, and you can use lodash template syntax to interpolate values into it.

    > **Note :** this is not the template for managing the layout of your application — this template is for managing static HTML that sits outside of your Vue app. Editing this file typically only occurs in advanced use cases.

- `src`: This directory contains the core of your Vue app.

  - `main.js`: this is the entry point to your application. Currently, this file initializes your Vue application and signifies which HTML element in the file your app should be attached to. This file is often where you register global components or additional Vue libraries.`index.html`
  - `App.vue`: this is the top-level component in your Vue app. See below for more explanation of Vue components.
  - `components`: this directory is where you keep your components. Currently it just has one example component.
  - `assets`: This directory is for storing static assets like CSS and images. Because these files are in the source directory, they can be processed by Webpack. This means you can use pre-processors like [Sass/SCSS](https://sass-lang.com/) or [Stylus](https://stylus-lang.com/).

> **Note :** Depending on the options you select when creating a new project, there might be other directories present (for example, if you choose a router, you will also have a directory).`views`

## .vue files (single file components)

Like in many front-end frameworks, components are a central part of building apps in Vue. These components let you break a large application into discrete building blocks that can be created and managed separately, and transfer data between each other as required. These small blocks can help you reason about and test your code.

While some frameworks encourage you to separate your template, logic, and styling code into separate files, Vue takes the opposite approach. Using [Single File Components](https://vuejs.org/v2/guide/single-file-components.html), Vue lets you group your templates, corresponding script, and CSS all together in a single file ending in . These files are processed by a JS build tool (such as Webpack), which means you can take advantage of build-time tooling in your project. This allows you to use tools like Babel, TypeScript, SCSS and more to create more sophisticated components.`.vue`

As a bonus, projects created with the Vue CLI are configured to use files with Webpack out of the box. In fact, if you look inside the folder in the project we created with the CLI, you'll see your first file: .` .vue``src``.vue``App.vue `

Let's explore this now.

### App.vue

Open your file — you’ll see that it has three parts: , , and , which contain the component’s template, scripting, and styling information. All Single File Components share this same basic structure.` App.vue``<template>``<script>``<style> `

`<template>` contains all the markup structure and display logic of your component. Your template can contain any valid HTML, as well as some Vue-specific syntax that we'll cover later.

> **Note :** By setting the attribute on the tag, you can use Pug template syntax instead of standard HTML — . We'll stick to standard HTML through this tutorial, but it is worth knowing that this is possible.` lang``<template>``<template lang="pug"> `

`<script>` contains all of the non-display logic of your component. Most importantly, your tag needs to have a default exported JS object. This object is where you locally register components, define component inputs (props), handle local state, define methods, and more. Your build step will process this object and transform it (with your template) into a Vue component with a function.` <script>``render() `

In the case of , our default export sets the name of the component to and registers the component by adding it into the property. When you register a component in this way, you're registering it locally. Locally registered components can only be used inside the components that register them, so you need to import and register them in every component file that uses them. This can be useful for bundle splitting/tree shaking since not every page in your app necessarily needs every component.` App.vue``app``HelloWorld``components `

```js
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    //You can register components locally here.
    HelloWorld
  }
};
```

> **Note :** If you want to use [TypeScript](https://www.typescriptlang.org/) syntax, you need to set the attribute on the tag to signify to the compiler that you're using TypeScript — .` lang``<script>``<script lang="ts"> `

`<style>` is where you write your CSS for the component. If you add a attribute — — Vue will scope the styles to the contents of your SFC. This works similar to CSS-in-JS solutions, but allows you to just write plain CSS.` scoped``<style scoped> `

> **Note :** If you select a CSS pre-processor when creating the project via the CLI, you can add a attribute to the tag so that the contents can be processed by Webpack at build time. For example, will allow you to use SCSS syntax in your styling information.` lang``<style>``<style lang="scss"> `

## Running the app locally

The Vue CLI comes with a built-in development server. This allows you to run your app locally so you can test it easily without needing to configure a server yourself. The CLI adds a command to the project’s file as an npm script, so you can easily run it.` serve``package.json `

In your terminal, try running (or if you prefer yarn). Your terminal should output something like the following:` npm run serve``yarn serve `

    INFO Starting development server...
    98% after emitting CopyPlugin

     DONE Compiled successfully in 18121ms

      App running at:
      - Local:   <http://localhost:8080/>
      - Network: <http://192.168.1.9:8080/>

      Note that the development build is not optimized.
      To create a production build, run npm run build.

If you navigate to the “local” address in a new browser tab (this should be something like as stated above, but may vary based on your setup), you should see your app. Right now, it should contain a welcome message, a link to the Vue documentation, links to the plugins you added when you initialized the app with your CLI, and some other useful links to the Vue community and ecosystem.`http://localhost:8080`

![default vue app render, with vue logo, welcome message, and some documentation links](vue-default-app.png)

## Making a couple of changes

Let's make our first change to the app — we’ll delete the Vue logo. Open the file, and delete the element from the template section:`App.vue`[`<img>`](/fr/docs/Web/HTML/Element/img)

```html
<img alt="Vue logo" src="./assets/logo.png">
```

If your server is still running, you should see the logo removed from the rendered site almost instantly. Let’s also remove the component from our template.`HelloWorld`

First of all delete this line:

```html
<HelloWorld msg="Welcome to Your Vue.js App"/>
```

If you save your file now, the rendered app will throw an error because we’ve registered the component but are not using it. We also need to remove the lines from inside the element that import and register the component:` App.vue``<script> `

Delete these lines now:

```js
import HelloWorld from './components/HelloWorld.vue'
```

```js
components: {
  HelloWorld
}
```

Your rendered app should no longer show an error, just a blank page, as we currently have no visible content inside .`<template>`

Let’s add a new inside . Since we’re going to be creating a todo list app below, let's set our header text to "To-Do List". Add it like so:` <h1>``<div id="app"> `

```html
<template>
  <div id="app">
    <h1>To-Do List</h1>
  </div>
</template>
```

`App.vue` will now show our heading, as you'd expect.

## Summary

Let's leave this here for now. We've learnt about some of the ideas behind Vue, created some scaffolding for our example app to live inside, inspected it, and made a few preliminary changes.

With a basic introduction out of the way, we'll now go further and build up our sample app, a basic Todo list application that allows us to store a list of items, check them off when done, and filter the list by all, complete, and incomplete todos.

In the next article we'll build our first custom component, and look at some important concepts such as passing props into it and saving its data state.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## In this module

- [Introduction to client-side frameworks](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Framework main features](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [Getting started with React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [Beginning our React todo list](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [Componentizing our React app](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [React interactivity: Events and state](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [React interactivity: Editing, filtering, conditional rendering](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Accessibility in React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [React resources](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Getting started with Ember](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [Ember app structure and componentization](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Ember interactivity: Events, classes and state](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Ember Interactivity: Footer functionality, conditional rendering](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Routing in Ember](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ember resources and troubleshooting](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Getting started with Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [Creating our first Vue component](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Rendering a list of Vue components](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Adding a new todo form: Vue events, methods, and models](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [Styling Vue components with CSS](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [Using Vue computed properties](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Vue conditional rendering: editing existing todos](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Focus management with Vue refs](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Vue resources](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- Svelte

  - [Getting started with Svelte](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [Starting our Svelte Todo list app](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Dynamic behavior in Svelte: working with variables and props](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [Componentizing our Svelte app](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [Advanced Svelte: Reactivity, lifecycle, accessibility](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [Working with Svelte stores](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [TypeScript support in Svelte](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [Deployment and next steps](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)
