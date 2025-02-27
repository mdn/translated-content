---
title: WOFF (Web Open Font Format)
slug: Web/CSS/CSS_fonts/WOFF
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{CSSRef}}

**WOFF (Web Open Font Format)** は、Mozilla が Type Supply や LettError、他の組織と提携して開発した新しいウェブフォント形式です。これは、TrueType および OpenType, Open Font Format に使用されているテーブルベースの `sfnt` 構造と同じ圧縮されたバージョンを使用しています。WOFF には、これにメタデータと個人利用のためのデータ構造が追加されており、作成者とベンダーがライセンス情報を書き込むことができる予約フィールドも含まれています。

WOFF の使用には主に 3 つの利点があります。

1. フォントデータが圧縮されているため、サイトで WOFF を使用すると、無圧縮の TrueType や OpenType ファイルの使用と比べて帯域を抑えることができ、読み込み時間も短縮されます。
2. TrueType または OpenType 形式のフォントをウェブで使用するためにライセンスすることに消極的な多くのフォントベンダーは、 WOFF 形式のフォントをライセンスしています。これにより、サイトデザイナーはフォントを利用できるようになります。
3. WOFF 形式は、独占的ソフトウエアベンダーもフリーソフトウエアブラウザベンダーも好んで使用しているため、現在の他のフォント形式とは異なり、真に普遍的で相互運用可能なウェブ用フォント形式になる可能性を持って居案す。

WOFF には WOFF と WOFF2 という、2 つのバージョンがあります。これらの主な違いは、使用する圧縮アルゴリズムです。{{cssxref("@font-face")}} では `format` 記述子で、それぞれ `'woff'` と `'woff2'` で識別されます。

## WOFF の使用

ウェブコンテンツのテキストに WOFF フォントを使用するには、CSS の {{cssxref("@font-face")}} プロパティを使用します。これは、OpenType や TrueType 形式のフォントの使用方法と同じです。WOFF 形式のフォントは圧縮されているため、より効率的にコンテンツがダウンロードされるでしょう。

## WOFF フォントを扱うためのツール

- [WOFF フォントを扱うためのツール](https://github.com/odemiral/woff2sfnt-sfnt2woff)を利用できます。`sfnt2woff` および `woff2sfnt` は、WOFF と OpenType の間の変換を行います。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face")}}
