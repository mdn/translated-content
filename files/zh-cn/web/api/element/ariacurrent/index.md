---
title: Element：ariaCurrent 属性
slug: Web/API/Element/ariaCurrent
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ari aCurrent`** 属性反映 [`aria-current`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current) 属性的值，该属性指示容器或一组相关元素中表示当前项的元素。

## 值

具有以下值之一的字符串：

- `"page"`：表示一组页面中的当前页面。
- `"step"`：表示流程中的当前步骤。
- `"location"`：表示当前位置，例如面包屑层级中的当前页面。
- `"date"`：表示日期集合中的当前日期。
- `"time"`：表示时间集合中的当前时间。
- `"true"`：表示集合中的当前项。
- `"false"`：不表示集合中的当前项。

## 示例

此示例使用一组链接进行网站导航。`aria-current` 属性指示当前页面。值 `page` 会纳入屏幕阅读器的播报中。使用 `ariaCurrent` 可以更新该值。

```html
<nav>
  <ul>
    <li><a id="link-home" href="/" aria-current="page">主页</a></li>
    <li><a href="/">关于</a></li>
    <li><a href="/">联系</a></li>
  </ul>
</nav>
```

```js
let el = document.getElementById("link-home");
console.log(el.ariaCurrent); // "page"
el.ariaCurrent = "tab";
console.log(el.ariaCurrent); // "tab"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 aria-current 属性](https://tink.uk/using-the-aria-current-attribute/)
