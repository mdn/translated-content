---
title: "Express 教學 4: 路由與控制器"
slug: Learn/Server-side/Express_Nodejs/routes
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs")}}

在本教程中，我們將為最終在 本地圖書館 網站中需要的所有資源端點，搭配 "空殼" 處理函式來配置路由 (URL handling code) 。完成後，我們的路由處理源碼將會有模組化結構，在接下來的文章中，我們可以用真實的處理函式加以擴充。我們也會對如何使用 Express 創建模組化路由，有更好的理解。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先備知識:</th>
      <td>
        閱讀
        <a href="/zh-TW/docs/Learn/Server-side/Express_Nodejs/Introduction"
          >Express/Node 介紹</a
        >。 完成先前教學主題 (包含
        <a href="/zh-TW/docs/Learn/Server-side/Express_Nodejs/mongoose"
          >Express 教學 3: 使用資料庫 (Mongoose)</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>理解如何創建簡易路由配置。我們所有的URL端點。</td>
    </tr>
  </tbody>
</table>

## 概覽

在[上一篇教程文章](/zh-CN/docs/Learn/Server-side/Express_Nodejs/mongoose)中，我們定義了 Mongoose 模型，以與數據庫互動，並使用（獨立）腳本創建一些初始庫記錄。現在我們可以編寫代碼，向用戶展示這些信息。我們需要做的第一件事，是確定我們希望能夠在頁面中顯示哪些信息，然後定義適當的 URL，以返回這些資源。然後我們將需要創建路由（URL 處理程序）和視圖（模板）來顯示這些頁面。

下圖是作為處理 HTTP 請求/響應時，需要實現的主要數據流和事項的提醒。除了視圖和路線之外，圖表還顯示「控制器」 — 實際處理請求的函數，那些與路由請求分開的代碼。

由於我們已經創建了模型，我們需要創建的主要內容是：

- 「路由」將支持的請求（以及請求 URL 中編碼的任何信息）轉發到適當的控制器功能。
- 控制器用於從模型中獲取請求的數據，創建一個顯示數據的 HTML 頁面，並將其返回給用戶，以在瀏覽器中查看。
- 視圖（模板）則由控制器用來呈現數據。

![](mvc_express.png)

最終，我們可能會有頁面顯示書籍，流派，作者和書籍的列表和詳細信息，以及用於創建，更新和刪除記錄的頁面。對一篇文章來說，這是很多的內容。因此，本文的大部分內容，都將集中在設置我們的路由和控制器，以返回「虛擬」內容。我們將在後續文章中，擴展控制器方法，以使用模型數據。

下面的第一部分，提供了關於如何使用[Express Router](http://expressjs.com/en/4x/api.html#router)中間件的簡要「入門」。當我們設置 LocalLibrary 路由時，我們將在後面的章節中使用這些知識。

## 路由入門

路由是 Express 代碼的一部分，它將 HTTP 動詞（`GET`, `POST`, `PUT`, `DELETE`等），URL 路徑/模式和被調用來處理該模式的函數，相關聯起來。

有幾種方法可以創建路線。本教程將使用[`express.Router`](http://expressjs.com/en/guide/routing.html#express-router)中間件，因為它允許我們將站點的特定部分的路由處理程序組合在一起，並使用通用的路由前綴訪問它們。我們會將所有與圖書館有關的路由，保存在「目錄」模塊中，如果我們添加路由來處理用戶帳戶或其他功能，我們可以將它們分開保存。

> **備註：** 我們在[Express 簡介>創建路由處理程序](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Introduction#Creating_route_handlers)中，簡要討論了 Express 應用程序路由。除了為模塊化提供更好的支持之外（如下面第一小節所述），使用 Router 非常類似於直接在 Express 應用程序對像上定義路由。

本節的其餘部分，概述瞭如何使用路由器`Router`來定義路由。

### 定義和使用單獨的路由模塊

下面的代碼提供了一個具體示例，說明我們如何創建路由模塊，然後在 Express 應用程序中使用它。首先，我們在一個名為**wiki.js**的模塊中創建一個 wiki 的路由。代碼首先導入 Express 應用程序對象，使用它獲取一個

`Router`對象，然後使用`get()`方法向其添加一對路由。所有模塊的最後一個導出路由器`Router`對象。

```js
// wiki.js - Wiki route module.

var express = require("express");
var router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;
```

> **備註：** 上面我們直接在路由器函數中定義路由處理程序回調。在 LocalLibrary 中，我們將在一個單獨的控制器模塊中，定義這些回調。

要在主應用程序文件中使用路由器模塊，我們首先`require()`路由模塊（**wiki.js**）。然後，我們在 Express 應用程序上調用`use()`，將路由器添加到中間件處理路徑，並指定一個'wiki'的 URL 路徑。

```js
var wiki = require("./wiki.js");
// ...
app.use("/wiki", wiki);
```

然後可以從`/wiki/`和`/wiki/about/`，訪問我們的 wiki 路由模塊中定義的兩個路由。

### 路由函數

我們上面的模塊，定義了幾個典型的路由功能。使用`Router.get()`方法定義「about」路由（在下面），該方法僅響應 HTTP GET 請求。此方法的第一個參數是 URL 路徑，而第二個參數是一個回調函數，如果收到帶有路徑的 HTTP GET 請求，將會調用該函數。

```js
router.get("/about", function (req, res) {
  res.send("About this wiki");
});
```

回調函數接受三個參數（通常如下所示命名：`req`, `res`, `next`），它將包含 HTTP 請求對象，HTTP 響應，以及中間件鏈中的下一個函數。

> **備註：** 路由器功能是[Express 中間件](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Introduction#Using_middleware)，這意味著它們必須完成（響應）請求或調用鏈中的下一個功能`next`。在上面的例子中，我們使用`send()`完成了請求，所以下一個參數`next`沒有被使用（我們選擇不指定它）。
>
> 上面的路由器函數只需要一次回調，但您可以根據需要指定任意數量的回調參數，或一組回調函數。每個函數都是中間件鏈的一部分，並且將按照添加到鏈中的順序調用（除非前面的函數完成請求）。

這裡的回調函數，在響應中調用[`send()`](https://expressjs.com/en/4x/api.html#res.send)，當我們收到帶有路徑（' `/about'`）的 GET 請求時，返回字符串「About this wiki」。有[許多其他響應方法](https://expressjs.com/en/guide/routing.html#response-methods)，可以結束請求/響應週期。例如，您可以調用[`res.json()`](https://expressjs.com/en/4x/api.html#res.json)，來發送 JSON 響應，或調用[`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile)來發送文件。構建庫時，我們最常使用的響應方法是[render()](https://expressjs.com/en/4x/api.html#res.render)，它使用模板和數據創建並返回 HTML 文件—我們將在後面的文章中，進一步討論這個問題！

### HTTP 動詞

上面的示例路由使用`Router.get()`方法，響應具有特定路徑的 HTTP GET 請求。路由器`Router`還為所有其他 HTTP 動詞提供路由方法，這些方法多數以完全相同的方式使用：`post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`,和`connect()`。

例如，下面的代碼就像上一個`/about`路由一樣，但只響應 HTTP POST 請求。

```js
router.post("/about", function (req, res) {
  res.send("About this wiki");
});
```

### 路由路徑

路由路徑定義可以進行請求的端點。我們到目前為止看到的例子，都是字符串，並且完全按照字符串的寫法使用：'/'，'/ about'，'/ book'，'/any-random.path'。

路由路徑也可以是字符串模式。字符串模式使用正則表達式語法的子集，來定義將匹配的端點模式。下面列出了子集（請注意，連字符（`-`）和點（`.`）由字符串路徑字面解釋）：

- ? :端點在?號前面的那個字符，必須為 0 個或 1 個。例如。`'/ab?cd'`的路徑路徑將匹配端點`acd` 或`abcd`。
- \+ :端點在+號前面的那個字符，必須為 1 個或多個。例如，`'/ab+cd'`的路徑路徑將與端點`abcd`，`abbcd`，`abbbcd`等匹配。
- \* :端點在放置\*字符的地方，可以代換為任意字符串。例如。`'ab\*cd'`的路由路徑，將匹配端點`abcd`, `abXcd`, `abSOMErandomTEXTcd`等。
- () :將一組字符進行匹配，以執行上面三個操作。例如。`'/ab(cd)?e'`，表示以？號對（cd）進行匹配-它會匹配`abe`和`abcde`。（譯註：即（cd）必須為 0 個或 1 個。若為 0，匹配`abe`。若為 1，匹配`abcde`）

路由路徑也可以是[JavaScript 正則表達式](/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)。例如，下面的路由路徑將與鯰魚`catfish` 和角鯊魚`dogfish`相匹配，但不包括鯰魚`catflap`、鯰魚頭`catfishhead`等。請注意，正則表達式的路徑使用正則表達式語法（它不像以前那樣，是帶引號的字符串）。

```js
app.get(/.*fish$/, function (req, res) {
  ...
})
```

> **備註：** LocalLibrary 的大部分路由，都只使用字符串，而不是字符串模式和正則表達式。我們還將使用下一節中討論的路由參數。

### 路由參數

路徑參數是命名的 URL 段，用於捕獲在 URL 中的位置指定的值。命名段以冒號為前綴，然後是名稱（例如。捕獲的值，使用參數名稱作為鍵，存在對像中（例如）。`/:your_parameter_name/` `req.params` `req.params.your_parameter_name`

例如，考慮一個編碼的 URL，其中包含有關用戶和書本的信息：`http://localhost:3000/users/34/books/8989`。我們可以使用`userId`和`bookId`路徑參數，提取如下所示的信息：

```plain
app.get('/users/:userId/books/:bookId', function (req, res) {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
})
```

路由參數的名稱，必須由「單詞字符」（AZ，az，0-9 和\_）組成。

> **備註：** URL */book/create*將與`/book/:bookId` 之類的路由匹配（它將提取要創建' `create`'的「bookId」值）。將使用與傳入 URL 匹配的第一個路由，因此，如果要單獨處理`/book/create`URL，則必須在`/book/:bookId`路由之前，先定義其路由處理程序。

這就是您開始使用路由所需的全部內容-如果需要，您可以在 Express 文檔中找到更多信息：[基本路由](http://expressjs.com/en/starter/basic-routing.html)和[路由指南](http://expressjs.com/en/guide/routing.html)。以下部分顯示了我們如何為 LocalLibrary 設置路由和控制器。

## 本地圖書館需要的路由

下面列出了我們最終需要用於頁面的 URL，其中 object 被替換為每個模型的名稱（book，bookinstance，genre，author），objects 是對象的複數，id 是默認情況下，為每個 Mongoose 模型實例指定的唯一實例字段（`_id`）。

- `catalog/` — 主頁/索引頁面。
- `catalog/<objects>/`—所有書本，書本實例，種類或作者的列表（例如/ `catalog/books/`, / `catalog/genres/`等）
- `catalog/<object>/<id>`—具有給定`_id`字段值的特定書本，書本實例，種類或作者的詳細信息頁面（例如`/catalog/book/584493c1f4887f06c0e67d37`）。
- `catalog/<object>/create`—用於創建新的書本，書本實例，種類或作者的表單（例如`/catalog/book/create`）。
- `catalog/<object>/<id>/update`—使用給定的`_id`字段值更新特定書本，書本實例，種類或作者的表單（例如`/catalog/book/584493c1f4887f06c0e67d37/update`）。
- `catalog/<object>/<id>/delete`—刪除具有給定`_id`字段值的特定書本，書本實例，種類或作者的表單（例如`/catalog/book/584493c1f4887f06c0e67d37/delete`）。

第一個主頁和列表頁面，不編碼任何其他信息。雖然返回的結果，將取決於模型類型和數據庫中的內容，但為了獲取信息所運行的查詢，將始終相同（類似地，用於創建對象的代碼將始終類似）。相反的，其他 URL 用於處理特定文檔/模型實例—這些將項目的標識編碼在 URL 中（如上面的`<id>`）。

我們將使用路徑參數，來提取編碼信息，並將其傳遞給路由處理程序（在稍後的文章中，我們將使用它來動態確定從數據庫獲取的信息）。通過對我們的 URL 中的信息進行編碼，我們只需要一個路由，用於特定類型的每個資源（例如，一個路由來處理每個書本項目的顯示）。

> **備註：** Express 允許您以任何方式構建 URL -您可以在 URL 正文中編碼信息，就像上面一樣，或使用 URL `GET`參數（例如`/book/?id=6`）。無論您使用哪種方法，URL 都應保持乾淨，合理且可讀（請在此處查看[W3C 建議](https://www.w3.org/Provider/Style/URI)）。

接下來，我們為所有上述 URL，創建路由處理程序回調函數和路由代碼。

## 創建路由-handler 回調函式

在我們定義路由之前，我們將首先創建它們將調用的所有虛擬/骨架回調函數。回調將存在 Books，BookInstances，Genres 和 Authors 的單獨「控制器」 模塊中（您可以使用任何文件/模塊結構，但這似乎是該項目的適當粒度）。

首先在項目根目錄（**/controllers**）中，為我們的控制器創建一個文件夾，然後創建單獨的控制器文件/模塊，來處理每個模型：

```plain
/express-locallibrary-tutorial  //the project root
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

### 作者控制器

打開 **/controllers/authorController.js** 文件，並複制以下代碼：

```js
var Author = require("../models/author");

// Display list of all Authors.
exports.author_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Author list");
};

// Display detail page for a specific Author.
exports.author_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Author detail: " + req.params.id);
};

// Display Author create form on GET.
exports.author_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// Handle Author create on POST.
exports.author_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author create POST");
};

// Display Author delete form on GET.
exports.author_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// Handle Author delete on POST.
exports.author_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// Display Author update form on GET.
exports.author_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Handle Author update on POST.
exports.author_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author update POST");
};
```

該模塊首先導入我們稍後將使用的模型，來訪問和更新我們的數據。然後它為我們希望處理的每個 URL，導出函數（創建，更新和刪除操作使用表單，因此還有其他方法，來處理表單發布請求——我們將在稍後的「表單文章」中討論這些方法） 。

所有函數都具有 Express 中間件函數的標準形式，如果方法沒有完成請求週期，則會調用請求，響應和 `next` 下一個函數的參數（在所有這些情況下，它都會執行！）。這些方法只返回一個字符串，表明尚未創建關聯的頁面。如果期望控制器函數接收路徑參數，則在消息字符串中，輸出這些參數（參見上面的 `req.params.id`）。

#### 書本實例控制器

打開 **/controllers/bookinstanceController.js** 文件，並將其複製到以下代碼中（它遵循與 `Author` 控制器模塊相同的模式）：

```js
var BookInstance = require("../models/bookinstance");

// Display list of all BookInstances.
exports.bookinstance_list = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance list");
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance detail: " + req.params.id);
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance create GET");
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance create POST");
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance delete GET");
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance delete POST");
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance update GET");
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance update POST");
};
```

#### 種類控制器

打開 **/controllers/genreController.js** 文件，並複制以下文本（這與 `Author` 和 `BookInstance` 文件的模式相同）：

```js
var Genre = require("../models/genre");

// Display list of all Genre.
exports.genre_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre list");
};

// Display detail page for a specific Genre.
exports.genre_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre detail: " + req.params.id);
};

// Display Genre create form on GET.
exports.genre_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre create GET");
};

