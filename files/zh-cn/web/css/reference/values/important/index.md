---
title: "`!important` CSS 关键字"
short-title: "!important"
slug: Web/CSS/Reference/Values/important
l10n:
  sourceCommit: d93983dfe60b65633f67fffe04676c241ff92960
---

`!` 定界符后跟 `important` 关键字，表示把该声明标记为重要。**`!important`** 标志会改变[层叠](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction)中挑选声明的规则。没有标记为*重要*的声明称为*普通*声明。

要把声明标记为重要，只需在声明中的值后面加上*重要标志*（`!important`）。虽然定界符与关键字之间允许有空白，但该标志通常写作不带空白的 `!important`。

```css-nolint
selector {
  property: value; /* 普通声明 */
  property: value !important; /* 重要声明（推荐写法） */
  property: value ! important; /* 重要声明（不推荐写法） */
}
```

`!important` 写在属性值对的值的后面，前面可以有零个或多个空格。重要标志必须是声明中的最后一个记号。也就是说，标志与声明末尾的分号之间可以有空白和注释，但不能有其他内容。

## 对层叠的影响

涉及重要声明时，[层叠的来源与层叠层顺序](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction)会被反转。不加重要标志时，作者样式表中的声明会覆盖用户样式表中的声明，而用户样式表中的声明又会覆盖用户代理默认样式表中的声明。

当声明是重要声明时，优先顺序就反过来了。用户代理样式表中标记为重要的声明会覆盖用户样式表中的所有重要声明。同样，用户样式表中的所有重要声明会覆盖作者样式表中的所有重要声明。最后，所有重要声明都优先于所有动画。

> [!NOTE]
> 所有重要声明都优先于所有动画。`!important` 在 [@keyframes 动画](/zh-CN/docs/Web/CSS/Reference/At-rules/@keyframes)声明中无效。

反转重要声明的优先顺序，可以保证有特殊需求的用户（例如需要个性化配色方案或大号字体的用户）在需要时，通过把自己用户样式表中的某些声明标记为重要，覆盖作者的样式。它同时也保证恶意扩展无法覆盖用户代理的重要样式，这类覆盖可能破坏功能或对安全性造成负面影响。

有什么能优先于重要声明吗？有，[过渡](/zh-CN/docs/Web/CSS/Guides/Transitions)。CSS 过渡是控制属性从一个值变为另一个值之速度的一种方式。在从一个值过渡到另一个值的过程中，属性不会匹配某条具体的重要声明。

```css
a {
  color: red !important;
  background-color: yellow;
  transition: all 2s linear;
}
a:hover {
  color: blue !important;
  background-color: orange !important;
}
```

在这个示例中，`color` 和 `background-color` 两个属性会在两秒内过渡到悬停状态。尽管默认状态是普通声明、悬停状态是 `!important` 声明，过渡依然会发生。

### 层叠层

在作者、用户和用户代理这三个样式来源中，未分层样式里的普通声明都会覆盖分层样式中的声明，而最后声明的层优先于先前声明的层。重要声明则反转这一优先顺序：第一个层中的重要声明优先于下一个层中的重要声明，依此类推。此外，所有层内的重要声明都优先于任何层外的重要声明。

### 内联样式

内联样式是用 [`style`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/style) 属性定义的样式，同样可以是普通声明或重要声明。内联的*普通*样式优先于所有*普通*声明，不论其来源。内联的*重要*样式优先于其他所有作者的重要样式，不论其位于哪一层，但用户样式表或用户代理样式表中的重要样式以及过渡会覆盖它们。

### !important 与优先级

`!important` 虽然不参与计算优先级，但两者是有关联的。重要声明会覆盖来自同一[来源与层叠层](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction)的所有其他声明。

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

这个示例展示了一种选择器过度具体化的情况。无论选择器的[优先级](/zh-CN/docs/Web/CSS/Guides/Cascade/Specificity)有多高，只要匹配到的是普通声明，同来源、同层叠层中的重要声明就始终优先。在此例中，段落会一直是红色。

当同一个来源和层中的两条重要声明作用于同一个元素时，浏览器会选择并使用优先级更高的那条声明。

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

在这种情况下，选择器的优先级就起作用了。只有两个选择器优先级相同时，源码顺序才有影响。

## 对简写属性的影响

用 `!important` 声明简写属性，会把它所有的子属性都设为重要。下面两个选择器样式块是等价的：

```css
p {
  background: blue !important;
}

p {
  background-image: none !important;
  background-position: 0 0 !important;
  background-size: auto auto !important;
  background-repeat: repeat !important;
  background-origin: padding-box !important;
  background-clip: border-box !important;
  background-attachment: scroll !important;
  background-color: blue !important;
}
```

这个示例展示了通常建议避免使用重要标志的若干理由之一。

## 对自定义属性的影响

在自定义属性的值声明中加上 `!important` 标志，会使这次赋值成为重要声明。随后该标志会从自定义属性的值中移除，`!important` 标志不会作为自定义属性值的一部分传给 [`var()`](/zh-CN/docs/Web/CSS/Reference/Values/var) 函数。

```css
:root {
  --my-color: red !important;
  --my-color: blue;
}
p {
  color: var(--my-color);
}
blockquote {
  color: var(--my-color);
  color: purple;
}
```

```html hidden
<p>这是一个段落</p>
<blockquote>这是一个引用块</blockquote>
```

在这个示例中，段落会是红色而不是蓝色，因为自定义属性的这次赋值是重要的。引用块会是紫色，因为紫色的普通声明出现在红色的普通声明之后。

{{ EmbedLiveSample('对自定义属性的影响', '500', '250') }}

## 最佳实践

不要用 `!important` 来压过优先级。如果出于界面需求要有意创建重要声明，请在 CSS 代码中加注释，向维护者说明为什么不应覆盖该特性。

即便要覆盖不受你控制的高优先级样式，比如第三方插件里用 [ID 选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/ID_selectors)声明的样式，你也不必动用 `!important`。可以考虑把第三方的样式表导入到一个[具名层或匿名层](/zh-CN/docs/Web/CSS/Reference/At-rules/@layer)中，并把它作为第一个层叠层，而不是使用 `!important`。只要外部样式里没有重要声明，无论优先级如何，你的样式都会优先于该组件的样式。

如果你需要覆盖一个包含重要声明的外部样式表，就创建一个包含所需覆盖规则的层叠层，并首先声明该层。

### 无障碍考虑

用户样式表中的重要样式优先于作者样式表中的重要声明。这意味着，给网站样式加上 `!important` 标志，并不能阻止有个别特殊需求（例如需要大号字体）的用户在自己用户样式表里添加重要样式来覆盖你的样式。

## 浏览器兼容性

此特性在所有浏览器中都受支持。

## 参见

- [CSS 优先级](/zh-CN/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS 层叠](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction)
