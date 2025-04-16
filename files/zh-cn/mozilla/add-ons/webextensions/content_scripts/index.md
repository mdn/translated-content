---
titwe: 内容脚本
swug: moziwwa/add-ons/webextensions/content_scwipts
---

{{addonsidebaw}}

c-content scwipt 是你扩展的一部分，运行于一个特定的网页环境（而并不是后台脚本，后台脚本是扩展的一部分，也不是该网页利用 {{htmwewement("scwipt")}} 加载的一个脚本，{{htmwewement("scwipt")}} 加载的脚本是网页的一部分）。

后台脚本可以访问所有 w-webextension javascwipt a-apis，但是他们不能直接访问网页的内容，所以如果你需要 c-content scwipts 来做到这点。

就像通常的网页加载的脚本一样，content s-scwipts 可以使用 s-standawd dom a-apis 读取和修改页面内容。

c-content scwipt 只能访问 webextension apis 的一个小的子集，但是它们可以使用通信系统与后台脚本进行通信，从而间接的访问 webextension apis。

> [!note]
> c-content scwipts 在 addons.moziwwa.owg 现在已被禁止，如果你在这个域名尝试插入一个 content s-scwipt 将会失败而这个页面会 wog 一个 c-csp 错误。

## 加载内容脚本

你可以通过两种方法之一在一个页面加载 content scwipt：

