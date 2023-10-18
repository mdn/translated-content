---
title: 重ね合わせコンテキスト
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context
---

{{CSSRef}}

**重ね合わせコンテキスト** (Stacking context) は、ビューポートまたはウェブページに面していると想定されるユーザーに対する仮想的な Z 軸に沿って並べられた HTML 要素の三次元の概念化です。 HTML 要素は、要素の属性に基づいてこの空間を優先度つきの順序で占有します。

## 重ね合わせコンテキスト

この記事の前の部分である [z-index の使用](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index)では、ある要素の描画順はそれらの `z-index` の値に影響を受けていました。これは、要素が*重ね合わせコンテキスト*を生じさせる特別なプロパティを持っていたからです。

重ね合わせコンテキストは以下のような場面で、文書の随所に様々な要素によって構成されます。

- 文書のルート要素 (`<html>`)
- {{cssxref("position")}} の値が `absolute` または `relative` であり、かつ {{cssxref("z-index")}} の値が `auto` 以外の要素
- {{cssxref("position")}} の値が `fixed` または `sticky` の要素 (sticky はすべてのモバイルブラウザーにありますが、古いデスクトップブラウザーにはありません)。
- [フレックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)コンテナーの子であり、 {{cssxref("z-index")}} の値が `auto` 以外の要素。
- グリッド ({{cssxref("grid")}}) コンテナーの子であり、 {{cssxref("z-index")}} の値が `auto` 以外の要素。
- {{cssxref("opacity")}} の値が `1` 未満である要素 ([不透明度の仕様](https://www.w3.org/TR/css3-color/#transparency)をご覧ください)。
- {{cssxref("mix-blend-mode")}} の値が `normal` 以外の要素。
- 以下のプロパティの何れかが `none` 以外の値を持つ要素。

  - {{cssxref("transform")}}
  - {{cssxref("filter")}}
  - {{cssxref("perspective")}}
  - {{cssxref("clip-path")}}
  - {{cssxref("mask")}} / {{cssxref("mask-image")}} / {{cssxref("mask-border")}}

- {{cssxref("isolation")}} の値が `isolate` である要素。
- {{cssxref("-webkit-overflow-scrolling")}} の値が `touch` である要素。
- {{cssxref("will-change")}} の値が、初期値以外で重ね合わせコンテキストを作成する任意のプロパティを指定している要素 ([この記事](https://dev.opera.com/articles/ja/css-will-change-property/)を参照)。
- {{cssxref("contain")}} の値が `layout` または `paint` であるか、これらのどちらかを含む複合値 (すなわち `contain: strict`, `contain: content`) を持つ要素。

重ね合わせコンテキストの内部で、子要素は前に説明した規則に従って重ね合わせられます。重要なのは、子要素の `z-index` 値は、その親要素に対してのみ意味を持つということです。重ね合わせコンテキストは、その親の重ね合わせコンテキストでは不可分な一つの固まりとして扱われます。

まとめると、

- 重ね合わせコンテキストは他の重ね合わせコンテキストに含めることができ、その結果重ね合わせコンテキストの階層構造ができます。
- 重ね合わせコンテキストはすべて、その兄弟要素と完全に独立しています。重ね合わせ処理では、子孫要素だけが考慮されます。
- 重ね合わせコンテキストははめ込み式です。要素の中身が重ねられた後、その要素がまるごと、今度は親の重ね合わせコンテキストの重ね合わせ順の中にあるとみなされます。

> **メモ:** 重ね合わせコンテキストを作れるのが一部の要素に限定されるため、重ね合わせコンテキストは HTML 要素の階層構造の部分集合です。それ自身の重ね合わせコンテキストを作らない要素は、その親の重ね合わせコンテキストに*同化される*、と言えます。

## 例

![z-index を用いた重ね合わせ規則の変更例](understanding_zindex_04.png)

この例では、配置要素はすべて、位置と `z-index` の値によって、それ自身の重ね合わせコンテキストを作ります。重ね合わせコンテキストの階層構造が、次のように構成されます。

- ルート要素

  - DIV #1
  - DIV #2
  - DIV #3

    - DIV #4
    - DIV #5
    - DIV #6

重要なのは、 DIV #4, DIV #5, DIV #6 は DIV #3 の子要素なので、DIV #3 の内側で重なり方が完全に決まることです。いったん DIV #3 内部の重ね合わせと描画が終われば、DIV #3 はルート要素に丸ごと渡され、兄弟要素との重ね合わせ処理が行われます。

> **メモ:**
>
> - DIV #4 は DIV #1 の下に描画されます。これは、DIV #1 の z-index (5) はルート要素の重ね合わせコンテキストでだけ有効な値で、DIV #4 の z-index (6) は DIV #3 の重ね合わせコンテキストでだけ有効な値だからです。DIV #4 は DIV #3 の内部にあり、DIV #3 は DIV #1 よりも小さな z-index 値を持っているので、DIV #4 は DIV #1 の下になります。
> - 同じ理由で DIV #2 (z-index 2) は DIV #5 (z-index 1) の下に描画されます。これは DIV #5 が DIV #3 に含まれていて、DIV #3は DIV #2 より高い z-index 値を持っているからです。
> - DIV #3 の z-index は 4 ですが、この値は DIV #4、DIV #5、DIV #6 の z-index とは独立しています。異なる重ね合わせコンテキストに含まれるためです。
> - Z軸方向に重なった要素の<em>描画順序</em>の簡単な計算方法は、それがバージョン番号のようなものを持っていると考えることです。親要素のメジャーバージョン番号の下に、子要素のマイナーバージョン番号があるものとします。この方法で、 z-index 1 を持つ要素 (DIV #5) がどうやって z-index 2 を持つ要素 (DIV #2) の上になるのか、そして、 z-index 6 を持つ要素 (DIV #4) がどうやって z-index 5 を持つ要素 (DIV #1) の下になるのか、簡単にわかります。用意した例では次のようになります (以下は最終的な描画順に並べています)。
>
>   - ルート要素
>
>     - DIV #2 - z-index は 2
>     - DIV #3 - z-index は 4
>
>       - DIV #5 - z-index は 1、描画順は 4.1 なので、 z-index が 4 である要素の下に重なる
>       - DIV #6 - z-index は 3、描画順は 4.3 なので、 z-index が 4 である要素の下に重なる
>       - DIV #4 - z-index は 6、描画順は 4.6 なので、 z-index が 4 である要素の下に重なる
>
>     - DIV #1 - z-index は 5

<h2 id="Example">例</h2>

### HTML

```html
<div id="div1">
  <h1>Division Element #1</h1>
  <code
    >position: relative;<br />
    z-index: 5;</code
  >
</div>

<div id="div2">
  <h1>Division Element #2</h1>
  <code
    >position: relative;<br />
    z-index: 2;</code
  >
</div>

<div id="div3">
  <div id="div4">
    <h1>Division Element #4</h1>
    <code
      >position: relative;<br />
      z-index: 6;</code
    >
  </div>

  <h1>Division Element #3</h1>
  <code
    >position: absolute;<br />
    z-index: 4;</code
  >

  <div id="div5">
    <h1>Division Element #5</h1>
    <code
      >position: relative;<br />
      z-index: 1;</code
    >
  </div>

  <div id="div6">
    <h1>Division Element #6</h1>
    <code
      >position: absolute;<br />
      z-index: 3;</code
    >
  </div>
</div>
```

### CSS

```css
* {
  margin: 0;
}
html {
  padding: 20px;
  font:
    12px/20px Arial,
    sans-serif;
}
div {
  opacity: 0.7;
  position: relative;
}
h1 {
  font: inherit;
  font-weight: bold;
}
#div1,
#div2 {
  border: 1px dashed #696;
  padding: 10px;
  background-color: #cfc;
}
#div1 {
  z-index: 5;
  margin-bottom: 190px;
}
#div2 {
  z-index: 2;
}
#div3 {
  z-index: 4;
  opacity: 1;
  position: absolute;
  top: 40px;
  left: 180px;
  width: 330px;
  border: 1px dashed #900;
  background-color: #fdd;
  padding: 40px 20px 20px;
}
#div4,
#div5 {
  border: 1px dashed #996;
  background-color: #ffc;
}
#div4 {
  z-index: 6;
  margin-bottom: 15px;
  padding: 25px 10px 5px;
}
#div5 {
  z-index: 1;
  margin-top: 15px;
  padding: 5px 10px;
}
#div6 {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 180px;
  width: 150px;
  height: 125px;
  border: 1px dashed #009;
  padding-top: 125px;
  background-color: #ddf;
  text-align: center;
}
```

### 結果

{{ EmbedLiveSample('Example', '100%', '396') }}

## 関連情報

- [z-index なしの重ね合わせ](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index): 既定の重ね合わせ規則
- [浮動ブロックの重ね合わせ](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float): 浮動要素が重ね合わせでどのように扱われるか
- [z-index の使用](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): z-index を使って既定の重ね合わせ変更する方法
- [重ね合わせコンテキストの例 1](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2 階層の HTML 構造で、最終階層の z-index
- [重ね合わせコンテキストの例 2](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2): 2 階層の HTML 構造、全レベルの z-index
- [重ね合わせコンテキストの例 3](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3): 3 階層の HTML 構造、第 2 階層の z-index
