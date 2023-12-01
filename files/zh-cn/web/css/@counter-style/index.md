---
title: "@counter-style"
slug: Web/CSS/@counter-style
---

{{CSSRef}}

## 概要

`@counter-style` 是一个 [CSS](/zh-CN/CSS) [at-rule](/zh-CN/CSS/At-rule) ，它让开发者可以自定义 counter 的样式。一个 `@counter-style` 规则定义了如何把一个计数器的值转化为字符串表示。

最初版的 CSS 定义了一系列很好用的计数器样式，尽管近几年又添加了很多样式，但是这种限制方式被证明已经不能满足全球化的排版了。`@counter-style` 规则用一种开放的方式弥补了这一缺点，在预定义的样式不能满足需求时，它可以使开发者自定义他们自己的计数器样式。

## 语法

```plain
@counter-style <counter-style-name> {
    system: <counter system>
    symbols: <counter symbols>
    additive-symbols: <additive-symbols>
    negative: <negative symbol>
    prefix: <prefix>
    suffix: <suffix>
    range: <range>
    pad: <padding>
    speak-as: <speak-as>
    fallback: <counter-style-name>
}
```

### 描述

每个 `@counter-style` 由一个名称标识并具有一组描述符

- {{cssxref("system")}}
  - : 指定一个算法，用于将计数器的整数值转化为字符串表示。
- {{cssxref("negative")}}
  - : 指定一个符号，当计数器表示的值为负的时候，把这个符号加在值的前面或后面
- {{cssxref("prefix")}}
  - : 指定一个符号，加在标记表示符的前面。前缀在最后阶段才会被加上，所以在计数器的最终表示中，它在{{cssxref("negative")}}前。
- {{cssxref("suffix")}}
  - : 与{{cssxref("prefix")}}类似，suffix 指定一个符号，加在标记表示符的后面。
- {{cssxref("range")}}
  - : 指定一个 counter-style 生效的范围，如果计数器的值不再这个范围内，那么自定义的 counter-style 不会生效，counter-style 会后退到{{cssxref("fallback")}}的 style。
- {{cssxref("pad")}}
  - : 在你想要给标记表示符最小值时使用。比如说，你想要计数器从 01 开始，经过 02，03，04，那么这时可以使用 pad 了。对于大于 pad 指定值的表示符，标记会恢复为 normal。
- {{cssxref("fallback")}}
  - : 定义一个备用的系统，当自定义的系统不能使用或者计数器的值超过了定义的范围时使用。如果备用系统也不能表示计数器的值，那么备用系统的备用系统（如果有的话）将会启用。如果没有指定备用系统，或者备用系统链不能够正确表示一个值，那么最终会降为十进制样式表示。
- {{cssxref("symbols-descriptor", "symbols")}}

  - : 定义一个符号，用于标记的表示。符号可以包含字符串，图片或自定义的识别码。这个符号怎样构建标记呢？这依赖于 system 描述符里面所定义的算法。举个例子，如果 system 的值是 fixed，那么 symbols 属性指定的固定的 N 个符号，将被用来表示计数器的前 N 个值。用完了前 N 个符号后，列表里剩下的值将使用 fallback 定义的样式来表示。

    下面的 @counter-style 规则使用图片而不是字符标记。

    ```css
    @counter-style winners-list {
      system: fixed;
      symbols: url(gold-medal.svg) url(silver-medal.svg) url(bronze-medal.svg);
      suffix: " ";
    }
    ```

- {{cssxref("additive-symbols")}}

  - : 尽管 symbols 属性中指定的符号可以被 system 中定义的大部分算法所使用，但是一些 system 属性的值，比如 additive，依赖于本描述符所描述的加性元组。Each additive tuple consists of a counter symbol and a non negative integer weight. 每个加性元组包含一个可数的符号和一个非负证书的权重。The additive tuples must be specified in the descending order of their weights.

- {{cssxref("speak-as")}}
  - : 定义如何在语音识别器中读出计数器样式，比如屏幕阅读器。例如基于该描述符的值，标记符号的值可以作为有序列表的数字或者字幕作为无序列表的音频提示读出。

## 例子

```css
@counter-style circled-alpha {
  system: fixed;
  symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  suffix: " ";
}
```

上面的 counter style 规则在列表中可以如下使用：

```css
.items {
  list-style: circled-alpha;
}
```

会产生如下列表：

Ⓐ One
Ⓑ Two
Ⓒ Three
Ⓓ Four
Ⓔ FIve
....
...
Ⓨ Twenty Five
Ⓩ Twenty Six

27 Twenty Seven
28 Twenty Eight
29 Twenty Nine
30 Thirty

查看更多例子 [demo page](https://mdn.github.io/css-counter-style-demo/).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关阅读

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, the functional notation creating anonymous counter styles.
