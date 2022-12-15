---
title: SVG のツール
slug: Web/SVG/Tutorial/Tools_for_SVG
---

{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag") }}

SVG の内部の基礎を説明しましたので、ここでは SVG ファイルで作業を行うためのツールをいくつか見ていきましょう。

### ブラウザーの対応

Internet Explorer 9 により、 IE 9、Mozilla Firefox、Safari、Google Chrome、 Opera といったすべての主要なブラウザーが SVG に対応しています。 WebKit ベースのブラウザーをもつモバイル端末も SVG に対応しています。 古い端末やより小さな端末では、SVG Tiny に対応しているかもしれません。

## Inkscape

URL: [www.inkscape.org](https://www.inkscape.org)

グラフィック形式について最も重要なツールの一つが、適切な描画プログラムです。 Inkscape は最先端のベクタ描画機能を提供し、またオープンソースです。

さらに、このソフトは SVG をネイティブフォーマットとしています。 Inkscape 固有のデータを保存するときは、カスタムネームスペースによる要素や属性で SVG ファイルを拡張しますが、通常の SVG としてエクスポートすることも選択できます。

## Adobe Illustrator

URL: [www.adobe.com/products/illustrator/](https://www.adobe.com/products/illustrator/) ([日本語サイト](https://www.adobe.com/jp/products/illustrator.html))

Adobe は Macromedia を買収するまで、もっとも有名な SVG の推進者でした。このときから、 Illustrator は SVG を良好に対応し始めました。しかし、出力された SVG にはしばしば癖がみられ、一般に適用するための後処理が必要になります。

## Apache Batik

URL: [xmlgraphics.apache.org/batik/](https://xmlgraphics.apache.org/batik/)

Batik は Apache Software Foundation 傘下の、オープンソースツールのセットです。このツールキットは Java で記述され、ほぼ完全な SVG 1.1 の対応を提供します。また、本来は SVG 1.2 で計画されている機能のいくつかにも対応しています。

Batik はビューアー (Squiggle) や PNG 出力のラスタライザーの他に、SVG ファイルを整形するためのプリティプリンターや TrueType フォントから SVG フォントへのコンバーターも提供します。

Batik は [Apache FOP](https://xmlgraphics.apache.org/fop/) と連携して、SVG を PDF に変換することもできます。

### 他のレンダラー

SVG からラスター画像を作成するためのプロジェクトがいくつかあります。[ImageMagick](http://ImageMagick.org) は、もっとも有名なコマンドライン画像処理ツールのひとつです。Gnome ライブラリの [rsvg](https://library.gnome.org/devel/rsvg/) は、 Wikipedia が SVG をラスター化するために用いています。また、 SlimerJS や PhantomJS などのヘッドレスブラウザーを使用すると、ブラウザー上での SVG の表示に近い画像が得られるため、人気があります。

## Raphael JS

URL: [raphaeljs.com](https://raphaeljs.com/)

これは、ブラウザー実装の抽象レイヤーとして働く JavaScript ライブラリです。特に古いバージョンの Internet Explorer は Vector Markup Language (VML) の生成により対応されています。なお VML は 2 つある SVG の前身のひとつであり、 IE 5.5 から使用できます。

## Snap.svg

URL: [snapsvg.io](http://snapsvg.io/)

Raphael JS の作者が開発した、より新しい JavaScript の抽象化レイヤーです。 Snap.svg は最近のブラウザー向けに設計されているため、マスキング、クリッピング、パターン、フルグラデーション、グループなどの最新の SVG 機能をサポートしています。 Raphael のような古いブラウザーには対応していません。

## Google Docs

URL: [www.google.com/google-d-s/drawings/](https://www.google.com/google-d-s/drawings/)

Google Docs の図形描画機能は、SVG でエクスポートすることができます。

## 科学

よく知られているプロッティングツールである xfig や gnuplot は、SVG でのエクスポートを対応しています。ウェブでグラフを描画するための [JSXGraph](https://jsxgraph.uni-bayreuth.de/wp/) は VML、SVG、および canvas を対応し、どの技術を用いるかはブラウザーの能力に応じて自動的に決定します。

GIS (Geographic Information System) アプリケーションで、SVG は保存および描画の形式としてよく用いられます。詳しくは [carto.net](https://carto.net) をご覧ください。

## 他のツール

W3C は、SVG を対応する[プログラムの一覧](https://www.w3.org/Graphics/SVG/WG/wiki/Implementations)を提供しています。

{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag") }}
