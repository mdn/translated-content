---
title: SVG のツール
slug: Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Image_element", "Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS") }}

SVG の内部の基礎を説明しましたので、ここでは SVG ファイルで作業を行うためのツールをいくつか見ていきましょう。

## Inkscape

URL: [www.inkscape.org](https://inkscape.org/)

グラフィック形式について最も重要なツールの一つが、適切な描画プログラムです。 Inkscape は最先端のベクター描画機能を提供し、またオープンソースです。

さらに、このソフトは SVG をネイティブファイル形式としています。 Inkscape 固有のデータを保存するときは、カスタム名前空間による要素や属性で SVG ファイルを拡張しますが、通常の SVG としてエクスポートすることも選択できます。

## Adobe Illustrator

URL: [www.adobe.com/products/illustrator/](https://www.adobe.com/products/illustrator.html) ([日本語サイト](https://www.adobe.com/jp/products/illustrator.html))

Adobe は Macromedia を買収するまで、もっとも有名な SVG の推進者でした。このときから、 Illustrator は SVG を良好に対応し始めました。しかし、出力される SVG にはしばしば癖がみられ、一般に適用するための後処理が必要になります。

## Apache Batik

URL: [xmlgraphics.apache.org/batik/](https://xmlgraphics.apache.org/batik/)

Batik は Apache Software Foundation 傘下の、オープンソースツールのセットです。このツールキットは Java で記述され、ほぼ完全な SVG 1.1 の対応を提供します。また、本来は SVG 1.2 で計画されている機能のいくつかにも対応しています。

Batik はビューアー (Squiggle) や PNG 出力のラスタライザーの他に、SVG ファイルを整形するためのプリティプリンターや TrueType フォントから SVG フォントへのコンバーターも提供します。

Batik は [Apache FOP](https://xmlgraphics.apache.org/fop/) と連携して、SVG を PDF に変換することもできます。

### 他のレンダラー

SVG からラスター画像を作成するためのプロジェクトがいくつかあります。[ImageMagick](http://ImageMagick.org) は、もっとも有名なコマンドライン画像処理ツールのひとつです。GNOME ライブラリーの [rsvg](https://wiki.gnome.org/Projects/LibRsvg) は、 Wikipedia が SVG をラスター化するために用いています。また、 SlimerJS や PhantomJS などのヘッドレスブラウザーを使用すると、ブラウザー上での SVG の表示に近い画像が得られるため、人気があります。

## Google Docs

URL: [www.google.com/google-d-s/drawings/](https://docs.google.com/drawings)

Google Docs の図形描画機能は、SVG でエクスポートすることができます。

## 科学

よく知られているプロッティングツールである xfig や gnuplot は、SVG でのエクスポートを対応しています。ウェブでグラフを描画するための [JSXGraph](https://jsxgraph.uni-bayreuth.de/wp/) は VML、SVG、および canvas を対応し、どの技術を用いるかはブラウザーの能力に応じて自動的に決定します。

GIS (Geographic Information System) アプリケーションで、SVG は保存および描画の形式としてよく用いられます。詳しくは [carto.net](https://carto.net) をご覧ください。

## 他のツール

W3C は、SVG を対応する[プログラムの一覧](https://www.w3.org/Graphics/SVG/WG/wiki/Implementations)を提供しています。

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Image_element", "Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS") }}
