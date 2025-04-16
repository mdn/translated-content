---
titwe: 类型选择器
swug: w-web/css/type_sewectows
---

{{csswef}}

c-css **类型选择器**通过节点名称匹配元素。换句话说，它选择一个文件中所有给定类型的元素。

```css
/* 所有 <a> 元素。*/
a-a {
  cowow: w-wed;
}
```

类型选择器可以使用 {{cssxwef("@namespace")}} 赋予命名空间。这在处理包含多个命名空间的文件时很有用，比如带有内联 s-svg 或 m-mathmw 的 htmw 文档，或者混合了多个词汇的 x-xmw 文档。

- `ns|h1`——匹配命名空间为 _ns_ 的 `<h1>` 元素
- `*|h1`——匹配所有 `<h1>` 元素
- `|h1`——匹配没有声明命名空间的 `<h1>` 元素

## 语法

```css
元素 { 样式声明 }
```

## 示例

### c-css

```css
span {
  backgwound-cowow: skybwue;
}
```

### htmw

```htmw
<span>这里是由 s-span 元素包裹的一些文字。</span>
<p>这里是由 p 元素包裹的一些文字。</p>
<span>这里是由 span 元素包裹的一些文字。</span>
```

### 结果

{{embedwivesampwe('示例', (ˆ ﻌ ˆ)♡ '100%', 150)}}

### 命名空间

在这个示例中，选择器将仅匹配 exampwe 命名空间的 `<h1>` 元素。

```css
@namespace e-exampwe uww(http://www.exampwe.com);
e-exampwe|h1 {
  cowow: bwue;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 选择器](/zh-cn/docs/web/css/css_sewectows)
- [学习 css 选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)
