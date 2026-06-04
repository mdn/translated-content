---
title: Intl.Collator
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Intl.Collator`** オブジェクトで、言語を考慮した文字列の比較ができます。

{{InteractiveExample("JavaScript デモ: Intl.Collator")}}

```js interactive-example
console.log(["Z", "a", "z", "ä"].sort(new Intl.Collator("de").compare));
// 予想される結果: Array ["a", "ä", "z", "Z"]

console.log(["Z", "a", "z", "ä"].sort(new Intl.Collator("sv").compare));
// 予想される結果: Array ["a", "z", "Z", "ä"]

console.log(
  ["Z", "a", "z", "ä"].sort(
    new Intl.Collator("de", { caseFirst: "upper" }).compare,
  ),
);
// 予想される結果: Array ["a", "ä", "Z", "z"]
```

## コンストラクター

- {{jsxref("Intl/Collator/Collator", "Intl.Collator()")}}
  - : 新しい `Collator` オブジェクトを生成します。

## 静的メソッド

- {{jsxref("Intl/Collator/supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
  - : 指定されたロケールのうち、実行環境のデフォルトのロケールで代替されることなく対応するものを、配列に収めて返します。

## インスタンスプロパティ

これらのプロパティは `Intl.Collator.prototype` で定義されており、すべての `Intl.Collator` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Intl.Collator.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`Intl.Collator` のインスタンスの場合、初期値は {{jsxref("Intl/Collator/Collator", "Intl.Collator")}} コンストラクターとなります。
- `Intl.Collator.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は、文字列 `"Intl.Collator"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Intl/Collator/compare", "Intl.Collator.prototype.compare()")}}
  - : この `Intl.Collator` オブジェクトのソート順に応じて 2 つの文字列を比較するゲッター関数です。
- {{jsxref("Intl/Collator/resolvedOptions", "Intl.Collator.prototype.resolvedOptions()")}}
  - : オブジェクトの初期化時に計算されたロケールや照合オプションを反映したプロパティを持つ、新しいオブジェクトを返します。

## 例

### Collator の使用

次の例では、一方の文字列が他方の文字列より前である場合、後である場合、および同じレベルである場合の比較結果を表示します。

```js
console.log(new Intl.Collator().compare("a", "c")); // -1 またはその他の負の値
console.log(new Intl.Collator().compare("c", "a")); // 1 またはその他の正の値
console.log(new Intl.Collator().compare("a", "a")); // 0
```

上記コードの結果は、ブラウザーやブラウザーのバージョンによって異なる可能性がある点に注意してください。というのも前および後を表す数値については、それぞれ負の数および正の数であることだけが仕様によって定めています。具体的な数値は定められていないため、実装ごとに異なる数値になるかもしれません。

### locales の使用

{{jsxref("Intl/Collator/compare")}} の結果は言語によって異なります。アプリケーションのユーザーインターフェイスで使用される言語のソート順を取得するには、 `locales` 引数にその言語を（およびフォールバック用の言語も）指定してください。

```js
// in German, ä sorts with a
console.log(new Intl.Collator("de").compare("ä", "z"));
// -1 またはその他の負の値

// in Swedish, ä sorts after z
console.log(new Intl.Collator("sv").compare("ä", "z"));
// 1 またはその他の正の値
```

### options の使用

[`Intl.Collator.prototype.compare()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare) の結果は `options` 引数でカスタマイズできます。

```js
// ドイツ語では、ä は a をベース文字として持つ
console.log(new Intl.Collator("de", { sensitivity: "base" }).compare("ä", "a"));
// 0

// スウェーデン語では、ä と a は別な文字
console.log(new Intl.Collator("sv", { sensitivity: "base" }).compare("ä", "a"));
// 1 またはその他の正の値
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl")}}
- {{jsxref("String.prototype.localeCompare()")}}
