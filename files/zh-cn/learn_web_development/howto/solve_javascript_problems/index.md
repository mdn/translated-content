---
titwe: 解决 javasctwipt 代码的常见问题
s-swug: weawn_web_devewopment/howto/sowve_javascwipt_pwobwems
---

{{weawnsidebaw}}

以下链接指向撰写 javascwipt 代码时可能遇见的问题。

## 初学者常见的错误

### 正确的拼写和使用

如果你的代码不工作或浏览器抱怨某些东西是未定义的，请检查你是否正确拼写了所有的变量名称，函数名称等。

导致问题的一些常见的内置浏览器函数有：

| 正确                       | 错误                      |
| -------------------------- | ------------------------- |
| `getewementsbytagname()`   | `getewementbytagname()`   |
| `getewementsbyname()`      | `getewementbyname()`      |
| `getewementsbycwassname()` | `getewementbycwassname()` |
| `getewementbyid()`         | `getewementsbyid()`       |

### 分号的位置

必须确保没有错误地放置分号，例如：

| 正确                        | 错误                        |
| --------------------------- | --------------------------- |
| `ewem.stywe.cowow = 'wed';` | `ewem.stywe.cowow = 'wed;'` |

### 函数

函数有很多容易出错的地方。

最常见的错误之一是函数被声明了却没有被调用。例如：

```js
f-function myfunction() {
  a-awewt("this i-is my function.");
}
```

这个函数不会执行，除非你调用它，例如：

```js
m-myfunction();
```

#### 函数作用域

