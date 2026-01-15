---
title: Function.prototype.caller
short-title: caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!NOTE]
> [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では、関数の `caller` にアクセスするとエラーが発生します。 API は削除され、代替手段もありません。これは、コードが「スタックを歩く」ことを防ぐためです。これは、セキュリティリスクをもたらすだけでなく、インライン展開や末尾再帰呼び出し最適化などの最適化の可能性を大幅に制限します。より詳しい説明については、 [`arguments.callee` の非推奨化の根拠](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee#解説)をご覧ください。

**`caller`** は {{jsxref("Function")}} インスタンスのアクセサープロパティで、この関数を呼び出した関数を返します。[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)、アロー関数、非同期関数、ジェネレーター関数では、 `caller` プロパティにアクセスすると {{jsxref("TypeError")}} が発生します。

## 解説

関数 `f` が最上位のコードで呼び出された場合、 `f.caller` の値は {{jsxref("Operators/null", "null")}} に、それ以外の場合の値は `f` を呼び出した関数になります。 `f` を呼び出した関数が厳格モードの関数である場合も、 `f.caller` の値は `null` となります。

ECMAScript 仕様で規定されている唯一の動作は、 `Function.prototype` が初期 `caller` アクセサーを持っており、 `get` または `set` のリクエストに対して無条件に {{jsxref("TypeError")}} を発生させるすること（「毒薬アクセサー」として知られています）であり、実装は非厳密なプレーン関数を除いて、このセマンティクスを変更することは許可されていません。 `caller` プロパティの実際の動作は、エラーを発生させる以外にも何らかの動作がある場合、実装によって定義されています。例えば、 Chrome は自分自身でデータプロパティとして定義していますが、 Firefox と Safari は初期の毒薬である `Function.prototype.caller` アクセサーを拡張し、非厳格関数であるこれらの値を特別に処理しています。

```js
(function f() {
  if (Object.hasOwn(f, "caller")) {
    console.log(
      "caller is an own property with descriptor",
      Object.getOwnPropertyDescriptor(f, "caller"),
    );
  } else {
    console.log(
      "f doesn't have an own property named caller. Trying to get f.[[Prototype]].caller",
    );
    console.log(
      Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(f),
        "caller",
      ).get.call(f),
    );
  }
})();

// In Chrome:
// caller is an own property with descriptor {value: null, writable: false, enumerable: false, configurable: false}

// In Firefox:
// f doesn't have an own property named caller. Trying to get f.[[Prototype]].caller
// null
```

このプロパティは、 {{jsxref("Functions/arguments", "arguments")}} オブジェクトの廃止された `arguments.caller` プロパティを置き換えます。

呼び出し側のアクティベーションオブジェクトを返す特別なプロパティ `__caller__` は、これによりスタックを再構築することが可能でしたが、セキュリティ上の理由により削除されました。

## 例

### 関数の呼び出し側プロパティの値を調べる

次のコードは、関数の `caller` プロパティの値を調べます。

```js
function myFunc() {
  if (myFunc.caller === null) {
    return "The function was called from the top!";
  }
  return `This function's caller was ${myFunc.caller}`;
}
```

### スタックの再構築と再帰

再帰呼び出しの場合、このプロパティを用いてコールスタックを再現することはできません。以下について考えてみましょう。

```js
function f(n) {
  g(n - 1);
}
function g(n) {
  if (n > 0) {
    f(n);
  } else {
    stop();
  }
}
f(2);
```

`stop()` が呼び出された時点のコールスタックは以下のようになるでしょう。

```plain
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

以下は真になります。

```js
stop.caller === g && f.caller === g && g.caller === f;
```

従って、`stop()` 関数のスタックトレースを以下のようにして取得するとします。

```js
let f = stop;
let stack = "Stack trace:";
while (f) {
  stack += `\n${f.name}`;
  f = f.caller;
}
```

これは無限ループになります。

### 厳格モードの caller

呼び出し側が厳格モード関数である場合、`caller` の値は `null` です。

```js
function callerFunc() {
  calleeFunc();
}

function strictCallerFunc() {
  "use strict";
  calleeFunc();
}

function calleeFunc() {
  console.log(calleeFunc.caller);
}

(function () {
  callerFunc();
})();
// Logs [Function: callerFunc]

(function () {
  strictCallerFunc();
})();
// Logs null
```

## 仕様書

いずれの標準でも定義されていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Function.prototype.name")}}
- {{jsxref("Functions/arguments", "arguments")}}
