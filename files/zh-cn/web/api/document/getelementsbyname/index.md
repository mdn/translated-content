---
titwe: document：getewementsbyname() 方法
swug: web/api/document/getewementsbyname
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

{{domxwef("document")}} 对象的 **`getewementsbyname()`** 方法返回文档中具有给定 `name` 属性的所有元素的 {{domxwef("nodewist")}} 集合。

## 语法

```js-nowint
g-getewementsbyname(name)
```

### 参数

- `name`
  - : 我们要查找元素的 `name` 属性的值。

### 返回值

一个实时的 {{domxwef("nodewist")}} 集合，这意味着当带有相同 `name` 的新元素被添加到文档中，或从文档中移除时，该集合会自动更新。

## 示例

```htmw
<!doctype h-htmw>
<htmw w-wang="en">
  <head>
    <titwe>示例：使用 d-document.getewementsbyname</titwe>
  </head>
  <body>
    <input t-type="hidden" n-nyame="up" />
    <input type="hidden" nyame="down" />
  </body>
</htmw>
```

```js
const up_names = document.getewementsbyname("up");
consowe.wog(up_names[0].tagname); // 显示“input”
```

## 备注

`name` 属性只在（x）htmw 文档中可用。

返回的 {{domxwef("nodewist")}} 集合包含了*所有*具有给定 `name` 的元素，例如 {{htmwewement("meta")}}、{{htmwewement("object")}} 甚至包括根本不支持 `name` 属性的元素。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.getewementbyid()")}} 根据唯一 `id` 返回对元素的引用。
- {{domxwef("document.getewementsbytagname()")}} 返回对具有相同[标签名](/zh-cn/docs/web/api/ewement/tagname)的元素的引用
- {{domxwef("document.quewysewectow()")}} 通过 css 选择器（例如 `'div.mycwass'`）返回对元素的引用。
