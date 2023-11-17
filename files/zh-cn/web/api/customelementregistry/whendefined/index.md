---
title: CustomElementRegistry.whenDefined()
slug: Web/API/CustomElementRegistry/whenDefined
---

{{APIRef("CustomElementRegistry")}}

当一个元素被定义时{{domxref("CustomElementRegistry")}} 中的方法**`whenDefined()`** 接口返回 {{jsxref("Promise")}}.

## 语法

```plain
Promise<> customElements.whenDefined(name);
```

### 参数

- name
  - : 自定义元素的名称

### 返回值

当自定义元素被定义时一个{{jsxref("Promise")}} 返回{jsxref("undefined")}}. 如果自定义元素已经被定义，则 resolve 立即执行。

### 例外

| Exception     | Description                                                                                                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SyntaxError` | 如果提供的 **name** 不是一个有效的 [自定义元素名字](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name), promise 的 reject 回调会接收到一个 `SyntaxError`. |

## 例子

这个例子使用 `whenDefined()` 来检测生成菜单的自定义元素何时被定义。这个菜单显示占位符内容一直到菜单内容已经准备好显示。

```html
<nav id="menu-container">
  <div class="menu-placeholder">Loading...</div>
  <nav-menu>
    <menu-item>Item 1</menu-item>
    <menu-item>Item 2</menu-item>
    ...
    <menu-item>Item N</menu-item>
  </nav-menu>
</nav>
```

```js
const container = document.getElementById("menu-container");
const placeholder = container.querySelector(".menu-placeholder");
// Fetch all the children of menu that are not yet defined.
const undefinedElements = container.querySelectorAll(":not(:defined)");

const promises = [...undefinedElements].map((button) =>
  customElements.whenDefined(button.localName),
);

// Wait for all the children to be upgraded,
// then remove the placeholder.
await Promise.all(promises);
container.removeChild(placeholder);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
