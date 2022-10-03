---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
---

{{JSRef}}

**`String`** 全局对象是一个用于字符串或一个字符序列的构造函数。

## 语法

字符串字面量采取以下形式：

```plain
'string text'
"string text"
"中文/汉语"
"español"
"English "
"हिन्दी"
"العربية"
"português"
"বাংলা"
"русский"
"日本語"
"ਪੰਜਾਬੀ"
"한국어"
```

你也能使用 `String` 函数将其他值生成或转换成字符串：

```plain
String(thing)
new String(thing)
```

### 参数

- `thing`
  - : 任何可以被转换成字符串的值。

### 模板字面量

从 ECMAScript 2015 开始，字符串字面量也可以称为[模板字面量](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)：

```plain
`hello world` `hello! world!` `hello ${who}` escape `<a>${who}</a>`
```

### 转义字符

除了普通的可打印字符以外，一些有特殊功能的字符可以通过转义字符的形式放入字符串中：

| Code                     | Output                                             |
| ------------------------ | -------------------------------------------------- |
| `\0`                     | 空字符                                             |
| `\'`                     | 单引号                                             |
| `\"`                     | `双引号`                                           |
| `\\`                     | 反斜杠                                             |
| `\n`                     | 换行                                               |
| `\r`                     | `回车`                                             |
| `\v`                     | 垂直制表符                                         |
| `\t`                     | 水平制表符                                         |
| `\b`                     | 退格                                               |
| `\f`                     | 换页                                               |
| `\uXXXX`                 | unicode 码                                         |
| `\u{X}` ... `\u{XXXXXX}` | unicode codepoint {{experimental_inline}} |
| `\xXX`                   | Latin-1 字符 (x 小写)                              |

> **备注：** 和其他语言不同，javascript 的字符串不区分单引号和双引号，所以不论是单引号还是双引号的字符串，上面的转义字符都能运行。

### 长字符串

有时，你的代码可能含有很长的字符串。你可能想将这样的字符串写成多行，而不是让这一行无限延长或着被编辑器折叠。有两种方法可以做到这一点。

其一，可以使用 + 运算符将多个字符串连接起来，如下所示：

```plain
let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable.";
```

其二，可以在每行末尾使用反斜杠字符（“\”），以指示字符串将在下一行继续。确保反斜杠后面没有空格或任何除换行符之外的字符或缩进; 否则反斜杠将不会工作。如下所示：

```plain
let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

使用这两种方式会创建相同的字符串。

## 描述

字符串对于保存可以以文本形式表示的数据非常有用。一些常用的字符串操作有：查询[字符串长度](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length)，使用 [+ 和 +=](/zh-CN/docs/Web/JavaScript/Reference/Operators/String_Operators) 运算符来构建和连接字符串，使用 [indexOf](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) 方法检查某一子字符串在父字符串中的位置，又或是使用 [substring](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring) 方法提取从父字符串中提取子字符串。

### 从字符串中获取单个字符

获取字符串的某个字符有两种方法。第一种是使用 {{jsxref("String.charAt", "charAt")}} 方法：

```js
return 'cat'.charAt(1); // returns "a"
```

另一种 (在 ECMAScript 5 中有所介绍) 是把字符串当作一个类似数组的对象，其中的每个字符对应一个数值索引：

```js
return 'cat'[1]; // returns "a"
```

使用括号访问字符串不可以对其进行删除或添加，因为字符串对应未知的属性并不是可读或配置的。 (更多的信息请参阅 {{jsxref("Object.defineProperty")}}。 )

### 字符串比较

熟练使用 C 语言的开发者经常使用 `strcmp` 函数来比较字符串，但在 JavaScript 中，你只需要使用[比较操作符 (>/\</>=/<=)](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)：

```js
var a = "a";
var b = "b";
if (a < b) // true
  print(a + " is less than " + b);
else if (a > b)
  print(a + " is greater than " + b);
else
  print(a + " and " + b + " are equal.");
