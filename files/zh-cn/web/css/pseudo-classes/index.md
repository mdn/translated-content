---
title: 伪类
slug: Web/CSS/Pseudo-classes
---

{{CSSRef}}

CSS **_伪类_** 是添加到选择器的关键字，指定要选择的元素的特殊状态。例如，{{ cssxref(":hover") }} 可被用于在用户将鼠标悬停在按钮上时改变按钮的颜色。

```css
/* 所有用户指针悬停的按钮 */
button:hover {
  color: blue;
}
```

伪类连同伪元素一起，他们允许你不仅仅是根据文档 DOM 树中的内容对元素应用样式，而且还允许你根据诸如像导航历史这样的外部因素来应用样式（例如 {{ cssxref(":visited") }}），同样的，可以根据内容的状态（例如在一些表单元素上的 {{ cssxref(":checked") }}），或者鼠标的位置（例如 {{ cssxref(":hover") }} 让你知道是否鼠标在一个元素上悬浮）来应用样式。

> **备注：** 与伪类相反，{{cssxref("pseudo-elements")}} 可被用于为一个元素的 _特定部分_ 应用样式。

## 语法

```
selector:pseudo-class {
  property: value;
}
```

类似于普通的类，你可以在一个选择器中同时一起写多个伪类。

## 标准伪类索引

- {{CSSxRef(":active")}}
- {{CSSxRef(":any-link")}} {{Experimental_Inline}}
- {{CSSxRef(":blank")}} {{Experimental_Inline}}
- {{CSSxRef(":checked")}}
- {{CSSxRef(":current")}} {{Experimental_Inline}}
- {{CSSxRef(":default")}}
- {{CSSxRef(":defined")}}
- {{CSSxRef(":dir", ":dir()")}} {{Experimental_Inline}}
- {{CSSxRef(":disabled")}}
- {{CSSxRef(":drop")}} {{Experimental_Inline}}
- {{CSSxRef(":empty")}}
- {{CSSxRef(":enabled")}}
- {{CSSxRef(":first")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":fullscreen")}} {{Experimental_Inline}}
- {{CSSxRef(":future")}} {{Experimental_Inline}}
- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}} {{Experimental_Inline}}
- {{CSSxRef(":focus-within")}}
- {{CSSxRef(":has", ":has()")}} {{Experimental_Inline}}
- {{CSSxRef(":host")}}
- {{CSSxRef(":host()")}}
- {{cssxref(":host-context", ":host-context()")}} {{Experimental_Inline}}
- {{CSSxRef(":hover")}}
- {{CSSxRef(":indeterminate")}}
- {{CSSxRef(":in-range")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":is", ":is()")}} {{Experimental_Inline}}
- {{CSSxRef(":lang", ":lang()")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":left")}}
- {{CSSxRef(":link")}}
- {{CSSxRef(":local-link")}} {{Experimental_Inline}}
- {{CSSxRef(":not", ":not()")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
- {{CSSxRef(":nth-col", ":nth-col()")}} {{Experimental_Inline}}
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
- {{CSSxRef(":nth-last-col", ":nth-last-col()")}} {{Experimental_Inline}}
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
- {{CSSxRef(":only-child")}}
- {{CSSxRef(":only-of-type")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":out-of-range")}}
- {{CSSxRef(":past")}} {{Experimental_Inline}}
- {{CSSxRef(":placeholder-shown")}} {{Experimental_Inline}}
- {{CSSxRef(":read-only")}}
- {{CSSxRef(":read-write")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":right")}}
- {{CSSxRef(":root")}}
- {{CSSxRef(":scope")}}
- {{CSSxRef(":target")}}
- {{CSSxRef(":target-within")}} {{Experimental_Inline}}
- {{CSSxRef(":user-invalid")}} {{Experimental_Inline}}
- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}
- {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}}

## 规范

{{Specifications}}

## 参见

- {{ cssxref("pseudo-elements") }}
