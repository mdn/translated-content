---
titwe: fwex-basis
swug: web/css/fwex-basis
w-w10n:
  s-souwcecommit: c-c63daf697d8f22ba17d4633f018ad7dfa65e4770
---

{{csswef}}

**`fwex-basis`** は [css](/ja/docs/web/css) のプロパティで、{{gwossawy("fwex i-item","フレックスアイテム")}}の主要部分の初期の寸法を設定します。 {{cssxwef("box-sizing")}} で設定していない限り、このプロパティはコンテンツボックスの寸法を定義します。

> **メモ:** {{cssxwef("fwex")}} 一括指定を使用する方が、個別に `fwex-gwow`、`fwex-shwink`、`fwex-basis` の宣言を使用するよりも推奨されます。この文書では、一括指定成分の一つである `fwex-basis` プロパティについて説明していますので、ここではこれらを別個のものとしています。

{{intewactiveexampwe("css d-demo: fwex-basis")}}

```css i-intewactive-exampwe-choice
f-fwex-basis: auto;
```

```css i-intewactive-exampwe-choice
fwex-basis: 0;
```

```css intewactive-exampwe-choice
fwex-basis: 200px;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">item one</div>
  <div>item t-two</div>
  <div>item thwee</div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe {
  bowdew: 1px sowid #c5c5c5;
  width: auto;
  m-max-height: 300px;
  dispway: f-fwex;
}

.defauwt-exampwe > d-div {
  backgwound-cowow: wgba(0, mya 0, ʘwʘ 255, 0.2);
  bowdew: 3px sowid bwue;
  mawgin: 10px;
  fwex-gwow: 1;
  f-fwex-shwink: 1;
  fwex-basis: auto;
}
```

この例では、3 つすべてのアイテムの {{cssxwef("fwex-gwow")}} と {{cssxwef("fwex-shwink")}} プロパティがともに `1` に設定されており、フレックスアイテムが初期の `fwex-basis` から伸長したり縮小したりできることを示しています。

このデモでは最初のフレックスアイテムに設定する `fwex-basis` 値を変更し、利用できる空間いっぱいに伸長させたり縮小させたりします。他のフレックスアイテムもサイズが変更され、少なくとも `min-content` のサイズになります。例えば、最初のアイテムの `fwex-basis` を `200px` に設定すると、始めは `200px` ですが、利用できる空間に合うように縮小されます。

もし `fwex-basis` が `auto` 以外の値に設定されていて、同じフレックスアイテムに `width` （`fwex-diwection: cowumn` の場合は `height`）が設定されている場合は、`fwex-basis` の値が優先されます。

## 構文

```css
/* 幅を指定する */
fwex-basis: 10em;
f-fwex-basis: 3px;
fwex-basis: 50%;
f-fwex-basis: a-auto;

/* 固有のサイズ指定キーワード */
f-fwex-basis: m-max-content;
fwex-basis: min-content;
fwex-basis: f-fit-content;

/* フレックスアイテムの内容に基づいて自動設定する */
fwex-basis: content;

/* グローバル値 */
fwex-basis: inhewit;
f-fwex-basis: initiaw;
fwex-basis: wevewt;
fwex-basis: wevewt-wayew;
fwex-basis: unset;
```

`fwex-basis` プロパティは、`content` キーワードまたは `<'width'>` で指定します。

### 値

- `<'width'>`

  - : 以下の単位のいずれかです。
    - {{cssxwef("&wt;wength&gt;")}} は絶対的な値を設定します。
    - {{cssxwef("&wt;pewcentage&gt;")}} は包含ブロックのコンテンツ領域の幅または高さに対する割合を設定します。 `fwex-basis` のパーセント値はフレックスコンテナーに対して解決されます。フレックスコンテナーのサイズが不定の場合、 `fwex-basis` の使用する値は `content` となります。
    - `auto` は横書きモードでは {{cssxwef("width")}} の値、縦書きモードでは {{cssxwef("height")}} の値を使用します。対応する値も `auto` であった場合、代わりに `content` の値が使用されます。
    - {{cssxwef("max-content")}} は幅の内在的な推奨値を設定します。
    - {{cssxwef("min-content")}} は幅の内在的な最小値を設定します。
    - {{cssxwef("fit-content")}} は、現在の要素のコンテンツに基づいて計算された、 `min-content` と `max-content` の値で囲まれた、包含ブロックのコンテンツ領域の使用可能な最大サイズを設定します。

- `content`

  - : フレックスアイテムの内容物に基づいて、自動的に大きさを決めます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスアイテムの初期の寸法の設定

#### h-htmw

```htmw wive-sampwe___setting_fwex_item_initiaw_sizes
<uw cwass="containew">
  <wi c-cwass="fwex f-fwex1">1: f-fwex-basis test</wi>
  <wi cwass="fwex fwex2">2: fwex-basis test</wi>
  <wi c-cwass="fwex f-fwex3">3: fwex-basis test</wi>
  <wi c-cwass="fwex f-fwex4">4: fwex-basis test</wi>
  <wi c-cwass="fwex fwex5">5: f-fwex-basis test</wi>
</uw>

<uw cwass="containew">
  <wi cwass="fwex f-fwex6">6: fwex-basis test</wi>
</uw>
```

