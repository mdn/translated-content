---
title: HTML での画像の使用
slug: Web/Media/Guides/Images
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{Glossary("HTML")}} の {{HTMLElement("img")}} 要素で HTML 文書に画像を埋め込むことができ、 {{HTMLElement("picture")}} 要素を使用すると[レスポンシブ画像](/ja/docs/Web/HTML/Guides/Responsive_images)を使用することができます。このガイドでは、ウェブサイトへの画像の追加を扱うリソースへのリンクを紹介します。
これらの記事では、画像の種類を選択して構成するためのガイダンスを提供しています。

- [画像ファイルの種類と形式ガイド](/ja/docs/Web/Media/Guides/Formats/Image_types)
  - : ウェブブラウザーが一般的に対応している様々な画像ファイルの種類について、それぞれの使用例、機能、互換性の要素などの詳細を含めて解説しています。さらに、この記事では、状況に最適な画像ファイル形式を選択するためのガイダンスを提供します。
- [`width` と `height` 属性を指定してレイアウトのずれを防ぐ](/ja/docs/Learn_web_development/Extensions/Performance/Multimedia#レンダリング戦略_画像を読み込むときのジャンクの防止)
  - : これにより、ブラウザーが画像を読み込む方法が変わり、画像の{{glossary("aspect ratio", "アスペクト比")}}が早い段階で計算されます。この比率を使って、画像の読み込み前に表示サイズを確保できます。

## リファレンス

これらの記事では、ウェブ上での画像の表示方法を制御するために使用される HTML 要素と CSS プロパティのいくつかを取り上げています。

### HTML

- {{HTMLElement("img")}}
  - : **HTML の `<img>` 要素**は、ウェブページに画像を埋め込むために使用されます。画像の振る舞いを制御する幅広い属性に対応しており、画像を見られない人のために [`alt`](/ja/docs/Web/HTML/Reference/Elements/img#alt) テキストのような重要な情報を追加することができます。
- {{HTMLElement("picture")}}
  - : **HTML の `<picture>` 要素**は、 0 個以上の {{HTMLElement("source")}} 要素と 1 個の {{HTMLElement("img")}} 要素を含み、様々な画面や端末のシナリオのために画像の別な版を提供します。ブラウザーは、子要素であるそれぞれの `<source>` 要素を考慮して、それらの中から最適なものを選択します。

### CSS

- {{cssxref("object-fit")}}
  - : **`object-fit`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{glossary("replaced elements", "置換要素")}}、例えば [`<img>`](/ja/docs/Web/HTML/Reference/Elements/img) や [`<video>`](/ja/docs/Web/HTML/Reference/Elements/video) の中身をコンテナーに合わせてどのようにリサイズするかを設定します。
- {{cssxref("object-position")}}
  - : **`object-position`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{glossary("replaced elements", "置換要素")}}のコンテンツを要素のボックス内でどのように配置するかを指定します。置換要素のオブジェクトで覆われていないボックス内の領域には、要素の背景が表示されます。
- {{cssxref("background-image")}}
  - : **`background-image`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 1 つまたは複数の要素の背景画像を設定します。

## 関連情報

- [HTML の学習: レスポンシブ画像](/ja/docs/Web/HTML/Guides/Responsive_images)
  - : この記事ではレスポンシブ画像の概念、つまり画面サイズや解像度などが大きく異なる端末でも動作する画像について学び、レスポンシブ画像を実装するために HTML が提供するツールについて見ていきます。