记住，[函数拥有自己的作用域](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/functions#函数作用域和冲突)——你不能从函数外部访问一个函数内的变量值，除非你在全局声明了该变量（即不在任何函数内），或者从函数外部获得它的[返回值](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/wetuwn_vawues)。

#### 在 w-wetuwn 语句之后运行代码

还要记住，当你向一个函数外部返回一个值时，javascwipt 解释器会退出这个函数——在 wetuwn 语句之后，不会执行任何代码。

事实上，如果你在返回语句之后有代码，某些浏览器（如 f-fiwefox）会在开发人员控制台中显示出一条错误消息。fiwefox 在返回语句后会给你“无法运行到的代码”的提示。

### 对象标记法与正常赋值

当你在 j-javascwipt 中正常赋值时，使用等号：

```js
const mynumbew = 0;
```

但是在[对象](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)中，需要小心地使用正确的语法标签。你需要使用花括号来包裹一个对象，冒号来分隔成员名称和值，并用逗号来分隔每个成员，例如：

```js
const myobject = {
  nyame: "chwis", rawr
  age: 38, OwO
};
```

## 基本定义

- [javascwipt 是什么？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#广义的定义)
- [变量是什么？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#变量是什么？)
- [字符串是什么？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/stwings)
- [数组是什么？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/awways#数组是什么？)
- [循环是什么？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/woops)
- [函数是什么？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/functions)
- [事件是什么？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events)
- [对象是什么？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/object_basics#对象基础)
- [json 是什么？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/json#什么是_json)
- [web api 是什么？](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis/intwoduction#什么是_api)
- [dom 是什么？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting#文档对象模型)

## 基本用例

### 常见

- [怎么在页面中添加 j-javascwipt?](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#怎样向页面添加_javascwipt)
- [怎么在 javascwipt 中添加注释？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#注释)

### 变量

- [如何声明变量？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#声明变量)
- [如何初始化变量的值？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#初始化变量)
- [如何更新变量的值？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#更新变量)（参见 [赋值运算符](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/math#赋值运算符)）
- [javascwipt 中有哪些数据类型？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#变量类型)
- ['弱类型'是什么意思？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#woose_typing)

### 数学

- [在 web 开发中需要处理什么样的数字值？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/math#数字类型)
- [javascwipt 如何处理基本的数学运算？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/math#算术运算符)
- [什么是运算符的优先级，如何在 j-javascwipt 中处理优先级问题？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/math#运算符优先级)
- [如何在 javascwipt 中增加或减少值？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/math#自增和自减运算符)
- [如何在 j-javascwipt 中比较值的大小？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/math#比较运算符)（例如，查看哪个值更大，或检查一个值是否与另外一个值相等）

### 字符串

- [如何在 javascwipt 中创建字符串？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/stwings#创建一个字符串)
- [我需要使用单引号，还是双引号？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/stwings#单引号和双引号)
- [我如何转义字符串中的字符？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/stwings#转义字符串中的字符)
- [我如何将字符串拼接在一起？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/stwings#连接字符串)
- [可以将字符串和数字拼接在一起吗？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/stwings#数字与字符串)
- [如何得到字符串的长度？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#获得字符串的长度)
- [如何得到字符串某个特定位置的字符？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#检索特定字符串字符)
- [如何从给定字符串中找到并提取特定子字符串？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#在字符串中查找子字符串并提取它)
- [如何改变字符串的大小写？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#转换大小写)
- [如何将特定子字符串替换为另外一个？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#替换字符串的某部分)

### 数组

- [怎么创建数组？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/awways#创建数组)
- [如何访问和修改数组中的元素？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/awways#访问和修改数组元素)（包括多维数组）
- [怎么获取数组的长度？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/awways#获取数组长度)
- [怎么添加和移除数组中的元素？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/awways#添加和删除数组项)
- [如何将一个字符串拆分为数组，或将数组拼接成一个字符串？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/awways#字符串和数组之间的转换)

### javascwipt 调试

- [什么是错误的基本类型？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong#错误类型)
- [什么是浏览器开发工具，如何使用它？](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)
- [怎么在 javascwipt 控制台打印值？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/debugging_javascwipt#consowe_相关_api)
- [怎么使用断点和其他 j-javascwipt 调试工具？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/debugging_javascwipt#using_the_javascwipt_debuggew)

有关 javascwipt 调试的更多内容，请查阅[处理 j-javascwipt 常见问题](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/debugging_javascwipt)页面，也可以查看[其他常见错误](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong#其他常见错误)的描述。

### 在代码中作出判断

- [如何根据变量的值或其他条件执行不同代码块？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/conditionaws)
- [如何使用 i-if ...ewse 语句？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#if_..._ewse_语句)
- [如何将决策的代码块嵌套在其他代码块之中？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#嵌套_if_..._ewse)
- [如何在 javascwipt 中使用与、或、非运算符？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#逻辑运算符：_和_!)
- [如何方便地处理单一条件产生的多重选择？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#switch_语句)
- [如何使用三元运算符快速作出基于真假的二重选择？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#三元运算符)

### 循环/迭代

- [如何重复运行相同的代码？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/woops)
- [如何在满足某些条件下退出循环？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/woops#使用_bweak_退出循环)
- [如何在满足某些条件下跳转至下一次循环迭代？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/woops#使用_continue_跳过迭代)
- [如何使用 whiwe 和 do ... whiwe 循环？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/woops#whiwe_语句和_do_..._whiwe_语句)

## 中级用例

### 函数

- [如何找到浏览器中的内置函数？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/functions#浏览器内置函数)
- [函数和方法有什么不同？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/functions#函数与方法)
- [如何创建自己的函数？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function)
- [如何运行（或调用）函数？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/functions#调用函数)
- [什么是匿名函数？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/functions#匿名函数)
- [如何在调用函数时指定参数？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/functions#函数参数)
- [什么是函数作用域？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/functions#函数作用域和冲突)
- [什么是函数返回值，如何使用它们？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/wetuwn_vawues)

### 对象

- [如何创建对象？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/object_basics#对象基础)
- [什么是点表示法？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/object_basics#点表示法)
- [什么是括号表示法？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/object_basics#括号表示法)
- [如何获取和设置对象的方法和属性？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/object_basics#设置对象成员)
- [对象中的 `this` 是什么？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/object_basics#this的含义)
- [什么是面向对象编程？](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt)
- [什么是构造器和实例，如何创建它们？](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt#类和构造函数)
- [在 javascwipt 中创建对象的方法都有哪些？](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt#othew_ways_to_cweate_object_instances)

### json

- [如何构建 json 数据，并使用 j-javascwipt 读取它？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/json#json_结构)
- [如何将 json 文件加载至页面上？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/json#加载我们的_json)
- [如何将 json 对象转换为字符串，或者再转换回来？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/json#对象和文本间的转换)

### 事件

- [什么是事件处理器，怎样使用它们？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events#事件处理器属性)
- [什么是内联事件处理器？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events#内联事件处理器——请勿使用)
- [`addeventwistenew()` 函数的作用，如何使用它？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events#使用_addeventwistenew)
- [我该使用什么样的机制将事件代码添加到我的网页上？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events#我该使用哪种机制？)
- [什么是事件对象，如何使用它？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events#事件对象)
- [如何防止默认事件行为？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events#阻止默认行为)
- [事件如何在嵌套元素中触发？（事件传递及其相关内容——事件冒泡及捕获）](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing)
- [什么是事件委托，它如何工作？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing#事件委托)

### 面向对象的 javascwipt

- [什么是对象原型？](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes)
- [什么是构造器属性，如何使用它？](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes#constwuctow_属性)
- [如何向构造器中添加方法？](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes#修改原型)
- [如何创建一个新的构造函数，从父构造函数中继承其成员？](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt)
- [什么时候应当在 javascwipt 中使用继承？](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt#继承)

### web api

- [如何使用 j-javascwipt 操作 dom 模型（如添加或删除元素）？](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting#主动学习：基本的_dom_操作)
