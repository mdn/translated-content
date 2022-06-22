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

async には多くの便利なメソッドがあります（詳しくは[ドキュメント (en-US)](https://caolan.github.io/async/v3/docs.html) を参照してください）。ここでは重要ないくつかの関数を紹介します。

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

では**複数**の非同期クエリーを実行する必要があり、すべての操作が完了するまでページをレンダリングできない場合はどうすればよいでしょうか？甘い考えで実装するとリクエストを「デイジーチェーン」して、前のリクエストのコールバックで後続のリクエストを開始し、最後のコールバックでレスポンスを受け取ってレンダリングすることができます。この方法の問題点は並列で実行した方が効率的である場合でも、リクエストを直列で実行する必要がある点です。これにより一般的に[コールバック地獄](http://callbackhell.com/)と呼ばれる複雑にネストされたコードになる可能性があります。

より良い解決策はすべてのリクエストを並列で実行して、すべてのクエリーが完了したときに実行される単一のコールバックを持つことです。そして、そのようなフロー操作を簡単に行うことができるのが _async_ モジュールなのです！

## 非同期操作の並列化

[`async.parallel()`](https://caolan.github.io/async/v3/docs.html#parallel) メソッドは、複数の非同期処理を並列で実行するために使用されます。

`async.parallel()` の第 1 引数は実行する非同期関数 (配列、オブジェクト、またはその他の反復可能なもの) のコレクションです。各関数には `callback(err, result)` が渡され、完了時にはエラー `err` (もしくは `null`) と任意で `results` 値を指定して呼び出す必要があります。

`async.parallel()` の任意の第 2 引数は、第 1 引数のすべての関数が完了したときに実行されるコールバックです。このコールバックはエラー引数と個々の非同期操作の results を含む result コレクションを使用して呼び出されます。result コレクションは最初の引数と同じ型です (つまり非同期関数の配列を渡す場合、最終的なコールバックは results の配列で呼び出されます)。並列関数のいずれかがエラーを返した場合、コールバックは (エラー値とともに) 早期に呼び出されます。

以下の例では第 1 引数にオブジェクトを渡した場合の動作を示しています。この例から分かるように results は渡された元の関数と同じプロパティ名を持つオブジェクトで**返されます**。

```js
async.parallel({
  one: function(callback) { ... },
  two: function(callback) { ... },
  ...
  something_else: function(callback) { ... }
  },
  // 任意のコールバック
  function(err, results) {
    // 'results' が {one: 1, two: 2, ..., something_else: some_value} になりました
  }
);
```

代わりに関数の配列を第 1 引数として渡すと、results は配列になります (results に入る配列の順序は関数が完了した順番ではなく、関数が宣言された元の順番と一致します)。

## 非同期操作の直列化

[`async.series()`](https://caolan.github.io/async/v3/docs.html#series) メソッドは、後続の関数が以前の出力に依存しない場合において、複数の非同期操作を順番に実行するために使用されます。基本的には `async.parallel()` と同じように宣言され、同じように動作します。

```js
async.series({
  one: function(callback) { ... },
  two: function(callback) { ... },
  ...
  something_else: function(callback) { ... }
  },
  // 最後の非同期関数が完了した後に、任意のコールバックを返します
  function(err, results) {
    // 'results' が {one: 1, two: 2, ..., something_else: some_value} になりました
  }
);
```

> **Note:** ECMAScript (JavaScript) の言語仕様ではオブジェクトの列挙順序は未定義であると規定されているため、すべてのプラットフォームで指定したのと同じ順序で関数の呼び出しが行われない可能性があります。もし順序が本当に重要な場合、以下のようにオブジェクトではなく配列を渡す必要があります。

```js
async.series([
  function(callback) {
    // 何かを行う...
    callback(null, 'one');
  },
  function(callback) {
    // さらに何かを行う...
    callback(null, 'two');
  }
 ],
  // 任意のコールバック
  function(err, results) {
  // results は ['one', 'two'] になりました
  }
);
```

## 依存性のある直列の非同期操作

[`async.waterfall()`](https://caolan.github.io/async/v3/docs.html#waterfall) メソッドは、各操作が前の操作の結果に依存している場合において、複数の非同期操作を順番に実行するために使用されます。

各非同期関数から呼び出されるコールバックは、第 1 引数に `null` を含み、それ以降の引数には結果が含まれます。直列の各関数は、最初の引数として直前のコールバックの結果を引数として受け取り、次にコールバック関数を受け取ります。すべての操作が完了すると、最後の操作の結果とともに最終的なコールバックが呼び出されます。これがどのように機能するかは、以下のコードの一部分をもとに考えるとより明確になります (この例は _async_ のドキュメントにもあります)。

```js
async.waterfall([
  function(callback) {
    callback(null, 'one', 'two');
  },
  function(arg1, arg2, callback) {
    // arg1 は 'one' に、arg2 は 'two' になりました
    callback(null, 'three');
  },
  function(arg1, callback) {
    // arg1 が 'three' になりました
    callback(null, 'done');
  }
], function (err, result) {
  // result が 'done' になりました
}
);
```

## async のインストール

NPM を使用して async モジュールのインストールを行い、コードで使用できるようにします。これは _LocalLibrary_ のルートでプロンプトを開いて、下記のコマンドを入力するという通常の手法で行います。

```bash
npm install async
```

## 次のステップ

- [Express チュートリアル Part 5: ライブラリデータの表示](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data) へ戻る。
- Part 5: 次の小項目「[テンプレートプライマー](/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer)」に進む。
