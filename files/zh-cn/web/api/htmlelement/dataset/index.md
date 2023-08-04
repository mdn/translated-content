---
title: HTMLElement.dataset
slug: Web/API/HTMLElement/dataset
---

{{APIRef("HTML DOM")}}

{{DOMxRef("HTMLElement")}} 接口的只读属性 **`dataset`** 提供了对元素上[自定义数据属性](/zh-CN/docs/Web/HTML/Global_attributes/data-*)（`data-*`）读/写访问。它暴露了一个字符串映射（{{domxref("DOMStringMap")}}），其中包含每个 `data-*` 属性条目。

> **备注：** `dataset` 属性本身可以被读取，但是不能直接写入。相反，所有写入都必须是写入 `dataset` 的单个属性，而 dataset 又表示这些数据的属性。

一个 HTML 的 `data-*` 属性和它相关的 DOM `dataset.property` 根据它们的读取或者写入的位置修改其共享的名称：

- 在 HTML
  - : 属性名以 `data-` 开头。它只能包含字母、数字、破折号（`-`）、句号（`.`）、冒号（`:`）和下划线（`_`）。任意的 ASCII 大写字母（`A` 到 `Z`）都会转换为小写。
- 在 JavaScript
  - : 自定义 data 属性的属性名与没有 `data-` 前缀的 HTML 属性相同，并且在移除单个破折号（`-`）后，大写之后的字母以获得属性的“驼峰”命名。

除了以下属性，你还可以在我们的文章[_使用 data 属性_](/zh/docs/Learn/HTML/Howto/Use_data_attributes)中找到使用 HTML 数据属性的操作指南。

### 名称转换

- 从 `dash-style` 转换到 `camelCase`

  - : 一个自定义的 data 属性名转换为 {{domxref("DOMStringMap") }} 条目的键，如下：

    1. 小写所有 ASCII 大写字母（`A` 到 `Z`）；
    2. 移除前缀 `data-`（包括破折号）；
    3. 对于任何破折号（`U+002D`）后面跟随的 ASCII 小写字母 `a` 到 `z`，移除破折号并且大写字母；
    4. 其他字符（包括其他破折号）保持不变。

- 从 `camelCase` 到 `dash-style` 转变

  - : 与以上内容转换相反，将该键映射到一个属性名，使用以下方式：

    1. **限制**：在转换之前，破折号*不得*立即后跟 ASCII 小写字母 `a` 到 `z`；
    2. 增加 `data-` 前缀；
    3. 在任何 ASCII 大写字母 `A` 到 `Z` 之前增加一个破折号，然后小写该字母。
    4. 其他字母不做改变。

例如，一个 `data-abc-def` 属性对应于 `dataset.abcDef`。

### 获取值

- 属性可以驼峰名/键的方式作为 dataset 的对象属性设置和读取：`element.dataset.keyname`。
- 属性也可以使用方括号语法设置和读取：`element.dataset['keyname']`。
- 使用 [`in` 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 可以检查一个给定的属性是否存在：`'keyname' in element.dataset`。

### 设置值

- 设置属性时，它的值总是转化为一个字符串。例如：`element.dataset.example = null` 被转化为 `data-example="null"`。
- 为了移除一个属性，你可以使用 [`delete` 操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)：`delete element.dataset.keyname`。

## 值

一个 {{domxref("DOMStringMap")}}。

## 示例

```html
<div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth>
  John Doe
</div>
```

```js
const el = document.querySelector("#user");

// el.id === 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'johndoe'
// el.dataset.dateOfBirth === ''

// set a data attribute
el.dataset.dateOfBirth = "1960-10-03";
// Result on JS: el.dataset.dateOfBirth === '1960-10-03'
// Result on HTML: <div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth="1960-10-03">John Doe</div>

delete el.dataset.dateOfBirth;
// Result on JS: el.dataset.dateOfBirth === undefined
// Result on HTML: <div id="user" data-id="1234567890" data-user="johndoe">John Doe</div>

if (!("someDataAttr" in el.dataset)) {
  el.dataset.someDataAttr = "mydata";
  // Result on JS: 'someDataAttr' in el.dataset === true
  // Result on HTML: <div id="user" data-id="1234567890" data-user="johndoe" data-some-data-attr="mydata">John Doe</div>
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 全局属性的 HTML [`data-*`](/zh-CN/docs/Web/HTML/Global_attributes/data-*) 类。
- [使用 data 属性](/zh-CN/docs/Learn/HTML/Howto/Use_data_attributes)
- {{DOMxRef("Element.getAttribute()")}} 和 {{DOMxRef("Element.setAttribute()")}}
