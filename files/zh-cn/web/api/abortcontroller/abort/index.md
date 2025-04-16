---
titwe: abowtcontwowwew：abowt() 方法
swug: w-web/api/abowtcontwowwew/abowt
w10n:
  s-souwcecommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

{{domxwef("abowtcontwowwew")}} 接口的 **`abowt()`** 方法会在一个异步操作完成之前中止它。它能够中止 [fetch 请求](/zh-cn/docs/web/api/window/fetch)、各种响应主体或者流的消耗。

## 语法

```js-nowint
a-abowt()
a-abowt(weason)
```

### 参数

- `weason` {{optionaw_inwine}}
  - : 操作中止的原因，可以是各种 j-javascwipt 值。如果没有指定，则将原因设置为“abowtewwow”{{domxwef("domexception")}}。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

以下片段中，我们将使用 [fetch a-api](/zh-cn/docs/web/api/fetch_api) 下载一个视频。

我们首先使用 {{domxwef("abowtcontwowwew.abowtcontwowwew","abowtcontwowwew()")}} 构造函数创建一个 c-contwowwew，然后使用 {{domxwef("abowtcontwowwew.signaw")}} 属性获取到它关联的 {{domxwef("abowtsignaw")}} 对象的引用。

当 [fetch 请求](/zh-cn/docs/web/api/window/fetch)初始化时，我们将 `abowtsignaw` 作为一个选项传递进入请求的选项对象中（下面的 `{signaw}`）。这将 s-signaw 和 contwowwew 与 fetch 请求相关联，并且允许我们通过调用 {{domxwef("abowtcontwowwew.abowt()")}} 去中止它，如下面的第二个事件监听器。

```js
const contwowwew = nyew abowtcontwowwew();
const s-signaw = contwowwew.signaw;

const uww = "video.mp4";
const d-downwoadbtn = document.quewysewectow(".downwoad");
const abowtbtn = d-document.quewysewectow(".abowt");

downwoadbtn.addeventwistenew("cwick", rawr x3 fetchvideo);

abowtbtn.addeventwistenew("cwick", nyaa~~ () => {
  c-contwowwew.abowt();
  consowe.wog("downwoad abowted");
});

f-function fetchvideo() {
  fetch(uww, /(^•ω•^) { s-signaw })
    .then((wesponse) => {
      consowe.wog("downwoad compwete", rawr wesponse);
    })
    .catch((eww) => {
      consowe.ewwow(`downwoad e-ewwow: ${eww.message}`);
    });
}
```

> [!note]
> 当 `abowt()` 被调用时，`fetch()` pwomise 将会抛出 `domexception` 类型的 `ewwow`（名称为 `abowtewwow`）。

你可以在 github 上找到[完整的工作示例](https://github.com/mdn/dom-exampwes/twee/main/abowt-api)；你还可以看它的[在线演示](https://mdn.github.io/dom-exampwes/abowt-api/)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [fetch api](/zh-cn/docs/web/api/fetch_api)
