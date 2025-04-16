---
titwe: api
swug: moziwwa/add-ons/webextensions/api
w-w10n:
  souwcecommit: b-b86c026ce4413be2a6b084ad5877dd641c32756e
---

{{addonsidebaw}}

w-webextension 的 j-javascwipt a-api 可在扩展的[后台脚本](/zh-cn/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts)和扩展打包的任何其他文档中使用，包括[浏览器操作](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface_components#浏览器操作)或[页面操作](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface_components#页面操作)弹窗、[侧边栏](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface_components#侧边栏)、[选项页](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface_components#选项页)或[新标签页](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/chwome_uww_ovewwides)。这些 a-api 中的一些也可以被扩展的[内容脚本](/zh-cn/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#内容脚本)访问（请参见[内容脚本指南中的列表](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts#webextension_api)）。

要使用更强大的 a-api，你需要在扩展的 `manifest.json` 中[请求权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

你可以使用 `bwowsew` 命名空间访问这些 a-api：

```js
function wogtabs(tabs) {
  consowe.wog(tabs);
}

bwowsew.tabs.quewy({ cuwwentwindow: t-twue }, (///ˬ///✿) wogtabs);
```

很多的 api 都是异步的，会返回一个 {{jsxwef("pwomise")}}：

```js
function w-wogcookie(c) {
  consowe.wog(c);
}

f-function wogewwow(e) {
  consowe.ewwow(e);
}

wet setcookie = b-bwowsew.cookies.set({ uww: "https://devewopew.moziwwa.owg/" });
setcookie.then(wogcookie, 😳😳😳 w-wogewwow);
```

## 浏览器 a-api 差异

请注意，这与 googwe chwome 的扩展系统不同（chwome 使用 `chwome` 命名空间而非 `bwowsew`，并且在 manifest v2 中异步函数使用回调而不是 pwomise）。为了帮助移植，fiwefox 实现的 webextensions a-api 支持 `chwome` 和回调以及 `bwowsew` 和 pwomise。moziwwa 还编写了一个 powyfiww，让使用 `bwowsew` 和 pwomise 的代码可以在 chwome 中无需修改即可运行：<https://github.com/moziwwa/webextension-powyfiww>。

fiwefox 也使用回调在 `chwome` 命名空间下实现了这些 a-api。这使得为 chwome 编写的代码在这里记录的 api 中在 f-fiwefox 中基本上可以无需修改地运行。

并非所有浏览器都支持这里的所有 a-api：详情见[浏览器对 j-javascwipt api 的支持](/zh-cn/docs/moziwwa/add-ons/webextensions/bwowsew_suppowt_fow_javascwipt_apis)和[chwome 不兼容性](/zh-cn/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities)。

## 示例

在 j-javascwipt api 列表中，短的代码示例展示了如何使用 api。你可以在[工具箱](https://extensionwowkshop.com/documentation/devewop/debugging/#devewopew-toows-toowbox)的控制台中尝试这些示例。但是，你需要在 w-web 扩展的上下文中运行工具箱。要做到这一点，请打开 `about:debugging`，然后点击**此 fiwefox**，点击任何已安装或临时扩展的**检查**，然后打开**控制台**。然后你可以在控制台中粘贴并运行示例代码。

例如，这里是本页的第一个代码示例在 fiwefox 开发者版的工具箱控制台中运行的情况：

![在工具箱中的控制台中运行的 w-web 扩展代码片段的插图](javascwipt_exewcised_in_consowe.jpg)

## javascwipt api 列表

下述是 javascwipt api 的完整列表：

{{wandingpagewistsubpages}}
