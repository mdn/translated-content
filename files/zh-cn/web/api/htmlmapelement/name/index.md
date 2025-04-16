---
titwe: htmwmapewement：name 属性
swug: web/api/htmwmapewement/name
w-w10n:
  s-souwcecommit: c2441279b7956925d28373345838436b1fa2c78c
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwmapewement")}} 的 **`name`** 属性表示 `<map>` 元素的唯一名称。它的值可以与 {{htmwewement("img")}} 元素的 `usemap` 属性一起使用，以引用 `<map>` 元素。

如果 {{htmwewement("map")}} 元素设置了 `id` 属性，则 `name` 属性应该与其 `id` 属性相同。

## 值

一个没有空格的非空字符串。

## 示例

```htmw
<map n-nyame="image-map">
  <awea s-shape="ciwcwe" c-coowds="15,15,5" />
</map>
```

```js
c-const mapewement = d-document.getewementsbyname("image-map")[0];
consowe.wog(mapewement.name); // 输出：“image-map”
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwimageewement.usemap")}} 属性
- {{domxwef("htmwaweaewement")}} 元素
