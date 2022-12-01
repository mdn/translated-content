---
title: 使用 aria-label 属性
slug: Web/Accessibility/ARIA/Attributes/aria-label
---

aria-label 属性用来给当前元素加上的标签描述，接受字符串作为参数。是用不可视的方式给元素加 label（如果被描述元素存在真实的描述元素，可使用 [aria-labelledby](/zh-CN/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) 属性作为来绑定描述元素和被描述元素来代替）。

aria-label 属性可以用在任何典型的 HTML 元素中，并不需要配合特定的 ARIA role 才能使用。

### Value

string

### 对于用户代理和辅助技术的可能影响

> **备注：** 由于辅助技术处理这一技术的差异导致选项信息可能不同。以上所提供的信息只是其中可能的一种，而非一般情况。

## 示例

#### 示例 1：多标签（Multiple Labels）

在下面的示例中，按钮（button）元素被定义为一个关闭（close）按钮，按钮中间有一个“X”字符。辅助软件并不能知道 X 是什么意思，所以需要 aria-label 标签来为辅助设备提供相应的标识来告诉它这个 button 是 close 的作用。

```html
<button aria-label="Close" onclick="myDialog.close()">X</button>
```

### 说明

最常见的对于标签的无障碍 API 就是可访问的 name 属性。

### ARIA roles 的使用

基本标记中的全部元素。

### ARIA 相关技术

- [Using the aria-labelledby attribute](/zh-CN/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)

### 兼容性

有待讨论：为通常的 UA 和 AT 产品组合提供支持信息。

### 额外资源

- [WAI-ARIA specification for aria-label](http://www.w3.org/TR/wai-aria/states_and_properties#aria-label)
