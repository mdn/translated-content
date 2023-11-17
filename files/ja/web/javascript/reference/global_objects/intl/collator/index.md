---
title: Intl.Collator
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator
---

{{JSRef}}

**`Intl.Collator`** オブジェクトは、言語を考慮した文字列の比較を可能にします。

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

<!--このデモのソースファイルは GitHub リポジトリーに格納されています。デモプロジェクトに協力していただける場合は、 https://github.com/mdn/interactive-examples をクローンしてプルリクエストを送信してください。 -->

## コンストラクター

- {{jsxref("Intl/Collator/Collator", "Intl.Collator()")}}
  - : 新しい `Collator` オブジェクトを生成します。

## 静的メソッド

- {{jsxref("Intl/Collator/supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
  - : 指定したロケールのうち、ランタイムの既定のロケールに代替されることなく対応されているものを含む配列を返します。

## インスタンスメソッド

- {{jsxref("Intl/Collator/compare", "Intl.Collator.prototype.compare")}}
  - : この {{jsxref("Global_Objects/Intl/Collator", "Intl.Collator")}} オブジェクトのソート順に応じて 2 つの文字列を比較する関数を返します。
- {{jsxref("Intl/Collator/resolvedOptions", "Intl.Collator.prototype.resolvedOptions()")}}
  - : ローケルを反映しているプロパティとオブジェクトの初期化中に計算された照合オプションをもった新しいオブジェクトを返します。

## 例

### Collator の使用

次の例では、一方の文字列が他方の文字列より前である場合、後である場合、および同じレベルである場合の比較結果を表示します。

```js
console.log(new Intl.Collator().compare("a", "c")); // → 負の値
console.log(new Intl.Collator().compare("c", "a")); // → 正の値
console.log(new Intl.Collator().compare("a", "a")); // → 0
```

上記コードの結果は、ブラウザーやブラウザーのバージョンによって異なる可能性がある点に注意してください。というのも前および後を表す数値については、それぞれ負の数および正の数であることだけが仕様によって定めています。具体的な数値は定められていないため、実装ごとに異なる数値になるかもしれません。

### locales の使用

{{jsxref("Intl/Collator/compare")}} の結果は言語によって異なります。アプリケーションのユーザーインターフェイスで使用される言語のソート順を取得するには、 `locales` 引数にその言語を（およびフォールバック用の言語も）指定してください。

```js
// in German, ä sorts with a
console.log(new Intl.Collator("de").compare("ä", "z"));
// → 負の値

// in Swedish, ä sorts after z
console.log(new Intl.Collator("sv").compare("ä", "z"));
// → 正の値
```

### options の使用

{{jsxref("Intl/Collator/compare")}} の結果は `options` 引数でカスタマイズできます。

```js
// in German, ä has a as the base letter
console.log(new Intl.Collator("de", { sensitivity: "base" }).compare("ä", "a"));
// → 0

// in Swedish, ä and a are separate base letters
console.log(new Intl.Collator("sv", { sensitivity: "base" }).compare("ä", "a"));
// → 正の値
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl")}}
