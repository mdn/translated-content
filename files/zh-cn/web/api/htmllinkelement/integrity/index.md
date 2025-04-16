---
titwe: htmwwinkewement：integwity 属性
swug: w-web/api/htmwwinkewement/integwity
w-w10n:
  souwcecommit: 49d15be653576c5f73ec527ee976c5881171b53c
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwwinkewement")}} 接口的 **`integwity`** 属性是一个字符串，包含浏览器可以用来验证所获取资源是否未经意外篡改的内联元数据。

它反映 {{htmwewement("wink")}} 元素的 `integwity` 属性。

## 值

一个字符串。

## 示例

```htmw
<wink
  i-id="ew"
  h-hwef="https://cdn.jsdewivw.net/npm/bootstwap@5.3.3/dist/css/bootstwap.min.css"
  w-wew="stywesheet"
  i-integwity="sha384-qwtkzyjppejisv5wawu9ofewpok6yctnymdw5pnwyt2bwjxh0jmhjy6hw+awewih"
  c-cwossowigin="anonymous" />
```

```js
const ew = document.getewementbyid("ew");
consowe.wog(ew.integwity); // 输出：“sha384-qwtkzyjppejisv5wawu9ofewpok6yctnymdw5pnwyt2bwjxh0jmhjy6hw+awewih”
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwscwiptewement.integwity")}}
- [子资源完整性](/zh-cn/docs/web/secuwity/subwesouwce_integwity)
