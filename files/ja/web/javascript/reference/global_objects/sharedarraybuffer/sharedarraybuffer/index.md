---
title: SharedArrayBuffer() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
tags:
  - コストラクター
  - JavaScript
  - リファレンス
  - SharedArrayBuffer
browser-compat: javascript.builtins.SharedArrayBuffer.SharedArrayBuffer
translation_of: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
---
{{JSRef}}

> **Note:** `SharedArrayBuffer` は、 2018 年 1 月 5 日に [Spectre](https://meltdownattack.com/) への対策として、すべての主要ブラウザーで既定で無効化されました。 Chrome は、 Spectre スタイルの脆弱性から保護するためにサイトアイソレーション機能が有効になっているプラットフォームでは、 [v67 で再有効化しました](https://bugs.chromium.org/p/chromium/issues/detail?id=821270)。

**`SharedArrayBuffer()` コンストラクター**は {{jsxref("SharedArrayBuffer")}} オブジェクトを生成し、これは {{jsxref("ArrayBuffer")}} オブジェクトと似た、汎用的な、固定長の生のバイナリーデータバッファーを表します。

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-constructor.html","shorter")}}

## 構文

```js
new SharedArrayBuffer()
new SharedArrayBuffer(length)
```

### 引数

- `length` {{optional_inline}}
  - : 生成する配列バッファーの長さをバイト数で指定します。

### 返値

指定された長さの新しい `SharedArrayBuffer` オブジェクトです。中身は 0 で初期化されます。

## 例

### SharedArrayBuffer を生成するには常に new 演算子を使用する

`SharedArrayBuffer` コンストラクターは {{jsxref("Operators/new", "new")}} 演算子で構築する必要があります。 `SharedArrayBuffer` コンストラクターを `new` なしで呼び出すと、 {{jsxref("TypeError")}} が発生します。

```js example-bad
var sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// new がない形は禁止されています
```

```js example-good
var sab = new SharedArrayBuffer(1024);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
