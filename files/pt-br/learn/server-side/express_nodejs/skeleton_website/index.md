---
title: 'Express Tutorial Parte 2: Criando a estrutura do website'
slug: Learn/Server-side/Express_Nodejs/skeleton_website
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}

Neste segundo [Express Tutorial](/pt-BR/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) , mostrará como criar a estrutura do website que depois você poderá colocar _templates,_ chamadas de banco de dados ou rotas específicas.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        <a
          href="/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment"
          >Preparar o ambiente de desenvolvimento do Node </a
        >. Revise o Tutorial Express.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Iniciar nosso website usando o "<em>Express Application Generator"</em>.
      </td>
    </tr>
  </tbody>
</table>

## Visão Geral

Nesse artigo mostraremos como criar a estrutura do website usando a ferramenta "[Express Application Generator](https://expressjs.com/en/starter/generator.html) ". Neste caso, usaremos a ferramenta para criar o framework para nosso [website "LocalLibrary"](/pt-BR/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website), tpara o qual adicionaremos mais tarde todo o outro código necessário para o site. O processo é extremamente simples, com apenas a requisição de invocar o "Generator" na linha de comando com um novo nome de projeto, e, se quiser, especificar o _template_ do site e o gerador de CSS.

As seguintes sessões mostrará como chamar o "Application Generator", e prover uma pequena explicação sobre as diferentes opções de CSS. Também aprenderemos como a estrutura do site é definida. No final, será mostrado como podemos rodar o site para ver se funciona.

