---
title: Intl.ListFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
tags:
  - 国際化
  - Intl
  - JavaScript
  - ListFormat
  - ローカライズ
  - メソッド
  - プロトタイプ
  - リファレンス
browser-compat: javascript.builtins.Intl.ListFormat.format
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
---
{{JSRef}}

**`format()`** メソッドは、リストの言語固有の表現を文字列で返します。

{{EmbedInteractiveExample("pages/js/intl-listformat.html", "taller")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## 構文

```js
format()
format(list)
```

### 引数

- `list`
  - : Array などの反復可能オブジェクトです。

### 返値

リストのすべての要素を表現する、言語に依存した文字列表現です。

## 解説

**`format()`** メソッドは、 `Intl.ListFormat` オブジェクトで提供された引数に基づいて書式化された文字列を返します。 `locales` と `options` 引数で `format()` の動作をカスタマイズし、アプリケーションがリストを書式化する言語の慣習を指定することができます。

## 例

### format の使用

以下の例では、英語を使用したリストのフォーマッターの作り方を紹介します。

```js
const list = ['Motorcycle', 'Bus', 'Car'];

 console.log(new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' }).format(list));
// > Motorcycle, Bus and Car

 console.log(new Intl.ListFormat('en-GB', { style: 'short', type: 'disjunction' }).format(list));
// > Motorcycle, Bus or Car

 console.log(new Intl.ListFormat('en-GB', { style: 'narrow', type: 'unit' }).format(list));
// > Motorcycle Bus Car
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.ListFormat")}}
