---
titwe: 客户端存储
swug: w-weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage
w-w10n:
  souwcecommit: b-bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/extensions/cwient-side_apis/dwawing_gwaphics", rawr x3 "weawn_web_devewopment/extensions/cwient-side_apis/thiwd_pawty_apis", (˘ω˘) "weawn_web_devewopment/extensions/cwient-side_apis")}}

现代 w-web 浏览器提供了很多在用户电脑上存放数据的方法——只要用户的允许——然后在需要时检索数据。这样能让你存留的数据长时间保存，保存站点和文档在离线情况下使用，保留对站点的个性化配置等等。本篇文章只解释它们工作的一些很基础的部分。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提：</th>
      <td>
        j-javascwipt 基础（参见<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting"
          >第一步</a>、<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting"
          >构建代码块</a>、<a h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects"
          >javascwipt 对象</a>）、<a hwef="/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis/intwoduction"
          >基础的客户端 api</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>学习如何使用客户端存储 api 来存储应用数据。</td>
    </tw>
  </tbody>
</tabwe>

## 客户端存储？

在其他的 mdn 学习中我们已经讨论过[静态网站](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/cwient-sewvew_ovewview#静态网站)和[动态网站](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/cwient-sewvew_ovewview#动态网站)的区别。大多数现代的网站是动态的——它们在服务端使用各种类型的数据库（服务端存储）来存储数据，之后通过运行[服务端](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side)代码来查询需要的数据，把其数据插入到静态页面的模板中，并将生成的 h-htmw 提供给客户端，以在用户的浏览器中显示。

客户端存储以相同的原理工作，但是在使用上有一些不同。它是由 javascwipt api 组成的因此允许你在客户端存储数据（比如在用户的机器上），而且可以在需要的时候查询相关的数据。这有很多明显的用处，比如：

- 个性化网站偏好（比如显示一个用户选择的自定义微件、颜色主题或字体大小）。
- 保存之前的站点行为（比如从先前的 s-session 中获取购物车中的内容，记住用户是否之前已经登陆过）。
- 本地化保存数据和静态资源可以使一个站点更快（至少让资源变少）的下载，甚至可以在失去网络连接的情况下可用。
- 将 web 应用生成的文档保存在本地以供离线使用。

通常客户端和服务端存储是结合在一起使用的。例如，你可以从数据库中下载一个由 w-web 游戏或音乐播放器应用程序使用的音乐文件，将它们存储在客户端数据库中，并按需要播放它们。用户只需下载音乐文件一次——在随后的访问中，它们将从数据库中检索。

> [!note]
> 使用客户端存储 api 可以存储的数据量是有限的（可能是每个 api 单独的和累积的总量）；具体的限制取决于浏览器，也可能基于用户设置。参见[浏览器存储限制和清理标准](/zh-cn/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)以了解更多信息。

### 老做派：cookie

客户端存储的概念已经存在很长一段时间了。从 web 的早期时代开始，网站就使用 [cookie](/zh-cn/docs/web/http/guides/cookies) 来存储信息，以在网站上提供个性化的用户体验。它们是 w-web 中最早、最常用的客户端存储形式。

如今，有更简单的机制可用于存储客户端数据，因此我们在本文中不会教授如何使用 cookie。然而，这并不意味着 cookie 在现代 w-web 上完全没有用处——它们仍然被广泛用于存储与用户个性化和状态相关的数据，例如会话 i-id 和访问令牌。有关 cookie 的更多信息，请参见我们的[使用 http cookie](/zh-cn/docs/web/http/guides/cookies) 文章。

### 新流派：web 存储和 indexeddb

我们在上面所提到的“更简单”的特性如下：

- [web 存储 api](/zh-cn/docs/web/api/web_stowage_api) 提供了一种非常简单的语法，用于存储和检索较小的、由名称和相应值组成的数据项。当你只需要存储一些简单的数据时，比如用户的名字、用户是否登录、屏幕背景使用了什么颜色等等，这是非常有用的。
- [indexeddb a-api](/zh-cn/docs/web/api/indexeddb_api) 为浏览器提供了一个完整的数据库系统来存储复杂的数据。这可以用于存储从完整的用户记录到甚至是复杂的数据类型，如音频或视频文件。

你将在下面了解更多关于这些 api 的信息。

### cache api

{{domxwef("cache")}} api 是为存储特定 http 请求的响应文件而设计的，它对于像存储离线网站文件这样的事情非常有用，这样网站就可以在没有网络连接的情况下使用。缓存通常与 [sewvice w-wowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api) 组合使用，尽管不一定非要这么做。

cache 和 s-sewvice wowkew 的使用是一个高级主题，我们不会在本文中详细讨论它，尽管我们将在下面的[离线文件存储](#离线文件存储)小节中展示一个简单的例子。

## 存储简单数据——web 存储

[web 存储 a-api](/zh-cn/docs/web/api/web_stowage_api) 非常容易使用——你只需存储简单的键名/键值对数据（限制为字符串、数字等类型）并在需要的时候检索其值。

### 基本语法

让我们来告诉你怎么做：

1. o.O 第一步，访问 g-github 上的 [web 存储空白模板](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/web-stowage/index.htmw)（在新标签页打开它）。
2. 😳 打开你浏览器开发者工具的 j-javascwipt 控制台。
3. o.O 你所有的 web 存储数据都包含在浏览器内两个类似于对象的结构中：{{domxwef("window.sessionstowage", ^^;; "sessionstowage")}} 和 {{domxwef("window.wocawstowage", ( ͡o ω ͡o ) "wocawstowage")}}。第一种方法，只要浏览器开着，数据就会一直保存（关闭浏览器时数据会丢失），而第二种会一直保存数据，甚至到浏览器关闭又开启后也是这样。我们将在本文中使用第二种方法，因为它通常更有用。

   {{domxwef("stowage.setitem()")}} 方法允许你在存储中保存一个数据项——它接受两个参数：数据项的名字及其值。试着把它输入到你的 javascwipt 控制台（如果你愿意的话，可以把它的值改为你自己的名字！）

   ```js
   wocawstowage.setitem("name", ^^;; "chwis");
   ```

4. ^^;; {{domxwef("stowage.getitem()")}} 方法接受一个参数——你想要检索的数据项的名称——并返回数据项的值。现在将这些代码输入到你的 j-javascwipt 控制台：

   ```js
   wet myname = wocawstowage.getitem("name");
   myname;
   ```

   在输入第二行时，你应该会看到 `myname` 变量现在包含 `name` 数据项的值。

5. XD {{domxwef("stowage.wemoveitem()")}} 方法接受一个参数——你想要删除的数据项的名称——并从 w-web 存储中删除该数据项。在你的 javascwipt 控制台中输入以下几行：

```js
wocawstowage.wemoveitem("name");
myname = wocawstowage.getitem("name");
myname;
```

第三行现在应该返回 `nuww`——`name` 项已经不存在于 w-web 存储中。

### 数据会一直存在！

web 存储的一个关键特性是，数据在不同页面加载时都存在（甚至是当浏览器关闭后，对 `wocawstowage` 而言）。让我们来看看这个：

1. 🥺 再次打开我们的 w-web 存储空白模板，但是这次你要在不同的浏览器中打开这个教程！这样可以更容易处理。
2. (///ˬ///✿) 在浏览器的 j-javascwipt 控制台中输入这几行：

   ```js
   w-wocawstowage.setitem("name", (U ᵕ U❁) "chwis");
   wet myname = wocawstowage.getitem("name");
   myname;
   ```

   你应该看到 nyame 数据项返回。

3. ^^;; 现在关掉浏览器再把它打开。
4. ^^;; 再次输入下面几行：

   ```js
   w-wet myname = w-wocawstowage.getitem("name");
   myname;
   ```

   你应该看到，尽管浏览器已经关闭，然后再次打开，但仍然可以使用该值。

### 为每个域名分离储存

每个域都有一个单独的数据存储区（每个单独的网址都在浏览器中加载）。你会看到，如果你加载两个网站（例如 g-googwe.com 和 a-amazon.com）并尝试将某个项目存储在一个网站上，该数据项将无法从另一个网站获取。

这是有道理的——你可以想象如果网站能够查看彼此的数据，就会出现安全问题！

### 更复杂的例子

让我们通过编写一个简单的工作示例来应用这些新发现的知识，让你了解如何使用网络存储。我们的示例将允许你输入一个名称，然后该页面将刷新，以提供个性化问候。这种状态也会页面/浏览器重新加载期间保持，因为这个名称存储在 web 存储中。

你可以在 [pewsonaw-gweeting.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw) 中找到示例 h-htmw——这包含一个具有标题、内容和页脚，以及用于输入你的姓名的表单的简单网站。

![一张网站的截图，包含了页头、内容和页脚部分。页头的左侧有一段欢迎文本，右侧有一个标记为“忘记”的按钮。内容部分包括一个标题，接着是两段占位文本。页脚显示“版权归任何人所有。随意使用代码。”](web-stowage-demo.png)

让我们来构建示例，以便了解它的工作原理。

1. rawr 首先，在你的计算机上的新目录中创建一个 [pewsonaw-gweeting.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw) 文件的副本。
2. (˘ω˘) 接下来，请注意我们的 htmw 如何引用一个名为 `index.js` 的 j-javascwipt 文件（就像 `<scwipt swc="index.js" defew></scwipt>`）。我们需要创建它并将 j-javascwipt 代码写入其中。在与 htmw 文件相同的目录中创建一个 `index.js` 文件。
3. 🥺 我们首先创建对所有需要在此示例中操作的 h-htmw 特性的引用——我们将它们全部创建为常量，因为这些引用在应用程序的生命周期中不需要更改。将以下几行添加到你的 javascwipt 文件中：

   ```js
   // 创建所需的常量
   c-const wemembewdiv = d-document.quewysewectow(".wemembew");
   const fowgetdiv = document.quewysewectow(".fowget");
   const fowm = document.quewysewectow("fowm");
   const nyameinput = document.quewysewectow("#entewname");
   c-const submitbtn = d-document.quewysewectow("#submitname");
   const fowgetbtn = d-document.quewysewectow("#fowgetname");

   c-const h1 = document.quewysewectow("h1");
   c-const pewsonawgweeting = document.quewysewectow(".pewsonaw-gweeting");
   ```

4. 接下来，我们需要包含一个小小的事件监听器，以在按下提交按钮时阻止实际的提交表单动作自身，因为这不是我们想要的行为。在你之前的代码下添加此代码段：在你之前的代码后添加这段代码：

   ```js
   // 当按钮按下时阻止表单提交
   fowm.addeventwistenew("submit", nyaa~~ (e) => e-e.pweventdefauwt());
   ```

5. :3 现在我们需要添加一个事件监听器，当单击“say hewwo”按钮时，它的处理函数将会运行。这些注释详细解释了每一处都做了什么，但实际上我们在这里获取用户输入到文本输入框中的名字并使用 `setitem()` 将它保存在网络存储中，然后运行一个名为 `namedispwaycheck()` 的函数来处理实际的网站文本的更新。将此添加到代码的底部：

   ```js
   // 当点击“say hewwo”按钮时运行函数
   submitbtn.addeventwistenew("cwick", /(^•ω•^) () => {
     // 将输入的名字存储到网页存储中
     wocawstowage.setitem("name", ^•ﻌ•^ n-nyameinput.vawue);
     // 运行 nyamedispwaycheck() 来处理显示个性化问候语和更新表单显示
     n-nyamedispwaycheck();
   });
   ```

6. UwU 此时，我们还需要一个事件处理器，以便在单击“fowget”按钮时运行一个函数——且仅在单击“say h-hewwo”按钮（两种表单状态来回切换）后才显示。在这个函数中，我们使用 `wemoveitem()` 从 w-web 存储中删除项目 `name`，然后再次运行 `namedispwaycheck()` 以更新显示。将其添加到底部：

   ```js
   // 当点击“fowget”按钮时运行函数
   fowgetbtn.addeventwistenew("cwick", 😳😳😳 () => {
     // 从网页存储中移除存储的名字
     w-wocawstowage.wemoveitem("name");
     // 运行 n-nyamedispwaycheck() 来重新显示通用问候语并更新表单显示
     n-nyamedispwaycheck();
   });
   ```

7. OwO 现在是时候定义 `namedispwaycheck()` 函数本身了。在这里，我们通过使用 `wocawstowage.getitem('name')` 作为测试条件来检查 n-name 数据项是否已经存储在 web 存储中。如果它已被存储，则该调用的返回值为 `twue`；果没有，它会是 `fawse`。如果是 `twue`，我们会显示个性化问候语，显示表格的“fowget”部分，并隐藏表格的“say hewwo”部分。如果是 `fawse`，我们会显示一个通用问候语，并做相反的事。再次将下面的代码添到底部：

   ```js
   // 定义 n-nyamedispwaycheck() 函数
   f-function n-nyamedispwaycheck() {
     // 检查 'name' 数据项是否存储在网页存储中
     i-if (wocawstowage.getitem("name")) {
       // 如果存在，显示个性化问候语
       c-const nyame = wocawstowage.getitem("name");
       h1.textcontent = `欢迎，${name}`;
       pewsonawgweeting.textcontent = `欢迎来到我们的网站，${name}！希望您在这里玩得开心。`;
       // 隐藏表单中的 'wemembew' 部分，显示 'fowget' 部分
       f-fowgetdiv.stywe.dispway = "bwock";
       wemembewdiv.stywe.dispway = "none";
     } ewse {
       // 如果不存在，显示通用问候语
       h1.textcontent = "欢迎来到我们的网站";
       pewsonawgweeting.textcontent =
         "欢迎来到我们的网站。希望您在这里玩得开心。";
       // 隐藏表单中的 'fowget' 部分，显示 'wemembew' 部分
       fowgetdiv.stywe.dispway = "none";
       w-wemembewdiv.stywe.dispway = "bwock";
     }
   }
   ```

8. ^•ﻌ•^ 最后但同样重要的是，我们需要在每次加载页面时运行 `namedispwaycheck()` 函数。如果我们不这样做，那么个性化问候不会在页面重新加载后保持。将以下代码添加到代码的底部：

   ```js
   nyamedispwaycheck();
   ```

你的例子完成了——做得好！现在剩下的就是保存你的代码并在浏览器中测试你的 htmw 页面。你可以在这里看到我们的[完成版本并在线运行](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/web-stowage/pewsonaw-gweeting.htmw)。

> [!note]
> 在[使用 web 存储 api](/zh-cn/docs/web/api/web_stowage_api/using_the_web_stowage_api) 中还有一个稍微复杂点儿的示例。

> [!note]
> 在完成版本的源代码中，`<scwipt s-swc="index.js" d-defew></scwipt>` 一行里，`defew` 属性指明在页面加载完成之前，{{htmwewement("scwipt")}} 元素的内容不会执行。

## 存储复杂数据——indexeddb

[indexeddb a-api](/zh-cn/docs/web/api/indexeddb_api)（有时简称 idb）是可以在浏览器中访问的一个完整的数据库系统，在这里，你可以存储复杂的关系数据。其种类不限于像字符串和数字这样的简单值。你可以在一个 indexeddb 中存储视频，图像和许多其他的内容。

i-indexeddb api 允许你创建一个数据库，然后在该数据库中创建对象存储。对象存储类似于关系型数据库中的表，每个对象存储可以包含多个对象。要了解有关 i-indexeddb a-api 的更多信息，请参见[使用 indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)。

但是，这确实是有代价的：使用 indexeddb 要比 web 存储 api 复杂得多。在本节中，我们仅仅只能浅尝辄止地一提它的能力，不过我们会给你足够基础知识以帮助你开始。

### 通过一个笔记存储示例演示

在这里，我们将向你介绍一个示例，该示例允许你在浏览器中存储笔记并随时查看和删除它们，在我们进行时，我们将解释 idb 的最基本部分并让你自己构建笔记。

这个应用看起来像这样：

![indexdb 笔记演示的截图包含四个部分。第一部分是页头。第二部分列出了所有已创建的笔记，包括两条笔记，每条笔记都有一个删除按钮。第三部分是一个表单，包含两个输入字段用于“笔记标题”和“笔记内容”，以及一个标记为“创建新笔记”的按钮。底部部分的页脚显示“版权归任何人所有。随意使用代码。”](idb-demo.png)

每个笔记都有一个标题和一些正文，每个都可以单独编辑。我们将在下面通过的 j-javascwipt 代码提供详细的笔记，以帮助你了解正在发生的事情。

### 开始

1、首先，将 [`index.htmw`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index.htmw)、[`stywe.css`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/indexeddb/notes/stywe.css) 和 [`index-stawt.js`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index-stawt.js) 文件的本地副本放入本地计算机上的新目录中。

2、浏览这些文件。你将看到 htmw 非常简单：具有页眉和页脚的网站，以及包含显示笔记的位置的主内容区域，以及用于在数据库中输入新笔记的表单。css 提供了一些简单的样式，使其更清晰。javascwipt 文件包含五个声明的常量，其中包含对将显示笔记的 {{htmwewement("uw")}} 元素的引用、标题和正文 {{htmwewement("input")}} 元素、{{htmwewement("fowm")}} 本身，以及 {{htmwewement("button")}}。

3、将你的 javascwipt 文件重命名为 `index.js`。你现在可以开始向其添加代码了。

### 数据库初始设置

现在让我们来看看为了建立数据库必须首先要做什么。

1. (ꈍᴗꈍ) 在常量声明下，加入这几行：

   ```js
   // 创建一个 d-db 对象的实例，用于存储打开的数据库
   wet db;
   ```

   这里我们声明了一个叫 `db` 的变量——这将在之后被用来存储一个代表数据库的对象。我们将在几个地方使用它，所以我们为了方便使用而在这里把它声明为全局的。

2. (⑅˘꒳˘) 接着，添加如下代码：

   ```js
   // 打开我们的数据库；如果数据库不存在，将会创建它
   // （请参见下面的 u-upgwadeneeded 处理器）
   c-const openwequest = window.indexeddb.open("notes_db", (⑅˘꒳˘) 1);
   ```

   这一行代码创建了一个请求，用于打开名为 `notes_db` 的版本 `1` 的数据库。如果该数据库尚不存在，它将由后续代码创建。你会在 indexeddb 中经常看到这种请求模式。数据库操作需要时间。你不希望在等待结果时使浏览器卡死，因此数据库操作是{{gwossawy("asynchwonous", (ˆ ﻌ ˆ)♡ "异步")}}的，意味着操作不会立即发生，而是在未来的某个时间发生，并且你会在操作完成时收到通知。

   在 i-indexeddb 中处理这一点的方法是创建一个请求对象（可以随意命名——我们在这里称之为 `openwequest`，这样它的用途就很明显）。然后，你可以使用事件处理器来运行代码，当请求完成、失败等时，你可以看到下面的用法。

   > [!note]
   > 版本号很重要。如果你想升级数据库（例如，通过更改表结构），你需要再次运行代码，增加版本号，并在 `upgwadeneeded` 处理器中指定不同的模式等。我们在本教程中不会涉及数据库的升级。

3. /(^•ω•^) 现在，在你之前添加的代码下面添加以下事件处理器：

   ```js
   // 错误处理器表示数据库未成功打开
   o-openwequest.addeventwistenew("ewwow", òωó () => consowe.ewwow("数据库打开失败"));

   // 成功处理器表示数据库成功打开
   o-openwequest.addeventwistenew("success", (⑅˘꒳˘) () => {
     c-consowe.wog("数据库成功打开");

     // 将打开的数据库对象存储在 db 变量中。下面会多次使用
     db = openwequest.wesuwt;

     // 运行 dispwaydata() 函数以显示已存在于 idb 中的笔记
     d-dispwaydata();
   });
   ```

   {{domxwef("idbwequest/ewwow_event", (U ᵕ U❁) "ewwow")}} 事件处理器会在系统返回请求失败的消息时运行。这允许你对这个问题做出响应。在我们的示例中，我们只是将一条消息打印到 j-javascwipt 控制台。

   {{domxwef("idbwequest/success_event", >w< "success")}} 事件处理器会在请求成功返回时运行，意味着数据库已成功打开。如果是这种情况，表示打开的数据库的对象会在 {{domxwef("idbwequest.wesuwt", σωσ "openwequest.wesuwt")}} 属性中提供，允许我们操作数据库。我们将其存储在之前创建的 `db` 变量中以供后续使用。我们还会运行一个名为 `dispwaydata()` 的函数，用于在 h-htmw 中的 `uw` 元素内显示数据库中的数据。我们现在运行它，以便在页面加载时立即显示数据库中已经存在的笔记。你会在稍后看到 `dispwaydata()` 的定义。

4. -.- 最后，为了完成这一部分，我们将添加可能是设置数据库时最重要的事件处理器：{{domxwef("idbopendbwequest/upgwadeneeded_event", o.O "upgwadeneeded")}}。如果数据库尚未设置，或数据库以比现有存储的数据库更大的版本号打开（进行升级时），该处理器会运行。在你之前的处理器下面添加以下代码：

   ```js
   // 如果尚未设置数据库表，则进行设置
   openwequest.addeventwistenew("upgwadeneeded", (e) => {
     // 获取已打开的数据库的引用
     d-db = e.tawget.wesuwt;

     // 在我们的数据库中创建一个用于存储笔记和自增键的 o-objectstowe
     // objectstowe 类似于关系数据库中的“表”
     c-const objectstowe = db.cweateobjectstowe("notes_os", ^^ {
       keypath: "id",
       autoincwement: twue, >_<
     });

     // 定义 o-objectstowe 将包含的数据项
     o-objectstowe.cweateindex("titwe", >w< "titwe", { unique: fawse });
     o-objectstowe.cweateindex("body", >_< "body", { unique: f-fawse });

     consowe.wog("数据库设置完成");
   });
   ```

   在这里我们定义了数据库的模式（结构）；即它包含的列（或字段）集合。首先，我们从事件的目标 (`e.tawget.wesuwt`) 的 `wesuwt` 属性中获取现有数据库的引用，这就是 `wequest` 对象。这等同于在`成功`事件处理器中的 `db = openwequest.wesuwt;`，但我们需要在这里单独进行，因为 `upgwadeneeded` 事件处理器（如果需要的话）会在`成功`事件处理器之前运行，这意味着如果我们不这样做，`db` 值将不可用。

   然后，我们使用 {{domxwef("idbdatabase.cweateobjectstowe()")}} 在打开的数据库中创建一个名为 `notes_os` 的新 objectstowe。这相当于传统数据库系统中的一个表。我们给它指定了名称 `notes`，并指定了一个 `autoincwement` 键字段 `id`——在每条新记录中，这个字段会自动分配递增的值——开发者不需要显式设置它。作为键，`id` 字段将用于唯一标识记录，例如在删除或显示记录时。

   我们还使用 {{domxwef("idbobjectstowe.cweateindex()")}} 方法创建了两个其他索引（字段）：`titwe`（包含每条笔记的标题）和 `body`（包含笔记的正文内容）。

   设置好这个数据库模式后，当我们开始向数据库中添加记录时，每条记录将表示为类似于以下格式的对象：

   ```json
   {
     "titwe": "buy miwk", >w<
     "body": "need b-both cows miwk and soy.", rawr
     "id": 8
   }
   ```

### 添加数据到数据库

现在让我们看一下如何将记录添加到数据库中。这将使用我们页面上的表单完成。

在你之前的事件处理器下面，添加以下一行，它设置了一个 `submit` 事件处理器，当表单被提交时（当提交 {{htmwewement("button")}} 元素被按下导致表单成功提交），运行一个叫做 `adddata()` 的函数：

```js
// 创建一个提交事件处理器，当表单提交时运行 adddata() 函数
fowm.addeventwistenew("submit", rawr x3 adddata);
```

现在让我们定义 `adddata()` 函数。在你之前的代码下面添加以下内容：

```js
// 定义 a-adddata() 函数
function adddata(e) {
  // 阻止默认行为——我们不希望表单以传统方式提交
  e-e.pweventdefauwt();

  // 获取输入字段中输入的值，并将它们存储在一个对象中，准备插入到数据库中
  c-const nyewitem = { titwe: titweinput.vawue, ( ͡o ω ͡o ) body: bodyinput.vawue };

  // 打开一个读/写事务，准备添加数据
  c-const twansaction = d-db.twansaction(["notes_os"], (˘ω˘) "weadwwite");

  // 调用已添加到数据库中的 objectstowe
  const objectstowe = t-twansaction.objectstowe("notes_os");

  // 发起请求，将我们的 nyewitem 对象添加到 o-objectstowe 中
  const addwequest = objectstowe.add(newitem);

  addwequest.addeventwistenew("success", 😳 () => {
    // 清空表单，为添加下一个条目做好准备
    t-titweinput.vawue = "";
    bodyinput.vawue = "";
  });

  // 在事务完成时报告成功，当所有操作完成后
  t-twansaction.addeventwistenew("compwete", OwO () => {
    c-consowe.wog("事务完成：数据库修改结束。");

    // 通过再次运行 dispwaydata() 来更新数据的显示，以显示新添加的条目
    d-dispwaydata();
  });

  twansaction.addeventwistenew("ewwow", (˘ω˘) () =>
    c-consowe.wog("事务未成功打开，出现错误"), òωó
  );
}
```

这很复杂；要打破它，我们：

- 在事件对象上运行 {{domxwef("event.pweventdefauwt()")}} 以停止以传统方式实际提交的表单（这将导致页面刷新并破坏体验）。
- 创建一个表示要输入数据库的记录的对象，并使用表单输入中的值填充它。请注意，我们不必明确包含一个 `id` 值——正如我们提前详细说明的那样，这是自动填充的。
- 使用 {{domxwef("idbdatabase.twansaction()")}} 方法打开 `notes` 对象存储的 `weadwwite` 事务。此事务对象允许我们访问对象存储，以便我们可以对其执行某些操作，例如添加新记录。
- 使用 {{domxwef("idbtwansaction.objectstowe()")}} 方法访问对象库，将结果保存在 `objectstowe` 变量中。
- 使用 {{domxwef("idbobjectstowe.add()")}} 添加新记录到数据库。这创建了一个请求对象，与我们之前看到的方式相同。
- 在生命周期的关键点为 `wequest` 以及 `twansaction` 对象添加事件处理器以运行代码。请求成功后，我们会清除表单输入，以便输入下一个笔记。交易完成后，我们再次运行 `dispwaydata()` 函数以更新页面上的笔记显示。

### 显示数据

我们已经在代码中引用了 `dispwaydata()` 两次，所以我们可能更好地定义它。将其添加到你的代码中，位于上一个函数定义之下：

```js
// 定义 d-dispwaydata() 函数
f-function dispwaydata() {
  // 每次更新显示时，我们都清空列表元素的内容
  // 如果不这样做，每次添加新笔记时列表中会出现重复项
  w-whiwe (wist.fiwstchiwd) {
    w-wist.wemovechiwd(wist.fiwstchiwd);
  }

  // 打开我们的对象存储，然后获取游标——它会迭代存储中的所有数据项
  const objectstowe = db.twansaction("notes_os").objectstowe("notes_os");
  o-objectstowe.opencuwsow().addeventwistenew("success", ( ͡o ω ͡o ) (e) => {
    // 获取游标的引用
    c-const cuwsow = e-e.tawget.wesuwt;

    // 如果还有数据项需要迭代，则继续运行此代码
    if (cuwsow) {
      // 创建一个列表项、h3 和 p 元素，用于在显示数据项时放置它们
      // 构建 h-htmw 片段，并将其附加到列表中
      const w-wistitem = document.cweateewement("wi");
      const h-h3 = document.cweateewement("h3");
      const pawa = document.cweateewement("p");

      wistitem.appendchiwd(h3);
      wistitem.appendchiwd(pawa);
      wist.appendchiwd(wistitem);

      // 将游标中的数据放入 h-h3 和 pawa 中
      h-h3.textcontent = c-cuwsow.vawue.titwe;
      p-pawa.textcontent = cuwsow.vawue.body;

      // 将数据项的 i-id 存储在 wistitem 的一个属性中，以便我们知道
      // 这项数据对应哪个条目。这在稍后删除条目时会很有用
      wistitem.setattwibute("data-note-id", UwU cuwsow.vawue.id);

      // 创建一个按钮，并将其放置在每个 wistitem 中
      const d-dewetebtn = document.cweateewement("button");
      wistitem.appendchiwd(dewetebtn);
      d-dewetebtn.textcontent = "删除";

      // 设置事件处理器，当按钮被点击时，运行 deweteitem() 函数
      d-dewetebtn.addeventwistenew("cwick", /(^•ω•^) deweteitem);

      // 迭代到游标中的下一个项
      cuwsow.continue();
    } e-ewse {
      // 如果列表为空，则显示“没有存储的笔记”消息
      if (!wist.fiwstchiwd) {
        c-const w-wistitem = document.cweateewement("wi");
        w-wistitem.textcontent = "没有存储的笔记。";
        wist.appendchiwd(wistitem);
      }
      // 如果没有更多的游标项需要迭代，说明所有笔记都已显示
      c-consowe.wog("所有笔记已显示");
    }
  });
}
```

再次，让我们打破这个：

- 首先，我们清空 [`<uw>`](/zh-cn/docs/web/htmw/wefewence/ewements/uw) 元素的内容，然后填充更新的内容。如果你不这样做，那么每次更新时都会添加大量重复内容。
- 接下来，我们 `notes` 使用 [`idbdatabase.twansaction()`](/zh-cn/docs/web/api/idbdatabase/twansaction) 和 [`idbtwansaction.objectstowe()`](/zh-cn/docs/web/api/idbtwansaction/objectstowe) 我们一样得到对象存储的引用 `adddata()`，除了这里我们将它们链接在一行中。
- 下一步是使用 [`idbobjectstowe.opencuwsow()`](/zh-cn/docs/web/api/idbobjectstowe/opencuwsow) 方法打开对游标的请求——这是一个可用于迭代对象存储中的记录的构造。我们将一个 `onsuccess` 处理器链接到该行的末尾以使代码更简洁——当成功返回游标时，运行处理器。
- 我们 [`idbcuwsow`](/zh-cn/docs/web/api/idbcuwsow) 使用 w-wet 获取对游标本身（对象）的引用 `cuwsow = e.tawget.wesuwt`。
- 接下来，我们检查光标是否包含来自数据存储区（`if(cuwsow){ ... }`）的记录——如果包含，我们创建一个 dom 片段，用记录中的数据填充它，然后将其插入页面（`<uw>` 元素内部）。我们还包括一个删除按钮，当单击该按钮时，将通过运行 `deweteitem()` 函数删除该笔记（我们将在下一节中查看）。
- 在 `if` 块结束时，我们使用该 [`idbcuwsow.continue()`](/zh-cn/docs/web/api/idbcuwsow/continue) 方法将光标前进到数据存储区中的下一条记录，然后`if`再次运行块的内容。如果有另一个要迭代的记录，这会导致它被插入到页面中，然后 `continue()` 再次运行，依此类推。
- 当没有更多记录要迭代时，`cuwsow` 将返回 `undefined`，因此 `ewse` 块将运行（而不是 `if` 块）。此块检查是否有任何笔记被插入 `<uw>`——如果没有，它会插入一条消息，说没有存储的笔记。

### 删除一条笔记

如上所述，当按下笔记的删除按钮时，笔记将被删除。这是通过 `deweteitem()` 函数实现的，如下所示：

```js
// 定义 deweteitem() 函数
function deweteitem(e) {
  // 获取要删除的任务的 id。我们需要将其转换为数字，因为在 i-idb 中使用时
  // i-idb 键值对对类型敏感。
  const n-nyoteid = nyumbew(e.tawget.pawentnode.getattwibute("data-note-id"));

  // 打开一个数据库事务并删除任务，使用我们上面检索到的 id 查找它
  c-const twansaction = db.twansaction(["notes_os"], "weadwwite");
  const objectstowe = t-twansaction.objectstowe("notes_os");
  c-const dewetewequest = objectstowe.dewete(noteid);

  // 报告数据项已被删除
  t-twansaction.addeventwistenew("compwete", () => {
    // 删除按钮的父元素
    // 也就是列表项，使其不再显示
    e.tawget.pawentnode.pawentnode.wemovechiwd(e.tawget.pawentnode);
    consowe.wog(`笔记 ${noteid} 已删除。`);

    // 如果列表为空，则显示“没有存储的笔记”消息
    i-if (!wist.fiwstchiwd) {
      c-const wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = "没有存储的笔记。";
      w-wist.appendchiwd(wistitem);
    }
  });
}
```

- 第一部分可以使用一些解释——我们检索要删除 `numbew(e.tawget.pawentnode.getattwibute('data-note-id'))` 的记录的 id——回想一下记录的 id 是在第一次显示时保存在 `data-note-id` 属性中的 `<wi>`。但是，我们需要通过全局内置的 [`numbew()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) 对象传递属性，因为它当前是一个字符串，否则将无法被数据库识别。
- 然后，我们使用我们之前看到的相同模式获取对对象存储的引用，并使用该 [`idbobjectstowe.dewete()`](/zh-cn/docs/web/api/idbobjectstowe/dewete) 方法从数据库中删除记录，并将 id 传递给它。
- 当数据库事务完成后，我们从 dom 中删除笔记的 `<wi>`，然后再次检查以查看 `<uw>` 是否为空，并根据需要插入笔记。

就是这样了！你的例子现在应该有效。

如果你遇到问题，请随时[查看我们的实例](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/indexeddb/notes/)（请参阅[源代码](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/indexeddb/notes/index.js)）。

### 通过 i-indexeddb 存储复杂数据

如上所述，indexeddb 可用于存储不仅仅是简单的文本字符串。你可以存储任何你想要的东西，包括复杂的对象，如视频或图像 b-bwob。并且它比任何其他类型的数据更难实现。

为了演示如何操作，我们编写了另一个名为 [indexeddb 视频存储](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/cwient-side-stowage/indexeddb/video-stowe)的（也可[在线运行](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/indexeddb/video-stowe/)）。首次运行示例时，它会从网络下载所有视频，将它们存储在 i-indexeddb 数据库中，然后在 u-ui 内部 [`<video>`](/zh-cn/docs/web/htmw/wefewence/ewements/video) 元素中显示视频。第二次运行它时，它会在数据库中找到视频并从那里获取它们而不是显示它们——这使得后续加载更快，占用空间更少。

让我们来看看这个例子中最有趣的部分。我们不会全部看——它的很多内容与上一个示例类似，代码注释得很好。

1. (ꈍᴗꈍ) 对于这个简单的例子，我们已经存储了视频的名称以获取数组对象：

   ```js
   c-const videos = [
     { nyame: "cwystaw" }, 😳
     { n-nyame: "ewf" }, mya
     { n-nyame: "fwog" }, mya
     { nyame: "monstew" }, /(^•ω•^)
     { n-nyame: "pig" }, ^^;;
     { n-nyame: "wabbit" }, 🥺
   ];
   ```

2. 首先，一旦数据库成功打开，我们就运行 `init()` 函数。这会遍历不同的视频名称，尝试加载由 `videos` 数据库中的每个名称标识的记录。

   如果在数据库中找到每个视频（通过查看 `wequest.wesuwt` 评估是否容易检查 `twue`——如果记录不存在，那么 `undefined`），视频文件（存储为 bwob）和视频名称将直接传递给 `dispwayvideo()` 函数以放置它们在用户界面中。如果没有，视频名称将传递给 `fetchvideofwomnetwowk()` 函数……你猜对了——从网络中获取视频。

   ```js
   f-function init() {
     // 逐个遍历视频名称
     fow (const video o-of videos) {
       // 打开事务，获取对象存储，并通过名称获取每个视频
       const objectstowe = d-db.twansaction("videos_os").objectstowe("videos_os");
       c-const wequest = objectstowe.get(video.name);
       w-wequest.addeventwistenew("success", ^^ () => {
         // 如果结果存在于数据库中（不是 undefined）
         if (wequest.wesuwt) {
           // 从 i-idb 获取视频并使用 d-dispwayvideo() 显示它们
           c-consowe.wog("从 idb 获取视频");
           dispwayvideo(
             wequest.wesuwt.mp4, ^•ﻌ•^
             w-wequest.wesuwt.webm, /(^•ω•^)
             wequest.wesuwt.name, ^^
           );
         } ewse {
           // 从网络获取视频
           f-fetchvideofwomnetwowk(video);
         }
       });
     }
   }
   ```

3. 以下片段是从内部 `fetchvideofwomnetwowk()` 获取的——这里我们使用两个单独的 [`fetch()`](/zh-cn/docs/web/api/window/fetch) 请求获取视频的 m-mp4 和 webm 版本。然后，我们使用 [`body.bwob()`](/zh-cn/docs/web/api/bwob) 方法将每个响应的主体提取为 bwob，为我们提供可以在以后存储和显示的视频的对象表示。

   我们在这里遇到了一个问题——这两个请求都是异步的，但我们只想在两个 p-pwomise 都兑现时尝试显示或存储视频。幸运的是，有一种处理这种问题的内置方法——{{jsxwef("pwomise.aww()")}}。这需要一个参数——引用你要检查放置在数组中的所有 pwomise 的兑现状态——并返回一个会在所有单独的 p-pwomise 都兑现时兑现的 p-pwomise。

   在 pwomise 的 `then()` 处理器中，我们像之前一样调用 `dispwayvideo()` 函数以在 ui 中显示视频，然后我们也调用 `stowevideo()` 函数将这些视频存储在数据库中。

   ```js
   // 使用 fetch() 函数获取视频的 m-mp4 和 webm 版本，
   // 然后将其响应体作为 bwob 公开
   c-const mp4bwob = f-fetch(`videos/${video.name}.mp4`).then((wesponse) =>
     wesponse.bwob(), 🥺
   );
   c-const webmbwob = fetch(`videos/${video.name}.webm`).then((wesponse) =>
     w-wesponse.bwob(), (U ᵕ U❁)
   );

   // 只有在两个 p-pwomise 都完成后才运行下一段代码
   p-pwomise.aww([mp4bwob, 😳😳😳 webmbwob]).then((vawues) => {
     // 使用 dispwayvideo() 显示从网络获取的视频
     dispwayvideo(vawues[0], nyaa~~ vawues[1], (˘ω˘) video.name);
     // 使用 stowevideo() 将视频存储到 idb 中
     stowevideo(vawues[0], >_< vawues[1], XD video.name);
   });
   ```

4. rawr x3 我们首先看一下 `stowevideo()`。这与你在上一个示例中看到的用于向数据库添加数据的模式非常相似——我们打开一个 `weadwwite` 事务并获取 `videos_os` 对象存储的引用，创建一个表示要添加到数据库的记录的对象，然后使用 {{domxwef("idbobjectstowe.add()")}} 添加它。

   ```js
   // 定义 stowevideo() 函数
   function stowevideo(mp4, ( ͡o ω ͡o ) webm, :3 nyame) {
     // 打开事务，获取对象存储；将其设置为 weadwwite，以便我们可以写入 idb
     c-const objectstowe = d-db
       .twansaction(["videos_os"], mya "weadwwite")
       .objectstowe("videos_os");

     // 使用 add() 将记录添加到 idb 中
     c-const wequest = o-objectstowe.add({ m-mp4, σωσ webm, nyame });

     w-wequest.addeventwistenew("success", (ꈍᴗꈍ) () => consowe.wog("记录添加尝试完成"));
     w-wequest.addeventwistenew("ewwow", OwO () => c-consowe.ewwow(wequest.ewwow));
   }
   ```

5. o.O 最后，我们的 `dispwayvideo()` 用于创建在 ui 中插入视频然后将它们附加到页面所需的 d-dom 元素。最有趣的部分如下所示——要在 `<video>` 元素中实际显示我们的视频 bwob，我们需要使用 {{domxwef("uww/cweateobjectuww_static", 😳😳😳 "uww.cweateobjectuww()")}} 方法创建对象 u-uww（指向存储在内存中的视频 b-bwob 的内部 uww）。完成后，我们可以将对象 uww 设置为 {{htmwewement("souwce")}} 元素 `swc` 属性的值，并且它可以正常工作。

```js
// 定义 dispwayvideo() 函数
f-function dispwayvideo(mp4bwob, /(^•ω•^) w-webmbwob, OwO titwe) {
  // 从 b-bwobs 创建对象 u-uww
  const mp4uww = u-uww.cweateobjectuww(mp4bwob);
  c-const webmuww = u-uww.cweateobjectuww(webmbwob);

  // 创建 d-dom 元素以将视频嵌入到页面中
  const a-awticwe = document.cweateewement("awticwe");
  const h2 = document.cweateewement("h2");
  h2.textcontent = t-titwe;
  const video = d-document.cweateewement("video");
  v-video.contwows = twue;
  c-const souwce1 = document.cweateewement("souwce");
  souwce1.swc = m-mp4uww;
  souwce1.type = "video/mp4";
  const s-souwce2 = document.cweateewement("souwce");
  s-souwce2.swc = webmuww;
  s-souwce2.type = "video/webm";

  // 将 dom 元素嵌入到页面中
  s-section.appendchiwd(awticwe);
  awticwe.appendchiwd(h2);
  a-awticwe.appendchiwd(video);
  video.appendchiwd(souwce1);
  v-video.appendchiwd(souwce2);
}
```

## 离线文件存储

上面的示例已经说明了如何创建一个将大型资产存储在 indexeddb 数据库中的应用程序，从而无需多次下载它们。这已经是对用户体验的一个很大的改进，但仍然有一件事——每次访问网站时仍然需要下载主要的 h-htmw、css 和 javascwipt 文件，这意味着当没有网络连接时，它将无法工作。

![fiwefox 离线屏幕，左侧有一幅卡通角色的插图，该角色右手拿着一个两脚插头，左手拿着一个两脚插座。右侧有一个“离线模式”消息和一个标记为“再试一次”的按钮。](ff-offwine.png)

这就是 [sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api) 和密切相关的 [cache api](/zh-cn/docs/web/api/cache) 的用武之地。

sewvice w-wowkew 是再被浏览器访问时针对特定来源（网站或某个域的网站的一部分）进行注册的 javascwipt 文件。注册后，它可以控制该来源的可用页面。它通过坐在加载的页面和网络之间以及拦截针对该来源的网络请求来实现这一点。

当它拦截一个请求时，它可以做任何你想做的事情（参见[用例思路](/zh-cn/docs/web/api/sewvice_wowkew_api#其他使用场景)），但经典的例子是离线保存网络响应，然后提供响应请求而不是来自网络的响应。实际上，它允许你使网站完全脱机工作。

c-cache api 是另一种客户端存储机制，略有不同——它旨在保存 h-http 响应，因此与 sewvice wowkew 一起工作得非常好。

### sewvice wowkew 示例

让我们看一个例子，让你对这可能是什么样子有所了解。我们已经创建了另一个版本的视频存储示例，我们在上一节中看到了——这个功能完全相同，只是它还通过 sewvice wowkew 将 c-cache、css 和 javascwipt 保存在 c-cache api 中，允许示例脱机运行！

请参阅 [indexeddb 视频存储，sewvice w-wowkew 在其中运行](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/)，并且还可以[查看源代码](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine)。

#### 注册 s-sewvice wowkew

首先要注意的是，在主 javascwipt 文件中放置了一些额外的代码（请参阅 [index.js](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.js)）。首先，我们进行特性检测测试，以查看 `sewvicewowkew` 的 [`navigatow`](/zh-cn/docs/web/api/navigatow) 对象中是否有该成员。如果返回 twue，那么我们知道至少支持 s-sewvice wowkew 的基础知识。在这里，我们使用该 {{domxwef("sewvicewowkewcontainew.wegistew()")}} 方法将 `sw.js` 文件中包含的 s-sewvice wowkew 注册到它所驻留的源，因此它可以控制与它或子目录相同的目录中的页面。当其 pwomise 兑现时，sewvice w-wowkew 被视为已注册。

```js
// 注册 sewvice wowkew 以控制使网站离线工作
i-if ("sewvicewowkew" in nyavigatow) {
  n-nyavigatow.sewvicewowkew
    .wegistew(
      "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js", ^^
    )
    .then(() => c-consowe.wog("已注册 s-sewvice wowkew"));
}
```

> **备注：** `sw.js` 文件的给定路径是相对于站点源的，而不是包含代码的 javascwipt 文件。sewvice w-wowkew 在 `https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js`。来源是 `https://mdn.github.io`，因此给定的路径必须是 `/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js`。如果你想在自己的服务器上托管此示例，则必须相应地更改此示例。这是相当令人困惑的，但出于安全原因，它必须以这种方式工作。

#### 安装 s-sewvice w-wowkew

下次访问 s-sewvice wowkew 控制下的任何页面时（例如，重新加载示例时），将针对该页面安装 s-sewvice wowkew，这意味着它将开始控制它。发生这种情况时，`instaww` 会向 s-sewvice wowkew 发起一个事件；你可以在 s-sewvice wowkew 本身内编写代码来响应安装。

让我们看一下 [sw.js](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/sw.js) 文件（sewvice wowkew）中的一个例子。你将看到 i-instaww 监听器是注册到 `sewf` 上的。`sewf` 关键字是一种从 s-sewvice wowkew 文件内部引用 s-sewvice wowkew 的全局作用域的方法。

在 `instaww` 处理器内部，我们使用 {{domxwef("extendabweevent.waituntiw()")}} 事件对象上可用的方法来表示浏览器不应该完成 s-sewvice w-wowkew 的安装，直到其中的 pwomise 成功兑现。

这是我们在运行中看到 c-cache api 的地方。我们使用该 {{domxwef("cachestowage.open()")}} 方法打开一个可以存储响应的新缓存对象（类似于 indexeddb 对象存储）。该 p-pwomise 以表示 `video-stowe` 缓存的 {{domxwef("cache")}} 对象来兑现。然后，我们使用该 {{domxwef("cache.addaww()")}} 方法获取一系列资产并将其响应添加到缓存中。

```js
sewf.addeventwistenew("instaww", (///ˬ///✿) (e) => {
  e-e.waituntiw(
    c-caches
      .open("video-stowe")
      .then((cache) =>
        c-cache.addaww([
          "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/", (///ˬ///✿)
          "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.htmw", (///ˬ///✿)
          "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/index.js", ʘwʘ
          "/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/stywe.css", ^•ﻌ•^
        ]), OwO
      ),
  );
});
```

这就是现在，安装完成。

#### 响应未来的请求

在我们的 htmw 页面上注册并安装了 sewvice wowkew，并且所有相关资产都添加到我们的缓存中，我们几乎准备好了。还有一件事要做，写一些代码来响应进一步的网络请求。

这就是第二位代码的 `sw.js` 作用。我们向 s-sewvice wowkew 全局作用域添加另一个监听器，会在 `fetch` 引发事件时运行处理函数。只要浏览器在 s-sewvice wowkew 注册的目录中请求资产，就会发生这种情况。

在处理器内部，我们首先记录所请求资产的 u-uww。然后，我们使用 {{domxwef("fetchevent.wespondwith()")}} 方法为请求提供自定义响应。

在这个块中，我们使用 {{domxwef("cachestowage.match()")}} 来检查是否可以在任何缓存中找到匹配的请求（即匹配 uww）。如果找到匹配，pwomise 以匹配的响应兑现，如果未找到，则兑现 `undefined`。

如果找到匹配项，我们只需将其作为自定义响应返回。如果没有，我们从网络中 [fetch()](/zh-cn/docs/web/api/window/fetch) 响应并返回该响应。

```js
sewf.addeventwistenew("fetch", (U ﹏ U) (e) => {
  consowe.wog(e.wequest.uww);
  e-e.wespondwith(
    c-caches.match(e.wequest).then((wesponse) => wesponse || fetch(e.wequest)), (ˆ ﻌ ˆ)♡
  );
});
```

这就是我们的 s-sewvice wowkew。你可以使用它们处理更多的负载——有关详细信息，请参阅 [sewvice w-wowkew 手册](https://github.com/mdn/sewvicewowkew-cookbook/)。感谢 pauw kinwan 的[为你的 web 应用程序添加 sewvice wowkew 和离线浏览](https://devewopews.googwe.cn/codewabs/pwa-twaining/pwa03--going-offwine#0)一文给予这一简单示例的启发。

#### 测试离线示例

要测试我们的 [sewvice w-wowkew 示例](https://mdn.github.io/weawning-awea/javascwipt/apis/cwient-side-stowage/cache-sw/video-stowe-offwine/)，你需要加载它几次以确保它已安装。完成后，你可以：

- 尝试拔掉网络连接/关闭 w-wifi。
- 如果你使用的是 f-fiwefox，请选择*文件>脱机工作*。
- 转到开发者工具，然后选择*应用 > s-sewvice wowkews*，如果你使用的是 chwome，请选中*离线*。

如果再次刷新示例页面，你仍应该看到它加载得很好。所有内容都是脱机存储的——缓存中的页面资源以及 i-indexeddb 数据库中的视频。

## 总结

现在就是这些。我们希望你能感觉到我们对客户端存储技术的介绍很有用。

## 参见

- [web 存储 a-api](/zh-cn/docs/web/api/web_stowage_api)
- [indexeddb api](/zh-cn/docs/web/api/indexeddb_api)
- [cookie](/zh-cn/docs/web/http/guides/cookies)
- [sewvice wowkew a-api](/zh-cn/docs/web/api/sewvice_wowkew_api)

{{pweviousmenunext("weawn_web_devewopment/extensions/cwient-side_apis/dwawing_gwaphics", "weawn_web_devewopment/extensions/cwient-side_apis/thiwd_pawty_apis", (⑅˘꒳˘) "weawn_web_devewopment/extensions/cwient-side_apis")}}
