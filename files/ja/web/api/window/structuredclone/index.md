---
title: "Window: structuredClone() メソッド"
short-title: structuredClone()
slug: Web/API/Window/structuredClone
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{APIRef("HTML DOM")}}

**`structuredClone()`** は {{domxref("Window")}} のメソッドで、指定された値の[ディープコピー](/ja/docs/Glossary/Deep_copy)を、[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を用いて生成します。

このメソッドでは、元の値の[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)を、新しいオブジェクトにクローンするのではなく、移譲することもできます。
移譲されたオブジェクトは元のオブジェクトから切り離され、新しいオブジェクトに関連付けられます。元のオブジェクトからはもうアクセスできなくなります。

## 構文

```js-nolint
structuredClone(value)
structuredClone(value, options)
```

### 引数

- `value`
  - : 複製されるオブジェクトです。
    これはあらゆる[構造化複製可能型](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#%E5%AF%BE%E5%BF%9C%E6%B8%88%E3%81%BF%E3%81%AE%E5%9E%8B)です。
- `options` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `transfer`
  - : [移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)の配列で、複製するのではなく移動するオブジェクトを指定します。

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

### 移譲される値

[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)（のみ）が複製先のオブジェクトに複製する代わりに移譲することができます。この場合、 `options` 引数の `transfer` プロパティを使用します。移譲により、元のオブジェクトは使用不可能になります。

> [!NOTE]
> これが役立つ場面として、バッファー内のデータを保存する前に非同期で検証する場合です。
> データを保存する前にバッファーが変更されるのを避けるために、バッファーをクローンしてそのデータを検証することができます。
> また、データを「移譲」すれば、元のバッファーに手を加えようとしても失敗するので、偶発的な悪用を防ぐことができます。

以下のコードは、配列のクローンを作成し、その基礎となるリソースを新しいオブジェクトに移譲する方法を示しています。
返値において、元の `uInt8Array.buffer` はクリアされます。

```js
// 16MB = 1024 * 1024 * 16
const uInt8Array = Uint8Array.from({ length: 1024 * 1024 * 16 }, (v, i) => i);

const transferred = structuredClone(uInt8Array, {
  transfer: [uInt8Array.buffer],
});
console.log(uInt8Array.byteLength); // 0
```

任意の数のオブジェクトを複製し、それらのオブジェクトの任意のサブセットを移譲することができます。
例えば、以下のコードでは、渡された値から `arrayBuffer1` を移譲しますが、`arrayBuffer2` は移譲しません。

```js
const transferred = structuredClone(
  { x: { y: { z: arrayBuffer1, w: arrayBuffer2 } } },
  { transfer: [arrayBuffer1] },
);
```

## 例

### オブジェクトの複製

この例では、配列である 1 つのメンバーを持つオブジェクトを複製します。複製後、それぞれのオブジェクトに変更を加えても、他のオブジェクトには影響しません。

```js
const mushrooms1 = {
  amanita: ["muscaria", "virosa"],
};

const mushrooms2 = structuredClone(mushrooms1);

mushrooms2.amanita.push("pantherina");
mushrooms1.amanita.pop();

console.log(mushrooms2.amanita); // ["muscaria", "virosa", "pantherina"]
console.log(mushrooms1.amanita); // ["muscaria"]
```

### オブジェクトの移譲

この例では、 {{jsxref("ArrayBuffer")}} を作成し、そのバッファーがメンバーであるオブジェクトを複製し、バッファーを移譲しています。複製したオブジェクトでバッファーを使用することができますが、元のバッファーを使用しようとすると例外が発生します。

```js
// バイト単位のサイズを指定して ArrayBuffer を作成
const buffer1 = new ArrayBuffer(16);

const object1 = {
  buffer: buffer1,
};

// バッファーが格納されているオブジェクトを複製し、それを移譲
const object2 = structuredClone(object1, { transfer: [buffer1] });

// 複製したバッファーから配列を作成する
const int32View2 = new Int32Array(object2.buffer);
int32View2[0] = 42;
console.log(int32View2[0]);

// 元バッファーから配列を作成すると TypeError が発生
const int32View1 = new Int32Array(object1.buffer);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`structuredClone` のポリフィル](https://github.com/zloirock/core-js#structuredclone)は [`core-js`](https://github.com/zloirock/core-js) にあります
- [構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [構造化クローンのポリフィル](https://github.com/ungap/structured-clone)
