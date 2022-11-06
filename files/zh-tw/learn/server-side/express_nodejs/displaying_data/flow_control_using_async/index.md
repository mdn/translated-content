---
title: 使用 async 進行非同步流控制
slug: Learn/Server-side/Express_Nodejs/Displaying_data/flow_control_using_async
---

有些*本地圖書館*網頁的控制器代碼，會依賴多重非同步要求的結果，可能會需要以某種特定次序運行，或者以平行方式運行。為了管理流控制，並在我們所有需要用到的信息，都已經可以取用的時候，再繪製網頁，我們將使用許多人採用的 node [async](https://www.npmjs.com/package/async) 模組。

> **備註：** 在 JavaScript 中有許多其他方法，可以管理異步行為和流控制，包括相對較新的 JavaScript 語言功能，如 [Promises](/zh-TW/docs/Mozilla/Add-ons/Techniques/Promises)。

Async 有很多有用的方法（請查看[文檔](http://caolan.github.io/async/docs.html)）。一些最重要的功能是：

- [`async.parallel()`](http://caolan.github.io/async/docs.html#parallel) 執行必須並行執行的任何操作。
- [`async.series()`](http://caolan.github.io/async/docs.html#series) 用於當需要確保異步操作是序列執行的。
- [`async.waterfall()`](http://caolan.github.io/async/docs.html#waterfall) 用於必須序列運行的操作，每個操作取決於前面操作的結果。

## 為什麼需要這麼做?

我們在 _Express_ 中使用的大多數方法，都是異步的 - 您指定要執行的操作，傳遞回調。該方法立即返回，並在請求的操作完成時，調用回調。按照 _Express_ 中的慣例，回調函數將*錯誤值*作為第一個參數傳遞（或成功時為 `null`），並將函數的結果（如果有的話）作為第二個參數傳遞。

如果控制器只需要*執行**一個**異步操作*，來獲取呈現頁面所需的信息，那麼實現很簡單 - 我們只需在回調中呈現模板。下面的代碼片段，顯示了一個函數，該函數呈現模型 `SomeModel` 的計數（使用 Mongoose [`count()`](http://mongoosejs.com/docs/api.html#model_Model.count)方法）：

```js
exports.some_model_count = function(req, res, next) {

  SomeModel.count({ a_model_field: 'match_value' }, function (err, count) {
    // ... do something if there is an err

    // On success, render the result by passing count into the render function (here, as the variable 'data').
    res.render('the_template', { data: count } );
  });
}
```

但是，如果您需要進行**多個**異步查詢，並且在完成所有操作之前，無法呈現頁面，該怎麼辦？一個單純的實現可以用 “菊花鏈” 連接請求，在先前請求的回調中，啟動後續請求，並在最終回調中呈現響應。這種方法的問題，是我們的請求必須串行運行，即使並行運行它們可能更有效。這也可能導致複雜的嵌套代碼，通常稱為[回調地獄](http://callbackhell.com/)。

一個更好的解決方案，是並行執行所有請求，然後在所有查詢完成後執行單個回調。這是 _Async_ 模塊簡化的流操作！

## Asynchronous operations in parallel

The method [`async.parallel()`](http://caolan.github.io/async/docs.html#parallel) is used to run multiple asynchronous operations in parallel.

The first argument to `async.parallel()` is a collection of the asynchronous functions to run (an array, object or other iterable). Each function is passed a `callback(err, result)` which it must call on completion with an error `err` (which can be `null`) and an optional `results` value.

The optional second argument to `async.parallel()` is a callback that will be run when all the functions in the first argument have completed. The callback is invoked with an error argument and a result collection that contains the results of the individual asynchronous operations. The result collection is of the same type as the first argument (i.e. if you pass an array of asynchronous functions, the final callback will be invoked with an array of results). If any of the parallel functions reports an error the callback is invoked early (with the error value).

The example below shows how this works when we pass an object as the first argument. As you can see, the results are _returned_ in an object with the same property names as the original functions that were passed in.

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

If you instead pass an array of functions as the first argument, the results will be an array (the array order results will match the original order that the functions were declared—not the order in which they completed).

## Asynchronous operations in series

The method [`async.series()`](http://caolan.github.io/async/docs.html#series) is used to run multiple asynchronous operations in sequence, when subsequent functions do not depend on the output of earlier functions. It is essentially declared and behaves in the same way as `async.parallel()`.

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

> **備註：** The ECMAScript (JavaScript) language specification states that the order of enumeration of an object is undefined, so it is possible that the functions will not be called in the same order as you specify them on all platforms. If the order really is important, then you should pass an array instead of an object, as shown below.

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

## Dependent asynchronous operations in series

The method [`async.waterfall()`](http://caolan.github.io/async/docs.html#waterfall) is used to run multiple asynchronous operations in sequence when each operation is dependent on the result of the previous operation.

The callback invoked by each asynchronous function contains `null` for the first argument and results in subsequent arguments. Each function in the series takes the results arguments of the previous callback as the first parameters, and then a callback function. When all operations are complete, a final callback is invoked with the result of the last operation. The way this works is more clear when you consider the code fragment below (this example is from the _async_ documentation):

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

## Installing async

Install the async module using the NPM package manager so that we can use it in our code. You do this in the usual way, by opening a prompt in the root of the _LocalLibrary_ project and enter the following command:

```bash
npm install async
```

## Next steps

- Return to [Express Tutorial Part 5: Displaying library data](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Proceed to the next subarticle of Part 5: [Template primer](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer).
