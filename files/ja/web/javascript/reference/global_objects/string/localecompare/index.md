---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
tags:
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.localeCompare
translation_of: Web/JavaScript/Reference/Global_Objects/String/localeCompare
---
{{JSRef}}

**`localeCompare()`** メソッドは、参照先の文字列が整列順で与えられた文字列より前に来るか、後に来るか、同じであるかを示す数値を返します。

{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}

新しい `locales` と `options` 引数を使用すると、アプリケーションが整列順で使用される言語を指定し、関数の動作をカスタマイズすることができます。古い実装では、`locales` および `options` 引数は無視され、使用されるロケールと整列順は完全に実装依存になります。

## 構文

```js
referenceStr.localeCompare(compareString)
referenceStr.localeCompare(compareString, locales)
referenceStr.localeCompare(compareString, locales, options)
```

### 引数

- `compareString`
  - : この文字列と比較される文字列です。
- `locales` および `options`

  - : これらの引数は関数の動作をカスタマイズし、アプリケーションが使用すべき書式化の習慣を持つ言語を決めることができます。 `locales` および `options` 引数を無視する実装においては、使用されるロケールと返却される文字列の書式は完全に実装依存となります。

    これらの引数の詳細および使用方法については [`Intl.Collator()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator)を参照してください。

### 返値

`referenceStr` が `compareString` より前に出現するものである場合は**負**の数です。 `referenceStr` が `compareString` より後に出現するものである場合は**正**の数です。等しい場合は `0` です。

## 解説

`referenceStr` が `compareString` より前に来るか、後に来るか、あるいは等しいかを示す整数を返します。

- `referenceStr` が `compareString` より前に出現するものである場合は負の数
- `referenceStr` が `compareString` より後に出現するものである場合は正の数
- 等しい場合は `0`

> **Warning:** 返値が正確な `-1` または `1` であると思わないでください。
>
> 結果の負の整数と正の整数は、ブラウザー間 (およびブラウザーのバージョン間) で異なります。これは W3C の仕様が負の値か正の値かとだけ指定しているためです。ブラウザーによっては `-2` や `2` を、あるいは他の負の値、正の値を返却するかもしれません。

## 性能

巨大な配列のソートなど大量の文字列を比較する場合は {{jsxref("Global_Objects/Collator", "Intl.Collator")}} オブジェクトを作成し、 {{jsxref("Collator.prototype.compare", "compare")}} プロパティで提供される関数を使うことをお勧めします。

## 例

### `localeCompare()` の使用

```js
// 文字 "a" は "c" は負の数になります
'a'.localeCompare('c'); // -2 や -1 （あるいはまた別の負の数）

// 単語 "check" はアルファベット順に "against" より後ろなので正の数になります
'check'.localeCompare('against'); // 2 や -1 （あるいはまた別の正の数）

// "a" と"a" は等しいので自然数 0 になります
'a'.localeCompare('a'); // 0
```

### 配列の並べ替え

`localeCompare()` で、大文字小文字の違いを無視した配列の並べ替えができます。

```js
let items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort( (a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### 拡張引数をブラウザーが対応しているか調べる

`locales` と `options` の引数は、まだすべてのブラウザーで対応しているわけではありません。

実装がこれらに対応しているか調べるには、引数 `"i"` (不正な言語タグが除外される要件) を使用して、例外 {{jsxref("RangeError")}} を調べてください。

```js
function localeCompareSupportsLocales() {
  try {
    'foo'.localeCompare('bar', 'i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
```

### `locales` の使用

`localeCompare()` によって得られる結果は言語間で異なります。アプリケーションのユーザーインターフェイスで使用される言語の整列順を得るには、 `locales` 引数を使用してその言語 (そしてできればいくつかの代替言語) を指定していることを確かめて下さい。

```js
console.log('ä'.localeCompare('z', 'de')); // 負の数: ドイツ語で ä は a に分類される
console.log('ä'.localeCompare('z', 'sv')); // 正の数: スウェーデン語では ä は z の後になる
```

### `options` の使用

`localeCompare()` によって得られる結果は、 `options` 引数を使用することによってカスタマイズできます。:

```js
// ドイツ語では ä の base letter は a
console.log('ä'.localeCompare('a', 'de', { sensitivity: 'base' })); // 0

// スウェーデン語では ä と a は base letter が異なる
console.log('ä'.localeCompare('a', 'sv', { sensitivity: 'base' })); // 正の値
```

### 数値の並べ替え

```js
// 既定では "2" > "10"
console.log("2".localeCompare("10")); // 1

// options を使用した数値
console.log("2".localeCompare("10", undefined, {numeric: true})); // -1

// ロケールタグを使用した数値
console.log("2".localeCompare("10", "en-u-kn-true")); // -1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Global_Objects/Collator", "Intl.Collator")}}
