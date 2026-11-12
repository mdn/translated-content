---
title: SVG のツール
slug: Web/SVG/Tutorials/SVG_from_scratch/Tools_for_SVG
l10n:
  sourceCommit: a9023c101b08304fba10f43175c60413cbe50ab3
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

Batik はビューアー (Squiggle)、PNG 出力用のラスタライザー、SVG ファイルを整形するためのプリティプリンターを提供します。

Batik は [Apache FOP](https://xmlgraphics.apache.org/fop/) と連携して、SVG を PDF に変換することもできます。

### 他のレンダラー

SVG からラスター画像を作成するプロジェクトはいくつかあります。[ImageMagick](https://imagemagick.org/) は、もっとも有名なコマンドライン画像処理ツールのひとつです。GNOME ライブラリーの [librsvg](https://gitlab.gnome.org/GNOME/librsvg) は、Wikipedia が SVG グラフィックをラスター化するために使用しています。また、[resvg](https://github.com/linebender/resvg) は高速なスタンドアロンのレンダラーです。[Puppeteer](https://pptr.dev/) や [Playwright](https://playwright.dev/) で操作するヘッドレスブラウザーも、生成画像がブラウザーでの SVG の表示に近いため、この用途でよく使われます。

## Google Docs

URL: [www.google.com/google-d-s/drawings/](https://docs.google.com/drawings)

Google Docs の図形描画機能は、SVG でエクスポートすることができます。

## 科学

よく知られているプロッティングツールの xfig と gnuplot は、どちらも SVG へのエクスポートに対応しています。ウェブでグラフを描画するための [JSXGraph](https://jsxgraph.uni-bayreuth.de/home/) は SVG と canvas に対応し、ブラウザーの能力に応じて使用する技術を自動的に決定します。

地理情報システム (GIS) アプリケーションでは、SVG が保存形式と描画形式の両方としてよく使われます。

## 他のツール

W3C は、SVG を対応する[プログラムの一覧](https://www.w3.org/Graphics/SVG/WG/wiki/Implementations)を提供しています。

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Image_element", "Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS") }}
