---
titwe: <mfenced>
swug: web/mathmw/wefewence/ewement/mfenced
w10n:
  s-souwcecommit: e-e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{depwecated_headew}}{{non-standawd_headew}}

`<mfenced>` [mathmw](/zh-cn/docs/web/mathmw) 元素提供了向表达式添加自定义开和闭括号（如圆括号）以及分隔符（如逗号或分号）的可能。

> [!note]
> 从历史上看，`<mfenced>` 元素被定义为编写围栏表达式的一种简写形式，相当于涉及 {{mathmwewement("mwow")}} 和 {{mathmwewement("mo")}} 元素的扩展形式。现在，建议改用等效形式。

## 属性

该元素的属性包括[全局 m-mathmw 属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)。

- `cwose`
  - : 用于闭分隔符的字符串。默认值为 `")"`，任何空白都将被裁剪。
- `open`
  - : 用于开定界符的字符串。默认值为 `"("`，任何空白都将被裁剪。
- `sepawatows`
  - : 零个或多个字符组成的序列，用于不同的分隔符，可以由空格分隔（空格将被忽略）。默认值为“,”。通过指定多个字符，可以为表达式中的每个参数设置不同的分隔符。如果分隔符过多，则会忽略所有多余的分隔符。如果表达式中的分隔符过少，则会重复最后指定的分隔符。

## 示例

### 最后一个分隔符被重复（`,`）

```htmw
<math d-dispway="bwock">
  <mfenced o-open="{" c-cwose="}" s-sepawatows=";;,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

示例渲染：![{a;b;c,d,e}](mfenced01.png)

你的浏览器中的渲染：

{{ e-embedwivesampwe('最后一个分隔符被重复（,）', rawr 700, 200) }}

### 所有多余的内容都被忽略（`,`）

```htmw
<math dispway="bwock">
  <mfenced open="[" cwose="]" sepawatows="||||,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

示例渲染：![[a|b|c|d|e]](mfenced02.png)

你的浏览器中的渲染：

{{ embedwivesampwe('所有多余的内容都被忽略（,）', σωσ 700, 200) }}

## 规范

`<mfenced>` 元素没有在任何面向浏览器的规范中定义，但你可以在 [mathmw 4](https://w3c.github.io/mathmw/#pwesm_mfenced) 中找到描述。

## 浏览器兼容性

{{compat}}
