---
title: BigInt.asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
tags:
  - BigInt
  - JavaScript
  - メソッド
  - リファレンス
  - asIntN
browser-compat: javascript.builtins.BigInt.asIntN
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
---
{{JSRef}}

**`BigInt.asIntN`** は静的メソッドで、 BigInt 値を符号付き整数値に丸め、その値を返します。

{{EmbedInteractiveExample("pages/js/bigint-asintn.html", "taller")}}

## 構文

```js
BigInt.asIntN(bits, bigint);
```

### 引数

- `bits`
  - : 整数の大きさのために利用できるビットの数です。
- `bigint`
  - : 指定されたビット数に丸める BigInt 値です。

### 返値

`bigint` を 2^`bits` で割った剰余の値の符号付き整数です。

## 例

### 64 ビットの範囲に収める

`BigInt.asIntN()` メソッドは、 64 ビットの数値の範囲に収めるのに便利です。

```js
const max = 2n ** (64n - 1n) - 1n;

BigInt.asIntN(64, max);
// ↪ 9223372036854775807n

BigInt.asIntN(64, max + 1n);
// ↪ -9223372036854775808n
// オーバーフローするので負数になる
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{JSxRef("BigInt")}}
- {{JSxRef("BigInt.asUintN()")}}
