---
title: SVG におけるその他のコンテンツ
slug: Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking", "Web/SVG/Tutorials/SVG_from_scratch/Filter_effects") }}

矩形や円といったグラフィックの基本要素とは別に、 SVG は画像内に他の種類のコンテンツを埋め込むための一連の要素も同様に用意しています。

### ラスター画像の埋め込み

HTML における img 要素と同様に、SVG には同じ用途の `image` 要素があります。これを用いて、任意のラスター (およびベクター) 画像を埋め込むことができます。仕様書ではアプリケーションに対し、少なくとも PNG、JPEG、SVG 形式のファイルに対応するよう求めています。

埋め込まれた画像は、通常の SVG 要素になります。つまり、コンテンツに対してクリップ、マスク、フィルター、回転、およびその他 SVG の技術を用いることができます。

```html
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="200"
  height="200">
  <image
    x="90"
    y="-65"
    width="128"
    height="146"
    transform="rotate(45)"
    href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/image/mdn_logo_only_color.png" />
</svg>
```

{{ EmbedLiveSample('Embedding_raster_images','220','240') }}

### 任意の XML の埋め込み

SVG は XML アプリケーションであることから、_常に_ SVG 文書内のどこにでも任意の XML を埋め込むことができます。しかし、そのコンテンツに対して周囲の SVG がどのように作用するかを定義する方法はありません。実際、準拠しているビューアーでは埋め込まれた XML が全く作用せず、そのデータは単純に省略されます。そのため、仕様書では SVG に `{{ SVGElement("foreignObject") }}` 要素を追加しています。この要素の唯一の用途は、他のマークアップのコンテナーおよび SVG のスタイル属性 (もっとも顕著なものは、オブジェクトの領域を定義する `width` および `height` です) のキャリアーになることです。

`foreignObject` 要素は、SVG に XHTML を埋め込むのによい手段です。長いテキストがある場合、SVG の `text` 要素より HTML のレイアウトの方がより適切かつ使いやすくなります。他によく挙げられる使い方として、MathML の式の埋め込みがあります。これは SVG を科学分野で応用する場合に、SVG と MathML を統合するためにとてもよい方法です。

> [!NOTE]
> `foreignObject` のコンテンツは、ビューアーによって処理できなければならないことを覚えておいてください。スタンドアロンの SVG ビューアーは、HTML や MathML のレンダリングができないでしょう。

`foreignObject` は SVG の要素ですので、`image` と同様に SVG のあらゆる技術を用いることができ、そのコンテンツに適用されます。

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking", "Web/SVG/Tutorials/SVG_from_scratch/Filter_effects") }}
