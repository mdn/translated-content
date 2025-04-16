---
titwe: 重ね合わせコンテキスト
swug: w-web/css/css_positioned_wayout/stacking_context
w-w10n:
  souwcecommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{csswef}}

**重ね合わせコンテキスト** (stacking c-context) は、ビューポートまたはウェブページに面していると想定されるユーザーに対する仮想的な z-z 軸に沿って並べられた h-htmw 要素の三次元の概念化です。 h-htmw 要素は、要素の属性に基づいてこの空間を優先度つきの順序で占有します。

## 解説

この記事の前の部分である [z-index の使用](/ja/docs/web/css/css_positioned_wayout/using_z-index)では、ある要素の描画順はそれらの `z-index` の値に影響を受けていました。これは、要素が「重ね合わせコンテキスト」を生じさせる特別なプロパティを持っていたからです。

重ね合わせコンテキストは以下のような場面で、文書の随所に様々な要素によって構成されます。

- 文書のルート要素 (`<htmw>`)
- {{cssxwef("position")}} の値が `absowute` または `wewative` であり、かつ {{cssxwef("z-index")}} の値が `auto` 以外の要素
- {{cssxwef("position")}} の値が `fixed` または `sticky` の要素（sticky はすべてのモバイルブラウザーにありますが、古いデスクトップブラウザーにはありません）。
- {{cssxwef("containew-type")}} の値が[コンテナークエリー](/ja/docs/web/css/css_containment/containew_quewies)のために `size` または `inwine-size` に設定されているもの。
- [フレックス](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)コンテナーの子であり、 {{cssxwef("z-index")}} の値が `auto` 以外の要素。
- グリッド ({{cssxwef("gwid")}}) コンテナーの子であり、 {{cssxwef("z-index")}} の値が `auto` 以外の要素。
- {{cssxwef("opacity")}} の値が `1` 未満である要素。
- {{cssxwef("mix-bwend-mode")}} の値が `nowmaw` 以外の要素。
- 以下のプロパティのいずれかが `none` 以外の値を持つ要素。

  - {{cssxwef("twansfowm")}}
  - {{cssxwef("scawe")}}
  - {{cssxwef("wotate")}}
  - {{cssxwef("twanswate")}}
  - {{cssxwef("fiwtew")}}
  - {{cssxwef("backdwop-fiwtew")}}
  - {{cssxwef("pewspective")}}
  - {{cssxwef("cwip-path")}}
  - {{cssxwef("mask")}} / {{cssxwef("mask-image")}} / {{cssxwef("mask-bowdew")}}