// Handle Genre create on POST.
exports.genre_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre create POST");
};

// Display Genre delete form on GET.
exports.genre_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};

// Handle Genre delete on POST.
exports.genre_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};

// Display Genre update form on GET.
exports.genre_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

// Handle Genre update on POST.
exports.genre_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre update POST");
};
```

#### 書本控制器

打開 **/controllers/bookController.js** 文件，並複制以下代碼。它遵循與其他控制器模塊相同的模式，但另外還有一個 `index()` 函數，用於顯示站點歡迎頁面：

```js
var Book = require("../models/book");

exports.index = function (req, res) {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

// Display list of all books.
exports.book_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Book list");
};

// Display detail page for a specific book.
exports.book_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Book detail: " + req.params.id);
};

// Display book create form on GET.
exports.book_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book create GET");
};

// Handle book create on POST.
exports.book_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book create POST");
};

// Display book delete form on GET.
exports.book_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

// Handle book delete on POST.
exports.book_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

// Display book update form on GET.
exports.book_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book update GET");
};

// Handle book update on POST.
exports.book_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book update POST");
};
```

## 創建目錄路由模組

接下來，我們為 LocalLibrary 網站，創建所需全部 URL 的路由，這將調用我們在上一節中定義的控制器功能。

骨架網站已經有一個 **./routes** 文件夾，其中包含索引和用戶的路由。在此文件夾中，創建另一個路徑文件——**catalog.js**——如下圖所示。

```plain
/express-locallibrary-tutorial //the project root
  /routes
    index.js
    users.js
    catalog.js
