---
title: 导出的 WebAssembly 函数
slug: WebAssembly/Exported_functions
---

{{WebAssemblySidebar}}

导出 WebAssembly 函数的过程，其实就是指这些函数在 JavaScript 中如何用表示。本文更详细的介绍它们。

## 导出的...什么？

导出的 WebAssembly 函数只是用 JavaScript 来表示 WebAssembly 函数的封装而已。当你调用它们的时候，就会有一些后台活动把参数转换为 wasm 能够处理的类型（例如，把 JavaScript 数字转换为 Int32 类型），参数被传递到 wasm 模块中的函数，函数被调用，返回值被转换并传回到 JavaScript。

你可以通过两种方式来获得导出的 WebAssembly 函数：

- 在一个已经存在的表格上调用[Table.prototype.get()](/zh-CN/docs/WebAssembly/API/Table/get)。
- 通过[Instance.exports](/zh-CN/docs/WebAssembly/API/Instance/exports)从一个 wasm 模块实例获取导出的函数。

无论哪种方式，你得到的都是底层函数的相同封装。从 JavaScript 的角度来看，每一个 wasm 函数看起来也是一个 JavaScript 函数——但是，它们被封装在导出的 wasm 函数对象实例中，并且只有有限的方式来获取它们。

## 一个例子

让我们看个例子从而让事情更清晰（你可以在 GitHub 上找到这个例子[table-set.html](https://github.com/mdn/webassembly-examples/blob/master/other-examples/table-set.html)；或者[实时运行](https://mdn.github.io/webassembly-examples/other-examples/table-set.html)然后查看 wasm[文本表示](https://github.com/mdn/webassembly-examples/blob/master/text-format-examples/table.wat)）：

```js
var otherTable = new WebAssembly.Table({ element: "anyfunc", initial: 2 });

fetchAndInstantiate("table.wasm").then(function (instance) {
  var tbl = instance.exports.tbl;
  console.log(tbl.get(0)()); // 13
  console.log(tbl.get(1)()); // 42
  otherTable.set(0, tbl.get(0));
  otherTable.set(1, tbl.get(1));
  console.log(otherTable.get(0)());
  console.log(otherTable.get(1)());
});
```

在这里，我们使用[WebAssembly.Table](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table)构造函数在 JavaScript 中创建了一个表格（otherTable），然后使用[fetchAndInstantiate()](https://github.com/mdn/webassembly-examples/blob/master/wasm-utils.js)实用函数把 table.wasm 加载到我们的页面。

然后，我们得到了从模块中导出的函数，通过[tbl.get()](/zh-CN/docs/WebAssembly/API/Table/get)获取引用的函数并且把每一次的调用结果输出到控制台。接下来，我们使用 set() 使得 otherTable 表格包含了与 tbl 表格相同的函数。

为了证明这一点，我们从 otherTable 中获取了这些引用并且也把他们的结果打印到控制台，结果是一样的。

## 它们确实是函数

在前面的例子中，每次[Table.prototype.get()](/zh-CN/docs/WebAssembly/API/Table/get)调用的返回值都是一个导出的 WebAssembly 函数——这正是我们一直在讨论的。

它们确实是 JavaScript 函数也是对 WebAssembly 函数的封装。如果你把上面的例子加载到[支持 WebAssembly 的浏览器](/zh-CN/docs/WebAssembly#Browser_compatibility)中，然后在你的控制台运行下面几行代码：

```js
var testFunc = otherTable.get(0);
typeof testFunc;
```

你得到的返回结果是 function。对于这个函数，你可以像对待其他 JavaScript[函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)那样做你想做的任何事——[call()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)、 [bind()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)等等。testFunc.toString() 返回一个有趣的结果：

```js
function 0() {
    [native code]
}
```

这带给你关于封装类型特征的更多理解。

关于导出的 WebAssembly 函数的一些其他值得关注的特性：

- 它们的[length](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length)属性是在 wasm 函数签名中声明的参数的数量。
- 它们的[name](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/name)属性是函数在 wasm 模块中的索引调用 toString() 的返回值。
- 如果你尝试调用一个接受或返回一个 i64 类型值的导出的 wasm 函数，目前它会抛出一个错误，因为 JavaScript 当前没有精确的方式来表示一个 i64。不过，这在将来可能会改变——在将来的标准中，新的 int64 类型正在考虑之中。到那时，wasm 可以使用它。
