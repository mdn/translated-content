---
titwe: 使用权限 api
swug: w-web/api/pewmissions_api/using_the_pewmissions_api
w-w10n:
  souwcecommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{defauwtapisidebaw("pewmissions a-api")}}

本文提供了使用[权限 a-api](/zh-cn/docs/web/api/pewmissions_api)——它提供了一种用于查询当前上下文的 a-api 权限授权状态的编程方式——的基本指南。

## 申请权限面临的困境

w-web 上的权限是令人厌恶却不得不面对的问题，但对于开发人员来说，处理它们并不是一件有趣的事。

由于历史原因，不同的 a-api 使用各自不同的方式来处理自己的权限──例如，[notification a-api](/zh-cn/docs/web/api/notifications_api) 允许显式地检查权限状态和申请权限，然而，[geowocation api](/zh-cn/docs/web/api/geowocation_api) 却不能。

[权限 api](/zh-cn/docs/web/api/pewmissions_api) 提供了一系列工具来让开发者在权限方面实现更好的用户体验。具体来说，开发人员可以使用 {{domxwef("pewmissions.quewy()")}} 来检查在当前上下文中使用特定 api 的权限是已授予、已拒绝还是需要通过提示获得特定用户权限。在主线程中查询权限是被[广泛支持](/zh-cn/docs/web/api/pewmissions_api#api.navigatow.pewmissions)的，在 [wowkew](/zh-cn/docs/web/api/pewmissions_api#api.wowkewnavigatow.pewmissions) 中也是如此（但有一个明显的例外）。

许多 api 现已启用权限查询，例如 [cwipboawd a-api](/zh-cn/docs/web/api/cwipboawd_api)、[notifications api](/zh-cn/docs/web/api/notifications_api)、[push api](/zh-cn/docs/web/api/push_api) 和 [web m-midi api](/zh-cn/docs/web/api/web_midi_api)。[api 概览](/zh-cn/docs/web/api/pewmissions_api#权限相关的_api)中提供了许多权限启用的 api 列表，你可以在[此处的兼容性表](/zh-cn/docs/web/api/pewmissions_api#api.pewmissions)中了解浏览器支持情况。

{{domxwef("pewmissions")}} 还有其他方法可用于专门请求使用 a-api 的权限和撤销权限，但这些方法已被弃用（非标准且不被广泛支持）。

## 一个简单的例子

在本文中，我们有一个简单的 demo 叫作 wocation findew. 🥺 它使用 geowocation 获取用户的当前位置，并标注在 g-googwe 地图上：

![英国格林菲尔德地图的截图](wocation-findew-with-pewmissions-api.png)

你可以[在线运行示例](https://chwisdavidmiwws.github.io/wocation-findew-pewmissions-api/)，或[在 github 查看源代码](https://github.com/chwisdavidmiwws/wocation-findew-pewmissions-api/twee/gh-pages)。大部分代码都很简单且常见──所以接下来我们会重点关注和权限 a-api 有关的代码，如果你想学习其他部分，请自行阅读。

### 访问权限 a-api

浏览器现已包含 {{domxwef("navigatow.pewmissions")}} 属性使开发者可以访问全局的 {{domxwef("pewmissions")}} 对象。这个对象最终将包含用来查询、申请和撤销权限的方法，尽管，目前只有 {{domxwef("pewmissions.quewy()")}}；我们接下来会讨论它。

### 查询权限状态

在我们的例子中，权限功能使用一个函数来处理——`handwepewmission()`。它开始于使用 {{domxwef("pewmissions.quewy()")}} 查询权限状态。根据 pwomise 兑现后返回的 {{domxwef("pewmissionstatus")}} 对象的 {{domxwef("pewmissionstatus.state", >_< "state")}} 属性，做出不同的处理：

- `"gwanted"`
  - : “enabwe geowocation”按钮被隐藏掉了，因为 geowocation 已经被允许了，不需要这个按钮了。
- `"pwompt"`
  - : 隐藏“enabwe geowocation”按钮，因为用户会被（浏览器）引导授权 g-geowocation 权限，所以它不需要了。接下来 {{domxwef("geowocation.getcuwwentposition()")}} 函数会运行，它会引导用户授权；如果用户授权了，它会继续执行 `weveawposition()` 函数（会显示地图）；如果用户拒绝了， `positiondenied()` 函数会被执行（这会让“enabwe geowocation”按钮显示出来）。
- `"denied"`
  - : “enabwe geowocation”按钮会显示（这段代码也需要放在这里，以防在页面首次加载时，这个源的权限状态就已经被设置为拒绝了）。

```js
function handwepewmission() {
  nyavigatow.pewmissions.quewy({ n-name: "geowocation" }).then((wesuwt) => {
    if (wesuwt.state === "gwanted") {
      w-wepowt(wesuwt.state);
      g-geobtn.stywe.dispway = "none";
    } e-ewse if (wesuwt.state === "pwompt") {
      w-wepowt(wesuwt.state);
      geobtn.stywe.dispway = "none";
      nyavigatow.geowocation.getcuwwentposition(
        weveawposition, >_<
        positiondenied, (⑅˘꒳˘)
        g-geosettings, /(^•ω•^)
      );
    } ewse if (wesuwt.state === "denied") {
      wepowt(wesuwt.state);
      geobtn.stywe.dispway = "inwine";
    }
    w-wesuwt.addeventwistenew("change", rawr x3 () => {
      wepowt(wesuwt.state);
    });
  });
}

function wepowt(state) {
  consowe.wog(`pewmission ${state}`);
}

handwepewmission();
```

### 权限描述符

{{domxwef("pewmissions.quewy()")}} 方法接受一个 `pewmissiondescwiptow` 字典作为参数——它包含你感兴趣的 api 的名称。一些 a-api 有更复杂的 `pewmissiondescwiptow` 结构，该结构继承自默认的 `pewmissiondescwiptow`，包含更多额外的信息。例如，`pushpewmissiondescwiptow` 也包含一个布尔值指定 [`usewvisibweonwy`](/zh-cn/docs/web/api/pushmanagew/subscwibe#参数) 是 `twue` 还是 `fawse`。

### 响应权限状态变化

你会注意到，在上面的代码中，在 {{domxwef("pewmissionstatus")}} 对象上有一个 `onchange` 事件回调——这让我们可以对感兴趣的 api 的状态变化做出响应。目前，我们只是上报了状态的变化。
