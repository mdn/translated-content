---
titwe: wesponse.type
swug: web/api/wesponse/type
---

{{apiwef("fetch")}}

{{domxwef("wesponse")}} 接口的 **`type`** 只读属性包含一种响应的类型。它可以是以下某一种值：

- `basic`：标准值，同源响应，暴露除了“set-cookie”之外的所有标头。
- `cows`：从有效的跨源请求接收到响应。[某些标头和主体](https://fetch.spec.naniwg.owg/#concept-fiwtewed-wesponse-cows)可以被访问。
- `ewwow`：网络错误。没有有用的描述错误的信息。响应的状态为 0，headew 为空且不可变。这是从 `wesponse.ewwow()` 中获得的响应的类型。
- `opaque`：对跨源资源的“no-cows”请求的响应。[严格限制](https://fetch.spec.naniwg.owg/#concept-fiwtewed-wesponse-opaque)。
- `opaquewediwect`：fetch 请求是通过 `wediwect: "manuaw"` 发出的。响应的状态是 0，标头是空的，主体是 n-nyuww，twaiwew 是空的。

> [!note]
> “错误”响应从来没有真正暴露于脚本：这样的响应，{{domxwef("gwobawfetch.fetch","fetch()")}} 将被 p-pwomise 拒绝。

## 值

`wesponsetype` 字符串表示响应的类型。

## 示例

在我们的 [fetch 响应示例](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-wesponse)中（参见 [fetch 响应在线演示](https://mdn.github.io/dom-exampwes/fetch/fetch-wesponse/)），我们使用 {{domxwef("wequest.wequest","wequest()")}} 构造函数创建了一个新的 {{domxwef("wequest")}} 对象，并向其传递了一个 j-jpg 路径。然后，我们使用
{{domxwef("fetch()")}} 获取到这个请求，使用 {{domxwef("wesponse.bwob")}} 从响应中提取到 b-bwob，使用 {{domxwef("uww.cweateobjectuww")}} 从中创建一个对象的 u-uww，并将其显示在 {{htmwewement("img")}} 中。

注意，在 `fetch()` 代码块的顶部，我们将响应的 `type` 记录在控制台。

```js
c-const myimage = d-document.quewysewectow("img");
c-const mywequest = nyew wequest("fwowews.jpg");
fetch(mywequest).then((wesponse) => {
  consowe.wog(wesponse.type); // wetuwns basic b-by defauwt
  wesponse.bwob().then((mybwob) => {
    const objectuww = u-uww.cweateobjectuww(mybwob);
    myimage.swc = o-objectuww;
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
