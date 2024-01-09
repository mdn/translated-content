---
title: WOFF (Web Open Font Format)
slug: Web/CSS/CSS_fonts/WOFF
original_slug: Web/Guide/WOFF
---

**WOFF (Web Open Font Format)** は、Mozilla が Type Supply や LettError、他の組織と提携して開発した新しい Web フォント形式です。これは、TrueType および OpenType, Open Font Format に使用されているテーブルベースの `sfnt` 構造と同じ圧縮されたバージョンを使用しています。WOFF には、これにメタデータと個人利用のためのデータ構造が追加されており、作成者とベンダーがライセンス情報を書き込むことができる予約フィールドも含まれています。

WOFF の使用には 3 つの利点があります:

1. フォントデータが圧縮されているため、サイトで WOFF を使用すると、無圧縮の TrueType や OpenType ファイルの使用と比べて帯域を抑えることができ、読み込み時間も短縮されます。
2. 自社の TrueType や OpenType 形式のフォントが Web 上で使用されることを許可したくない多くのフォントベンダーは、WOFF 形式のフォントなら使用を許可できるでしょう。これは、サイトのデザイナーに対してフォントの可用性を高めることになります。
3. プロプライエタリなブラウザベンダーもフリーソフトウェアのブラウザベンダーも、WOFF 形式を好んでいます。つまり、他の既存のフォント形式と異なり、WOFF 形式のフォントが、Web のための真にユニバーサルで相互運用が可能なフォント形式になる可能性があります。

WOFF と WOFF2 という、2 つのバージョンの WOFF があります。これらの主な違いは、使用する圧縮アルゴリズムです。{{cssxref("@font-face")}} では `format` 記述子で、それぞれ `'woff'` と `'woff2'` で識別されます。

## WOFF の使用

Web コンテンツのテキストに WOFF フォントを使用するには、{{cssxref("@font-face")}} CSS プロパティを使用します。これは、OpenType や TrueType 形式のフォントの使用方法と同じです。WOFF 形式のフォントは圧縮されているため、より効率的にコンテンツがダウンロードされるでしょう。

## WOFF フォントを扱うためのツール

- [WOFF フォントを扱うためのツール](https://github.com/odemiral/woff2sfnt-sfnt2woff)を利用できます。`sfnt2woff` および `woff2sfnt` は、WOFF と OpenType の間の変換を行います。

## 仕様

{{Specifications}}

## ブラウザ実装状況

{{Compat}}

## 関連情報

- {{cssxref("@font-face")}}
