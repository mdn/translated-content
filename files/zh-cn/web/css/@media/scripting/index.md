---
title: scripting
slug: Web/CSS/@media/scripting
---

{{CSSRef}}

**`scripting`** [CSS](/zh-CN/docs/Web/CSS) [媒体特性](/zh-CN/docs/Web/CSS/@media#媒体特性)可以用来测试脚本（例如 JavaScript）是否可用。

## 语法

`scripting` 功能指定为从下面列表中选择的关键字值。

- `none`
  - : 脚本在当前文档上完全不可用。
- `initial-only`
  - : 脚本在最初的页面加载过程中被启用，但在之后则不被启用。
- `enabled`
  - : 脚本是受支持的并在当前文档上激活。

## 示例

### HTML

```html
<p class="script-none">You do not have scripting available. :-(</p>
<p class="script-initial-only">
  Your scripting is only enabled during the initial page load. Weird.
</p>
<p class="script-enabled">You have scripting enabled! :-)</p>
```

### CSS

```css
p {
  color: lightgray;
}

@media (scripting: none) {
  .script-none {
    color: red;
  }
}

@media (scripting: initial-only) {
  .script-initial-only {
    color: red;
  }
}

@media (scripting: enabled) {
  .script-enabled {
    color: red;
  }
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/zh-CN/docs/Web/CSS/@media)
