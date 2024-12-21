---
title: 第三方 API
slug: Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs
original_slug: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

到目前为止我们已经介绍的 API 是内置在浏览器中的，但并不是所有的 API 都是。许多大型网站和服务（例如 Google 地图、Twitter、Facebook、PayPal 等）提供的 API 允许开发者使用他们的数据（例如在博客上显示你的 Twitter 流）或服务（例如在你的网站上显示自定义 Google 地图，或者使用 Facebook 登录来登录你的用户）。本文着眼于浏览器 API 和第三方 API 的区别，并展示了后者的一些典型用途。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        JavaScript 基础（见 <a href="/zh-CN/docs/Learn_web_development/Core/Scripting"
          >JavaScript 第一步</a
        >、<a href="/zh-CN/docs/Learn_web_development/Core/Scripting"
          >创建 JavaScript 代码块</a
        >、<a href="/zh-CN/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects">JavaScript 对象介绍</a
        >）、<a
          href="/zh-CN/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction"
          >Web API 简介</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习了解第三方 API 的运作方式，以及如何运用它们来提高你的网站性能</td>
    </tr>
  </tbody>
</table>

## 什么是第三方 API?

第三方 API 是由第三方（通常是 Facebook、Twitter 或 Google 等公司）提供的 API，允许你通过 JavaScript 访问其功能，并在你自己的站点上使用它。最显著的一个示例就是运用 [Google 地图 API](https://developers.google.cn/maps/) 在你的网页上展示自定义地图。

让我们再来看看这个[简单的 Mapquest API 示例](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/mapquest)，并用它来说明第三方 API 接口与浏览器 API 接口的区别。

> [!NOTE]
> 你可能想要一次[获得所有的代码示例](/zh-CN/docs/Learn#获取代码示例)，在这种情况下，你可以在存储库中搜索来获取各部分中需要的示例文件。

### 它们植根于第三方服务器

浏览器 API 在浏览器构建之初就存在：用 JavaScript 就可以立即访问它们。例如，[在简介](/zh-CN/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#api_如何工作？)中所使用的 Web Audio API 就是通过原生的 {{domxref("AudioContext")}} 对象来访问的。

```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// 等
```

第三方 API，从某种角度讲，植根于第三方服务器上。要通过 JavaScript 获取它们，你首先需要链接到其功能接口上并使其在你的页面上生效。通常来说，这首先需要你通过一个 {{htmlelement("script")}} 元素连接到第三方服务器所开放的 JavaScript 库，就像在 Mapquest 示例中所看到的那样：

```js
<script
        src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
        defer></script>
<link
        rel="stylesheet"
        href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />
```

然后你便可使用该库中可用的对象了，如：

```js
const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});
```

这里我们创建了用于存储地图信息的变量，然后调用 `L.mapquest.map()` 方法来创建地图，该方法的参数包括要在其中显示地图的 {{htmlelement("div")}} 元素的 ID（“map”），以及包含要显示的特定地图详细信息的选项对象。在这里，我们指定了地图的中心点坐标、类型为 `map` 的地图图层（通过调用 `mapquest.tileLayer()` 方法创建）和默认缩放级别。

以上就是用 Mapquest API 建立一个简单地图所需要的所有信息。所有复杂的工作，包括展示正确地理位置的地图块等，都将由你所连接的服务器处理。

> [!NOTE]
> 一些 API 处理对其功能的访问略有不同，相反，它们要求开发人员向特定的 URL 模式发出 HTTP 请求以获取特定的数据。这些被称为 [RESTful API（稍后我们将在文章中展示这个示例）](#restful_api——纽约时报)。

### 它们通常需要 API 密钥

浏览器 API 的安全通常通过权限提示处理，正如[我们前文所说](/zh-CN/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#它们在适当的地方有额外的安全机制)。这样做的目的是让用户知道他们访问的网站上发生了什么，从而减少因有人恶意使用 API 而受害的可能性。

第三方 API 有一个稍微不同的权限系统——它们倾向于使用开发者密钥来允许开发人员访问 API 功能。这更多是为了保护 API 的提供者而非用户。

在 Mapquest API 示例中，你会发现与下面类似的一行：

```js
L.mapquest.key = "你的 API 密钥";
```

这一行指定了一个在你的应用中使用的 API 或开发者密钥——应用的开发者必须要申请获得一个密钥，然后在他们的代码中包含这个密钥，从而可以访问 API 的功能。在我们的示例中，我们只提供了一个占位符。

> [!NOTE]
> 当你创建自己的示例时，你需要将占位符替换为自己的 API 密钥。

其他 API 可能需要你以稍微不同的方式包含密钥，但大多数情况下的模式是相对类似的。

要求提供密钥可以让 API 提供商让使用 API 的用户对他们的行为负责。当开发者注册了一个密钥后，他们就被 API 提供商所知。如果他们开始做一些恶意行为（例如跟踪人们的位置或尝试用大量请求来妨碍 API 正常工作），可以采取行动。最简单的行动就是撤销他们的 API 权限。

## 拓展 Mapquest 示例

让我们为 Mapquest 示例添加一些更多的功能，以展示如何使用 API 的其他功能。

1. 首先，在一个新目录中创建 [Mapquest 入门文件](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/start/index.html)的副本。如果你已经[克隆了示例代码库](/zh-CN/docs/Learn#获取代码示例)，你将已经拥有这个文件的副本：你可以在 _javascript/apis/third-party-apis/mapquest/start_ 目录中找到它。
2. 接下来，你需要访问 [Mapquest 开发者网站](https://developer.mapquest.com/)，创建一个账户，然后创建一个开发者密钥来使用你的示例。（在编纂本文时，它在网站上被称为“consumer key”，密钥创建过程还要求提供一个可选的“callback URL”。现在你并不需要给出 URL，只需留空即可。）
3. 打开你的起始文件，并用你的密钥替换 API 密钥占位符。

### 更改地图类型

Mapquest API 可以显示多种不同类型的地图。找到以下行：

```js
layers: L.mapquest.tileLayer("map");
```

将 `'map'` 改为 `'hybrid'` 就可以显示混合样式的地图。你还可以尝试其他取值：[`tileLayer` 参考页面](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/)展示了可用的不同选项以及更多信息。

### 添加不同的控件

地图有许多不同的控件；默认情况下，它只显示缩放控件。你可以使用 `map.addControl()` 方法扩展可用的控件；将下面代码添加到你的代码中：

```js
map.addControl(L.mapquest.control());
```

[`mapquest.control()` 方法](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/)创建了一个简单的全功能控件集，默认情况下放置在右上角。你可以通过指定一个包含 `position` 属性的选项对象来调整位置。`position` 属性的值是一个字符串，指定控件的位置。例如，试试这个：

```js
map.addControl(L.mapquest.control({ position: "bottomright" }));
```

还有其他类型的控件，例如 [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) 和 [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/)，有些控件非常复杂且功能强大。你可以试试这些控件，看看能做出什么。

### 添加自定义标记

在地图上的某个点添加标记（图标）很容易——只需使用 [`L.marker()`](https://leafletjs.com/reference.html#marker) 方法（这好像在相关的 Leaflet.js 文档中有详细说明）。再次在 `window.onload` 中添加以下代码到你的示例中：

```js
L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: "#22407F",
    secondaryColor: "#3B5998",
    shadow: true,
    size: "md",
    symbol: "A",
  }),
})
  .bindPopup("This is Manchester!")
  .addTo(map);
```

如你所见，最简化的代码需要两个参数：一个包含显示标记坐标的数组，以及一个包含 `icon` 属性的可选对象用于指定在该点处显示的图标。

图标使用 [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/) 方法定义，其中包含标记的颜色和大小等信息。

在第一个方法调用的末尾，我们链接了 `.bindPopup('This is Manchester!')`，定义了在标记被点击时显示的内容。

最后，我们链接 `.addTo(map)` 到链的末尾，将标记实际添加到地图上。

查看文档中展示的其他选项，看看你能做出什么！Mapquest 提供了一些非常先进的功能，如方向、搜索等。

> [!NOTE]
> 如果你在使示例工作时遇到困难，请检查你的代码与我们的[完成版本](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/mapquest/finished/script.js)是否一致。

## RESTful API——纽约时报

现在我们来看看另一个 API 示例——[纽约时报 API](https://developer.nytimes.com)。这个 API 允许你检索纽约时报新闻故事信息并在你的网站上显示。这种类型的 API 被称为 **RESTful API**——与我们在 Mapquest 中使用 JavaScript 库功能获取数据不同，我们通过向特定 URL 发送 HTTP 请求来获取数据，数据如搜索词和其他属性编码在 URL 中（通常作为 URL 参数）。这是你会在 API 中遇到的常见模式。

下面我们将带你完成一个练习，展示如何使用纽约时报 API，并提供一个通用的步骤集，你可以用来作为使用新 API 的方法。

### 查找文档

当你想使用第三方 API 时，找到文档的位置是至关重要的，这样你才能找到 API 的功能，如何使用它们等。纽约时报 API 文档在 <https://developer.nytimes.com/>。

### 获取开发者密钥

出于安全和责任的考虑，大多数 API 要求你使用某种开发者密钥。请按照 <https://developer.nytimes.com/get-started> 的指示注册一个纽约时报 API 密钥。

1. 让我们请求一个文章搜索 API 的密钥——创建一个新应用，选择这个 API 作为你想要使用的 API（填写名称和描述，在“Article Search API”下切换开关到开启位置，然后点击“Create”）。
2. 从结果页面获取 API 密钥。
3. 现在，开始修改示例。先将 [nytimes/start](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/nytimes/start) 目录中的所有文件复制一份。如果你已经[克隆了示例代码库](/zh-CN/docs/Learn#获取代码示例)，你将已经拥有这些文件的副本，可以在 _javascript/apis/third-party-apis/nytimes/start_ 目录中找到。最开始 `script.js` 文件会包含设置示例所需的一些变量；下面我们将填写所需的功能。

该应用程序最终允许你输入搜索词和可选的开始和结束日期，然后使用这些信息查询文章搜索 API 并显示搜索结果。

![从纽约时报文章搜索 API 检索到的示例搜索查询与结果的截图。](nytimes-example.png)

### 将 API 连接到你的应用程序

首先，你需要在 API 和你的应用程序之间建立连接。在纽约时报文章搜索这个 API 的情况下，你需要每次从服务请求数据时都将 API 密钥作为 [get](/zh-CN/docs/Web/HTTP/Methods/GET) 参数包含在正确的 URL 中。

1. 找到以下行：

   ```js
   var key = "INSERT-YOUR-API-KEY-HERE";
   ```

   用你在上一部分中获取的实际 API 密钥替换现有的 API 密钥。

2. 在“`// Event listeners to control the functionality`”注释下面的 JavaScript 中添加以下行。当表单提交（按钮被按下）时，这会调用一个名为 `submitSearch()` 的函数。

   ```js
   searchForm.addEventListener("submit", submitSearch);
   ```

3. 现在在上面的行下方添加 `submitSearch()` 和 `fetchResults()` 函数定义：

   ```js
   function submitSearch(e) {
     pageNumber = 0;
     fetchResults(e);
   }

   function fetchResults(e) {
     // 调用 preventDefault() 来停止默认的表单提交行为
     e.preventDefault();

     // 组装完整 URL
     let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}&fq=document_type:("article")`;

     if (startDate.value !== "") {
       url = `${url}&begin_date=${startDate.value}`;
     }

     if (endDate.value !== "") {
       url = `${url}&end_date=${endDate.value}`;
     }
   }
   ```

`submitSearch()` 将页码设置回 0，然后调用 `fetchResults()`。首先在事件对象上调用 [`preventDefault()`](/zh-CN/docs/Web/API/Event/preventDefault)，以阻止表单实际提交（否则会破坏示例运行）。接下来，我们使用一些字符串操作来组装我们将向其发送请求的完整 URL。我们从组装 URL 的部分开始（我们认为对这个示例来说，组装 URL 是必需的）：

- 基本 URL（取自 `baseURL` 变量）。
- API 密钥。它需要在 `api-key` URL 参数中指定（取自 `key` 变量）。
- 页码。它需要在 `page` URL 参数中指定（取自 `pageNumber` 变量）。
- 搜索词作为一个查询字符串参数。它需要在 `q` URL 参数中指定（取自 `searchTerm` 文本 {{htmlelement("input")}} 的值）。
- 要返回结果中的文档类型。它需要在 `fq` URL 参数中传递一个表达式。在该示例中，我们希望返回的是文章。

接下来，我们使用几个 [`if ()`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) 语句检查 `startDate` 和 `endDate` 元素是否已填入值。如果填入了值，我们将其分别附加到 URL 中的 `begin_date` 和 `end_date` 参数中。

因此，完整的 URL 可能如下所示：

```url
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&page=0&q=cats&fq=document_type:("article")&begin_date=20170301&end_date=20170312
```

> [!NOTE]
> 你可以在[纽约时报开发者文档](https://developer.mytimes.com/)中找到更多关于可以包含的 URL 参数的详细信息。

> [!NOTE]
> 这个例子包含了基本的表单数据验证——在表单提交之前，搜索词字段必须被填入（通过 `required` 属性实现），日期字段包含 `pattern` 属性，这意味着它们的值必须由 8 个数字组成（`pattern="[0-9]{8}"`）。有关这些工作原理的更多详情，请参阅[表单数据验证](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)。

### 从 API 请求数据

现在我们已经构建了 URL，让我们向其发出请求。我们将使用 [Fetch API](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch) 来实现这一目的。

在 `fetchResults()` 函数内部的闭合大括号之前，添加以下代码块：

```js
// 使用 fetch() 向 API 发出请求
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));
```

这里我们通过将 `url` 变量传递给 [`fetch()`](/zh-CN/docs/Web/API/Window/fetch) 来运行请求，使用 [`json()`](/zh-CN/docs/Web/API/Response/json) 函数将响应主体转换为 JSON，然后将生成的 JSON 传递给 `displayResults()` 函数，以便在 UI 中显示数据。我们还捕获并记录可能抛出的任何错误。

### 显示数据

让我们看看如何显示数据。在 `fetchResults()` 函数下方添加以下函数。

```js
function displayResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  const articles = json.response.docs;

  nav.style.display = articles.length === 10 ? "block" : "none";

  if (articles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No results returned.";
    section.appendChild(para);
  } else {
    for (const current of articles) {
      const article = document.createElement("article");
      const heading = document.createElement("h2");
      const link = document.createElement("a");
      const img = document.createElement("img");
      const para1 = document.createElement("p");
      const keywordPara = document.createElement("p");
      keywordPara.classList.add("keywords");

      console.log(current);

      link.href = current.web_url;
      link.textContent = current.headline.main;
      para1.textContent = current.snippet;
      para2.textContent = "Keywords: ";
      for (const keyword of current.keywords) {
        const span = document.createElement("span");
        span.textContent = `${keyword.value} `;
        keywordPara.appendChild(span);
      }

      if (current.multimedia.length > 0) {
        img.src = `https://www.nytimes.com/${current.multimedia[0].url}`;
        img.alt = current.headline.main;
      }

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para1);
      article.appendChild(keywordPara);
      section.appendChild(article);
    }
  }
}
```

这里有很多代码，让我们一步步解释它们：

- [`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while) 循环是一个常见的模式，用于删除 DOM 元素的所有内容，在这种情况下是 {{htmlelement("section")}} 元素。我们不断检查 `<section>` 是否有第一个子元素，如果有，我们就删除第一个子元素。循环在 `<section>` 没有任何子元素时结束。
- 接下来，我们将 `articles` 变量设置为等于 `json.response.docs`（一个包含所有表示搜索返回文章对象的数组）。这纯粹是为了简化后续代码。
- 第一个 [`if ()`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) 块检查是否返回了 10 篇文章（API 一次最多返回 10 篇文章）。如果是，我们显示包含 _Previous 10_/_Next 10_ 分页按钮的 {{htmlelement("nav")}}。如果返回的文章少于 10 篇，它们都可以放在一页上，所以我们不需要显示分页按钮。我们将在下一节中接入分页功能。
- 下一个 `if ()` 块检查是否未返回任何文章。如果是，我们不会尝试显示任何内容——我们创建一个包含文本“No result returned.”的 {{htmlelement("p")}} 元素并将其插入到 `<section>` 中。
- 如果返回了一些文章，我们首先创建我们想用来显示每个新闻故事的所有元素，将正确的内容插入到每个元素中，然后将它们插入到 DOM 中的适当位置。为了找出文章对象中哪些属性包含要显示的正确数据，我们查阅了文章搜索 API 参考（参见[纽约时报 API](https://developer.nytimes.com/apis)）。大多数操作是显而易见的，但有几个值得指出：
  - 我们使用 [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环遍历与每篇文章关联的所有关键词，并将每个关键词插入到自己的 {{htmlelement("span")}} 中，放在一个 `<p>` 中。这是为了便于对每个关键词进行样式设置。
  - 我们使用一个 `if ()` 块（`if (current.multimedia.length > 0) { }`）检查每篇文章是否有任何相关图片，因为有些文章没有。如果存在，我们只显示第一张图片；否则会抛出错误。

### 接入分页按钮

要使分页按钮工作，我们将增加（或减少）`pageNumber` 变量的值，然后重新运行 fetch 请求，并在页面 URL 参数中包含新值。这是可以做到的，因为纽约时报 API 一次只返回 10 个结果（如果有超过 10 个结果可用）。如果 pageURL 参数设置为 0（不包括任何值时的默认值也为 0），它将返回前 10 个（0-9））；如果设置为 1，则会返回接下来的 10 个（10-19），依此类推。

这允许我们编写一个简单的分页函数。

1. 在现有的 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 调用下方，添加这两个新的调用，它们在相关按钮被点击时调用 `nextPage()` 和 `previousPage()` 函数：

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. 在之前添加的内容下面，让我们定义这两个函数——现在添加以下代码：

   ```js
   function nextPage(e) {
     pageNumber++;
     fetchResults(e);
   }

   function previousPage(e) {
     if (pageNumber > 0) {
       pageNumber--;
     } else {
       return;
     }
     fetchResults(e);
   }
   ```

   第一个函数增加 `pageNumber` 变量的值，然后重新运行 `fetchResults()` 函数以显示下一页的结果。

   第二个函数几乎以相同的方式反向工作，但我们还需要在减少 `pageNumber` 之前检查 `pageNumber` 是否已经为零——如果 Fetch 请求运行时 `pageURL` 参数为负数，可能会导致错误。如果 `pageNumber` 已经为 0，我们通过 [`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return) 退出函数——如果我们已经在第一页，我们不需要再次加载相同的结果。

> [!NOTE]
> 你可以在我们的 [GitHub 上完成的纽约时报 API 示例代码](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/finished/index.html)找到更多内容（也可以[在这里查看它的运行实例](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/finished/)）。

## Youtube 示例

我们还为你构建了另一个示例供你学习——请参阅我们的 [YouTube 视频搜索示例](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/)。这个示例使用了两个相关的 API：

- [YouTube Data API](https://developers.google.cn/youtube/v3/docs/) 搜索 YouTube 视频并返回结果。
- [YouTube IFrame Player API](https://developers.google.cn/youtube/iframe_api_reference) 在 IFrame 视频播放器中显示返回的视频示例，以便你可以观看它们。

这个示例很有趣，因为它展示了两个相关的第三方 API 被一起使用来构建一个应用程序。第一个是一个 RESTful API，而第二个是一个更像 Mapquest 的 API（带有 API 相关的方法等）。值得一提的是，这两个 API 都需要将 JavaScript 库应用到页面中。RESTful API 有可用的函数来处理 HTTP 请求并返回结果。

我们不会在本文中详细说明这个示例——源代码中包含了详细的注释，解释了它的工作原理。

要运行它，你需要：

- 阅读 [YouTube Data API 概述](https://developers.google.cn/youtube/v3/getting-started)文档。
- 访问[启用的 API](https://console.cloud.google.com/apis/enabled)页面，并在 API 列表中确保 YouTube Data API v3 的状态为 ON。
- 从 [Google Cloud](https://cloud.google.com/) 获取 API 密钥。
- 在源代码中找到字符串 `ENTER-API-KEY-HERE`，并用你的 API 密钥替换它。
- 通过 Web 服务器运行示例。如果你直接在浏览器中运行它（即通过 `file://URL`），它将无法工作。

## 总结

这篇文章为你介绍了如何使用第三方 API 来为你的网站添加功能。

{{PreviousMenu("Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
