---
title: 控制流
slug: Glossary/Control_flow
---

_控制流_ 是计算机执行一个程序中语句的顺序。

程序会从第一行代码开始执行直至最后一行，除非遇到（实际中是非常普遍地）改变控制流的代码结构，比如条件语句和循环。

比如，下面的程序被用来校验用户在网页上输入的数据。数据经过校验后会被提交，但当用户没有输入任何数据时 (field==empty)，这个程序会提醒用户去填入数据。为了做到这一点，这个程序使用了 {{Glossary("Conditional", "条件")}} 结构 `if...else`，这样就可以根据数据是否被填充而执行不同的代码。

```js
if (field == empty) {
  promptUser();
} else {
  submitForm();
}
```

在 {{glossary("JavaScript")}} 或者 {{glossary("PHP")}} 中存在许多控制结构，比如条件语句、循环和函数。还有部分语句可能被设定为当 {{Glossary("Event", "事件")}} 发生的时候才执行。

例如，上面的代码可能被放入一个函数，而这个函数只有在用户点击了表单的**提交**按钮时才执行。而这个函数也可以再包含一个循环，来达到按照顺序遍历表单中的所有数据的目的。往回看 `if...else` 代码块，`promptUser` 和 `submitForm` 也可以是对其他函数的调用。如你所见，控制结构依靠几行代码就能完成复杂的处理过程。

控制流的存在意味着在读代码时，你不能只从第一行读到最后一行，你还要注意代码的结构以及它对语句执行顺序的影响。

## Learn more

### General knowledge

- [Control flow](https://zh.wikipedia.org/wiki/Control_flow) on Wikipedia

### Technical reference

- [JavaScript Reference - Control flow](/zh-CN/docs/Web/JavaScript/Reference#Control_flow) on MDN

### Learn about it

- [Statements (Control flow)](/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) on MDN
