---
title: BigInt() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
---

{{JSRef}}

**`BigInt()`** コンストラクターは **bigint** 型の値を返します。

## 構文

```js
BigInt(value);
```

### 引数

- `value`
  - : 作成しようとしているオブジェクトの数値。文字列または整数にすることができます。

> [!NOTE]
> `BigInt()` は {{JSxRef("Operators/new", "new")}} 演算子と共には使用されません。

## 例

### 新しい BigInt の生成

```js
BigInt(123);
// 123n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("BigInt")}} クラス
