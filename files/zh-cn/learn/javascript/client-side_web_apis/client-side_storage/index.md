---
title: 客户端存储
slug: Learn/JavaScript/Client-side_web_APIs/Client-side_storage
---

{{LearnSidebar}}

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

现代 web 浏览器提供了很多在用户电脑 web 客户端存放数据的方法 — 只要用户的允许 — 可以在它需要的时候被重新获得。这样能让你存留的数据长时间保存，保存站点和文档在离线情况下使用，保留你对其站点的个性化配置等等。本篇文章只解释它们工作的一些很基础的部分。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        JavaScript 基础 (查看
        <a href="/zh-CN/docs/Learn/JavaScript/First_steps">第一步</a>,
        <a href="/zh-CN/docs/Learn/JavaScript/Building_blocks">构建的块</a>,
        <a href="/zh-CN/docs/Learn/JavaScript/Objects">JavaScript 对象</a>),
        <a href="/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >基础的客户端 API</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>学习如何使用客户端存储 API 来存储应用数据。</td>
    </tr>
  </tbody>
</table>

## 客户端存储？

在其他的 MDN 学习中我们已经讨论过 静态网站（[static sites](/zh-CN/docs/Learn/Server-side/First_steps/Client-Server_overview#Static_sites)）和动态网站（ [dynamic sites](/zh-CN/docs/Learn/Server-side/First_steps/Client-Server_overview#Dynamic_sites)）的区别。大多数现代的 web 站点是动态的— 它们在服务端使用各种类型的数据库来存储数据 (服务端存储), 之后通过运行服务端（ [server-side](/zh-CN/docs/Learn/Server-side)）代码来重新获取需要的数据，把其数据插入到静态页面的模板中，并且生成出 HTML 渲染到用户浏览上。

客户端存储以相同的原理工作，但是在使用上有一些不同。它是由 JavaScript APIs 组成的因此允许你在客户端存储数据 (比如在用户的机器上)，而且可以在需要的时候重新取得需要的数据。这有很多明显的用处，比如：

- 个性化网站偏好（比如显示一个用户选择的窗口小部件，颜色主题，或者字体）。
- 保存之前的站点行为 (比如从先前的 session 中获取购物车中的内容，记住用户是否之前已经登陆过)。
- 本地化保存数据和静态资源可以使一个站点更快（至少让资源变少）的下载，甚至可以在网络失去链接的时候变得暂时可用。
- 保存 web 已经生产的文档可以在离线状态下访问。

通常客户端和服务端存储是结合在一起使用的。例如，你可以从数据库中下载一个由网络游戏或音乐播放器应用程序使用的音乐文件，将它们存储在客户端数据库中，并按需要播放它们。用户只需下载音乐文件一次——在随后的访问中，它们将从数据库中检索。

> **备注：** 使用客户端存储 API 可以存储的数据量是有限的（可能是每个 API 单独的和累积的总量）;具体的数量限制取决于浏览器，也可能基于用户设置。有关更多信息，获取更多信息，请参考[浏览器存储限制和清理标准](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)。

### 传统方法：cookies

客户端存储的概念已经存在很长一段时间了。从早期的网络时代开始，网站就使用 [cookies](/zh-CN/docs/Web/HTTP/Cookies) 来存储信息，以在网站上提供个性化的用户体验。它们是网络上最早最常用的客户端存储形式。
因为在那个年代，有许多问题——无论是从技术上的还是用户体验的角度——都是困扰着 cookies 的问题。这些问题非常重要，以至于当第一次访问一个网站时，欧洲居民会收到消息，告诉他们是否会使用 cookies 来存储关于他们的数据，而这是由一项被称为[欧盟 Cookie 条例](/zh-CN/docs/Web/HTTP/Cookies#%E6%AC%A7%E7%9B%9FCookie%E6%8C%87%E4%BB%A4)的欧盟法律导致的。

![](cookies-notice.png)

由于这些原因，我们不会在本文中教你如何使用 cookie。毕竟它过时、存在各种[安全问题](/zh-CN/docs/Web/HTTP/Cookies#安全)，而且无法存储复杂数据，而且有更好的、更现代的方法可以在用户的计算机上存储种类更广泛的数据。
cookie 的唯一优势是它们得到了非常旧的浏览器的支持，所以如果您的项目需要支持已经过时的浏览器（比如 Internet Explorer 8 或更早的浏览器），cookie 可能仍然有用，但是对于大多数项目（很明显不包括本站）来说，您不需要再使用它们了。其实 cookie 也没什么好说的，[`document.cookie`](/zh-CN/docs/Web/API/Document/cookie)一把梭就完事了。

> **备注：** 为什么仍然有新创建的站点使用 cookies？这主要是因为开发人员的习惯，使用了仍然使用 cookies 的旧库，以及存在许多 web 站点，提供了过时的参考和培训材料来学习如何存储数据。

### 新流派：Web Storage 和 IndexedDB

现代浏览器有比使用 cookies 更简单、更有效的存储客户端数据的 API。

- [Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API) 提供了一种非常简单的语法，用于存储和检索较小的、由名称和相应值组成的数据项。当您只需要存储一些简单的数据时，比如用户的名字，用户是否登录，屏幕背景使用了什么颜色等等，这是非常有用的。
- [IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API) 为浏览器提供了一个完整的数据库系统来存储复杂的数据。这可以用于存储从完整的用户记录到甚至是复杂的数据类型，如音频或视频文件。

您将在下面了解更多关于这些 API 的信息。

### 未来：Cache API

一些现代浏览器支持新的 {{domxref("Cache")}} API。这个 API 是为存储特定 HTTP 请求的响应文件而设计的，它对于像存储离线网站文件这样的事情非常有用，这样网站就可以在没有网络连接的情况下使用。缓存通常与 [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API) 组合使用，尽管不一定非要这么做。
Cache 和 Service Workers 的使用是一个高级主题，我们不会在本文中详细讨论它，尽管我们将在下面的 [离线文件存储](#离线文件存储) 一节中展示一个简单的例子。

## 存储简单数据 — web storage

[Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API) 非常容易使用 — 你只需存储简单的 键名/键值 对数据 (限制为字符串、数字等类型) 并在需要的时候检索其值。

### 基本语法

让我们来告诉你怎么做：

1. 第一步，访问 GitHub 上的 [web storage blank template](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) (在新标签页打开此[模板](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html))。
2. 打开你浏览器开发者工具的 JavaScript 控制台。
3. 你所有的 web storage 数据都包含在浏览器内两个类似于对象的结构中： {{domxref("Window.sessionStorage", "sessionStorage")}} 和 {{domxref("Window.localStorage", "localStorage")}}。第一种方法，只要浏览器开着，数据就会一直保存 (关闭浏览器时数据会丢失) ，而第二种会一直保存数据，甚至到浏览器关闭又开启后也是这样。我们将在本文中使用第二种方法，因为它通常更有用。
4. {{domxref("Storage.setItem()")}} 方法允许您在存储中保存一个数据项——它接受两个参数：数据项的名字及其值。试着把它输入到你的 JavaScript 控制台（如果你愿意的话，可以把它的值改为你自己的名字！）

   ```js
   localStorage.setItem("name", "Chris");
   ```

5. {{domxref("Storage.getItem()")}} 方法接受一个参数——你想要检索的数据项的名称——并返回数据项的值。现在将这些代码输入到你的 JavaScript 控制台：

   ```js
   var myName = localStorage.getItem("name");
   myName;
   ```

   在输入第二行时，您应该会看到 `myName`变量现在包含`name`数据项的值。

6. {{domxref("Storage.removeItem()")}} 方法接受一个参数——你想要删除的数据项的名称——并从 web storage 中删除该数据项。在您的 JavaScript 控制台中输入以下几行：

   ```js
   localStorage.removeItem("name");
   var myName = localStorage.getItem("name");
   myName;
   ```

   第三行现在应该返回 `null` — `name` 项已经不存在于 web storage 中。

### 数据会一直存在！

web storage 的一个关键特性是，数据在不同页面加载时都存在（甚至是当浏览器关闭后，对 localStorage 的而言）。让我们来看看这个：

1. 再次打开我们的 Web Storage 空白模板，但是这次你要在不同的浏览器中打开这个教程！这样可以更容易处理。
2. 在浏览器的 JavaScript 控制台中输入这几行：

   ```js
   localStorage.setItem("name", "Chris");
   var myName = localStorage.getItem("name");
   myName;
   ```

   你应该看到 name 数据项返回。

3. 现在关掉浏览器再把它打开。
4. 再次输入下面几行：

   ```js
   var myName = localStorage.getItem("name");
   myName;
   ```

   你应该看到，尽管浏览器已经关闭，然后再次打开，但仍然可以使用该值。

### 为每个域名分离储存

每个域都有一个单独的数据存储区 (每个单独的网址都在浏览器中加载). 你 会看到，如果你加载两个网站（例如 google.com 和 amazon.com）并尝试将某个项目存储在一个网站上，该数据项将无法从另一个网站获取。

这是有道理的 - 你可以想象如果网站能够查看彼此的数据，就会出现安全问题！

### 更复杂的例子

让我们通过编写一个简单的工作示例来应用这些新发现的知识，让你了解如何使用网络存储。我们的示例将允许你输入一个名称，然后该页面将刷新，以提供个性化问候。这种状态也会页面/浏览器重新加载期间保持，因为这个名称存储在 Web Storage 中。

你可以在 [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) 中找到示例文件 —— 这包含一个具有标题，内容和页脚，以及用于输入您的姓名的表单的简单网站。

![](web-storage-demo.png)

让我们来构建示例，以便了解它的工作原理。

1. 首先，在您的计算机上的新目录中创建一个 [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) 文件的副本。
2. 接下来，请注意我们的 HTML 如何引用一个名为`index.js`的 JavaScript 文件（请参见第 40 行）。我们需要创建它并将 JavaScript 代码写入其中。在与 HTML 文件相同的目录中创建一个`index.js`文件。
3. 我们首先创建对所有需要在此示例中操作的 HTML 功能的引用 - 我们将它们全部创建为常量，因为这些引用在应用程序的生命周期中不需要更改。将以下几行添加到你的 JavaScript 文件中：

   ```js
   // 创建所需的常量
   const rememberDiv = document.querySelector(".remember");
   const forgetDiv = document.querySelector(".forget");
   const form = document.querySelector("form");
   const nameInput = document.querySelector("#entername");
   const submitBtn = document.querySelector("#submitname");
   const forgetBtn = document.querySelector("#forgetname");

   const h1 = document.querySelector("h1");
   const personalGreeting = document.querySelector(".personal-greeting");
   ```

4. 接下来，我们需要包含一个小小的事件监听器，以在按下提交按钮时阻止实际的提交表单动作自身，因为这不是我们想要的行为。在您之前的代码下添加此代码段：在你之前的代码后添加这段代码：

   ```js
   // 当按钮按下时阻止表单提交
   form.addEventListener("submit", function (e) {
     e.preventDefault();
   });
   ```

5. 现在我们需要添加一个事件监听器，当单击“Say hello”按钮时，它的处理函数将会运行。这些注释详细解释了每一处都做了什么，但实际上我们在这里获取用户输入到文本输入框中的名字并使用`setItem()`将它保存在网络存储中，然后运行一个名为`nameDisplayCheck()`的函数来处理实际的网站文本的更新。将此添加到代码的底部：

   ```js
   // run function when the 'Say hello' button is clicked
   submitBtn.addEventListener("click", function () {
     // store the entered name in web storage
     localStorage.setItem("name", nameInput.value);
     // run nameDisplayCheck() to sort out displaying the
     // personalized greetings and updating the form display
     nameDisplayCheck();
   });
   ```

6. 此时，我们还需要一个事件处理程序，以便在单击“Forget”按钮时运行一个函数——且仅在单击“Say hello”按钮（两种表单状态来回切换）后才显示。在这个功能中，我们使用`removeItem()`从网络存储中删除项目`name`，然后再次运行`nameDisplayCheck()`以更新显示。将其添加到底部：

   ```js
   // run function when the 'Forget' button is clicked
   forgetBtn.addEventListener("click", function () {
     // Remove the stored name from web storage
     localStorage.removeItem("name");
     // run nameDisplayCheck() to sort out displaying the
     // generic greeting again and updating the form display
     nameDisplayCheck();
   });
   ```

7. 现在是时候定义`nameDisplayCheck()`函数本身了。在这里，我们通过使用`localStorage.getItem('name')`作为测试条件来检查 name 数据项是否已经存储在 Web Storage 中。如果它已被存储，则该调用的返回值为`true`; 如果没有，它会是`false`。如果是`true`，我们会显示个性化问候语，显示表格的“forget”部分，并隐藏表格的“Say hello”部分。如果是`false`，我们会显示一个通用问候语，并做相反的事。再次将下面的代码添到底部：

   ```js
   // define the nameDisplayCheck() function
   function nameDisplayCheck() {
     // check whether the 'name' data item is stored in web Storage
     if (localStorage.getItem("name")) {
       // If it is, display personalized greeting
       let name = localStorage.getItem("name");
       h1.textContent = "Welcome, " + name;
       personalGreeting.textContent =
         "Welcome to our website, " +
         name +
         "! We hope you have fun while you are here.";
       // hide the 'remember' part of the form and show the 'forget' part
       forgetDiv.style.display = "block";
       rememberDiv.style.display = "none";
     } else {
       // if not, display generic greeting
       h1.textContent = "Welcome to our website ";
       personalGreeting.textContent =
         "Welcome to our website. We hope you have fun while you are here.";
       // hide the 'forget' part of the form and show the 'remember' part
       forgetDiv.style.display = "none";
       rememberDiv.style.display = "block";
     }
   }
   ```

8. 最后但同样重要的是，我们需要在每次加载页面时运行`nameDisplayCheck()`函数。如果我们不这样做，那么个性化问候不会在页面重新加载后保持。将以下代码添加到代码的底部：

   ```js
   document.body.onload = nameDisplayCheck;
   ```

你的例子完成了 - 做得好！现在剩下的就是保存你的代码并在浏览器中测试你的 HTML 页面。你可以在这里看到我们的[完成版本并在线运行](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html)。

> **备注：** 在 [Using the Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) 中还有一个稍微复杂点儿的示例。

> **备注：** 在完成版本的源代码中， `<script src="index.js" defer></script>` 一行里， `defer` 属性指明在页面加载完成之前，{{htmlelement("script")}}元素的内容不会执行。

## 存储复杂数据 — IndexedDB

[IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API)（有时简称 IDB）是可以在浏览器中访问的一个完整的数据库系统，在这里，你可以存储复杂的关系数据。其种类不限于像字符串和数字这样的简单值。你可以在一个 IndexedDB 中存储视频，图像和许多其他的内容。

但是，这确实是有代价的：使用 IndexedDB 要比 Web Storage API 复杂得多。在本节中，我们仅仅只能浅尝辄止地一提它的能力，不过我们会给你足够基础知识以帮助你开始。

### 通过一个笔记存储示例演示

在这里，我们将向您介绍一个示例，该示例允许您在浏览器中存储笔记并随时查看和删除它们，在我们进行时，我们将解释 IDB 的最基本部分并让您自己构建注释。

这个应用看起来像这样：

![](idb-demo.png)

每个笔记都有一个标题和一些正文，每个都可以单独编辑。我们将在下面通过的 JavaScript 代码提供详细的注释，以帮助您了解正在发生的事情。

### 开始

1、首先，将 [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/style.css), 和 [`index-start.js`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) 文件的本地副本放入本地计算机上的新目录中。

2、浏览这些文件。您将看到 HTML 非常简单：具有页眉和页脚的网站，以及包含显示注释的位置的主内容区域，以及用于在数据库中输入新注释的表单。CSS 提供了一些简单的样式，使其更清晰。JavaScript 文件包含五个声明的常量，其中包含对将显示注释的 {{htmlelement("ul")}} 元素的引用，标题和正文 {{htmlelement("input")}} 元素，{{htmlelement("form")}}本身，以及{{htmlelement("button")}}。

3、将您的 JavaScript 文件重命名为 `index.js` 。您现在可以开始向其添加代码了。

### 数据库初始设置

现在让我们来看看为了建立数据库必须首先要做什么。

1. 在常量声明下，加入这几行：

   ```js
   // Create an instance of a db object for us to store the open database in
   let db;
   ```

   这里我们声明了一个叫 `db` 的变量 — 这将在之后被用来存储一个代表数据库的对象。我们将在几个地方使用它，所以我们为了方便使用而在这里把它声明为全局的。

2. 接着，在你的代码最后添加如下代码：

   ```js
   window.onload = function () {};
   ```

   我们将把所有的后续代码写在这个 `window.onload` 事件处理函数内，这个函数将在 window 的 [`load`](/zh-CN/docs/Web/API/Window/load_event) 事件被触发时调用，为了确保我们没有在应用完整加载前试图使用 IndexedDB 功能（如果我们不这么做，它会失败）。

3. 在`window.onload`处理程序内，添加以下内容：

   ```js
   // Open our database; it is created if it doesn't already exist
   // (see onupgradeneeded below)
   let request = window.indexedDB.open("notes", 1);
   ```

   此行创建一个 `request` 变量，目的是打开 `notes`数据库的 `1`版本。如果`notes`数据库不存在，则后续代码将为您创建。您将在 IndexedDB 中经常看到此请求模式。数据库操作需要时间。您不希望在等待结果时挂起浏览器，因此数据库操作是[异步的](/zh-CN/docs/Glossary/asynchronous)，这意味着它们不会立即发生，而是在将来的某个时刻发生，并且在完成后会收到通知。

   要在 IndexedDB 中处理此问题，您需要创建一个请求对象（可以随意命名 - 命名为`request`，可以表明它的用途）。然后，在请求完成或者失败时，使用事件处理程序来运行代码，您将在下面看到这些代码。

   > **备注：** 版本号很重要。如果要升级数据库（例如：更改表结构），则必须使用增加的版本号或者`onupgradeneeded`处理程序内指定的不同模式（请参阅下文）等再次运行代码。在这个简单教程中，我们不讨论数据库升级。

   1. 在之前添加的事件处理程序下方添加以下代码 - 在`window.onload`处理程序内：

      ```js
      // onerror handler signifies that the database didn't open successfully
      request.onerror = function () {
        console.log("Database failed to open");
      };

      // onsuccess handler signifies that the database opened successfully
      request.onsuccess = function () {
        console.log("Database opened successfully");

        // Store the opened database object in the db variable. This is used a lot below
        db = request.result;

        // Run the displayData() function to display the notes already in the IDB
        displayData();
      };
      ```

      如果系统返回：请求失败，[`request.onerror`](/zh-CN/docs/Web/API/IDBRequest/onerror)将会运行。这将允许你对这个问题做出响应。在我们的简单示例中，只是将消息打印到 JavaScript 控制台。

      如果系统返回：请求成功，表明成功打开数据库，[`request.onsuccess`](/zh-CN/docs/Web/API/IDBRequest/onsuccess)将会运行。如果是这种情况，则表示已打开数据库的对象在[`request.result`](/zh-CN/docs/Web/API/IDBRequest/result)属性中变为可用，从而允许我们操作数据库。我们将它存储在`db`我们之前创建的变量中供以后使用。我们还运行了一个名为 `displayData()` 的函数，它在 {{HTMLElement("ul")}} 内显示数据库中的数据。我们现在运行它，以便在页面加载时立即显示已经在数据库中的笔记。你将在后面看到 `displayData()` 的定义。

4. 最后，对于本节，我们可能会添加最重要的事件处理程序来设置数据库：[`request.onupgradeneeded`](/zh-CN/docs/Web/API/IDBOpenDBRequest/onupgradeneeded)。如果尚未设置数据库，或者使用比现有存储数据库更大的版本号打开数据库（执行升级时），则运行此处理程序。在上一个处理程序下面添加以下代码：

   ```js
   // Setup the database tables if this has not already been done
   request.onupgradeneeded = function (e) {
     // Grab a reference to the opened database
     let db = e.target.result;

     // Create an objectStore to store our notes in (basically like a single table)
     // including a auto-incrementing key
     let objectStore = db.createObjectStore("notes", {
       keyPath: "id",
       autoIncrement: true,
     });

     // Define what data items the objectStore will contain
     objectStore.createIndex("title", "title", { unique: false });
     objectStore.createIndex("body", "body", { unique: false });

     console.log("Database setup complete");
   };
   ```

   这是我们定义数据库的模式（结构）的地方; 也就是说，它包含的列（或字段）集。这里我们首先从`e.target.result`（事件目标的`result`属性）中获取对现有数据库的引用，该引用是`request`对象。这相当于处理程序`db = request.result;`内部的行`onsuccess`，但我们需要在此单独执行此操作，因为`onupgradeneeded`处理程序（如果需要）将在`onsuccess`处理程序之前运行，这意味着`db`如果我们不这样做，该值将不可用。

   然后[`IDBDatabase.createObjectStore()`](/zh-CN/docs/Web/API/IDBDatabase/createObjectStore)，我们使用在打开的数据库中创建一个新的对象库。这相当于传统数据库系统中的单个表。我们给它起了名称注释，并且还指定了一个`autoIncrement`名为的关键字段`id`- 在每个新记录中，这将自动赋予增量值 - 开发人员不需要明确地设置它。作为密钥，该`id`字段将用于唯一标识记录，例如删除或显示记录时。

   我们还使用以下[`IDBObjectStore.createIndex()`](/zh-CN/docs/Web/API/IDBObjectStore/createIndex)方法创建另外两个索引（字段）:( `title`每个音符将包含一个标题），以及`body`（包含音符的正文）。

因此，通过设置这个简单的数据库模式，当我们开始向数据库添加记录时，每个记录都会沿着这些行表示为一个对象：

```js
{
  title: "Buy milk",
  body: "Need both cows milk and soya.",
  id: 8
}
```

### 添加数据到数据库

现在让我们看一下如何将记录添加到数据库中。这将使用我们页面上的表单完成。

在你之前的事件处理程序下面，添加以下一行，它设置了一个 `submit` 事件处理程序，当表单被提交时（当提交 {{htmlelement("button")}} 元素被按下导致表单成功提交），运行一个叫做 `addData()` 的函数：

```js
// Create an onsubmit handler so that when the form is submitted the addData() function is run
form.onsubmit = addData;
```

现在让我们定义一下这个`addData()`功能。在上一行下面添加：

```js
// Define the addData() function
function addData(e) {
  // prevent default - we don't want the form to submit in the conventional way
  e.preventDefault();

  // grab the values entered into the form fields and store them in an object ready for being inserted into the DB
  let newItem = { title: titleInput.value, body: bodyInput.value };

  // open a read/write db transaction, ready for adding the data
  let transaction = db.transaction(["notes"], "readwrite");

  // call an object store that's already been added to the database
  let objectStore = transaction.objectStore("notes");

  // Make a request to add our newItem object to the object store
  var request = objectStore.add(newItem);
  request.onsuccess = function () {
    // Clear the form, ready for adding the next entry
    titleInput.value = "";
    bodyInput.value = "";
  };

  // Report on the success of the transaction completing, when everything is done
  transaction.oncomplete = function () {
    console.log("Transaction completed: database modification finished.");

    // update the display of data to show the newly added item, by running displayData() again.
    displayData();
  };

  transaction.onerror = function () {
    console.log("Transaction not opened due to error");
  };
}
```

这很复杂；要打破它，我们：

- 在事件对象上运行 {{domxref("Event.preventDefault()")}} 以停止以传统方式实际提交的表单（这将导致页面刷新并破坏体验）。
- 创建一个表示要输入数据库的记录的对象，并使用表单输入中的值填充它。请注意，我们不必明确包含一个 `id` 值——正如我们提前详细说明的那样，这是自动填充的。
- 使用 {{domxref("IDBDatabase.transaction()")}} 方法打开 `notes` 对象存储的 `readwrite` 事务。此事务对象允许我们访问对象存储，以便我们可以对其执行某些操作，例如添加新记录。
- 使用 {{domxref("IDBTransaction.objectStore()")}} 方法访问对象库，将结果保存在 `objectStore` 变量中。
- 使用 {{domxref("IDBObjectStore.add()")}} 添加新记录到数据库。这创建了一个请求对象，与我们之前看到的方式相同。
- 在生命周期的关键点为 `request` 以及 `transaction` 对象添加事件处理程序以运行代码。请求成功后，我们会清除表单输入，以便输入下一个注释。交易完成后，我们 `displayData()` 再次运行该功能以更新页面上的注释显示。

### 显示数据

我们已经在代码中引用了 `displayData()` 两次，所以我们可能更好地定义它。将其添加到你的代码中，位于上一个函数定义之下：

```js
// Define the displayData() function
function displayData() {
  // Here we empty the contents of the list element each time the display is updated
  // If you ddn't do this, you'd get duplicates listed each time a new note is added
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Open our object store and then get a cursor - which iterates through all the
  // different data items in the store
  let objectStore = db.transaction("notes").objectStore("notes");
  objectStore.openCursor().onsuccess = function (e) {
    // Get a reference to the cursor
    let cursor = e.target.result;

    // If there is still another data item to iterate through, keep running this code
    if (cursor) {
      // Create a list item, h3, and p to put each data item inside when displaying it
      // structure the HTML fragment, and append it inside the list
      let listItem = document.createElement("li");
      let h3 = document.createElement("h3");
      let para = document.createElement("p");

      listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);

      // Put the data from the cursor inside the h3 and para
      h3.textContent = cursor.value.title;
      para.textContent = cursor.value.body;

      // Store the ID of the data item inside an attribute on the listItem, so we know
      // which item it corresponds to. This will be useful later when we want to delete items
      listItem.setAttribute("data-note-id", cursor.value.id);

      // Create a button and place it inside each listItem
      let deleteBtn = document.createElement("button");
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = "Delete";

      // Set an event handler so that when the button is clicked, the deleteItem()
      // function is run
      deleteBtn.onclick = deleteItem;

      // Iterate to the next item in the cursor
      cursor.continue();
    } else {
      // Again, if list item is empty, display a 'No notes stored' message
      if (!list.firstChild) {
        let listItem = document.createElement("li");
        listItem.textContent = "No notes stored.";
        list.appendChild(listItem);
      }
      // if there are no more cursor items to iterate through, say so
      console.log("Notes all displayed");
    }
  };
}
```

再次，让我们打破这个：

- 首先，我们清空 [`<ul>`](/zh-CN/docs/Web/HTML/Element/ul) 元素的内容，然后填充更新的内容。如果您不这样做，那么每次更新时都会添加大量重复内容。
- 接下来，我们`notes`使用[`IDBDatabase.transaction()`](/zh-CN/docs/Web/API/IDBDatabase/transaction)和[`IDBTransaction.objectStore()`](/zh-CN/docs/Web/API/IDBTransaction/objectStore)我们一样得到对象存储的引用`addData()`，除了这里我们将它们链接在一行中。
- 下一步是使用[`IDBObjectStore.openCursor()`](/zh-CN/docs/Web/API/IDBObjectStore/openCursor)方法打开对游标的请求 - 这是一个可用于迭代对象存储中的记录的构造。我们将一个`onsuccess`处理程序链接到该行的末尾以使代码更简洁 - 当成功返回游标时，运行处理程序。
- 我们[`IDBCursor`](/zh-CN/docs/Web/API/IDBCursor)使用 let 获取对游标本身（对象）的引用`cursor = e.target.result`。
- 接下来，我们检查光标是否包含来自数据存储区（`if(cursor){ ... }`）的记录 - 如果是这样，我们创建一个 DOM 片段，用记录中的数据填充它，然后将其插入页面（`<ul>`元素内部）。我们还包括一个删除按钮，当单击该按钮时，将通过运行该`deleteItem()`功能删除该注释，我们将在下一节中查看。
- 在`if`块结束时，我们使用该[`IDBCursor.continue()`](/zh-CN/docs/Web/API/IDBCursor/continue)方法将光标前进到数据存储区中的下一条记录，然后`if`再次运行块的内容。如果有另一个要迭代的记录，这会导致它被插入到页面中，然后`continue()`再次运行，依此类推。
- 当没有更多记录要迭代时，`cursor`将返回`undefined`，因此`else`块将运行而不是`if`块。此块检查是否有任何注释被插入`<ul>`- 如果没有，它会插入一条消息，说没有存储注释。

### 删除一条笔记

如上所述，当按下笔记的删除按钮时，笔记将被删除。这是通过`deleteItem()`函数实现的，如下所示：

```js
// Define the deleteItem() function
function deleteItem(e) {
  // retrieve the name of the task we want to delete. We need
  // to convert it to a number before trying it use it with IDB; IDB key
  // values are type-sensitive.
  let noteId = Number(e.target.parentNode.getAttribute("data-note-id"));

  // open a database transaction and delete the task, finding it using the id we retrieved above
  let transaction = db.transaction(["notes"], "readwrite");
  let objectStore = transaction.objectStore("notes");
  let request = objectStore.delete(noteId);

  // report that the data item has been deleted
  transaction.oncomplete = function () {
    // delete the parent of the button
    // which is the list item, so it is no longer displayed
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log("Note " + noteId + " deleted.");

    // Again, if list item is empty, display a 'No notes stored' message
    if (!list.firstChild) {
      let listItem = document.createElement("li");
      listItem.textContent = "No notes stored.";
      list.appendChild(listItem);
    }
  };
}
```

- 第一部分可以使用一些解释 - 我们检索要删除`Number(e.target.parentNode.getAttribute('data-note-id'))`的记录的 ID - 回想一下记录的 ID 是在第一次显示时保存在`data-note-id`属性中的`<li>`。但是，我们需要通过全局内置的[Number（）](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)对象传递属性，因为它当前是一个字符串，否则将无法被数据库识别。
- 然后，我们使用我们之前看到的相同模式获取对对象存储的引用，并使用该[`IDBObjectStore.delete()`](/zh-CN/docs/Web/API/IDBObjectStore/delete)方法从数据库中删除记录，并将 ID 传递给它。
- 当数据库事务完成后，我们`<li>`从 DOM 中删除注释，然后再次检查以查看它是否`<ul>`为空，并根据需要插入注释。

就是这样了！你的例子现在应该有效。

如果您遇到问题，请随时[查看我们的实例](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/)（请参阅[源代码](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.js)）。

### 通过 IndexedDB 存储复杂数据

如上所述，IndexedDB 可用于存储不仅仅是简单的文本字符串。您可以存储任何您想要的东西，包括复杂的对象，如视频或图像 blob。并且它比任何其他类型的数据更难实现。

为了演示如何操作，我们编写了另一个名为[IndexedDB 视频存储的](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/indexeddb/video-store)示例（请参阅[此处也可以在此处运行](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)）。首次运行示例时，它会从网络下载所有视频，将它们存储在 IndexedDB 数据库中，然后在 UI 内部 [`<video>`](/zh-CN/docs/Web/HTML/Element/video) 元素中显示视频。第二次运行它时，它会在数据库中找到视频并从那里获取它们而不是显示它们 - 这使得后续加载更快，占用空间更少。

让我们来看看这个例子中最有趣的部分。我们不会全部看 - 它的很多内容与上一个示例类似，代码注释得很好。

1. 对于这个简单的例子，我们已经存储了视频的名称以获取数组 opf 对象：

   ```js
   const videos = [
     { name: "crystal" },
     { name: "elf" },
     { name: "frog" },
     { name: "monster" },
     { name: "pig" },
     { name: "rabbit" },
   ];
   ```

2. 首先，一旦数据库成功打开，我们就运行一个`init()`函数。这会遍历不同的视频名称，尝试加载由`videos`数据库中的每个名称标识的记录。

   如果在数据库中找到每个视频（通过查看`request.result`评估是否容易检查`true`- 如果记录不存在，那么`undefined`），视频文件（存储为 blob）和视频名称将直接传递给`displayVideo()`函数以放置它们在用户界面中。如果没有，视频名称将传递给`fetchVideoFromNetwork()`函数...你猜对了 - 从网络中获取视频。

   ```js
   function init() {
     // Loop through the video names one by one
     for (let i = 0; i < videos.length; i++) {
       // Open transaction, get object store, and get() each video by name
       let objectStore = db.transaction("videos").objectStore("videos");
       let request = objectStore.get(videos[i].name);
       request.onsuccess = function () {
         // If the result exists in the database (is not undefined)
         if (request.result) {
           // Grab the videos from IDB and display them using displayVideo()
           console.log("taking videos from IDB");
           displayVideo(
             request.result.mp4,
             request.result.webm,
             request.result.name,
           );
         } else {
           // Fetch the videos from the network
           fetchVideoFromNetwork(videos[i]);
         }
       };
     }
   }
   ```

3. 以下片段是从内部`fetchVideoFromNetwork()`获取的 - 这里我们使用两个单独的[`fetch()`](/zh-CN/docs/Web/API/Fetch)请求获取视频的 MP4 和 WebM 版本。然后，我们使用该[`Body.blob()`](/zh-CN/docs/Web/API/Blob)方法将每个响应的主体提取为 blob，为我们提供可以在以后存储和显示的视频的对象表示。

   我们在这里遇到了一个问题 - 这两个请求都是异步的，但我们只想在两个 promises 都满足时尝试显示或存储视频。幸运的是，有一种处理这种问题的内置方法 - [`Promise.all()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)。这需要一个参数 - 引用您要检查放置在数组中的履行的所有单个承诺 - 并且本身是基于承诺的。

   当所有这些承诺都履行完毕时，`all()`承诺将通过包含所有个人履行价值的数组来实现。在`all()`块中，您可以看到我们`displayVideo()`之前调用函数，就像在 UI 中显示视频一样，然后我们也调用`storeVideo()`函数将这些视频存储在数据库中。

   ```js
   let mp4Blob = fetch("videos/" + video.name + ".mp4").then((response) =>
     response.blob(),
   );
   let webmBlob = fetch("videos/" + video.name + ".webm").then((response) =>
     response.blob(),
   );

   // Only run the next code when both promises have fulfilled
   Promise.all([mp4Blob, webmBlob]).then(function (values) {
     // display the video fetched from the network with displayVideo()
     displayVideo(values[0], values[1], video.name);
     // store it in the IDB using storeVideo()
     storeVideo(values[0], values[1], video.name);
   });
   ```

4. 我们`storeVideo()`先来看看吧。这与您在上一个示例中看到的用于向数据库添加数据的模式非常相似 - 我们打开一个`readwrite`事务并获取对象存储引用`videos`，创建一个表示要添加到数据库的记录的对象，然后使用它添加它[`IDBObjectStore.add()`](/zh-CN/docs/Web/API/IDBObjectStore/add)。

   ```js
   function storeVideo(mp4Blob, webmBlob, name) {
     // Open transaction, get object store; make it a readwrite so we can write to the IDB
     let objectStore = db.transaction(['videos'], 'readwrite').objectStore('videos');
     // Create a record to add to the IDB
     let record = {
       mp4 : mp4Blob,
       webm : webmBlob,
       name : name
     }

     // Add the record to the IDB using add()
     let request = objectStore.add(record);

     ...

   };
   ```

5. 最后但并非最不重要的是，我们`displayVideo()`创建了在 UI 中插入视频然后将它们附加到页面所需的 DOM 元素。最有趣的部分如下所示 - 要在`<video>`元素中实际显示我们的视频 blob，我们需要使用该[`URL.createObjectURL()`](/zh-CN/docs/Web/API/URL/createObjectURL)方法创建对象 URL（指向存储在内存中的视频 blob 的内部 URL）。完成后，我们可以将对象 URL 设置为 [`<source>`](/zh-CN/docs/Web/HTML/Element/source) 元素`src`属性的值，并且它可以正常工作。

   ```js
   function displayVideo(mp4Blob, webmBlob, title) {
     // Create object URLs out of the blobs
     let mp4URL = URL.createObjectURL(mp4Blob);
     let webmURL = URL.createObjectURL(webmBlob);

     ...

     let video = document.createElement('video');
     video.controls = true;
     let source1 = document.createElement('source');
     source1.src = mp4URL;
     source1.type = 'video/mp4';
     let source2 = document.createElement('source');
     source2.src = webmURL;
     source2.type = 'video/webm';

     ...
   }
   ```

## 离线文件存储

上面的示例已经说明了如何创建一个将大型资产存储在 IndexedDB 数据库中的应用程序，从而无需多次下载它们。这已经是对用户体验的一个很大的改进，但仍然有一件事 - 每次访问网站时仍然需要下载主要的 HTML，CSS 和 JavaScript 文件，这意味着当没有网络连接时，它将无法工作。

![](ff-offline.png)

这就是[服务工作者](/zh-CN/docs/Web/API/Service_Worker_API)和密切相关的[Cache API 的](/zh-CN/docs/Web/API/Cache)用武之地。

服务工作者是一个 JavaScript 文件，简单地说，它是在浏览器访问时针对特定来源（网站或某个域的网站的一部分）进行注册的。注册后，它可以控制该来源的可用页面。它通过坐在加载的页面和网络之间以及拦截针对该来源的网络请求来实现这一点。

当它拦截一个请求时，它可以做任何你想做的事情（参见[用例思路](/zh-CN/docs/Web/API/Service_Worker_API#Other_use_case_ideas)），但经典的例子是离线保存网络响应，然后提供响应请求而不是来自网络的响应。实际上，它允许您使网站完全脱机工作。

Cache API 是另一种客户端存储机制，略有不同 - 它旨在保存 HTTP 响应，因此与服务工作者一起工作得非常好。

> **备注：** 现在大多数现代浏览器都支持服务工作者和缓存。在撰写本文时，Safari 仍在忙着实施它，但它应该很快就会存在。

### 一个 service worker 例子

让我们看一个例子，让你对这可能是什么样子有所了解。我们已经创建了另一个版本的视频存储示例，我们在上一节中看到了 - 这个功能完全相同，只是它还通过服务工作者将 Cache，CSS 和 JavaScript 保存在 Cache API 中，允许示例脱机运行！

请参阅 [IndexedDB 视频存储，其中 service worker 在运行](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/)，并且还可以[查看源代码](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline)。

#### 注册服务工作者

首先要注意的是，在主 JavaScript 文件中放置了一些额外的代码（请参阅[index.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)）。首先，我们进行特征检测测试，以查看`serviceWorker`该[`Navigator`](/zh-CN/docs/Web/API/Navigator)对象中是否有该成员。如果返回 true，那么我们知道至少支持服务工作者的基础知识。在这里，我们使用该[`ServiceWorkerContainer.register()`](/zh-CN/docs/Web/API/ServiceWorkerContainer/register)方法将`sw.js`文件中包含的服务工作者注册到它所驻留的源，因此它可以控制与它或子目录相同的目录中的页面。当其承诺履行时，服务人员被视为已注册。

```js
// Register service worker to control making site work offline

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(
      "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js",
    )
    .then(function () {
      console.log("Service Worker Registered");
    });
}
```

> **备注：** `sw.js`文件的给定路径是相对于站点源的，而不是包含代码的 JavaScript 文件。服务人员在`https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`。原点是`https://mdn.github.io`，因此给定的路径必须是`/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`。如果您想在自己的服务器上托管此示例，则必须相应地更改此示例。这是相当令人困惑的，但出于安全原因，它必须以这种方式工作。

#### 安装 service worker

下次访问服务工作者控制下的任何页面时（例如，重新加载示例时），将针对该页面安装服务工作者，这意味着它将开始控制它。发生这种情况时，`install`会向服务工作人员发起一个事件; 您可以在服务工作者本身内编写代码来响应安装。

让我们看一下[sw.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js)文件（服务工作者）中的一个例子。您将看到安装侦听器已注册`self`。此`self`关键字是一种从服务工作文件内部引用服务工作者的全局范围的方法。

在`install` 处理程序内部，我们使用[`ExtendableEvent.waitUntil()`](/zh-CN/docs/Web/API/ExtendableEvent/waitUntil)事件对象上可用的方法来表示浏览器不应该完成服务工作者的安装，直到其中的 promise 成功完成。

这是我们在运行中看到 Cache API 的地方。我们使用该[`CacheStorage.open()`](/zh-CN/docs/Web/API/CacheStorage/open)方法打开一个可以存储响应的新缓存对象（类似于 IndexedDB 对象存储）。此承诺通过[`Cache`](/zh-CN/docs/Web/API/Cache)表示`video-store`缓存的对象来实现。然后，我们使用该[`Cache.addAll()`](/zh-CN/docs/Web/API/Cache/addAll)方法获取一系列资产并将其响应添加到缓存中。

```js
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("video-store").then(function (cache) {
      return cache.addAll([
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/",
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html",
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js",
        "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css",
      ]);
    }),
  );
});
```

这就是现在，安装完成。

#### 响应未来的请求

在我们的 HTML 页面上注册并安装了服务工作者，并且所有相关资产都添加到我们的缓存中，我们几乎准备好了。还有一件事要做，写一些代码来响应进一步的网络请求。

这就是第二位代码的`sw.js`作用。我们向服务工作者全局范围添加另一个侦听器，该范围在`fetch`引发事件时运行处理函数。只要浏览器在服务工作者注册的目录中请求资产，就会发生这种情况。

在处理程序内部，我们首先记录所请求资产的 URL。然后，我们使用该[`FetchEvent.respondWith()`](/zh-CN/docs/Web/API/FetchEvent/respondWith)方法为请求提供自定义响应。

在这个块中，我们[`CacheStorage.match()`](/zh-CN/docs/Web/API/CacheStorage/match)用来检查是否可以在任何缓存中找到匹配的请求（即匹配 URL）。如果未找到匹配，或者`undefined`如果未找到匹配，则此承诺将满足匹配的响应。

如果找到匹配项，我们只需将其作为自定义响应返回。如果没有，我们从网络中[获取（）](/zh-CN/docs/Web/API/fetch)响应并返回该响应。

```js
self.addEventListener("fetch", function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    }),
  );
});
```

这就是我们简单的服务工作者。您可以使用它们进行更多的负载 - 有关详细信息，请参阅[服务工作者手册](https://github.com/mdn/serviceworker-cookbook/)。感谢 Paul Kinlan 在他的文章中[添加服务工作者和离线到您的 Web 应用程序](https://developers.google.com/web/fundamentals/codelabs/offline/)，这启发了这个简单的例子。

#### 测试离线示例

要测试我们的[服务工作者示例](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/)，您需要加载它几次以确保它已安装。完成后，您可以：

- 尝试拔掉网络连接/关闭 Wifi。
- 如果您使用的是 Firefox，请选择*文件>脱机工作*。
- 转到 devtools，然后选择*Application> Service Workers*，如果您使用的是 Chrome，请选中*Offline*选中。

如果再次刷新示例页面，您仍应该看到它加载得很好。所有内容都是脱机存储的 - 缓存中的页面资源以及 IndexedDB 数据库中的视频。

## 总结

现在就是这些。我们希望你能感觉到我们对客户端存储技术的介绍很有用。

## 相关链接

- [网页存储 API](/zh-CN/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API)
- [Cookies](/zh-CN/docs/Web/HTTP/Cookies)
- [Service worker API](/zh-CN/docs/Web/API/Service_Worker_API)

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
