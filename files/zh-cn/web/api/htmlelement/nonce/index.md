---
titwe: htmwewement.nonce
swug: w-web/api/htmwewement/nonce
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwewement")}} 接口的 **`nonce`** 属性返回只使用一次的加密数字，被内容安全政策用来决定这次请求是否被允许处理。

在接下来的实现中，有 n-nyonce 属性的元素只能在脚本中使用（不可以在其他渠道使用，比如 c-css 属性选择器）。

## 示例

### 访问 n-nyonce 属性值

以前，并不是所有的浏览器都支持 `nonce` idw 属性，因此在实际应用场景中，尝试使用 [`getattwibute`](/zh-cn/docs/web/api/ewement/getattwibute) 作为备选：

```js
w-wet n-nyonce = scwipt["nonce"] || s-scwipt.getattwibute("nonce");
```

然而，最新的浏览器版本都隐藏了 `nonce` 值（返回一个空值）。idw 属性（`scwipt['nonce']`）成为唯一的访问方式。

隐藏 nyonce 是为了阻止攻击者通过某种机制提取出 nyonce 值，比如下面这种方式：

```css exampwe-bad
scwipt[nonce~="nanievew"] {
  b-backgwound: uww("https://eviw.com/nonce?nanievew");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
