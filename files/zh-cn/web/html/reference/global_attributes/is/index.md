---
title: is
slug: Web/HTML/Reference/Global_attributes/is
---

**`is`** [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)允许你指定标准 HTML 元素像定义的内置元素一样工作（请参阅使用[自定义元素](/zh-CN/docs/Web/API/Web_components/Using_custom_elements)以获取更多详细信息）。

只有在当前文档中已成功定义 ( [defined](/zh-CN/docs/Web/API/CustomElementRegistry/define) ) 指定的自定义元素名称并且扩展了要应用的元素类型时，才能使用此属性。

## 示例

以下代码来自我们的 [word-count-web-component](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component) 示例（[see it live also](https://mdn.github.io/web-components-examples/word-count-web-component/)）。

```js
// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Constructor contents ommitted for brevity
    ...

  }
}

// Define the new element
customElements.define('word-count', WordCount, { extends: 'p' });
```

```html
<p is="word-count"></p>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- All [global attributes](/zh-CN/docs/Web/HTML/Reference/Global_attributes).
