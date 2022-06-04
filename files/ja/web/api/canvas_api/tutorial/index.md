---
title: Canvas チュートリアル
slug: Web/API/Canvas_API/Tutorial
tags:
  - キャンバス
  - グラフィック
  - ガイド
  - HTML
  - HTML5
  - 中級者
  - ウェブ
translation_of: Web/API/Canvas_API/Tutorial
---
{{CanvasSidebar}}

このチュートリアルは、 [**`<canvas>`**](/ja/docs/Web/HTML/Element/canvas) 要素を使用して二次元のグラフィックを描画する方法を、基本から説明します。ここでの例は、キャンバスで何ができるかを明確に示すものであり、独自のコンテンツを作成するためのコードスニペットも提供しています。

`<canvas>` は [HTML](/ja/docs/Web/HTML) の要素であり、スクリプト（ふつうは [JavaScript](/ja/docs/Glossary/JavaScript)）を使ってグラフィックを描くことができます。これは例えば、グラフを描いたり、写真を合成する、または簡単なアニメーションを（[あまり簡単ではない](/ja/docs/Web/API/Canvas_API/A_basic_ray-caster)ものも）作成したりすることができます。このページにある画像は、このチュートリアルで作成する [**`<canvas>`**](/ja/docs/Web/HTML/Element/canvas) の実装の例を示しています。

`<canvas>` は Apple が macOS Dashboard のために WebKit に初めて導入した後、ブラウザーに実装されました。現在は、あらゆる主要ブラウザーが対応しています。

## 始める前に

`<canvas>` を使うのはそれほど難しくはありませんが、 [HTML](/ja/docs/Web/HTML) と [JavaScript](/ja/docs/Web/JavaScript) の基本的な理解が必要です。一部の古いブラウザーは `<canvas>` 要素に対応していませんが、最近のバージョンの主要ブラウザーはすべて対応しています。キャンバスの既定の大きさは、 300 ピクセル × 150 ピクセル（幅 × 高さ）です。しかし、 HTML の `height` および `width` プロパティを使用して、独自の大きさを定義することができます。キャンバスにグラフィックを描画するためには、JavaScript のコンテキストオブジェクトを使用します。このオブジェクトは、グラフィックをその場で生成します。

## チュートリアル

1. [基本的な使い方](/ja/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
2. [図形の描画](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
3. [スタイルと色の適用](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
4. [文字の描画](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
5. [画像の使用](/ja/docs/Web/API/Canvas_API/Tutorial/Using_images)
6. [座標変換](/ja/docs/Web/API/Canvas_API/Tutorial/Transformations)
7. [合成とクリッピング](/ja/docs/Web/API/Canvas_API/Tutorial/Compositing)
8. [基本的なアニメーション](/ja/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
9. [高度なアニメーション](/ja/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
10. [ピクセル操作](/ja/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
11. [キャンバスの最適化](/ja/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)
12. [おわりに](/ja/docs/Web/API/Canvas_API/Tutorial/Finale)

## 関連情報

- [Canvas トピックのページ](/ja/docs/Web/API/Canvas_API)
- [HTML5CanvasTutorials](https://www.html5canvastutorials.com/)

## 貢献者へのメモ

2013 年 6 月 17 日の週に発生した不運な技術的エラーにより、すべての過去の貢献者の属性を含む、このチュートリアルの履歴情報が失われました。この問題についておわびするとともに、この不運な事故を容赦願います。

{{ Next("Web/API/Canvas_API/Tutorial/Basic_usage") }}
