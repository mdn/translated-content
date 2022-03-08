---
title: await
slug: Web/JavaScript/Reference/Operators/await
tags:
  - 関数
  - JavaScript
  - 言語機能
  - 演算子
  - Primary Expression
browser-compat: javascript.operators.await
translation_of: Web/JavaScript/Reference/Operators/await
---
{{jsSidebar("Operators")}}

`await` 演算子はプロミス ({{jsxref("Promise")}}) を待つために使用します。通常の JavaScript コードで、 {{jsxref("Statements/async_function", "async function")}} の内部でのみ使用することができます。によって {{jsxref("Promise")}} が返されるのを待機するために使用します。

## 構文

```js
[rv] = await expression
```

- `expression`
  - : 待つ {{jsxref("Promise")}} もしくは何らかの値。
- `rv`
  - : プロミスの履行された値、または `Promise` ではない場合はその値自体を返します。

## 解説

`await` 式は `async` 関数の実行を一時停止し、 `Promise` が決定される（すなわち履行または拒否される）まで待ち、履行された後に `async` 関数の実行を再開します。最下位時に、 `await` 式の値は履行された `Promise` の値になります。

`Promise` が拒否された場合、`await` 式は拒否された値で例外を発生させます。

`await` 演算子に続く*式*の値が `Promise` ではなかった場合、[解決された Promise](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) に変換されます。

`await` は実行フローを分割するため、非同期関数の呼び出し元が実行を再開することができます。 `await` がその非同期関数の継続を延期した後は、後続の文が実行されます。この `await` がその関数で実行される最後の式である場合、実行は継続され、 `await` の関数の完了を保留していた `Promise` を呼び出し元に返し、その呼び出し元での実行を再開します。

## 例

### プロミスの履行を待つ

`Promise` が `await` 式に渡された場合、 `Promise` が履行されて履行値を返すのを待ちます。

```js
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();
```

### Thenable オブジェクト

{{jsxref("Global_Objects/Promise/then", "Thenable オブジェクト")}}は同様に履行されます。

```js
async function f2() {
  const thenable = {
    then: function(resolve, _reject) {
      resolve('resolved!')
    }
  };
  console.log(await thenable); // resolved!
}

f2();
```

### プロミスへの変換

値が `Promise` でない場合は、値を解決済みの `Promise` に変換して待ちます。

```js
async function f3() {
  var y = await 20;
  console.log(y); // 20
}

f3();
```

### Promise の拒否

`Promise` が拒否された場合、拒否された値で例外が発生します。

```js
async function f4() {
  try {
    var z = await Promise.reject(30);
  } catch(e) {
    console.error(e); // 30
  }
}

f4();
```

### 拒否された Promise の処理

拒否された `Promise` は `try` ブロックなしで処理することができます。

```js
var response = await promisedFunction().catch((err) => { console.error(err); });
// プロミスが拒否された場合、応答は undefined になります
```

### 最上位の await

`await` キーワードは、 [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)内では単独で（非同期関数の外で）使用することができます。つまり、 `await` を使う子モジュールを持つモジュールは、子モジュールが実行されるのを待ってから、自分自身が実行されるようになります。他の子モジュールの読み込みをブロックすることなく、実行することができます。

以下は、 [Fetch API](/ja/docs/Web/API/Fetch_API) を使用し、 [`export` 文](/ja/docs/Web/JavaScript/Reference/Statements/export)の中で await を指定したシンプルなモジュールの例です。これを含むすべてのモジュールは、コードを実行する前に読み取りが解決するのを待ちます。

```js
// fetch request
const colors = fetch('../data/colors.json')
  .then(response => response.json());

export default await colors;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/async_function", "async function 式")}}
- {{jsxref("AsyncFunction")}} オブジェクト
- [最上位の await](https://v8.dev/features/top-level-await) on v8.dev
