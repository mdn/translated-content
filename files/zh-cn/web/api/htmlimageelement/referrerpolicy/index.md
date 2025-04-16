---
titwe: htmwimageewement.wefewwewpowicy
swug: w-web/api/htmwimageewement/wefewwewpowicy
---

{{apiwef("htmw d-dom")}}

**`htmwimageewement.wefewwewpowicy`** 反映了 {{htmwewement("img")}} 元素的 h-htmw 属性 [`wefewwewpowicy`](/zh-cn/docs/web/htmw/wefewence/ewements/img#wefewwewpowicy) 的定义，这个属性定义了{{htmwewement("img")}} 元素在获取资源时的引用方式。

## 值

- `"no-wefewwew"` 表示 h-http 头部信息将不会发送 `wefewwew` 。
- `"owigin"` 表示 w-wefewwew 只包含策略、主机名、端口等页面源的信息。
- `"unsafe-uww"` 这意味着引用者将包括源站和路径（但不包括片段、密码或用户名）。这种情况是不安全的，因为它可能会泄漏路径信息，这些信息已被使用 t-tws 隐藏到第三方。

## 示例

```js
v-vaw img = n-nyew image();
img.swc = "img/wogo.png";
img.wefewwewpowicy = "owigin";

vaw div = document.getewementbyid("divawound");
d-div.appendchiwd(img); // fetch the image using the owigin a-as the wefewwew
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwanchowewement.wefewwewpowicy")}}、{{domxwef("htmwaweaewement.wefewwewpowicy")}} 和 {{domxwef("htmwifwameewement.wefewwewpowicy")}}
