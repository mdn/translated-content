---
title: Intl.DisplayNames() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
---

{{JSRef}}

**`Intl.DisplayNames()`** コンストラクターは、言語、地域、文字体系の表示名の一貫した翻訳を可能にする {{jsxref("Intl/DisplayNames", "Intl.DisplayNames")}} オブジェクトを生成します。

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## 構文

```js
new Intl.DisplayNames();
new Intl.DisplayNames(locales);
new Intl.DisplayNames(locales, options);
```

### 引数

- `locales` {{optional_inline}}

  - : BCP 47 言語タグの文字列、または、そのような文字列の配列です。 `locales` 引数の一般的な形式と解釈は、 {{jsxref("Global_Objects/Intl", "Intl", "#ロケールの識別とネゴシエーション", 1)}} のページをご覧ください。次の Unicode 拡張キーが利用できます。

    - `nu`
      - : 使用する数値書式です。
        "`arab`", "`arabext`", "`bali`",
        "`beng`", "`deva`", "`fullwide`",
        "`gujr`", "`guru`", "`hanidec`",
        "`khmr`", "`knda`", "`laoo`",
        "`latn`", "`limb`", "`mlym`",
        "`mong`", "`mymr`", "`orya`",
        "`tamldec`", "`telu`", "`thai`",
        "`tibt`" です。

- `options` {{optional_inline}}

  - : 以下のプロパティの一部またはすべてを持つオブジェクトです。

    - `localeMatcher`
      - : 使用するロケール照合アルゴリズムです。利用可能な値は、
        "`lookup`" と "`best fit`" です。既定値は
        "`best fit`" です。このオプションについての情報は、
        {{jsxref("Global_Objects/Intl", "Intl", "#Locale_negotiation", 1)}} ページを参照してください。
    - `style`

      - : 使用する書式化スタイルです。既定値は "`long`" です。

        - "`narrow`"
        - "`short`"
        - "`long`"

    - `type`

      - : 使用する種類です。

        - "`language`"
        - "`region`"
        - "`script`"
        - "`currency`"

    - `fallback`

      - : 使用する代替法です。既定値は "`code`" です。

        - "`code`"
        - "`none`"

## 例

### 基本的な使用法

ロケールを指定しない基本的な使用法では、既定のロケールと既定のオプションで書式化された文字列が返されます。

```js
console.log(new Intl.DisplayNames([], { type: "language" }).of("US"));
// 期待される出力: 'us'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DisplayNames")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
