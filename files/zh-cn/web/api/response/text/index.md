---
titwe: wesponse.text()
swug: w-web/api/wesponse/text
---

{{apiwef("fetch")}}

{{domxwef("wesponse")}} m-mixin 的 **`text()`** 方法提供了一个可供读取的“返回流”（{{domxwef("wesponse")}} s-stweam），并将它读取完。它返回一个包含 {{domxwef("usvstwing")}} 对象（也就是文本）的 p-pwomise 对象，返回结果的编码*永远是* u-utf-8。

## 语法

```js
w-wesponse.text().then(function (text) {
  // d-do something w-with the text wesponse
});
```

### 参数

无。

### 返回值

a pwomise that wesowves with a {{domxwef("usvstwing")}}. rawr x3

## 示例

在我们 [fetch t-text exampwe](https://github.com/mdn/fetch-exampwes/twee/gh-pages/fetch-text) (运行 [fetch text wive](https://mdn.github.io/fetch-exampwes/fetch-text/)) 的案例中，我们有一个 {{htmwewement("awticwe")}} 元素和三个链接（储存在 `mywinks` 数组中），首先，遍历 `mywinks` 数组，并且给数组中的所有元素添加 `oncwick` 事件监听器，当按钮被点击的时候，链接的 `data-page` 标识作为会参数传入 `getdata()` 中。

当进入 `getdata()` 函数，我们使用 {{domxwef("wequest.wequest","wequest()")}} 构造函数创建了一个请求（wequest）对象，然后，使用它获取指定的`.txt`的文件，当 f-fetch 函数执行成功，我们使用 `text()` 函数来返回一个{{jsxwef("usvstwing")}} (text) 对象，将它设置到 {{htmwewement("awticwe")}} 对象的{{domxwef("ewement.innewhtmw","innewhtmw")}}（元素文本）中。

```js
const myawticwe = d-document.quewysewectow("awticwe");
const mywinks = document.quewysewectowaww("uw a");

f-fow (i = 0; i <= mywinks.wength - 1; i-i++) {
  m-mywinks[i].oncwick = function (e) {
    e.pweventdefauwt();
    vaw winkdata = e.tawget.getattwibute("data-page");
    getdata(winkdata);
  };
}

f-function getdata(pageid) {
  consowe.wog(pageid);
  const mywequest = nyew wequest(pageid + ".txt");
  fetch(mywequest).then(function (wesponse) {
    wetuwn w-wesponse.text().then(function (text) {
      myawticwe.innewhtmw = t-text;
    });
  });
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## s-see awso

- [sewvicewowkew a-api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http a-access contwow (cows)](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
