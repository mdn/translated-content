---
title: "レシピ: メディアオブジェクト"
slug: Web/CSS/Layout_cookbook/Media_objects
---

{{CSSRef}}

*メディアオブジェクト*は、ウェブ上のいたるところで見られるパターンです。 [Nicole Sullivan によって命名](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/)され、一方の側に画像を、そして他方の側に説明的なテキストを有する Facebook の投稿やツイートのような 2 列のボックスを指します。

![](media-object.png)

## 要件

メディアオブジェクトのパターンには、次の特性の一部または全部が必要です。

- モバイルでは積み重ね、デスクトップでは 2 列です。
- 画像は左右どちらでもかまいません。
- 画像は小さい場合も大きい場合もあります。
- メディアオブジェクトはネストできます。
- メディアオブジェクトは、どちら側が高いかに関係なく、コンテンツをクリアする（区切る）必要があります。

## レシピ

{{EmbedGHLiveSample("css-examples/css-cookbook/media-objects.html", '100%', 2700)}}

> **注目:**
>
> [この例をダウンロードする](https://github.com/mdn/css-examples/blob/master/css-cookbook/media-objects--download.html)

## 行った選択

必要に応じて 2 次元でレイアウトを制御できるようにするため、メディアオブジェクトに[グリッドレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout)を使用することを選択しました。 つまり、フッターがあり、その上に短いコンテンツがある場合、そのフッターはそのメディアオブジェクトの下部にまで押し下げられます。

グリッドレイアウトを使用するもう 1 つの理由は、画像のトラックのサイズ変更に {{cssxref("fit-content")}} を使用できるようにするためです。 最大サイズが 200 ピクセルの `fit-content` を使用すると、アイコンのような小さい画像がある場合、トラックはその画像のサイズ、つまり `max-content` のサイズと同じサイズになります。 画像が大きい場合、トラックは 200 ピクセルで拡大しなくなり、画像には 100% の {{cssxref("max-width")}} が適用されるため、列の内側に収まるように縮小されます。

レイアウトを実現するために {{cssxref("grid-template-areas")}} を使用することで、CSS でこのパターンを見ることができます。 max-width が 500 ピクセルになった時点でグリッドを定義しているので、小さな端末ではメディアオブジェクトが積み重なります。

パターンのオプションに、反転して反対側に切り替えるというものがあります。 — これはレイアウトを反映させる反転グリッドテンプレートを定義する `media-flip` クラスを追加することによって行われます。

あるメディアオブジェクトを別のメディアオブジェクトの中に入れ子にするときは、通常のレイアウトでは 2 番目のトラックに、反転したときは最初のトラックに配置する必要があります。

## 代替策

このパターンには、対応するブラウザーによって、いくつかの代替策が考えられます。良い万能策としては、画像を左に浮動させ、ボックスに clearfix を追加して、浮動が確実に収まるようにすることです。

{{EmbedGHLiveSample("css-examples/css-cookbook/media-objects-fallback.html", '100%', 3000)}}

> **注目:**
>
> [この例をダウンロード](https://github.com/mdn/css-examples/blob/master/css-cookbook/media-objects-fallback--download.html)

浮動要素がグリッドアイテムになると、その float が適用されなくなるため、浮動要素を除去するために特別なことをする必要はありません。

やらなければならないことは、アイテムに適用されているすべてのマージンと、グリッドのコンテキストで必要としていないすべての幅を取り除くことです（グリッドでそれを制御するための {{cssxref("gap")}} プロパティがあり、トラックがサイズを制御します）。

## MDN の関連資料

- [CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout)
- [プログレッシブエンハンスメントとグリッドレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [グリッドテンプレート領域の使用](/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [fit-content](/ja/docs/Web/CSS/fit-content)
- [grid-template-areas](/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)

## ブラウザーの互換性

レイアウト方法によってブラウザーの対応状況が異なります。使用しているプロパティの基本的な対応の詳細については、以下の表を参照してください。

#### grid-template-areas

{{Compat("css.properties.grid-template-areas")}}

#### float

{{Compat("css.properties.float")}}
