---
title: structuredClone()
slug: Web/API/structuredClone
l10n:
  sourceCommit: 7455f0c585ea29fa85ea09e11716b70f76241f5b
---

{{APIRef("HTML DOM")}}

グローバルの **`structuredClone()`** メソッドは、指定された値の[ディープコピー](/ja/docs/Glossary/Deep_copy)を、[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を用いて生成します。

このメソッドでは、元の値の{{Glossary("transferable objects", "転送可能オブジェクト")}}を、新しいオブジェクトにクローンするのではなく、転送することもできます。
転送されたオブジェクトは元のオブジェクトから切り離され、新しいオブジェクトに装着されます。元のオブジェクトからはもうアクセスできなくなります。

## 構文

```js
structuredClone(value);
structuredClone(value, transferables);
```

### 引数

- `value`
  - : 複製されるオブジェクトです。
    これはあらゆる[構造化複製可能型](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#%E5%AF%BE%E5%BF%9C%E6%B8%88%E3%81%BF%E3%81%AE%E5%9E%8B)です。
- `transferables` {{optional_inline}}
  - : `value` の中にある{{Glossary("transferable objects", "転送可能オブジェクト")}}の配列で、複製するのではなく移動するオブジェクトを指定します。

### 返値

返値は元の `value` の[ディープコピー](/ja/docs/Glossary/Deep_copy)です。

### 例外

- `DataCloneError` {{domxref("DOMException")}}
  - : 入力値にシリアライズ可能でない部分があった場合に発生します。

## 解説

この関数は、 JavaScript の値を[ディープコピー](/ja/docs/Glossary/Deep_copy)するために使用することができます。
また、以下に示すように、循環参照にも対応しています。

```js
// 値と自分自身への循環参照を持つオブジェクトを作成する
const original = { name: "MDN" };
original.itself = original;

// 複製する
const clone = structuredClone(original);

console.assert(clone !== original); // オブジェクトは同じではない（同一ではない）
console.assert(clone.name === "MDN"); // 同じ値を持っている
console.assert(clone.itself === clone); // 循環参照も保持されている
```

### 転送される値

{{Glossary("Transferable objects", "転送可能オブジェクト")}}（のみ）が複製先のオブジェクトに複製する代わりに転送することができます。この場合、オプションの引数 `transfer` の値を使用します。
転送により、元のオブジェクトは使用不可能になります。

> **メモ:** これが役立つ場面として、バッファー内のデータを保存する前に非同期で検証する場合です。
> データを保存する前にバッファーが変更されるのを避けるために、バッファーをクローンしてそのデータを検証することができます。
> また、データを「転送」すれば、元のバッファーに手を加えようとしても失敗するので、偶発的な悪用を防ぐことができます。

以下のコードは、配列のクローンを作成し、その基礎となるリソースを新しいオブジェクトに転送する方法を示しています。
返値において、元の `uInt8Array.buffer` はクリアされます。

```js
// 16MB = 1024 * 1024 * 16
const uInt8Array = Uint8Array.from({ length: 1024 * 1024 * 16 }, (v, i) => i);

const transferred = structuredClone(uInt8Array, {
  transfer: [uInt8Array.buffer],
});
console.log(uInt8Array.byteLength); // 0
```

任意の数のオブジェクトを複製し、それらのオブジェクトの任意のサブセットを転送することができます。
例えば、以下のコードでは、渡された値から `arrayBuffer1` を転送しますが、`arrayBuffer2` は転送しません。

```js
const transferred = structuredClone(
  { x: { y: { z: arrayBuffer1, w: arrayBuffer2 } } },
  { transfer: [arrayBuffer1] },
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`structuredClone` のポリフィル](https://github.com/zloirock/core-js#structuredclone)は [`core-js`](https://github.com/zloirock/core-js) にあります
- [構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [構造化クローンのポリフィル](https://github.com/ungap/structured-clone)
