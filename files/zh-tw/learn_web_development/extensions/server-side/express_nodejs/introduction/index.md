---
title: Express/Node introduction
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

在這篇文章中回答了「什麼是 Node？」和「什麼是 Express」，同時概述是什麼讓 Express 框架如此特別。本文將概述主要特性、展示一些 Express 應用的主要建構模塊(雖然此時你還沒有能測試它的開發環境)

<table>
  <tbody>
    <tr>
      <th scope="row">前置需求:</th>
      <td>
        基本的電腦知識。 對<a href="/zh-TW/docs/Learn_web_development/Extensions/Server-side/First_steps"
          >伺服器端網站程式設計</a
        >的基本了解，特別是網站中<a
          href="/zh-TW/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"
          >客戶端 - 伺服器交互的機制</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        提升對Express的了解、如何與Node搭配使用、提供的功能和Express應用的主要建構模塊。
      </td>
    </tr>
  </tbody>
</table>

## 什麼是 Express 和 Node?

[Node](https://nodejs.org/) (或者說*Node.js*) 是一個開源、跨平台和允許開發者使用[Javascript](/zh-TW/docs/Glossary/JavaScript)創造伺服器端工具和應用的執行環境。運行的目的是為了能在瀏覽器外使用，例如：直接執行在電腦或伺服器上。所以該環境捨棄了瀏覽器限定的 JavaScript APIs 並增加更多傳統 OS APIs 的支援，例如：HTTP 和檔案系統的程式庫。

從網站伺服器開發的觀點來看 Node 有幾項優點：

- 高效能!Node 旨在提升生產率和網頁應用的可擴充性。而且它非常適合網站開發常見的問題，例如：即時網站應用
- 使用舊版本的 JavaScript 進行程式編寫，這表示不用多花力氣在轉換瀏覽器和伺服器上的程式碼
- 與其他傳統的 Web 伺服器語言（例如 Python，PHP 等）相比，JavaScript 是一種相對新的程式語言，它受益於語言設計的改進。許多其他新的和流行的語言都可以編譯/轉換成 JavaScript，因此你還可以使用 CoffeeScript， ClojureScript，Scala，LiveScript 等
- Node Package Manager(NPM) 提供數十萬個第三方套件，是最佳的依賴解決方案也可以用來自動化大部分構建工具鏈。
- 它是可移植的，能夠在 Windows, OS x, Linux, Solaris, FreeBSD, OpenBSD, WebOS 和 NonStop OS 上執行。許多 web 主機提供方也支援使用 Node，通常會提供特定的基礎設施和文件
- 擁有非常活耀的第三方生態系統和開發者社群，許多人樂意提供幫助

你可以只用 Node 的 HTTP 模組創造一個簡單的 web 伺服器來回應任何請求，如下所示。此教學不會告訴建議的檔案名稱或如何執行該檔案 ;-)

這將創造一個伺服器並會監聽`http://127.0.0.1:8000/`上任何種類的 HTTP 請求，當接收到任何請求時回傳一個「Hello World」的純文字回應。

```js
// 載入 HTTP 模組
var http = require("http");

// 創建 HTTP 伺服器並監聽8000 port
http
  .createServer(function (request, response) {
    // Set the response HTTP header with HTTP status and Content type
    response.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response body "Hello World"
    response.end("Hello World\n");
  })
  .listen(8000);

// Print URL for accessing server
console.log("Server running at http://127.0.0.1:8000/");
```

Node 並不原生支持其他常見的 web 開發任務，如果你想為不同的 HTTP 方法(例如：`GET`, `POST`, `DELETE`等)增加特定的處理、替不同的 URL 路徑提供靜態檔案、使用樣板或動態性的產生 response，你需要自己完成相關的程式**或者是**避免重新造輪子 - 使用 web 框架！

