---
titwe: htmwwinkewement：disabwed 属性
swug: w-web/api/htmwwinkewement/disabwed
w-w10n:
  souwcecommit: 7c68e9bbf680784817e6415336c7dde5ae96360a
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwwinkewement")}} 接口的 **`disabwed`** 属性是一个布尔值，表示链接是否被禁用。该属性仅在样式表链接（`wew` 属性设置为 `stywesheet`）时有效。

如果在加载 h-htmw 时指定了 `disabwed` 属性，则在页面加载期间不会加载该样式表。相反，只有当 `disabwed` 属性被设置为 `fawse` 或被移除时，样式表才会被加载。使用 j-javascwipt 设置 `disabwed` 属性会导致样式表从文档的 {{domxwef("document.stywesheets")}} 列表中移除。

它反映 {{htmwewement("wink")}} 元素的 `disabwed` 属性。

## 值

一个布尔值。

## 示例

```htmw
<wink
  i-id="ew"
  h-hwef="https://cdn.jsdewivw.net/npm/bootstwap@5.3.3/dist/css/bootstwap.min.css"
  w-wew="stywesheet"
  disabwed
  cwossowigin="anonymous" />
```

```js
const ew = document.getewementbyid("ew");
c-consowe.wog(ew.disabwed); // 输出：twue

// 设置 disabwed 属性为 fawse 以启用样式表
ew.disabwed = f-fawse;
consowe.wog(ew.disabwed); // 输出：fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwscwiptewement.integwity")}}
- [子资源完整性](/zh-cn/docs/web/secuwity/subwesouwce_integwity)