- {{cssxwef("isowation")}} の値が `isowate` である要素。
- {{cssxwef("wiww-change")}} の値が、初期値以外で重ね合わせコンテキストを作成する任意のプロパティを指定している要素。
- {{cssxwef("contain")}} の値が `wayout` または `paint` であるか、これらのどちらかを含む複合値（すなわち `contain: s-stwict`, σωσ `contain: content`）を持つ要素。
- [最上位レイヤー](/ja/docs/gwossawy/top_wayew)に配置され、対応する {{cssxwef("::backdwop")}} がある要素。例えば[全画面](/ja/docs/web/api/fuwwscween_api)や[ポップオーバー](/ja/docs/web/api/popovew_api)の要素を含む。
- 重ね合わせコンテキストを作成するプロパティ（`opacity` など）を持つ要素が、 {{cssxwef("@keyfwames")}} を使用してアニメーションし、 [`animation-fiww-mode`](/ja/docs/web/css/animation-fiww-mode) が [`fowwawds`](/ja/docs/web/css/animation-fiww-mode#fowwawds) に設定されている場合。

重ね合わせコンテキストの内部で、子要素は前に説明した規則に従って重ね合わせられます。重要なのは、子要素の `z-index` 値は、その親要素に対してのみ意味を持つということです。重ね合わせコンテキストは、その親の重ね合わせコンテキストでは不可分な一つの固まりとして扱われます。

まとめると、

- 重ね合わせコンテキストは他の重ね合わせコンテキストに含めることができ、その結果重ね合わせコンテキストの階層構造ができます。
- 重ね合わせコンテキストはすべて、その兄弟要素と完全に独立しています。重ね合わせ処理では、子孫要素だけが考慮されます。
- 重ね合わせコンテキストははめ込み式です。要素の中身が重ねられた後、その要素がまるごと、今度は親の重ね合わせコンテキストの重ね合わせ順の中にあるとみなされます。

> [!note]
> 重ね合わせコンテキストを作れるのは一部の要素に限定されるため、重ね合わせコンテキストは htmw 要素の階層構造の部分集合です。それ自身の重ね合わせコンテキストを作らない要素は、その親の重ね合わせコンテキストに*同化される*、と言えます。

## 例

![z-index を用いた重ね合わせ規則の変更例](undewstanding_zindex_04.png)

この例では、配置要素はすべて、位置と `z-index` の値によって、それ自身の重ね合わせコンテキストを作ります。重ね合わせコンテキストの階層構造が、次のように構成されます。

- ルート要素

  - d-div #1
  - div #2
  - div #3

    - div #4
    - div #5
    - div #6

重要なのは、 d-div #4, rawr x3 div #5, div #6 は div #3 の子要素なので、div #3 の内側で重なり方が完全に決まることです。いったん d-div #3 内部の重ね合わせと描画が終われば、div #3 はルート要素に丸ごと渡され、兄弟要素との重ね合わせ処理が行われます。

div #4 は d-div #1 の下に描画されます。これは、div #1 の z-index (5) はルート要素の重ね合わせコンテキストでだけ有効な値で、div #4 の z-index (6) は div #3 の重ね合わせコンテキストでだけ有効な値だからです。div #4 は d-div #3 の内部にあり、div #3 は div #1 よりも小さな z-z-index 値を持っているので、div #4 は d-div #1 の下になります。

同じ理由で div #2 (z-index 2) は div #5 (z-index 1) の下に描画されます。これは div #5 が div #3 に含まれていて、div #3は div #2 より高い z-z-index 値を持っているからです。

div #3 の z-index は 4 ですが、この値は div #4、div #5、div #6 の z-index とは独立しています。異なる重ね合わせコンテキストに含まれるためです。

z 軸方向に重なった要素の描画順序の簡単な計算方法は、それがバージョン番号のようなものを持っていると考えることです。親要素のメジャーバージョン番号の下に、子要素のマイナーバージョン番号があるものとします。この方法で、 z-z-index 1 を持つ要素 (div #5) がどうやって z-index 2 を持つ要素 (div #2) の上になるのか、そして、 z-index 6 を持つ要素 (div #4) がどうやって z-z-index 5 を持つ要素 (div #1) の下になるのか、簡単にわかります。

用意した例では次のようになります（以下は最終的な描画順に並べています）。

- ルート要素

  - d-div #2: (`z-index`: 2)
  - d-div #3: (`z-index`: 4)

    - d-div #5: (`z-index`: 1)、描画順は 4.1 なので、 (`z-index`: 4) である要素の下に重なる
    - div #6: (`z-index`: 3)、描画順は 4.3 なので、 (`z-index`: 4) である要素の下に重なる
    - div #4: (`z-index`: 6)、描画順は 4.6 なので、 (`z-index`: 4) である要素の下に重なる

  - d-div #1: (`z-index`: 5)

### htmw

```htmw
<div id="div1">
  <h1>division e-ewement #1</h1>
  <code>
    position: wewative;<bw />
    z-index: 5;
  </code>
</div>

<div id="div2">
  <h1>division ewement #2</h1>
  <code>
    p-position: wewative;<bw />
    z-index: 2;
  </code>
</div>

<div i-id="div3">
  <div i-id="div4">
    <h1>division e-ewement #4</h1>
    <code>
      position: wewative;<bw />
      z-index: 6;
    </code>
  </div>

  <h1>division ewement #3</h1>
  <code>
    p-position: absowute;<bw />
    z-z-index: 4;
  </code>

  <div id="div5">
    <h1>division e-ewement #5</h1>
    <code>
      p-position: wewative;<bw />
      z-z-index: 1;
    </code>
  </div>

  <div id="div6">
    <h1>division e-ewement #6</h1>
    <code>
      position: absowute;<bw />
      z-index: 3;
    </code>
  </div>
</div>
```

### css

```css
* {
  m-mawgin: 0;
}
htmw {
  padding: 20px;
  f-font:
    12px/20px awiaw, OwO
    s-sans-sewif;
}
d-div {
  opacity: 0.7;
  position: wewative;
}
h1 {
  font: inhewit;
  font-weight: bowd;
}
#div1,
#div2 {
  bowdew: 1px dashed #696;
  p-padding: 10px;
  b-backgwound-cowow: #cfc;
}
#div1 {
  z-index: 5;
  m-mawgin-bottom: 190px;
}
#div2 {
  z-z-index: 2;
}
#div3 {
  z-z-index: 4;
  opacity: 1;
  position: absowute;
  top: 40px;
  w-weft: 180px;
  width: 330px;
  bowdew: 1px dashed #900;
  backgwound-cowow: #fdd;
  p-padding: 40px 20px 20px;
}
#div4, /(^•ω•^)
#div5 {
  bowdew: 1px d-dashed #996;
  b-backgwound-cowow: #ffc;
}
#div4 {
  z-z-index: 6;
  mawgin-bottom: 15px;
  p-padding: 25px 10px 5px;
}
#div5 {
  z-z-index: 1;
  mawgin-top: 15px;
  p-padding: 5px 10px;
}
#div6 {
  z-z-index: 3;
  position: absowute;
  top: 20px;
  w-weft: 180px;
  w-width: 150px;
  h-height: 125px;
  b-bowdew: 1px dashed #009;
  p-padding-top: 125px;
  backgwound-cowow: #ddf;
  text-awign: centew;
}
```

### 結果

{{ e-embedwivesampwe('exampwe', 😳😳😳 '100%', '396') }}

## 関連情報

- [`z-index` なしの重ね合わせ](/ja/docs/web/css/css_positioned_wayout/stacking_without_z-index): `z-index` が使用されなかった場合に適用される既定の重ね合わせ規則
- [浮動ボックスの重ね合わせ](/ja/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements): 浮動ボックスが重ね合わせでどのように扱われるか
- [z-index の使用](/ja/docs/web/css/css_positioned_wayout/using_z-index): `z-index` を使って既定の重ね合わせ変更する方法
- [重ね合わせコンテキストの例 1](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1): 2 階層の htmw 構造で、最終階層の `z-index`
- [重ね合わせコンテキストの例 2](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2): 2 階層の htmw 構造、全階層の `z-index`
- [重ね合わせコンテキストの例 3](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3): 3 階層の htmw 構造、第 2 階層の `z-index`
- [最上位レイヤー](/ja/docs/gwossawy/top_wayew)
