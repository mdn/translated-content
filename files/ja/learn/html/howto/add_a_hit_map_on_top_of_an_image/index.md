---
title: 画像にヒットマップを追加する
slug: Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image
---

ここでは、イメージマップを設定する方法と、最初に検討すべきいくつかの欠点を説明します。

| 前提条件: | [基本的な HTML 文書の作成方法](/ja/docs/Learn/Getting_started_with_the_web)と、[アクセス可能な画像をウェブページに追加する方法](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#ウェブページに画像を置くにはどうするのか)について、理解している必要があります。 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | 1 つの画像の異なる領域を異なるページにリンクする方法を学びます。                                                                                                                                                                                                            |

> **警告:** この記事では、クライアント側のイメージマップについてのみ説明します。 ユーザーにマウスが必要なサーバー側のイメージマップは使用しないでください。

## イメージマップとその欠点

{{htmlelement('a')}} 内に画像をネストすると、画像全体が 1 つのウェブページにリンクします。 一方、イメージマップは、それぞれが異なるリソースにリンクするいくつかのアクティブな領域（「ホットスポット」と呼ばれます）を含みます。

以前は、イメージマップは一般的なナビゲーションデバイスでしたが、そのパフォーマンスとアクセシビリティの影響を徹底的に検討することが重要です。

いくつかの理由から[テキストリンク](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)（CSS でスタイル付けされたもの）がイメージマップよりも好ましい。 テキストリンクは軽量でメンテナンス可能で、多くの場合 SEO に優しく、アクセシビリティのニーズをサポートしています（スクリーンリーダー、テキストのみのブラウザー、翻訳サービスなど）。

## イメージマップを正しく挿入する方法

### ステップ 1: 画像

どんな画像でも受け入れられるわけではありません。

- 画像は、人々が画像のリンクをたどったときに何が起こるかを明確にする必要があります。 `alt` テキストはもちろん必須ですが、多くの人々は決してそれを見ません。
- 画像には、ホットスポットの始まりと終わりを明示する必要があります。
- ホットスポットは、どのビューポートサイズでも快適にタップするのに十分な大きさでなければなりません。 どれくらいの大きさか？ [72 × 72 CSS ピクセルは良好な最小値](http://uxmovement.com/mobile/finger-friendly-design-ideal-mobile-touch-target-sizes/)（英語）で、タッチターゲット間の間隔に余裕もあります。 [50languages.com](http://www.goethe-verlag.com/book2/) の世界地図（執筆時点）は、問題を完全に示しています。 アルバニアやエストニアよりもロシアや北米をタップする方がはるかに簡単です。

{{htmlelement("img")}} 要素と [`img`](/ja/docs/Web/HTML/Element/img#alt) テキストを使用して、[常に同じ方法](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#ウェブページに画像を置くにはどうするのか)で画像を挿入します。 画像がナビゲーションデバイスとしてのみ存在する場合、後で {{htmlelement('area')}} 要素に適切な [`area`](/ja/docs/Web/HTML/Element/area#alt) テキストを指定すると `alt=""` と書くことができます。

特殊な [`usemap`](/ja/docs/Web/HTML/Element/img#usemap) 属性が必要です。 イメージマップには、スペースを含まない一意の名前を考えてください。 次に、`usemap` 属性の値としてその名前（# が先行する）を割り当てます。

```html
<img src="image-map.png" alt="" usemap="#example-map-1" />
```

### ステップ 2: ホットスポットを有効にする

このステップでは、すべてのコードを {{htmlelement('map')}} 要素内に配置します。 `<map>` には、上の `usemap` 属性で使用したのと同じマップ名の [`name`](/ja/docs/Web/HTML/Element/map#name) 属性だけが必要です。

```html
<map name="example-map-1"></map>
```

`<map>` 要素の中に {{htmlelement('area')}} 要素が必要です。 `<area>` 要素はそれぞれが 1 つのホットスポットに対応します。 キーボードでのナビゲーションを直観的に保つには、`<area>` 要素のソースでの順序がホットスポットの視覚的順序に対応していることを確認してください。

`<area>` 要素は空要素ですが、次の 4 つの属性が必要です。

- [`shape`](/ja/docs/Web/HTML/Element/area#shape)

  [`coords`](/ja/docs/Web/HTML/Element/area#coords)

  - : `shape` は、`circle`（円）、`rect`（四角形）、`poly`（ポリゴン）、`default`（デフォルト）の 4 つの値のいずれかをとります。 （`default` の `<area>` は画像全体から、あなたが定義した他のホットスポットを除いたものです。） 選択した `shape` によって、`coords` で指定する必要がある座標情報が決まります。

    - 円の場合は、中心の x 座標と y 座標を指定し、その後に半径の長さを指定します。
    - 四角形の場合は、左上角と右下角の x/y 座標を指定します。
    - ポリゴンの場合は、各角の x/y 座標を指定します（したがって、少なくとも 6 つの値）。

    座標は CSS ピクセルで与えます。

    重なり合っている場合、ソースでの順序で選ばれます。

- [`href`](/ja/docs/Web/HTML/Element/area#href)
  - : リンク先のリソースの URL。 現在の領域をどこにもリンクさせたくない場合は、この属性を空白のままにしておくことができます（空白の円を描いている場合など）。
- [`alt`](/ja/docs/Web/HTML/Element/area#alt)

  - : リンクがどこにあるのか、それが何をするのかを人に伝える必須の属性。 `alt` テキストは、画像が利用できない場合にのみ表示されます。 [アクセス可能なリンクテキストを書くためのガイドライン](/ja/docs/Learn/Accessibility/HTML#Text_alternatives)を参照してください。

    `href` 属性が空白で、画像全体に既に `alt` 属性がある場合、`alt=""` と書くことができます。

```html
<map name="example-map-1">
  <area
    shape="circle"
    coords="200,250,25"
    href="page-2.html"
    alt="circle example" />

  <area
    shape="rect"
    coords="10, 5, 20, 15"
    href="page-3.html"
    alt="rectangle example" />
</map>
```

### ステップ 3: 誰にとっても効果があることを確認する

多くのブラウザーやデバイスでイメージマップを厳密にテストするまで、あなたは完了していません。 キーボードだけでリンクをたどってみてください。 画像をオフにしてみてください。

イメージマップが約 240 px より広い場合は、ウェブサイトをレスポンシブにするためにさらに調整する必要があります。 座標が同じままでは、もはや画像と一致しないので、小さな画面の場合は画像のサイズを変更するだけでは不十分です。

イメージマップを使用する必要がある場合は、Matt Stow の [jQuery プラグイン](https://github.com/stowball/jQuery-rwdImageMaps)（英語）を調べることができます。 また、Dudley Storey は、[イメージマップエフェクトとして SVG を使用する方法](http://thenewcode.com/696/Using-SVG-as-an-Alternative-To-Imagemaps)（英語）と、その後にビットマップ画像用に [SVG とラスターを組み合わせる方法](http://thenewcode.com/760/Create-A-Responsive-Imagemap-With-SVG)（英語）を示しています。

## より詳しく知る

- {{htmlelement("img")}}
- {{htmlelement("map")}}
- {{htmlelement("area")}}
- [オンラインイメージマップエディター](http://www.maschek.hu/imagemap/imgmap)（英語）
- [Advice on handling email clients](http://blog.goolara.com/2014/06/05/image-maps-revisited/)（リンク切れ）
