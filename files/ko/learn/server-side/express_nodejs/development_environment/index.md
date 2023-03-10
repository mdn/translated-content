---
title: Node 개발 환경을 설치하기
slug: Learn/Server-side/Express_Nodejs/development_environment
original_slug: Learn/Server-side/Express_Nodejs/개발_환경
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}

이제 Express에 관한 내용을 알았으니, Windows, Linux (Ubuntu), 그리고 macOS 에서의 Node/Express 개발 환경을 설정하고 테스트하는 법을 보여드리겠습니다. 사용중인 운영 체제가 무엇이든 간에, 이 글은 당신에게 Express 앱 개발을 시작할 수 있도록 필요한 내용을 제공합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">전제 조건:</th>
      <td>
        터미널 혹은 명령어 창을 여는 방법. 당신의 개발 컴퓨터의 운영 체제에
        소프트웨어 패키지를 설치하는 방법을 알고 있어야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>당신의 컴퓨터에 Express (X.XX) 을 위한 개발 환경을 설치하는 것.</td>
    </tr>
  </tbody>
</table>

## Express 개발 환경 개요

Node와 Express를 통해 웹앱 개발을 한결 수월하게 할 수 있습니다. 이 섹션에서는 어떤 도구들이 필요한지, Ubuntu, macOS, 그리고 Windows에서 어떻게 Node와 Express를 설치하는지, 마지막으로, 설치 후 어떻게 테스트해볼 수 있는지 살펴볼 것입니다.

### Express 개발 환경이란 무엇입니까?

Express개발환경은 Nodejs의 설치, NPM 패키지 매니저, 그리고 (선택적) 로컬 컴퓨터의 *Express Application Generator*를 포함합니다.

_Node_ and the _NPM_ package manager are installed together from prepared binary packages, installers, operating system package managers or from source (as shown in the following sections). _Express_ is then installed by NPM as a dependency of your individual _Express_ web applications (along with other libraries like template engines, database drivers, authentication middleware, middleware to serve static files, etc.)

_NPM_ can also be used to (globally) install the _Express Application Generator_, a handy tool for creating skeleton _Express_ web apps that follow the [MVC pattern](/ko/docs/Glossary/MVC). The application generator is optional because you don't _need_ to use this tool to create apps that use Express, or construct Express apps that have the same architectural layout or dependencies. We'll be using it though, because it makes getting started a lot easier, and promotes a modular application structure.

> **참고:** Unlike for some other web frameworks, the development environment does not include a separate development web server. In _Node_/_Express_ a web application creates and runs its own web server!

