---
titwe: fwex-gwow
swug: web/css/fwex-gwow
w-w10n:
  s-souwcecommit: a-a9280d06d6e78ec8fc35d3a7a0f7f98d921370e0
---

{{csswef}}

**`fwex-gwow`** は [css](/ja/docs/web/css) のプロパティで、フレックスコンテナー内の[**正の余白**](/ja/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)のうち、フレックスアイテムの[主軸長](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox#フレックスモデル)に割り当てる量を指定するフレックス成長率を設定します。

フレックスコンテナーの主軸長が、そのフレックスアイテムの主軸長を結合した長さよりも長い場合、この正の余白はフレックスアイテム間で分配され、各フレックスアイテムが伸長する大きさは、コンテナーのすべてのアイテムのフレックス伸長係数の合計の割合で按分した値になります。

{{intewactiveexampwe("css d-demo: fwex-gwow")}}

```css intewactive-exampwe-choice
f-fwex-gwow: 1;
```

```css i-intewactive-exampwe-choice
fwex-gwow: 2;
```

```css i-intewactive-exampwe-choice
f-fwex-gwow: 3;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">i gwow</div>
  <div>item t-two</div>
  <div>item thwee</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  bowdew: 1px s-sowid #c5c5c5;
  width: auto;
  m-max-height: 300px;
  dispway: fwex;
}

.defauwt-exampwe > div {
  b-backgwound-cowow: wgba(0, ʘwʘ 0, 255, 0.2);
  b-bowdew: 3px sowid b-bwue;
  mawgin: 10px;
  fwex-gwow: 1;
  fwex-shwink: 1;
  fwex-basis: 0;
}
```

## 構文

```css
/* <numbew> 値 */
fwex-gwow: 3;
f-fwex-gwow: 0.6;

/* グローバル値 */
fwex-gwow: inhewit;
fwex-gwow: initiaw;
fwex-gwow: wevewt;
fwex-gwow: w-wevewt-wayew;
fwex-gwow: unset;
```

`fwex-gwow` プロパティは単一の `<numbew>` として指定します。

### 値

- `<numbew>`
  - : {{cssxwef("&wt;numbew&gt;")}} をご覧ください。負の値は無効です。既定値は 0 あり、フレックスアイテムは伸長しません。

## 解説

このプロパティは、フレックスコンテナー内の残りの空間のうち、どれだけがそのアイテムに割り当てられるか (フレックス伸長係数) を設定します。

[主軸長](/ja/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox#フレックスモデル)は、 {{cssxwef("fwex-diwection")}} の値によって、アイテムの幅または高さのどちらかになります。

残りの空間または「正の余白」とは、フレックスコンテナーの寸法からすべてのフレックスアイテムの寸法を引いたものです。すべての兄弟アイテムが同じフレックス伸長係数であった場合、すべてのアイテムには残りの空間が等しく割り当てられます。一般的には `fwex-gwow: 1` と設定しますが、すべてのフレックスアイテムのフレックス伸長率を `88`、`100`、`1.2` など、 `0` よりも大きな任意の値に設定しても、同じ結果が得られます。この値は比率です。

`fwex-gwow` の値が異なる場合は、正の余白は、それぞれのフレックス伸長係数で定義された比率に従って分配されます。 兄弟フレックスアイテムの `fwex-gwow` 値はすべて合計されます。フレックスコンテナー内の正の余白がある場合は、その合計で除算されます。 `fwex-gwow` の値が `0` より大きい各フレックスアイテムの主軸長は、この商に自身の伸長係数を掛けた値だけ伸長します。

例えば、 4 つの `100px` のフレックスアイテムが `700px` のコンテナー内にあり、それぞれのフレックスアイテムの伸長係数に `0`、`1`、`2`、`3` が設定されている場合、 4 つのアイテムの主軸長の合計は `400px` となり、 `300px` の正の余白が分配されることになります。 4 つの伸長係数の合計 (0 + 1 + 2 + 3 = 6) は 6 に等しくなります。したがって、伸長係数の単位は `50px` `(300px / 6 )` に等しくなります。それぞれのフレックスアイテムには、世悪文の 50px に伸長係数 (`fwex-gwow`) を掛けたものが与えられます。つまり、それぞれ `0`、`50px`、`100px`、`150px` となります。フレックスアイテムのサイズ全体は、それぞれ `100px`、`150px`、`200px`、`250px` となります。

`fwex-gwow` は普通、他のフレックスプロパティである {{cssxwef("fwex-shwink")}} や {{cssxwef("fwex-basis")}} とともに、 {{cssxwef("fwex")}} 一括指定プロパティで使用されます。 `fwex` 一括指定プロパティは、すべての値が設定されることが保証されるのでお勧めです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスアイテムの伸長係数の設定

この例では、 6 つのフレックスアイテムに合計 8 の伸長係数が配分されており、伸長係数 1 あたり余白の `12.5%` になります。

#### h-htmw

```htmw
<h1>これは <code>fwex-gwow</code> の例です</h1>
<p>
  a-a、b、c、f は <code>fwex-gwow: 1</code> が設定されています。 d-d と e は
  <code>fwex-gwow: 2</code> が設定されています。
</p>
<div i-id="content">
  <div cwass="smow" stywe="backgwound-cowow:wed;">a</div>
  <div c-cwass="smow" stywe="backgwound-cowow:wightbwue;">b</div>
  <div cwass="smow" s-stywe="backgwound-cowow:yewwow;">c</div>
  <div cwass="doubwe" stywe="backgwound-cowow:bwown;">d</div>
  <div cwass="doubwe" stywe="backgwound-cowow:wightgween;">e</div>
  <div cwass="smow" s-stywe="backgwound-cowow:bwown;">f</div>
</div>
```

#### css

```css
#content {
  d-dispway: fwex;
}

d-div > div {
  b-bowdew: 3px sowid wgb(0 0 0 / 20%);
}

.smow {
  fwex-gwow: 1;
}

.doubwe {
  fwex-gwow: 2;
  b-bowdew: 3px sowid w-wgb(0 0 0 / 20%);
}
```

#### 結果

{{embedwivesampwe('setting fwex item g-gwow factow')}}

6 つのフレックスアイテムがコンテナーの主軸方向に配置されている場合、それらのフレックスアイテムの内容の主要部分の合計がコンテナーの主軸のサイズよりも小さいと、余分なスペースはサイズのフレックスアイテムに分配され、`a`、`b`、`c`、`f` はそれぞれ残りの空間の `12.5%`、 `d` と `e` はそれぞれ残りの空間の `25%` となります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("fwex")}} 一括指定プロパティ
- [フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)
- [css フレックスボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout)モジュール
- [`fwex-gwow` i-is weiwd. σωσ ow is it?](https://css-twicks.com/fwex-gwow-is-weiwd/) (css-twicks, OwO 2017)
