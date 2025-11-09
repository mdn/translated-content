---
title: CSS 条件付きルール
slug: Web/CSS/Guides/Conditional_rules
original_slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**CSS 条件付きルール** (CSS conditional rules) モジュールは、CSS のメディアクエリーと機能クエリーを定義し、特定の条件が満たされた場合にのみ適用されるスタイルを定義できるようにします。このモジュールで定義される条件付きルールは、端末、ユーザーエージェント、ビューポートなどの能力に基づいています。条件付きルールを使用すると、レンダリングされる文書とは無関係に、クエリー値やブラウザーおよび端末の機能に基づいて、 CSS スタイルをターゲットに指定することができます。

最初の CSS 条件付きルールは、リンクされたスタイルの意図した送信先メディアを指定する [メディア種別](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア種別)でした。例えば、 `screen` や `print` などです。これらは、HTML の {{HTMLElement("link")}} および {{HTMLElement("style")}} 要素の `media` 属性、あるいは {{cssxref("@import")}} 文またはアットルール内のメディア種別のカンマ区切りリストとして設定されていました。CSS ルールを条件付きで適用する機能は、条件付きクエリーをいくつかのメディア種別に制限していた CSS 2.1 および HTML 4.01 の実装から、大幅に拡張されました。

CSS 条件付きルールに機能クエリーが記載されるようになりました。アットルール `@supports` を使用すると、ユーザーエージェントの CSS 機能に基づいて CSS スタイルをターゲットに指定することができます。追加の条件としては、対応しているセレクター、フォント形式、フォント技術などが挙げられます。

CSS 条件付きルールモジュールは、 `@media` も拡張し、アットルールの入れ子が使用できるようにします。関連する [CSS メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)モジュールは、使用されていないメディア種別を除去し、対象とすることができる多くのメディア機能や条件を追加します。

[CSS コンテナークエリーモジュール](/ja/docs/Web/CSS/Guides/Containment/Container_queries)は、同様の条件付きルールを定義しますが、ビューポートではなく要素の親に基づいて定義します。

一般化された条件ルール `@when` および連鎖条件ルール `@else` を追加して、実現可能なクエリーをさらに拡張する計画があります。この 2 つのアットルールは、まだ対応がありません。

## リファレンス

### プロパティ

- {{cssxref("container")}}
- {{cssxref("container-name")}}
- {{cssxref("container-type")}}

### アットルール

- {{cssxref("@container")}}
- {{cssxref("@media")}}
- {{cssxref("@supports")}}

> [!NOTE]
> CSS 条件付きルールモジュールでは、まだ実装されていない 2 つのアットルール、`@else` と `@when` が導入されています。

### 関数

- [`style()`](/ja/docs/Web/CSS/Reference/At-rules/@container#コンテナースタイルクエリー)
- [`font-tech()`](/ja/docs/Web/CSS/Reference/At-rules/@supports#font-tech)
- [`font-format()`](/ja/docs/Web/CSS/Reference/At-rules/@supports#font-format)
- [`selector()`](/ja/docs/Web/CSS/Reference/At-rules/@supports#function_syntax)
- [`supports()`](/ja/docs/Web/CSS/Reference/At-rules/@import#supports-condition)

> [!NOTE]
> CSS 条件付きルールモジュールでは、まだ実装されていない CSS 関数 `media()` が導入されています。

### データ型

- [`<container-name>`](/ja/docs/Web/CSS/Reference/At-rules/@container#values)
- [`<style-feature>`](/ja/docs/Web/CSS/Reference/At-rules/@container#コンテナースタイルクエリー)
- [相対的な `<length>` 単位のコンテナー](/ja/docs/Web/CSS/Reference/Values/length#container_query_length_units)
- [`<media-query>`](/ja/docs/Web/CSS/Guides/Media_queries/Using#syntax)
- [`<supports-condition>`](/ja/docs/Web/CSS/Reference/At-rules/@import#importing_css_rules_conditional_on_feature_support)
- `<supports-feature>` （[`supports()`](/ja/docs/Web/CSS/Reference/At-rules/@import#supports-condition) を参照）

### インターフェイス

- {{domxref("CSSConditionRule")}}
- {{domxref("CSSMediaRule")}}
- {{domxref("CSSSupportsRule")}}
- {{domxref("CSS.supports_static", "supports()")}} メソッド

### 用語の定義

- {{glossary("media/CSS", "メディア")}}
- 機能クエリー（[機能クエリー](/ja/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)を参照）

## ガイド

- [機能クエリーの使用](/ja/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
  - : 機能クエリーを使用すると、指定したプロパティおよび値のブラウザーの対応を確認してから、 CSS ルールを選択的に適用します。

- [CSS メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
  - : メディアクエリー、その構文、およびメディアクエリー式を構築するために使用される演算子とメディア特性について紹介します。

- [古いブラウザーの対応: 機能クエリー](/ja/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#機能クエリー)
  - : ブラウザーのウェブ機能の対応レベルに応じて、 CSS を対象とする機能クエリーを使用する方法です。

- [ブラウザーの機能検出: CSS `@supports`](/ja/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
  - : CSS の `@supports` を含む、JavaScript および CSS の機能検出について見ていきます。

- [コンテナースクロール状態クエリーの使用](/ja/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
  - : コンテナーのスクロール状態クエリーの使用、種別ごとの例付きです。

## 関連概念

- [CSS カスケードと継承](/ja/docs/Web/CSS/Guides/Cascade)モジュール
  - {{cssxref("@import")}} アットルール

- [CSS メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)モジュール
  - [`<media-feature>`](/ja/docs/Web/CSS/Reference/At-rules/@media#media_features)
  - [`<media-type>`](/ja/docs/Web/CSS/Reference/At-rules/@media#media_types)
  - [`<media-condition>`](/ja/docs/Web/CSS/Reference/At-rules/@media#logical_operators)
  - [`<media-query-list>`](/ja/docs/Web/SVG/Reference/Attribute/media)
  - [CSS logical operators](/ja/docs/Web/CSS/Reference/At-rules/@media#logical_operators) (`not`, `or`, `and`)

- [CSSOM view](/ja/docs/Web/CSS/Guides/CSSOM_view) モジュール
  - {{domxref("CSS")}} API
  - {{domxref("CSSGroupingRule")}} API
  - {{domxref("MediaQueryList")}} API
  - {{domxref("CSSRule")}} API
  - {{domxref("MediaList")}} インターフェイス
    - {{domxref("MediaList.mediaText")}} プロパティ

- [CSS 構文](/ja/docs/Web/CSS/Guides/Syntax)モジュール
  - {{cssxref("@charset")}} 宣言
  - {{cssxref("at-rule")}} 用語
  - [`invalid`](/ja/docs/Web/CSS/Guides/Syntax/Error_handling) 用語
  - {{glossary("parse")}} 用語
  - [style rule](/ja/docs/Web/API/CSSStyleRule) 用語

- [CSS 名前空間](/ja/docs/Web/CSS/Guides/Namespaces) モジュール
  - {{cssxref("@namespace")}} アットルール

## 仕様書

{{Specifications}}

## 関連情報

- [CSS コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)モジュール
- [CSS メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)モジュール
- [CSS カスケードと継承](/ja/docs/Web/CSS/Guides/Cascade)モジュール