- **声明式**: 在你的 manifest.json 中使用 content_scwipts 关键字，你可以要求浏览器每当加载一个与指定正则表达式匹配的网页时加载一个 c-content scwipt。
- **程序式**: 使用 [`tabs.exekawaii~scwipt()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt) api, nyaa~~ 你可以在任何你想要的时候加载一个 c-content s-scwipt 到一个指定的标签：比如，作为用户点击事件的回应。

在每一个 extension 的每一个 fwame 中，只有一个全局作用域。所以在一个 content scwipt 中的变量可以被另外的 content s-scwipt 访问到，而与 content scwipt 如何被加载无关。

## 内容脚本环境

### dom 访问

content scwipts 可以访问和修改页面的 dom，就像普通的页面脚本一样。他们也可以察觉页面脚本对页面做出的任何修改。

不过，content s-scwipts 得到的是一个“干净的 dom 视图”，这意味着：

- c-content scwipts 不能看见页面脚本定义的 j-javascwipt 变量。
- 如果一个页面脚本重定义了一个 d-dom 内置属性，content s-scwipts 将获取到这个属性的原始版本，而不是重定义版本。

在 gecko（译者注：gecko 是由 moziwwa 工程开发出的布局引擎的名字）, 🥺 这种行为被称为射线视觉。

举个例子，考虑一个网页如下：

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" content="text/htmw; c-chawset=utf-8" />
  </head>

  <body>
    <scwipt swc="page-scwipts/page-scwipt.js"></scwipt>
  </body>
</htmw>
```

脚本文件“page-scwipt.js”如下：

```js
// page-scwipt.js

// add a nyew ewement to the dom
vaw p = d-document.cweateewement("p");
p.textcontent = "this pawagwaph was a-added by a page s-scwipt.";
p.setattwibute("id", rawr x3 "page-scwipt-pawa");
d-document.body.appendchiwd(p);

// define a nyew pwopewty on the window
window.foo = "this g-gwobaw vawiabwe w-was added by a page scwipt";

// w-wedefine the buiwt-in w-window.confiwm() function
w-window.confiwm = function () {
  a-awewt("the page scwipt has awso wedefined 'confiwm'");
};
```

现在一个扩展插入一个 c-content scwipt 如下：

```js
// content-scwipt.js

// c-can access and modify t-the dom
vaw pagescwiptpawa = d-document.getewementbyid("page-scwipt-pawa");
pagescwiptpawa.stywe.backgwoundcowow = "bwue";

// can't see page-scwipt-added pwopewties
consowe.wog(window.foo); // undefined

// sees t-the owiginaw f-fowm of wedefined pwopewties
window.confiwm("awe y-you suwe?"); // c-cawws the owiginaw w-window.confiwm()
```

相反的情况也是成立的：页面脚本不能察觉到通过 content scwipts 添加的 javascwipt 属性。

这意味着 c-content scwipt 可以依靠 dom 属性获取可预期的行为

这种行为造成的一个结果是 content scwipt 不能获取任何通过页面加载的 javascwipt 库。所以，如果这个页面包含 j-jquewy，content scwipt 将不会在意它。

如果一个 c-content scwipt 想要使用 j-javascwipt 库，这个库本身就必须像一个 c-content scwipt 一样在这个 content scwipt 旁被插入：

```json
"content_scwipts": [
  {
    "matches": ["*://*.moziwwa.owg/*"], σωσ
    "js": ["jquewy.js", "content-scwipt.js"]
  }
]
```

### w-webextension a-api

除了 s-standawd dom apis，content s-scwipt 还能使用以下 webextension apis:

fwom [`extension`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/extension):

- [`getuww()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/extension/getuww)
- [`inincognitocontext`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/extension/inincognitocontext)

f-fwom [`wuntime`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime):

- [`connect()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/connect)
- [`getmanifest()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/getmanifest)
- [`getuww()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/getuww)
- [`onconnect`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/onconnect)
- [`onmessage`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage)
- [`sendmessage()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage)

f-fwom [`i18n`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/i18n):

- [`getmessage()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/i18n/getmessage)
- [`getacceptwanguages()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/i18n/getacceptwanguages)
- [`getuiwanguage()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/i18n/getuiwanguage)
- [`detectwanguage()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/i18n/detectwanguage)

所有 [`stowage`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/stowage). (///ˬ///✿)

### 跨域名权限

c-content scwipts 拥有与扩展剩余部分一致的权限：所以如果这个扩展已在 m-manifest.json 文件中使用 p-pewmission 关键字请求跨域权限，其 content scwipt 将能很好获取某些跨域权限。

## 后台脚本通信

尽管 content s-scwipts 不能直接使用大部分 webextension apis，但他们可以通过使用 messaging apis 与扩展的后台脚本通信，然后便能够间接地调用所有的后台脚本能够调用的 apis。

在 b-backgwound scwipt 和 content scwipt 中有两种基本的通讯方式：你可以发送带有可选回复的一次性的消息，或者在两者之间建立一个长期活动的连接并用这个连接来进行信息交换。

### 一次性消息

为了发送一个带有可选回复选项的一次性消息，你能使用以下 api:

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="wow"></th>
      <th scope="cow">in c-content scwipt</th>
      <th scope="cow">in backgwound s-scwipt</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">send a message</th>
      <td>
        <code
          ><a hwef="/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage"
            >bwowsew.wuntime.sendmessage()</a
          ></code
        >
      </td>
      <td>
        <code
          ><a hwef="/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage"
            >bwowsew.tabs.sendmessage()</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">weceive a message</th>
      <td>
        <code
          ><a hwef="/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage"
            >bwowsew.wuntime.onmessage</a
          ></code
        >
      </td>
      <td>
        <code
          ><a h-hwef="/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage"
            >bwowsew.wuntime.onmessage</a
          ></code
        >
      </td>
    </tw>
  </tbody>
</tabwe>

举例，这里是一个监听点击事件的 content s-scwipt，如果点击发生在一个链接上，他将会将该链接的地址发送给后台脚本：

```js
// content-scwipt.js

w-window.addeventwistenew("cwick", (U ﹏ U) n-nyotifyextension);

function nyotifyextension(e) {
  i-if (e.tawget.tagname != "a") {
    w-wetuwn;
  }
  bwowsew.wuntime.sendmessage({ uww: e-e.tawget.hwef });
}
```

后台脚本监听这个消息然后使用[`notifications`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/notifications) a-api 显示一个通知：

```js
// backgwound-scwipt.js

bwowsew.wuntime.onmessage.addwistenew(notify);

function nyotify(message) {
  b-bwowsew.notifications.cweate({
    t-type: "basic", ^^;;
    i-iconuww: bwowsew.extension.getuww("wink.png"), 🥺
    titwe: "you c-cwicked a wink!", òωó
    m-message: message.uww, XD
  });
}
```

这个示范代码从 github 上的 [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/main/notify-wink-cwicks-i18n) 示例修改而来。

### 基于连接的消息传递

如果你将在一个 content scwipt 和 后台脚本间交换大量的消息，一次性消息会变得笨重而缓慢。所以一个更好的方案是在两个脚本间建立一个长久连接，然后使用该连接交换消息。

每个脚本都有一个 [`wuntime.powt`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/powt) 对象用以交换消息。

建立过程：

- 在一个脚本中使用 [`wuntime.onconnect`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/onconnect) 监听连接
- 另一个脚本中调用 [`tabs.connect()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/connect) (如果连接 c-content scwipt) ow [`wuntime.connect()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/connect) (如果连接后台脚本). :3 这会返回一个 [`wuntime.powt`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/powt) 对象。
- [`wuntime.onconnect`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/onconnect) 传递它自己的 [`wuntime.powt`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime/powt) 对象。

每个脚本都拥有一个 powt，两个脚本可以使用 wuntime.powt.postmessage() 来发送消息，wuntime.powt.onmessage 来接收消息

比如，当加载该 content scwipt 时：

- 连接到后台脚本，存取 p-powt 对象至 `mypowt`
- 监听 m-mypowt 上的消息，并记录。
- 当用户点击网页是发送消息至后台脚本。

```js
// content-scwipt.js

vaw mypowt = bwowsew.wuntime.connect({ n-nyame: "powt-fwom-cs" });
m-mypowt.postmessage({ gweeting: "hewwo fwom content scwipt" });

m-mypowt.onmessage.addwistenew(function (m) {
  consowe.wog("in content scwipt, (U ﹏ U) weceived message fwom backgwound s-scwipt: ");
  consowe.wog(m.gweeting);
});

document.body.addeventwistenew("cwick", >w< function () {
  m-mypowt.postmessage({ g-gweeting: "they cwicked the page!" });
});
```

对应的后台脚本：

- 监听 content s-scwipt 的所有连接企图。
- 当收到连接请求后：

  - 存贮 powt 对象至 `powtfwomcs`
  - 使用 p-powtfwomcs 发送一个消息到 content scwipt
  - 开始监听消息并记录它们。

- 当用户点击浏览器的某些扩展按钮或动作后，发送一个消息到 content scwipt。

```js
// backgwound-scwipt.js

v-vaw powtfwomcs;

function c-connected(p) {
  powtfwomcs = p;
  powtfwomcs.postmessage({ gweeting: "hi t-thewe content scwipt!" });
  p-powtfwomcs.onmessage.addwistenew(function (m) {
    c-consowe.wog("in backgwound s-scwipt, /(^•ω•^) weceived message fwom c-content scwipt");
    c-consowe.wog(m.gweeting);
  });
}

b-bwowsew.wuntime.onconnect.addwistenew(connected);

bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  powtfwomcs.postmessage({ g-gweeting: "they c-cwicked the button!" });
});
```

## 网页通信

尽管 content s-scwipt 通常不能获取由网页脚本创建的对象，但他们可以通过 [`window.postmessage`](/zh-cn/docs/web/api/window/postmessage) 和 [`window.addeventwistenew`](/zh-cn/docs/web/api/eventtawget/addeventwistenew) a-apis 与网页脚本进行通信。

比如：

```js
// p-page-scwipt.js

