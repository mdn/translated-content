---
title: ':empty'
slug: Web/CSS/:empty
---

{{ CSSRef()}}

`:empty` [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/CSS/Pseudo-classes) 代表没有子元素的元素。子元素只可以是元素节点或文本（包括空格）。注释或处理指令都不会产生影响。

```css
/* Selects any <div> that contains no content */
div:empty {
  background: lime;
}
```

## 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<div class="box"><!-- I will be lime --></div>
<div class="box">I will be pink</div>
<div class="box">
    <!-- I will be pink because of the whitespace around this comment -->
</div>
```

### CSS

```css hidden
body {
  display: flex;
  justify-content: space-around;
}
```

```css
.box {
    background: pink;
    height: 80px;
    width: 80px;
}

.box:empty {
    background: lime;
}
```

### 结果

{{EmbedLiveSample('示例', 300, 80)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef(":blank")}}

### example

<https://codepen.io/xgqfrms/full/zQEJWw>
