---
title: BigInt() コンストラクター
short-title: BigInt()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`BigInt()`** コンストラクターは長整数型の値を返します。

## 構文

```js-nolint
BigInt(value)
```

> [!NOTE]
> `BigInt()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 無しでのみ呼び出すことができます。`new` つきで構築しようとすると {{jsxref("TypeError")}} が発生します。

### 引数

- `value`
  - : 作成しようとしているオブジェクトの数値。文字列、整数、論理値、長整数のいずれかにすることができます。

### 返値

長整数 ({{jsxref("BigInt")}}) 値です。数値は整数でなければならず、長整数に変換されます。論理値 `true` は `1n` に、`false` は `0n` に変換されます。文字列は整数リテラル用のソーステキストとして解析されます。つまり、先頭や末尾に空白を含み、`0b`、`0o`、`0x` で始まることができます。

### 例外

- {{jsxref("RangeError")}}
  - : 引数が整数でない場合に発生します。
- {{jsxref("TypeError")}}
  - : 以下のどちらかの場合に発生します。
    - 引数がプリミティブ型に変換できない。
    - プリミティブ型に変換された結果が、{{jsxref("undefined")}}、{{jsxref("Operators/null", "null")}}、シンボル ({{jsxref("symbol")}}) となる。
- {{jsxref("SyntaxError")}}
  - : 引数が `BigInt` として解析できない文字列の場合に発生します。

## 例

### BigInt() を使用して数値を長整数に変換

`BigInt()` は、数値が例外を発生させずに長整数に変換できる唯一のケースです。これはとても明示的だからです。ただし、整数のみが許可されます。

```js
BigInt(123); // 123n
BigInt(123.3); // RangeError: The number 123.3 cannot be converted to a BigInt because it is not an integer
```

### 文字列値の使用

```js
BigInt("123"); // 123n
BigInt("0b10101"); // 21n（10101 は 2 進数）
BigInt("0o123"); // 83n（123 は 8 進数）
BigInt("0x123"); // 291n（123 は 16 進数）
BigInt("  123  "); // 123n（先頭および末尾のホワイトスペースは許される）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("BigInt")}}
