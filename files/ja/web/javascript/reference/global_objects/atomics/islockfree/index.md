---
title: Atomics.isLockFree()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
tags:
  - Atomics
  - JavaScript
  - Method
  - Shared Memory
browser-compat: javascript.builtins.Atomics.isLockFree
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
---
{{JSRef}}

静的な
**`Atomics.isLockFree()`**
メソッドは、 `Atomics` のメソッドが、要素のバイト数が指定された大きさである型付き配列に適用された場合、ロックまたは不可分のハードウェア操作を使用するかどうかを見極めるために使用されます。指定された大きさが整数型の TypedArray 型の [BYTES_PER_ELEMENT](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) プロパティのいずれでもない場合は、 `false` を返します。

{{EmbedInteractiveExample("pages/js/atomics-islockfree.html")}}

## 構文

```js
Atomics.isLockFree(size)
```

### 引数

- `size`
  - : チェックするバイト単位の大きさです。

### 返値

`true` または `false` で、操作がロック不要であるかどうかを示します。

## 例

### isLockFree の使用

```js
Atomics.isLockFree(1); // true
Atomics.isLockFree(2); // true
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true
Atomics.isLockFree(5); // false
Atomics.isLockFree(6); // false
Atomics.isLockFree(7); // false
Atomics.isLockFree(8); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
