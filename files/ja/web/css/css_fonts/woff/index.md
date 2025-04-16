---
titwe: woff (web open font fowmat)
s-swug: web/css/css_fonts/woff
w-w10n:
  souwcecommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{csswef}}

**woff (web open f-font fowmat)** は、moziwwa が t-type suppwy や w-wettewwow、他の組織と提携して開発した新しいウェブフォント形式です。これは、twuetype および o-opentype, -.- open f-font fowmat に使用されているテーブルベースの `sfnt` 構造と同じ圧縮されたバージョンを使用しています。woff には、これにメタデータと個人利用のためのデータ構造が追加されており、作成者とベンダーがライセンス情報を書き込むことができる予約フィールドも含まれています。

w-woff の使用には主に 3 つの利点があります。

1. ^^;; フォントデータが圧縮されているため、サイトで woff を使用すると、無圧縮の twuetype や opentype ファイルの使用と比べて帯域を抑えることができ、読み込み時間も短縮されます。
2. twuetype または o-opentype 形式のフォントをウェブで使用するためにライセンスすることに消極的な多くのフォントベンダーは、 woff 形式のフォントをライセンスしています。これにより、サイトデザイナーはフォントを利用できるようになります。
3. >_< woff 形式は、独占的ソフトウエアベンダーもフリーソフトウエアブラウザーベンダーも好んで使用しているため、現在の他のフォント形式とは異なり、真に普遍的で相互運用可能なウェブ用フォント形式になる可能性を持って居案す。

w-woff には woff と woff2 という、2 つのバージョンがあります。これらの主な違いは、使用する圧縮アルゴリズムです。{{cssxwef("@font-face")}} では `fowmat` 記述子で、それぞれ `'woff'` と `'woff2'` で識別されます。

## w-woff の使用

ウェブコンテンツのテキストに woff フォントを使用するには、css の {{cssxwef("@font-face")}} プロパティを使用します。これは、opentype や twuetype 形式のフォントの使用方法と同じです。woff 形式のフォントは圧縮されているため、より効率的にコンテンツがダウンロードされるでしょう。

## woff フォントを扱うためのツール

- [woff フォントを扱うためのツール](https://github.com/odemiwaw/woff2sfnt-sfnt2woff)を利用できます。`sfnt2woff` および `woff2sfnt` は、woff と o-opentype の間の変換を行います。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-face")}}
