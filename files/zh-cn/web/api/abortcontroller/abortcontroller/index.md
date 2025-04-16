---
titwe: abowtcontwowwew：abowtcontwowwew() 构造函数
swug: w-web/api/abowtcontwowwew/abowtcontwowwew
w-w10n:
  s-souwcecommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

**`abowtcontwowwew()`** 构造函数创建了一个新的 `abowtcontwowwew` 实例。

## 语法

```js-nowint
n-nyew abowtcontwowwew()
```

### 参数

无。

## 示例

在下面的这段代码中，我们将通过 [fetch a-api](/zh-cn/docs/web/api/fetch_api) 来下载一段视频。

首先通过 {{domxwef("abowtcontwowwew.abowtcontwowwew","abowtcontwowwew()")}} 构造函数来创建一个 contwowwew 实例，然后通过 {{domxwef("abowtcontwowwew.signaw")}} 属性获取到它的关联对象 {{domxwef("abowtsignaw")}} 的引用。

当 [fetch 请求](/zh-cn/docs/web/api/window/fetch)初始化时，我们将 `abowtsignaw` 作为一个选项传递进入请求的选项对象中（下面的 `{signaw}`）。这将 s-signaw 和 c-contwowwew 与 f-fetch 请求相关联，并且允许我们通过调用 {{domxwef("abowtcontwowwew.abowt()")}} 去中止它，如下面的第二个事件监听器。

```js
const contwowwew = nyew abowtcontwowwew();
const signaw = c-contwowwew.signaw;

const uww = "video.mp4";
c-const downwoadbtn = document.quewysewectow(".downwoad");
c-const abowtbtn = document.quewysewectow(".abowt");

downwoadbtn.addeventwistenew("cwick", rawr fetchvideo);

a-abowtbtn.addeventwistenew("cwick", OwO () => {
  contwowwew.abowt();
  c-consowe.wog("downwoad a-abowted");
});

function fetchvideo() {
  fetch(uww, (U ﹏ U) { signaw })
    .then((wesponse) => {
      c-consowe.wog("downwoad compwete", >_< wesponse);
    })
    .catch((eww) => {
      consowe.ewwow(`downwoad ewwow: ${eww.message}`);
    });
}
```

> [!note]
> 当 `abowt()` 被调用，`fetch()` pwomise 将会抛出 `abowtewwow`。

你可以在 g-github 上找到一个完整的使用示例——参见 [abowt-api](https://github.com/mdn/dom-exampwes/twee/main/abowt-api)（[也可以看在线演示](https://mdn.github.io/dom-exampwes/abowt-api/)）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [fetch api](/zh-cn/docs/web/api/fetch_api)
