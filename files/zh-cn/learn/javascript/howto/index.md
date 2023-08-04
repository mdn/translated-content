---
title: 解决 JavaSctript 代码的常见问题
slug: Learn/JavaScript/Howto
---

{{LearnSidebar}}

以下链接指向撰写 JavaScript 代码时可能遇见的问题。

## 初学者常见的错误

### 正确的拼写和使用

如果你的代码不工作或浏览器抱怨某些东西是未定义的，请检查你是否正确拼写了所有的变量名称，函数名称等。

导致问题的一些常见的内置浏览器函数有：

| 正确                       | 错误                      |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementbyTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### 分号的位置

必须确保没有错误地放置分号，例如：

| 正确                        | 错误                        |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### 函数

函数有很多容易出错的地方。

最常见的错误之一是函数被声明了却没有被调用。例如：

```js
function myFunction() {
  alert("This is my function.");
}
```

这个函数不会执行，除非你调用它，例如：

```js
myFunction();
```

#### 函数作用域

记住，[函数拥有自己的作用域](/zh-CN/docs/Learn/JavaScript/Building_blocks/Functions#函数作用域和冲突)——你不能从函数外部访问一个函数内的变量值，除非你在全局声明了该变量（即不在任何函数内），或者从函数外部获得它的[返回值](/zh-CN/docs/Learn/JavaScript/Building_blocks/Return_values)。

#### 在 return 语句之后运行代码

还要记住，当你向一个函数外部返回一个值时，JavaScript 解释器会退出这个函数——在 return 语句之后，不会执行任何代码。

事实上，如果您在返回语句之后有代码，某些浏览器（如 Firefox）会在开发人员控制台中显示出一条错误消息。Firefox 在返回语句后会给你“无法运行到的代码”的提示。

### 对象标记法与正常赋值

当你在 JavaScript 中正常赋值时，使用等号：

```js
const myNumber = 0;
```

但是在[对象](/zh-CN/docs/Learn/JavaScript/Objects)中，需要小心地使用正确的语法标签。你需要使用花括号来包裹一个对象，冒号来分隔成员名称和值，并用逗号来分隔每个成员，例如：

```js
const myObject = {
  name: "Chris",
  age: 38,
};
```

## 基本定义

- [JavaScript 是什么？](/zh-CN/docs/Learn/JavaScript/First_steps/What_is_JavaScript#广义的定义)
- [变量是什么？](/zh-CN/docs/Learn/JavaScript/First_steps/Variables#变量是什么？)
- [字符串是什么？](/zh-CN/docs/Learn/JavaScript/First_steps/Strings)
- [数组是什么？](/zh-CN/docs/Learn/JavaScript/First_steps/Arrays#数组是什么？)
- [循环是什么？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [函数是什么？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Functions)
- [事件是什么？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)
- [对象是什么？](/zh-CN/docs/Learn/JavaScript/Objects/Basics#对象基础)
- [JSON 是什么？](/zh-CN/docs/Learn/JavaScript/Objects/JSON#什么是_json)
- [web API 是什么？](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#什么是_api)
- [DOM 是什么？](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#文档对象模型)

## 基本用例

### 常见

- [怎么在页面中添加 JavaScript?](/zh-CN/docs/Learn/JavaScript/First_steps/What_is_JavaScript#怎样向页面添加_javascript)
- [怎么在 JavaScript 中添加注释？](/zh-CN/docs/Learn/JavaScript/First_steps/What_is_JavaScript#注释)

### 变量

- [如何声明变量？](/zh-CN/docs/Learn/JavaScript/First_steps/Variables#声明变量)
- [如何初始化变量的值？](/zh-CN/docs/Learn/JavaScript/First_steps/Variables#初始化变量)
- [如何更新变量的值？](/zh-CN/docs/Learn/JavaScript/First_steps/Variables#更新变量)（参见 [赋值运算符](/zh-CN/docs/Learn/JavaScript/First_steps/Math#赋值运算符)）
- [JavaScript 中有哪些数据类型？](/zh-CN/docs/Learn/JavaScript/First_steps/Variables#变量类型)
- ['弱类型'是什么意思？](/zh-CN/docs/Learn/JavaScript/First_steps/Variables#loose_typing)

### 数学

- [在 web 开发中需要处理什么样的数字值？](/zh-CN/docs/Learn/JavaScript/First_steps/Math#数字类型)
- [JavaScript 如何处理基本的数学运算？](/zh-CN/docs/Learn/JavaScript/First_steps/Math#算术运算符)
- [什么是运算符的优先级，如何在 JavaScript 中处理优先级问题？](/zh-CN/docs/Learn/JavaScript/First_steps/Math#运算符优先级)
- [如何在 JavaScript 中增加或减少值？](/zh-CN/docs/Learn/JavaScript/First_steps/Math#自增和自减运算符)
- [如何在 JavaScript 中比较值的大小？](/zh-CN/docs/Learn/JavaScript/First_steps/Math#比较运算符)（例如，查看哪个值更大，或检查一个值是否与另外一个值相等）

### 字符串

- [如何在 JavaScript 中创建字符串？](/zh-CN/docs/Learn/JavaScript/First_steps/Strings#创建一个字符串)
- [我需要使用单引号，还是双引号？](/zh-CN/docs/Learn/JavaScript/First_steps/Strings#单引号和双引号)
- [我如何转义字符串中的字符？](/zh-CN/docs/Learn/JavaScript/First_steps/Strings#转义字符串中的字符)
- [我如何将字符串拼接在一起？](/zh-CN/docs/Learn/JavaScript/First_steps/Strings#连接字符串)
- [可以将字符串和数字拼接在一起吗？](/zh-CN/docs/Learn/JavaScript/First_steps/Strings#数字与字符串)
- [如何得到字符串的长度？](/zh-CN/docs/Learn/JavaScript/First_steps/Useful_string_methods#获得字符串的长度)
- [如何得到字符串某个特定位置的字符？](/zh-CN/docs/Learn/JavaScript/First_steps/Useful_string_methods#检索特定字符串字符)
- [如何从给定字符串中找到并提取特定子字符串？](/zh-CN/docs/Learn/JavaScript/First_steps/Useful_string_methods#在字符串中查找子字符串并提取它)
- [如何改变字符串的大小写？](/zh-CN/docs/Learn/JavaScript/First_steps/Useful_string_methods#转换大小写)
- [如何将特定子字符串替换为另外一个？](/zh-CN/docs/Learn/JavaScript/First_steps/Useful_string_methods#替换字符串的某部分)

### 数组

- [怎么创建数组？](/zh-CN/docs/Learn/JavaScript/First_steps/Arrays#创建数组)
- [如何访问和修改数组中的元素？](/zh-CN/docs/Learn/JavaScript/First_steps/Arrays#访问和修改数组元素)（包括多维数组）
- [怎么获取数组的长度？](/zh-CN/docs/Learn/JavaScript/First_steps/Arrays#获取数组长度)
- [怎么添加和移除数组中的元素？](/zh-CN/docs/Learn/JavaScript/First_steps/Arrays#添加和删除数组项)
- [如何将一个字符串拆分为数组，或将数组拼接成一个字符串？](/zh-CN/docs/Learn/JavaScript/First_steps/Arrays#字符串和数组之间的转换)

### JavaScript 调试

- [什么是错误的基本类型？](/zh-CN/docs/Learn/JavaScript/First_steps/What_went_wrong#错误类型)
- [什么是浏览器开发工具，如何使用它？](/zh-CN/docs/Learn/Common_questions/What_are_browser_developer_tools)
- [怎么在 JavaScript 控制台打印值？](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#console_相关_api)
- [怎么使用断点和其他 JavaScript 调试工具？](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#using_the_javascript_debugger)

有关 JavaScript 调试的更多内容，请查阅[处理 JavaScript 常见问题](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)页面，也可以查看[其他常见错误](/zh-CN/docs/Learn/JavaScript/First_steps/What_went_wrong#其他常见错误)的描述。

### 在代码中作出判断

- [如何根据变量的值或其他条件执行不同代码块？](/zh-CN/docs/Learn/JavaScript/Building_blocks/conditionals)
- [如何使用 if ...else 语句？](/zh-CN/docs/Learn/JavaScript/Building_blocks/conditionals#if_..._else_语句)
- [如何将决策的代码块嵌套在其他代码块之中？](/zh-CN/docs/Learn/JavaScript/Building_blocks/conditionals#嵌套_if_..._else)
- [如何在 JavaScript 中使用与、或、非运算符？](/zh-CN/docs/Learn/JavaScript/Building_blocks/conditionals#逻辑运算符：_和_!)
- [如何方便地处理单一条件产生的多重选择？](/zh-CN/docs/Learn/JavaScript/Building_blocks/conditionals#switch_语句)
- [如何使用三元运算符快速作出基于真假的二重选择？](/zh-CN/docs/Learn/JavaScript/Building_blocks/conditionals#三元运算符)

### 循环/迭代

- [如何重复运行相同的代码？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [如何在满足某些条件下退出循环？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Looping_code#使用_break_退出循环)
- [如何在满足某些条件下跳转至下一次循环迭代？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Looping_code#使用_continue_跳过迭代)
- [如何使用 while 和 do ... while 循环？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Looping_code#while_语句和_do_..._while_语句)

## 中级用例

### 函数

- [如何找到浏览器中的内置函数？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Functions#浏览器内置函数)
- [函数和方法有什么不同？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Functions#函数与方法)
- [如何创建自己的函数？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
- [如何运行（或调用）函数？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Functions#调用函数)
- [什么是匿名函数？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Functions#匿名函数)
- [如何在调用函数时指定参数？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Functions#函数参数)
- [什么是函数作用域？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Functions#函数作用域和冲突)
- [什么是函数返回值，如何使用它们？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Return_values)

### 对象

- [如何创建对象？](/zh-CN/docs/Learn/JavaScript/Objects/Basics#对象基础)
- [什么是点表示法？](/zh-CN/docs/Learn/JavaScript/Objects/Basics#点表示法)
- [什么是括号表示法？](/zh-CN/docs/Learn/JavaScript/Objects/Basics#括号表示法)
- [如何获取和设置对象的方法和属性？](/zh-CN/docs/Learn/JavaScript/Objects/Basics#设置对象成员)
- [对象中的 `this` 是什么？](/zh-CN/docs/Learn/JavaScript/Objects/Basics#this的含义)
- [什么是面向对象编程？](/zh-CN/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
- [什么是构造器和实例，如何创建它们？](/zh-CN/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#类和构造函数)
- [在 JavaScript 中创建对象的方法都有哪些？](/zh-CN/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#other_ways_to_create_object_instances)

### JSON

- [如何构建 JSON 数据，并使用 JavaScript 读取它？](/zh-CN/docs/Learn/JavaScript/Objects/JSON#json_结构)
- [如何将 JSON 文件加载至页面上？](/zh-CN/docs/Learn/JavaScript/Objects/JSON#加载我们的_json)
- [如何将 JSON 对象转换为字符串，或者再转换回来？](/zh-CN/docs/Learn/JavaScript/Objects/JSON#对象和文本间的转换)

### 事件

- [什么是事件处理器，怎样使用它们？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events#事件处理器属性)
- [什么是内联事件处理器？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events#内联事件处理器——请勿使用)
- [`addEventListener()` 函数的作用，如何使用它？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events#使用_addeventlistener)
- [我该使用什么样的机制将事件代码添加到我的网页上？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events#我该使用哪种机制？)
- [什么是事件对象，如何使用它？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events#事件对象)
- [如何防止默认事件行为？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events#阻止默认行为)
- [事件如何在嵌套元素中触发？（事件传递及其相关内容——事件冒泡及捕获）](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events#事件冒泡及捕获)
- [什么是事件委托，它如何工作？](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events#事件委托)

### 面向对象的 JavaScript

- [什么是对象原型？](/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes)
- [什么是构造器属性，如何使用它？](/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes#constructor_属性)
- [如何向构造器中添加方法？](/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes#修改原型)
- [如何创建一个新的构造函数，从父构造函数中继承其成员？](/zh-CN/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
- [什么时候应当在 JavaScript 中使用继承？](/zh-CN/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#继承)

### Web API

- [如何使用 JavaScript 操作 DOM 模型（如添加或删除元素）？](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#主动学习：基本的_dom_操作)
