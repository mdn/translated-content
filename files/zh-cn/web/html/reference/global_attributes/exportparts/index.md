---
title: HTML exportparts 全局属性
short-title: exportparts
slug: Web/HTML/Reference/Global_attributes/exportparts
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`exportparts`** [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)允许你通过导出其 `part` 的名称选择并样式化嵌套在{{Glossary("shadow tree", "影子树")}}中的元素。

阴影树是一个孤立的结构，其中标识符、类和样式无法通过常规 DOM 中的选择器或查询访问。有两个 HTML 属性可以应用于影子树元素，从而允许从外部针对影子树应用 CSS 样式：`part` 和 `exportparts`。

[`part`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/part) 全局属性可使影子元素对父 DOM 可见。`part` 名称用作 {{CSSxRef("::part", "::part()")}} 伪元素的参数。通过这种方式，可以从影子树外部为其中的元素应用 CSS 样式。然而，`::part()` 伪元素仅对父级 DOM 可见。这意味着当影子树嵌套时，除了直接父级之外，其他祖先节点都无法看到这些部分。`exportparts` 属性解决了这一限制。

`exportparts` 属性使影子树的某些部分能够在影子 DOM 之外可见。这一概念被称为“导出”。`exportparts` 属性应用于元素的*影子宿主*，即影子树所附着的元素。该属性的值为影子树中存在的 `part` 名称的逗号分隔列表。这些名称将对当前结构外的 DOM 可用。

```html
<template id="ancestor-component">
  <nested-component exportparts="part1, part2, part5"></nested-component>
</template>
```

在导出一个 `part` 时，可以为该部分分配一个不同的名称，如下面的代码片段所示。`exportparts` 属性的值实际上是一个以逗号分隔的部分名称映射列表。因此，以上代码片段中的 `exportparts` 属性相当于 `exportparts="part1:part1, part2:part2, part5:part5`，表示每个 `part` 都以相同的名称导出。在每个映射中，第一个字符串指定了影子树中的部件名称，第二个字符串指定了部件在外部显示的名称。

```html
<template id="ancestor-component">
  <nested-component
    exportparts="part1:exposed1, part2:exposed2"></nested-component>
</template>
```

## 示例

### 基本组件

为了演示如何使用 `exportparts` 来实现对嵌套组件内部组件的定位，我们将创建一个组件，然后将其嵌套在另一个组件中。

#### HTML

首先，我们创建一个卡片组件，然后用另一个组件将其包裹。我们还使用了新创建的元素，将槽位填充为纯文本内容。

```html
<template id="card-component-template">
  <style>
    :host {
      display: block;
    }
  </style>
  <div class="base" part="base">
    <div part="header"><slot name="header_slot"></slot></div>
    <div part="body"><slot name="body_slot"></slot></div>
    <div part="footer"><slot name="footer_slot"></slot></div>
  </div>
</template>

<card-component>
  <p slot="header_slot">这是卡片头部</p>
  <p slot="body_slot">这是卡片主体</p>
  <p slot="footer_slot">这是卡片尾部</p>
</card-component>
```

#### JavaScript

我们使用 JavaScript 来定义在上述 HTML 中定义的 Web 组件：

```js
customElements.define(
  "card-component",
  class extends HTMLElement {
    constructor() {
      super(); // 在构造函数中总是先调用 super
      const cardComponent = document.getElementById(
        "card-component-template",
      ).content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardComponent.cloneNode(true));
    }
  },
);
```

#### CSS

我们使用 {{cssxref("::part")}} 伪元素来设置 `<card-component>` 影子树的部分样式：

```css
::part(body) {
  color: red;
  font-style: italic;
}
```

#### 结果

{{ EmbedLiveSample('基本组件', '100%', '160') }}

### 嵌套组件

继续上面的 `<card-component>` 例，我们通过将 `<card-component>` 包裹在另一个组件中来创建一个嵌套组件；在本例中，该组件为 `<card-wrapper>`。然后，我们使用 `exportparts` 属性从嵌套组件中导出我们希望在组件影子树之外进行样式设置的部分。

#### HTML

```html hidden
<template id="card-component-template">
  <style>
    :host {
      display: block;
    }
  </style>
  <div class="base" part="base">
    <div part="header"><slot name="header_slot"></slot></div>
    <div part="body"><slot name="body_slot"></slot></div>
    <div part="footer"><slot name="footer_slot"></slot></div>
  </div>
</template>
```

```html
<template id="card-wrapper">
  <style>
    :host {
      display: block;
    }
  </style>
  <card-component exportparts="base, header, body">
    <slot name="H" slot="header_slot"></slot>
    <slot name="B" slot="body_slot"></slot>
    <slot name="F" slot="footer_slot"></slot>
  </card-component>
</template>
```

