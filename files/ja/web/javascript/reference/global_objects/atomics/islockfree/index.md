---
title: Atomics.isLockFree()
short-title: isLockFree()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Atomics.isLockFree()`** は静的メソッドで、 `Atomics` のメソッドが、要素のバイト数が指定された大きさである型付き配列に適用された場合、ロックまたは不可分のハードウェア操作を使用するかどうかを見極めるために使用されます。これは、最適化のためのプリミティブとして意図されており、高性能アルゴリズムが、クリティカルセクションでロックを使用するか、不可分操作を使用するかを決定できるようにするためのものです。不可分プリミティブがロックフリーでない場合、アルゴリズムが自分自身でロックを提供した方が効率的な場合が多いです。

{{InteractiveExample("JavaScript デモ: Atomics.isLockFree()")}}

```js interactive-example
console.log(Atomics.isLockFree(3));
// 3 is not one of the BYTES_PER_ELEMENT values
// 予想される結果: false

console.log(Atomics.isLockFree(4));
// 4 is one of the BYTES_PER_ELEMENT values
// 予想される結果: true
```

## 構文

```js-nolint
Atomics.isLockFree(size)
```

### 引数

- `size`
  - : チェックするバイト単位の大きさです。

### 返値

`true` または `false` で、操作がロック不要であるかどうかを示します。

- `size` が 4 の場合は常に `true` です。これは、すべての既知のプラットフォームが 4 バイトの不可分操作に対応しているからです。
- 指定された大きさが整数型の TypedArray の [BYTES_PER_ELEMENT](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) プロパティのいずれでもない場合は、常に `false` を返します。

## 例

### isLockFree の使用

```js
Atomics.isLockFree(1); // true （プラットフォーム依存）
Atomics.isLockFree(2); // true （プラットフォーム依存）
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true
Atomics.isLockFree(5); // false
Atomics.isLockFree(6); // false
Atomics.isLockFree(7); // false
Atomics.isLockFree(8); // true （プラットフォーム依存）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
