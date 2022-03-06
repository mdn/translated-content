---
title: HTML での画像の使用
slug: Web/Media/images
tags:
  - HTML
  - 画像
  - ランディング
  - メディア
translation_of: Web/Media/images
---
{{Glossary("HTML")}} の {{HTMLElement("img")}} 要素で HTML 文書に画像を埋め込むことができ、 {{HTMLElement("picture")}} 要素を使用すると[レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)を使用することができます。このガイドでは、ウェブサイトへの画像の追加を扱うリソースへのリンクを紹介します。

## リファレンス

これらの記事では、ウェブ上での画像の表示方法を制御するために使用される HTML 要素と CSS プロパティのいくつかを取り上げています。

### HTML

- {{HTMLElement("img")}}
  - : **HTML の `<img>` 要素**は、ウェブページに画像を埋め込むために使用されます。画像の振る舞いを制御する幅広い属性に対応しており、画像を見られない人のために {{htmlattrxref("alt", "img")}} テキストのような重要な情報を追加することができます。
- {{HTMLElement("picture")}}
  - : **HTML の `<picture>` 要素**は、 0 個以上の {{HTMLElement("source")}} 要素と 1 個の {{HTMLElement("img")}} 要素を含み、様々な画面や端末のシナリオのために画像の別な版を提供します。ブラウザーは、子要素であるそれぞれの `<source>` 要素を考慮して、それらの中から最適なものを選択します。

### CSS

- {{cssxref("object-fit")}}
  - : **`object-fit`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[置換要素](/ja/docs/Web/CSS/Replaced_element)、例えば [`<img>`](/ja/docs/Web/HTML/Element/img) や [`<video>`](/ja/docs/Web/HTML/Element/video) の中身をコンテナーに合わせるために、どのようにリサイズする可を設定します。
- {{cssxref("object-position")}}
  - : **`object-position`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のボックス内で選択された[置換要素](/ja/docs/Web/CSS/Replaced_element)内のコンテンツの配置を指定します。ボックス内の領域のうちで置換要素のオブジェクトに覆われていない部分には、要素の背景が表示されます。
- {{cssxref("background-image")}}
  - : **`background-image`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 1 つまたは複数の要素の背景画像を設定します。

## ガイド

これらの記事では、画像の種類を選択して構成するためのガイダンスを提供しています。

- [画像ファイルの種類と形式ガイド](/ja/docs/Web/Media/Formats/Image_types)
  - : ウェブブラウザーが一般的に対応ている様々な画像ファイルの種類について、それぞれの使用例、機能、互換性の要素などの詳細を含めて解説しています。さらに、この記事では、与えられた状況に最適な画像ファイルタイプを選択するためのガイダンスを提供します。
- [メディアのコンテナー要素の width および height 属性をアスペクト比に対応付ける](/ja/docs/Web/Media/images/aspect_ratio_mapping)
  - : これにより、ブラウザーが画像を読み込む方法が変更され、アスペクト比がブラウザーによって初期段階で計算され、後で読み込まれる前に画像の表示サイズを修正することができます。

## その他のトピック

興味がありそうな関連トピック

- [HTML の学習: レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : この記事ではレスポンシブ画像の概念、つまり画面サイズや解像度などが大きく異なる端末でも動作する画像について学び、レスポンシブ画像を実装するために HTML が提供するツールについて見ていきます。
