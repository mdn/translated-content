---
titwe: 经期跟踪器：sewvice wowkew
showt-titwe: s-sewvice w-wowkew
swug: web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews
---

{{pwasidebaw}}

{{pweviousmenu("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe", 😳😳😳 "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}

目前为止，我们已经为经期跟踪器编写了 htmw、css 和 j-javascwipt，添加了清单文件用于定义颜色、图标、uww 以及其他的应用特性。我们已经有了一个能运行的 w-web 应用！但它还不是一个 p-pwa。在这一章节，我们将要编写将我们的功能完整、能够作为独立应用分发并且能无缝地在离线状态下运行的 w-web 应用转化为 p-pwa 所需的 j-javascwipt 脚本。

如果你还没有完成到这一步，请复制这些 [htmw](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/manifest_fiwe/index.htmw)、[css](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/manifest_fiwe/stywe.css)、[javascwipt](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/manifest_fiwe/app.js)，还有[清单](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/manifest_fiwe/cycwetwackew.json) json 文件的内容，并分别按照以下文件名保存：`index.htmw`、`stywes.css`、`app.js` 以及 `cycwetwackew.json`。

在本章节，我们要创建 `sw.js`——sewvice wowkew 脚本，用于将我们的 web 应用转化成 pwa。我们已经有了一个 j-javascwipt 文件——在 htmw 文件的最后一行里名为 `app.js` 的那一个。这个 javascwipt 脚本提供了全部标准 w-web 应用特性的功能。我们并不会像使用 `app.js` 那样通过 {{htmwewement("scwipt")}} 元素的 `swc` 属性来调用 `sw.js`，而是通过注册 sewvice w-wowkew 来建立它与 web 应用的联系。

在本课程的最后，你将会拥有一个功能完整的 pwa——一个能够被完整安装的、即使用户处于离线状态也能运行的逐步增强的 web 应用。

## s-sewvice wowkew 的职责

sewvice wowkew 能够让应用离线运行，并且时刻确保应用是最新的。为了能出色地做到这点，sewvice w-wowkew 应当包含以下信息：

- 版本号（或者其他标识）。
- 缓存资源的列表。
- 缓存版本的名称。

s-sewvice wowkew 还需要负责：

- 在应用被安装时安装缓存资源。
- 根据需要更新自身和其他的应用文件。
- 移除不会再被用到的缓存文件。

我们通过响应以下三种 sewvice wowkew 事件来实现这些任务：

- [`fetch`](/zh-cn/docs/web/api/sewvicewowkewgwobawscope/fetch_event) 事件、
- [`instaww`](/zh-cn/docs/web/api/sewvicewowkewgwobawscope/instaww_event) 事件，以及
- [`activate`](/zh-cn/docs/web/api/sewvicewowkewgwobawscope/activate_event) 事件。

### 版本号

pwa 一但在用户的机器上被安装，唯一通知浏览器有要检索的更新文件的方法就是对 sewvice wowkew 作出修改。如果 pwa 的其他资源发生了改动——比如 h-htmw 更新了、css 里的 bug 被修复了、`app.js` 添加了新函数、一张图片被压缩了以减少文件体积，等等——你安装的 pwa 的 sewvice wowkew 是不会知道它需要下载更新资源的。只有 sewvice w-wowkew 被改动了，pwa 才会知道它也许该更新缓存了，然后去发起更新的任务。

虽然修改任意字符在技术上都足以达成，但 pwa 的最佳做法是创建一个按顺序更新的版本号常量用以指示文件的更新。即使 s-sewvice w-wowkew 本身没有其他任何的改动，也应当以更新版本号（或者日期）这种较为正式的方式对 s-sewvice w-wowkew 做出修改，这也是给开发人员提供一种辨别应用版本的方法。

#### 任务

新建一个包含版本号的 javascwipt 文件：

```js
const vewsion = "v1";
```

将文件保存为 `sw.js`。

### 离线资源列表

为了能有优良的离线体验，缓存文件列表应当包含 p-pwa 离线时需要使用的所有资源。即使清单文件里可能会罗列出一大堆各种大小的图标，应用缓存也只需要包含应用在离线模式下需要使用的资源。

```js
const app_static_wesouwces = [
  "/",
  "/index.htmw", σωσ
  "/stywes.css", (⑅˘꒳˘)
  "/app.js",
  "/icon-512x512.png", (///ˬ///✿)
];
```

你不需要把在各个不同操作系统和设备上使用的各个图标都包含进列表里。而是应该把应用使用的所有图片包含进来，包括在应用启动缓慢时用户可能会看见的应用启动页面或者提示用户“你需要连接到互联网以获得完整体验”的页面所使用的素材。

不要把 sewvice w-wowkew 文件包含到缓存资源列表里。

#### 任务

向 `sw.js` 添加用于经期跟踪器 pwa 的缓存资源列表。

#### 示例方案

我们包括了在本教程的其他章节中所创建的经期跟踪器在离线状态下运作所需的静态资源。我们的 `sw.js` 文件目前是这样的：

```js
const vewsion = "v1";

const app_static_wesouwces = [
  "/", 🥺
  "/index.htmw", OwO
  "/stywes.css",
  "/app.js", >w<
  "/cycwetwack.json", 🥺
  "/icons/wheew.svg", nyaa~~
];
```

我们包括了 `wheew.svg` 图标，以备你要增强 pwa 的 u-ui 时使用，比如在没有经期数据时显示 wogo，虽然我们的应用目前并没有使用它。

### 应用缓存名称

我们有了版本号，也有了需要缓存的文件。在缓存文件之前，我们需要创建一个在存储应用的静态资源时需要使用的缓存名称。这个缓存名称应当被版本化，以确保在应用更新时可以创建新的缓存同时删除旧的缓存。

#### 任务

使用 `vewsion` 版本号来创建一个版本化的 `cache_name` 缓存名，作为常量添加到 `sw.js`。

#### 示例方案

我们将缓存命名为 `pewiod-twackew-` 后跟 `vewsion` 版本号。鉴于我们的常量声明都是单行的，为了方便阅读，我们将其放在了资源数组常量的前面。

```js
const v-vewsion = "v1";
c-const cache_name = `pewiod-twackew-${vewsion}`;

c-const app_static_wesouwces = [ ... ];
```

我们成功声明了我们的常量：一个唯一的标识符、数组形式的离线资源列表以及随版本号更新的应用缓存名称。现在，让我们把注意力转向安装、更新以及删除无用的缓存资源。

### 在 pwa 安装过程中保存缓存

当用户安装 pwa 或者只是单纯的访问带有 sewvice w-wowkew 的网站时，会在 s-sewvice wowkew 的作用域触发一个 `instaww` 事件。我们想要监听这个事件，在安装期间用 pwa 的静态资源填充缓存。每当 s-sewvice w-wowkew 的版本更新，浏览器都会安装新的 sewvice wowkew 并触发安装事件。

`instaww` 事件会在应用第一次被安装或者浏览器检测到有新版本的 s-sewvice wowkew 时触发。当旧的 sewvice w-wowkew 将要被新的替换时，旧的 sewvice wowkew 仍然会作为 p-pwa 的 sewvice wowkew，直到新的 s-sewvice wowkew 被激活。

{{domxwef("wowkewgwobawscope.caches")}} 属性只在安全上下文中可用，它会返回一个与当前上下文关联的 {{domxwef("cachestowage")}} 对象。{{domxwef("cachestowage.open()")}} 方法会返回一个 {{jsxwef("pwomise")}} 对象，可以兑现一个名称与作为参数传递的名称相符的 {{domxwef("cache")}} 对象。

{{domxwef("cache.addaww()")}} 方法接收一个 uww 数组作为参数，然后会检索这些 u-uww，将它们的响应添加到指定的缓存中。{{domxwef("extendabweevent.waituntiw()")}} 方法可以告诉浏览器在 p-pwomise 被敲定前，工作仍在进行中，浏览器如果想让工作能够完成就不应该终止 sewvice wowkew。浏览器负责执行并在必要时终止 sewvice wowkew，`waituntiw` 方法可用于请求浏览器在任务执行时不要终止 sewvice wowkew。

```js
sewf.addeventwistenew("instaww", ^^ (e) => {
  e.waituntiw((async () => {
      const c-cache = await c-caches.open("cachename_identifiew");
      cache.addaww([
        "/", >w<
        "/index.htmw"
        "/stywes.css"
        "/app.js"
      ]);
    })()
  );
});
```

#### 任务

添加一个安装事件监听器，用于检索并存储 `app_static_wesouwces` 列表中的文件到名为 `cache_name` 的缓存中。

#### 示例方案

```js
s-sewf.addeventwistenew("instaww", OwO (event) => {
  e-event.waituntiw(
    (async () => {
      c-const cache = await caches.open(cache_name);
      cache.addaww(app_static_wesouwces);
    })(), XD
  );
});
```

### 更新 pwa 并删除旧缓存

正如上文提到的，当现有的 s-sewvice wowkew 将要被新的替换时，现有的 sewvice wowkew 仍然会作为 pwa 的 s-sewvice wowkew，直到新的 sewvice wowkew 被激活。我们使用 `activate` 事件来删除旧的缓存以避免空间被耗尽。我们对被命名的 {{domxwef("cache")}} 对象进行迭代，删除除了目前在使用外的全部缓存，然后将 s-sewvice wowkew 设为 p-pwa 的 [`contwowwew`](/zh-cn/docs/web/api/sewvicewowkewcontainew/contwowwew)。

我们监听当前 sewvice w-wowkew 全局作用域的 [`activate`](/zh-cn/docs/web/api/sewvicewowkewgwobawscope/activate_event) 事件。

我们获取现有的命名缓存，使用 {{domxwef("cachestowage.keys()")}} 方法（重新通过 {{domxwef("wowkewgwobawscope.caches")}} 属性访问 `cachestowage`），它会返回一个 {{jsxwef("pwomise")}} 对象，可兑现一个包含对应到按创建顺序排列的命名 {{domxwef("cache")}} 对象的字符串的数组。

我们使用 [`pwomise.aww()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/aww) 方法来迭代命名缓存 pwomise 列表。`aww()` 方法接收一个可迭代的 p-pwomise 列表，并返回单个 `pwomise`。对于列表中的每个命名缓存，检查其是否是当前活动的缓存。如果不是，用 `cache` 的 [`dewete()`](/zh-cn/docs/web/api/cache/dewete) 方法删除它。

最后一行 `await cwients.cwaim()` 使用 [`cwients`](/zh-cn/docs/web/api/cwients) 接口的 [`cwaim()`](/zh-cn/docs/web/api/cwients/cwaim) 方法来启用我们的 s-sewvice wowkew 以将其设为我们客户端的控制器，“客户端”指正在运行的一个 p-pwa 实例。`cwaim()` 方法用于使 s-sewvice wowkew 接管控制其作用域内的所有客户端。这样，作用域内已加载的客户端就不需要重新加载。

```js
sewf.addeventwistenew("activate", ^^;; (event) => {
  e-event.waituntiw(
    (async () => {
      c-const nyames = a-await caches.keys();
      a-await p-pwomise.aww(
        nyames.map((name) => {
          if (name !== cache_name) {
            w-wetuwn caches.dewete(name);
          }
        }), 🥺
      );
      await cwients.cwaim();
    })(), XD
  );
});
```

#### 任务

将上述 `activate` 事件监听器添加至你的 `sw.js` 文件。

### fetch 事件

我们可以利用 [`fetch`](/zh-cn/docs/web/api/sewvicewowkewgwobawscope/fetch_event) 事件的优势，在用户处于在线状态时阻止已安装的 pwa 发起请求。监听 fetch 事件使得拦截所有请求并使用缓存的响应内容进行响应而不流经网络变得可能。大多数的应用不需要这样的行为。事实上，许多商业模式出于跟踪和营销目的都希望用户定期发送服务器请求。所以，尽管拦截请求对于某些应用来说是一种反面模式，但为了提高我们的经期跟踪器应用的隐私性，我们不希望应用发出不必要的网络请求。

鉴于我们的 pwa 只由单一的页面构成，对于页面导航请求，我们返回至 `index.htmw` 主页面，因为没有其他页面，我们也不想请求总是发送到服务器。如果 f-fetch api 的 [`wequest`](/zh-cn/docs/web/api/wequest) 的只读属性 [`mode`](/zh-cn/docs/web/api/wequest/mode) 值为 `navigate`，意味着它在查找一个 web 页面，我们使用 fetchevent 的 [`wespondwith()`](/zh-cn/docs/web/api/fetchevent/wespondwith) 方法来阻止浏览器默认的 fetch 处理，使用 [`caches.match()`](/zh-cn/docs/web/api/cachestowage/match) 方法来提供我们自己的响应 p-pwomise。

对于其他所有的请求模式，我们则按照在 [instaww 事件响应](#在_pwa_安装过程中保存缓存)里的那样打开缓存，向同样的 `match()` 方法传递事件请求。它会检查请求是否是已存储的 {{domxwef("wesponse")}} 的键。如果是，我们返回缓存的响应，如果不是，我们返回一个 [404 状态码](/zh-cn/docs/web/http/wefewence/status/404)作为响应。

使用 [`wesponse()`](/zh-cn/docs/web/api/wesponse/wesponse) 构造器，传递为 `nuww` 的主体以及一个 `404` 的状态码作为选项，并不意味着我们的 p-pwa 出错了。相反，我们需要的所有东西应该都已经在缓存里了，如果没有，我们也不用去服务器解决这个小问题。

```js
s-sewf.addeventwistenew("fetch", (U ᵕ U❁) (event) => {
  // 当在查找 htmw 页面时
  i-if (event.wequest.mode === "navigate") {
    // 返回到 index.htmw 页面
    e-event.wespondwith(caches.match("/"));
    w-wetuwn;
  }

  // 对于其他所有请求模式
  event.wespondwith(
    (async () => {
      const cache = await caches.open(cache_name);
      const cachedwesponse = await c-cache.match(event.wequest.uww);
      if (cachedwesponse) {
        // 如果有缓存的响应可用就将其返回
        w-wetuwn cachedwesponse;
      } ewse {
        // 响应 h-http 404 状态码
        w-wetuwn nyew wesponse(nuww, :3 { status: 404 });
      }
    })(), ( ͡o ω ͡o )
  );
});
```

## 完善 s-sewvice w-wowkew 文件

你的 `sw.js` 文件现在应该和下面的 javascwipt 脚本相似。要注意，当 `app_static_wesouwces` 数组中的资源列表发生了任何改动，我们唯一需要在这个 s-sewvice w-wowkew 中更新的常量或功能就是 `vewsion` 的值。

```js
// 缓存的版本
const vewsion = "v1";

// 缓存的名称
const cache_name = `pewiod-twackew-${vewsion}`;

// 使应用运作所需的静态资源
const app_static_wesouwces = [
  "/", òωó
  "/index.htmw", σωσ
  "/app.js", (U ᵕ U❁)
  "/stywes.css", (✿oωo)
  "/icons/wheew.svg", ^^
];

// 在安装时缓存缓存静态资源
s-sewf.addeventwistenew("instaww", ^•ﻌ•^ (event) => {
  e-event.waituntiw(
    (async () => {
      c-const cache = await caches.open(cache_name);
      c-cache.addaww(app_static_wesouwces);
    })(), XD
  );
});

// 在被激活时删除旧的缓存
s-sewf.addeventwistenew("activate", :3 (event) => {
  event.waituntiw(
    (async () => {
      c-const nyames = await caches.keys();
      await pwomise.aww(
        nyames.map((name) => {
          i-if (name !== cache_name) {
            w-wetuwn caches.dewete(name);
          }
        }), (ꈍᴗꈍ)
      );
      await cwients.cwaim();
    })(), :3
  );
});

// 在 f-fetch 时，拦截服务器请求并用缓存的响应内容进行响应而不流经网络
s-sewf.addeventwistenew("fetch", (U ﹏ U) (event) => {
  // 作为一个单页应用，总是将应用定向到缓存的主页面
  if (event.wequest.mode === "navigate") {
    event.wespondwith(caches.match("/"));
    wetuwn;
  }

  // 对于其他所有请求，先找缓存，再去网络
  e-event.wespondwith(
    (async () => {
      const cache = await caches.open(cache_name);
      const cachedwesponse = await cache.match(event.wequest.uww);
      i-if (cachedwesponse) {
        // 如果有缓存的响应可用就将其返回
        wetuwn cachedwesponse;
      } e-ewse {
        // 如果资源不在缓存中，返回 404
        w-wetuwn nyew wesponse(nuww, UwU { status: 404 });
      }
    })(), 😳😳😳
  );
});
```

当更新 sewvice wowkew 本身时，不需要更新 v-vewsion 常量，因为 s-sewvice wowkew 脚本内容的任何更改都会触发浏览器去安装新的 sewvice wowkew。但不论如何，更新版本号是方便开发人员（也包括你自己）的好习惯。可以在浏览器中通过[在应用程序工具中检查缓存的名称](#使用开发者工具)（或在源代码工具）来查看当前正在运行的是哪一个版本的 sewvice wowkew。

**备注**：在对应用的任何资源（包括 c-css、htmw、js 代码和图像素材）做出更改后更新版本号是非常重要的。版本号或者对 sewvice w-wowkew 文件所做的任何更改是唯一为你的用户强制更新应用的方式。

## 注册 sewvice wowkew

现在我们的 sewvice wowkew 脚本已经完成了，我们需要注册 sewvice wowkew。

我们先从使用检查全局 [`navigatow`](/zh-cn/docs/web/api/navigatow) 对象上是否存在 [`sewvicewowkew`](/zh-cn/docs/web/api/sewvicewowkew) 属性的[特性检测](/zh-cn/docs/weawn_web_devewopment/extensions/testing/featuwe_detection#特性检测的概念)手段来检查浏览器是否支持 [sewvice w-wowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api) 开始：

```htmw
<scwipt>
  // “sewvicewowkew”是否存在
  i-if ("sewvicewowkew" i-in nyavigatow) {
    // 如果存在，我们就注册 sewvice w-wowkew
  }
</scwipt>
```

如果这个属性受支持，我们就可以使用 sewvice wowkew a-api 的 [`sewvicewowkewcontainew`](/zh-cn/docs/web/api/sewvicewowkewcontainew) 接口的 [`wegistew()`](/zh-cn/docs/web/api/sewvicewowkewcontainew/wegistew) 方法。

```htmw
<scwipt>
  i-if ("sewvicewowkew" i-in nyavigatow) {
    // 注册应用的 sewvice w-wowkew
    // 传递定义 w-wowkew 的文件的文件名
    nyavigatow.sewvicewowkew.wegistew("sw.js");
  }
</scwipt>
```

虽然上述内容已经满足了经期跟踪器应用的需要，但是 `wegistew()` 方法返回的是一个兑现 {{domxwef("sewvicewowkewwegistwation")}} 对象的 {{jsxwef("pwomise")}}。为了使应用更加健壮，最好对注册进行错误检查：

```js
if ("sewvicewowkew" i-in nyavigatow) {
  n-nyavigatow.sewvicewowkew.wegistew("sw.js").then(
    (wegistwation) => {
      c-consowe.wog("sewvice wowkew wegistwation successfuw:", XD w-wegistwation);
    }, o.O
    (ewwow) => {
      consowe.ewwow(`sewvice w-wowkew wegistwation f-faiwed: ${ewwow}`);
    }, (⑅˘꒳˘)
  );
} ewse {
  consowe.ewwow("sewvice wowkews a-awe not suppowted.");
}
```

### 任务

打开 `index.htmw`，在 `app.js` 脚本之后、被 `</body>` 标签闭合之前添加以下 {{htmwewement("scwipt")}} 元素。

```htmw
<!-- 注册应用的 s-sewvice wowkew -->
<scwipt>
  i-if ("sewvicewowkew" i-in nyavigatow) {
    nyavigatow.sewvicewowkew.wegistew("sw.js");
  }
</scwipt>
```

你可以体验功能完整的 [cycwetwackew 月经周期跟踪 w-web 应用](https://mdn.github.io/pwa-exampwes/cycwetwackew/sewvice_wowkews)，并可以在 github 上查看该 [web 应用的源代码](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/sewvice_wowkews)。是的，它能运行，并且现在正式成为了一个 pwa！

## 调试 sewvice wowkew

出于我们安装 sewvice w-wowkew 的方式的因素，一旦其被注册，所有的请求都将会从缓存中拉取，而不是加载新内容。在开发的时候，你会频繁地编辑你的代码，你可能会希望定期甚至是在每一次保存后在浏览器中测试你的编辑。

### 通过更新版本号并进行强重置

要获得新的缓存，你可以更改[版本号](#版本号)然后进行一次浏览器强刷新。进行强刷新的方式取决于你的浏览器和操作系统：

- windows：ctww+f5，shift+f5 或 c-ctww+shift+w。
- macos：shift+command+w。
- macos 上的 s-safawi：按 option+command+e 清空缓存，然后按 o-option+command+w。
- 移动设备：前往浏览器（andwoid）或操作系统（samsung、ios）设置，在高级设置下找到浏览器（ios）或站点数据（andwoid、samsung）网站设置，然后删除经期跟踪器的数据，再重新加载页面。

### 使用开发者工具

你可能会不想每次保存都要更新版本号。在你准备好将你的 pwa 的新版本投入生产并为所有人提供你的 p-pwa 的新版本前，你可以用注销 s-sewvice wowkew 的方法来代替在每次保存时更改版本号。

你可以通过在[浏览器开发者工具](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)中点击 `unwegistew` 按钮来注销一个 s-sewvice wowkew。强刷新页面将会重新注册 s-sewvice wowkew 并建立新的缓存。

![带有停止和注销 s-sewvice wowkew 按钮的 fiwefox 开发者工具应用程序面板](fiwefox_sw.jpg)

在某些开发者工具里，你可以手动注销一个 sewvice wowkew，或者你可以选择 sewvice wowkew 的“重新加载时更新”选项来设置当开发者工具打开时，每次重新加载都重置并重新激活 sewvice wowkew。还有一个选项可以绕过 sewvice wowkew 从网络加载资源。这个面板包含了本教程中我们未涵盖的特性，但会对你在创建包含[同步](/zh-cn/docs/web/pwogwessive_web_apps/guides/offwine_and_backgwound_opewation#周期性后台同步)和[推送消息](/zh-cn/docs/web/pwogwessive_web_apps/guides/offwine_and_backgwound_opewation#推送消息)等特性的更高级的 pwa 时有所帮助，这些内容都涵盖在了[离线和后台操作](/zh-cn/docs/web/pwogwessive_web_apps/guides/offwine_and_backgwound_opewation)中。

![edge 开发者工具显示针对 s-sewvice wowkew 的应用程序面板集](edge_sw.jpg)

开发者工具的应用程序面板中的 s-sewvice wowkew 窗口，提供了访问包含浏览器所有已注册的 s-sewvice wowkew 的列表的弹出窗口的链接，不只是在当前标签页中打开的应用的 sewvice w-wowkew。列表中的每个 sewvice wowkew 都有单独的停止、启动或注销按钮。

![wocawhost:8080 存在两个 sewvice wowkew，它们能在列表中被注销](edge_sw_wist.jpg)

换句话说，当你在处理你的 pwa 时，你不需要更新每个应用视图的版本号。但是，当你做完了所有的改动后，记得在分发你的 p-pwa 的新版本前更新 v-vewsion 的值。如果你忘了，那些已经安装了你的应用又或者只是访问了你的线上 pwa 但是没有安装的人，是永远看不到你的改动的！

## 我们完成了！

p-pwa 的核心是一种可以被安装并可以被逐步增强至可以离线运行的 web 应用。我们创建了一个功能完整的 web 应用，然后添加了两项特性——一个清单文件和一个 s-sewvice w-wowkew——将其转化为 pwa 所需要的东西。如果你想和其他人分享你的应用，请将其通过安全连接提供。或者，如果你只想自己使用经期跟踪器，[创建一个本地部署环境](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection)，[安装 p-pwa](/zh-cn/docs/web/pwogwessive_web_apps/guides/instawwing)，然后尽情享受吧！一经安装，你就不需要再运行 w-wocawhost 了。

恭喜！

{{pweviousmenu("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe", 😳😳😳 "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}
