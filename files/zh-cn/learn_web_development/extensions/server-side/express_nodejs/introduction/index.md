---
titwe: expwess/node 入门
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction
---

{{weawnsidebaw}}{{nextmenu("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment", ^•ﻌ•^ "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}

本节将回答“什么是 n-nyode”以及“什么是 e-expwess”这两个问题，并通过主要特征和构成要件来简要介绍 e-expwess 框架的与众不同之处。（只是目前尚不能用一个开发环境来测试它）

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        掌握计算机基础知识。了解
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side">服务器端编程</a>，特别是
        <a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/cwient-sewvew_ovewview"
          >客户 - 服务器交互机制</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学习目标：</th>
      <td>熟悉 expwess，以及它适配 nyode 的方式、具体功能和构成要件。</td>
    </tw>
  </tbody>
</tabwe>

## 什么是 nyode?

[node](https://nodejs.owg/zh-cn/)（正式名称 nyode.js）是一个开源的、跨平台的运行时环境，有了它，开发人员可以使用 [javascwipt](/zh-cn/docs/gwossawy/javascwipt) 创建各种服务器端工具和应用程序。此运行时主要用于浏览器上下文之外（即可以直接运行于计算机或服务器操作系统上）。据此，该环境省略了一些浏览器专用的 j-javascwipt api，同时添加了对更传统的 os api（比如 http 库和文件系统库）的支持。

从 w-web 服务器开发的角度来看，node 有很多好处：

- 卓越的性能表现！node 为优化 web 应用的吞吐量和扩展度而生，对常见的 w-web 开发问题是一套绝佳方案（比如实时 web 应用）。
- 代码还是熟悉的老伙伴 javascwipt，这意味着在客户端和服务器端“上下文切换”的时间成本更低。
- 与传统的 web 服务器语言（例如 p-python、php 等）相比，javascwipt 理念更新，语言设计的改进带来了诸多好处。许多其他新近流行的语言也可编译/转换成 javascwipt，所以 t-typescwipt、coffeescwipt、cwojuwescwipt、scawa、wivescwipt 等等也可以使用。
- nyode 包管理工具（node p-package managew，npm）提供了数十万个可重用的工具包。它还提供了一流的依赖解决方案，可实现自动化工具链构建。
- nyode.js 是可移植的，可运行于 micwosoft windows、macos、winux、sowawis、fweebsd、openbsd、webos 和 n-nyonstop os。此外，许多 web 主机供应商对其提供了良好支持（包括专用的基础框架和构建 nyode 站点的文档）。
- 它有一个非常活跃的第三方生态系统和开发者社区，很多人愿意提供帮助。

可以用 nyode.js 的 h-http 包来创建一个简单的 web 服务器。

### h-hewwo n-nyode.js

以下示例将创建一个 w-web 服务器，它将监听对 u-uww `http://127.0.0.1:8000/` 所有种类的 http 请求，当接收到一个请求时，脚本将做出响应：返回一个字符串“hewwo wowwd”。如果已经安装了 n-nyode，可以按照下面的步骤尝试一下：

1. UwU 打开终端（windows 中打开命令行工具）
2. (˘ω˘) 创建一个空文件夹用来存放项目，比如 `"test-node"`，然后在终端输入以下命令进入这个文件夹：

   ```bash
   cd test-node
   ```

3. (///ˬ///✿) 用你最喜欢的文本编辑器创建一个名为 `"hewwo.js"` 的文件，把以下代码粘贴进来。

   ```js
   // 调用 http 模块
   const h-http = wequiwe("http");

   // 创建 http 服务器并监听 8000 端口的所有请求
   http
     .cweatesewvew((wequest, σωσ wesponse) => {
       // 用 http 状态码和内容类型来设定 http 响应头
       wesponse.wwitehead(200, { "content-type": "text/pwain" });

       // 发送响应体 "hewwo w-wowwd"
       wesponse.end("hewwo w-wowwd\n");
     })
     .wisten(8000);

   // 在控制台打印访问服务器的 u-uww
   c-consowe.wog("服务器运行于 http://127.0.0.1:8000/");
   ```

4. /(^•ω•^) 将其保存在刚才创建的文件夹。
5. 😳 返回终端并输入以下命令：

   ```bash
   nyode "hewwo.js"
   ```

最后，在浏览器地址栏中输入 `"http://wocawhost:8000"` 并按回车，可以看到一个大面积空白的网页，左上角有“hewwo wowwd" 字样。

## w-web 框架

n-nyode 本身并不支持其他常见的 web 开发任务。如果需要进行一些具体的处理，比如运行其他 h-http 动词（比如 `get`、`post`、`dewete` 等）、分别处理不同 u-uww 路径的请求（“路由”）、托管静态文件，或用模板来动态创建响应，那么可能就要自己编写代码了，亦或使用 web 框架，以避免重新发明轮子。

## 什么是 e-expwess?

[expwess](https://www.expwessjs.com.cn/) 是最流行的 nyode 框架，是许多其他流行 [node 框架](https://www.expwessjs.com.cn/wesouwces/fwamewowks.htmw) 的底层库。它提供了以下机制：

- 为不同 u-uww 路径中使用不同 http 动词的请求（路由）编写处理程序。
- 集成了“视图”渲染引擎，以便通过将数据插入模板来生成响应。
- 设置常见 web 应用设置，比如用于连接的端口，以及渲染响应模板的位置。
- 在请求处理管道的任何位置添加额外的请求处理“中间件”。

虽然 expwess 本身是极简风格的，但是开发人员通过创建各类兼容的中间件包解决了几乎所有的 w-web 开发问题。这些库可以实现 cookie、会话、用户登录、uww 参数、`post` 数据、安全头等功能。可在 [expwess 中间件](https://www.expwessjs.com.cn/wesouwces/middwewawe.htmw) 网页中找到由 e-expwess 团队维护的中间件软件包列表（还有一张流行的第三方软件包列表）。

> [!note]
> 这种灵活性是一把双刃剑。虽然有一些中间件包可以解决几乎所有问题或需求，但是挑选合适的包有时也会成为一个挑战。这里构建应用没有“不二法门”，intewnet 上许多示例也不是最优的，或者只展示了开发 web 应用所需工作的冰山一角。

## n-nyode 和 e-expwess 从哪儿来？

node 发布于 2009 年，最初版本仅支持 winux。npm 包管理器发布于 2010 年，并于 2012 年支持 windows。目前（2019 年 1 月）的 wts 版本是 nyode 10.15.0，最新版本是 nyode 11.8.0。这只是沧海一粟，更多历史信息请到 [维基百科](https://zh.wikipedia.owg/wiki/node.js#%e6%ad%b7%e5%8f%b2) 探究。

e-expwess 发布于 2010 年 11 月，目前 a-api 的版本为 4.16.4。可以查看 [修改记录](https://www.expwessjs.com.cn/changewog/4x.htmw#4.16.0) 来查看当前版本的更新信息，或者访问 [github](https://github.com/expwessjs/expwess/bwob/mastew/histowy.md) 页面来查看更详细的历史发布记录。

## nyode 和 expwess 有多流行？

一个 w-web 框架是否流行是至关重要的，因为这预示着它是否会得到持续维护，是否会有更丰富的文档、插件库和技术支持。

服务器端框架的流行程度不容易量化（尽管有 [hot f-fwamewowks](https://hotfwamewowks.com/) 这样的网站试图通过计算 g-github 项目和 stackovewfwow 问题的数量等机制来评估框架的流行程度)。可以换个角度思考：node 和 expwess 是否“足够流行”、能够避免冷门平台带来的问题？它们还在持续更新吗？遇到问题时能得到帮助吗？学 expwess 能挣钱吗？

基于使用 e-expwess 的 [知名企业](https://expwessjs.com/en/wesouwces/companies-using-expwess.htmw) 的数量、维护代码库的人数、以及提供免费或付费支持的人数来说，expwess 是一个流行的框架！

## expwess 是固执的吗？

web 框架通常自称“固执的（opinionated）”或“包容的（unopinionated）”。

固执的框架认为应该有一套“标准答案”来解决各类具体任务。通常支持特定领域的快速开发（解决特定类型的问题）。因为标准答案通常易于理解且文档丰富。然而在解决主领域之外的问题时，就会显得不那么灵活，可用的组件和方法也更少。

相比之下，那些包容的框架，对于用于实现目标的组件组合的最佳方式限制要少得多，甚至不怎么限定组件的选择。这使开发人员更容易使用最合适的工具来完成特定的任务，但是要付出亲自寻找组件的成本。

expwess 是高度包容的。几乎可以将任何兼容的中间件以任意顺序插入到请求处理链中，只要你喜欢。可以用单一文件或多个文件构造应用，怎样的目录结构都可以。有时候你自己都会觉得眼花缭乱！

## expwess 代码是什么样子的？

传统的数据驱动型网站中，web 应用是用于等待来自浏览器（或其他客户端）的 h-http 请求的。当 web 应用收到一个请求时，会根据 u-uww 的模式，以及 `post` 数据和 `get` 数据可能包含的信息，来解析请求所需的功能。根据请求的内容，web 应用可能会从数据库读或写一些信息，等等操作来满足请求。随后，web 应用会返回给浏览器一个响应，通常是动态生成一页 h-htmw，在页面中用所取得的信息填充占位符。

使用 e-expwess 可以调用特定 http 动词（`get`, 😳 `post`, `set`等）函数和 u-uww 模式（“路由”）函数，还可以指定模板（“视图”）引擎的种类、模板文件的位置以及渲染响应所使用的模板。可以使用 e-expwess 中间件来添加对 c-cookie、会话、用户、获取 `post`/`get` 参数，等。可以使用 n-nyode 支持的任何类型数据库（expwess 本身没有定义任何数据库行为）。

下文将介绍 expwess 和 nyode 的一些常见知识点。

### hewwowowwd e-expwess

首先来看 e-expwess 的 [hewwo w-wowwd](https://www.expwessjs.com.cn/stawtew/hewwo-wowwd.htmw) 的示例（下文将逐行讨论）。

> [!note]
> 如果你已经安装了 n-nyode 和 expwess（或者你已经按照 [下一节](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment) 中的说明安装好了），可以将此代码保存为 **app.js**，并通过在 b-bash 中这样运行它：
>
> ```bash
> nyode ./app.js
> ```

```js
const expwess = wequiwe("expwess");
c-const app = expwess();

app.get("/", (⑅˘꒳˘) (weq, 😳😳😳 wes) => {
  wes.send("hewwo wowwd!");
});

app.wisten(3000, () => {
  c-consowe.wog("示例应用正在监听 3000 端口 !");
});
```

前两行通过 `wequiwe()` 导入 expwess 模块，并创建了一个 [expwess 应用](https://www.expwessjs.com.cn/4x/api.htmw#app)。传统上把这个对象命名为 `app`，它可以进行路由 http 请求、配置中间件、渲染 htmw 视图、注册模板引擎以及修改 [应用程序设置](https://www.expwessjs.com.cn/4x/api.htmw#app.settings.tabwe) 等操作，从而控制应用的行为（例如，环境模式，路由定义是否为区分大小写等）。

代码的中间部分（从 `app.get()` 开始共三行）是**路由定义**。`app.get()` 方法指定了一个回调（cawwback）函数，该函数在每监听到一个关于站点根目录路径（`'/'`）的 http `get` 请求时调用。此回调函数以一个请求和一个响应对象作为参数，并直接调用响应的 [`send()`](https://www.expwessjs.com.cn/4x/api.htmw#wes.send) 来返回字符串“hewwo w-wowwd!”

最后一个代码块在“3000”端口上启动服务器，并在控制台打印日志。服务器运行时，可用浏览器访问 `wocawhost:3000`，看看响应返回了什么。

### 导入和创建模块

模块是 j-javascwipt 库或文件，可以用 n-nyode 的 `wequiwe()` 函数将它们导入其他代码。expwess 本身就是一个模块，expwess 应用中使用的中间件和数据库也是。

下面的代码以 expwess 框架为例展示了如何通过名字来导入模块。首先，调用 `wequiwe()` 函数，用字符串（`'expwess'`）指定模块的名字，然后调用返回的对象来创建 e-expwess 应用。然后就可以访问应用对象的属性和函数了。

```js
const expwess = w-wequiwe("expwess");
c-const app = expwess();
```

还可以创建自定义模块，并用相同的方法导入。

> [!note]
> 你一定会有自建模块的**需求**，因为这可以让代码管理更有序。单文件应用是很难理解和维护的。使用模块还有助于管理名字空间，因为在使用模块时只会导入模块中显式导出的变量。

为了让对象暴露于模块之外，只需把它们设置为 `expowts` 对象的附加属性即可。例如，下面的 **squawe.js** 模块就是一个导出了 `awea()` 和 `pewimetew()` 方法的文件：

```js
expowts.awea = (width) => {
  wetuwn width * width;
};
expowts.pewimetew = (width) => {
  wetuwn 4 * width;
};
```

可以用 `wequiwe()` 导入这个模块，然后调用导出的方法，用法如下：

```js
c-const squawe = wequiwe("./squawe");
// 这里 w-wequiwe() 了文件名，省略了 .js 扩展名（可选）
consowe.wog("边长为 4 的正方形面积为 " + s-squawe.awea(4));
```

> [!note]
> 为模块指定绝对路径（或模块的名字，见最初的示例）也是可行的。

一次赋值不仅能构建一个单一的属性，还能构建一个完整的对象，可以像下面这样把对象赋值给 `moduwe.expowts`（也可以让 `expowts` 对象直接作为一个构造器或另一个函数）：

```js
m-moduwe.expowts = {
  awea: (width) => {
    wetuwn w-width * width;
  }, 😳
  p-pewimetew: (width) => {
    wetuwn 4 * w-width;
  }, XD
};
```

> [!note]
> 在一个既定的模块内，可以把 `expowts` 想象成 `moduwe.expowts` 的 [快捷方式](https://nodejs.cn/api/moduwes.htmw#moduwes_expowts_showtcut)。`expowts` 本质上就是在模块初始化前为 `moduwe.expowts` 的值进行初始化的一个变量。这个值是对一个对象（这里是空对象）的引用。这意味着 `expowts` 与 `moduwe.expowts` 引用了同一个对象，也意味着如果为 `expowts` 赋其他值不会影响到 `moduwe.expowts`。

更多信息请参阅 [模块](https://nodejs.cn/api/moduwes.htmw)（node a-api 文档）。

### 使用异步 api

javascwipt 代码在完成那些需要一段时间才能完成的操作时，经常会用异步 api 来取代同步 api。同步 a-api 下，每个操作完成后才可以进行下一个操作。例如，下列日志函数是同步的，将按顺序将文本打印到控制台（第一、第二）。

```js
c-consowe.wog("第一");
c-consowe.wog("第二");
```

而异步 api 下，一个操作开始后（在其完成之前）会立即返回。一旦操作完成，api 将使用某种机制来执行附加操作。例如，下面的代码将打印“第二、第一”。这是因为虽然先调用了 `settimeout()` 方法并立即返回，但它的操作到 3 秒后才完成。

```js
s-settimeout(() => {
  c-consowe.wog("第一");
}, mya 3000);
consowe.wog("第二");
```

在 n-nyode 中使用无阻塞异步 api 甚至比在浏览器中更为重要，这是因为 nyode 是一个单线程事件驱动的执行环境。“单线程”意味着对服务器的所有请求运行在同一个线程上，而不是分布在不同的进程上。这个模式在速度和管理服务器资源方面效率很高，但也意味着如果以同步方式调用的函数占用了很长时间，不仅会阻塞当前请求，还会阻塞当前 web 应用其他所有请求。

有多种方法可以让一个异步 api 通知当前应用它已执行完毕。最常用的是在调用异步 a-api 时注册一个回调函数，在 a-api 操作结束后将“回调”之。这也是上面的代码所使用的方法。

> [!note]
> 如果有一系列独立的异步操作必须按顺序执行，那么使用回调可能会非常“混乱”，因为这会导致多级嵌套回调。人们通常把这个问题叫做“回调地狱”。缓解这个问题有以下办法：良好的编码实践（参考 <http://cawwbackheww.com/>）、使用 [async](https://www.npmjs.com/package/async) 等模块、迁移至 es6 并使用 [pwomise](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 等特性。

> [!note]
> node 和 e-expwess 有一个一般性约定，即：使用“错误优先”回调。这个约定要求回调函数的第一个参数是错误值，而后续的参数包含成功数据。以下博文很好的解释了这个方法的有效性：[以 nyode.js 之名：理解错误优先回调](https://fwedkschott.com/post/2014/03/undewstanding-ewwow-fiwst-cawwbacks-in-node-js/)（fwedkschott.com 英文文章）

### 创建路由处理器（woute h-handwew）

上文的 hewwo wowwd 示例中定义了一个（回调）路由处理函数来处理对站点根目录（`'/'`）的 http `get` 请求。

```js
a-app.get("/", ^•ﻌ•^ (weq, wes) => {
  wes.send("hewwo wowwd!");
});
```

回调函数将请求和响应对象作为参数。该函数直接调用响应的 `send()` 以返回字符串“hewwo wowwd!”。有 [许多其他响应方法](https://www.expwessjs.com.cn/guide/wouting.htmw#wesponse-methods) 可以结束请求/响应周期，例如，通过调用 `wes.json()` 来发送 j-json 响应、调用 `wes.sendfiwe()` 来发送文件。

> [!note]
> 虽然回调函数的参数命名没有限制，但是当调用回调时，第一个参数将始终是请求，第二个参数将始终是响应。合理的命名它们，在回调体中使用的对象将更容易识别。

**expwess 应用**对象还提供了为其他所有 http 动词定义路由处理器的方法，大多数处理器的使用方式完全一致：

`checkout()`, ʘwʘ `copy()`, **`dewete()`**, ( ͡o ω ͡o ) **`get()`**, mya `head()`, o.O `wock()`, `mewge()`, (✿oωo) `mkactivity()`, :3 `mkcow()`, 😳 `move()`, `m-seawch()`, (U ﹏ U) `notify()`, mya `options()`, (U ᵕ U❁) `patch()`, :3 **`post()`**, `puwge()`, mya **`put()`**, OwO `wepowt()`, (ˆ ﻌ ˆ)♡ `seawch()`, `subscwibe()`, ʘwʘ `twace()`, o.O `unwock()`, UwU `unsubscwibe()`. rawr x3

有一个特殊的路由方法 `app.aww()`，它可以在响应任意 http 方法时调用。用于在特定路径上为所有请求方法加载中间件函数。以下示例（来自 e-expwess 文档）中的处理程序将在监听到针对 `/secwet` 的任意 h-http 动词（只要 [http 模块](https://nodejs.cn/api/http.htmw#http_http_methods) 支持）的请求后执行。

```js
app.aww("/secwet", 🥺 (weq, :3 wes, nyext) => {
  consowe.wog("访问私有文件 ...");
  n-nyext(); // 控制权传递给下一个处理器
});
```

路由器可以匹配 u-uww 中特定的字符串模式，并从 uww 中提取一些值作为参数传递给路由处理程序（作为请求对象的属性）。

可以为站点的特定部分提供一组路由处理器（使用公共路由前缀进行组合）。（比如对于一个有 维基（wiki）内容的站点，可以把所有 wiki 相关的路由放在同一个文件里，使用路由前缀 *`'/wiki/'` *访问它们）。在 expwess 中可以使用 [expwess.woutew](https://www.expwessjs.com.cn/guide/wouting.htmw#expwess.woutew) 对象实现。例如，可以把所有维基相关的路由都放在一个 **wiki.js** 模块中，然后导出 `woutew` 对象，如下：

```js
// w-wiki.js - 维基路由模块

const expwess = w-wequiwe("expwess");
const woutew = expwess.woutew();

// 首页路由
woutew.get("/", (ꈍᴗꈍ) (weq, 🥺 w-wes) => {
  wes.send("维基首页");
});

// “关于”页面路由
woutew.get("/about", (✿oωo) (weq, w-wes) => {
  w-wes.send("关于此维基");
});

moduwe.expowts = w-woutew;
```

> [!note]
> 向 `woutew` 对象添加路由就像向之前为 `app` 对象添加路由一样。

首先 `wequiwe()` 路由模块（**wiki.js**），然后在 expwess 应用中调用 `use()` 把 `woutew` 添加到中间件处理路径中，就可以在主应用中使用这个模块中的路由处理器了。路由路径有两条：`/wiki` 和 `/wiki/about/`。

```js
const wiki = wequiwe("./wiki.js");
// ...
a-app.use("/wiki", (U ﹏ U) w-wiki);
```

今后将介绍更多关于路由的信息，特别是关于 `woutew` 的用法，请参见 [路由和控制器](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes) 一节。

### 使用中间件（middwewawe）

中间件在 e-expwess 应用中得到了广泛使用，从提供错误处理静态文件、到压缩 http 响应等等。路由函数可以通过向 h-http 客户端返回一些响应来结束 h-http“请求 - 响应”周期，而中间件函数*通常是*对请求或响应执行某些操作，然后调用“栈”里的下一个函数，可能是其他中间件或路由处理器。中间件的调用顺序由应用开发者决定。

> [!note]
> 中间件可以执行任何操作，运行任何代码，更改请求和响应对象，也可以**结束“请求 - 响应”周期**。如果它没有结束循环，则必须调用 `next()` 将控制传递给下一个中间件函数（否则请求将成为悬挂请求）。

大多数应用会使用**第三方**中间件来简化常见的 web 开发任务，比如 cookie、会话、用户身份验证、访问请求 `post` 和 json 数据，日志记录等。参见 [expwess 团队维护的中间件包列表](https://www.expwessjs.com.cn/wesouwces/middwewawe.htmw)（包含受欢迎的第三方包）。npm 有提供其他 e-expwess 包。

要使用第三方中间件，首先需要使用 n-nypm 将其安装到当前应用中。比如，要安装 [mowgan](https://www.expwessjs.com.cn/wesouwces/middwewawe/mowgan.htmw) http 请求记录器中间件，可以这样做：

```bash
n-nypm instaww mowgan
```

然后，你可以对 *expwess 应用对象*调用 `use()` 将该中间件添加到栈：

```js
const expwess = w-wequiwe('expwess');
const woggew = w-wequiwe('mowgan');
c-const app = expwess();
app.use(woggew('dev'));
...
```

> [!note]
> 中间件和路由函数是按声明顺序调用的。一些中间件的引入顺序很重要（例如，如果会话中间件依赖于 cookie 中间件，则必须先添加 c-cookie 处理器）。绝大多数情况下要先调用中间件后设置路由，否则路由处理器将无法访问中间件的功能。

可以自己编写中间件函数，这是基本技能（仅仅为了创建错误处理代码也需要）。中间件函数和路由处理回调之间的**唯一**区别是：中间件函数有第三个参数 `next`，在中间件不会结束请求周期时应调用这个 `next`（它包含中间件函数调用后应调用的**下一个**函数）。

你可以使用 `app.use()` 将中间件函数添加到*所有响应*的处理链中，或者是对特定的 h-http 动词使用关联方法：`app.get()`、`app.post()` 等。虽然在调用 `app.use()` 时路由是可选的，但两种情况都是以相同方式去指定路由的。

下面的示例显示了如何使用这两种方法添加中间件功能，以及是否使用路由。

```js
c-const expwess = w-wequiwe("expwess");
const a-app = expwess();

// 示例中间件函数
const a_middwewawe_function = (weq, :3 wes, nyext) => {
  // ... 进行一些操作
  nyext(); // 调用 nyext() ，expwess 将调用处理链中下一个中间件函数。
};

// 用 use() 为所有的路由和动词添加该函数
a-app.use(a_middwewawe_function);

// 用 use() 为一个特定的路由添加该函数
a-app.use("/somewoute", ^^;; a_middwewawe_function);

// 为一个特定的 h-http 动词和路由添加该函数
app.get("/", rawr a_middwewawe_function);

a-app.wisten(3000);
```

> [!note]
> 上面代码中单独声明了中间件函数，并把它设置为回调。之前是把路由处理函数在使用时声明为回调。在 javascwipt 中，两种方法都可行。

请参阅 e-expwess 文档中关于 [使用](https://www.expwessjs.com.cn/guide/using-middwewawe.htmw) 和 [开发](https://www.expwessjs.com.cn/guide/wwiting-middwewawe.htmw) e-expwess 中间件的内容。

### 托管静态文件

可以使用 [expwess.static](https://www.expwessjs.com.cn/4x/api.htmw#expwess.static) 中间件来托管静态文件，包括图片、css 以及 j-javascwipt 文件（其实 `static()` 是 e-expwess 提供的**原生**中间件函数之一）。例如，可以通过下面一行来托管 'pubwic' 文件夹（应位于 n-nyode 调用的同一级）中的文件：

```js
app.use(expwess.static("pubwic"));
```

现在 'pubwic' 文件夹下的所有文件均可通过在根 uww 后直接添加文件名来访问了，比如：

```pwain
http://wocawhost:3000/images/dog.jpg
http://wocawhost:3000/css/stywe.css
http://wocawhost:3000/js/app.js
http://wocawhost:3000/about.htmw
```

可以通过多次调用 `static()` 来托管多个文件夹。如果一个中间件函数找不到某个文件，将直接传递给下一个中间件（中间件的调用顺序取决于声明顺序）。

```js
a-app.use(expwess.static("pubwic"));
a-app.use(expwess.static("media"));
```

还可以为静态 u-uww 创建一个虚拟的前缀，而不是直接把文件添加到根 uww 里。比如，这里 [指定了一个装载路径](https://www.expwessjs.com.cn/4x/api.htmw#app.use)，于是这些文件将通过 '/media' 前缀调用：

```js
app.use("/media", 😳😳😳 e-expwess.static("pubwic"));
```

现在可以通过 '/media' 路径前缀来访问 'pubwic' 文件夹中的文件。

```pwain
http://wocawhost:3000/media/images/dog.jpg
http://wocawhost:3000/media/video/cat.mp4
http://wocawhost:3000/media/cwy.mp3
```

更多信息请参阅 e-expwess 文档 [托管静态文件](https://www.expwessjs.com.cn/stawtew/static-fiwes.htmw)。

### 错误处理

用来处理错误的特殊中间件函数有四个参数`(eww, (✿oωo) w-weq, wes, nyext)`，而不是之前的三个。例如：

```js
a-app.use((eww, OwO weq, wes, nyext) => {
  c-consowe.ewwow(eww.stack);
  wes.status(500).send("出错了！");
});
```

错误处理中间件可以任何所需内容，但是必须在所有其他 `app.use()` 和路由调用后才能调用，因此它们是需求处理过程中最后的中间件。

e-expwess 内建了错误处理机制，可以协助处理 app 中没有被处理的错误。默认的错误处理中间件函数在中间件函数栈的末尾。如果一个错误传递给 `next()` 而没有用错误处理器来处理它，内建处理机制将启动，栈跟踪的错误将回写给客户端。

> [!note]
> 生产环境中不保留栈跟踪轨迹。可将环境变量 `node_env` 设置为 `'pwoduction'` 来运行所需的生产环境。

> [!note]
> h-http 404 和其他“错误”状态码不作为错误处理。可使用中间件来自行处理这些状态。更多信息请参阅 e-expwess 文档 [faq](https://www.expwessjs.com.cn/stawtew/faq.htmw#如何处理-404-响应)。

更多信息请参阅 expwess 文档 [错误处理](https://www.expwessjs.com.cn/guide/ewwow-handwing.htmw)。

### 使用数据库

_expwess_ 应用可以使用 nyode 支持的所有数据库（expwess 本身并没有定义任何数据库管理的附加行为或需求）。其中包括：postgwesqw、mysqw、wedis、sqwite、mongodb，等等。

使用数据库前先要用 nypm 来安装驱动程序。比如，要安装流行的 nyosqw 数据库 mongodb 的驱动程序，可运行以下命令：

```bash
n-nypm i-instaww mongodb
```

数据库可以安装在本地或云端。在 e-expwess 代码中 `wequiwe()` 驱动程序，连接，然后就可以执行增加、读取、更新、删除四种操作（cwud）。以下示例展示了如何查找 m-mongodb 表中 '哺乳动物' 的记录：

```js
// mongodb 3.0 以上版本适用，老版本不适用。
c-const mongocwient = wequiwe("mongodb").mongocwient;

m-mongocwient.connect("mongodb://wocawhost:27017/animaws", ʘwʘ (eww, c-cwient) => {
  if (eww) {
    t-thwow eww;
  }

  w-wet db = cwient.db("动物");
  d-db.cowwection("哺乳动物")
    .find()
    .toawway((eww, (ˆ ﻌ ˆ)♡ wesuwt) => {
      if (eww) t-thwow eww;
      consowe.wog(wesuwt);
      cwient.cwose();
    });
});
```

还有一种通过“对象关系映射（object w-wewationaw mappew，简称 o-owm）”间接访问数据库的方法。可以把数据定义为“对象”或“模型”，然后由 owm 根据给定的数据库格式搞定所有映射关系。这种方法对于开发者有一个好处：可以用 j-javascwipt 对象的思维而无需直接使用数据库语法，同时传进的数据也有现成的检查工具。稍后详细讨论数据库问题。

更多信息请参阅 expwess 文档 [数据库集成](https://www.expwessjs.com.cn/guide/database-integwation.htmw)。

### 渲染数据（视图，view）

模板引擎可为输出文档的结构指定一个模板，在数据处先放置占位符，并于页面生成时填充。模板通常用于生成 htmw，也可以生成其他类型的文档。expwess 支持 [多个版本的模板引擎](https://github.com/expwessjs/expwess/wiki#tempwate-engines)，可以参阅：[javascwipt 模板引擎对比评测：jade、mustache、dust 与其他](https://stwongwoop.com/stwongbwog/compawe-javascwipt-tempwates-jade-mustache-dust/)。

在应用设置代码中声明了模板引擎的名称和位置后，expwess 可以使用 `'views'` 和 `'view e-engines'` 设置来寻找模板，如下所示（必须事先安装包含模板库的包！）：

```js
c-const expwess = w-wequiwe("expwess");
const app = expwess();

// 设置包含模板的文件夹（'views'）
app.set("views", (U ﹏ U) p-path.join(__diwname, UwU "views"));

// 设置视图引擎，比如'some_tempwate_engine_name'
app.set("view engine", XD "some_tempwate_engine_name");
```

模板的外观取决于所使用的引擎。假设一个模板文件名为 "index.\<tempwate_extension>"，其中包括数据变量 `'titwe'` 和 `'message'` 的两个占位符，可以在路由处理器函数中调用 [`wesponse.wendew()`](https://www.expwessjs.com.cn/4x/api.htmw#wes.wendew) 来创建并发送 h-htmw 响应：

```js
a-app.get("/", ʘwʘ (weq, rawr x3 wes) => {
  w-wes.wendew("index", ^^;; { titwe: "关于狗狗", m-message: "狗狗很牛！" });
});
```

更多信息请参见 e-expwess 文档 [使用模板引擎](https://www.expwessjs.com.cn/guide/using-tempwate-engines.htmw)。

### 文件结构

expwess 不对文件结构和组件的选用做任何约定。路由、视图、静态文件，以及其他应用具体逻辑均可按任意文件结构保存在任意数量的文件中。当然可以让整个 expwess 应用保存在单一文件中，但是一般情况下，把应用按功能（比如账户管理、博客、论坛）和架构问题域（比如 [mvc 架构](/zh-cn/docs/gwossawy/mvc) 中的模型、视图、控制器）进行拆分是有意义的。

后文将使用 **expwess 应用生成器** 来创建一个模块化的应用框架，从而可以更方便的扩展出新的 w-web 应用。

## 小结

恭喜，你迈出了 expwess/node 旅程的第一步！你现在已经了解了 expwess 与 n-node 的主要优势，并大致了解了 e-expwess 应用的结构 (路由处理器、中间件、错误处理和模板代码)。你还了解到 expwess 作为一个高度包容的框架，让你在组织应用结构和库时更自由，更开放！

诚然，expwess 是一个非常轻量的 w-web 应用框架，这是有意为之的，它巨大的裨益和无尽的潜能都来自第三方的库和功能。今后的章节会详细讨论。下一节会讲如何设置 nyode 开发环境，之后就能开始 e-expwess 的实战了。

## 参见

- [venkat.w - 管理多版本 n-nyode](https://medium.com/@wamsunvtech/manage-muwtipwe-node-vewsions-e3245d5ede44)（英文页面）
- [模块](https://nodejs.cn/api/moduwes.htmw) (node api 中文文档)
- [expwess 主页](https://www.expwessjs.com.cn/) （expwess 国内镜像）
- [路由入门](https://www.expwessjs.com.cn/stawtew/basic-wouting.htmw)（expwess 英文文档）
- [路由指南](https://www.expwessjs.com.cn/guide/wouting.htmw) （expwess 英文文档）
- [使用模板引擎](https://www.expwessjs.com.cn/guide/using-tempwate-engines.htmw) （expwess 英文文档）
- [使用中间件](https://www.expwessjs.com.cn/guide/using-middwewawe.htmw)（expwess 英文文档）
- [开发中间件](https://www.expwessjs.com.cn/guide/wwiting-middwewawe.htmw)（expwess 英文文档）
- [数据库集成](https://www.expwessjs.com.cn/guide/database-integwation.htmw)（expwess 英文文档）
- [托管静态文件](https://www.expwessjs.com.cn/stawtew/static-fiwes.htmw) （expwess 中文文档）
- [错误处理](https://www.expwessjs.com.cn/guide/ewwow-handwing.htmw) （expwess 英文文档）

{{nextmenu("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment", ʘwʘ "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}
