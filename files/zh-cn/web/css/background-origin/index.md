---
title: background-origin
slug: Web/CSS/background-origin
---

{{CSSRef}}

## 摘要

`background-origin` 规定了指定背景图片{{cssxref("background-image")}} 属性的原点位置的背景相对区域。

注意：当使用 {{Cssxref("background-attachment")}} 为 fixed 时，该属性将被忽略不起作用。

> [!NOTE]
> 假如{{cssxref("background")}}简写中没有设置该值，那么在 background 简写值后指定 background-origin，那么后面的值就会覆盖简写值，其实说白了，就是后出现的值会覆盖前面的值。

## 语法

```css
/* 关键字值 */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;

/* 全局值 */
background-origin: inherit;
background-origin: initial;
background-origin: revert;
background-origin: revert-layer;
background-origin: unset;
```

### 属性值

- `border-box`
  - : 背景图片的摆放以 border 区域为参考
- `padding-box`
  - : 背景图片的摆放以 padding 区域为参考
- `content-box`
  - : 背景图片的摆放以 content 区域为参考

## 形式语法

{{cssinfo}}

## 形式定义

{{csssyntax}}

## 示例

```css
.example {
  border: 10px double;
  padding: 10px;
  background: url("image.jpg");
  background-position: center left;
  /* 背景将在内容区 padding 内部填充 */
  background-origin: content-box;
}
```

```css
#example2 {
  border: 4px solid black;
  padding: 10px;
  background: url("image.gif");
  background-repeat: no-repeat;
  background-origin: border-box;
}
```

```css
div {
  background-image: url("logo.jpg"), url("mainback.png");
  background-position:
    top right,
    0px 0px;
  background-origin: content-box, padding-box;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关文献

- [【CSS3】background-origin 和 background-clip 的区别](https://www.cnblogs.com/shytong/p/5077129.html)