[Express](https://expressjs.com/) 是最受歡迎的 Node web 框架，還是其他許多流行的[Node web 框架](https://expressjs.com/en/resources/frameworks.html)的底層庫，它提供：

- 替不同 HTTP Method、不同 URL 路徑的 requests 編寫不同的處理方法
- 透過整合「畫面」的渲染引擎來達到插入資料到樣板中產生 response
- 設定常見的 web 應用設定，例如：連線用的 port 和產生 response 的樣板位置
- 在 request 的處理流程中增加額外的「中間層」進行處理

雖然 Express 本身非常簡單，但開發者們已經創造相容的中間層套件來解決大部份 web 開發的問題，這些套件能處理 cookies, sessions，登入，URL 參數，POST 資料，安全標頭等等，你能在[Express Middleware](http://expressjs.com/en/resources/middleware.html)中找到這些套件的列表（以及其他流行的第三方套件）

> [!NOTE]
> 這種靈活性是一把雙刃劍。有一些中間層套件能解決大部份的問題或需求，但使用正確的套件有時會是一個問題。也沒有「正確的方法」來創建應用，你在網路上找到的範例也並非都是最佳解或是只有開發上所需要做的一小部份。

## 歷史

2009 年 Node 在 Linux 平台上初次發佈. 2010 年 NPM 套件管利器發佈, 2012 年增加 Windows 的原生支援. 現在的 LTS 版本為 Node v8.11.2，最新版本為 Node v10.1.0。這只是它深厚歷史的一小片斷，欲知更多詳情請洽 [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History)。

2010 年 11 月 Express 初次發佈，現在的 API 版本為 4.16。你可以查閱[更新紀錄](https://expressjs.com/en/changelog/4x.html)來了解此版本做了甚麼更改或是從[GitHub](https://github.com/expressjs/express/blob/master/History.md)中了解詳細的歷史紀錄。

## Node/Express 有多流行?

對於 web 框架而言流行度很重要，這代表他會不會被繼續更新、文件、附加套件和技術支援方面有多少資源

現在沒有一個明確的指標來評斷伺服器端框架的流行度，雖然有 [Hot Frameworks](http://hotframeworks.com/)透過計算 GitHub 的專案數量和 StackOverflow 的問題來衡量流行度。更好的問題是，Node 和 Express 是否「夠流行」以避免成為不流行的平台。有沒有持續進步？需要時是否能得到幫助？能不能找到 Express 相關的工作？

從眾多使用 Express 的[公司](https://expressjs.com/en/resources/companies-using-express.html)、貢獻程式碼的人數和那些提供免費/收費支援的人員來看，是的！Express 是一個流行的框架。

## Is Express opinionated?

Web 框架通常自稱為 "opinionated" 或 "unopinionated".

Opinionated 指的是那些有「正確」方法解決特定問題的框架。在特定的需求上他們通常能快速開發，因為正確的方法通常易懂且有良好的文件，然而在面對其他問題時則會失去靈活性。這類型的框架通常傾向於提供較少的選擇和套件來解決問題。

反過來說 Unopinionated 框架，對於如何組合套件來解決問題尚有較少的限制，開發者可以更輕易的使用適當的套件來解決特定問題，儘管代價是你需要自己找到適合的套件。

Express 是 Unopinionated 框架，你可以在 request 處理流程中使用任何相容套件，使用單一或複數個檔案來建構應用，有時候甚至會覺得擁有太多選擇了。

## Express 的程式碼長怎樣?

傳統的資料驅動網站中，web 應用程式會等待來自瀏覽器(或其他客戶端)的 HTTP Request，接收到 Request 後根據 URL 和可能夾帶的`POST`/`GET`資料來決定需要回應什麼動作，根據需要可能對資料庫進行讀寫或執行滿足 Request 所需的其他任務。web 應用程式會回應 Response 給瀏覽器，通常是藉由插入檢所到的資料到 HTML 模板中動態產生 HTML 頁面讓瀏覽器顯示。

Express provides methods to specify what function is called for a particular HTTP verb (`GET`, `POST`, `SET`, etc.) and URL pattern ("Route"), and methods to specify what template ("view") engine is used, where template files are located, and what template to use to render a response. You can use Express middleware to add support for cookies, sessions, and users, getting `POST`/`GET` parameters, etc. You can use any database mechanism supported by Node (Express does not define any database-related behaviour).

The following sections explain some of the common things you'll see when working with _Express_ and _Node_ code.

### Helloworld Express

First lets consider the standard Express [Hello World](https://expressjs.com/en/starter/hello-world.html) example (we discuss each part of this below, and in the following sections).

> [!NOTE]
> If you have Node and Express already installed (or if you install them as shown in the [next article](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)), you can save this code in a text file called **app.js** and run it in a bash command prompt by calling:
>
> **`./node ./app.js`**

```js
var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
```

The first two lines `require()` (import) the express module and create an [Express application](https://expressjs.com/en/4x/api.html#app). This object, which is traditionally named `app`, has methods for routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, and modifying [application settings](https://expressjs.com/en/4x/api.html#app.settings.table) that control how the application behaves (e.g. the environment mode, whether route definitions are case sensitive, etc.)

The middle part of the code (the three lines starting with `app.get`) shows a _route definition_. The `app.get()` method specifies a callback function that will be invoked whenever there is an HTTP `GET` request with a path (`'/'`) relative to the site root. The callback function takes a request and a response object as arguments, and simply calls [`send()`](https://expressjs.com/en/4x/api.html#res.send) on the response to return the string "Hello World!"

The final block starts up the server on port '3000' and prints a log comment to the console. With the server running, you could go to `localhost:3000` in your browser to see the example response returned.

### Importing and creating modules

A module is a JavaScript library/file that you can import into other code using Node's `require()` function. _Express_ itself is a module, as are the middleware and database libraries that we use in our _Express_ applications.

The code below shows how we import a module by name, using the _Express_ framework as an example. First we invoke the `require()` function, specifying the name of the module as a string (`'express'`), and calling the returned object to create an [Express application](https://expressjs.com/en/4x/api.html#app). We can then access the properties and functions of the application object.

```js
var express = require("express");
var app = express();
```

You can also create your own modules that can be imported in the same way.

> [!NOTE]
> You will _want_ to create your own modules, because this allows you to organise your code into managable parts — a monolithic single-file application is hard to understand and maintain. Using modules also helps you manage your namespace, because only the variables you explicitly export are imported when you use a module.

To make objects available outside of a module you just need to assign them to the `exports` object. For example, the **square.js** module below is a file that exports `area()` and `perimeter()` methods:

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

We can import this module using `require()`, and then call the exported method(s) as shown:

```js
var square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension
console.log("The area of a square with a width of 4 is " + square.area(4));
```

> [!NOTE]
> You can also specify an absolute path to the module (or a name, as we did initially).

If you want to export a complete object in one assignment instead of building it one property at a time, assign it to `module.exports` as shown below (you can also do this to make the root of the exports object a constructor or other function):

```js
module.exports = {
  area: function (width) {
    return width * width;
  },

  perimeter: function (width) {
    return 4 * width;
  },
};
```

For a lot more information about modules see [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API docs).

### Using asynchronous APIs

JavaScript code frequently uses asynchronous rather than synchronous APIs for operations that may take some time to complete. A synchronous API is one in which each operation must complete before the next operation can start. For example, the following log functions are synchronous, and will print the text to the console in order (First, Second).

```js
console.log("First");
console.log("Second");
```

By contrast, an asynchronous API is one in which the API will start an operation and immediately return (before the operation is complete). Once the operation finishes, the API will use some mechanism to perform additional operations. For example, the code below will print out "Second, First" because even though `setTimeout()` method is called first, and returns immediately, the operation doesn't complete for several seconds.

```js
setTimeout(function () {
  console.log("First");
}, 3000);
console.log("Second");
```

Using non-blocking asynchronous APIs is even more important on Node than in the browser, because _Node_ is a single threaded event-driven execution environment. "single threaded" means that all requests to the server are run on the same thread (rather than being spawned off into separate processes). This model is extremely efficient in terms of speed and server resources, but it does mean that if any of your functions call synchronous methods that take a long time to complete, they will block not just the current request, but every other request being handled by your web application.

There are a number of ways for an asynchronous API to notify your application that it has completed. The most common way is to register a callback function when you invoke the asynchronous API, that will be called back when the operation completes. This is the approach used above.

> [!NOTE]
> Using callbacks can be quite "messy" if you have a sequence of dependent asynchronous operations that must be performed in order, because this results in multiple levels of nested callbacks. This problem is commonly known as "callback hell". This problem can be reduced by good coding practices (see <http://callbackhell.com/>), using a module like [async](https://www.npmjs.com/package/async), or even moving to ES6 features like [Promises](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise).

> [!NOTE]
> A common convention for Node and Express is to use error-first callbacks. In this convention the first value in your _callback functions_ is an error value, while subsequent arguments contain success data. There is a good explanation of why this approach is useful in this blog: [The Node.js Way - Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js) (fredkschott.com).

### Creating route handlers

In our _Hello World_ Express example (see above), we defined a (callback) route handler function for HTTP `GET` requests to the site root (`'/'`).

```js
app.get("/", function (req, res) {
  res.send("Hello World!");
});
```

The callback function takes a request and a response object as arguments. In this case the method simply calls [`send()`](https://expressjs.com/en/4x/api.html#res.send) on the response to return the string "Hello World!" There are a [number of other response methods](https://expressjs.com/en/guide/routing.html#response-methods) for ending the request/response cycle, for example you could call [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) to send a JSON response or [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile) to send a file.

> [!NOTE]
> You can use any argument names you like in the callback functions; when the callback is invoked the first argument will always be the request and the second will always be the response. It makes sense to name them such that you can identify the object you're working with in the body of the callback.

The _Express application_ object also provides methods to define route handlers for all the other HTTP verbs, which are mostly used in exactly the same way: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, and `connect()`.

There is a special routing method, `app.all()`, which will be called in response to any HTTP method. This is used for loading middleware functions at a particular path for all request methods. The following example (from the Express documentation) shows a handler that will be executed for requests to `/secret` irrespective of the HTTP verb used (provided it is supported by the [http module](https://nodejs.org/api/http.html#http_http_methods)).

```js
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section ...");
  next(); // pass control to the next handler
});
```

Routes allow you to match particular patterns of characters in a URL, and extract some values from the URL and pass them as parameters to the route handler (as attributes of the request object passed as a parameter).

Often it is useful to group route handlers for a particular part of a site together and access them using a common route-prefix (e.g. a site with a Wiki might have all wiki-related routes in one file and have them accessed with a route prefix of _/wiki/_). In _Express_ this is achieved by using the [`express.Router`](http://expressjs.com/en/guide/routing.html#express-router) object. For example, we can create our wiki route in a module named **wiki.js**, and then export the `Router` object, as shown below:

```js
// wiki.js - Wiki route module

var express = require("express");
var router = express.Router();

// Home page route
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;
```

> [!NOTE]
> Adding routes to the `Router` object is just like adding routes to the `app` object (as shown previously).

To use the router in our main app file we would then `require()` the route module (**wiki.js**), then call `use()` on the _Express_ application to add the Router to the middleware handling path. The two routes will then be accessible from `/wiki/` and `/wiki/about/`.

```js
var wiki = require("./wiki.js");
// ...
app.use("/wiki", wiki);
```

We'll show you a lot more about working with routes, and in particular about using the `Router`, later on in the linked section [Routes and controllers](/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes).

### Using middleware

Middleware is used extensively in Express apps, for tasks from serving static files to error handling, to compressing HTTP responses. Whereas route functions end the HTTP request-response cycle by returning some response to the HTTP client, middleware functions _typically_ perform some operation on the request or response and then call the next function in the "stack", which might be more middleware or a route handler. The order in which middleware is called is up to the app developer.

> [!NOTE]
> The middleware can perform any operation, execute any code, make changes to the request and response object, and it can _also end the request-response cycle_. If it does not end the cycle then it must call `next()` to pass control to the next middleware function (or the request will be left hanging).

Most apps will use _third-party_ middleware in order to simplify common web development tasks like working with cookies, sessions, user authentication, accessing request `POST` and JSON data, logging, etc. You can find a [list of middleware packages maintained by the Express team](http://expressjs.com/en/resources/middleware.html) (which also includes other popular 3rd party packages). Other Express packages are available on the NPM package manager.

To use third party middleware you first need to install it into your app using NPM. For example, to install the [morgan](http://expressjs.com/en/resources/middleware/morgan.html) HTTP request logger middleware, you'd do this:

```bash
npm install morgan
```

You could then call `use()` on the _Express application object_ to add the middleware to the stack:

```js
var express = require('express');
var logger = require('morgan');
var app = express();
app.use(logger('dev'));
...
```

> [!NOTE]
> Middleware and routing functions are called in the order that they are declared. For some middleware the order is important (for example if session middleware depends on cookie middleware, then the cookie handler must be added first). It is almost always the case that middleware is called before setting routes, or your route handlers will not have access to functionality added by your middleware.

You can write your own middleware functions, and you are likely to have to do so (if only to create error handling code). The **only** difference between a middleware function and a route handler callback is that middleware functions have a third argument `next`, which middleware functions are expected to call if they are not that which completes the request cycle (when the middleware function is called, this contains the _next_ function that must be called).

You can add a middleware function to the processing chain with either `app.use()` or `app.add()`, depending on whether you want to apply the middleware to all responses or to responses with a particular HTTP verb (`GET`, `POST`, etc). You specify routes the same in both cases, though the route is optional when calling **app.use()**.

The example below shows how you can add the middleware function using both methods, and with/without a route.

```js
var express = require("express");
var app = express();

// An example middleware function
var a_middleware_function = function (req, res, next) {
  // ... perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
};

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use("/someroute", a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get("/", a_middleware_function);

app.listen(3000);
```

> [!NOTE]
> Above we declare the middleware function separately and then set it as the callback. In our previous route handler function we declared the callback function when it was used. In JavaScript, either approach is valid.

The Express documentation has a lot more excellent documentation about [using](https://expressjs.com/en/guide/using-middleware.html) and [writing](http://expressjs.com/en/guide/writing-middleware.html) Express middleware.

### Serving static files

You can use the [express.static](http://expressjs.com/en/4x/api.html#express.static) middleware to serve static files, including your images, CSS and JavaScript (`static()` is the only middleware function that is actually **part** of _Express_). For example, you would use the line below to serve images, CSS files, and JavaScript files from a directory named '**public'** at the same level as where you call node:

```js
app.use(express.static("public"));
```

Any files in the public directory are served by adding their filename (_relative_ to the base "public" directory) to the base URL. So for example:

```plain
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

You can call `static()` multiple times to serve multiple directories. If a file cannot be found by one middleware function then it will simply be passed on to the subsequent middleware (the order that middleware is called is based on your declaration order).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

You can also create a virtual prefix for your static URLs, rather than having the files added to the base URL. For example, here we [specify a mount path](http://expressjs.com/en/4x/api.html#app.use) so that the files are loaded with the prefix "/media":

```js
app.use("/media", express.static("public"));
```

Now, you can load the files that are in the `public` directory from the `/media` path prefix.

```plain
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

For more information, see [Serving static files in Express](<Serving static files in Express>).

### Handling errors

Errors are handled by one or more special middleware functions that have four arguments, instead of the usual three: `(err, req, res, next)`. For example:

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

These can return any content required, but must be called after all other `app.use()` and routes calls so that they are the last middleware in the request handling process!

Express comes with a built-in error handler, which takes care of any remaining errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack. If you pass an error to `next()` and you do not handle it in an error handler, it will be handled by the built-in error handler; the error will be written to the client with the stack trace.

> [!NOTE]
> The stack trace is not included in the production environment. To run it in production mode you need to set the the environment variable `NODE_ENV` to '`production'`.

> [!NOTE]
> HTTP404 and other "error" status codes are not treated as errors. If you want to handle these, you can add a middleware function to do so. For more information see the [FAQ](http://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

For more information see [Error handling](http://expressjs.com/en/guide/error-handling.html) (Express docs).

### Using databases

_Express_ apps can use any database mechanism supported by _Node_ (_Express_ itself doesn't define any specific additional behaviour/requirements for database management). There are many options, including PostgreSQL, MySQL, Redis, SQLite, MongoDB, etc.

In order to use these you have to first install the database driver using NPM. For example, to install the driver for the popular NoSQL MongoDB you would use the command:

```bash
npm install mongodb
```

The database itself can be installed locally or on a cloud server. In your Express code you require the driver, connect to the database, and then perform create, read, update, and delete (CRUD) operations. The example below (from the Express documentation) shows how you can find "mammal" records using MongoDB.

```js
//this works with older versions of  mongodb version ~ 2.2.33
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
  if (err) throw err;

  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err;

    console.log(result);
  });
});


//for mongodb version 3.0 and up
let MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/animals', function(err, client){
   if(err) throw err;

   let db = client.db('animals');
   db.collection('mammals').find().toArray(function(err, result){
     if(err) throw err;
     console.log(result);
     client.close();
   });
}
```

Another popular approach is to access your database indirectly, via an Object Relational Mapper ("ORM"). In this approach you define your data as "objects" or "models" and the ORM maps these through to the underlying database format. This approach has the benefit that as a developer you can continue to think in terms of JavaScript objects rather than database semantics, and that there is an obvious place to perform validation and checking of incoming data. We'll talk more about databases in a later article.

For more information see [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express docs).

### Rendering data (views)

Template engines (referred to as "view engines" by _Express_) allow you to specify the _structure_ of an output document in a template, using placeholders for data that will be filled in when a page is generated. Templates are often used to create HTML, but can also create other types of documents. Express has support for [a number of template engines](https://github.com/expressjs/express/wiki#template-engines), and there is a useful comparison of the more popular engines here: [Comparing JavaScript Templating Engines: Jade, Mustache, Dust and More](https://strongloop.com/strongblog/compare-javascript-templates-jade-mustache-dust/).

In your application settings code you set the template engine to use and the location where Express should look for templates using the 'views' and 'view engines' settings, as shown below (you will also have to install the package containing your template library too!)

```js
var express = require("express");
var app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

The appearance of the template will depend on what engine you use. Assuming that you have a template file named "index.\<template_extension>" that contains placeholders for data variables named 'title' and "message", you would call [`Response.render()`](http://expressjs.com/en/4x/api.html#res.render) in a route handler function to create and send the HTML response:

```js
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

For more information see [Using template engines with Express](http://expressjs.com/en/guide/using-template-engines.html) (Express docs).

### File structure

Express makes no assumptions in terms of structure or what components you use. Routes, views, static files, and other application-specific logic can live in any number of files with any directory structure. While it is perfectly possible to have the whole _Express_ application in one file, typically it makes sense to split your application into files based on function (e.g. account management, blogs, discussion boards) and architectural problem domain (e.g. model, view or controller if you happen to be using an [MVC architecture](/zh-TW/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture)).

In a later topic we'll use the _Express Application Generator_, which creates a modular app skeleton that we can easily extend for creating web applications.

## 總結

恭喜，你已完成 Express / Node 之旅的第一步！你現在應該了解 Express 和 Node 的主要優點，以及 Express 應用程序的主要部分（路由，中間件，錯誤處理和模板代碼）。你還應該明白，Express 是一個不固執己見的框架，你將這些組件組合在一起的方式以及你使用的函式庫，在很大程度上取決於你！

當然，Express 是一個非常輕量級的 Web 應用程序框架，它的許多好處和潛力來自第三方函式庫和功能。我們將在以下文章中更詳細地介紹這些內容。在下一篇文章中，我們將介紹如何設置 Node 開發環境，以便你可以開始查看一些 Express 代碼。

## 參見

- [Venkat.R - Manage Multiple Node versions](https://medium.com/@ramsunvtech/manage-multiple-node-versions-e3245d5ede44)
- [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API docs)
- [Express](https://expressjs.com/) (home page)
- [Basic routing](http://expressjs.com/en/starter/basic-routing.html) (Express docs)
- [Routing guide](http://expressjs.com/en/guide/routing.html) (Express docs)
- [Using template engines with Express](http://expressjs.com/en/guide/using-template-engines.html) (Express docs)
- [Using middleware](https://expressjs.com/en/guide/using-middleware.html) (Express docs)
- [Writing middleware for use in Express apps](http://expressjs.com/en/guide/writing-middleware.html) (Express docs)
- [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express docs)
- [Serving static files in Express](http://expressjs.com/en/starter/static-files.html) (Express docs)
- [Error handling](http://expressjs.com/en/guide/error-handling.html) (Express docs)

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
