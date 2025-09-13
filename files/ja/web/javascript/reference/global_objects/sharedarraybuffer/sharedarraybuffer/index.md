---
title: SharedArrayBuffer() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

> [!NOTE]
> `SharedArrayBuffer` コンストラクターは、特定の[セキュリティの要件](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#セキュリティの要件)に適合しない限り、グローバルに利用できるとは限りません。

**`SharedArrayBuffer()` コンストラクター**は {{jsxref("SharedArrayBuffer")}} オブジェクトを生成し、これは {{jsxref("ArrayBuffer")}} オブジェクトと似た、汎用的な、固定長の生のバイナリーデータバッファーを表します。

{{InteractiveExample("JavaScript デモ: SharedArrayBuffer() constructor", "shorter")}}

```js interactive-example
// SharedArrayBuffer をバイト単位のサイズで作成
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength);
// 期待される出力: 8
```

## 構文

```js-nolint
new SharedArrayBuffer(length)
new SharedArrayBuffer(length, options)
```

> [!NOTE]
> `SharedArrayBuffer()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を付けた場合のみ構築できます。 `new` をつけずに呼び出そうとすると、 {{jsxref("TypeError")}} が発生します。

### 引数

- `length`
  - : 生成する配列バッファーの長さをバイト数で指定します。
- `options` {{optional_inline}}
  - : 以下のプロパティを持つことができるオブジェクトです。
    - `maxByteLength` {{optional_inline}}
      - : 共有配列バッファーのサイズを変更できる最大サイズ（バイト単位）です。

### 返値

指定したサイズの新しい `SharedArrayBuffer` オブジェクトで、指定した場合は、その {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} プロパティを指定した `maxByteLength` に設定します。コンテンツは 0 に初期化されます。

## 例

### SharedArrayBuffer を生成するには常に new 演算子を使用する

`SharedArrayBuffer` コンストラクターは {{jsxref("Operators/new", "new")}} 演算子で構築する必要があります。 `SharedArrayBuffer` コンストラクターを `new` なしで呼び出すと、 {{jsxref("TypeError")}} が発生します。

```js example-bad
const sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden
```

```js example-good
const sab = new SharedArrayBuffer(1024);
```

### 伸長可能な SharedArrayBuffer の伸長

この例では、最大長 16 バイトまで伸長可能な 8 バイトのバッファーを作成し、それを {{jsxref("SharedArrayBuffer/grow", "grow()")}} で 12 バイトに伸長します。

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.grow(12);
```

> [!NOTE]
> `maxByteLength` は、用途に応じて実現可能な最小値に設定することをお勧めします。メモリー不足エラーのリスクを縮小するため、 `1073741824` (1GB) を超えることは決してないようにしてください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
