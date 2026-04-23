---
title: print-color-adjust
slug: Web/CSS/Reference/Properties/print-color-adjust
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

**`print-color-adjust`** [CSS](/zh-CN/docs/Web/CSS) 属性用于设置{{Glossary("user agent", "用户代理")}}在输出设备上优化元素外观时可以采取的措施。默认情况下，浏览器可根据输出设备的类型和功能，对元素的外观进行必要和谨慎的调整。

## 语法

```css
print-color-adjust: economy;
print-color-adjust: exact;

/* 全局值 */
print-color-adjust: inherit;
print-color-adjust: initial;
print-color-adjust: revert;
print-color-adjust: revert-layer;
print-color-adjust: unset;
```

`print-color-adjust` 属性值需指定为以下关键字之一。

### 值

- `economy`
  - : 用户代理可以根据其认为适当和审慎的方式对元素进行调整，以优化针对其渲染设备的输出效果。例如，在打印时，浏览器可能会选择省略所有背景图像，并调整文本颜色，以确保对比度达到最佳，便于在白纸上阅读。这是默认值。
- `exact`
  - : 该元素的内容是经过特别精心设计的，在使用颜色、图像和样式时考虑周到和/或非常重要，因此浏览器对其进行修改可能会使情况更糟而不是更好。除非用户要求，否则不应改变内容的外观。例如，一个页面可能包含一个信息列表，其中各行的背景颜色在白色和浅灰色之间交替。去掉背景色会降低内容的可读性。

## 使用说明

浏览器希望偏离指定外观的原因有很多，例如：

- 内容使用的文字和背景颜色在输出设备上过于相似，不利于辨认。
- 如果输出设备是打印机，为了节省墨水，可能会删除深色或非常密集的背景图像。
- 在打印页面时，浏览器可能希望将深色背景上的浅色文本替换为白色背景上的深色文本。

用户代理向用户提供的任何允许用户控制颜色和图像使用的选项，都将优先于 `print-color-adjust` 的值。换句话说，`print-color-adjust` 不一定会起作用。不仅用户可以覆盖该行为，而且每个用户代理可以自行决定在任何给定情况下如何处理 `print-color-adjust` 的值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 保持低对比度

在这个示例中，一个盒子在黑色背景上使用了 {{cssxref("background-image")}} 和半透明的 {{cssxref("gradient/linear-gradient", "linear-gradient()")}} 函数，在中间的红色文本后面显示了深蓝色渐变。无论出于何种原因，在任何渲染环境中，包括在纸张上，这都是所需的外观，因此我们使用 `print-color-adjust: exact` 来告诉浏览器在渲染时不要对盒子进行颜色或样式的调整。

#### CSS

```css
.my-box {
  background-color: black;
  background-image: linear-gradient(rgb(0 0 180 / 50%), rgb(70 140 220 / 50%));
  color: #900;
  width: 15rem;
  height: 6rem;
  text-align: center;
  font:
    24px "Helvetica",
    sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  print-color-adjust: exact;
}
```

#### HTML

```html
<div class="my-box">
  <p>需要更高的对比度！</p>
</div>
```

#### 结果

{{EmbedLiveSample("保持低对比度", 640, 120)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他与颜色相关的属性：{{cssxref("color")}}、{{cssxref("background-color")}}、{{cssxref("border-color")}}、{{cssxref("outline-color")}}、{{cssxref("text-decoration-color")}}、{{cssxref("text-emphasis-color")}}、{{cssxref("text-shadow")}}、{{cssxref("caret-color")}} 和 {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