```

打開 **/routes/catalog.js**，複製下面的代碼：

```js
var express = require("express");
var router = express.Router();

// Require controller modules.
var book_controller = require("../controllers/bookController");
var author_controller = require("../controllers/authorController");
var genre_controller = require("../controllers/genreController");
var book_instance_controller = require("../controllers/bookinstanceController");

/// BOOK ROUTES ///

// GET catalog home page.
router.get("/", book_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/book/create", book_controller.book_create_get);

// POST request for creating Book.
router.post("/book/create", book_controller.book_create_post);

// GET request to delete Book.
router.get("/book/:id/delete", book_controller.book_delete_get);

// POST request to delete Book.
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET request to update Book.
router.get("/book/:id/update", book_controller.book_update_get);

// POST request to update Book.
router.post("/book/:id/update", book_controller.book_update_post);

// GET request for one Book.
router.get("/book/:id", book_controller.book_detail);

// GET request for list of all Book items.
router.get("/books", book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get("/author/create", author_controller.author_create_get);

// POST request for creating Author.
router.post("/author/create", author_controller.author_create_post);

// GET request to delete Author.
router.get("/author/:id/delete", author_controller.author_delete_get);

// POST request to delete Author.
router.post("/author/:id/delete", author_controller.author_delete_post);

// GET request to update Author.
router.get("/author/:id/update", author_controller.author_update_get);

// POST request to update Author.
router.post("/author/:id/update", author_controller.author_update_post);

// GET request for one Author.
router.get("/author/:id", author_controller.author_detail);

// GET request for list of all Authors.
router.get("/authors", author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

//POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);

// GET request to delete Genre.
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request to update Genre.
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST request to update Genre.
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET request for one Genre.
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for list of all Genre.
router.get("/genres", genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_get,
);

// POST request for creating BookInstance.
router.post(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_post,
);

// GET request to delete BookInstance.
router.get(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_get,
);

// POST request to delete BookInstance.
router.post(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_post,
);

// GET request to update BookInstance.
router.get(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_get,
);

// POST request to update BookInstance.
router.post(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_post,
);

// GET request for one BookInstance.
router.get("/bookinstance/:id", book_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get("/bookinstances", book_instance_controller.bookinstance_list);

module.exports = router;
```

該模塊導入 Express，然後使用它來創建一個 `Router` 對象。路由都在路由器上設置完成，然後導出。

路由是使用路由器對像上的 `.get()` 或 `.post()` 方法定義的。所有路徑都是使用字符串定義的（我們不使用字符串模式或正則表達式）。作用於某些特定資源（如書籍）的路由，則使用路徑參數從 URL 中獲取對象標識 id。

處理程序函數，都是從我們在上一節中，創建的控制器模塊導入的。

### 更新 index 路由模組

我們已經設置了所有新路由，但我們仍然有一個到原始頁面的路由。讓我們將其重定向，到我們在路徑『/catalog』創建的新索引頁面。

打開 **/routes/index.js** 並使用下面的函數，替換現有路由。

```js
// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});
```

> **備註：** 這是我們第一次使用 [redirect()](https://expressjs.com/en/4x/api.html#res.redirect) 響應方法。這會重定向到指定的頁面，默認情況下會發送 HTTP 狀態代碼「302 Found」。你可以根據需要，更改返回的狀態代碼，並提供絕對路徑或相對路徑。

### 更新 app.js

最後一步，是將路由，添加到中間件鏈。我們在 `app.js` 這樣做。

打開 **app.js**，並要求其他路由下方的目錄路由（添加下面顯示的第三行，在其他兩個路由下面）：

```js
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site
```

接下來，將目錄路由，添加到其他路由下面的中間件堆棧（添加下面顯示的第三行，在其他兩行下面）：

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> **備註：** 我們已在路徑 `'/catalog'` 中添加了目錄模塊。它預先添加到目錄模塊中定義的所有路徑。例如，要訪問書本列表，URL 將為：`/catalog/books/`。

就是這樣。現在應該為我們最終在 LocalLibrary 網站上支持的所有 URL，啟用路由和框架功能。

### 測試路由

要測試路由，首先使用你通常的方法啟動網站。

- 預設方法

  ```bash
  // Windows
  SET DEBUG=express-locallibrary-tutorial:* & npm start

  // macOS or Linux
  DEBUG=express-locallibrary-tutorial:* npm start
  ```

- 如果你先前設置了 [nodemon](/zh-TW/docs/Learn/Server-side/Express_Nodejs/skeleton_website)，則可以使用：

  ```bash
  // Windows
  SET DEBUG=express-locallibrary-tutorial:* & npm run devstart

  // macOS or Linux
  DEBUG=express-locallibrary-tutorial:* npm run devstart
  ```

然後瀏覽一些上面的 LocalLibrary URL，並驗證您沒有收到錯誤頁面（HTTP 404）。為方便起見，下面列出了一小組網址：

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## 總結

我們現在為網站創建了所有的路由，在稍後的教程，我們可以將實作完成的代碼，填入到空殼控制器函式。以這樣的方式，我們學到了許多關於 Express 路由的基本信息，以及一些組織路由和控制器的方式。

下一篇文章，我們將使用視圖（模板）和存在模型裡的信息，為網站創建一個合適的歡迎頁面。

## 參閱

- [Basic routing](http://expressjs.com/en/starter/basic-routing.html) (Express docs)
- [Routing guide](http://expressjs.com/en/guide/routing.html) (Express docs)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs")}}
