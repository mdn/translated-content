---
title: 使用 JSON
slug: Learn/JavaScript/Objects/JSON
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}

JavaScript 对象表示法（JSON）是用于将结构化数据表示为 JavaScript 对象的标准格式，通常用于在网站上表示和传输数据（例如从服务器向客户端发送一些数据，因此可以将其显示在网页上）。您会经常遇到它，所以在本文中，我们向您提供使用 JavaScript 处理 JSON 的所有工作，包括访问 JSON 对象中的数据项并编写自己的 JSON。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        计算机基础知识，HTML 和 CSS 基础 (see
        <a href="/zh-CN/docs/Learn/JavaScript/First_steps">First steps</a> and
        <a href="/zh-CN/docs/Learn/JavaScript/Building_blocks"
          >Building blocks</a
        >) 和 JS 面向对象基础 (see
        <a href="/zh-CN/docs/Learn/JavaScript/Object-oriented/Introduction"
          >Introduction to objects</a
        >)。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>理解 JSON 的数据储存工作原理，创建您的 JSON 对象。</td>
    </tr>
  </tbody>
</table>

## 什么是 JSON?

{{glossary("JSON")}} 是一种按照 JavaScript 对象语法的数据格式，这是 [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford) 推广的。虽然它是基于 JavaScript 语法，但它独立于 JavaScript，这也是为什么许多程序环境能够读取（解读）和生成 JSON。

JSON 可以作为一个对象或者字符串存在，前者用于解读 JSON 中的数据，后者用于通过网络传输 JSON 数据。这不是一个大事件——JavaScript 提供一个全局的 可访问的 [JSON](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON) 对象来对这两种数据进行转换。

一个 JSON 对象可以被储存在它自己的文件中，这基本上就是一个文本文件，扩展名为 `.json`，还有 {{glossary("MIME type")}} 用于 `application/json`.

### JSON 结构

我们已经可以推测出 JSON 对象就是基于 JavaScript 对象，而且这几乎是正确的。您可以把 JavaScript 对象原原本本的写入 JSON 数据——字符串，数字，数组，布尔还有其他的字面值对象。这允许您构造出一个对象树，如下：

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

如果我们要加载对象进入 JavaScript 程序，以保存为一个名为 `superHeroes` 对象为例，我们使用 . 或 \[] 访问对象内的数据（关于。和 \[] 概念，见 [对象基础](/zh-CN/docs/Learn/JavaScript/Objects/Basics) ）。如：

```js
superHeroes.hometown;
superHeroes["active"];
```

为了访问对象中的对象，您只需简单地链式访问（通过属性名和数组索引）。例如，访问 superHeroes 对象中的 members 数组对象的第二个元素的 powers 数组对象的第三个元素，您可以这样做：

```js
superHeroes["members"][1]["powers"][2];
```

1. 首先我们有变量名 `superHeroes`，储存对象。
2. 在对象中我们想访问 `members` 属性，所以我们使用 `["members"]`。
3. `members` 包含有对象数组，我们想要访问第二个元素，所以我们使用`[1]`。
4. 在对象内，我们想访问 `powers` 属性，所以我们使用 `["powers"]`。
5. `powers` 属性是一个包含英雄技能的数组。我们想要第三个，所以我们使用`[2]`。

