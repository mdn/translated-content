---
title: async を使用した非同期フロー制御
slug: Learn/Server-side/Express_Nodejs/Displaying_data/flow_control_using_async
tags:
  - Express
  - Node
  - displaying data
  - part 5
  - server-side
---
_LocalLibrary_ 中のいくつかのコントローラーのコードは、複数の非同期リクエストの結果に依存しています。そのため、操作を特定の順序もしくは並列して実行することが必要になる場合があります。フロー制御を管理して、必要となるすべての情報を取得した後でページをレンダリングするために、ここでは人気のある node [async](https://www.npmjs.com/package/async) を使うことにします。

> **Note:** JavaScript で非同期動作やフロー制御を管理する手法には [Promises](/ja/docs/Web/JavaScript/Guide/Using_promises) のような比較的最近 JavaScript に導入された言語機能を含め、他にもあります。

async には多くの便利なメソッドがあります（詳しくは [the documentation](https://caolan.github.io/async/v3/docs.html) を参照してください）。ここでは重要ないくつかの関数を紹介します。

- [`async.parallel()`](https://caolan.github.io/async/v3/docs.html#parallel) は、並列して行う必要のある操作を実行する場合に使用します。
- [`async.series()`](https://caolan.github.io/async/v3/docs.html#series) は、非同期操作が直列に実行される必要がある場合に使用します。
- [`async.waterfall()`](https://caolan.github.io/async/v3/docs.html#waterfall) は、直列に実行する必要がある操作の中でも、各操作が前の操作の結果に依存する場合に使用します。

## なぜ非同期フロー制御が必要なのか？

_Express_ で使用するメソッドの多くは非同期です。なので実行する操作を指定して、コールバックを渡します。メソッドはすぐに戻り、そしてコールバックは要求された操作が完了したときに呼び出されます。_Express_ の慣例として、コールバック関数は第 1 引数にエラー値 (成功時には `null`)、第 2 引数には関数からの結果 (存在する場合のみ) を渡します。

もしコントローラーがページのレンダリングに必要な情報を得るために **1 つの非同期操作**を実行するだけならば、実装は簡単です。コールバックでテンプレートをレンダリングするだけです。以下のコードでは、`SomeModel` モデルのカウントをレンダリングする関数 (Mongoose の [`countDocuments`](https://mongoosejs.com/docs/api.html#model_Model.countDocuments) メソッドを使用) を示しています。

```js
exports.some_model_count = function(req, res, next) {

  SomeModel.countDocuments({ a_model_field: 'match_value' }, function (err, count) {
    // ... エラーが発生した場合

    // 成功したら count を render 関数に渡して結果をレンダリングする (ここでは変数 'data')
    res.render('the_template', { data: count } );
  });
}
```

では**複数**の非同期クエリを実行する必要があり、すべての操作が完了するまでページをレンダリングできない場合はどうすればよいでしょうか？甘い考えで実装するとリクエストを「デイジーチェーン」して、前のリクエストのコールバックで後続のリクエストを開始し、最後のコールバックでレスポンスを受け取ってレンダリングすることができます。この方法の問題点は並列で実行した方が効率的である場合でも、リクエストを直列で実行する必要がある点です。これにより一般的に[コールバック地獄](http://callbackhell.com/)と呼ばれる複雑にネストされたコードになる可能性があります。

より良い解決策はすべてのリクエストを並列で実行して、すべてのクエリが完了したときに実行される単一のコールバックを持つことです。そして、そのようなフロー操作を簡単に行うことができるのが _async_ モジュールなのです！

## Asynchronous operations in parallel

The method [`async.parallel()`](https://caolan.github.io/async/v3/docs.html#parallel) is used to run multiple asynchronous operations in parallel.

The first argument to `async.parallel()` is a collection of the asynchronous functions to run (an array, object or other iterable). Each function is passed a `callback(err, result)` which it must call on completion with an error `err` (which can be `null`) and an optional `results` value.

The optional second argument to  `async.parallel()` is a callback that will be run when all the functions in the first argument have completed. The callback is invoked with an error argument and a result collection that contains the results of the individual asynchronous operations. The result collection is of the same type as the first argument (i.e. if you pass an array of asynchronous functions, the final callback will be invoked with an array of results). If any of the parallel functions reports an error the callback is invoked early (with the error value).

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

The method [`async.series()`](https://caolan.github.io/async/v3/docs.html#series) is used to run multiple asynchronous operations in sequence, when subsequent functions do not depend on the output of earlier functions. It is essentially declared and behaves in the same way as `async.parallel()`.

```js
async.series({
  one: function(callback) { ... },
  two: function(callback) { ... },
  ...
  something_else: function(callback) { ... }
  },
  // optional callback after the last asynchronous function completes.
  function(err, results) {
    // 'results' is now equal to: {one: 1, two: 2, ..., something_else: some_value}
  }
);
```

> **Note:** The ECMAScript (JavaScript) language specification states that the order of enumeration of an object is undefined, so it is possible that the functions will not be called in the same order as you specify them on all platforms. If the order really is important, then you should pass an array instead of an object, as shown below.

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

The method [`async.waterfall()`](https://caolan.github.io/async/v3/docs.html#waterfall) is used to run multiple asynchronous operations in sequence when each operation is dependent on the result of the previous operation.

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

Install the async module using the NPM package manager so that we can use it in our code. You do this in the usual way, by opening a prompt in the root of the _LocalLibrary_ project and entering the following command:

```bash
npm install async
```

## Next steps

- Return to [Express Tutorial Part 5: Displaying library data](/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Proceed to the next subarticle of Part 5: [Template primer](/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer).
