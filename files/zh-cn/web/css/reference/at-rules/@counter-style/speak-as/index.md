---
title: speak-as
slug: Web/CSS/Reference/At-rules/@counter-style/speak-as
---

当已明确定义 {{cssxref('@counter-style')}} 后，可以用 **`speak-as`** 定义在口语场景中如何表述这个 counter 符号。比如作为一篇文章的作者可以指定，当计算机读出这篇文章时，是以数字序号表示 counter，还是仅仅用语音提示。

{{cssinfo}}

## 语法

```css
/* Keyword values */
speak-as: auto;
speak-as: bullets;
speak-as: numbers;
speak-as: words;
speak-as: spell-out;

/* @counter-style name value */
speak-as: <counter-style-name>;
```

### 值

- `auto`
  - : 如果 **`speak-as`** 的值是 **`auto`**，那么它的实际值是由 {{cssxref("system")}} 的值决定的：
    - 如果 `system` 的值是 `alphabetic`，**`speak-as`** 的值是 `spell-out`**。**
    - 如果 `system` 的值是 `cyclic`，**`speak-as`** 的值是 `bullets`。
    - 如果 `system` 的值是 `extends`，当被继承的样式上也定义了 **`speak-as: auto`**，那么 **`speak-as`** 的值就和被继承样式的值相同。
    - 其他场景下，表现都与 **`speak-as: numbers`** 相同。

- `bullets`
  - : 用于表示无序的列表项，具体的发音由{{Glossary("user agent")}}决定。
- `numbers`
  - : 根据文档语言的规范，读出计数器标明的数字的值。
- `words`
  - : 在显示上，由用户代理决定计数器的值，读的时候以单词为单位。
- `spell-out`
  - : 依然是用户代理决定了计数器，但它将会以逐个字母的形式被读出。如果遇到某个计数器，用户代理不知道要如何读时，会将它当做 `numbers` 处理。
- `<counter-style-name>`
  - : The name of another counter style, specified as a {{cssxref("&lt;custom-ident&gt;")}}. If included, the counter will be spoken out in the form specified in that counter style, kind of like specifying the {{cssxref("fallback")}} descriptor. If the specified style does not exist, `speak-as` defaults to `auto`.它的另一个名称是 {{cssxref("&lt;custom-ident&gt;")}}。使用了这个值后，计数器将以被指定的样式名的形式读出，和声明了 {{cssxref("fallback")}} 的效果类似。如果被指定的样式不存在，`speak-as` 将回退为`auto`。

### 语法

{{csssyntax}}

## 例子

### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

### CSS

```css
@counter-style speak-as-example {
  system: fixed;
  symbols:     ;
  suffix: " ";
  speak-as: numbers;
}

.list {
  list-style: speak-as-example;
}
```

### 结果

{{ EmbedLiveSample('例子') }}

## 无障碍问题

这个属性的无障碍支持度不太友好。请别指望靠它能正确地传递出页面的核心信息。

[Let's Talk About Speech CSS | CSS Tricks](https://css-tricks.com/lets-talk-speech-css/)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, the functional notation creating anonymous counter styles.