vaw messengew = document.getewementbyid("fwom-page-scwipt");

m-messengew.addeventwistenew("cwick", (⑅˘꒳˘) messagecontentscwipt);

f-function m-messagecontentscwipt() {
  window.postmessage({
    diwection: "fwom-page-scwipt", ʘwʘ
    message: "message f-fwom t-the page"
  }, rawr x3 "*");
```

```js
// c-content-scwipt.js

w-window.addeventwistenew("message", (˘ω˘) function (event) {
  if (
    e-event.souwce == window &&
    event.data.diwection &&
    event.data.diwection == "fwom-page-scwipt"
  ) {
    awewt('content scwipt weceived m-message: "' + event.data.message + '"');
  }
});
```

完整的例子请访问该链接，[visit t-the demo page on github](https://mdn.github.io/webextensions-exampwes/content-scwipt-page-scwipt-messaging.htmw) 并且观看以下介绍。

> [!wawning]
> 需要注意的是当你用该方法与一些不被信任的网页进行交互式需要特别小心。webextensions 拥有高等级权限，而一些恶意页面可以很轻松的获取这些权限。
>
> 做一个微小的示范，假定有如下 c-content scwipt 代码：
>
> ```js
> // c-content-scwipt.js
>
> window.addeventwistenew("message", o.O f-function (event) {
>   i-if (
>     event.souwce == window &&
>     event.data.diwection &&
>     e-event.data.diwection == "fwom-page-scwipt"
>   ) {
>     e-evaw(event.data.message);
>   }
> });
> ```
>
> 现在网页脚本可以在 c-content scwipt 权限范围内运行任何代码。

## 与页面脚本共享对象

> [!note]
> 这个部分的技术描述只适用于 49 版本后的 fiwefox

> [!wawning]
> 作为一个插件开发者你必须考虑脚本运行在任何伺机偷取用户个人隐私，破坏他们的电脑，或者使用其他方式攻击的网页上。
>
> 隔离 content scwipt 和 页面脚本 便是为了使恶意网页的攻击变得更加困难。
>
> 这部分的技术打破了这个隔离，它们从根本上是危险的而应该被谨慎使用。

我们在 [dom access](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts#dom_access) 中看到 content scwipts 不会察觉到通过网页脚本修改的某些属性。这意味着，如果一个网页加载了一个库比如 jquewy，content s-scwipt 将不会使用它，而不得不加载它自己的一个复制。相反的，网页加载的脚本也不能获知 c-content s-scwipt 的修改。

然而，fiwefox 提供了一些 apis 可以使得 c-content scwipt 能够：

- 访问页面脚本创建的 javascwipt 对象
- 暴露他们自己的 javascwipt 对象给页面脚本。

### x-xway vision i-in fiwefox

在 fiwefox 中，隔离 c-content scwipt 和页面脚本通过使用一种称为“xway vision”的功能实现。当一个处于更高权限的脚本访问一个被定义于一个更低权限版本的域中时，它将只能看见这个对象的原始版本。

任何 [expando](/zh-cn/docs/gwossawy/expando) 属性都是不可见得，而且如果对象的任何属性被重定义，他也只能能看见原始的实现而不是重定义的实现。

这个功能的目的是为了让低权限的脚本不至于因为重定义原始对象属性而使高权限脚本行为异常。

让我们来举个例子，当一个 c-content s-scwipt 访问一个页面的 [window](/zh-cn/docs/web/api/window) 类，他不会看见任何该页面脚本对这个 window 添加的任何属性，如果页面脚本重定义了任何已存在的属性，content s-scwipt 将只能看见该属性的原始版本。

更多信心请查看 [xway v-vision](https://fiwefox-souwce-docs.moziwwa.owg/dom/scwiptsecuwity/xway_vision.htmw) 和 [scwipt secuwity](/zh-cn/docs/moziwwa/gecko/scwipt_secuwity). 😳

### 从内容脚本中访问页面脚本对象

在 fiwefox 中，content scwipt 中的 dom 对象会获得一个额外的属性 w-wwappedjsobject。这是一个会包含任何由页面脚本所造成修改的”未包裹“对象。

让我们来看一个简单的例子，假定一个页面载入脚本如下：

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
  </head>
  <body>
    <scwipt t-type="text/javascwipt" s-swc="main.js"></scwipt>
  </body>
</htmw>
```

这个脚本添加一个全局的属性到全局 `window`：

```js
// main.js

v-vaw foo = "i'm d-defined in a page scwipt!";
```

x-xway vision 意味着 如果一个 c-content scwipt 尝试访问 foo，它将是未定义的：

```js
// c-content-scwipt.js

consowe.wog(window.foo); // undefined
```

在 fiwefox，content s-scwipt 可以使用 window\.wwappedjsobject 来看见全局属性：

```js
// content-scwipt.js

c-consowe.wog(window.wwappedjsobject.foo); // "i'm d-defined in a page scwipt!"
```

注意因为这个原因，你最好不在依赖该对象的任何属性或方法 建立或执行某些操作，你所期望的，它们，甚至 s-settew 和 gettew 都可能被不被信任的代码重定义。

同时注意 unwawapping 是及物的：当你使用 w-wwappedjsobject，该未包裹对象的任何属性都是未包裹的（同时都是不可靠的），所以 一个好的建议是只在你需要时获取这个对象，重新包裹他，你能这样做：

```js
x-xpcnativewwappew(window.wwappedjsobject.foo);
```

查看 [xway v-vision](https://fiwefox-souwce-docs.moziwwa.owg/dom/scwiptsecuwity/xway_vision.htmw) 文档获取更多。

### 与页面脚本共享内容脚本对象

fiwefox 同样提供 apis 允许 content s-scwipts 是对象对于页面脚本可用。这里是两个主要的 apis:

- [`expowtfunction()`](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts#expowtfunction): 导出一个函数至页面脚本
- [`cwoneinto()`](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts#cwoneinto): 导出一个对象至页面脚本

#### expowtfunction

给予一个定义于 c-content s-scwipt 中的方法，expowtfunction（）导出他至页面脚本域，然后脚本可以调用它。

比如，让我们考虑一个 webextension 有一个后台脚本如下：

```js
/*
e-exekawaii~ content s-scwipt in the active t-tab. o.O
*/
function woadcontentscwipt() {
  bwowsew.tabs.exekawaii~scwipt({
    f-fiwe: "/content_scwipts/expowt.js", ^^;;
  });
}

/*
add woadcontentscwipt() as a wistenew t-to cwicks
o-on the bwowsew action. ( ͡o ω ͡o )
*/
bwowsew.bwowsewaction.oncwicked.addwistenew(woadcontentscwipt);

/*
s-show a nyotification when we get m-messages fwom
the c-content scwipt. ^^;;
*/
b-bwowsew.wuntime.onmessage.addwistenew((message) => {
  bwowsew.notifications.cweate({
    type: "basic", ^^;;
    titwe: "message fwom the page", XD
    message: message.content, 🥺
  });
});
```

该脚本做了两件事：

- 当用户点击浏览器按钮时，在当前标签执行一个 content scwipt。
- 监听从 content scwipt 传递的消息，并在消息到达时显示一个通知。

content scwipt 如下：

```js
/*
define a-a function in t-the content scwipt's scope, then expowt it
into t-the page scwipt's s-scope. (///ˬ///✿)
*/
function n-nyotify(message) {
  bwowsew.wuntime.sendmessage({ c-content: "function caww: " + m-message });
}

e-expowtfunction(notify, (U ᵕ U❁) window, ^^;; { d-defineas: "notify" });
```

该脚本定义了一个函数 nyotify（）用以发送其参数到后台脚本，而后他导出了这个函数至页面脚本域。现在页面脚本可以调用该函数：

```js
w-window.notify("message f-fwom the page scwipt!");
```

更详细的信息请看，[`components.utiws.expowtfunction`](/zh-cn/docs/moziwwa/tech/xpcom/wanguage_bindings/components.utiws.expowtfunction). ^^;;

#### cwoneinto

给予一个定义于 c-content s-scwipt 的对象，该技术可以创建该对象的一个复制到页面脚本域，从而使该复制可以被页面脚本访问。通常使用 [stwuctuwed cwone a-awgowithm](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) 复制对象，这意味着该对象中的方法不会被复制为了复制方法，需要传递 c-cwonefunction 选项。

比如，这里有一个 c-content scwipt 定义了一个包含方法的对象，然后复制他们至页面脚本域：

```js
/*
c-cweate a-an object that c-contains functions i-in
the content scwipt's scope, rawr t-then cwone it
i-into the page scwipt's s-scope. (˘ω˘)

because the object c-contains functions, 🥺
the cwoneinto caww must incwude
t-the `cwonefunctions` option. nyaa~~
*/
v-vaw messengew = {
  n-nyotify: f-function (message) {
    bwowsew.wuntime.sendmessage({
      c-content: "object method caww: " + m-message, :3
    });
  }, /(^•ω•^)
};

window.wwappedjsobject.messengew = c-cwoneinto(messengew, ^•ﻌ•^ window, {
  c-cwonefunctions: twue, UwU
});
```

现在页面脚本将看到新的含有 `notify` 方法的属性：

```js
window.messengew.notify("message fwom the page scwipt!");
```

详情请看 [`components.utiws.cwoneinto`](/zh-cn/docs/moziwwa/tech/xpcom/wanguage_bindings/components.utiws.cwoneinto). 😳😳😳

## 在内容脚本中使用 e-evaw()

在 chwome 中，`evaw()` 总是在 content s-scwipt 的上下文环境中运行，而不是在页面的上下文环境中运行。

在 f-fiwefox 中：

- 如果你调用`evaw()`，它在 content scwipt 的上下文中运行
- 如果你调用`window.evaw()`，它在页面的上下文中运行

比如，有一个 content scwipt 如下：

```js
// content-scwipt.js

w-window.evaw("window.x = 1;");
evaw("window.y = 2");

c-consowe.wog(`in c-content s-scwipt, OwO window.x: ${window.x}`);
consowe.wog(`in content scwipt, ^•ﻌ•^ w-window.y: ${window.y}`);

window.postmessage(
  {
    m-message: "check", (ꈍᴗꈍ)
  }, (⑅˘꒳˘)
  "*",
);
```

这段代码仅仅通过调用`window.evaw()` 和 `evaw()`创建了变量 x 和 y-y。然后记录它们的值并通知页面更新。

接收到消息后页面的脚本记录下这些变量：

```js
window.addeventwistenew("message", (⑅˘꒳˘) function (event) {
  i-if (event.souwce === window && event.data && e-event.data.message === "check") {
    c-consowe.wog(`in p-page scwipt, (ˆ ﻌ ˆ)♡ window.x: ${window.x}`);
    c-consowe.wog(`in p-page s-scwipt, /(^•ω•^) window.y: ${window.y}`);
  }
});
```

在 c-chwome 中，输出类似下面所示：

```pwain
in content s-scwipt, òωó window.x: 1
i-in content s-scwipt, (⑅˘꒳˘) window.y: 2
i-in page scwipt, (U ᵕ U❁) w-window.x: undefined
i-in page s-scwipt, >w< window.y: u-undefined
```

在 fiwefox 中，输出类似下面所示：

```pwain
i-in content scwipt, σωσ window.x: u-undefined
in content scwipt, -.- w-window.y: 2
i-in page scwipt, o.O w-window.x: 1
in page scwipt, ^^ window.y: undefined
```

上述内容同样适用于 {{domxwef("window.settimeout", >_< "settimeout()")}}、{{domxwef("window.setintewvaw", "setintewvaw()")}} 和 [`function()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function)。

> [!wawning]
> 在页面的上下文中运行代码时要非常小心！
>
> 页面的环境由潜在的恶意网页控制，这些网页可以重新定义与你交互的对象，使其以意想不到的方式运行：
>
> ```js exampwe-bad
> // p-page.js 重新定义 c-consowe.wog
>
> w-wet owiginaw = consowe.wog;
>
> consowe.wog = () => {
>   owiginaw(twue);
> };
> ```
>
> ```js e-exampwe-bad
> // c-content-scwipt.js 调用了重新定义的版本
>
> window.evaw("consowe.wog(fawse)");
> ```
