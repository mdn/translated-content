---
title: overflow-inline
slug: Web/CSS/Reference/Properties/overflow-inline
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`overflow-inline`** 设置了当内容溢出盒的行首和行末侧时所显示的内容。可以不显示，或者显示滚动条或溢出内容。

> [!NOTE]
> `overflow-inline` 属性根据文档的书写模式对应于 {{CSSXref("overflow-y")}} 或 {{CSSXref("overflow-x")}}。

## 语法

```css
/* 关键词值 */
overflow-inline: visible;
overflow-inline: hidden;
overflow-inline: scroll;
overflow-inline: auto;

/* 全局值 */
overflow-inline: inherit;
overflow-inline: initial;
overflow-inline: revert;
overflow-inline: revert-layer;
overflow-inline: unset;
```

`overflow-inline` 属性可指定为下列关键词之一。

### 取值

- `visible`
  - : 不裁剪内容且可在内边距盒的行首和行末侧外渲染内容。
- `hidden`
  - : 若内边距盒在行向尺度上无法容纳内容则裁剪内容。不提供滚动条。
- `scroll`
  - : 若内边距盒在行向尺度上无法容纳内容则裁剪内容。无论内容是否被裁剪，浏览器均显示滚动条。（由此可阻止滚动条在内容变化时显示或消失。）打印机仍可能打印溢出内容。
- `auto`
  - : 取决于用户代理。若内边距盒可以容纳内容，则与 `visible` 表现相同，但仍建立新的块格式化上下文。若内容溢出则桌面浏览器提供滚动条。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 设置行向溢出行为

#### HTML

```html
<ul>
  <li>
    <code>overflow-inline:hidden</code>——在盒外隐藏文本
    <div id="div1">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-block:scroll</code>——总是添加滚动条
    <div id="div2">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-block:visible</code>——按需在盒外显示文本
    <div id="div3">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-block:auto</code>——在多数浏览器上等价于 <code>scroll</code>
    <div id="div4">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>
</ul>
```

#### CSS

```css
#div1,
#div2,
#div3,
#div4 {
  border: 1px solid black;
  width: 250px;
  margin-bottom: 12px;
}

#div1 {
  overflow-inline: hidden;
}
#div2 {
  overflow-inline: scroll;
}
#div3 {
  overflow-inline: visible;
}
#div4 {
  overflow-inline: auto;
}
```

#### 结果

{{EmbedLiveSample("设置行向溢出行为", "100%", "270")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{CSSXref("text-overflow")}}、{{CSSXref("white-space")}}、{{CSSXref("overflow")}}、{{CSSXref("overflow-block")}}、{{CSSXref("overflow-x")}}、{{CSSXref("overflow-y")}}、{{CSSXref("clip")}}、{{CSSXref("display")}}
- [CSS 逻辑属性](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)
- [书写模式](/zh-CN/docs/Web/CSS/Guides/Writing_modes)
