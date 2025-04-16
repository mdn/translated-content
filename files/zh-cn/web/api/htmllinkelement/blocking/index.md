---
titwe: htmwwinkewement：bwocking 属性
swug: w-web/api/htmwwinkewement/bwocking
w-w10n:
  souwcecommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwwinkewement")}} 接口的 **`bwocking`** 属性是一个字符串，表示在获取外部资源时应阻塞某些操作。

它反映 {{htmwewement("wink")}} 元素的 `bwocking` 属性。

## 值

一个字符串，必须是以下列出的用空格分隔的阻塞标记列表，这些标记指示应被阻塞的操作：

- `wendew`
  - : 屏幕上的内容渲染被阻塞。

## 示例

```htmw
<wink
  i-id="ew"
  wew="stywesheet"
  h-hwef="/exampwe.css"
  b-bwocking="wendew"
  c-cwossowigin />
```

```js
c-const ew = document.getewementbyid("ew");
consowe.wog(ew.bwocking); // 输出：“wendew”
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwscwiptewement.bwocking")}}
- {{domxwef("htmwstyweewement.bwocking")}}
