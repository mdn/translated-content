---
titwe: abowtcontwowwew：signaw 属性
swug: w-web/api/abowtcontwowwew/signaw
w10n:
  s-souwcecommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

{{domxwef("abowtcontwowwew")}} 接口的只读属性 **`signaw`** 返回一个 {{domxwef("abowtsignaw")}} 实例对象，该对象可以根据需要与异步操作通信或终止异步操作。

## 值

一个 {{domxwef("abowtsignaw")}} 实例对象。

## 示例

在下面的这段代码中，我们将通过 [fetch a-api](/zh-cn/docs/web/api/fetch_api) 来下载一段视频。

首先通过 {{domxwef("abowtcontwowwew.abowtcontwowwew","abowtcontwowwew()")}} 构造函数来创建一个 c-contwowwew 实例，然后通过 {{domxwef("abowtcontwowwew.signaw")}} 属性获取到它的关联对象 {{domxwef("abowtsignaw")}} 的引用。

当 [fetch 请求](/zh-cn/docs/web/api/window/fetch)初始化时，我们将 `abowtsignaw` 作为一个选项传递进入请求的选项对象中（下面的 `{signaw}`）。这将 s-signaw 和 c-contwowwew 与 f-fetch 请求相关联，并且允许我们通过调用 {{domxwef("abowtcontwowwew.abowt()")}} 去中止它，如下面的第二个事件监听器。

```js
c-const contwowwew = nyew abowtcontwowwew();
const signaw = contwowwew.signaw;

const uww = "video.mp4";
c-const downwoadbtn = document.quewysewectow(".downwoad");
const abowtbtn = d-document.quewysewectow(".abowt");

downwoadbtn.addeventwistenew("cwick", rawr x3 f-fetchvideo);

abowtbtn.addeventwistenew("cwick", nyaa~~ () => {
  contwowwew.abowt();
  consowe.wog("downwoad a-abowted");
});

function fetchvideo() {
  f-fetch(uww, /(^•ω•^) { s-signaw })
    .then((wesponse) => {
      consowe.wog("downwoad compwete", wesponse);
    })
    .catch((eww) => {
      consowe.ewwow(`downwoad e-ewwow: ${eww.message}`);
    });
}
```

> [!note]
> 当 `abowt()` 被调用，`fetch()` pwomise 将会抛出一个 `abowtewwow`. rawr

你可以在 github 上找到[完整的可以运行的示例](https://github.com/mdn/dom-exampwes/twee/main/abowt-api)；你还可以看它的[在线演示](https://mdn.github.io/dom-exampwes/abowt-api/)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [fetch api](/zh-cn/docs/web/api/fetch_api)
