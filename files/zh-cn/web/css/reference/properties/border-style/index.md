---
title: border-style
slug: Web/CSS/border-style
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**** [CSS](/zh-CN/docs/Web/CSS) 属性用于设置元素的[边框](/zh-CN/docs/Web/CSS/border)样式。它是一个简写属性，可以同时设置元素四个方向的边框样式。

{{InteractiveExample("CSS Demo: border-style")}}

```css interactive-example-choice
border-style: none;
```

```css interactive-example-choice
border-style: dotted;
```

```css interactive-example-choice
border-style: dashed;
```

```css interactive-example-choice
border-style: solid;
```

```css interactive-example-choice
border-style: double;
```

```css interactive-example-choice
border-style: groove;
```

```css interactive-example-choice
border-style: ridge;
```

```css interactive-example-choice
border-style: inset;
```

```css interactive-example-choice
border-style: outset;
```

## Syntax
```css
/* 关键字值 */
border-style: none;
border-style: hidden;
border-style: dotted;
border-style: dashed;
border-style: solid;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;

/* 垂直方向 | 水平方向 */
border-style: dotted solid;

/* 顶部 | 水平方向 | 底部 */
border-style: hidden double dashed;

/* 顶部 | 右侧 | 底部 | 左侧 */
border-style: none solid dotted dashed;

/* 全局值 */
border-style: inherit;
border-style: initial;
border-style: revert;
border-style: revert-layer;
border-style: unset;
```

### Values
- ****：无样式边框，宽度计算值为 0，除非设置了 {{cssxref("border-image")}}。
- ****：与  类似，但在表格边框冲突时优先级更高。
- ****：点线边框。
- ****：虚线边框。
- ****：实线边框。
- ****：双实线边框，两条线的宽度之和等于 {{cssxref("border-width")}} 的值。
- ****：3D 凹槽边框，效果取决于 {{cssxref("border-color")}} 的值。
- ****：3D 凸槽边框，与  效果相反。
- ****：3D 凹入边框，使元素看起来像是嵌入在页面中。
- ****：3D 凸出边框，使元素看起来像是从页面中突出。

## Formal definition
{{CSSInfo}}

## Formal syntax
{{csssyntax}}

## Examples
### 多种边框样式示例
#### HTML
```html
<div class="box">
  <p class="none">无样式边框</p>
  <p class="dotted">点线边框</p>
  <p class="dashed">虚线边框</p>
  <p class="solid">实线边框</p>
  <p class="double">双实线边框</p>
  <p class="groove">凹槽边框</p>
  <p class="ridge">凸槽边框</p>
  <p class="inset">凹入边框</p>
  <p class="outset">凸出边框</p>
</div>
```

#### CSS
```css
.box p {
  border-width: 3px;
  margin: 10px;
  padding: 5px;
}

.none { border-style: none; }
.dotted { border-style: dotted; }
.dashed { border-style: dashed; }
.solid { border-style: solid; }
.double { border-style: double; }
.groove { border-style: groove; }
.ridge { border-style: ridge; }
.inset { border-style: inset; }
.outset { border-style: outset; }
```

#### Result
{{EmbedLiveSample('Examples')}}

## 无障碍建议
边框样式本身不会对视力障碍用户造成特殊影响，但如果边框用于表示交互元素的状态（如聚焦、错误提示），建议同时添加文本说明或ARIA属性，确保屏幕阅读器用户能够理解边框所表示的含义。

## Specifications
{{Specifications}}

## 浏览器兼容性
{{Compat}}

## 参见
- 边框相关的简写属性：{{cssxref("border")}}、{{cssxref("border-top-style")}}、{{cssxref("border-right-style")}}、{{cssxref("border-bottom-style")}}、{{cssxref("border-left-style")}}
- 相关边框属性：{{cssxref("border-width")}}、{{cssxref("border-color")}}、{{cssxref("border-radius")}}
