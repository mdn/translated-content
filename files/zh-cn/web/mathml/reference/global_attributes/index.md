---
title: 全局属性
slug: Web/MathML/Reference/Global_attributes
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

**全局属性**是所有 MathML 元素通用的属性；它们可以用于所有元素，尽管可能对某些元素没有影响。

全局属性可以在所有 [MathML 元素](/zh-CN/docs/Web/MathML/Reference/Element)上指定，_即使这些属性没有在标准中指定_。这意味着任何非标准元素仍然必须允许这些属性，尽管使用这些元素意味着文档不再符合 MathML 标准。

除了基本的 MathML 全局属性外，还存在以下全局属性：

- [事件处理器](/zh-CN/docs/Web/API/Document_Object_Model/Events)属性，例如 **`onclick`**、**`onfocus`** 等。
- [`href`](/zh-CN/docs/Web/MathML/Reference/Global_attributes/href) 属性，用于将 MathML 元素设置为超链接。

## 全局属性列表

- [`class`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/class)
  - : 元素类的一个空格分隔列表。类允许 CSS 和 JavaScript 通过[类选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Class_selectors)或诸如方法 {{DOMxRef("Document.getElementsByClassName()")}} 这样的函数来选择和访问特定元素。
- [`data-*`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/data-*)
  - : 形成自定义数据属性类别的属性，允许专有信息在 [MathML](/zh-CN/docs/Web/MathML) 及其 {{glossary("DOM")}} 表示之间进行交换，可能会被脚本使用。所有这些自定义数据都可以通过属性设置的元素的 {{DOMxRef("MathMLElement")}} 接口访问。{{DOMxRef("HTMLElement.dataset")}} 属性提供来对这些属性的访问。
- [`dir`](/zh-CN/docs/Web/MathML/Reference/Global_attributes/dir)
  - : 枚举属性，指示 MathML 元素的方向性。它可以具有以下值：
    - `ltr`，表示*从左到右*，并用于从左到右呈现数学表达式（例如英语或摩洛哥风格）；
    - `rtl`，表示*从右到左*，并用于从右到左呈现数学表达式（例如 Maghreb 或 Machrek 风格）；

- [`displaystyle`](/zh-CN/docs/Web/MathML/Reference/Global_attributes/displaystyle)：
  - : 一个布尔值，用于设置元素的 [math-style](/zh-CN/docs/Web/CSS/Reference/Properties/math-style)。
    - `true`，表示 `normal`。
    - `false`，表示 `compact`。
- [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id)
  - : 定义一个唯一标识符（ID），它必须在整个文档中是唯一的。它的目的是在链接（使用片段标识符）、脚本化或样式化（使用 CSS）时标识元素。
- [`mathbackground`](/zh-CN/docs/Web/MathML/Reference/Global_attributes/mathbackground)
  - : 用于元素的 [background-color](/zh-CN/docs/Web/CSS/Reference/Properties/background-color)。
- [`mathcolor`](/zh-CN/docs/Web/MathML/Reference/Global_attributes/mathcolor)
  - : 元素的 [color](/zh-CN/docs/Web/CSS/Reference/Properties/color)。
- [`mathsize`](/zh-CN/docs/Web/MathML/Reference/Global_attributes/mathsize)
  - : 用作元素的 [font-size](/zh-CN/docs/Web/CSS/Reference/Properties/font-size) 的 {{cssxref("length-percentage")}}。
- [`nonce`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/nonce)
  - : 一种密码学随机数（nonce，number used once），可用于[内容安全策略](/zh-CN/docs/Web/HTTP/Guides/CSP)以确定是否允许给定的获取继续进行。
- [`scriptlevel`](/zh-CN/docs/Web/MathML/Reference/Global_attributes/scriptlevel)
  - : 为元素指定 [math-depth](/zh-CN/docs/Web/CSS/Reference/Properties/math-depth)。有关接受的值和映射，请参阅 [scriptlevel 页面](/zh-CN/docs/Web/MathML/Reference/Global_attributes/scriptlevel#值)。
- [`style`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/style)
  - : 包含要应用于元素的 [CSS](/zh-CN/docs/Web/CSS) 样式声明。请注意，建议将样式定义在单独的文件中。这个属性和 {{MathMLElement("style")}} 元素主要用于快速样式设置，例如用于测试目的。
- [`tabindex`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/tabindex)
  - : 一个整数属性，指示元素是否可以获得输入焦点（是*可聚焦的*），是否应参与顺序键盘导航，以及如果是这样，位于什么位置。它可以取几个值：
    - *负值*表示元素应该是可聚焦的，但不应该通过顺序键盘导航到达；
    - `0` 表示元素应该是可聚焦的，并且通过顺序键盘导航可达，但其相对顺序由平台约定定义；
    - *正值*表示元素应该是可聚焦的，并且通过顺序键盘导航可达；元素聚焦的顺序是 [**tabindex**](#tabindex) 的递增值。如果多个元素共享相同的 tabindex，则它们的相对顺序遵循它们在文档中的相对位置。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("Element")}} 接口，允许查询大多数全局属性。
