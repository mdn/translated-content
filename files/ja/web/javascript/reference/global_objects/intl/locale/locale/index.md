---
title: Intl.Locale() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
tags:
  - コンストラクター
  - 国際化
  - Intl
  - JavaScript
  - ロケール
  - Reference
browser-compat: javascript.builtins.Intl.Locale.Locale
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
---
{{JSRef}}

**`Intl.Locale`** コンストラクターは、 Intl オブジェクトの標準組み込みプロパティで、 Unicode ロケール識別子を表します。

{{EmbedInteractiveExample("pages/js/intl-locale.html")}}


## 構文

```js
new Intl.Locale(tag)
new Intl.Locale(tag, options)
```

### 引数

- `tag`
  - : Unicode ロケール識別子の文字列です。
- `options`
  - : ロケールの構成を含むオブジェクトです。キーは Unicode ロケールタグで、値は有効な Unicode タグ値です。

## 例

### 基本的な使用

もっとも単純なものでは、{{jsxref("Intl/Locale/Locale", "Intl.Locale")}} コンストラクターはロケール識別子の文字列を引数に取ります。

```js
let us = new Intl.Locale('en-US');
```

### Locale コンストラクターに options オブジェクトを渡して使用

コンストラクターには、オプションで構成オブジェクトの引数を取ることができ、そこに複数の拡張型を指定することができます。たとえば、設定オブジェクトの [`hourCycle`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) プロパティに任意の時間周期を設定し、それをコンストラクターに渡します。

```js
let locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // Prints "h12"
```

## ポリフィル

[formatjs Intl.Locale
polyfill](https://formatjs.io/docs/polyfills/intl-locale)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Collator")}}
- [Unicode ロケール識別子の仕様書](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers)
