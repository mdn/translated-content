---
title: Function.prototype.caller
short-title: caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{Non-standard_Header}}

> [!NOTE]
> [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では、関数の `caller` にアクセスするとエラーが発生します。この API は削除されており、代替手段もありません。これは、コードが「スタックをたどる」ことを防ぐためです。スタックの参照はセキュリティリスクになるだけでなく、インライン展開や末尾呼び出し最適化など、最適化の可能性を大幅に制限します。詳しくは、[`arguments.callee` の非推奨化の根拠](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee#解説)をご覧ください。

**`caller`** は {{jsxref("Function")}} インスタンスのアクセサープロパティで、この関数を呼び出した関数を返します。[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)で実行されている関数、アロー関数、非同期関数、ジェネレーター関数では、`caller` プロパティにアクセスすると {{jsxref("TypeError")}} が発生します。

## 解説

関数 `f` が最上位のコードから呼び出された場合、`f.caller` の値は {{jsxref("null")}} です。それ以外の場合は、`f` を呼び出した関数になります。ただし、`f` を呼び出した関数が厳格モードで実行されている場合、`f.caller` の値は `null` です。

ECMAScript 仕様で規定されているのは、`Function.prototype` が初期 `caller` アクセサーを持ち、`get` または `set` の要求に対して無条件に {{jsxref("TypeError")}} を発生させること（「毒薬アクセサー」と呼ばれます）だけです。厳格モードでない通常の関数を除き、実装はこの動作を変更できません。ただし、その場合でも厳格モードで実行されている関数を値として返してはなりません。エラーを発生させる以外の `caller` プロパティの動作は、実装によって定義されます。例えば、Chrome はこのプロパティを関数自身のデータプロパティとして定義しています。一方、Firefox と Safari は初期の毒薬アクセサーである `Function.prototype.caller` を拡張し、`this` の値が厳格モードでない関数である場合を特別に処理しています。

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

// Chrome の場合:
// caller is an own property with descriptor {value: null, writable: false, enumerable: false, configurable: false}

// Firefox の場合:
// f doesn't have an own property named caller. Trying to get f.[[Prototype]].caller
// null
```

このプロパティは、 {{jsxref("Functions/arguments", "arguments")}} オブジェクトの廃止された `arguments.caller` プロパティを置き換えます。

呼び出し側のアクティベーションオブジェクトを返す特別なプロパティ `__caller__` を使えばスタックを再構築できましたが、セキュリティ上の理由で削除されました。

## 例

### 関数の caller プロパティの値を調べる

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

### 厳格モードで実行されている関数の caller

呼び出し側の関数が厳格モードで実行されている場合、`caller` の値は `null` です。

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
// ログ出力: [Function: callerFunc]

(function () {
  strictCallerFunc();
})();
// ログ出力: null
```

## 仕様書

いずれの標準でも定義されていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Function.prototype.name")}}
- {{jsxref("Functions/arguments", "arguments")}}
