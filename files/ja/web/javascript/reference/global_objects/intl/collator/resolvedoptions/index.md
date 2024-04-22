---
title: Intl.Collator.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
---

{{JSRef}}

**`Intl.Collator.prototype.resolvedOptions()`** メソッドは、この {{jsxref("Intl.Collator")}} オブジェクトの初期化時に計算されたロケールと照合オプションを反映したプロパティを持つ新しいオブジェクトを返します。

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-resolvedoptions.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## 構文

```js
resolvedOptions();
```

### 返値

この {{jsxref("Intl.Collator")}} オブジェクトの初期化時に計算されたロケールと照合オプションを反映したプロパティを持つ新しいオブジェクトです。

## 解説

返されるオブジェクトには、以下のプロパティがあります。

- `locale`
  - : 実際に使用したロケールの BCP 47 言語タグ。このロケールにつながる入力 BCP 47 言語タグに Unicode 拡張値が要求された場合、要求されたキーと値のペアのうち、このロケールで対応しているものが `locale` に含まれます。
- `usage`, `sensitivity`, `ignorePunctuation`
  - : `options` 引数の同名のプロパティで提供された値、または既定値が入ります。
- `collation`
  - : `locale` が対応している場合は、 Unicode 拡張キー "`co`" を使用して要求された値、そうでなければ "`default`" です。
- `numeric`, `caseFirst`
  - : `options` 引数の同名のプロパティ、または Unicode 拡張キーの "`kn`" および "`kf`" で要求された値、または既定値が入ります。実装がこれらのプロパティに対応していない場合は、省略されます。

## 例

### resolvedOptions メソッドの使用

```js
var de = new Intl.Collator("de", { sensitivity: "base" });
var usedOptions = de.resolvedOptions();

usedOptions.locale; // "de"
usedOptions.usage; // "sort"
usedOptions.sensitivity; // "base"
usedOptions.ignorePunctuation; // false
usedOptions.collation; // "default"
usedOptions.numeric; // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Collator")}}
