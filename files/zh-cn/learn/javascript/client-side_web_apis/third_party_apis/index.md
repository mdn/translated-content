---
title: 第三方 API
slug: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}

到目前为止我们已经介绍的 API 是内置在浏览器中的，但并不是所有的 API 都是。许多大型网站和服务（例如 Google 地图，Twitter，Facebook，PayPal 等）提供的 API 允许开发者使用他们的数据（例如在博客上显示您的 Twitter 流）或服务（例如在您的网站上显示自定义 Google 地图，或者使用 Facebook 登录来登录你的用户）。本文着眼于浏览器 API 和第三方 API 的区别，并展示了后者的一些典型用途。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先决条件：</th>
      <td>
        JavaScript 基础知识 (see
        <a href="/zh-CN/docs/Learn/JavaScript/First_steps">first steps</a>,
        <a href="/zh-CN/docs/Learn/JavaScript/Building_blocks"
          >building blocks</a
        >,
        <a href="/zh-CN/docs/Learn/JavaScript/Objects">JavaScript objects</a>),
        the
        <a href="/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >basics of Client-side APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">目的：</th>
      <td>学习了解第三方 API 的运作方式，以及如何运用它们来提高你的网站性能</td>
    </tr>
  </tbody>
</table>

## 什么是第三方 API?

