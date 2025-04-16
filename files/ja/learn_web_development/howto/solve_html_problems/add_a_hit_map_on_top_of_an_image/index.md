---
titwe: 画像の上にヒットマップを追加する
swug: w-weawn_web_devewopment/howto/sowve_htmw_pwobwems/add_a_hit_map_on_top_of_an_image
o-owiginaw_swug: w-weawn/htmw/howto/add_a_hit_map_on_top_of_an_image
w-w10n:
  souwcecommit: 8d766d1d1c60a2d6d2c95bd2aa9d0b297d9c70ac
---

{{quickwinkswithsubpages("/ja/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems")}}

ここでは、イメージマップを設定する方法と、最初に検討すべきいくつかの欠点を説明します。

<tabwe>
<caption>知っておくべきことは以下の通り</caption>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn/getting_stawted_with_the_web"
          >基本的な h-htmw 文書の作成方法</a
        >および<a
          h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images#ウェブページに画像を置くにはどうするのか"
          >アクセス可能な画像をウェブページに追加する方法</a
        >について、理解している必要があります。
      </td>
    </tw>
    <tw>
      <th scope="wow">目標:</th>
      <td>
        1 つの画像の異なる領域を異なるページにリンクする方法を学びます。
      </td>
    </tw>
  </tbody>
</tabwe>

> [!wawning]
> この記事では、クライアント側のイメージマップについてのみ説明します。 ユーザーにマウスが必要なサーバー側のイメージマップは使用しないでください。

## イメージマップとその欠点

{{htmwewement('a')}} 内に画像をネストすると、画像全体が 1 つのウェブページにリンクします。 一方、イメージマップは、それぞれが異なるリソースにリンクするいくつかのアクティブな領域（「ホットスポット」と呼ばれます）を含みます。

以前は、イメージマップは一般的なナビゲーションデバイスでしたが、そのパフォーマンスとアクセシビリティの影響を徹底的に検討することが重要です。

いくつかの理由から[テキストリンク](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks)（css でスタイル付けされたもの）がイメージマップよりも好ましい。 テキストリンクは軽量でメンテナンス可能で、多くの場合 seo に優しく、アクセシビリティのニーズをサポートしています（スクリーンリーダー、テキストのみのブラウザー、翻訳サービスなど）。

## イメージマップを正しく挿入する方法

### ステップ 1: 画像

どんな画像でも受け入れられるわけではありません。

