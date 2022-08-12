---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
tags:
  - Function
  - JavaScript
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Function/toString
---
{{JSRef}}

**`toString()`** 方法返回一个表示当前函数源代码的字符串。

{{EmbedInteractiveExample("pages/js/function-tostring.html")}}

## 语法

```plain
function.toString()
```

### 返回值

表示函数源代码的一个字符串

## 描述

{{jsxref("Function")}}对象覆盖了从{{jsxref("Object")}}继承来的{{jsxref("Object.prototype.toString", "toString")}} 方法。对于用户定义的 {{jsxref("Function")}} 对象，`toString`方法返回一个字符串，其中包含用于定义函数的源文本段。

在{{jsxref("Function")}}需要转换为字符串时，通常会自动调用函数的 `toString `方法。

若 `this` 不是 `Function `对象，则 `toString()` 方法将抛出 {{jsxref("TypeError")}} ("Function.prototype.toString called on incompatible object") 异常，比如 {{jsxref("Proxy")}} 对象就会抛出异常。

```js example-bad
Function.prototype.toString.call('foo'); // TypeError
```

如果是在内置函数或由 `Function.prototype.bind `返回的函数上调用 `toString()`，则`toString()` 返回原生代码字符串，如下

```js
"function () {\n    [native code]\n}"
```

若是在由 `Function` 构造器生成的函数上调用 `toString()` ，则 `toString()` 返回创建后的函数源码，包括形参和函数体，函数名为 "anonymous"。

## 示例

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Function</th>
      <th scope="col">Function.prototype.toString result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><pre class="brush: js">function f(){}</pre></td>
      <td><pre class="brush: js">"function f(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">class A { a(){} }</pre></td>
      <td><pre class="brush: js">"class A { a(){} }"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">function* g(){}</pre></td>
      <td><pre class="brush: js">"function* g(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">a => a</pre></td>
      <td><pre class="brush: js">"a => a"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">({ a(){} }.a)</pre></td>
      <td><pre class="brush: js">"a(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">({ *a(){} }.a)</pre></td>
      <td><pre class="brush: js">"*a(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">({ [0](){} }[0])</pre></td>
      <td><pre class="brush: js">"[0](){}"</pre></td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
Object.getOwnPropertyDescriptor({
  get a() {}
}, "a").get</pre
        >
      </td>
      <td><pre class="brush: js">"get a() {}"</pre></td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
Object.getOwnPropertyDescriptor({
  set a(x) {}
}, "a").set</pre
        >
      </td>
      <td><pre class="brush: js">"set a(x) {}"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">Function.prototype.toString</pre></td>
      <td>
        <pre class="brush: js">"function toString() { [native code] }"</pre>
      </td>
    </tr>
    <tr>
      <td><pre class="brush: js">(function f(){}.bind(0))</pre></td>
      <td><pre class="brush: js">"function () { [native code] }"</pre></td>
    </tr>
    <tr>
      <td><pre class="brush: js">Function("a", "b")</pre></td>
      <td><pre class="brush: js">"function anonymous(a\n) {\nb\n}"</pre></td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.prototype.toString()")}}
