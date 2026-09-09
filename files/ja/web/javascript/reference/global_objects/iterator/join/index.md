---
title: Iterator.prototype.join()
short-title: join()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/join
l10n:
  sourceCommit: e57e3fdd4ab6fb372ddc3d78e5b428f318202426
---

{{SeeCompatTable}}

**`join()`** は {{jsxref("Iterator")}} インスタンスのメソッドで、{{jsxref("Array.prototype.join()")}} と似ています。このメソッドは、イテレーターによって生成されたすべての要素を、カンマまたは指定された区切り文字列で区切って連結した文字列を返します。イテレーターに要素が 1 つしかない場合は、区切り文字を使用せずに、その要素を文字列化したものが返されます。

## 構文

```js-nolint
join()
join(separator)
```

### 引数

- `separator` {{optional_inline}}
  - : イテレーターの隣接する要素のペアを区切る文字列。省略した場合は、要素はカンマ (",") で区切られます。

### 返値

返されたすべての要素をつなぎ合わせた文字列。要素は[文字列に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)。要素が `undefined` または `null` の場合、文字列 `"null"` や `"undefined"` ではなく、空文字列に変換されます。イテレーターが空の場合、空文字列が返されます。

## 解説

`join()` の動作の詳細については、{{jsxref("Array.prototype.join()")}} を参照してください。他のほとんどのイテレーターヘルパーメソッドとは異なり、このメソッドは遅延評価を行わないため、無限イテレーターでは動作しません。

## 例

### join() の使用

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(fibonacci().take(5).join()); // "1,1,2,3,5"
console.log(fibonacci().take(5).join(" - ")); // "1 - 1 - 2 - 3 - 5"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.prototype.join` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-join)
- [es-shims による `Iterator.prototype.join` のポリフィル](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.reduce()")}}
- {{jsxref("Array.prototype.join()")}}
