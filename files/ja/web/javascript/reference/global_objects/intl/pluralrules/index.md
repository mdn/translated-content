---
title: Intl.PluralRules
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
---

{{JSRef}}

**`Intl.PluralRules`** オブジェクトは、複数形が影響する書式や言語ルールを使用できるようにします。

## コンストラクター

- {{jsxref("Intl/PluralRules/PluralRules", "Intl.PluralRules()")}}
  - : 新しい Intl.PluralRules オブジェクトを生成します。

## 静的メソッド

- {{jsxref("Intl/PluralRules/supportedLocalesOf", "Intl.PluralRules.supportedLocalesOf()")}}
  - : 指定したロケールのうち、ランタイムの既定のロケールに代替されることなく対応されているものが入った配列を返します。

## インスタンスメソッド

- {{jsxref("Intl/PluralRules/resolvedOptions", "Intl.PluralRules.prototype.resolvedOptions()")}}
  - : オブジェクトの初期化中に計算されたロケールとコレクションのオプションを反映したプロパティを持った新しいオブジェクトを返します。
- {{jsxref("Intl/PluralRules/select", "Intl.PluralRules.prototype.select()")}}
  - : ロケールを考慮した書式化に使用する複数形を示す文字列を返します。
- {{jsxref("Intl/PluralRules/selectRange", "Intl.PluralRules.prototype.selectRange()")}}
  - : このメソッドは 2 つの値を受け取り、ロケールを考慮した書式化に使用する複数形を示す文字列を返します。

## 例

### locales の使用

この例では、ローカライズされた複数形ルールのいくつかを表示します。アプリケーションのユーザーインターフェイスで使う言語の書式を取得するには、 `locales` 引数に言語（および必要に応じて代替言語）を指定してください。

```js
// アラビア語は様々な複数形の規則を持っています

new Intl.PluralRules("ar-EG").select(0);
// → 'zero'
new Intl.PluralRules("ar-EG").select(1);
// → 'one'
new Intl.PluralRules("ar-EG").select(2);
// → 'two'
new Intl.PluralRules("ar-EG").select(6);
// → 'few'
new Intl.PluralRules("ar-EG").select(18);
// → 'many'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl")}}
- [`Intl.PluralRules` の FormatJS におけるポリフィル](https://formatjs.io/docs/polyfills/intl-pluralrules)
