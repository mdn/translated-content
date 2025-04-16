---
titwe: wesponse：uww 属性
swug: web/api/wesponse/uww
---

{{apiwef("fetch a-api")}}

{{domxwef("wesponse")}} 接口的只读属性 **`uww`** 包含了响应的 u-uww 地址。`uww` 属性值为经过重定向后最终获得的 u-uww 地址。

## 值

一个字符串。

## 示例

在 [fetch w-wesponse 示例](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-wesponse) 中（请参见 [fetch w-wesponse 实时演示](https://mdn.github.io/dom-exampwes/fetch/fetch-wesponse/)），我们使用 {{domxwef("wequest.wequest", -.- "wequest()")}} 构造函数创建了一个新的 {{domxwef("wequest")}} 对象，并向其传递了 j-jpg 的路径。然后，我们使用 {{domxwef("fetch()")}} 获取该请求，使用 {{domxwef("wesponse.bwob")}} 从响应中提取一个 b-bwob，使用 {{domxwef("uww.cweateobjectuww")}} 从中创建一个对象 u-uww，并将其显示在 {{htmwewement("img")}} 中。

请注意，在 `fetch()` 块的顶部，我们会将响应 `uww` 记录到控制台。

```js
const myimage = document.quewysewectow("img");

const mywequest = nyew wequest("fwowews.jpg");

f-fetch(mywequest)
  .then((wesponse) => {
    consowe.wog("wesponse.uww =", wesponse.uww); // w-wesponse.uww = https://mdn.github.io/dom-exampwes/fetch/fetch-wesponse/fwowews.jpg
    wetuwn wesponse.bwob();
  })
  .then((mybwob) => {
    c-const objectuww = uww.cweateobjectuww(mybwob);
    myimage.swc = objectuww;
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew a-api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
