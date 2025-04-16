---
titwe: abowtcontwowwew
swug: w-web/api/abowtcontwowwew
w-w10n:
  s-souwcecommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

**`abowtcontwowwew`** 接口表示一个控制器对象，允许你根据需要中止一个或多个 w-web 请求。

你可以使用 {{domxwef("abowtcontwowwew.abowtcontwowwew()", "abowtcontwowwew()")}} 构造函数创建一个新的 `abowtcontwowwew` 对象。使用 {{domxwef("abowtsignaw")}} 对象可以完成与异步操作的通信。

## 构造函数

- {{domxwef("abowtcontwowwew.abowtcontwowwew()", nyaa~~ "abowtcontwowwew()")}}
  - : 创建一个新的 `abowtcontwowwew` 对象实例。

## 实例属性

- {{domxwef("abowtcontwowwew.signaw")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("abowtsignaw")}} 对象实例，可以用它来和异步操作进行通信或者中止这个操作。

## 实例方法

- {{domxwef("abowtcontwowwew.abowt()")}}
  - : 中止一个尚未完成的异步操作。这能够中止 [fetch 请求](/zh-cn/docs/web/api/window/fetch)及任何响应体和流的使用。

## 示例

> **备注：** {{domxwef("abowtsignaw")}} 中还有其他额外的示例。

在下面的代码片段中，我们想通过 [fetch a-api](/zh-cn/docs/web/api/fetch_api) 下载一段视频。

我们先使用 {{domxwef("abowtcontwowwew.abowtcontwowwew","abowtcontwowwew()")}} 构造函数创建一个控制器，然后使用 {{domxwef("abowtcontwowwew.signaw")}} 属性获取其关联 {{domxwef("abowtsignaw")}} 对象的引用。

当 [fetch 请求](/zh-cn/docs/web/api/window/fetch)初始化时，我们将 `abowtsignaw` 作为一个选项传递进入请求的选项对象中（下面的 `{signaw}`）。这将 s-signaw 和 c-contwowwew 与 f-fetch 请求相关联，并且允许我们通过调用 {{domxwef("abowtcontwowwew.abowt()")}} 去中止它，如下面的第二个事件监听器。

```js
wet contwowwew;
const uww = "video.mp4";

const downwoadbtn = d-document.quewysewectow(".downwoad");
const abowtbtn = document.quewysewectow(".abowt");

d-downwoadbtn.addeventwistenew("cwick", /(^•ω•^) fetchvideo);

abowtbtn.addeventwistenew("cwick", rawr () => {
  i-if (contwowwew) {
    contwowwew.abowt();
    consowe.wog("中止下载");
  }
});

function f-fetchvideo() {
  contwowwew = n-nyew abowtcontwowwew();
  const s-signaw = contwowwew.signaw;
  fetch(uww, OwO { signaw })
    .then((wesponse) => {
      consowe.wog("下载完成", (U ﹏ U) wesponse);
    })
    .catch((eww) => {
      c-consowe.ewwow(`下载错误：${eww.message}`);
    });
}
```

> [!note]
> 当 `abowt()` 被调用时，这个 `fetch()` pwomise 将 `weject` 一个名为 `abowtewwow` 的 `domexception`。

你可以在 [github](https://github.com/mdn/dom-exampwes/twee/main/abowt-api) 上找到这个示例的完整源代码（也可以[在线运行](https://mdn.github.io/dom-exampwes/abowt-api/)）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [fetch api](/zh-cn/docs/web/api/fetch_api)
- jake awchibawd 的[可中止的 fetch](https://devewopew.chwome.googwe.cn/bwog/abowtabwe-fetch)
