---
title: HTMLElement
slug: Web/API/HTMLElement
---

{{APIRef}}

HTMLElement 接口表示所有的 [HTML](/zh-CN/docs/Web/HTML) 元素。一些 HTML 元素直接实现了 HTMLElement 接口，其他的间接实现 HTMLElement 接口。

## 属性

_继承自父接口 {{domxref("Element")}} 和 {{domxref("GlobalEventHandlers")}} 的属性。_

| 属性名称                                                                        | 属性类型                                | Description                                                                |
| ------------------------------------------------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------- |
| {{domxref("HTMLElement.accessKey")}}                                            | {{domxref("DOMString")}}                | 获取/设置元素访问的快捷键                                                  |
| {{domxref("HTMLElement.accessKeyLabel")}}                                       | {{domxref("DOMString")}}                | 返回一个包含元素访问的快捷键的字符串（只读）                               |
| {{domxref("HTMLElement.contentEditable")}}                                      | {{domxref("DOMString")}}                | 获取/设置元素的可编辑状态                                                  |
| {{domxref("HTMLElement.isContentEditable")}} {{readonlyInline}}                 | {{domxref("Boolean")}}                  | 表明元素的内容是否可编辑（只读）                                           |
| {{domxref("HTMLElement.dataset")}} {{readonlyInline}}                           | {{domxref("DOMStringMap")}}             | 获取元素的自定义属性，是一个对象（key-value，只读）                        |
| {{domxref("HTMLElement.dir")}}                                                  | {{domxref("DOMString")}}                | 获取/设置元素的方向，可选的值有：ltr，rtl，auto                            |
| {{domxref("HTMLElement.draggable")}}                                            | {{domxref("Boolean")}}                  | 设置/获取元素是否可以拖拽                                                  |
| {{domxref("HTMLElement.dropzone")}} {{readonlyInline}}                          | {{domxref("DOMSettableTokenList")}}     |                                                                            |
| {{domxref("HTMLElement.hidden")}}                                               | {{domxref("Boolean")}}                  | 获取/设置元素是否隐藏                                                      |
| {{domxref("HTMLElement.itemScope")}} {{experimental_inline}}                    | {{domxref("Boolean")}}                  |                                                                            |
| {{domxref("HTMLElement.itemType")}} {{readonlyInline}}{{experimental_inline}}   | {{domxref("DOMSettableTokenList")}}     |                                                                            |
| {{domxref("HTMLElement.itemId")}} {{experimental_inline}}                       | {{domxref("DOMString")}}                |                                                                            |
| {{domxref("HTMLElement.itemRef")}} {{readonlyInline}}{{experimental_inline}}    | {{domxref("DOMSettableTokenList")}}     |                                                                            |
| {{domxref("HTMLElement.itemProp")}} {{readonlyInline}}{{experimental_inline}}   | {{domxref("DOMSettableTokenList")}}     |                                                                            |
| {{domxref("HTMLElement.itemValue")}} {{experimental_inline}}                    | {{domxref("object")}}                   |                                                                            |
| {{domxref("HTMLElement.lang")}}                                                 | {{domxref("DOMString")}}                | 获取/设置元素属性、文本、内容的语言                                        |
| {{domxref("HTMLElement.offsetHeight")}} {{readonlyInline}}                      | `double`                                | 元素自身可视高度加上上下 border 的宽度                                     |
| {{domxref("HTMLElement.offsetLeft")}}{{readonlyInline}}                         | `double`                                | 元素自己 border 左边距离父元素 border 左边或者 body 元素 border 左边的距离 |
| {{domxref("HTMLElement.offsetParent")}}{{readonlyInline}}                       | {{domxref("Element")}}                  | 元素的父元素，如果没有就是 body 元素                                       |
| {{domxref("HTMLElement.offsetTop")}}{{readonlyInline}}                          | `double`                                | 元素自己 border 顶部距离父元素顶部或者 body 元素 border 顶部的距离         |
| {{domxref("HTMLElement.offsetWidth")}}{{readonlyInline}}                        | `double`                                | 元素自身可视宽度加上左右 border 的宽度                                     |
| {{domxref("HTMLElement.properties")}} {{readonlyInline}}{{experimental_inline}} | {{domxref("HTMLPropertiesCollection")}} |                                                                            |
| {{domxref("HTMLElement.spellcheck")}}                                           | {{domxref("Boolean")}}                  |                                                                            |
| {{domxref("HTMLElement.style")}}                                                | {{domxref("CSSStyleDeclaration")}}      | 获取/设置元素的 style 属性                                                 |
| {{domxref("HTMLElement.tabIndex")}}                                             | `long`                                  | 获取/设置元素的 tab 键控制次序                                             |
| {{domxref("HTMLElement.title")}}                                                | {{domxref("DOMString")}}                | 获取/设置元素的 title 属性                                                 |
| {{domxref("HTMLElement.translate")}}                                            | {{domxref("Boolean")}}                  | 获取/设置元素是否可以被翻译                                                |

## 事件

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- {{DOMxRef("HTMLElement.copy_event", "copy")}}
  - : Fired when the user initiates a copy action through the browser's user interface.
- {{DOMxRef("HTMLElement.cut_event", "cut")}}
  - : Fired when the user initiates a cut action through the browser's user interface.
- {{DOMxRef("HTMLElement.paste_event", "paste")}}
  - : Fired when the user initiates a paste action through the browser's user interface.
- {{domxref("HTMLInputElement/invalid_event", "invalid")}}
  - : Fired when an element does not satisfy its constraints during constraint validation.

## 方法

_从父元素继承的方法，{{domxref("Element")}}._

| Name & Arguments                                                     | Return | Description        |
| -------------------------------------------------------------------- | ------ | ------------------ |
| {{domxref("HTMLElement.blur()")}}                                    | `void` | 元素失去焦点       |
| {{domxref("HTMLElement.click()")}}                                   | `void` | 触发元素的点击事件 |
| {{domxref("HTMLElement.focus()")}}                                   | `void` | 元素获得焦点       |
| {{domxref("HTMLElement.forceSpellCheck()")}} {{experimental_inline}} | `void` |                    |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element")}}