There are other peripheral tools that are part of a typical development environment, including [text editors](/ko/docs/Learn/Common_questions/Available_text_editors) or IDEs for editing code, and source control management tools like [Git](https://git-scm.com/) for safely managing different versions of your code. We are assuming that you've already got these sorts of tools installed (in particular a text editor).

### What operating systems are supported?

_Node_ can be run on Windows, macOS, many "flavours" of Linux, Docker, etc. (there is a full list on the nodejs [Downloads](https://nodejs.org/en/download/) page). Almost any personal computer should have the necessary performance to run Node during development. _Express_ is run in a _Node_ environment, and hence can run on any platform that runs _Node_.

이 기사에서는 Windows, macOS, 그리고 Ubuntu Linux에서의 설치방법을 안내해드리고 있습니다.

### What version of Node/Express should you use?

There are many [releases of Node](https://nodejs.org/en/blog/release/) — newer releases contain bug fixes, support for more recent versions of ECMAScript (JavaScript) standards, and improvements to the Node APIs.

Generally you should use the most recent _LTS (long-term supported)_ release as this will be more stable than the "current" release while still having relatively recent features (and is still being actively maintained). You should use the _Current_ release if you need a feature that is not present in the LTS version.

For _Express_ you should always use the latest version.

### What about databases and other dependencies?

Other dependencies, such as database drivers, template engines, authentication engines, etc. are part of the application, and are imported into the application environment using the NPM package manager. We'll discuss them in later app-specific articles.

## Node 설치하기

_Express_ 를 사용하기 위해서 우선 운영체제에 *Nodejs*와 [Node Package Manager (NPM)](https://docs.npmjs.com/)를 설치해야 합니다. The following sections explain the easiest way to install the Long Term Supported (LTS) version of Nodejs on Ubuntu Linux 16.04, macOS, and Windows 10.

> **참고:** **Tip:** The sections below show the easiest way to install _Node_ and _NPM_ on our target OS platforms. If you're using another OS or just want to see some of the other approaches for the current platforms then see [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/) (nodejs.org).

### Windows and macOS

*Node*와 *NPM*을 설치하는 것은 간단합니다:

1. Installer를 다운받읍시다:

    1. <https://nodejs.org/en/>
    2. "안정적이고 신뢰도가 높은" LTS버튼을 클릭해 다운로드를 시작합니다. .

2. 다운로드된 파일을 더블클릭해 Node를 설치합니다.

The easiest way to install the most recent LTS version of Node 10.x is to use the [package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions) to get it from the Ubuntu _binary distributions_ repository. This can be done very simply by running the following two commands on your terminal:

```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

> **경고:** Don't install directly from the normal Ubuntu repositories because they contain very old versions of node.

### Nodejs와 NPM 테스팅

The easiest way to test that node is installed is to run the "version" command in your terminal/command prompt and check that a version string is returned:

```bash
>node -v
v10.15.1
```

The _Nodejs_ package manager _NPM_ should also have been installed, and can be tested in the same way:

```bash
>npm -v
6.4.1
```

As a slightly more exciting test let's create a very basic "pure node" server that simply prints out "Hello World" in the browser when you visit the correct URL in your browser:

1. Copy the following text into a file named **hellonode.js**. This uses pure _Node_ features (nothing from Express) and some ES6 syntax:

    ```js
    //Load HTTP module
    const http = require("http");
    const hostname = '127.0.0.1';
    const port = 3000;

    //Create HTTP server and listen on port 3000 for requests
    const server = http.createServer((req, res) => {

      //Set the response HTTP header with HTTP status and Content type
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World\n');
    });

    //listen for request on port 3000, and as a callback function have the port listened on logged
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
    ```

    The code imports the "http" module and uses it to create a server (`createServer()`) that listens for HTTP requests on port 3000. The script then prints a message to the console about what browser URL you can use to test the server. The `createServer()` function takes as an argument a callback function that will be invoked when an HTTP request is received — this simply returns a response with an HTTP status code of 200 ("OK") and the plain text "Hello World".

    > **참고:** Don't worry if you don't understand exactly what this code is doing yet! We'll explain our code in greater detail once we start using Express!

2. Start the server by navigating into the same directory as your `hellonode.js` file in your command prompt, and calling `node` along with the script name, like so:

    ```bash
    >node hellonode.js
    Server running at http://127.0.0.1:3000/
    ```

3. Navigate to the URL [http://127.0.0.1:3000](http://127.0.0.1:3000). If everything is working, the browser should simply display the string "Hello World".

## Using NPM

Next to _Node_ itself, [NPM](https://docs.npmjs.com/) is the most important tool for working with _Node_ applications. NPM is used to fetch any packages (JavaScript libraries) that an application needs for development, testing, and/or production, and may also be used to run tests and tools used in the development process.

> **참고:** From Node's perspective, _Express_ is just another package that you need to install using NPM and then require in your own code.

You can manually use NPM to separately fetch each needed package. Typically we instead manage dependencies using a plain-text definition file named [package.json](https://docs.npmjs.com/files/package.json). This file lists all the dependencies for a specific JavaScript "package", including the package's name, version, description, initial file to execute, production dependencies, development dependencies, versions of _Node_ it can work with, etc. The **package.json** file should contain everything NPM needs to fetch and run your application (if you were writing a reusable library you could use this definition to upload your package to the npm respository and make it available for other users).

### dependencies 추가

The following steps show how you can use NPM to download a package, save it into the project dependencies, and then require it in a Node application.

> **참고:** Here we show the instructions to fetch and install the _Express_ package. Later on we'll show how this package, and others, are already specified for us using the _Express Application Generator_. This section is provided because it is useful to understand how NPM works and what is being created by the application generator.

1. First create a directory for your new application and navigate into it:

    ```bash
    mkdir myapp
    cd myapp
    ```

2. Use the npm `init` command to create a **package.json** file for your application. This command prompts you for a number of things, including the name and version of your application and the name of the initial entry point file (by default this is **index.js**). For now, just accept the defaults:

    ```bash
    npm init
    ```

    If you display the **package.json** file (`cat package.json`), you will see the defaults that you accepted, ending with the license.

    ```json
    {
      "name": "myapp",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }
    ```

3. Now install Express in the `myapp` directory and save it in the dependencies list of your **package.json** file

   ```bash
    npm install express
    ```

    The dependencies section of your **package.json** will now appear at the end of the **package.json** file and will include _Express_.

    ```json
    {
      "name": "myapp",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "express": "^4.16.4"
      }
    }
    ```

4. To use the Express library you call the `require()` function in your index.js file to include it in your application. Create this file now, in the root of the "myapp" application directory, and give it the following contents:

    ```js
    const express = require('express')
    const app = express();

    app.get('/', (req, res) => {
      res.send('Hello World!')
    });

    app.listen(8000, () => {
      console.log('Example app listening on port 8000!')
    });
    ```

    This code shows a minimal "HelloWorld" Express web application. This imports the "express" module using `require()` and uses it to create a server (`app`) that listens for HTTP requests on port 8000 and prints a message to the console explaining what browser URL you can use to test the server. The `app.get()` function only responds to HTTP `GET` requests with the specified URL path ('/'), in this case by calling a function to send our _Hello World!_ message.

5. You can start the server by calling node with the script in your command prompt:

    ```bash
    >node index.js
    Example app listening on port 8000
    ```

6. Navigate to the URL (<http://127.0.0.1:8000/>). If everything is working, the browser should simply display the string "Hello World!".

### Development dependencies

If a dependency is only used during development, you should instead save it as a "development dependency" (so that your package users don't have to install it in production). For example, to use the popular JavaScript Linting tool [eslint](http://eslint.org/) you would call NPM as shown:

```bash
npm install eslint --save-dev
```

The following entry would then be added to your application's **package.json**:

```js
  "devDependencies": {
    "eslint": "^4.12.1"
  }
```

> **참고:** "[Linters](<https://en.wikipedia.org/wiki/Lint_(software)>)" are tools that perform static analysis on software in order to recognise and report adherence/non-adherance to some set of coding best practice.

### Running tasks

In addition to defining and fetching dependencies you can also define _named_ scripts in your **package.json** files and call NPM to execute them with the [run-script](https://docs.npmjs.com/cli/run-script) command. This approach is commonly used to automate running tests and parts of the development or build toolchain (e.g., running tools to minify JavaScript, shrink images, LINT/analyse your code, etc).

> **참고:** Task runners like [Gulp](http://gulpjs.com/) and [Grunt](http://gruntjs.com/) can also be used to run tests and other external tools.

For example, to define a script to run the _eslint_ development dependency that we specified in the previous section we might add the following script block to our **package.json** file (assuming that our application source is in a folder /src/js):

```js
"scripts": {
  ...
  "lint": "eslint src/js"
  ...
}
```

To explain a little further, `eslint src/js` is a command that we could enter in our terminal/command line to run `eslint` on JavaScript files contained in the `src/js` directory inside our app directory. Including the above inside our app's package.json file provides a shortcut for this command — `lint`.

We would then be able to run _eslint_ using NPM by calling:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

This example may not look any shorter than the original command, but you can include much bigger commands inside your npm scripts, including chains of multiple commands. You could identify a single npm script that runs all your tests at once.

## Installing the Express Application Generator

The [Express Application Generator](https://expressjs.com/en/starter/generator.html) tool generates an Express application "skeleton". Install the generator using NPM as shown (the `-g` flag installs the tool globally so that you can call it from anywhere):

```
npm install express-generator -g
```

To create an _Express_ app named "helloworld" with the default settings, navigate to where you want to create it and run the app as shown:

```bash
express helloworld
```

> **참고:**You can also specify the template library to use and a number of other settings. Use the `help` command to see all the options:
>
> ```bash
> express --help
> ```

NPM will create the new Express app in a sub folder of your current location, displaying build progress on the console. On completion, the tool will display the commands you need to enter to install the Node dependencies and start the app.

> **참고:** The new app will have a **package.json** file in its root directory. You can open this to see what dependencies are installed, including Express and the template library Jade:
>
> ```js
> {
>   "name": "helloworld",
>   "version": "0.0.0",
>   "private": true,
>   "scripts": {
>     "start": "node ./bin/www"
>   },
>   "dependencies": {
>     "cookie-parser": "~1.4.3",
>     "debug": "~2.6.9",
>     "express": "~4.16.0",
>     "http-errors": "~1.6.2",
>     "jade": "~1.11.0",
>     "morgan": "~1.9.0"
>   }
> }
> ```

Install all the dependencies for the helloworld app using NPM as shown:

```bash
cd helloworld
npm install
```

Then run the app (the commands are slightly different for Windows and Linux/macOS), as shown below:

```bash
# Run the helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run the helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

The DEBUG command creates useful logging, resulting in an output like that shown below.

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\Github\expresstests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Open a browser and navigate to <http://127.0.0.1:3000/> to see the default Express welcome page.

![Express - Generated App Default Screen](express_default_screen.png)

We'll talk more about the generated app when we get to the article on generating a skeleton application.

## Summary

You now have a Node development environment up and running on your computer that can be used for creating Express web applications. You've also seen how NPM can be used to import Express into an application, and also how you can create applications using the Express Application Generator tool and then run them.

In the next article we start working through a tutorial to build a complete web application using this environment and associated tools.

## See also

- [Downloads](https://nodejs.org/en/download/) page (nodejs.org)
- [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/) (nodejs.org)
- [Installing Express](http://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}
