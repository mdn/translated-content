---
title: 从服务器获取数据
slug: Learn/JavaScript/Client-side_web_APIs/Fetching_data
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

在现代网站和应用中另一个常见的任务是从服务端获取个别数据来更新部分网页而不用加载整个页面。这看起来是小细节却对网站性能和行为产生巨大的影响。所以我们将在这篇文章介绍概念和技术使它成为可能，例如：XMLHttpRequest 和 Fetch API.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先决条件：</th>
      <td>
        JavaScript 基础 (查看
        <a href="/zh-CN/docs/Learn/JavaScript/First_steps">第一步</a>,
        <a href="/zh-CN/docs/Learn/JavaScript/Building_blocks">基础要件</a>,
        <a href="/zh-CN/docs/Learn/JavaScript/Objects">JavaScript 对象</a>),
        和<a
          href="/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >客户端 API 基础</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学会如何从服务器获取数据并使用它更新网页内容。</td>
    </tr>
  </tbody>
</table>

## 这里有什么问题？

最初加载页面很简单 -- 你为网站发送一个请求到服务器，只要没有出错你将会获取资源并显示网页到你的电脑上。

![A basic representation of a web site architecture](https://mdn.mozillademos.org/files/6475/web-site-architechture@2x.png)

这个模型的问题是当你想更新网页的任何部分，例如显示一套新的产品或者加载一个新的页面，你需要再一次加载整个页面。这是非常浪费的并且导致了差的用户体验尤其是现在的页面越来越大且越来越复杂。

### Ajax 开始

这导致了创建允许网页请求小块数据（例如 [HTML](/zh-CN/docs/Web/HTML), {{glossary("XML")}}, [JSON](/zh-CN/docs/Learn/JavaScript/Objects/JSON), 或纯文本) 和 仅在需要时显示它们的技术，从而帮助解决上述问题。

这是通过使用诸如 {{domxref("XMLHttpRequest")}} 之类的 API 或者 — 最近以来的 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 来实现。这些技术允许网页直接处理对服务器上可用的特定资源的 [HTTP](/zh-CN/docs/Web/HTTP) 请求，并在显示之前根据需要对结果数据进行格式化。

> **备注：** 在早期，这种通用技术被称为 Asynchronous JavaScript and XML**（Ajax），** 因为它倾向于使用{{domxref("XMLHttpRequest")}} 来请求 XML 数据。但通常不是这种情况 (你更有可能使用 `XMLHttpRequest` 或 Fetch 来请求 JSON), 但结果仍然是一样的，术语“Ajax”仍然常用于描述这种技术。

