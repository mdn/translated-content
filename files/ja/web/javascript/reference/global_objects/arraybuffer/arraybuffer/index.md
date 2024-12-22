---
title: ArrayBuffer() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`ArrayBuffer()`** コンストラクターは {{jsxref("ArrayBuffer")}} オブジェクトを生成するために使用されます。

{{EmbedInteractiveExample("pages/js/arraybuffer-constructor.html","shorter")}}

## 構文

```js-nolint
new ArrayBuffer(length)
new ArrayBuffer(length, options)
```

> **メモ:** `ArrayBuffer()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) でのみ構築することができます。`new` 無しで呼び出そうとすると、{{jsxref("TypeError")}} が発生します。

### 引数

- `length`
  - : 作成する配列バッファーのサイズをバイト単位で指定します。
- `options` {{optional_inline}} {{experimental_inline}}
  - : オブジェクトであり、以下のプロパティを持つことができます。
    - `maxByteLength` {{optional_inline}} {{experimental_inline}}
      - : 配列バッファーがサイズ変更可能な最大サイズ（バイト単位）。

### 返値

指定したサイズの新しい `ArrayBuffer` オブジェクト。その {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} プロパティには、`maxByteLength` を指定した場合はその値が設定されます。内容は 0 に初期化されます。

### 例外

- {{jsxref("RangeError")}}
  - : 以下のいずれかに該当する場合に発生します。
    - `length` または `maxByteLength` が {{jsxref("Number.MAX_SAFE_INTEGER")}} (≥ 2<sup>53</sup>) より大きいか、負の数である。
    - `length` が `maxByteLength` より大きい。

## 例

### ArrayBuffer の作成

この例では、バッファーを参照する {{jsxref("Global_Objects/Int32Array", "Int32Array")}} ビューを持つ 8 バイトのバッファーを作成しています。

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

### サイズ変更可能な ArrayBuffer の作成

この例では、最大 16 バイトまでリサイズ可能な 8 バイトのバッファーを作成し、{{jsxref("ArrayBuffer/resize", "resize()")}} でそれを 12 バイトにサイズ変更しています。

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.resize(12);
```

> **メモ:** `maxByteLength` は使用する用途に応じて使用可能な最小値に設定することが推奨されます。メモリ不足になる危険を縮小するために、`1073741824` (1GB) を超えないようにする必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`ArrayBuffer` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
