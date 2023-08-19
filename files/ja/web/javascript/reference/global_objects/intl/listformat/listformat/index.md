---
title: Intl.ListFormat() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
---

{{JSRef}}

**`Intl.ListFormat()`** コンストラクターは、言語を考慮したリストの書式化を可能にする
{{jsxref("Intl/ListFormat", "Intl.ListFormat")}} オブジェクトを生成します。

{{EmbedInteractiveExample("pages/js/intl-listformat.html", "taller")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## 構文

```js
new Intl.ListFormat();
new Intl.ListFormat(locales);
new Intl.ListFormat(locales, options);
```

### 引数

- `locales` {{optional_inline}}
  - : BCP 47 言語タグの文字列、または、そのような文字列の配列です。 `locales` 引数の一般的な形式と解釈は、 {{jsxref("Global_Objects/Intl", "Intl", "#ロケールの識別とネゴシエーション", 1)}} のページを参照してください。
- `options` {{optional_inline}}

  - : 以下のプロパティの一部またはすべてを持つオブジェクトです。

    - `localeMatcher`
      - : 使用するロケール照合アルゴリズム。取りうる値は以下の通りです。
        - "`best fit`" （既定値）
        - "`lookup`"
          このオプションについての詳細は、 {{jsxref("Global_Objects/Intl", "Intl", "#Locale_negotiation", 1)}} のページをご覧ください。
    - `type`
      - : グループ化の種類を示します。取りうる値は以下の通りです。
        - "`conjunction`" - リスト項目の "and" ベースのグループ化: "A, B, and C" （既定値）
        - "`disjunction`" - リスト項目の "or" ベースのグループ化: "A, B, or C"
        - "`unit`" - リスト項目の単位としてのグループ化（"and" ベースでも "or" ベースでもない）: "A, B, C"
    - `style`
      - : グループ化のスタイルを示します（例えば、リストの区切り文字や結合などが含まれます）。取りうる値は以下の通りです。
        - "`long`": "A, B, and C" （既定値）
        - "`short`": "A, B, C"
        - "`narrow`": "A B C"

## 例

### format の使用

次の例では、英語を使用するリストのフォーマッターを生成する方法を示します。

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-GB", { style: "long" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-US", { style: "long" }).format(list));
// Motorcycle, Bus, and Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-US", { style: "short", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus, & Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus, Car

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(new Intl.ListFormat("en-US", { style: "narrow" }).format(list));
// Motorcycle, Bus, Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "unit" }).format(list),
);
// Motorcycle Bus Car

console.log(
  new Intl.ListFormat("en-US", { style: "long" }).format([
    "30 degrees",
    "15 minutes",
    "50 seconds",
  ]),
);
// 30 degrees, 15 minutes, and 50 seconds

console.log(
  new Intl.ListFormat("en-US", { style: "narrow" }).format([
    "30 degrees",
    "15 minutes",
    "50 seconds",
  ]),
);
// 30 degrees, 15 minutes, 50 seconds

console.log(
  new Intl.ListFormat("en-US", { style: "narrow", type: "unit" }).format([
    "30°",
    "15′",
    "50″",
  ]),
);
// 30° 15′ 50″
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
