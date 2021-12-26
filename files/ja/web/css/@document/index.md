---
title: '@document'
slug: Web/CSS/@document
tags:
  - アットルール
  - CSS
  - リファレンス
browser-compat: css.at-rules.document
translation_of: Web/CSS/@document
---
{{CSSRef}}{{Deprecated_header}}

**`@document`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/At-rule)で、文書の URL に基づいて、その中に含まれるスタイルルールを制約します。これは主にユーザー定義スタイルシート用に設計されていますが、独自定義のスタイルシートにも使うことができます。

```css
@document url("https://www.example.com/") {
  h1 {
    color: green;
  }
}
```

## 構文

`@document` ルールには 1 つ以上のマッチング関数を指定します。関数が URL に適用されると、ルールがその URL に効果を及ぼします。利用可能な関数は次の通りです。

- `url()`: 正確な URL に一致します。
- `url-prefix()`: 文書の URL が指定された値で始まる場合に一致します。
- `domain()`: 文書の URL が指定されたドメイン (またはそのサブドメイン) にある場合に一致します。
- `media-document()`: 動画、画像、プラグイン、またはそのすべての引数
- `regexp()`: 文書の URL が、指定された[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)に一致する場合に一致します。正規表現は URL 全体に一致する必要があります。

`url()`, `url-prefix()`, `domain()`, `media-document()` 関数に与える値は、単一引用符または二重引用符で囲うこともできます。 `regexp()` 関数に与える値は、引用符で囲む*必要があります*。

エスケープされた値を `regexp()` 関数に与える場合は、 CSS でさらにエスケープする必要があります。例えば、一つの `.` (ピリオド) は正規表現ではどんな文字にも一致します。リテラルのピリオドに一致させるには、まず正規表現のルールを使ってエスケープし (`\.` にします)、次に CSS のルールを使ってエスケープしなければなりません (`\\.` にします)。

`@document` は現在のところ Firefox のみが対応しています。 Firefox 以外のブラウザーでこの機能を再現したい場合は、[このポリフィル](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill) (@An-Error94 氏作) を使ってみてください。これは、ユーザースクリプトと [data-* 属性](/ja/docs/Web/HTML/Global_attributes/data-*)と[属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)を組み合わせて使用するものです。

> **Note:** このプロパティの -moz 接頭辞がついたバージョン `@-moz-document` があります。これは Firefox 59 の Nightly および Beta で、潜在的な CSS インジェクション攻撃を緩和するための実験として、ユーザー定義スタイルシートとユーザーエージェントスタイルシートでしか使用できないように制限されました ({{bug(1035091)}} を参照)。

## 形式文法

{{csssyntax}}

## 例

### CSS ルールで文書を特定

```css
@document url("http://www.w3.org/"),
          url-prefix("http://www.w3.org/Style/"),
          domain("mozilla.org"),
          media-document("video"),
          regexp("https:.*") {
  /* ここの CSS ルールは次の場所に適用されます。
     - "http://www.w3.org/" のページ
     - URL が "http://www.w3.org/Style/" で始まるすべてのページ
     - URL のホストが "mozilla.org" である、
       または ".mozilla.org" で終わるすべてのページ
     - スタンドアロンビデオ
     - URL が "https:" で始まるページ */

  /* 上で挙げたページを見辛くする */
  body {
    color: purple;
    background: yellow;
  }
}
```

## 仕様書

[当初](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document)は {{SpecName('CSS3 Conditional')}} にありましたが、 `@document` は Level 4 に[延期されました](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- www-style メーリングリストの [Per-site user style sheet rules](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135)