> **备注：** 我们已经在 [JSONText.html](http://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) 实例中让 JSON 对象进入变量中使其可访问（见[源代码](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)）。尝试加载它并且在您的浏览器上访问对象数据。

### JSON 数组

前面我们已经说过，”我们已经可以推测出 JSON 对象就是基于 JavaScript 对象，而且这几乎是正确的“——我们说几乎正确的原因是数组对象也是一种合法的 JSON 对象，例如：

```json
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

上面是完全合法的 JSON。您只需要通过数组索引就可以访问数组元素，如 `[0]["powers"][0]`。

### 其他注意事项

- JSON 是一种纯数据格式，它只包含属性，没有方法。
- JSON 要求在字符串和属性名称周围使用双引号。单引号无效。
- 甚至一个错位的逗号或分号就可以导致 JSON 文件出错。您应该小心的检查您想使用的数据 (虽然计算机生成的 JSON 很少出错，只要生成程序正常工作)。您可以通过像 [JSONLint](http://jsonlint.com/) 的应用程序来检验 JSON。
- JSON 可以将任何标准合法的 JSON 数据格式化保存，不只是数组和对象。比如，一个单一的字符串或者数字可以是合法的 JSON 对象。虽然不是特别有用处……
- 与 JavaScript 代码中对象属性可以不加引号不同，JSON 中只有带引号的字符串可以用作属性。

## 主动学习 : 一个 JSON 示例

好了，让我们通过运行这个示例来展示我们如何利用 JSON 数据。

### 开始吧

首先，拷贝我们的 [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) 和 [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) 文件。后者包含了用于页面的简单的 CSS，前者包含了简单的 HTML body。

```html
<header></header>

<section></section>
```

添加 `<script>`元素来包含我们的 JavaScript 代码。当前它只有两行，获得了`<header>`和`<section>`的引用，保存在变量中。

```js
var header = document.querySelector("header");
var section = document.querySelector("section");
```

我们已经把 JSON 数据放在了 GitHub 上面：<https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json>

我们准备把它加载到我们的页面中，然后使用漂亮的 DOM 操作来展示它，就像这样：

![](json-superheroes.png)

### 加载我们的 JSON

为了载入 JSON 到页面中，我们将使用 一个名为`XMLHTTPRequest`的 API（常称为 XHR）。这是一个非常有用的 JavaScript 对象，使我们能够通过代码来向服务器请求资源文件 (如：图片，文本，JSON，甚至 HTML 片段)，意味着我们可以更新小段内容而不用重新加载整个页面。这将有更多响应页面，听起来让人兴奋，但是这部分超出我们本部分的文章，所以就不多详述了。

1. 首先，我们将保存一个即将访问的 URL 作为变量。在您的 JavaScript 代码的底部添加下面的代码：

   ```js
   var requestURL =
     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
   ```

2. 为了创建一个 HTTP 请求，我们需要创建一个 HTTP 请求对象，通过 new 构造函数的形式。在您最下面的代码中写入：

   ```js
   var request = new XMLHttpRequest();
   ```

3. 现在我们需要使用 [`open()`](/zh-CN/docs/Web/API/XMLHttpRequest/open) 函数打开一个新的请求，添加如下代码：

   ```js
   request.open("GET", requestURL);
   ```

   这个函数至少含有两个参数，其他的是可选参数。对于示例我们只需要两个强制参数

   - HTTP 方法，网络连接时使用。这个示例中 [`GET`](/zh-CN/docs/Web/HTTP/Methods/GET) 就可以了，因为我们只要获得简单的数据。
   - URL，用于指向请求的地址。我们使用之前保存的变量。

4. 接下来，添加，两行代码，我们设定 [`responseType`](/zh-CN/docs/Web/API/XMLHttpRequest/responseType) 为 JSON，所以服务器将知道我们想要返回一个 JSON 对象，然后发送请求 :

   ```js
   request.responseType = "json";
   request.send();
   ```

5. 最后一点内容涉及相应来自服务器的返回数据，然后处理它，添加如下代码在您先前的代码下方：

   ```js
   request.onload = function () {
     var superHeroes = request.response;
     populateHeader(superHeroes);
     showHeroes(superHeroes);
   };
   ```

这儿我们保存了相应我们请求的数据 (访问 [`response`](/zh-CN/docs/Web/API/XMLHttpRequest/response) 属性) 于变量 `superHeroes` ;这个变量现在含有 JSON！我们现在把`superHeroes`传给两个函数，第一个函数将会用正确的数据填充`<header>`，同时第二个函数将创建一个信息卡片，然后把它插入`<section>`中。

我们把代码包在事件处理函数中，当请求对象 `load` 事件触发时执行代码 (见 {{domxref("XMLHttpRequest.load_event", "onload")}})，这是因为请求对象 `load` 事件只有在请求成功时触发；这种方式可以保证事件触发时 `request.response` 是绝对可以访问的。

### 定位 header

现在我们已经获得我们的 JSON 数据，让我们利用它来写两个我们使用的函数。首先，添加下面的代码于之前的代码下方：

```js
function populateHeader(jsonObj) {
  var myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["squadName"];
  header.appendChild(myH1);

  var myPara = document.createElement("p");
  myPara.textContent =
    "Hometown: " + jsonObj["homeTown"] + " // Formed: " + jsonObj["formed"];
  header.appendChild(myPara);
}
```

我们称参数为 `jsonObj`，那也是为什么我们要在其中调用 JSON 对象。这儿我们首先使用 `createElement()` 创建了一个 `<h1>` 节点，将它的 [`textContent`](/zh-CN/docs/Web/API/Node/textContent) 设为 JSON 对象的 `squadName` 属性，然后通过 `appendChild()` 把它加入 `<header>`中。然后我们对段落做了相同的一件事情：创建，设置内容，追加到 `<header>`。唯一的不同在于它的内容设为一个与 JSON 内属性 `homeTown` 和`formed`相关联的字符串。

### 创建英雄信息卡片

接下来，添加如下的函数到脚本代码底部，这个函数创建和展示了`superhero cards`：

```js
function showHeroes(jsonObj) {
  var heroes = jsonObj["members"];

  for (i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement("article");
    var myH2 = document.createElement("h2");
    var myPara1 = document.createElement("p");
    var myPara2 = document.createElement("p");
    var myPara3 = document.createElement("p");
    var myList = document.createElement("ul");

    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers:";

    var superPowers = heroes[i].powers;
    for (j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
```

首先，我们保存了 JSON 的 `members` 属性作为一个变量。这个数组含有多个带有英雄信息的对象。

接下来，我们使用一个循环来，遍历每个元素。对于每一个元素，我们：

1. 创建几个元素：一个 `<article>`,一个 `<h2>`, 三个 `<p>`s, 和一个 `<ul>`。
2. 设置 `<h2>` 为当前英雄的 `name`。
3. 使用他们的`secretIdentity`, `age`, "Superpowers:" 介绍信息列表 填充三个段落来。
4. 保存 `powers` 属性于另一个变量 `superPowers`，包含英雄的`superpowers`列表。
5. 使用另一个循环来遍历当前的英雄的 `superpowers` ，对于每一个元素我们创建`<li>`元素，把`superpower`放进去，然后使用`appendChild()`把 `listItem` 放入`<ul>` 元素中。
6. 最后一件事情是追加 `<h2>`, `<p>`, 还有 `<ul>` 进入 `<article>` (`myArticle`)。然后将 `<article>` 追加到 `<section>`。追加的顺序很重要，因为他们将被展示在 HTML 中。

> **备注：** 如有疑难，试试引用我们的 [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) 代码 (也可见 [running live](http://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html) )。

> **备注：** 如果您对访问 JSON 对象的 点/括号标记 有困扰。获得文件 [superheroes.json](http://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) 并在您的编辑器中打开参考我们的 JS 代码将会有帮助。您还应该参考我们的 [JavaScript object basics](/zh-CN/docs/Learn/JavaScript/Objects/Basics)文章，了解关于点和括号符号的更多信息。

## 对象和文本间的转换

上述示例就访问 JSON 而言是简单的，因为我们设置了 XHR 来访问 JSON 格式数据：

```js
request.responseType = "json";
```

但是有时候我们没有那么幸运，我们接收到一些 字符串作为 JSON 数据，然后我们想要将它转换为对象。当我们想要发送 JSON 数据作为信息，我们将需要转换它为字符串，我们经常需要正确的转换数据，幸运的是，这两个问题在 web 环境中是那么普遍以至于浏览器拥有一个内建的 JSON，包含以下两个方法。

- [`parse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): 以文本字符串形式接受 JSON 对象作为参数，并返回相应的对象。
- [`stringify()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): 接收一个对象作为参数，返回一个对应的 JSON 字符串。

您可以看看我们 [heroes-finished-json-parse.html](http://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) 示例的第一个操作 (见 [source code](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)) ，除了返回的是 text，这做了一件与我们之前一模一样的事情，然后使用 `parse()` 来将他转换成为 JavaScript 对象。关键片段如下：

```js
request.open("GET", requestURL);
request.responseType = "text"; // now we're getting a string!
request.send();

request.onload = function () {
  var superHeroesText = request.response; // get the string from the response
  var superHeroes = JSON.parse(superHeroesText); // convert it to an object
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};
```

正如您所想，`stringify()` 做相反的事情。尝试将下面的代码输入您的浏览器 JS 控制台来看看会发生什么：

```js
var myJSON = { name: "Chris", age: "38" };
myJSON;
var myString = JSON.stringify(myJSON);
myString;
```

这儿我们创建了一个 JavaScript 对象，然后检查了它包含了什么，然后用`stringify()` 将它转换成 JSON 字符串，最后保存返回值作为变量。然后再一次检查。

## 总结

在这个文章中，我们给了您一个简单的示例来在自己的程序中使用 JSON，包括创建和处理 JSON，还有如何访问 JSON 内的数据。在下一篇文章中我们将开始关注 JS 中的面向对象内容。

## 参见

- [JSON object reference page](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [XMLHTTPRequest object reference page](/zh-CN/docs/Web/API/XMLHttpRequest)
- [Using XMLHTTPRequest](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTTP request methods](/zh-CN/docs/Web/HTTP/Methods)

{{PreviousMenuNext("Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}
