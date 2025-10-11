---
title: Function.prototype.arguments
short-title: arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}{{Non-standard_Header}}

> [!NOTE]
> {{jsxref("Function")}} オブジェクトの `arguments` プロパティは非推奨です。推奨される `arguments` オブジェクトへのアクセス方法は、関数内で利用できる変数 {{jsxref("Functions/arguments", "arguments")}} を利用することです。

**`arguments`** は {{jsxref("Function")}} インスタンスのアクセサープロパティで、この関数に渡された引数を返します。[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)、アロー関数、非同期関数、ジェネレーター関数では、 `arguments` プロパティにアクセスすると {{jsxref("TypeError")}} が発生します。

## 解説

`arguments` の値は、関数に渡した引数に対応する配列風のオブジェクトです。

再帰呼び出しの場合、すなわちコールスタックに関数 `f` が複数回現れる場合に、`f.arguments` はもっとも直近に実行された関数に対応する引数を表します。

実行中の関数の未処理の呼び出しがない (つまり、関数が呼び出された状態で返してない) 場合、 `arguments` プロパティの値は通常 {{jsxref("Operators/null", "null")}} です。

ECMAScript 仕様で規定されている唯一の動作は、 `Function.prototype` が初期 `arguments` アクセサーを持っており、 `get` または `set` のリクエストに対して無条件に {{jsxref("TypeError")}} を発生させるすること（「毒薬アクセサー」として知られています）であり、実装は非厳密なプレーン関数を除いて、このセマンティクスを変更することは許可されていません。 `arguments` プロパティの実際の動作は、エラーを発生させる以外にも何らかの動作がある場合、実装によって定義されています。例えば、 Chrome は自分自身でデータプロパティとして定義していますが、 Firefox と Safari は初期の毒薬である `Function.prototype.arguments` アクセサーを拡張し、非厳格関数であるこれらの値を特別に処理しています。

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

// In Chrome:
// arguments is an own property with descriptor {value: Arguments(0), writable: false, enumerable: false, configurable: false}

// In Firefox:
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
