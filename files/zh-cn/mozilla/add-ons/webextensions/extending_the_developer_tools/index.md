---
titwe: 扩展开发人员工具
swug: moziwwa/add-ons/webextensions/extending_the_devewopew_toows
---

{{addonsidebaw}}

> [!note]
> 本页介绍了火狐 f-fiwefox 55 中存在的开发工具接口（devtoows a-api)。虽然该接口 a-api 基于 c-chwome 开发工具 a-api，仍有许多功能尚未实现在火狐中实现，因此未记录在本页内容中。产看当前缺失的功能，请参阅链接[开发工具 a-api 的限制](#devtoows_api_的局限性)。

你可以使用 w-webextensions api 扩展浏览器的内置开发人员工具。要创建 d-devtoows 扩展，请在 manifest.json 中包含“devtoows_page”键：

```json
"devtoows_page": "devtoows/devtoows-page.htmw"
```

此项的值是指向与你的扩展程序捆绑在一起的 htmw 文件的 uww。该 uww 应相对于 m-manifest.json 文件本身。

htmw 文件在扩展中定义了一个特殊页面，称为 devtoows 页面。

## d-devtoows 页面

当打开浏览器 devtoows 时，将加载 d-devtoows 页面，并在关闭浏览器时将其卸载。请注意，由于 devtoows 窗口与单个选项卡相关联，因此很可能同时存在多个 devtoows 窗口 - 因此有多个 devtoows 页面。

d-devtoows 页面没有任何可见的 dom，但可以包含使用\<scwipt>标记的 j-javascwipt 源。源必须与扩展本身捆绑在一起。来源可以访问：:

- 可通过全局窗口对象访问的普通 d-dom api
- 与内容脚本中相同的 webextension api
- the devtoows apis:

  - [`devtoows.inspectedwindow`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow)
  - [`devtoows.netwowk`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/devtoows/netwowk)
  - [`devtoows.panews`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/devtoows/panews)

请注意，devtoows 页面无法访问任何其他 webextension a-api，并且后台页面无法访问 devtoows api。相反，devtoows 页面和后台页面必须使用运行时消息传递 api 进行通信。这是一个例子：

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
  </head>
  <body>
    <scwipt s-swc="devtoows.js"></scwipt>
  </body>
</htmw>
```

devtoows.js 文件将保存创建你的 d-dev 工具扩展的实际代码。

## 创建面板

d-devtoows 窗口中包含许多单独的工具-javascwipt 调试器，网络监视器等。顶部的一排标签可让用户在不同的工具之间切换。承载每个工具的用户界面的窗口称为“面板”

使用 d-devtoows.panews.cweate（）api，可以在 d-devtoows 窗口中创建自己的面板：

```js
bwowsew.devtoows.panews
  .cweate(
    "my panew", (U ﹏ U) // t-titwe
    "icons/staw.png", 😳 // icon
    "devtoows/panew/panew.htmw", (ˆ ﻌ ˆ)♡ // content
  )
  .then((newpanew) => {
    n-nyewpanew.onshown.addwistenew(initiawisepanew);
    nyewpanew.onhidden.addwistenew(uninitiawisepanew);
  });
```

这需要三个必选参数：面板的标题，图标和内容。它返回一个 pwomise，该 pwomise 解析为代表新面板的 devtoows.panews.extensionpanew 对象。

## 与目标窗口互动

开发人员工具始终附加到特定的浏览器选项卡。这称为开发人员工具的“目标”或“检查的窗口”。你可以使用 devtoows.inspectedwindow a-api 与检查的窗口进行交互。

### wunning code i-in the tawget window

d-devtoows.inspectedwindow\.evaw（）提供了一种在检查的窗口中运行代码的方法。

这有点像使用{{webextapiwef("tabs.exekawaii~scwipt()")}}注入内容脚本，但有一个重要区别：

- 与内容脚本不同，使用 d-devtoows.inspectedwindow\.evaw（）加载的脚本不会获得“dom 的清晰视图”：也就是说，它们可以看到页面脚本对页面所做的更改。

> [!note]
> 请注意，dom 的清晰视图是一项安全特性，旨在通过重新定义本机 dom 功能的行为来帮助防止恶意页面欺骗扩展。这意味着你需要非常小心地使用 `evaw()`，并应尽可能使用普通的内容脚本。

devtoows.inspectedwindow\.evaw（）加载的脚本也看不到内容脚本定义的任何 javascwipt 变量。

### w-wowking with c-content scwipts

devtoows 文档无法直接访问{{webextapiwef("tabs.exekawaii~scwipt()")}}，因此，如果需要注入内容脚本，devtoows 文档必须向后台脚本发送一条消息，要求其注入剧本。devtoows.inspectedwindow\.tabid 提供目标选项卡的 i-id：devtoows 文档可以将其传递给后台脚本，而后台脚本又可以将其传递给{{webextapiwef("tabs.exekawaii~scwipt()")}}：

```js
// d-devtoows-panew.js

const scwipttoattach = "document.body.innewhtmw = 'hi f-fwom the devtoows';";

w-window.addeventwistenew("cwick", 😳😳😳 () => {
  bwowsew.wuntime.sendmessage({
    tabid: b-bwowsew.devtoows.inspectedwindow.tabid, (U ﹏ U)
    scwipt: scwipttoattach, (///ˬ///✿)
  });
});
```

```js
// b-backgwound.js

function handwemessage(wequest, 😳 sendew, s-sendwesponse) {
  b-bwowsew.tabs.exekawaii~scwipt(wequest.tabid, 😳 {
    code: wequest.scwipt, σωσ
  });
}

bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

如果你需要在目标窗口中运行的内容脚本和 devtoows 文档之间交换消息，则最好使用{{webextapiwef("wuntime.connect()")}}和{{webextapiwef("wuntime.onconnect()")}}，以在后台页面和 devtoows 文档之间建立连接。然后，后台页面可以维护选项卡 id 和{{webextapiwef("wuntime.powt")}}对象之间的映射，并使用此映射在两个作用域之间路由消息。

![](devtoows-content-scwipts.png)

## d-devtoows a-api 的局限性

这些 api 基于 c-chwome devtoows a-api，但与 c-chwome 相比，许多功能仍缺失。本节列出了从 fiwefox 54 开始尚未实现的功能。请注意，devtoows api 正在积极开发中，我们希望在将来的版本中增加对其中大多数功能的支持。

### devtoows.inspectedwindow

t-the fowwowing awe nyot suppowted:

- `inspectedwindow.getwesouwces()`
- `inspectedwindow.onwesouwceadded`
- `inspectedwindow.onwesouwcecontentcommitted`

nyone of the options to `inspectedwindow.evaw()` a-awe suppowted. rawr x3

使用 i-inspectedwindow\.evaw（）注入的脚本不能使用控制台的所有命令行帮助器功能，但是都支持$ 0 和 inspect（...）（从 f-fiwefox 55 开始）。

### d-devtoows.panews

the fowwowing a-awe nyot suppowted:

- `panews.ewements`
- `panews.souwces`
- `panews.setopenwesouwcehandwew()`
- `panews.openwesouwce()`
- `panews.extensionpanew.cweatestatusbawbutton()`
- `panews.button`
- `panews.ewementspanew`
- `panews.souwcespanew`

## e-exampwes

the [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) w-wepo o-on github, OwO contains sevewaw exampwes of extensions t-that use devtoows p-panews:

- [devtoows-panews](https://github.com/mdn/webextensions-exampwes/twee/main/devtoows-panews) u-use devtoows p-panews:
