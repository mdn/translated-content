---
title: HTMLOptionElement
slug: Web/API/HTMLOptionElement
---

{{APIRef("HTML DOM")}}

**`HTMLOptionElement`** 接口表示了 {{HTMLElement("option")}} 元素并继承{{domxref("HTMLElement")}}接口所有的类和方法。

{{InheritanceDiagram(600, 120)}}

## 属性

_继承自其父类属性，{{domxref("HTMLElement")}}._

| 名称                      | 类型                           | 描述                                                                                                                                                                                                |
| ------------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultSelected`         | {{domxref("Boolean")}}         | 包含了[`selected`](/zh-CN/docs/Web/HTML/Element/option#selected) HTML 特性的初始值，指示默认情况下是否选择该选项。                                                                                  |
| `disabled`                | {{domxref("Boolean")}}         | 反映了[`disabled`](/zh-CN/docs/Web/HTML/Element/option#disabled) HTML 特性 的值 , 这意味着选项（option）是不可选的。如果一个选项是关闭的{{HTMLElement("optgroup")}}元素的子元素，那么它也可被关闭。 |
| `form`{{readonlyInline}}  | {{domxref("HTMLFormElement")}} | 如果该选项是{{HTMLElement("select")}} 元素的后代，则该属性与相应{{DomXref("HTMLSelectElement")}} 对象的`form`属性具有相同的值; 否则为`null`。                                                       |
| `index`{{readonlyInline}} | `long`                         | 该选项在其所属的选项列表中的位置，以树形顺序排列。如果该选项不是选项列表的一部分，例如为 {{HTMLElement("datalist")}} 元素的一部分时，该值为`0`。                                                    |
| `label`                   | {{domxref("DOMString")}}       | 反映[`label`](/zh-CN/docs/Web/HTML/Element/option#label) HTML 特性的值，该属性为选项提供了一个标签。如果没有特别设置此属性，读取它返回元素的文本内容。                                              |
| `selected`                | {{domxref("Boolean")}}         | 表示当前该 option 是否被选择。                                                                                                                                                                      |
| `text`                    | {{domxref("DOMString")}}       | 包含元素的文本内容。                                                                                                                                                                                |
| `value`                   | {{domxref("DOMString")}}       | 反映[`value`](/zh-CN/docs/Web/HTML/Element/option#value) HTML 特性的值（如果存在）；否则反映{{domxref("Node.textContent")}} 特性的值。                                                              |

## 方法

_方法继承自其父类，{{domxref("HTMLElement")}}._

{{domxref("HTMLOptionElement.Option()")}}是一个创建`HTMLOptionElement`对象的构造函数。它有四个值：要显示的文本，`文本`，关联的值，`值`，defaultSelected 的值以及`所选`的值。最后三个值是可选的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素 : {{HTMLElement("option")}}。
