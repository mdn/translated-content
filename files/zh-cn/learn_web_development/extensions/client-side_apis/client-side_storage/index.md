---
title: 客户端存储
slug: Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

现代 Web 浏览器提供了很多在用户电脑上存放数据的方法——只要用户的允许——然后在需要时检索数据。这样能让你存留的数据长时间保存，保存站点和文档在离线情况下使用，保留对站点的个性化配置等等。本篇文章只解释它们工作的一些很基础的部分。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        JavaScript 基础（参见<a href="/zh-CN/docs/Learn_web_development/Core/Scripting"
          >第一步</a>、<a href="/zh-CN/docs/Learn_web_development/Core/Scripting"
          >构建代码块</a>、<a href="/zh-CN/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects"
          >JavaScript 对象</a>）、<a href="/zh-CN/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction"
          >基础的客户端 API</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习如何使用客户端存储 API 来存储应用数据。</td>
    </tr>
  </tbody>
</table>

## 客户端存储？

在其他的 MDN 学习中我们已经讨论过[静态网站](/zh-CN/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#静态网站)和[动态网站](/zh-CN/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#动态网站)的区别。大多数现代的网站是动态的——它们在服务端使用各种类型的数据库（服务端存储）来存储数据，之后通过运行[服务端](/zh-CN/docs/Learn_web_development/Extensions/Server-side)代码来查询需要的数据，把其数据插入到静态页面的模板中，并将生成的 HTML 提供给客户端，以在用户的浏览器中显示。

客户端存储以相同的原理工作，但是在使用上有一些不同。它是由 JavaScript API 组成的因此允许你在客户端存储数据（比如在用户的机器上），而且可以在需要的时候查询相关的数据。这有很多明显的用处，比如：

- 个性化网站偏好（比如显示一个用户选择的自定义微件、颜色主题或字体大小）。
- 保存之前的站点行为（比如从先前的 session 中获取购物车中的内容，记住用户是否之前已经登陆过）。
- 本地化保存数据和静态资源可以使一个站点更快（至少让资源变少）的下载，甚至可以在失去网络连接的情况下可用。
- 将 Web 应用生成的文档保存在本地以供离线使用。

通常客户端和服务端存储是结合在一起使用的。例如，你可以从数据库中下载一个由 Web 游戏或音乐播放器应用程序使用的音乐文件，将它们存储在客户端数据库中，并按需要播放它们。用户只需下载音乐文件一次——在随后的访问中，它们将从数据库中检索。

> [!NOTE]
> 使用客户端存储 API 可以存储的数据量是有限的（可能是每个 API 单独的和累积的总量）；具体的限制取决于浏览器，也可能基于用户设置。参见[浏览器存储限制和清理标准](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)以了解更多信息。

### 老做派：cookie

客户端存储的概念已经存在很长一段时间了。从 Web 的早期时代开始，网站就使用 [cookie](/zh-CN/docs/Web/HTTP/Guides/Cookies) 来存储信息，以在网站上提供个性化的用户体验。它们是 Web 中最早、最常用的客户端存储形式。

如今，有更简单的机制可用于存储客户端数据，因此我们在本文中不会教授如何使用 cookie。然而，这并不意味着 cookie 在现代 Web 上完全没有用处——它们仍然被广泛用于存储与用户个性化和状态相关的数据，例如会话 ID 和访问令牌。有关 cookie 的更多信息，请参见我们的[使用 HTTP cookie](/zh-CN/docs/Web/HTTP/Guides/Cookies) 文章。

### 新流派：Web 存储和 IndexedDB

我们在上面所提到的“更简单”的特性如下：

- [Web 存储 API](/zh-CN/docs/Web/API/Web_Storage_API) 提供了一种非常简单的语法，用于存储和检索较小的、由名称和相应值组成的数据项。当你只需要存储一些简单的数据时，比如用户的名字、用户是否登录、屏幕背景使用了什么颜色等等，这是非常有用的。
- [IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API) 为浏览器提供了一个完整的数据库系统来存储复杂的数据。这可以用于存储从完整的用户记录到甚至是复杂的数据类型，如音频或视频文件。

你将在下面了解更多关于这些 API 的信息。

### Cache API

{{domxref("Cache")}} API 是为存储特定 HTTP 请求的响应文件而设计的，它对于像存储离线网站文件这样的事情非常有用，这样网站就可以在没有网络连接的情况下使用。缓存通常与 [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API) 组合使用，尽管不一定非要这么做。

Cache 和 Service Worker 的使用是一个高级主题，我们不会在本文中详细讨论它，尽管我们将在下面的[离线文件存储](#离线文件存储)小节中展示一个简单的例子。

## 存储简单数据——Web 存储

[Web 存储 API](/zh-CN/docs/Web/API/Web_Storage_API) 非常容易使用——你只需存储简单的键名/键值对数据（限制为字符串、数字等类型）并在需要的时候检索其值。

### 基本语法

让我们来告诉你怎么做：

1. 第一步，访问 GitHub 上的 [Web 存储空白模板](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html)（在新标签页打开它）。
2. 打开你浏览器开发者工具的 JavaScript 控制台。
3. 你所有的 Web 存储数据都包含在浏览器内两个类似于对象的结构中：{{domxref("Window.sessionStorage", "sessionStorage")}} 和 {{domxref("Window.localStorage", "localStorage")}}。第一种方法，只要浏览器开着，数据就会一直保存（关闭浏览器时数据会丢失），而第二种会一直保存数据，甚至到浏览器关闭又开启后也是这样。我们将在本文中使用第二种方法，因为它通常更有用。

   {{domxref("Storage.setItem()")}} 方法允许你在存储中保存一个数据项——它接受两个参数：数据项的名字及其值。试着把它输入到你的 JavaScript 控制台（如果你愿意的话，可以把它的值改为你自己的名字！）

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. {{domxref("Storage.getItem()")}} 方法接受一个参数——你想要检索的数据项的名称——并返回数据项的值。现在将这些代码输入到你的 JavaScript 控制台：

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   在输入第二行时，你应该会看到 `myName` 变量现在包含 `name` 数据项的值。

5. {{domxref("Storage.removeItem()")}} 方法接受一个参数——你想要删除的数据项的名称——并从 Web 存储中删除该数据项。在你的 JavaScript 控制台中输入以下几行：

```js
localStorage.removeItem("name");
myName = localStorage.getItem("name");
myName;
```

第三行现在应该返回 `null`——`name` 项已经不存在于 Web 存储中。

### 数据会一直存在！

Web 存储的一个关键特性是，数据在不同页面加载时都存在（甚至是当浏览器关闭后，对 `localStorage` 而言）。让我们来看看这个：

1. 再次打开我们的 Web 存储空白模板，但是这次你要在不同的浏览器中打开这个教程！这样可以更容易处理。
2. 在浏览器的 JavaScript 控制台中输入这几行：

   ```js
   localStorage.setItem("name", "Chris");
   let myName = localStorage.getItem("name");
   myName;
   ```

   你应该看到 name 数据项返回。

3. 现在关掉浏览器再把它打开。
4. 再次输入下面几行：

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   你应该看到，尽管浏览器已经关闭，然后再次打开，但仍然可以使用该值。

### 为每个域名分离储存

每个域都有一个单独的数据存储区（每个单独的网址都在浏览器中加载）。你会看到，如果你加载两个网站（例如 google.com 和 amazon.com）并尝试将某个项目存储在一个网站上，该数据项将无法从另一个网站获取。

这是有道理的——你可以想象如果网站能够查看彼此的数据，就会出现安全问题！

### 更复杂的例子

让我们通过编写一个简单的工作示例来应用这些新发现的知识，让你了解如何使用网络存储。我们的示例将允许你输入一个名称，然后该页面将刷新，以提供个性化问候。这种状态也会页面/浏览器重新加载期间保持，因为这个名称存储在 Web 存储中。

你可以在 [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) 中找到示例 HTML——这包含一个具有标题、内容和页脚，以及用于输入你的姓名的表单的简单网站。

![一张网站的截图，包含了页头、内容和页脚部分。页头的左侧有一段欢迎文本，右侧有一个标记为“忘记”的按钮。内容部分包括一个标题，接着是两段占位文本。页脚显示“版权归任何人所有。随意使用代码。”](web-storage-demo.png)

让我们来构建示例，以便了解它的工作原理。

1. 首先，在你的计算机上的新目录中创建一个 [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) 文件的副本。
2. 接下来，请注意我们的 HTML 如何引用一个名为 `index.js` 的 JavaScript 文件（就像 `<script src="index.js" defer></script>`）。我们需要创建它并将 JavaScript 代码写入其中。在与 HTML 文件相同的目录中创建一个 `index.js` 文件。
3. 我们首先创建对所有需要在此示例中操作的 HTML 特性的引用——我们将它们全部创建为常量，因为这些引用在应用程序的生命周期中不需要更改。将以下几行添加到你的 JavaScript 文件中：

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

4. 接下来，我们需要包含一个小小的事件监听器，以在按下提交按钮时阻止实际的提交表单动作自身，因为这不是我们想要的行为。在你之前的代码下添加此代码段：在你之前的代码后添加这段代码：

   ```js
   // 当按钮按下时阻止表单提交
   form.addEventListener("submit", (e) => e.preventDefault());
   ```

5. 现在我们需要添加一个事件监听器，当单击“Say hello”按钮时，它的处理函数将会运行。这些注释详细解释了每一处都做了什么，但实际上我们在这里获取用户输入到文本输入框中的名字并使用 `setItem()` 将它保存在网络存储中，然后运行一个名为 `nameDisplayCheck()` 的函数来处理实际的网站文本的更新。将此添加到代码的底部：

   ```js
   // 当点击“Say hello”按钮时运行函数
   submitBtn.addEventListener("click", () => {
     // 将输入的名字存储到网页存储中
     localStorage.setItem("name", nameInput.value);
     // 运行 nameDisplayCheck() 来处理显示个性化问候语和更新表单显示
     nameDisplayCheck();
   });
   ```

6. 此时，我们还需要一个事件处理器，以便在单击“Forget”按钮时运行一个函数——且仅在单击“Say hello”按钮（两种表单状态来回切换）后才显示。在这个函数中，我们使用 `removeItem()` 从 Web 存储中删除项目 `name`，然后再次运行 `nameDisplayCheck()` 以更新显示。将其添加到底部：

   ```js
   // 当点击“Forget”按钮时运行函数
   forgetBtn.addEventListener("click", () => {
     // 从网页存储中移除存储的名字
     localStorage.removeItem("name");
     // 运行 nameDisplayCheck() 来重新显示通用问候语并更新表单显示
     nameDisplayCheck();
   });
   ```

7. 现在是时候定义 `nameDisplayCheck()` 函数本身了。在这里，我们通过使用 `localStorage.getItem('name')` 作为测试条件来检查 name 数据项是否已经存储在 Web 存储中。如果它已被存储，则该调用的返回值为 `true`；果没有，它会是 `false`。如果是 `true`，我们会显示个性化问候语，显示表格的“forget”部分，并隐藏表格的“Say hello”部分。如果是 `false`，我们会显示一个通用问候语，并做相反的事。再次将下面的代码添到底部：

   ```js
   // 定义 nameDisplayCheck() 函数
   function nameDisplayCheck() {
     // 检查 'name' 数据项是否存储在网页存储中
     if (localStorage.getItem("name")) {
       // 如果存在，显示个性化问候语
       const name = localStorage.getItem("name");
       h1.textContent = `欢迎，${name}`;
       personalGreeting.textContent = `欢迎来到我们的网站，${name}！希望您在这里玩得开心。`;
       // 隐藏表单中的 'remember' 部分，显示 'forget' 部分
       forgetDiv.style.display = "block";
       rememberDiv.style.display = "none";
     } else {
       // 如果不存在，显示通用问候语
       h1.textContent = "欢迎来到我们的网站";
       personalGreeting.textContent =
         "欢迎来到我们的网站。希望您在这里玩得开心。";
       // 隐藏表单中的 'forget' 部分，显示 'remember' 部分
       forgetDiv.style.display = "none";
       rememberDiv.style.display = "block";
     }
   }
   ```

8. 最后但同样重要的是，我们需要在每次加载页面时运行 `nameDisplayCheck()` 函数。如果我们不这样做，那么个性化问候不会在页面重新加载后保持。将以下代码添加到代码的底部：

   ```js
   nameDisplayCheck();
   ```

你的例子完成了——做得好！现在剩下的就是保存你的代码并在浏览器中测试你的 HTML 页面。你可以在这里看到我们的[完成版本并在线运行](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html)。

> [!NOTE]
> 在[使用 Web 存储 API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) 中还有一个稍微复杂点儿的示例。

> [!NOTE]
> 在完成版本的源代码中，`<script src="index.js" defer></script>` 一行里，`defer` 属性指明在页面加载完成之前，{{htmlelement("script")}} 元素的内容不会执行。

## 存储复杂数据——IndexedDB

[IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API)（有时简称 IDB）是可以在浏览器中访问的一个完整的数据库系统，在这里，你可以存储复杂的关系数据。其种类不限于像字符串和数字这样的简单值。你可以在一个 IndexedDB 中存储视频，图像和许多其他的内容。

IndexedDB API 允许你创建一个数据库，然后在该数据库中创建对象存储。对象存储类似于关系型数据库中的表，每个对象存储可以包含多个对象。要了解有关 IndexedDB API 的更多信息，请参见[使用 IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)。

但是，这确实是有代价的：使用 IndexedDB 要比 Web 存储 API 复杂得多。在本节中，我们仅仅只能浅尝辄止地一提它的能力，不过我们会给你足够基础知识以帮助你开始。

### 通过一个笔记存储示例演示

在这里，我们将向你介绍一个示例，该示例允许你在浏览器中存储笔记并随时查看和删除它们，在我们进行时，我们将解释 IDB 的最基本部分并让你自己构建笔记。

这个应用看起来像这样：

![IndexDB 笔记演示的截图包含四个部分。第一部分是页头。第二部分列出了所有已创建的笔记，包括两条笔记，每条笔记都有一个删除按钮。第三部分是一个表单，包含两个输入字段用于“笔记标题”和“笔记内容”，以及一个标记为“创建新笔记”的按钮。底部部分的页脚显示“版权归任何人所有。随意使用代码。”](idb-demo.png)

每个笔记都有一个标题和一些正文，每个都可以单独编辑。我们将在下面通过的 JavaScript 代码提供详细的笔记，以帮助你了解正在发生的事情。

### 开始

1、首先，将 [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.html)、[`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/style.css) 和 [`index-start.js`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) 文件的本地副本放入本地计算机上的新目录中。

2、浏览这些文件。你将看到 HTML 非常简单：具有页眉和页脚的网站，以及包含显示笔记的位置的主内容区域，以及用于在数据库中输入新笔记的表单。CSS 提供了一些简单的样式，使其更清晰。JavaScript 文件包含五个声明的常量，其中包含对将显示笔记的 {{htmlelement("ul")}} 元素的引用、标题和正文 {{htmlelement("input")}} 元素、{{htmlelement("form")}} 本身，以及 {{htmlelement("button")}}。

3、将你的 JavaScript 文件重命名为 `index.js`。你现在可以开始向其添加代码了。

### 数据库初始设置

现在让我们来看看为了建立数据库必须首先要做什么。

1. 在常量声明下，加入这几行：

   ```js
   // 创建一个 db 对象的实例，用于存储打开的数据库
   let db;
   ```

   这里我们声明了一个叫 `db` 的变量——这将在之后被用来存储一个代表数据库的对象。我们将在几个地方使用它，所以我们为了方便使用而在这里把它声明为全局的。

2. 接着，添加如下代码：

   ```js
   // 打开我们的数据库；如果数据库不存在，将会创建它
   // （请参见下面的 upgradeneeded 处理器）
   const openRequest = window.indexedDB.open("notes_db", 1);
   ```

   这一行代码创建了一个请求，用于打开名为 `notes_db` 的版本 `1` 的数据库。如果该数据库尚不存在，它将由后续代码创建。你会在 IndexedDB 中经常看到这种请求模式。数据库操作需要时间。你不希望在等待结果时使浏览器卡死，因此数据库操作是{{Glossary("asynchronous", "异步")}}的，意味着操作不会立即发生，而是在未来的某个时间发生，并且你会在操作完成时收到通知。

   在 IndexedDB 中处理这一点的方法是创建一个请求对象（可以随意命名——我们在这里称之为 `openRequest`，这样它的用途就很明显）。然后，你可以使用事件处理器来运行代码，当请求完成、失败等时，你可以看到下面的用法。

   > [!NOTE]
   > 版本号很重要。如果你想升级数据库（例如，通过更改表结构），你需要再次运行代码，增加版本号，并在 `upgradeneeded` 处理器中指定不同的模式等。我们在本教程中不会涉及数据库的升级。

3. 现在，在你之前添加的代码下面添加以下事件处理器：

   ```js
   // 错误处理器表示数据库未成功打开
   openRequest.addEventListener("error", () => console.error("数据库打开失败"));

   // 成功处理器表示数据库成功打开
   openRequest.addEventListener("success", () => {
     console.log("数据库成功打开");

     // 将打开的数据库对象存储在 db 变量中。下面会多次使用
     db = openRequest.result;

     // 运行 displayData() 函数以显示已存在于 IDB 中的笔记
     displayData();
   });
   ```

   {{domxref("IDBRequest/error_event", "error")}} 事件处理器会在系统返回请求失败的消息时运行。这允许你对这个问题做出响应。在我们的示例中，我们只是将一条消息打印到 JavaScript 控制台。

   {{domxref("IDBRequest/success_event", "success")}} 事件处理器会在请求成功返回时运行，意味着数据库已成功打开。如果是这种情况，表示打开的数据库的对象会在 {{domxref("IDBRequest.result", "openRequest.result")}} 属性中提供，允许我们操作数据库。我们将其存储在之前创建的 `db` 变量中以供后续使用。我们还会运行一个名为 `displayData()` 的函数，用于在 HTML 中的 `ul` 元素内显示数据库中的数据。我们现在运行它，以便在页面加载时立即显示数据库中已经存在的笔记。你会在稍后看到 `displayData()` 的定义。

4. 最后，为了完成这一部分，我们将添加可能是设置数据库时最重要的事件处理器：{{domxref("IDBOpenDBRequest/upgradeneeded_event", "upgradeneeded")}}。如果数据库尚未设置，或数据库以比现有存储的数据库更大的版本号打开（进行升级时），该处理器会运行。在你之前的处理器下面添加以下代码：

   ```js
   // 如果尚未设置数据库表，则进行设置
   openRequest.addEventListener("upgradeneeded", (e) => {
     // 获取已打开的数据库的引用
     db = e.target.result;

     // 在我们的数据库中创建一个用于存储笔记和自增键的 objectStore
     // objectStore 类似于关系数据库中的“表”
     const objectStore = db.createObjectStore("notes_os", {
       keyPath: "id",
       autoIncrement: true,
     });

     // 定义 objectStore 将包含的数据项
     objectStore.createIndex("title", "title", { unique: false });
     objectStore.createIndex("body", "body", { unique: false });

     console.log("数据库设置完成");
   });
   ```

   在这里我们定义了数据库的模式（结构）；即它包含的列（或字段）集合。首先，我们从事件的目标 (`e.target.result`) 的 `result` 属性中获取现有数据库的引用，这就是 `request` 对象。这等同于在`成功`事件处理器中的 `db = openRequest.result;`，但我们需要在这里单独进行，因为 `upgradeneeded` 事件处理器（如果需要的话）会在`成功`事件处理器之前运行，这意味着如果我们不这样做，`db` 值将不可用。

   然后，我们使用 {{domxref("IDBDatabase.createObjectStore()")}} 在打开的数据库中创建一个名为 `notes_os` 的新 objectStore。这相当于传统数据库系统中的一个表。我们给它指定了名称 `notes`，并指定了一个 `autoIncrement` 键字段 `id`——在每条新记录中，这个字段会自动分配递增的值——开发者不需要显式设置它。作为键，`id` 字段将用于唯一标识记录，例如在删除或显示记录时。

   我们还使用 {{domxref("IDBObjectStore.createIndex()")}} 方法创建了两个其他索引（字段）：`title`（包含每条笔记的标题）和 `body`（包含笔记的正文内容）。

   设置好这个数据库模式后，当我们开始向数据库中添加记录时，每条记录将表示为类似于以下格式的对象：

   ```json
   {
     "title": "Buy milk",
     "body": "Need both cows milk and soy.",
     "id": 8
   }
   ```

### 添加数据到数据库

现在让我们看一下如何将记录添加到数据库中。这将使用我们页面上的表单完成。

在你之前的事件处理器下面，添加以下一行，它设置了一个 `submit` 事件处理器，当表单被提交时（当提交 {{htmlelement("button")}} 元素被按下导致表单成功提交），运行一个叫做 `addData()` 的函数：

```js
// 创建一个提交事件处理器，当表单提交时运行 addData() 函数
form.addEventListener("submit", addData);
```

现在让我们定义 `addData()` 函数。在你之前的代码下面添加以下内容：

```js
// 定义 addData() 函数
function addData(e) {
  // 阻止默认行为——我们不希望表单以传统方式提交
  e.preventDefault();

  // 获取输入字段中输入的值，并将它们存储在一个对象中，准备插入到数据库中
  const newItem = { title: titleInput.value, body: bodyInput.value };

  // 打开一个读/写事务，准备添加数据
  const transaction = db.transaction(["notes_os"], "readwrite");

  // 调用已添加到数据库中的 objectStore
  const objectStore = transaction.objectStore("notes_os");

  // 发起请求，将我们的 newItem 对象添加到 objectStore 中
  const addRequest = objectStore.add(newItem);

  addRequest.addEventListener("success", () => {
    // 清空表单，为添加下一个条目做好准备
    titleInput.value = "";
    bodyInput.value = "";
  });

  // 在事务完成时报告成功，当所有操作完成后
  transaction.addEventListener("complete", () => {
    console.log("事务完成：数据库修改结束。");

    // 通过再次运行 displayData() 来更新数据的显示，以显示新添加的条目
    displayData();
  });

  transaction.addEventListener("error", () =>
    console.log("事务未成功打开，出现错误"),
  );
}
```

这很复杂；要打破它，我们：

- 在事件对象上运行 {{domxref("Event.preventDefault()")}} 以停止以传统方式实际提交的表单（这将导致页面刷新并破坏体验）。
- 创建一个表示要输入数据库的记录的对象，并使用表单输入中的值填充它。请注意，我们不必明确包含一个 `id` 值——正如我们提前详细说明的那样，这是自动填充的。
- 使用 {{domxref("IDBDatabase.transaction()")}} 方法打开 `notes` 对象存储的 `readwrite` 事务。此事务对象允许我们访问对象存储，以便我们可以对其执行某些操作，例如添加新记录。
- 使用 {{domxref("IDBTransaction.objectStore()")}} 方法访问对象库，将结果保存在 `objectStore` 变量中。
- 使用 {{domxref("IDBObjectStore.add()")}} 添加新记录到数据库。这创建了一个请求对象，与我们之前看到的方式相同。
- 在生命周期的关键点为 `request` 以及 `transaction` 对象添加事件处理器以运行代码。请求成功后，我们会清除表单输入，以便输入下一个笔记。交易完成后，我们再次运行 `displayData()` 函数以更新页面上的笔记显示。

### 显示数据

我们已经在代码中引用了 `displayData()` 两次，所以我们可能更好地定义它。将其添加到你的代码中，位于上一个函数定义之下：

```js
// 定义 displayData() 函数
function displayData() {
  // 每次更新显示时，我们都清空列表元素的内容
  // 如果不这样做，每次添加新笔记时列表中会出现重复项
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // 打开我们的对象存储，然后获取游标——它会迭代存储中的所有数据项
  const objectStore = db.transaction("notes_os").objectStore("notes_os");
  objectStore.openCursor().addEventListener("success", (e) => {
    // 获取游标的引用
    const cursor = e.target.result;

    // 如果还有数据项需要迭代，则继续运行此代码
    if (cursor) {
      // 创建一个列表项、h3 和 p 元素，用于在显示数据项时放置它们
      // 构建 HTML 片段，并将其附加到列表中
      const listItem = document.createElement("li");
      const h3 = document.createElement("h3");
      const para = document.createElement("p");

      listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);

      // 将游标中的数据放入 h3 和 para 中
      h3.textContent = cursor.value.title;
      para.textContent = cursor.value.body;

      // 将数据项的 ID 存储在 listItem 的一个属性中，以便我们知道
      // 这项数据对应哪个条目。这在稍后删除条目时会很有用
      listItem.setAttribute("data-note-id", cursor.value.id);

      // 创建一个按钮，并将其放置在每个 listItem 中
      const deleteBtn = document.createElement("button");
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = "删除";

      // 设置事件处理器，当按钮被点击时，运行 deleteItem() 函数
      deleteBtn.addEventListener("click", deleteItem);

      // 迭代到游标中的下一个项
      cursor.continue();
    } else {
      // 如果列表为空，则显示“没有存储的笔记”消息
      if (!list.firstChild) {
        const listItem = document.createElement("li");
        listItem.textContent = "没有存储的笔记。";
        list.appendChild(listItem);
      }
      // 如果没有更多的游标项需要迭代，说明所有笔记都已显示
      console.log("所有笔记已显示");
    }
  });
}
```

再次，让我们打破这个：

- 首先，我们清空 [`<ul>`](/zh-CN/docs/Web/HTML/Reference/Elements/ul) 元素的内容，然后填充更新的内容。如果你不这样做，那么每次更新时都会添加大量重复内容。
- 接下来，我们 `notes` 使用 [`IDBDatabase.transaction()`](/zh-CN/docs/Web/API/IDBDatabase/transaction) 和 [`IDBTransaction.objectStore()`](/zh-CN/docs/Web/API/IDBTransaction/objectStore) 我们一样得到对象存储的引用 `addData()`，除了这里我们将它们链接在一行中。
- 下一步是使用 [`IDBObjectStore.openCursor()`](/zh-CN/docs/Web/API/IDBObjectStore/openCursor) 方法打开对游标的请求——这是一个可用于迭代对象存储中的记录的构造。我们将一个 `onsuccess` 处理器链接到该行的末尾以使代码更简洁——当成功返回游标时，运行处理器。
- 我们 [`IDBCursor`](/zh-CN/docs/Web/API/IDBCursor) 使用 let 获取对游标本身（对象）的引用 `cursor = e.target.result`。
- 接下来，我们检查光标是否包含来自数据存储区（`if(cursor){ ... }`）的记录——如果包含，我们创建一个 DOM 片段，用记录中的数据填充它，然后将其插入页面（`<ul>` 元素内部）。我们还包括一个删除按钮，当单击该按钮时，将通过运行 `deleteItem()` 函数删除该笔记（我们将在下一节中查看）。
- 在 `if` 块结束时，我们使用该 [`IDBCursor.continue()`](/zh-CN/docs/Web/API/IDBCursor/continue) 方法将光标前进到数据存储区中的下一条记录，然后`if`再次运行块的内容。如果有另一个要迭代的记录，这会导致它被插入到页面中，然后 `continue()` 再次运行，依此类推。
- 当没有更多记录要迭代时，`cursor` 将返回 `undefined`，因此 `else` 块将运行（而不是 `if` 块）。此块检查是否有任何笔记被插入 `<ul>`——如果没有，它会插入一条消息，说没有存储的笔记。

### 删除一条笔记

如上所述，当按下笔记的删除按钮时，笔记将被删除。这是通过 `deleteItem()` 函数实现的，如下所示：

```js
// 定义 deleteItem() 函数
function deleteItem(e) {
  // 获取要删除的任务的 ID。我们需要将其转换为数字，因为在 IDB 中使用时
  // IDB 键值对对类型敏感。
  const noteId = Number(e.target.parentNode.getAttribute("data-note-id"));

  // 打开一个数据库事务并删除任务，使用我们上面检索到的 ID 查找它
  const transaction = db.transaction(["notes_os"], "readwrite");
  const objectStore = transaction.objectStore("notes_os");
  const deleteRequest = objectStore.delete(noteId);

  // 报告数据项已被删除
  transaction.addEventListener("complete", () => {
    // 删除按钮的父元素
    // 也就是列表项，使其不再显示
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log(`笔记 ${noteId} 已删除。`);

    // 如果列表为空，则显示“没有存储的笔记”消息
    if (!list.firstChild) {
      const listItem = document.createElement("li");
      listItem.textContent = "没有存储的笔记。";
      list.appendChild(listItem);
    }
  });
}
```

- 第一部分可以使用一些解释——我们检索要删除 `Number(e.target.parentNode.getAttribute('data-note-id'))` 的记录的 ID——回想一下记录的 ID 是在第一次显示时保存在 `data-note-id` 属性中的 `<li>`。但是，我们需要通过全局内置的 [`Number()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 对象传递属性，因为它当前是一个字符串，否则将无法被数据库识别。
- 然后，我们使用我们之前看到的相同模式获取对对象存储的引用，并使用该 [`IDBObjectStore.delete()`](/zh-CN/docs/Web/API/IDBObjectStore/delete) 方法从数据库中删除记录，并将 ID 传递给它。
- 当数据库事务完成后，我们从 DOM 中删除笔记的 `<li>`，然后再次检查以查看 `<ul>` 是否为空，并根据需要插入笔记。

就是这样了！你的例子现在应该有效。

如果你遇到问题，请随时[查看我们的实例](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/)（请参阅[源代码](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.js)）。

### 通过 IndexedDB 存储复杂数据

如上所述，IndexedDB 可用于存储不仅仅是简单的文本字符串。你可以存储任何你想要的东西，包括复杂的对象，如视频或图像 blob。并且它比任何其他类型的数据更难实现。

为了演示如何操作，我们编写了另一个名为 [IndexedDB 视频存储](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/indexeddb/video-store)的（也可[在线运行](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)）。首次运行示例时，它会从网络下载所有视频，将它们存储在 IndexedDB 数据库中，然后在 UI 内部 [`<video>`](/zh-CN/docs/Web/HTML/Reference/Elements/video) 元素中显示视频。第二次运行它时，它会在数据库中找到视频并从那里获取它们而不是显示它们——这使得后续加载更快，占用空间更少。

让我们来看看这个例子中最有趣的部分。我们不会全部看——它的很多内容与上一个示例类似，代码注释得很好。

1. 对于这个简单的例子，我们已经存储了视频的名称以获取数组对象：

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

2. 首先，一旦数据库成功打开，我们就运行 `init()` 函数。这会遍历不同的视频名称，尝试加载由 `videos` 数据库中的每个名称标识的记录。

   如果在数据库中找到每个视频（通过查看 `request.result` 评估是否容易检查 `true`——如果记录不存在，那么 `undefined`），视频文件（存储为 blob）和视频名称将直接传递给 `displayVideo()` 函数以放置它们在用户界面中。如果没有，视频名称将传递给 `fetchVideoFromNetwork()` 函数……你猜对了——从网络中获取视频。

   ```js
   function init() {
     // 逐个遍历视频名称
     for (const video of videos) {
       // 打开事务，获取对象存储，并通过名称获取每个视频
       const objectStore = db.transaction("videos_os").objectStore("videos_os");
       const request = objectStore.get(video.name);
       request.addEventListener("success", () => {
         // 如果结果存在于数据库中（不是 undefined）
         if (request.result) {
           // 从 IDB 获取视频并使用 displayVideo() 显示它们
           console.log("从 IDB 获取视频");
           displayVideo(
             request.result.mp4,
             request.result.webm,
             request.result.name,
           );
         } else {
           // 从网络获取视频
           fetchVideoFromNetwork(video);
         }
       });
     }
   }
   ```

3. 以下片段是从内部 `fetchVideoFromNetwork()` 获取的——这里我们使用两个单独的 [`fetch()`](/zh-CN/docs/Web/API/Window/fetch) 请求获取视频的 MP4 和 WebM 版本。然后，我们使用 [`Body.blob()`](/zh-CN/docs/Web/API/Blob) 方法将每个响应的主体提取为 blob，为我们提供可以在以后存储和显示的视频的对象表示。

   我们在这里遇到了一个问题——这两个请求都是异步的，但我们只想在两个 promise 都兑现时尝试显示或存储视频。幸运的是，有一种处理这种问题的内置方法——{{jsxref("Promise.all()")}}。这需要一个参数——引用你要检查放置在数组中的所有 promise 的兑现状态——并返回一个会在所有单独的 promise 都兑现时兑现的 promise。

   在 promise 的 `then()` 处理器中，我们像之前一样调用 `displayVideo()` 函数以在 UI 中显示视频，然后我们也调用 `storeVideo()` 函数将这些视频存储在数据库中。

   ```js
   // 使用 fetch() 函数获取视频的 MP4 和 WebM 版本，
   // 然后将其响应体作为 blob 公开
   const mp4Blob = fetch(`videos/${video.name}.mp4`).then((response) =>
     response.blob(),
   );
   const webmBlob = fetch(`videos/${video.name}.webm`).then((response) =>
     response.blob(),
   );

   // 只有在两个 Promise 都完成后才运行下一段代码
   Promise.all([mp4Blob, webmBlob]).then((values) => {
     // 使用 displayVideo() 显示从网络获取的视频
     displayVideo(values[0], values[1], video.name);
     // 使用 storeVideo() 将视频存储到 IDB 中
     storeVideo(values[0], values[1], video.name);
   });
   ```

4. 我们首先看一下 `storeVideo()`。这与你在上一个示例中看到的用于向数据库添加数据的模式非常相似——我们打开一个 `readwrite` 事务并获取 `videos_os` 对象存储的引用，创建一个表示要添加到数据库的记录的对象，然后使用 {{domxref("IDBObjectStore.add()")}} 添加它。

   ```js
   // 定义 storeVideo() 函数
   function storeVideo(mp4, webm, name) {
     // 打开事务，获取对象存储；将其设置为 readwrite，以便我们可以写入 IDB
     const objectStore = db
       .transaction(["videos_os"], "readwrite")
       .objectStore("videos_os");

     // 使用 add() 将记录添加到 IDB 中
     const request = objectStore.add({ mp4, webm, name });

     request.addEventListener("success", () => console.log("记录添加尝试完成"));
     request.addEventListener("error", () => console.error(request.error));
   }
   ```

5. 最后，我们的 `displayVideo()` 用于创建在 UI 中插入视频然后将它们附加到页面所需的 DOM 元素。最有趣的部分如下所示——要在 `<video>` 元素中实际显示我们的视频 blob，我们需要使用 {{domxref("URL/createObjectURL_static", "URL.createObjectURL()")}} 方法创建对象 URL（指向存储在内存中的视频 blob 的内部 URL）。完成后，我们可以将对象 URL 设置为 {{htmlelement("source")}} 元素 `src` 属性的值，并且它可以正常工作。

```js
// 定义 displayVideo() 函数
function displayVideo(mp4Blob, webmBlob, title) {
  // 从 blobs 创建对象 URL
  const mp4URL = URL.createObjectURL(mp4Blob);
  const webmURL = URL.createObjectURL(webmBlob);

  // 创建 DOM 元素以将视频嵌入到页面中
  const article = document.createElement("article");
  const h2 = document.createElement("h2");
  h2.textContent = title;
  const video = document.createElement("video");
  video.controls = true;
  const source1 = document.createElement("source");
  source1.src = mp4URL;
  source1.type = "video/mp4";
  const source2 = document.createElement("source");
  source2.src = webmURL;
  source2.type = "video/webm";

  // 将 DOM 元素嵌入到页面中
  section.appendChild(article);
  article.appendChild(h2);
  article.appendChild(video);
  video.appendChild(source1);
  video.appendChild(source2);
}
```

## 离线文件存储

上面的示例已经说明了如何创建一个将大型资产存储在 IndexedDB 数据库中的应用程序，从而无需多次下载它们。这已经是对用户体验的一个很大的改进，但仍然有一件事——每次访问网站时仍然需要下载主要的 HTML、CSS 和 JavaScript 文件，这意味着当没有网络连接时，它将无法工作。

![Firefox 离线屏幕，左侧有一幅卡通角色的插图，该角色右手拿着一个两脚插头，左手拿着一个两脚插座。右侧有一个“离线模式”消息和一个标记为“再试一次”的按钮。](ff-offline.png)

这就是 [service worker](/zh-CN/docs/Web/API/Service_Worker_API) 和密切相关的 [Cache API](/zh-CN/docs/Web/API/Cache) 的用武之地。

service worker 是再被浏览器访问时针对特定来源（网站或某个域的网站的一部分）进行注册的 JavaScript 文件。注册后，它可以控制该来源的可用页面。它通过坐在加载的页面和网络之间以及拦截针对该来源的网络请求来实现这一点。

当它拦截一个请求时，它可以做任何你想做的事情（参见[用例思路](/zh-CN/docs/Web/API/Service_Worker_API#其他使用场景)），但经典的例子是离线保存网络响应，然后提供响应请求而不是来自网络的响应。实际上，它允许你使网站完全脱机工作。

Cache API 是另一种客户端存储机制，略有不同——它旨在保存 HTTP 响应，因此与 service worker 一起工作得非常好。

### service worker 示例

让我们看一个例子，让你对这可能是什么样子有所了解。我们已经创建了另一个版本的视频存储示例，我们在上一节中看到了——这个功能完全相同，只是它还通过 service worker 将 Cache、CSS 和 JavaScript 保存在 Cache API 中，允许示例脱机运行！

请参阅 [IndexedDB 视频存储，service worker 在其中运行](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/)，并且还可以[查看源代码](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline)。

#### 注册 service worker

首先要注意的是，在主 JavaScript 文件中放置了一些额外的代码（请参阅 [index.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)）。首先，我们进行特性检测测试，以查看 `serviceWorker` 的 [`Navigator`](/zh-CN/docs/Web/API/Navigator) 对象中是否有该成员。如果返回 true，那么我们知道至少支持 service worker 的基础知识。在这里，我们使用该 {{domxref("ServiceWorkerContainer.register()")}} 方法将 `sw.js` 文件中包含的 service worker 注册到它所驻留的源，因此它可以控制与它或子目录相同的目录中的页面。当其 promise 兑现时，service worker 被视为已注册。

```js
// 注册 service worker 以控制使网站离线工作
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(
      "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js",
    )
    .then(() => console.log("已注册 service worker"));
}
```

> [!NOTE]
> `sw.js` 文件的给定路径是相对于站点源的，而不是包含代码的 JavaScript 文件。service worker 在 `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`。来源是 `https://mdn.github.io`，因此给定的路径必须是 `/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`。如果你想在自己的服务器上托管此示例，则必须相应地更改此示例。这是相当令人困惑的，但出于安全原因，它必须以这种方式工作。

#### 安装 service worker

下次访问 service worker 控制下的任何页面时（例如，重新加载示例时），将针对该页面安装 service worker，这意味着它将开始控制它。发生这种情况时，`install` 会向 service worker 发起一个事件；你可以在 service worker 本身内编写代码来响应安装。

让我们看一下 [sw.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js) 文件（service worker）中的一个例子。你将看到 install 监听器是注册到 `self` 上的。`self` 关键字是一种从 service worker 文件内部引用 service worker 的全局作用域的方法。

在 `install` 处理器内部，我们使用 {{domxref("ExtendableEvent.waitUntil()")}} 事件对象上可用的方法来表示浏览器不应该完成 service worker 的安装，直到其中的 promise 成功兑现。

这是我们在运行中看到 Cache API 的地方。我们使用该 {{domxref("CacheStorage.open()")}} 方法打开一个可以存储响应的新缓存对象（类似于 IndexedDB 对象存储）。该 promise 以表示 `video-store` 缓存的 {{domxref("Cache")}} 对象来兑现。然后，我们使用该 {{domxref("Cache.addAll()")}} 方法获取一系列资产并将其响应添加到缓存中。

```js
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("video-store")
      .then((cache) =>
        cache.addAll([
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css",
        ]),
      ),
  );
});
```

这就是现在，安装完成。

#### 响应未来的请求

在我们的 HTML 页面上注册并安装了 service worker，并且所有相关资产都添加到我们的缓存中，我们几乎准备好了。还有一件事要做，写一些代码来响应进一步的网络请求。

这就是第二位代码的 `sw.js` 作用。我们向 service worker 全局作用域添加另一个监听器，会在 `fetch` 引发事件时运行处理函数。只要浏览器在 service worker 注册的目录中请求资产，就会发生这种情况。

在处理器内部，我们首先记录所请求资产的 URL。然后，我们使用 {{domxref("FetchEvent.respondWith()")}} 方法为请求提供自定义响应。

在这个块中，我们使用 {{domxref("CacheStorage.match()")}} 来检查是否可以在任何缓存中找到匹配的请求（即匹配 URL）。如果找到匹配，promise 以匹配的响应兑现，如果未找到，则兑现 `undefined`。

如果找到匹配项，我们只需将其作为自定义响应返回。如果没有，我们从网络中 [fetch()](/zh-CN/docs/Web/API/Window/fetch) 响应并返回该响应。

```js
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
```

这就是我们的 service worker。你可以使用它们处理更多的负载——有关详细信息，请参阅 [service worker 手册](https://github.com/mdn/serviceworker-cookbook/)。感谢 Paul Kinlan 的[为你的 Web 应用程序添加 service worker 和离线浏览](https://developers.google.cn/codelabs/pwa-training/pwa03--going-offline#0)一文给予这一简单示例的启发。

#### 测试离线示例

要测试我们的 [service worker 示例](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/)，你需要加载它几次以确保它已安装。完成后，你可以：

- 尝试拔掉网络连接/关闭 Wifi。
- 如果你使用的是 Firefox，请选择*文件>脱机工作*。
- 转到开发者工具，然后选择*应用 > Service Workers*，如果你使用的是 Chrome，请选中*离线*。

如果再次刷新示例页面，你仍应该看到它加载得很好。所有内容都是脱机存储的——缓存中的页面资源以及 IndexedDB 数据库中的视频。

## 总结

现在就是这些。我们希望你能感觉到我们对客户端存储技术的介绍很有用。

## 参见

- [Web 存储 API](/zh-CN/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API)
- [Cookie](/zh-CN/docs/Web/HTTP/Guides/Cookies)
- [Service worker API](/zh-CN/docs/Web/API/Service_Worker_API)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}