```

使用从字符串实例继承而来的 {{jsxref("String.localeCompare", "localeCompare")}} 方法也能达到同样的效果。

### 基本字符串和字符串对象的区别

请注意区分 JavaScript 字符串对象和基本字符串值 . ( 对于 {{jsxref("Global_Objects/Boolean", "Boolean")}} 和{{jsxref("Global_Objects/Number", "Numbers")}} 也同样如此.)

字符串字面量 (通过单引号或双引号定义) 和 直接调用 String 方法 (没有通过 new 生成字符串对象实例) 的字符串都是基本字符串。JavaScript 会自动将基本字符串转换为字符串对象，只有将基本字符串转化为字符串对象之后才可以使用字符串对象的方法。当基本字符串需要调用一个字符串对象才有的方法或者查询值的时候 (基本字符串是没有这些方法的)，JavaScript 会自动将基本字符串转化为字符串对象并且调用相应的方法或者执行查询。

```js
var s_prim = "foo";
var s_obj = new String(s_prim);

console.log(typeof s_prim); // Logs "string"
console.log(typeof s_obj);  // Logs "object"
```

当使用 {{jsxref("Global_Objects/eval", "eval")}}时，基本字符串和字符串对象也会产生不同的结果。`eval` 会将基本字符串作为源代码处理; 而字符串对象则被看作对象处理，返回对象。例如：

```js
s1 = "2 + 2";               // creates a string primitive
s2 = new String("2 + 2");   // creates a String object
console.log(eval(s1));      // returns the number 4
console.log(eval(s2));      // returns the string "2 + 2"
```

由于上述原因，当一段代码在需要使用基本字符串的时候却使用了字符串对象就会导致执行失败 (虽然一般情况下程序员们并不需要考虑这样的问题)。

利用 {{jsxref("String.valueOf", "valueOf")}} 方法，我们可以将字符串对象转换为其对应的基本字符串。

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

> **备注：** 其他的将字符串对象转换成基本字符串的方法可以及参考 [`StringView` – a C-like representation of strings based on typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays/StringView).

## 属性

- {{jsxref("String.prototype")}}
  - : 可以为 String 对象增加新的属性。

## 方法

- {{jsxref("String.fromCharCode()")}}
  - : **通过一串 Unicode 创建字符串。**
- {{jsxref("String.fromCodePoint()")}} {{experimental_inline}}
  - : 通过一串 码点 创建字符串。
- {{jsxref("String.raw()")}} {{experimental_inline}}
  - : 通过模板字符串创建字符串。

## 字符串泛型方法

> **警告：** 字符串泛型是**非标准的**，**已弃用**，并且会在不远的将来删除。注意，你不能依靠他们的跨浏览器，而不使用下面提供的垫片。

应该避免在 Javascript 1.6（Firefox 浏览器的 JS 引擎）中使用（虽然也支持）将其他对象转化为字符的方法，因为方法并没有成为 ECMA 标准：

```js
let num = 15;
console.log(String.replace(num, /5/, '2'));
```

移除字符串泛型的措施，参见 [Warning: String.x is deprecated; use String.prototype.x instead](/zh-CN/docs/Web/JavaScript/Reference/Errors/Deprecated_string_generics).

{{jsxref("Global_Objects/Array", "Generics", "#Array_generic_methods", 1)}} 在 Javascript 1.6 中同样支持{{jsxref("Global_Objects/Array", "Array")}}。

## `String` 实例

### 属性

{{page('zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/prototype', 'Properties')}}

{{page('zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/prototype', 'Methods')}}

## 示例

### 将其他值转换成字符串

使用 String() 方法将其它对象转化为字符串可以被认为是一种更加安全的做法，虽然该方法底层使用的也是 toString() 方法，但是针对 null/undefined/symbols，String() 方法会有特殊的处理：

```js
var outputStrings = [];
for (let i = 0, n = inputValues.length; i < n; ++i) {
  outputStrings.push(String(inputValues[i]));
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("DOMString")}}
- [`StringView` – a C-like representation of strings based on typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays/StringView)
- [Binary strings](/zh-CN/docs/Web/API/DOMString/Binary)
