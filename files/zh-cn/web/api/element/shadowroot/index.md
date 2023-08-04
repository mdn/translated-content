---
title: Element.shadowRoot
slug: Web/API/Element/shadowRoot
---

{{APIRef('Shadow DOM')}}{{SeeCompatTable}}

`Element.shadowRoot` 是只读属性，表示元素挂载的 shadow root。可以使用 {{domxref('Element.attachShadow')}} 给一个已存在的元素添加 shadow root。

## 语法

```plain
var shadowroot = element.shadowRoot;
```

### 值

可以是一个{{domxref('ShadowRoot')}}实例对象，但如果一个 shadow root 的 {{domxref("ShadowRoot.mode", "mode")}}被设置为 `closed`那么它的值将会是 `null`。(详情请见 {{domxref("Element.attachShadow")}} ).

## 示例

下面代码片段取自 [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks) ([在线查看](https://mdn.github.io/web-components-examples/life-cycle-callbacks)), 在这个示例中我们创建了一个在元素属性中指定了大小和颜色的正方形元素。

在`<custom-square>`标签的 class 定义中我们在生命周期的回调函数里调用了一些外部方法——`updateStyle()`，正是这个函数使得我们添加的正方形元素可以改变大小和颜色。你可以看到我们将`this`（即我们创建的正方形元素本身）作为一个参数传入了这个方法。

```js
connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
}

attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');
  updateStyle(this);
}
```

在`updateStyle()`函数中我们通过{{domxref("Element.shadowRoot")}}获取到了 Shadow DOM 引用。在这里我们利用了标准的 DOM 遍历技巧来获取在 Shadow DOM 中{{htmlelement("style")}}元素并更新了其中的 CSS 样式：

```js
function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  const childNodes = Array.from(shadow.childNodes);

  childNodes.forEach((childNode) => {
    if (childNode.nodeName === "STYLE") {
      childNode.textContent = `
        div {
          width: ${elem.getAttribute("l")}px;
          height: ${elem.getAttribute("l")}px;
          background-color: ${elem.getAttribute("c")};
        }
      `;
    }
  });
}
```

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat}}
