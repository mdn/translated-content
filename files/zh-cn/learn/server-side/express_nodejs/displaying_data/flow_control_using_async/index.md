---
title: 使用 async 进行非同步流控制
slug: Learn/Server-side/Express_Nodejs/Displaying_data/flow_control_using_async
---

有些本地图书馆网页的控制器代码，会依赖多重非同步要求的结果，可能会需要以某种特定次序运行，或者以平行方式运行。为了管理流控制，并在我们所有需要用到的信息，都已经可以取用的时候，再绘制网页，我们将使用许多人采用的 node [async](https://www.npmjs.com/package/async) 模组。

> **备注：** 在 JavaScript 中有许多其他方法，可以管理异步行为和流控制，包括相对较新的 JavaScript 语言功能，如 [Promises](/zh-CN/docs/Mozilla/Add-ons/Techniques/Promises)。

Async 有很多有用的方法（请查看[文档](http://caolan.github.io/async/docs.html)）。一些最重要的功能是：

- [`async.parallel()`](http://caolan.github.io/async/docs.html#parallel) 执行必须并行执行的任何操作。
- [`async.series()`](http://caolan.github.io/async/docs.html#series) 用于当需要确保异步操作是序列执行的。
- [`async.waterfall()`](http://caolan.github.io/async/docs.html#waterfall) 用于必须序列运行的操作，每个操作取决于前面操作的结果。

## 为什么需要这么做？

我们在 Express 中使用的大多数方法，都是异步的 - 您指定要执行的操作，传递回调。该方法立即返回，并在请求的操作完成时，调用回调。按照 Express 中的惯例，回调函数将错误值作为第一个参数传递（或成功时为 `null`），并将函数的结果（如果有的话）作为第二个参数传递。

如果控制器只需要执行**一个**异步操作，来获取呈现页面所需的信息，那么实现很简单 - 我们只需在回调中呈现模板。下面的代码片段，显示了一个函数，该函数呈现模型 `SomeModel` 的计数（使用 Mongoose [`count()`](http://mongoosejs.com/docs/api.html#model_Model.count)方法）：

```js
exports.some_model_count = function(req, res, next) {

  SomeModel.count({ a_model_field: 'match_value' }, function (err, count) {
    // ... do something if there is an err

    // On success, render the result by passing count into the render function (here, as the variable 'data').
    res.render('the_template', { data: count } );
  });
}
```

但是，如果您需要进行**多个**异步查询，并且在完成所有操作之前，无法呈现页面，该怎么办？一个单纯的实现可以用“菊花链”连接请求，在先前请求的回调中，启动后续请求，并在最终回调中呈现响应。这种方法的问题，是我们的请求必须串行运行，即使并行运行它们可能更有效。这也可能导致复杂的嵌套代码，通常称为[回调地狱](http://callbackhell.com/)。

一个更好的解决方案，是并行执行所有请求，然后在所有查询完成后执行单个回调。这是 Async 模块简化的流操作！

## 平行的非同步操作

方法[`async.parallel()`](https://caolan.github.io/async/docs.html#parallel)用于并行运行多个异步操作。

`async.parallel()` 的第一个参数，是要运行的异步函数的集合（数组，对象或其他可迭代的）。每个函数都传递一个回调函数`callback(err, result)` ，它必须在完成时调用错误`err`（可以为`null`）和可选的结果值。

`async.parallel()`的可选第二个参数是一个回调，它将在第一个参数中的所有函数完成时运行。回调的调用，是使用错误参数和包含各个异步操作结果的结果集合。结果集合与第一个参数的类型相同（即，如果传递异步函数数组，则将使用结果数组，调用最终回调）。如果任何并行函数报告错误，则提前调用回调（具有错误值）。

下面的示例，显示了当我们将对象作为第一个参数传递时它是如何工作的。如您所见，结果将返回到一个对象中，该对象具有与传入的原始函数相同的属性名称。

```js
async.parallel({
  one: function(callback) { ... },
  two: function(callback) { ... },
  ...
  something_else: function(callback) { ... }
  },
  // optional callback
  function(err, results) {
    // 'results' is now equal to: {one: 1, two: 2, ..., something_else: some_value}
  }
);
```

如果您将一组函数，作为第一个参数传递，则结果将是一个数组（数组顺序结果，将与声明函数的原始顺序匹配 - 而不是它们完成的顺序）。

## 序列的非同步操作

[`async.series()`](https://caolan.github.io/async/docs.html#series)方法用于按顺序运行多个异步操作，后续函数不依赖于先前函数的输出。它本质上是声明的，并且行为与`async.parallel()`.相同。

```js
async.series({
  one: function(callback) { ... },
  two: function(callback) { ... },
  ...
  something_else: function(callback) { ... }
  },
  // optional callback after the last asynchronous function completes.
  function(err, results) {
    // 'results' is now equals to: {one: 1, two: 2, ..., something_else: some_value}
  }
);
```

> **备注：** ECMAScript（JavaScript）语言规范指出，对象的枚举顺序是未定义的，因此可能不会按照在所有平台上指定它们的顺序，调用这些函数。如果顺序真的很重要，那么你应该传递一个数组而不是一个对象，如下所示。

```js
async.series([
  function(callback) {
    // do some stuff ...
    callback(null, 'one');
  },
  function(callback) {
    // do some more stuff ...
    callback(null, 'two');
  }
 ],
  // optional callback
  function(err, results) {
  // results is now equal to ['one', 'two']
  }
);
```

## 依赖序列的非同步操作

方法[`async.waterfall()`](http://caolan.github.io/async/docs.html#waterfall)用于在每个操作依赖于前一个操作的结果时，依次运行多个异步操作。

每个异步函数调用的回调，包含第一个参数的`null`，与后续参数里的结果。该序列中的每个函数，都将前一个回调的结果参数，作为第一个参数，然后是回调函数。

完成所有操作后，将使用上一操作的结果，调用最终回调。当您参考下面的代码片段时，这种工作方式会更加明确（此示例来自 _async_ 文档）：

```js
async.waterfall([
  function(callback) {
    callback(null, 'one', 'two');
  },
  function(arg1, arg2, callback) {
    // arg1 now equals 'one' and arg2 now equals 'two'
    callback(null, 'three');
  },
  function(arg1, callback) {
    // arg1 now equals 'three'
    callback(null, 'done');
  }
], function (err, result) {
  // result now equals 'done'
}
);
```

## 安装 async

使用 NPM 包管理器安装 async 模块，以便我们可以在代码中使用它。您可以常规方式执行此操作，在 LocalLibrary 项目的根目录中，打开命令提示并输入以下命令：

```bash
npm install async
```

## 下一步

- 回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
- 继续教程 5 下一个部分：[模板入门](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer)
