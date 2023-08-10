---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}} {{deprecated_header}}

**`sub()`** メソッドは、文字列を {{HTMLElement("sub")}} 要素に埋め込んだ文字列 (`<sub>str</sub>`) を生成し、文字列が下付き文字として表示されるようにします。

> **警告:** [HTML ラッパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)はすべて非推奨となっており、互換性目的のみで標準化されています。代わりに [DOM API](/ja/docs/Web/API/Document_Object_Model) の [`document.createElement()`](/ja/docs/Web/API/Document/createElement) などを使用してください。

## 構文

```js-nolint
sub()
```

### 返値

開始タグ `<sub>` で始まり、テキスト `str` が来て、終了タグ `</sub>` が来る文字列です。

## 例

### sub() および sup() メソッドの使用

以下の例は、 `sub()` と {{jsxref("String/sup", "sup()")}} メソッドを使用して文字列を整形しています。

```js
const superText = "上付き文字";
const subText = "下付き文字";

console.log(`これは ${superText.sup()} の見え方を示しています。`);
// "これは<sup>上付き文字</sup>の見え方を示しています。"

console.log(`これは ${subText.sub()} の見え方を示しています。`);
// "これは<sub>下付き文字</sub>の見え方を示しています。"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`String.prototype.sub` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.sup()")}}