![A simple modern architecture for web sites](https://mdn.mozillademos.org/files/6477/moderne-web-site-architechture@2x.png)

Ajax 模型包括使用 Web API 作为代理来更智能地请求数据，而不仅仅是让浏览器重新加载整个页面。让我们来思考这个意义：

1. 去你最喜欢的信息丰富的网站之一，如亚马逊，油管，CNN 等，并加载它。
2. 现在搜索一些东西，比如一个新产品。主要内容将会改变，但大部分周围的信息，如页眉，页脚，导航菜单等都将保持不变。

这是一件非常好的事情，因为：

- 页面更新速度更快，您不必等待页面刷新，这意味着该网站体验感觉更快，响应更快。
- 每次更新都会下载更少的数据，这意味着更少地浪费带宽。在宽带连接的桌面上这可能不是一个大问题，但是在移动设备和发展中国家没有无处不在的快速互联网服务是一个大问题。

为了进一步提高速度，有些网站还会在首次请求时将资产和数据存储在用户的计算机上，这意味着在后续访问中，他们将使用本地版本，而不是在首次加载页面时下载新副本。内容仅在更新后从服务器重新加载。

![A basic web app data flow architecture](https://mdn.mozillademos.org/files/6479/web-app-architecture@2x.png)

本文不会涉及这种存储技术。我们稍后会在模块中讨论它。

## 基本的 Ajax 请求

让我们看看使用{{domxref("XMLHttpRequest")}} 和 [Fetch](/zh-CN/docs/Web/API/Fetch_API)如何处理这样的请求。对于这些例子，我们将从几个不同的文本文件中请求数据，并使用它们来填充内容区域。

这一系列文件将作为我们的假数据库; 在真正的应用程序中，我们更可能使用服务器端语言（如 PHP，Python 或 Node）从数据库请求我们的数据。不过，我们要保持简单，并专注于客户端部分。

### XMLHttpRequest

`XMLHttpRequest`（通常缩写为 XHR）现在是一个相当古老的技术 - 它是在 20 世纪 90 年代后期由微软发明的，并且已经在相当长的时间内跨浏览器进行了标准化。

1. 为例子做些准备，将 [ajax-start.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/ajax-start.html) 和四个文本文件 — [verse1.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse3.txt), [verse4.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse4.txt) — 复制到你计算机上的一个新目录。在这个例子中，我们将通过 XHR 在下拉菜单中选择一首诗（您可能会认识 — "如果谷歌翻译可以翻译的话"）加载另一首诗。
2. 在 {{htmlelement("script")}} 的内部，添加下面的代码。将 {{htmlelement("select")}} 和 {{htmlelement("pre")}} 元素的引用存储到变量中，并定义一个 {{domxref("GlobalEventHandlers.onchange","onchange")}} 事件处理函数，可以在 select 的值改变时，将其值传递给 `updateDisplay()` 函数作为参数。

    ```js
    const verseChoose = document.querySelector('select');
    const poemDisplay = document.querySelector('pre');

    verseChoose.onchange = function() {
      const verse = verseChoose.value;
      updateDisplay(verse);
    };
    ```

3. 定义 `updateDisplay()` 函数。首先，将下面的代码块放在之前代码块的下面 - 这是函数的空壳：

    ```js
    function updateDisplay(verse) {

    }
    ```

4. 我们将通过构造一个 指向我们要加载的文本文件的相对 URL 来启动我们的函数，因为我们稍后需要它。任何时候 {{htmlelement("select")}} 元素的值都与所选的 {{htmlelement("option")}} 内的文本相同 (除非在值属性中指定了不同的值) — 例如 "Verse 1". 相应的诗歌文本文件是 "verse1.txt", 并与 HTML 文件位于同一目录中，因此只需要文件名即可。

    但是，Web 服务器往往是区分大小写的，文件名没有空格。要将“Verse 1”转换为“verse1.txt”，我们需要将 V 转换为小写，删除空格，并在末尾添加.txt。这可以通过 {{jsxref("String.replace", "replace()")}}, {{jsxref("String.toLowerCase", "toLowerCase()")}}, 和 简单的 [string concatenation](/zh-CN/docs/Learn/JavaScript/First_steps/Strings#Concatenating_strings) 来完成。在 `updateDisplay()` 函数中添加以下代码：

    ```js
    verse = verse.replace(" ", "");
    verse = verse.toLowerCase();
    let url = verse + '.txt';
    ```

5. 要开始创建 XHR 请求，您需要使用 {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}} 的构造函数创建一个新的请求对象。你可以把这个对象叫做你喜欢的任何东西，但是我们会把它叫做 `request` 来保持简单。在之前的代码中添加以下内容：

    ```js
    let request = new XMLHttpRequest();
    ```

6. 接下来，您需要使用 {{domxref("XMLHttpRequest.open","open()")}} 方法来指定用于从网络请求资源的 [HTTP request method](/zh-CN/docs/Web/HTTP/Methods) , 以及它的 URL 是什么。我们将在这里使用 [`GET`](/zh-CN/docs/Web/HTTP/Methods/GET) 方法，并将 URL 设置为我们的 `url` 变量。在你上面的代码中添加以下代码：

    ```js
    request.open('GET', url);
    ```

7. 接下来，我们将设置我们期待的响应类型 — 这是由请求的 {{domxref("XMLHttpRequest.responseType", "responseType")}} 属性定义的 — 作为 `text`. 这并不是绝对必要的 — XHR 默认返回文本 —但如果你想在以后获取其他类型的数据，养成这样的习惯是一个好习惯。接下来添加：

    ```js
    request.responseType = 'text';
    ```

8. 从网络获取资源是一个 {{glossary("asynchronous")}} "异步" 操作，这意味着您必须等待该操作完成（例如，资源从网络返回），然后才能对该响应执行任何操作，否则会出错，将被抛出错误。XHR 允许你使用它的 {{domxref("XMLHttpRequest.onload", "onload")}} 事件处理器来处理这个事件——当 [`load`](/zh-CN/docs/Web/API/XMLHttpRequest/load_event) 事件触发时（当响应已经返回时）这个事件会被运行。发生这种情况时， `response` 数据将在 XHR 请求对象的响应属性中可用。

    在后面添加以下内容。你会看到，在 `onload` 事件处理程序中，我们将 `poemDisplay` ( {{htmlelement("pre")}} 元素 ) 的 [`textContent`](/zh-CN/docs/Web/API/Node/textContent) 设置为 {{domxref("XMLHttpRequest.response", "request.response")}} 属性的值。

    ```js
    request.onload = function() {
      poemDisplay.textContent = request.response;
    };
    ```

9. 以上都是 XHR 请求的设置 — 在我们告诉它之前，它不会真正运行，这是通过 {{domxref("XMLHttpRequest.send","send()")}} 完成的。在你之前的代码下添加以下内容完成该函数：

    ```js
    request.send();
    ```

10. 这个例子中的一个问题就是它首次加载时不会显示任何诗。为了解决这个问题，在代码的底部添加以下两行 (正好在关闭的 `</script>` 标签之上) 默认加载第 1 节，并确保 {{htmlelement("select")}} 元素始终显示正确的值：

    ```js
    updateDisplay('Verse 1');
    verseChoose.value = 'Verse 1';
    ```

### 在 server 端运行例子

如果只是从本地文件运行示例，一些浏览器 (包括 Chrome) 将不会运行 XHR 请求。这是因为安全限制 (更多关于 web 安全性的限制，请参阅[Website security](/zh-CN/docs/Learn/Server-side/First_steps/Website_security))。

为了解决这个问题，我们需要通过在本地 web 服务器上运行它来测试这个示例。要了解如何实现这一点，请阅读[How do you set up a local testing server?](/zh-CN/docs/Learn/Common_questions/set_up_a_local_testing_server)

### Fetch

Fetch API 基本上是 XHR 的一个现代替代品——它是最近在浏览器中引入的，它使异步 HTTP 请求在 JavaScript 中更容易实现，对于开发人员和在 Fetch 之上构建的其他 API 来说都是如此。

让我们将最后一个示例转换为使用 Fetch !

1. 复制您之前完成的示例目录。(如果您没有通过以前的练习，创建一个新的目录。, 然后复制 [xhr-basic.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/xhr-basic.html)和这四个文件 — [verse1.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse3.txt), and [verse4.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse4.txt).)
2. 在 `updateDisplay()` 里找到 XHR 那段代码：

    ```js
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';

    request.onload = function() {
      poemDisplay.textContent = request.response;
    };

    request.send();
    ```

3. 像这样替换掉所有关于 XHR 的代码：

    ```js
    fetch(url).then(function(response) {
      response.text().then(function(text) {
        poemDisplay.textContent = text;
      });
    });
    ```

4. 在浏览器中加载示例 (通过 web 服务器运行)，它应该与 XHR 版本相同，前提是您运行的是一个现代浏览器。

#### 那么 Fetch 代码中发生了什么呢？

首先，我们调用了[`fetch()`](/zh-CN/docs/Web/API/WorkerOrWindowGlobalScope/fetch)方法，将我们要获取的资源的 URL 传递给它。这相当于现代版的 XHR 中的`request.open()`,另外，您不需要任何等效的`send()`方法。

然后，你可以看到`.then()`方法连接到了`fetch()`末尾 - 这个方法是[`Promises`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)的一部分，是一个用于执行异步操作的现代 JavaScript 特性。`fetch()`返回一个 promise，它将解析从服务器发回的响应。我们使用`then()`来运行一些后续代码，这是我们在其内部定义的函数。这相当于 XHR 版本中的`onload`事件处理程序。

当`fetch()` promise 解析时，这个函数会自动将响应从服务器传递给参数。在函数内部，我们获取响应并运行其`text()`方法。这基本上将响应作为原始文本返回，这相当于在 XHR 版本中的`responseType = 'text'`。

你会看到 `text()` 也返回了一个 promise, 所以我们连接另外一个 `.then()` 到它上面，在其中我们定义了一个函数来接收 `text()` promise 解析的生文本。

在 promise 的函数内部，我们做的和在 XHR 版本中差不多— 设置 [element represents preformatted text which is to be presented exactly as written in the HTML file.">`<pre>`](/zh-CN/docs/Web/HTML/Element/pre) 元素的文本内容为 text 的值。

### 关于 promises

当你第一次见到它们的时候，promises 会让你有点困惑，但现在不要太担心这个。在一段时间之后，您将会习惯它们，特别是当您了解更多关于现代 JavaScript api 的时候——大多数现代的 JavaScript api 都是基于 promises 的。

让我们再看看上面的 promises 结构，看看我们是否能更清楚地理解它：

```js
fetch(url).then(function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});
```

第一行是说‘’获取位于 url 里的资源 (`fetch(url)`)‘’和“然后当 promise 解析后运行指定的函数 (`.then(function() { ... })`)”。"解析"的意思是"在将来某一时刻完成指定的操作"。在本例中，指定的操作是从指定的 URL(使用 HTTP 请求) 获取资源，并返回对我们执行某些操作的响应。

实际上，传递给 `then()` 是一段不会立即执行的代码 — 而是当返回响应时代码会被运行。注意，你还可以选择把你的 promise 保存到一个变量里，链接 [`.then()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 在相同的位置。下面的代码会做相同的事情。

```js
let myFetch = fetch(url);

myFetch.then(function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});
```

因为方法 fetch() 返回一个解析 HTTP 响应的 promise, 你在 .then() 中定义的任何函数会被自动给与一个响应作为一个参数。你可以给这个参数取任何名字，以下的例子依然可以实现：（例子里把 response 参数叫做狗饼干---'dogBiscuits'=狗饼干）

```js
fetch(url).then(function(dogBiscuits) {
  dogBiscuits.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});
```

但是把参数叫做描述其内容的名字更有意义。

现在让我们来单独看一下函数：

```js
function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
}
```

response 对象有个 [`text()`](/zh-CN/docs/Web/API/Body/text)方法，获取响应主体中的原始数据 a 并把它转换成纯文本，那是我们想要的格式。它也返回一个 promise (解析结果文本字符串), 所以这里我们再使用 [`.then()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), 在里面我们再定义一个操作文本字符串的函数。我们设置诗歌的 [element represents preformatted text which is to be presented exactly as written in the HTML file.">`<pre>`](/zh-CN/docs/Web/HTML/Element/pre) 元素的 [`textContent`](/zh-CN/docs/Web/API/Node/textContent) 属性和这个文本字符串相同，这样就非常简单地解决了。

值得注意的是你可以直接将 promise 块 (`.then()`块，但也有其他类型) 链接到另一个的尾部，顺着链条将每个块的结果传到下一个块。这使得 promises 非常强大。

下面的代码块和我们原始的例子做的是相同的事，但它是不同的写法：

```js
fetch(url).then(function(response) {
  return response.text()
}).then(function(text) {
  poemDisplay.textContent = text;
});
```

很多开发者更喜欢这种样式，因为它更扁平并且按理说对于更长的 promise 链它更容易读 — 每一个 promise(承诺）接续上一个 promise，而不是在上一个 promise 的里面 (会使得整个代码笨重起来，难以理解）。以上两种写法还有一个不同的地方是我们在`response.text()` 语句之前得包含一个 [`return`](/zh-CN/docs/Learn/JavaScript/Building_blocks/Return_values) 语句，用来把这一部分的结果传向 promise 链的下一段。

### 你应该用哪种方法呢？

这完全取决于你正在干的项目是啥样。XHR 已经面世非常之久，现在已经有了相当棒的跨浏览器支持。然而对于网页平台来说，Fetch 和 Promise 是新近的产物，除了 IE 和 Safari 浏览器不支持，别的浏览器大多提供了支持。（现在 Safari 也即将为 fetch 和 promise 提供支持）。

如果你的项目需要支持年代久远的浏览器，那么使用 XHR 可能会更爽一些。如果你的项目比较激进而且你根本不管老版的浏览器吃不吃这套，那就选择 Fetch 吧老铁。

话说回来，咱倒真应该两者都学学——因为使用 IE 浏览器的人们在变少，Fetch 会变得越来越流行（事实上 IE 已经没人管了，因为微软 Edge 浏览器的受宠），但在所有浏览器彻底支持 Fetch 之前，你可能还得和 XHR 纠缠一阵子。

## 一个更复杂的示例

为了使本文更详尽，我们将看一个稍微复杂一点的示例，它展示了 Fetch 的一些更有趣的用法。我们创建了一个名为 Can Store 的示例站点——它是一个虚构的超市，只出售罐头食品。你可以找到 [example live on GitHub](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/)，并且 [see the source code](https://github.com/mdn/learning-area/tree/master/javascript/apis/fetching-data/can-store) 。

![A fake ecommerce site showing search options in the left hand column, and product search results in the right hand column.](can-store.png)

默认情况下，站点会显示所有产品，但您可以使用左手列中的表单控件按类别或搜索词或两者进行筛选。

有很多复杂的代码处理按类别和搜索词过滤产品、操作字符串以便数据在 UI 中正确显示等等。我们不会在本文中讨论所有这些，但是您可以在代码中找到大量的注释 (see [can-script.js](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store/can-script.js))。

但是，我们会解释 Fetch 代码的含义。

第一个使用 Fetch 的块可以在 JavaScript 的开头找到：

```js
fetch('products.json').then(function(response) {
  if(response.ok) {
    response.json().then(function(json) {
      products = json;
      initialize();
    });
  } else {
    console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
  }
});
```

这看起来和我们之前看到的相似，只是第二个 promise 是在一个条件语句中。在条件下，我们检查返回的 response 是否成功 — {{domxref("response.ok")}} 属性包含一个布尔变量，如果 response 是成功的 (e.g. [200 meaning "OK"](/zh-CN/docs/Web/HTTP/Status/200))，则是`true`；如果失败了，则是`false`。

如果 response 成功，我们运行第二个 promise — 然而，这次我们使用 {{domxref("Body.json","json()")}}，而不是{{domxref("Body.text","text()")}}, 因为我们想要 response 返回的是一个结构化的 JSON 数据，而不是纯文本。

如果 response 失败，我们将输出一个错误到控制台，指出网络请求失败，该控制台将报告响应的网络状态和描述性消息 (分别包含在{{domxref("response.status")}}和{{domxref("response.statusText")}}属性中)。当然，一个完整的 web 站点可以通过在用户的屏幕上显示一条消息来更优雅地处理这个错误，也许还可以提供一些选项来补救这种情况。

您可以自己测试失败案例：

1. 制作示例文件的本地副本 (下载并解压[the can-store ZIP file](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store/can-store.zip?raw=true))
2. 通过 web 服务器运行代码 (如上所述，在 [在 server 端运行例子](#在server端运行例子))
3. 修改要获取的文件的路径，比如“produc.json'(确保你拼写的是错误的)
4. 现在在你的浏览器上加载索引文件 (通过 `localhost:8000`) 然后查看你的开发者控制台。你将看到一条类似于“网络请求 products.json 失败，404：找不到文件”的消息

第二个 Fetch 块可以在`fetchBlob()` 找到：

```js
fetch(url).then(function(response) {
  if(response.ok) {
    response.blob().then(function(blob) {
      objectURL = URL.createObjectURL(blob);
      showProduct(objectURL, product);
    });
  } else {
    console.log('Network request for "' + product.name + '" image failed with response ' + response.status + ': ' + response.statusText);
  }
});
```

它的工作原理和前一个差不多，除了我们放弃{{domxref("Body.json","json()")}}而使用{{domxref("Body.blob","blob()")}} — 在本例中，我们希望以图像文件的形式返回响应，为此使用的数据格式是[Blob](/zh-CN/docs/Web/API/Blob) — 这个词是“二进制大对象”的缩写，基本上可以用来表示大型文件类对象——比如图像或视频文件。

一旦我们成功地接收到我们的 blob，我们就会使用它创建一个对象 URL {{domxref("URL.createObjectURL()", "createObjectURL()")}}. 它返回一个指向浏览器中引用的对象的临时内部 URL。这些不是很容易读懂，但是你可以通过打开 Can Store 看到，按 Ctrl-/右键单击一个图像，然后选择“View Image（查看图像）”选项 (根据您使用的浏览器可能略有不同)。对象 URL 将在地址栏中可见，应该是这样的：

```plain
blob:http://localhost:7800/9b75250e-5279-e249-884f-d03eb1fd84f4
```

### 挑战：一个 XHR 版本的 Can Store

我们希望您能尝试将 Fetch 版本转换为使用 XHR，作为一个有用的实践。下载一份 [copy of the ZIP file](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store/can-store.zip?raw=true), 并适当修改下 JavaScript。

一些有用的提示：

- 你可能会发现 {{domxref("XMLHttpRequest")}} 作参考材料非常有用。
- 你基本上需要使用和你在前面的文章中看到的[XHR-basic.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/xhr-basic.html)例子相同的模式。
- 但是，您将需要添加我们在 Can Store 的 Fetch 版本中显示的错误处理：

  - 在`load`事件完毕后，response 被用于`request.response`而不是 promise 的`then()`。
  - Fetch 的 `response.ok`在 XHR 中的最佳等效为检查 {{domxref("XMLHttpRequest.status","request.status")}} 是否等于 200 或者 {{domxref("XMLHttpRequest.readyState","request.readyState")}} 是否等于 4。
  - 获取状态和状态信息的内容是一样的，但是它们在 `request` (XHR) 对象，而不是`response` 对象。

> **备注：** 如果您在这方面有问题，请到 Github 将您的代码和完成的版本进行对比 ( [see the source here](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store-xhr/can-script.js), see also [see it running live](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store-xhr/) )。

## 概述

我们这篇关于从服务器那儿抓取数据的文章就到此为止了。现在你应该对如何使用 XHR 和 Fetch 有一些了解了吧？

## 请参阅

虽然本文中讨论了许多不同的主题，但是这些主题仅仅只是触及了表面。有关这些主题的更多详细信息，请尝试以下文章：

- [Ajax — Getting started](/zh-CN/docs/AJAX/Getting_Started)
- [Using Fetch](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Working with JSON data](/zh-CN/docs/Learn/JavaScript/Objects/JSON)
- [An overview of HTTP](/zh-CN/docs/Web/HTTP/Overview)
- [Server-side website programming](/zh-CN/docs/Learn/Server-side)
- <https://jsperf.com/xhr-vs-jquery-ajax-vs-get-vs-fetch>
- <https://xhr.spec.whatwg.org/#example-xhr>

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Manipulating_documents", "Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

## 模块大纲

- [介绍 web APIs](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- [操作 DOM documents](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [从服务器获取数据](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [第三方 APIs](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
- [绘图](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [视频音频 APIs](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- [客户端存储](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
