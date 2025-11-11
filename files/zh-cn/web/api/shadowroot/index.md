---
title: ShadowRoot
slug: Web/API/ShadowRoot
---

{{APIRef('Shadow DOM')}}

Shadow DOM API 的 **`ShadowRoot`** 接口是一个 DOM 子树的根节点，它与文档的主 DOM 树分开渲染。

你可以通过使用一个元素的 {{domxref("Element.shadowRoot")}} 属性来检索它的参考，假设它是由 {{domxref("Element.attachShadow()")}} 创建的并使 `mode` 设置为 `open`.

## 属性

- {{domxref("ShadowRoot.delegatesFocus")}} {{readonlyinline}} {{non-standard_inline}}
  - : 返回一个 boolean 值表明在 shadow 添加时 delegatesFocus 是否被设置 (see {{domxref("Element.attachShadow()")}})
- {{domxref("ShadowRoot.host")}} {{readonlyinline}}
  - : `ShadowRoot` 附加的宿主 DOM 元素。
- {{domxref("ShadowRoot.innerHTML")}}
  - : `ShadowRoot` 内部的 DOM 树。
- {{domxref("ShadowRoot.mode")}} {{readonlyinline}}
  - : `ShadowRoot` 的模式——可以是 `open` 或者 `closed`。这定义了 shadow root 的内部实现是否可被 JavaScript 访问及修改 — 也就是说，该实现是否公开，例如，{{HTMLElement("video")}} 标签内部实现无法被 JavaScript 访问及修改。

### 从 DocumentOrShadowRoot 中包含的属性

_`ShadowRoot` 接口包含了下列从{{domxref("DocumentOrShadowRoot")}} mixin 中定义的属性。请注意它现在仅在 Chrome 浏览器中应用; 其他的浏览器仍在{{domxref("Document")}}接口实现。_

- {{domxref("DocumentOrShadowRoot.activeElement")}} {{readonlyInline}}
  - : 返回含有获取焦点了的 shadow tree 的 {{domxref('Element')}}
- {{domxref("DocumentOrShadowRoot.styleSheets")}} {{readonlyInline}}
  - : 返回 {{domxref('CSSStyleSheet')}} 的 {{domxref('StyleSheetList')}} 对象，用于代表通过链接加载到文档中或内嵌的样式表。

## 方法

_`ShadowRoot` 接口包含了下列几个在 {{domxref("DocumentOrShadowRoot")}} mixin 中定义的方法。请注意它现在仅在 Chrome 浏览器中应用; 其他的浏览器仍在{{domxref("Document")}}接口实现。_

- {{domxref("DocumentOrShadowRoot.getSelection()")}}
  - : 返回一个 {{domxref('Selection')}} 类来表明用户选择的文本选区或者光标所在的位置
- {{domxref("DocumentOrShadowRoot.elementFromPoint()")}}
  - : 返回在指定坐标最上层的元素。
- {{domxref("DocumentOrShadowRoot.elementsFromPoint()")}}
  - : 返回一个包含所有在指定位置上的元素的 Array
- {{domxref("DocumentOrShadowRoot.caretPositionFromPoint()")}}
  - : 返回一个 {{domxref('CaretPosition')}} 对象，包括包含了光标的 DOM 节点，以及光标在该节点中的字符偏移量

## 例子

下面的这段代码是从我们的 [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks) 示例 ([查看在线示例](https://mdn.github.io/web-components-examples/life-cycle-callbacks)) 中提取出来的，它创建了一个由元素的属性指定的大小相等的正方形。

Inside the `<custom-square>` element's class definition we include some life cycle callbacks that make a call to an external function, `upateStyle()`, which actually applies the size and color to the element. You'll see that we are passing it `this` (the custom element itself) as a parameter.

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

In the `updateStyle()` function itself, we get a reference to the shadow DOM using {{domxref("Element.shadowRoot")}}. From here we use standard DOM traversal techniques to find the {{htmlelement("style")}} element inside the shadow DOM and then update the CSS found inside it:

```js
function updateStyle(elem) {
  var shadow = elem.shadowRoot;
  var childNodes = shadow.childNodes;
  for (var i = 0; i < childNodes.length; i++) {
    if (childNodes[i].nodeName === "STYLE") {
      childNodes[i].textContent =
        "div {" +
        "width: " +
        elem.getAttribute("l") +
        "px;" +
        "height: " +
        elem.getAttribute("l") +
        "px;" +
        "background-color: " +
        elem.getAttribute("c") +
        ";" +
        "}";
    }
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