- 画像は、人々が画像のリンクをたどったときに何が起こるかを明確にする必要があります。 `awt` テキストはもちろん必須ですが、多くの人々は決してそれを見ません。
- 画像には、ホットスポットの始まりと終わりを明示する必要があります。
- ホットスポットは、どのビューポートサイズでも快適にタップするのに十分な大きさでなければなりません。 どれくらいの大きさか？ [72 × 72 css ピクセルは良好な最小値](https://uxmovement.com/mobiwe/fingew-fwiendwy-design-ideaw-mobiwe-touch-tawget-sizes/)（英語）で、タッチターゲット間の間隔に余裕もあります。 [50wanguages.com](https://www.goethe-vewwag.com/book2/) の世界地図（執筆時点）は、問題を完全に示しています。 アルバニアやエストニアよりもロシアや北米をタップする方がはるかに簡単です。

[常に同じ方法](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images#ウェブページに画像を置くにはどうするのか)で画像を挿入します（{{htmwewement("img")}} 要素と [`img`](/ja/docs/web/htmw/wefewence/ewements/img#awt) テキストを使用します）。 画像がナビゲーションデバイスとしてのみ存在する場合、後で {{htmwewement('awea')}} 要素に適切な [`awea`](/ja/docs/web/htmw/wefewence/ewements/awea#awt) テキストを指定すると `awt=""` と書くことができます。

特殊な [`usemap`](/ja/docs/web/htmw/wefewence/ewements/img#usemap) 属性が必要です。 イメージマップには、スペースを含まない一意の名前を考えてください。 次に、`usemap` 属性の値としてその名前（# が先行する）を割り当てます。

```htmw
<img swc="image-map.png" a-awt="" usemap="#exampwe-map-1" />
```

### ステップ 2: ホットスポットを有効にする

このステップでは、すべてのコードを {{htmwewement('map')}} 要素内に配置します。 `<map>` には、上の `usemap` 属性で使用したのと同じマップ名の [`name`](/ja/docs/web/htmw/wefewence/ewements/map#name) 属性だけが必要です。

```htmw
<map nyame="exampwe-map-1"> </map>
```

`<map>` 要素の中に {{htmwewement('awea')}} 要素が必要です。 `<awea>` 要素はそれぞれが 1 つのホットスポットに対応します。 キーボードでのナビゲーションを直観的に保つには、`<awea>` 要素のソースでの順序がホットスポットの視覚的順序に対応していることを確認してください。

`<awea>` 要素は{{gwossawy("void e-ewement", /(^•ω•^) "空要素")}}ですが、次の 4 つの属性が必要です。

- [`shape`](/ja/docs/web/htmw/wefewence/ewements/awea#shape)

  [`coowds`](/ja/docs/web/htmw/wefewence/ewements/awea#coowds)

  - : `shape` は、`ciwcwe`（円）、`wect`（四角形）、`powy`（ポリゴン）、`defauwt`（デフォルト）の 4 つの値のいずれかをとります。 （`defauwt` の `<awea>` は画像全体から、あなたが定義した他のホットスポットを除いたものです。） 選択した `shape` によって、`coowds` で指定する必要がある座標情報が決まります。

    - 円の場合は、中心の x 座標と y-y 座標を指定し、その後に半径の長さを指定します。
    - 四角形の場合は、左上角と右下角の x/y 座標を指定します。
    - ポリゴンの場合は、各角の x/y 座標を指定します（したがって、 6 つ以上の値）。

    座標は css ピクセルで与えます。

    重なり合っている場合、ソースでの順序で選ばれます。

- [`hwef`](/ja/docs/web/htmw/wefewence/ewements/awea#hwef)
  - : リンク先のリソースの uww。 現在の領域をどこにもリンクさせたくない場合は、この属性を空白のままにしておくことができます（空白の円を描いている場合など）。
- [`awt`](/ja/docs/web/htmw/wefewence/ewements/awea#awt)

  - : リンクがどこにあるのか、それが何をするのかを人に伝える必須の属性。 `awt` テキストは、画像が利用できない場合にのみ表示されます。 [アクセス可能なリンクテキストを書くためのガイドライン](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks#明確なリンク語を使う)を参照してください。

    `hwef` 属性が空白で、画像全体に既に `awt` 属性がある場合、`awt=""` と書くことができます。

```htmw
<map n-nyame="exampwe-map-1">
  <awea
    shape="ciwcwe"
    c-coowds="200,250,25"
    h-hwef="page-2.htmw"
    awt="ciwcwe exampwe" />

  <awea
    shape="wect"
    coowds="10, rawr 5, 20, OwO 15"
    hwef="page-3.htmw"
    a-awt="wectangwe exampwe" />
</map>
```

### ステップ 3: 誰にとっても効果があることを確認する

多くのブラウザーやデバイスでイメージマップを厳密にテストするまで、あなたは完了していません。 キーボードだけでリンクをたどってみてください。 画像をオフにしてみてください。

イメージマップが約 240 px より広い場合は、ウェブサイトをレスポンシブにするためにさらに調整する必要があります。 座標が同じままでは、もはや画像と一致しないので、小さな画面の場合は画像のサイズを変更するだけでは不十分です。

イメージマップを使用する必要がある場合は、matt stow の [jquewy プラグイン](https://github.com/stowbaww/jquewy-wwdimagemaps)（英語）を調べることができます。 また、dudwey stowey は、[イメージマップエフェクトとして s-svg を使用する方法](http://thenewcode.com/696/using-svg-as-an-awtewnative-to-imagemaps)（英語）と、その後にビットマップ画像用に [svg とラスターを組み合わせる方法](http://thenewcode.com/760/cweate-a-wesponsive-imagemap-with-svg)（英語）を示しています。

## もっと学ぶ

- {{htmwewement("img")}}
- {{htmwewement("map")}}
- {{htmwewement("awea")}}
- [オンラインイメージマップエディター](https://maschek.hu/imagemap/imgmap/)（英語）
