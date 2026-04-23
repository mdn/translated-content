---
title: CSS 入れ子
short-title: 入れ子
slug: Web/CSS/Guides/Nesting
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

**CSS 入れ子** (CSS nesting) モジュールは、セレクターを入れ子にする構文を定義し、親ルールのセレクターに対して子ルールのセレクターを相対的に指定することで、あるスタイルルールを別のスタイルルールの中に入れ子にする機能を提供します。

CSS 入れ子は、 [Sass](https://sass-lang.com/) のような CSS プリプロセッサーとは異なり、 CSS プリプロセッサーによって事前にコンパイルされるのではなく、ブラウザーで解釈されます。

CSS 入れ子は、 CSS スタイルシートの可読性、モジュール性、保守性に役立ちます。また、 CSS ファイルのサイズを縮小することで、ユーザーがダウンロードするデータ量を削減できる可能性もあります。

## リファレンス

### セレクター

- [`&` 入れ子セレクター](/ja/docs/Web/CSS/Reference/Selectors/Nesting_selector)

## ガイド

- [CSS 入れ子の使用](/ja/docs/Web/CSS/Guides/Nesting/Using)
  - : CSS 入れ子の使い方を説明します。
- [CSS 入れ子アットルール](/ja/docs/Web/CSS/Guides/Nesting/At-rules)
  - : アットルールを入れ子にする方法を説明します。
- [CSS 入れ子と詳細度](/ja/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity)
  - : CSS を入れ子にした場合の詳細度の違いを説明します。

## 関連概念

- [セレクターと結合子](/ja/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [CSS プリプロセッサー](/ja/docs/Glossary/CSS_preprocessor)

## 仕様書

{{Specifications}}

## 関連情報

- [詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS カスケードと継承モジュール](/ja/docs/Web/CSS/Guides/Cascade)
- [CSS セレクターモジュール](/ja/docs/Web/CSS/Guides/Selectors)
