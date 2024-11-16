---
title: CustomElementRegistry：whenDefined() 方法
slug: Web/API/CustomElementRegistry/whenDefined
l10n:
  sourceCommit: 0edb4dbed5c7bfbc1dc8f2efd43bb4a5fe52f2d1
---

{{APIRef("Web Components")}}

{{domxref("CustomElementRegistry")}} 接口的 **`whenDefined()`** 方法返回一个在具名元素被定义时兑现的 {{jsxref("Promise")}}。

## 语法

```js-nolint
whenDefined(name)
```

### 参数

- `name`
  - : 自定义元素的名称。

### 返回值

一个 {{jsxref("Promise")}}，会在使用给定名称定义[自定义元素](/zh-CN/docs/Web/API/Web_components/Using_custom_elements)时兑现该自定义元素的构造函数。如果已经定义了给定名称的自定义元素，则 promise 立刻兑现。

如果名称不是[有效的自定义元素名](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)，则 promise 会以 `SyntaxError` {{domxref("DOMException")}} 被拒绝。

## 示例

此示例使用 `whenDefined()` 来检测生成菜单的自定义元素何时被定义。这个菜单显示占位符内容一直到菜单内容已经准备好显示。

```html
<nav id="menu-container">
  <div class="menu-placeholder">加载中……</div>
  <nav-menu>
    <menu-item>项目 1</menu-item>
    <menu-item>项目 2</menu-item>
    ……
    <menu-item>项目 N</menu-item>
  </nav-menu>
</nav>
```

```js
const container = document.getElementById("menu-container");
const placeholder = container.querySelector(".menu-placeholder");
// 获取菜单中尚未被定义的所有子元素。
const undefinedElements = container.querySelectorAll(":not(:defined)");

async function removePlaceholder() {
  // 过滤出元素的唯一 localName
  const tags = new Set(
    [...undefinedElements].map((button) => button.localName),
  );
  const promises = [...tags].map((tag) => customElements.whenDefined(tag));

  // 等待所有的子元素升级
  await Promise.all(promises);
  // 然后移除占位符
  container.removeChild(placeholder);
}

removePlaceholder();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