> **Nota:** **Nota**: O "_Express Application Generator"_ não é o único gerador para as aplicações do Express, e o projeto gerado não é a única maneira viável de estruturar seus arquivos e diretórios. O site gerado, entretanto, tem um estrutura modular que é fácil de extender e ser entendida. Para aprender melhor sobre a aplicação do "_minimal_ Express", veja [Exemplo"Hello world"](https://expressjs.com/en/starter/hello-world.html).

## Usando o "Application Generator"

Você já deve ter instalado o gerador como requisito.Como um lembrete rápido, você instala a ferramenta de gerador em todo o site usando o Gerenciador de pacotes NPM, como mostrado:

```bash
npm install express-generator -g
```

O gerador tem algumas opções que podem ser visualizadas usando o comando `--help` (or `-h`):

```bash
> express --help

    Usage: express [options] [dir]


  Options:

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information
```

Você pode simplesmente especificar `express` para criar um projeto dentro do diretório atual usando _Jade_ view e CSS simples (se você especificar um nome de diretório, o projeto será criado em uma subpasta com esse nome).

```bash
express
```

Também pode ser escolhido um "view" (_template)_ usando`--view` e/ou um gerador de CSS usando `--css`.

> **Nota:** As outras opções para escolher os mecanismos de modelo (e.g. `--hogan`, `--ejs`, `--hbs` etc.) são preteridas. Use `--view` (ou `-v`)!

### Qual _engine_ de "view" devo usar?

The _Express Application Generator_ allows you to configure a number of popular view/templating engines, including [EJS](https://www.npmjs.com/package/ejs), [Hbs](http://github.com/donpark/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig), and [Vash](https://www.npmjs.com/package/vash), although it chooses Jade by default if you don't specify a view option. Express itself can also support a large number of other templating languages [out of the box](https://github.com/expressjs/express/wiki#template-engines).

> **Nota:** If you want to use a template engine that isn't supported by the generator then see [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express docs) and the documentation for your target view engine.

Generally speaking, you should select a templating engine that delivers all the functionality you need and allows you to be productive sooner — or in other words, in the same way that you choose any other component! Some of the things to consider when comparing template engines:

- Time to productivity — If your team already has experience with a templating language then it is likely they will be productive faster using that language. If not, then you should consider the relative learning curve for candidate templating engines.
- Popularity and activity — Review the popularity of the engine and whether it has an active community. It is important to be able to get support for the engine when you have problems over the lifetime of the website.
- Style — Some template engines use specific markup to indicate inserted content within "ordinary" HTML, while others construct the HTML using a different syntax (for example, using indentation and block names).
- Performance/rendering time.
- Features — you should consider whether the engines you look at have the following features available:

  - Layout inheritance: Allows you to define a base template and then "inherit" just the parts of it that you want to be different for a particular page. This is typically a better approach than building templates by including a number of required components or building a template from scratch each time.
  - "Include" support: Allows you to build up templates by including other templates.
  - Concise variable and loop control syntax.
  - Ability to filter variable values at template level (e.g. making variables upper-case, or formatting a date value).
  - Ability to generate output formats other than HTML (e.g. JSON or XML).
  - Support for asynchronous operations and streaming.
  - Can be used on the client as well as the server. If a templating engine can be used on the client this allows the possibility of serving data and having all or most of the rendering done client-side.

> **Nota:** **Tip:** There are many resources on the Internet to help you compare the different options!

For this project, we'll use the [Pug](https://pugjs.org/api/getting-started.html) templating engine (this is the recently-renamed Jade engine), as this is one of the most popular Express/JavaScript templating languages and is supported out of the box by the generator.

### What CSS stylesheet engine should I use?

The _Express Application Generator_ allows you to create a project that is configured to use the most common CSS stylesheet engines: [LESS](http://lesscss.org/), [SASS](http://sass-lang.com/), [Compass](http://compass-style.org/), [Stylus](http://stylus-lang.com/).

> **Nota:**CSS has some limitations that make certain tasks difficult. CSS stylesheet engines allow you to use more powerful syntax for defining your CSS and then compile the definition into plain-old CSS for browsers to use.

As with templating engines, you should use the stylesheet engine that will allow your team to be most productive. For this project, we'll use the ordinary CSS (the default) as our CSS requirements are not sufficiently complicated to justify using anything else.

### What database should I use?

The generated code doesn't use/include any databases. _Express_ apps can use any [database mechanism](https://expressjs.com/en/guide/database-integration.html) supported by _Node_ (_Express_ itself doesn't define any specific additional behavior/requirements for database management).

We'll discuss how to integrate with a database in a later article.

## Creating the project

For the sample _Local Library_ app we're going to build, we'll create a project named _express-locallibrary-tutorial_ using the _Pug_ template library and no CSS stylesheet engine.

First, navigate to where you want to create the project and then run the _Express Application Generator_ in the command prompt as shown:

```bash
express express-locallibrary-tutorial --view=pug
```

The generator will create (and list) the project's files.

```bash
   create : express-locallibrary-tutorial\
   create : express-locallibrary-tutorial\public\
   create : express-locallibrary-tutorial\public\javascripts\
   create : express-locallibrary-tutorial\public\images\
   create : express-locallibrary-tutorial\public\stylesheets\
   create : express-locallibrary-tutorial\public\stylesheets\style.css
   create : express-locallibrary-tutorial\routes\
   create : express-locallibrary-tutorial\routes\index.js
   create : express-locallibrary-tutorial\routes\users.js
   create : express-locallibrary-tutorial\views\
   create : express-locallibrary-tutorial\views\error.pug
   create : express-locallibrary-tutorial\views\index.pug
   create : express-locallibrary-tutorial\views\layout.pug
   create : express-locallibrary-tutorial\app.js
   create : express-locallibrary-tutorial\package.json
   create : express-locallibrary-tutorial\bin\
   create : express-locallibrary-tutorial\bin\www

   change directory:
     > cd express-locallibrary-tutorial

   install dependencies:
     > npm install

   run the app:
     > SET DEBUG=express-locallibrary-tutorial:* & npm start
```

At the end of the output, the generator provides instructions on how you install the dependencies (as listed in the **package.json** file) and then how to run the application (the instructions above are for Windows; on Linux/macOS they will be slightly different).

> **Nota:** When using Windows, the && and & assumes you are using the Command Prompt. If you are using the new default PowerShell terminal do not concatenate the commands with && and &. Instead set the DEBUG environment variable with $ENV:DEBUG = "express-locallibrary-tutorial:\*";. The npm start can be followed by the npm start.

## Running the skeleton website

At this point, we have a complete skeleton project. The website doesn't actually _do_ very much yet, but it's worth running it to show how it works.

1. First, install the dependencies (the `install` command will fetch all the dependency packages listed in the project's **package.json** file).

    ```bash
    cd express-locallibrary-tutorial
    npm install
    ```

2. Then run the application.

    - On Windows, use this command:

      ```bash
      SET DEBUG=express-locallibrary-tutorial:* & npm start
      ```

    - On macOS or Linux, use this command:

      ```bash
      DEBUG=express-locallibrary-tutorial:* npm start
      ```

3. Then load `http://localhost:3000/` in your browser to access the app.

You should see a browser page that looks like this:

![Browser for default Express app generator website](expressgeneratorskeletonwebsite.png)

You have a working Express application, serving itself to _localhost:3000_.

> **Nota:** You could also start the app just using the `npm start` command. Specifying the DEBUG variable as shown enables console logging/debugging. For example, when you visit the above page you'll see debug output like this:
>
> ```bash
> >SET DEBUG=express-locallibrary-tutorial:* & npm start
>
> > express-locallibrary-tutorial@0.0.0 start D:\github\mdn\test\exprgen\express-locallibrary-tutorial
> > node ./bin/www
>
>   express-locallibrary-tutorial:server Listening on port 3000 +0ms
> GET / 304 490.296 ms - -
> GET /stylesheets/style.css 200 4.886 ms - 111
> ```

## Enable server restart on file changes

Any changes you make to your Express website are currently not visible until you restart the server. It quickly becomes very irritating to have to stop and restart your server every time you make a change, so it is worth taking the time to automate restarting the server when needed.

One of the easiest such tools for this purpose is [nodemon](https://github.com/remy/nodemon). This is usually installed globally (as it is a "tool"), but here we'll install and use it locally as a _developer dependency_, so that any developers working with the project get it automatically when they install the application. Use the following command in the root directory for the skeleton project:

```bash
npm install --save-dev nodemon
```

If you still choose to install [nodemon](https://github.com/remy/nodemon) globally to your machine, and not only to your project's **package.json** file:

```bash
npm install -g nodemon
```

If you open your project's **package.json** file you'll now see a new section with this dependency:

```json
 "devDependencies": {
    "nodemon": "^1.18.10"
}
```

Because the tool isn't installed globally we can't launch it from the command line (unless we add it to the path) but we can call it from an NPM script because NPM knows all about the installed packages. Find the the `scripts` section of your package.json. Initially, it will contain one line, which begins with `"start"`. Update it by putting a comma at the end of that line, and adding the `"devstart"` line seen below:

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
```

We can now start the server in almost exactly the same way as previously, but with the `devstart` command specified:

- On Windows, use this command:

  ```bash
  SET DEBUG=express-locallibrary-tutorial:* & npm run devstart
  ```

- On macOS or Linux, use this command:

  ```bash
  DEBUG=express-locallibrary-tutorial:* npm run devstart
  ```

> **Nota:** Now if you edit any file in the project the server will restart (or you can restart it by typing `rs` on the command prompt at any time). You will still need to reload the browser to refresh the page.
>
> We now have to call "`npm run <scriptname>`" rather than just `npm start`, because "start" is actually an NPM command that is mapped to the named script. We could have replaced the command in the _start_ script but we only want to use _nodemon_ during development, so it makes sense to create a new script command.

## The generated project

Let's now take a look at the project we just created.

### Directory structure

The generated project, now that you have installed dependencies, has the following file structure (files are the items **not** prefixed with "/"). The **package.json** file defines the application dependencies and other information. It also defines a startup script that will call the application entry point, the JavaScript file **/bin/www**. This sets up some of the application error handling and then loads **app.js** to do the rest of the work. The app routes are stored in separate modules under the **routes/** directory. The templates are stored under the /**views** directory.

```
/express-locallibrary-tutorial
    app.js
    /bin
        www
    package.json
    package-lock.json
    /node_modules
        [about 6700 subdirectories and files]
    /public
        /images
        /javascripts
        /stylesheets
            style.css
    /routes
        index.js
        users.js
    /views
        error.pug
        index.pug
        layout.pug
```

The following sections describe the files in a little more detail.

### package.json

The **package.json** file defines the application dependencies and other information:

```json
{
  "name": "express-locallibrary-tutorial",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.9",
    "express": "~4.16.0",
    "http-errors": "~1.6.2",
    "morgan": "~1.9.0",
    "pug": "2.0.0-beta11"
  },
  "devDependencies": {
    "nodemon": "^1.18.10"
  }
}
```

The dependencies include the _express_ package and the package for our selected view engine (_pug_). In addition, we have the following packages that are useful in many web applications:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Used to parse the cookie header and populate `req.cookies` (essentially provides a convenient method for accessing cookie information).
- [debug](https://www.npmjs.com/package/debug): A tiny node debugging utility modeled after node core's debugging technique.
- [morgan](https://www.npmjs.com/package/morgan): An HTTP request logger middleware for node.
- [http-errors](https://www.npmjs.com/package/http-errors): Create HTTP errors where needed (for express error handling).

The scripts section defines a "_start_" script, which is what we are invoking when we call `npm start` to start the server. From the script definition, you can see that this actually starts the JavaScript file **./bin/www** with _node_. It also defines a "_devstart_" script, which we invoke when calling `npm run devstart` instead. This starts the same **./bin/www** file, but with _nodemon_ rather than _node_.

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
```

### www file

The file **/bin/www** is the application entry point! The very first thing this does is `require()` the "real" application entry point (**app.js**, in the project root) that sets up and returns the [`express()`](http://expressjs.com/en/api.html) application object.

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
```

> **Nota:** `require()` is a global node function that is used to import modules into the current file. Here we specify **app.js** module using a relative path and omitting the optional (.**js**) file extension.

The remainder of the code in this file sets up a node HTTP server with `app` set to a specific port (defined in an environment variable or 3000 if the variable isn't defined), and starts listening and reporting server errors and connections. For now you don't really need to know anything else about the code (everything in this file is "boilerplate"), but feel free to review it if you're interested.

### app.js

This file creates an `express` application object (named `app`, by convention), sets up the application with various settings and middleware, and then exports the app from the module. The code below shows just the parts of the file that create and export the app object:

```js
var express = require('express');
var app = express();
...
module.exports = app;
```

Back in the **www** entry point file above, it is this `module.exports` object that is supplied to the caller when this file is imported.

Let's work through the **app.js** file in detail. First, we import some useful node libraries into the file using `require()`, including http-errors, _express_, _morgan_ and _cookie-parser_ that we previously downloaded for our application using NPM; and _path_, which is a core Node library for parsing file and directory paths.

```js
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
```

Then we `require()` modules from our routes directory. These modules/files contain code for handling particular sets of related "routes" (URL paths). When we extend the skeleton application, for example to list all books in the library, we will add a new file for dealing with book-related routes.

```js
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
```

> **Nota:** At this point, we have just _imported_ the module; we haven't actually used its routes yet (this happens just a little bit further down the file).

Next, we create the `app` object using our imported _express_ module, and then use it to set up the view (template) engine. There are two parts to setting up the engine. First, we set the '`views`' value to specify the folder where the templates will be stored (in this case the subfolder **/views**). Then we set the '`view engine`' value to specify the template library (in this case "pug").

```js
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
```

The next set of functions call `app.use()` to add the _middleware_ libraries into the request handling chain. In addition to the 3rd party libraries we imported previously, we use the `express.static` middleware to get _Express_ to serve all the static files in the **/public** directory in the project root.

```js
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
```

Now that all the other middleware is set up, we add our (previously imported) route-handling code to the request handling chain. The imported code will define particular routes for the different _parts_ of the site:

```js
app.use('/', indexRouter);
app.use('/users', usersRouter);
```

> **Nota:** The paths specified above ('/' and '`/users'`) are treated as a prefix to routes defined in the imported files. So for example, if the imported **users** module defines a route for `/profile`, you would access that route at `/users/profile`. We'll talk more about routes in a later article.

The last middleware in the file adds handler methods for errors and HTTP 404 responses.

```js
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
```

The Express application object (app) is now fully configured. The last step is to add it to the module exports (this is what allows it to be imported by **/bin/www**).

```js
module.exports = app;
```

### Routes

The route file **/routes/users.js** is shown below (route files share a similar structure, so we don't need to also show **index.js**). First, it loads the _express_ module and uses it to get an `express.Router` object. Then it specifies a route on that object and lastly exports the router from the module (this is what allows the file to be imported into **app.js**).

```js
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
```

The route defines a callback that will be invoked whenever an HTTP `GET` request with the correct pattern is detected. The matching pattern is the route specified when the module is imported ('`/users`') plus whatever is defined in this file ('`/`'). In other words, this route will be used when an URL of `/users/` is received.

> **Nota:** **Tip:** Try this out by running the server with node and visiting the URL in your browser: `http://localhost:3000/users/`. You should see a message: 'respond with a resource'.

One thing of interest above is that the callback function has the third argument '`next`', and is hence a middleware function rather than a simple route callback. While the code doesn't currently use the `next` argument, it may be useful in the future if you want to add multiple route handlers to the `'/'` route path.

### Views (templates)

The views (templates) are stored in the **/views** directory (as specified in **app.js**) and are given the file extension **.pug**. The method [`Response.render()`](http://expressjs.com/en/4x/api.html#res.render) is used to render a specified template along with the values of named variables passed in an object, and then send the result as a response. In the code below from **/routes/index.js** you can see how that route renders a response using the template "index" passing the template variable "title".

```js
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
```

The corresponding template for the above route is given below (**index.pug**). We'll talk more about the syntax later. All you need to know for now is that the `title` variable (with value `'Express'`) is inserted where specified in the template.

```
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Challenge yourself

Create a new route in **/routes/users.js** that will display the text "_You're so cool"_ at URL `/users/cool/`. Test it by running the server and visiting `http://localhost:3000/users/cool/` in your browser

## Summary

You have now created a skeleton website project for the [Local Library](/pt-BR/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) and verified that it runs using _node_. Most importantly, you also understand how the project is structured, so you have a good idea where we need to make changes to add routes and views for our local library.

Next, we'll start modifying the skeleton so that it works as a library website.

## See also

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express docs)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express docs)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}
