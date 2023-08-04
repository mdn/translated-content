---
title: Error.prototype.stack
slug: Web/JavaScript/Reference/Global_Objects/Error/stack
---

{{JSRef}} {{non-standard_header}}

{{jsxref("Error")}}对象作为一个非标准的栈属性提供了一种函数追踪方式。无论这个函数被被调用，处于什么模式，来自于哪一行或者哪个文件，有着什么样的参数。这个栈产生于最近一次调用最早的那次调用，返回原始的全局作用域调用

## 描述

每个步骤都会被分为单独的一行以这个函数的名字作为开始（如果不是一个来自于全局作用域的调用），然后通过一个 `@` 符号标记一个文件的位置（尤其是当一个函数构造错误并且作为错误被抛出，并且如果能定位到这个文件的位置，那么会使用冒号显示行号。（提示）{{jsxref("Error")}} 对象在错误跑出时同样能处理并渲染出文件名，行号和列号属性（但是仅仅限于错误。而不是追踪他的路径）

注意这是 Firefox 定义的格式，并没有标准的定义。但是 Safari 6+ 和 Opera 12- 定义了一种非常相似的格式。其他使用 JavaScript V8 引擎的浏览器（例如 Chrome、Opera 15+，安卓浏览器）和 IE 10+，定义了一种不同的格式（可参见 [error.stack](http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx) 文档）

堆栈中的参数值：Firefox 14 版本之前是 ([Firefox bug 744842](https://bugzil.la/744842)) 函数名会随着参数值会在添加 @符号之前被立即转换成用圆括号包裹的 string 类型。然而对象或者数组等其他类型似乎会被转换成`"[object Object]"`并且这种格式不能回退到之前实际上的对象，而纯值会被渲染（或许这种在 Firefox 14 中仍有这种可能，使用 `arguments.callee.caller.arguments` 更加简单。因为函数名可以使用 `arguments.callee.caller.name` 渲染）。`"undefined"` 被显示为 `"(void 0)"` 不过要注意的是如果是字符串类型的参数会直接以类似 `"@"`, `"("`, `")"` 格式通过编译（或者是包含在文件名中）。你不能简单的依赖这些将它分成多个组件，但是，对于 Firefox 14 及以后的版本来说，这些都不是问题

不同的浏览器会在不同时期设置这个值。例如，Firefox 在创建{{jsxref("Error")}}对象时设置它，然而 PhantomJS 是在当且仅当它抛出 {{jsxref("Error")}}时，并且[MSDN docs](http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx) 似乎也实现了 PhantomJS 的方式。

## 示例

下面这段 html 代码展示了`stack` 属性的使用方法

```html
<!doctype html>
<meta charset="UTF-8" />
<title>Stack Trace Example</title>
<body>
  <script>
    function trace() {
      try {
        throw new Error("myError");
      } catch (e) {
        alert(e.stack);
      }
    }
    function b() {
      trace();
    }
    function a() {
      b(3, 4, "\n\n", undefined, {});
    }
    a("first call, firstarg");
  </script>
</body>
```

假设上面这段代码被保存在 Windows 系统下的 `C:\example.html` 在处理过程中抛出如下所示的错误信息

Firefox 30 及以上版本的浏览器会包含以列号为开始 ([Firefox bug 762556](https://bugzil.la/762556)):

```plain
trace@file:///C:/example.html:9:17
b@file:///C:/example.html:16:13
a@file:///C:/example.html:19:13
@file:///C:/example.html:21:9
```

Firefox 14 to Firefox 29:

```plain
trace@file:///C:/example.html:9
b@file:///C:/example.html:16
a@file:///C:/example.html:19
@file:///C:/example.html:21
```

Firefox 13 及更早版本的浏览器会抛出如下信息：

```plain
Error("myError")@:0
trace()@file:///C:/example.html:9
b(3,4,"\n\n",(void 0),[object Object])@file:///C:/example.html:16
a("first call, firstarg")@file:///C:/example.html:19
@file:///C:/example.html:21
```

### Stack of eval'ed code

Firefox30 以 Gecko 30 格式开头，`Function()` 和 `eval()` 调用产生的错误代码堆栈，现在在调用内部通过行号和列号以更加详细的格式向我们展示出来。函数调用显示为`"> Function"` 而 eval 调用则是 `"> eval"`这样。下面来看这个[Firefox bug 332176](https://bugzil.la/332176).

```js
try {
  new Function("throw new Error()")();
} catch (e) {
  console.log(e.stack);
}

// anonymous@file:///C:/example.html line 7 > Function:1:1
// @file:///C:/example.html:7:6

try {
  eval("eval('FAIL')");
} catch (x) {
  console.log(x.stack);
}

// @file:///C:/example.html line 7 > eval line 1 > eval:1:1
// @file:///C:/example.html line 7 > eval:1:1
// @file:///C:/example.html:7:6
```

你也可以使用`//# sourceURL` 命名 eval 源的指令。也可以查看在 [Debugger](/zh-CN/docs/Tools/Debugger)文档中的[Debug eval 源](/zh-CN/docs/Tools/Debugger/How_to/Debug_eval_sources)和[blog post 博客。](http://fitzgeraldnick.com/weblog/59/)

## 规范

不属于任何规范，没有标准规范。

## 浏览器兼容性

{{Compat}}

## 参见

- [Components.stack](/zh-CN/docs/Components.stack)
- 外部项目：[TraceKit](https://github.com/csnover/TraceKit/) and [javascript-stacktrace](https://github.com/eriwen/javascript-stacktrace)
- MSDN：[error.stack](http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx) docs
- [Overview of the V8 JavaScript stack trace API](https://github.com/v8/v8/wiki/Stack%20Trace%20API)
