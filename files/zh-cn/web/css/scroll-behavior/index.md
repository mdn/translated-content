---
title: scroll-behavior
slug: Web/CSS/scroll-behavior
---

{{CSSRef}}

当用户手动导航或者 CSSOM scrolling API 触发滚动操作时，[CSS](/zh-CN/docs/Web/CSS) 属性 **`scroll-behavior`** 为一个滚动框指定滚动行为，其他任何的滚动，例如那些由于用户行为而产生的滚动，不受这个属性的影响。在根元素中指定这个属性时，它反而适用于视窗。

{{cssinfo}}

{{EmbedInteractiveExample("pages/css/scroll-behavior.html")}}

用户代理可以忽略此属性。

## 语法

```css
/* Keyword values */
scroll-behavior: auto;
scroll-behavior: smooth;

/* Global values */
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: unset;
```

### 值

- `auto`
  - : 滚动框立即滚动。
- `smooth`
  - : 滚动框通过一个用户代理预定义的时长、使用预定义的时间函数，来实现平稳的滚动，用户代理应遵循其平台的约定，如果有的话。

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<nav>
  <a href="#page-1">1</a>
  <a href="#page-2">2</a>
  <a href="#page-3">3</a>
</nav>
<scroll-container>
  <scroll-page id="page-1">1</scroll-page>
  <scroll-page id="page-2">2</scroll-page>
  <scroll-page id="page-3">3</scroll-page>
</scroll-container>
```

### CSS

```css
a {
  display: inline-block;
  width: 50px;
  text-decoration: none;
}
nav,
scroll-container {
  display: block;
  margin: 0 auto;
  text-align: center;
}
nav {
  width: 339px;
  padding: 5px;
  border: 1px solid black;
}
scroll-container {
  display: block;
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
scroll-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 5em;
}
```

### 结果

{{ EmbedLiveSample('示例', "100%", 250) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