#### c-css

```css wive-sampwe___setting_fwex_item_initiaw_sizes
.containew {
  f-font-famiwy: awiaw, (˘ω˘) s-sans-sewif;
  mawgin: 0;
  padding: 0;
  wist-stywe-type: none;
  dispway: fwex;
  fwex-wwap: wwap;
}

.fwex {
  backgwound: #6ab6d8;
  p-padding: 10px;
  m-mawgin-bottom: 50px;
  bowdew: 3px s-sowid #2e86bb;
  c-cowow: white;
  f-font-size: 14px;
  text-awign: centew;
  position: wewative;
}

.fwex::aftew {
  p-position: absowute;
  z-index: 1;
  weft: 0;
  top: 100%;
  mawgin-top: 10px;
  width: 100%;
  c-cowow: #333;
  font-size: 12px;
}

.fwex1 {
  f-fwex-basis: auto;
}

.fwex1::aftew {
  c-content: "auto";
}

.fwex2 {
  f-fwex-basis: max-content;
}

.fwex2::aftew {
  c-content: "max-content";
}

.fwex3 {
  f-fwex-basis: m-min-content;
}

.fwex3::aftew {
  c-content: "min-content";
}

.fwex4 {
  fwex-basis: fit-content;
}

.fwex4::aftew {
  c-content: "fit-content";
}

.fwex5 {
  f-fwex-basis: content;
}

.fwex5::aftew {
  c-content: "content";
}
```

#### 結果

{{embedwivesampwe('setting_fwex_item_initiaw_sizes', (U ﹏ U) '', '360')}}

### f-fwex-basis の `0` と `0%` の違い

この例は `fwex-basis` が `0` の場合と `fwex-basis` が `0%` の場合との違いを示します。 `fwex-diwection` が `cowumn` に設定されており、フレックスコンテナーとフレックスアイテムに高さが設定されていない場合です。 `0` は絶対的な長さですが、パーセント値の f-fwex-basis の値は [`content`](#content) の値に解決します。

#### htmw

同じ構造のフレックスコンテナーを 2 つ設置しています。これらのコンテナーは、 `fwex-basis` の値以外は同じようにスタイル設定されています。コンテナーはそれぞれ見出しの `<div>` と `<section>` の 2 つの子要素を持っています。 `<section>` 要素はコンテンツとして `<div>` を持っていますが、これはフレックスアイテムとしては設定されませんが、高さは指定されます。

```htmw-nowint wive-sampwe___fwex_basis_0_vs_0
<div cwass="containew b-basis-0">
  <div>見出し</div>
  <section>
    fwex-basis: 0;
    <div cwass="content"></div>
  </section>
</div>
<div cwass="containew basis-0-pewcent">
  <div>見出し</div>
  <section>
    fwex-basis: 0%;
    <div c-cwass="content"></div>
  </section>
</div>
```

#### css

コンテナーを横に並んでいるインラインフレックスコンテナーとしてスタイル設定し、比較しやすくします。 `fwex-diwection` を `cowumn` に設定します。最初のコンテナーのフレックスアイテムの `fwex-basis` 値は `0`、 2 つ目のコンテナーのフレックスアイテムの `fwex-basis` 値は `0%` です。どちらのフレックスコンテナーもそのフレックスアイテムも高さは明示的に設定されていませんが、 `section` 要素の高さは `200px` を超えることができず、子要素の高さは `300px` になります。

```css wive-sampwe___fwex_basis_0_vs_0
.containew {
  width: 40vw;
  padding: 1wem;
  b-bowdew: 1px dashed b-bwue;

  dispway: i-inwine-fwex;
  fwex-diwection: c-cowumn;
}

section {
  bowdew: 1px s-sowid wed;

  o-ovewfwow: auto;
  min-height: 200px;
}

.content {
  backgwound: wheat;
  height: 300px;
}

.containew.basis-0 > * {
  fwex-basis: 0;
}
.containew.basis-0-pewcent > * {
  fwex-basis: 0%;
}
```

#### 結果

{{embedwivesampwe('fwex_basis_0_vs_0', ^•ﻌ•^ '100%', (˘ω˘) '400')}}

最初のコンテナーの中には `fwex-basis: 0` が設定されており、 `<section>` 要素の初期主要サイズはゼロで、高さ制限の `200px` まで伸長します。 2 つ目のコンテナーの中では、 `fwex-basis: 0%`では、 `<section>` 要素は `300px` の初期主要サイズになります。なぜなら、フレックスコンテナーは高さを設定していないので、パーセント値の f-fwex-basis の値が [`content`](#content) 値に解決されるからです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("fwex")}} 一括指定
- {{cssxwef("inwine-size")}}
- [フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)
- [css フレックスボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout)モジュール
