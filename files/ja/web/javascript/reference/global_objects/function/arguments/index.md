---
title: Function.prototype.arguments
short-title: arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
l10n:
  sourceCommit: 05b21c9303964f221febe77f053e5636f230afe9
---

{{Non-standard_Header}}

> [!NOTE]
> {{jsxref("Function")}} オブジェクトの `arguments` プロパティは非推奨です。`arguments` オブジェクトにアクセスするには、関数内で利用できる変数 {{jsxref("Functions/arguments", "arguments")}} を参照することを推奨します。

**`arguments`** は {{jsxref("Function")}} インスタンスのアクセサープロパティで、その関数に渡された引数を返します。[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)の関数、アロー関数、非同期関数、ジェネレーター関数では、`arguments` プロパティにアクセスすると {{jsxref("TypeError")}} が発生します。

## 解説

`arguments` の値は、関数に渡した引数に対応する配列風のオブジェクトです。

再帰呼び出しの場合、すなわちコールスタックに関数 `f` が複数回現れる場合に、`f.arguments` はもっとも直近に実行された関数に対応する引数を表します。

関数の呼び出しが完了し、実行中の呼び出しがない場合、`arguments` プロパティの値は通常 {{jsxref("null")}} です。

ECMAScript 仕様で規定されているのは、`Function.prototype` が初期 `arguments` アクセサーを持ち、`get` または `set` の要求に対して無条件に {{jsxref("TypeError")}} を発生させること（「毒薬アクセサー」として知られています）だけです。非厳格モードの通常の関数を除き、実装はこの動作を変更できません。エラーを発生させる以外の `arguments` プロパティの動作は、実装によって定義されます。例えば、Chrome はこのプロパティを関数自身のデータプロパティとして定義しています。一方、Firefox と Safari は初期の毒薬アクセサーである `Function.prototype.arguments` を拡張し、`this` の値が非厳格モードの関数である場合を特別に処理しています。

```js
(function f() {
  if (Object.hasOwn(f, "arguments")) {
    console.log(
      "arguments is an own property with descriptor",
      Object.getOwnPropertyDescriptor(f, "arguments"),
    );
  } else {
    console.log(
      "f doesn't have an own property named arguments. Trying to get f.[[Prototype]].arguments",
    );
    console.log(
      Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(f),
        "arguments",
      ).get.call(f),
    );
  }
})();

// Chrome の場合:
// arguments is an own property with descriptor {value: Arguments(0), writable: false, enumerable: false, configurable: false}

// Firefox の場合:
// f doesn't have an own property named arguments. Trying to get f.[[Prototype]].arguments
// Arguments { … }
```

## 例

### arguments オブジェクトの使用

```js
function f(n) {
  g(n - 1);
}

function g(n) {
  console.log(`before: ${g.arguments[0]}`);
  if (n > 0) {
    f(n);
  }
  console.log(`after: ${g.arguments[0]}`);
}

f(2);

console.log(`returned: ${g.arguments}`);

// ログ出力:
// before: 1
// before: 0
// after: 0
// after: 1
// returned: null
```

## 仕様書

どの標準にもありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Functions/arguments", "arguments")}}
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
