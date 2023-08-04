---
title: CustomElementRegistry.upgrade()
slug: Web/API/CustomElementRegistry/upgrade
---

{{APIRef("CustomElementRegistry")}}

CustomElementRegistry 接口的 upgrade() 方法将更新节点子树中所有包含阴影的自定义元素，甚至在它们连接到主文档之前也是如此。

## 语法

```plain
customElements.upgrade(root);
```

### 参数

- `root`
  - : 待升级的包含阴影的派生元素`节点` 。如果没有可升级的派生实例，则不会抛出异常。

### 返回值

空。

## 示例

摘至[HTML 规范](https://html.spec.whatwg.org/multipage/custom-elements.html#dom-customelementregistry-upgrade):

```js
const el = document.createElement("spider-man");

class SpiderMan extends HTMLElement {}
customElements.define("spider-man", SpiderMan);

console.assert(!(el instanceof SpiderMan)); // not yet upgraded

customElements.upgrade(el);
console.assert(el instanceof SpiderMan); // upgraded!
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