我们包含一个 `<card-wrapper>` 自定义元素，以及一个 `<card-component>` 用于比较：

```html
<h2>卡片包装器</h2>

<card-wrapper>
  <p slot="H">这是包装器头部</p>
  <p slot="B">这是包装器主体</p>
  <p slot="F">这是包装器尾部</p>
</card-wrapper>

<h2>卡片组件</h2>

<card-component>
  <p slot="header_slot">这是卡片头部</p>
  <p slot="body_slot">这是卡片主体</p>
  <p slot="footer_slot">这是卡片尾部</p>
</card-component>
```

#### JavaScript

```js hidden
customElements.define(
  "card-component",
  class extends HTMLElement {
    constructor() {
      super(); // 在构造函数中总是先调用 super
      const cardComponent = document.getElementById(
        "card-component-template",
      ).content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardComponent.cloneNode(true));
    }
  },
);
```

```js
customElements.define(
  "card-wrapper",
  class extends HTMLElement {
    constructor() {
      super(); // 在构造函数中总是先调用 super
      const cardWrapper = document.getElementById("card-wrapper").content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardWrapper.cloneNode(true));
    }
  },
);
```

#### CSS

现在，我们可以直接定位 `<card-component>` 的部分，并且当其嵌套在 `<card-wrapper>` 中时，可以像这样操作：

```css
h2 {
  background-color: #dedede;
}

card-wrapper,
card-component {
  border: 1px dashed blue;
  width: fit-content;
}

::part(body) {
  color: red;
  font-style: italic;
}

::part(header),
::part(footer) {
  font-weight: bold;
}
```

#### 结果

{{ EmbedLiveSample('嵌套组件', '100%', '400') }}

注意在嵌套时，`footer` 并不是加粗的，因为我们没有在 `exportparts` 包含它。

### 暴露映射部件

要重命名导出的部件，我们提供一个以逗号分隔的映射部件列表，每个映射部件包含原始名称和导出名称，两者之间用冒号（`:`）分隔：

#### HTML

我们使用重新映射语法更新之前的 `<card-wrapper>` 自定义元素（从导出部分列表中省略 `body`）：

```html hidden
<template id="card-component-template">
  <div class="base" part="base">
    <div part="header"><slot name="header_slot"></slot></div>
    <div part="body"><slot name="body_slot"></slot></div>
    <div part="footer"><slot name="footer_slot"></slot></div>
  </div>
</template>

<card-wrapper>
  <p slot="H">这是包装器头部</p>
  <p slot="B">这是包装器主体</p>
  <p slot="F">这是包装器尾部</p>
</card-wrapper>
```

```html
<template id="card-wrapper">
  <card-component
    exportparts="
       base:card__base,
       header:card__header,
       footer:card__footer
     ">
    <span slot="header_slot"><slot name="H"></slot></span>
    <span slot="body_slot"><slot name="B"></slot></span>
    <span slot="footer_slot"><slot name="F"></slot></span>
  </card-component>
</template>
```

#### JavaScript

```js hidden
customElements.define(
  "card-component",
  class extends HTMLElement {
    constructor() {
      super(); // 在构造函数中总是先调用 super
      const cardComponent = document.getElementById(
        "card-component-template",
      ).content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardComponent.cloneNode(true));
    }
  },
);
```

```js
customElements.define(
  "card-wrapper",
  class extends HTMLElement {
    constructor() {
      super(); // 在构造函数中总是先调用 super
      const cardWrapper = document.getElementById("card-wrapper").content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardWrapper.cloneNode(true));
    }
  },
);
```

#### CSS

在从 `<card-wrapper>` 内部定位 `<card-component>` 的各个部分时，我们只能通过其暴露的部分名称来样式化这些导出部分：

```css
/* 选择暴露部件的名称 */
::part(card__header) {
  font-weight: bold;
}
/* 没有选择任何元素：这些部件名称没有暴露 */
::part(footer),
::part(body) {
  font-weight: bold;
}
```

#### 结果

{{ EmbedLiveSample('暴露映射部件', '100%', '160') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`part`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/part) HTML 属性
- {{HTMLElement("template")}} 和 {{HTMLElement("slot")}} HTML 元素
- {{CSSXref("::part")}} 和 {{CSSXref("::slotted")}} 伪元素
- {{CSSXref(":host")}} 伪类
- [`ShadowRoot`](/zh-CN/docs/Web/API/ShadowRoot) 接口
- {{DOMxRef("Element.part")}} 属性
- [使用模板和插槽](/zh-CN/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS 域](/zh-CN/docs/Web/CSS/Guides/Scoping)模块