第三方 API 是由第三方（通常是 Facebook，Twitter 或 Google 等公司）提供的 API，允许您通过 JavaScript 访问其功能，并在您自己的站点上使用它。正如我们在 [API 介绍章节](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Introduction) 所展示的，最显著的例子就是运用 [Google Maps APIs](https://developers.google.com/maps/) 在你的网页上展示自定义地图。

让我们再来瞧一眼这个地图的例子 (see the [source code on GitHub](https://github.com/mdn/learning-area/blob/main/javascript/apis/introduction/maps-example.html); [see it live also](https://mdn.github.io/learning-area/javascript/apis/introduction/maps-example.html)), 从这里可以知道第三方 API 和浏览器 API 的区别是怎么样的。

> **备注：** 您可能想要一次获得所有的代码示例，在这种情况下，您可以搜索 repo 来获取每个部分中需要的示例文件。

### 它们植根于第三方服务器

浏览器 API 在浏览器构建之初就存在 — 用 JavaScript 就可以立即访问它们。例如，例子中所使用的 [Geolocation API](/zh-CN/docs/Web/API/Geolocation/Using_geolocation) 就是通过使用 [`Navigator`](/zh-CN/docs/Web/API/Navigator) 对象的属性 geolocation 来访问的，它返回一个名为 [`Geolocation`](/zh-CN/docs/Web/API/Geolocation) 的对象。这个例子使用了这个对象的方法 [`getCurrentPosition()`](/zh-CN/docs/Web/API/Geolocation/getCurrentPosition) 来请求当前设备所处的地点：

```js
navigator.geolocation.getCurrentPosition(function(position) { ... });
```

第三方 API，从某种角度讲，植根于第三方服务器上。要通过 JavaScript 获取它们，您首先需要链接到其功能接口上并使其在您的页面上生效。通常来说，这首先需要您通过一个 {{htmlelement("script")}} 元素连接到第三方服务器所开放的 JavaScript 库，如下所示：

```js
<script
  type="text/javascript"
  src="https://maps.google.com/maps/api/js?key=AIzaSyDDuGt0E5IEGkcE6ZfrKfUtE9Ko_de66pA"></script>
```

然后您便可使用该库中可用的对象了，如：

```js
var latlng = new google.maps.LatLng(
  position.coords.latitude,
  position.coords.longitude,
);
var myOptions = {
  zoom: 8,
  center: latlng,
  mapTypeId: google.maps.MapTypeId.TERRAIN,
  disableDefaultUI: true,
};

var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
```

代码中我们用 `google.maps.LatLng()` 构造器创建了一个新的 `LatLng` 对象，它包含了我们想展示的地址的纬度和经度，作为一个 Geolocation API 返回。然后，我们创建了包含这个对象，和其他有关地图显示信息的选项对象 (`myOptions`) 。最后，用 `google.maps.Map()` 构造器创建了`map`对象，它接受网页元素（地图展示处）和选项对象两个参数。

以上就是用 Google Maps API 建立一个简单地图所需要的所有信息。所有复杂的工作都全由你所连接的第三方服务器处理，包括展示正确地理位置的地图块，等等。

> **备注：** 一些 api 处理对其功能的访问略有不同，相反，它们要求开发人员向特定的 URL 模式发出 HTTP 请求 (参见从服务器获取数据)，以检索特定的数据。这些被称为 RESTful api，稍后我们将在文章中展示这个示例。

### 权限的不同处理方式

正如我们在第一篇文章中所讨论的，浏览器 api 的安全性通常是通过权限提示。这样做的目的是为了让用户知道他们访问的网站上发生了什么，并且不太可能成为恶意使用 API 的人的受害者。

第三方 API 有一个稍微不同的权限系统——它们倾向于使用关键代码来允许开发人员访问 API 功能。再次查看我们链接到的谷歌地图 API 库的 URL：

```plain
https://maps.google.com/maps/api/js?key=AIzaSyDDuGt0E5IEGkcE6ZfrKfUtE9Ko_de66pA
```

URL 末尾提供的 URL 参数是一个开发人员密钥—应用程序的开发人员必须应用它来获取一个密钥，然后以一种特定的方式将其包含在代码中，才能允许访问 API 的功能。对于谷歌映射 (以及其他谷歌 API)，可以在谷歌云平台上申请一个密钥。

其他 API 的包含方式稍微不同，但是大多数 API 的模式都非常相似。

需要密钥的原因是：所有使用 API 功能的人都需要承担责任。当开发者注册一个密钥之后，如果他们开始恶意使用 API（例如跟踪位置，试图用大量的垃圾邮件干扰用户正常工作），此时 API 的提供者可以采取措施。最简单的措施是撤销开发者的 API 的使用权。

## 扩展 the Google Maps 示例

现在我们已经检验了 Google Maps API 示例以及它的运作方式，让我们添加一些更多的功能来展示如何使用 API 的其他特性。

1. 要开始这个部分，确保你已经在一个新的目录复制 [Google Maps 启动文件](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/google-maps/maps_start.html)。如果你已经 [克隆了示例存储库](/zh-CN/docs/Learn#Getting_our_code_examples)，那么你已经拥有了一个这个文件的拷贝，你可以在*javascript/apis/third-party-apis/google-maps 目录中找到该文件。*
2. 接下来，用以下步骤获取你自己的开发者密钥：

   1. 跳转到 [Google Cloud Platform API Manager dashboard](https://console.cloud.google.com/apis/dashboard).
   2. 如果你还没有新项目，请创建一个新项目。
   3. 单击“启用 API”按钮。
   4. 选择*Google Maps JavaScript API*.
   5. 单击“启用”按钮。
   6. 单击创建凭据，然后选择 API 密钥。
   7. 复制你的 API 密钥并将示例中的第一个{{htmlelement("script")}}元素中的现有密钥替换为你自己的密钥。（位于`?key=`和属性结束引号标记 (`"`) 之间的位置。)

   > **备注：** 获取 Google 相关 API 密钥可能会有一点困难——Google Cloud Platform API Manager 有许多不同的屏幕，并且工作流程可能因您是否设置账户而变得细微的不同。如果您在执行此步骤时遇到了困难，我们将很乐意为您提供帮助——[联系我们](/zh-CN/docs/Learn#Contact_us)。

3. 打开你的 Google Maps 起始文件，找到`INSERT-YOUR-API-KEY-HERE`字符串，然后将其替换为你从 Google Cloud Platform API Manager dashboard 获取的实际 API 密钥。

### 添加自定义标记

添加一个标记在地图上 (icon) 在某种程度上是很容易的，你只需要创建一个新的标记使用 google.maps.Marker() 构造函数，传递给它一个包含位置显示标记的选择对象 (如 LatLng 对象),和 Map 对象来显示它。

1. 在 `var map ...` 行下面添加下列代码：

   ```js
   var marker = new google.maps.Marker({
     position: latlng,
     map: map,
   });
   ```

   现在如果你刷新你的页面，你会看到地图中间弹出了一个小小的漂亮标记。这很酷，但是这并不是一个定制的标记图标 — 它使用了默认的标记图标。

2. 如果要使用定制化的图标，我们需要在创建标记时通过 URL 来明确说明。首先，在刚才添加的代码块之后添加下面的代码：

   ```js
   var iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
   ```

   这定义了所有 Google Maps 官方图标存储的 URL（如果你想的话你也可以使用你自己的图标存储位置）。

3. 图标的位置应当在选项对象的`icon` 属性中说明。更新 Constructor 并添加 icon 属性，如下：

   ```js
   var marker = new google.maps.Marker({
     position: latlng,
     icon: iconBase + "flag_maps.png",
     map: map,
   });
   ```

   这里我们用`iconBase` 加上图标的文件名，从而创建完整 URL 的方式阐明了 icon 属性。现在尝试重新加载你的例子，你会看到你的地图上显示了一个定制的标记！

> **备注：** 访问 [Customizing a Google Map: Custom Markers](https://developers.google.com/maps/documentation/javascript/custom-markers) 以查看更多信息。

> **备注：** 访问 [Map marker or Icon names](https://fusiontables.google.com/DataSource?dsrcid=308519#map:id=3) 以找出还有哪些可以的图标，并查看它们的引用名称是什么。它们的文件名应当是当你点击它们时显示出的图标名，最后带有".png"。

### 单击标记时显示弹出窗口

Google 地图的另一个常见用例是在点击其名称或标记时显示有关某个地点的更多信息（弹出式广告在 Google Maps API 中称为信息窗口）。这也很容易实现，所以让我们来看看它。

1. 首先，您需要指定一个包含 HTML 的 JavaScript 字符串，该字符串将定义弹出窗口的内容。这将由 API 注入弹出窗口，并且可以包含您想要的任何内容。在`google.maps.Marker()`构造函数定义下面添加以下行：

   ```js
   var contentString =
     '<div id="content"><h2 id="firstHeading" class="firstHeading">Custom info window</h2><p>This is a cool custom info window.</p></div>';
   ```

2. 然后，你需要使用`google.maps.InfoWindow()` 构造器，创建一个新的 info window object。在之前的代码下面，添加以下代码：

   ```js
   var infowindow = new google.maps.InfoWindow({
     content: contentString,
   });
   ```

   还有其他可用的属性 (查看 [Info Windows](https://developers.google.com/maps/documentation/javascript/infowindows)), 但是在这里我们只具体说明指向内容源的`content` 属性。

3. 最后，为了在单击标记 (marker) 时显示弹出窗口，我们使用了一个简单的点击事件处理器。在`google.maps.InfoWindow()`构造器代码下面，添加以下代码：

   ```js
   marker.addListener("click", function () {
     infowindow.open(map, marker);
   });
   ```

   在函数中，我们只需调用 infowindow 的 `open()` 函数，该函数将要显示它的地图和希望它显示在旁边的标记作为参数。

4. 现在尝试重新加载示例，然后单击标记！

### Controlling what map controls are displayed

在原始 `google.maps.Map()`构造函数中，将看到 `disableDefaultUI: true` 。这将禁用您通常在 Google 地图上获得的所有标准 UI 控件。

1. 将其值设置为 `false` （或完全删除此属性），重新加载示例，将看到地图缩放按钮、scale indicator 等等。
2. 现在撤销上一次更改。
3. 通过使用指定单个 UI 功能的其他属性，可以更精细地显示或隐藏控件。尝试在 `disableDefaultUI: true` 的下面添加代码（请记住在 `disableDefaultUI: true` 之后输入逗号，否则将收到错误）：

   ```js
   zoomControl: true,
   mapTypeControl: true,
   scaleControl: true,
   ```

4. 现在尝试重新加载示例以查看这些属性的效果。您可以在 [MapOptions object reference page](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions)找到更多属性。

就是现在 - 看看 [Google Maps APIs documentation](https://developers.google.com/maps/documentation/javascript/)，发现更多乐趣！

## 一个 RESTful API — NYTimes

现在让我们看看另一个 API 示例 - [New York Times API](https://developer.nytimes.com)。此 API 允许您检索纽约时报的新闻故事信息并将其显示在您的网站上。这种类型的 API 称为 RESTful API - 我们不像使用 Google 地图那样使用 JavaScript 库的功能获取数据，而是通过向特定网址发出 HTTP 请求来获取数据，其中包含搜索术语和其他属性编码的数据 URL（通常作为 URL 参数）。这是您在 API 中遇到的常见模式。

## 使用第三方 API 的方法

下面我们将带您完成练习，向您展示如何使用 NYTimes API，它还提供了一组更为通用的步骤，您可以将其用作处理新 API 的方法。

### 查找文档

当您想要使用第三方 API 时，必须找出文档的位置，以便了解 API 具有哪些功能，以及如何使用它们等等。NYTimes API 文档位于 <https://developer.nytimes.com/>。

### 获取一个开发者密钥

出于安全性和问责制的原因，大多数 API 都要求您使用某种开发人员密钥。要注册 NYTimes API 密钥，您需要访问 <https://developer.nytimes.com/signup>。

1. 申请 "Article Search API" 的 API key ——新建一个应用，选择这个 API，(填写名称和描述，打开 "Article Search API" 下面的开关，然后点击“创建 (Create)”)
2. 从结果页面获取 API。
3. 现在开始构建这个应用，下载 [nytimes_start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/nytimes_start.html) 和 [nytimes.css](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/nytimes.css) 到一个新的本地目录。如果已经克隆过这个仓库 [cloned the examples repository](/zh-CN/docs/Learn#Getting_our_code_examples), 里面就已经有这 2 个文件了，它们存放在 _javascript/apis/third-party-apis/nytimes_ 目录下。HTML 文件里的 `<script>` 标签下已经包含了构建这个应用需要用到的变量；下面我们来填写函数。

下面是这个应用最终的样子，可以在搜索框里填写条目、起始日期和结束日期，作为参数向 Article Search API 接口发起查询，然后显示查询结果。

![](nytimes-search.png)

### 将 API 连接到应用

首先，建立 API 和本地应用的连接。对于这个 API，每次向服务器对应的 URL 发起 get 请求，都需要把 API key 作为 get 请求的参数。

1. 在代码中找到下面这行：

   ```js
   var key = "INSERT-YOUR-API-KEY-HERE";
   ```

   把 `INSERT-YOUR-API-KEY-HERE` 替换为在上一节中获得的 API key.

2. 添加下面这行代码到 JavaScript 代码中。添加到注释 "`// Event listeners to control the functionality`" 的下面。当表单提交时 (按钮按下时) 运行这个函数 `submitSearch()` .

   ```js
   searchForm.addEventListener("submit", submitSearch);
   ```

3. 添加 `submitSearch()` 和 `fetchResults()` 函数如下：

   ```plain
   function submitSearch(e) {
     pageNumber = 0;
     fetchResults(e);
   }

   function fetchResults(e) {
     // Use preventDefault() to stop the form submitting
     e.preventDefault();

     // Assemble the full URL
     url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value + '&fq=document_type:("article")';

     if(startDate.value !== '') {
       url += '&begin_date=' + startDate.value;
     };

     if(endDate.value !== '') {
       url += '&end_date=' + endDate.value;
     };

   }
   ```

`submitSearch()` 设置起始页码为 0，然后调用 `fetchResults()` 函数。其中，先调用事件对象的 [`preventDefault()`](/zh-CN/docs/Web/API/Event/preventDefault) 函数，阻止实际的表单提交事件 (会破坏应用，至于为什么可以自己试一试)。然后，处理字符串，构建完整的请求 URL。以下是几个必要的步骤：

- 基本的 URL ( `baseURL` 变量).
- API key，需要放到 `api-key` URL 参数里面去 ( `key` 变量).
- 页码，需要放到 `page` URL 参数里面去 ( `pageNumber` 变量).
- 搜索项，需要放到 `q` URL 参数里面去 ( `searchTerm` 输入框的文字 {{htmlelement("input")}}).

然后，用几个 [`if()`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) 代码块检测 `startDate` 和 `endDate` `<input>` 输入框里面是否有文字内容。如果有，再把输入框里的内容分别填写到 `begin_date` 和 `end_date` URL 参数里面去。

最后，完整的 URL 如下所示：

```plain
https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4f3c267e125943d79b0a3e679f608a78&page=0&q=cats
&begin_date=20170301&end_date=20170312
```

> **备注：** 更多 URL 参数的说明参考 [NYTimes developer docs](https://developer.nytimes.com/).

> **备注：** 示例包含了基本的表单数据验证操作 — 表项提交之前必须有内容 (用 `required` 属性实现)，此外，日期字段有确定的 `pattern` 属性，它们的值必须由 8 个数字组成 (`pattern="[0-9]{8}"`)，否则不能提交。更多细节参考 [Form data validation](/zh-CN/docs/Learn/HTML/Forms/Form_validation)

### 从 api 请求数据

现在 URL 已经构造好了，下面向它发起请求。本例使用 [Fetch API](/ch-CN/docs/Web/API/Fetch_API/Using_Fetch)

把下面的代码块添加到 `fetchResults()` 函数末尾的大括号里面：

```js
// Use fetch() to make the request to the API
fetch(url)
  .then(function (result) {
    return result.json();
  })
  .then(function (json) {
    displayResults(json);
  });
```

这段代码用于发起请求，把变量 `url` 作为 [`fetch()`](/zh-CN/docs/Web/API/fetch) 函数的参数，用 [`json()`](/zh-CN/docs/Web/API/Body/json) 函数把响应的结果转换为 JSON 格式，然后把 JSON 数据传递给 `displayResults()` 函数，数据就可以在 UI 中显示出来了。

### 显示数据

OK，下面是显示数据的部分。把下面的函数添加到 `fetchResults()` 函数下面。

```js
function displayResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  var articles = json.response.docs;

  if (articles.length === 10) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }

  if (articles.length === 0) {
    var para = document.createElement("p");
    para.textContent = "No results returned.";
    section.appendChild(para);
  } else {
    for (var i = 0; i < articles.length; i++) {
      var article = document.createElement("article");
      var heading = document.createElement("h2");
      var link = document.createElement("a");
      var img = document.createElement("img");
      var para1 = document.createElement("p");
      var para2 = document.createElement("p");
      var clearfix = document.createElement("div");

      var current = articles[i];
      console.log(current);

      link.href = current.web_url;
      link.textContent = current.headline.main;
      para1.textContent = current.lead_paragraph;
      para2.textContent = "Keywords: ";
      for (var j = 0; j < current.keywords.length; j++) {
        var span = document.createElement("span");
        span.textContent += current.keywords[j].value + " ";
        para2.appendChild(span);
      }

      if (current.multimedia.length > 0) {
        img.src = "http://www.nytimes.com/" + current.multimedia[0].url;
        img.alt = current.headline.main;
      }

      clearfix.setAttribute("class", "clearfix");

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para1);
      article.appendChild(para2);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
}
```

这一段有好多代码；下面一一解释：

- 第一个 [`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while) 循环是通用的操作，用于删除 DOM 结点里面的所有内容，在本例中是 {{htmlelement("section")}} 元素。不断查询 `<section>` 结点是否有子节点，如果有，就删除。当 `<section>` 没有子节点时退出循环。
- 然后，把 `articles` 变量赋值为 `json.response.docs` — 它来自查询结果，是所有文章对象构成的数组。单独写出这一行来，下面的代码会清晰一些。
- 第一个 [`if()`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) 检测查询到的文章数量是否是 10 (该 API 一次最多返回 10 篇文章) 如果是，就把 {{htmlelement("nav")}} 显示出来，里面包含有 _前 10/后 10(Previous 10/Next 10)_ 翻页按钮。如果返回的文章数量不足 10，就直接显示在 1 页里，不需要显示翻页按钮。在下一节中将展示翻页功能的实现。
- 下一个 `if()` 检测是否没有文章返回。如果是，就什么都不显示 — 创建一个 {{htmlelement("p")}} 结点，填写提示 "无结果。" 然后把该结点插入到 `<section>` 结点中。
- 如果有一些文章返回，第一步，创建所有用于展示新闻信息的结点，依次填写对应的文章内容，再把这些结点插入到合适的 DOM 结点下。至于文章对象里面的哪个属性包含需要展示的信息，查询 [Article Search API reference](https://developer.nytimes.com/article_search_v2.json). 大部分操作都很简单，但是个别需要提示一下：

  - 使用 [for loop](/zh-CN/docs/Web/JavaScript/Reference/Statements/for) (`for(var j = 0; j < current.keywords.length; j++) { ... }` ) 遍历每篇文章关联的关键字，再把它们插入到各自的 {{htmlelement("span")}} 标签，在 `<p>` 标签里面，这样做可以方便样式表的编辑。
  - 使用 `if()` 代码块 (`if(current.multimedia.length > 0) { ... }`) 检测每篇文章是否有对应的图片 (有些没有) 。只有当检测到有时，显示首张图片 (否则抛出异常)。
  - 把 \<div> 结点设置一个 class 属性 "clearfix"，这样清理操作 (apply clearing to it) 就很容易了。

### 添加分页按钮

为了使分页按钮工作，我们将增加（或减少）`pageNumber` 变量的值，然后用页面 url 参数中包含的新值重新运行 fetch 请求。这么做是因为 NYTimes API 每次最多只返回 10 篇文章 — 如果查询结果超过 10 篇，而 `page` URL 参数设为 0 (或者忽略这个参数 — 0 是默认值)，只返回前 10 篇 (0-9) ，后续的 10 篇 (10-19) 对应参数值 1，以此类推。

根据这个特性就可以轻松实现一个简单的翻页函数。

1. 下面的代码中，在 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 函数中添加这 2 个新事件，即把 `nextPage()` 和 `previousPage()` 函数链接到相应的按键点击事件上：

   ```js
   nextBtn.addEventListener("click", nextPage);
   previousBtn.addEventListener("click", previousPage);
   ```

2. 在上边代码的基础上，定义这 2 个函数 — 添加下面代码：

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

   第一个函数很简单 — 增加 `pageNumber` 变量，然后再次运行 `fetchResults()` 函数 展示下一页的结果。

   第二个函数基本上执行相反的操作，不过有个额外的步骤是检测 `pageNumber` 在 -1 之前是否已经是 0 — 如果 fetch 请求的 `page` URL 参数是负数，会导致错误。如果 `pageNumber` 已经是 0，则直接执行 [`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return) 退出函数，避免多余的计算。 (如果当前页面已经是首页，就不需要重新加载)。

> **备注：** 完整代码参考 [finished nytimes API example code on GitHub](https://github.com/mdn/learning-area/blob/main/javascript/apis/third-party-apis/nytimes/index.html) (实例参考 [see it running live here](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/)).

## YouTube 示例

我们还做了另外一个示例用来学习 — 参考 [YouTube video search example](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/youtube/). 这个示例用了下面 2 个 API：

- [YouTube Data API](https://developers.google.com/youtube/v3/docs/) ，搜索 YouTube 视频并返回结果。
- [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference) ，把返回的视频查询结果展示到 IFrame 视频播放器里，然后就可以播放了。

这个示例的有趣之处在于，它把两个第三方 API 结合起来做了一个应用。第一个 API 是 RESTful API，而第二个 API 更像是 Mapquest (有 API 专用方法 (API-specific methods), etc.)。但是，值得注意的是，这两个 API 均需要将 JavaScript 库应用于该页面。RESTful API 自己有用于处理 HTTP 请求并返回结果的函数。

![](youtube-example.png)

本文不会对该示例做过多的叙述，[源码](https://github.com/mdn/learning-area/tree/main/javascript/apis/third-party-apis/youtube)中有详细的注释。

运行源码需要：

- 从 [Google Cloud](https://cloud.google.com/) 获取 API key.
- 找到源码中的 `ENTER-API-KEY-HERE` 字符串，替换为 API key.
- 把示例运行在 web 服务器上。只是用浏览器打开文件是不会工作的 (例如，通过 `file://` URL 打开).

## 小结

本文介绍了如何使用第三方 API 给网页添加功能。

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}
