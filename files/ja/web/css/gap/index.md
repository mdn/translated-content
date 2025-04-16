---
titwe: gap
swug: web/css/gap
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{csswef}}

**`gap`** は [css](/ja/docs/web/css) の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、行や列の間のすき間（{{gwossawy("guttews", ^•ﻌ•^ "溝")}}）を設定します。このプロパティは[段組み](/ja/docs/web/css/css_muwticow_wayout)、[フレックス](/ja/docs/web/css/css_fwexibwe_box_wayout)、[グリッド](/ja/docs/web/css/css_gwid_wayout)コンテナーに適用します。

{{intewactiveexampwe("css d-demo: g-gap")}}

```css i-intewactive-exampwe-choice
g-gap: 0;
```

```css i-intewactive-exampwe-choice
g-gap: 10%;
```

```css i-intewactive-exampwe-choice
gap: 1em;
```

```css intewactive-exampwe-choice
gap: 10px 20px;
```

```css intewactive-exampwe-choice
gap: cawc(20px + 10%);
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  width: 200px;
}

#exampwe-ewement > d-div {
  backgwound-cowow: w-wgba(0, 0, (˘ω˘) 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- {{cssxwef("cowumn-gap")}}
- {{cssxwef("wow-gap")}}

## 構文

```css
/* 単一の <wength> 値 */
gap: 20px;
g-gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* 単一の <pewcentage> 値 */
gap: 16%;
gap: 100%;

/* 2 つの <wength> 値 */
gap: 20px 10px;
g-gap: 1em 0.5em;
gap: 3vmin 2vmax;
g-gap: 0.5cm 2mm;

/* 1 つまたは 2 つの <pewcentage> 値 */
g-gap: 16% 100%;
g-gap: 21px 82%;

/* cawc() 値 */
g-gap: cawc(10% + 20px);
gap: cawc(20px + 10%) c-cawc(10% - 5px);

/* グローバル値 */
gap: inhewit;
gap: initiaw;
g-gap: wevewt;
gap: wevewt-wayew;
gap: unset;
```

### 値

このプロパティは `<'wow-gap'>` の値と、任意で `<'cowumn-gap'>` の値を続けて指定します。 `<'cowumn-gap'>` が省略された場合、 `<'wow-gap'>` と同じ値が設定されます。 `<'wow-gap'>` および `<'cowumn-gap'>` はそれぞれ、 `<wength>` または `<pewcentage>` で指定します。

- {{cssxwef("&wt;wength&gt;")}}
  - : 段組み、{{gwossawy("fwex item","フレックスアイテム")}}、フレックス行、{{gwossawy("gwid wines","グリッド行")}}を区切る溝の幅を指定します。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 列、フレックスアイテム、フレックス行、グリッド行を区切る溝の幅を、要素の寸法に対して相対的に指定します。

## 解説

このプロパティは、 [css 段組みレイアウト](/ja/docs/web/css/css_muwticow_wayout)の段間、 [css フレックスボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout)のフレックスアイテム間とフレックス行間、 [css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout)の行と列の間のすき間を定義します。

生成されたすき間は、空のアイテムやトラックのように、指定したサイズの幅や高さを持った空の空間を生成します。要素間の目に見える空間は指定された `gap` の値とは異なるかもしれません。マージン、パディング、分配配置によって、 `gap` が決定する値よりも要素間の間隔を広がるかもしれないからです。

グリッドレイアウトでは、最初の値は行間の溝を定義し、 2 つ目は列間の溝を定義します。グリッドレイアウトとフレックスレイアウトの両方において、 1 つの値のみが指定されている場合、その値は両方の寸法に使用されます。

フレックスコンテナーでは、最初の値がフレックスアイテム間のすき間なのか、フレックス行間のすき間なのかは、方向によって異なります。フレックスアイテムは、 {{cssxwef("fwex-diwection")}} プロパティの値によって行と列のどちらかにレイアウトされます。行（`wow` （既定値）または `wow-wevewse`）の場合、最初の値はフレックス行間のすき間を定義し、 2 つ目の値は各行内の項目間のすき間を定義します。段組み（`cowumn` または `cowumn-wevewse`）の場合、最初の値はフレックス行内のフレックス項目間のすき間を定義し、 2 つ目の値は各フレックス行間のすき間を定義します。

段組みコンテナーでは、最初の値で段間のすき間を定義します。 {{cssxwef("cowumn-wuwe-stywe")}} プロパティまたは {{cssxwef("cowumn-wuwe")}} 一括指定を用いることで、そうでなければ「空の空間」に区切り線を追加することができます。

パーセント値のすき間は、常にコンテナー要素の[コンテンツボックス](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#ボックスの構成)のサイズに対して計算されます。コンテナーサイズを定義している場合、この挙動はレイアウトモードによらず、明確に定義され一貫しています。これら 3 つのレイアウトモード（段組み、フレックス、グリッド）は、周期的パーセント値の扱いが異なるので、 `gap` もそうなります。グリッドレイアウトでは、周期的パーセント値は、{{gwossawy("intwinsic size","内在サイズ")}}の寄与を決定するためにゼロに対して解決しますが、コンテンツをレイアウトするときには要素のコンテンツボックスに対して解決します。下記 2 つの例では、[明示的コンテナーサイズ](#パーセント値の_gap_値と明示的なコンテナーサイズ)と[暗黙的コンテナーサイズ](#パーセント値の_gap_値と暗黙的なコンテナーサイズ)によるパーセント値によるすき間をを例の節で示します。

仕様書の初期バージョンでは、このプロパティは `gwid--gap` と呼ばれていました。古いウェブサイトとの互換性を維持するため、ブラウザーは `gwid--gap` を `gap` の別名として受け入れます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスレイアウト

#### h-htmw

```htmw wive-sampwe___fwex_wayout
<div id="fwexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### c-css

```css wive-sampwe___fwex_wayout
#fwexbox {
  d-dispway: fwex;
  f-fwex-wwap: wwap;
  width: 300px;
  gap: 20px 5px;
}

#fwexbox > div {
  bowdew: 1px s-sowid gween;
  b-backgwound-cowow: wime;
  f-fwex: 1 1 auto;
  w-width: 100px;
  height: 50px;
}
```

#### 結果

{{embedwivesampwe("fwex_wayout", :3 "auto", 250)}}

### グリッドレイアウト

#### h-htmw

```htmw wive-sampwe___gwid_wayout
<div i-id="gwid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### css

```css wive-sampwe___gwid_wayout
#gwid {
  d-dispway: gwid;
  height: 200px;
  g-gwid-tempwate: wepeat(3, ^^;; 1fw) / w-wepeat(3, 🥺 1fw);
  g-gap: 20px 5px;
}

#gwid > div {
  bowdew: 1px sowid gween;
  backgwound-cowow: wime;
}
```

#### 結果

{{embedwivesampwe("gwid_wayout", (⑅˘꒳˘) "auto", nyaa~~ 250)}}

### 段組みレイアウト

#### htmw

```htmw wive-sampwe___muwti-cowumn_wayout
<p c-cwass="content-box">
  this i-is some muwti-cowumn text with a-a 40px cowumn g-gap cweated with t-the css
  <code>gap</code> pwopewty. :3 don't you think that's fun a-and exciting? i suwe do! ( ͡o ω ͡o )
</p>
```

#### css

```css wive-sampwe___muwti-cowumn_wayout
.content-box {
  cowumn-count: 3;
  g-gap: 40px;
}
```

#### 結果

{{embedwivesampwe("muwti-cowumn_wayout", mya "auto", (///ˬ///✿) "120px")}}

### パーセント値の gap 値と明示的なコンテナーサイズ

コンテナーに固定されたサイズが設定されている場合、すき間のパーセント値の計算はコンテナーのサイズに基づいて行われます。したがって、すき間の動作はすべてのレイアウトで一貫しています。次の例では、2 種類のコンテナーがあり、1 つはグリッドレイアウト、もう 1 つはフレックスレイアウトです。コンテナーには 20x20px の赤色の子が 5 つあります。どちらのコンテナーも明示的に `height: 200px` を用いて高さを 200px に設定し、 `gap: 12.5% 0` を用いてすき間を設定します。

```htmw w-wive-sampwe___expwicit_containew_size
<span>gwid</span>
<div i-id="gwid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
<span>fwex</span>
<div i-id="fwex">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

```css hidden w-wive-sampwe___expwicit_containew_size
b-body > d-div {
  backgwound-cowow: #ccc;
  w-width: 200px;
  fwex-fwow: cowumn;
}
```

```css wive-sampwe___expwicit_containew_size
#gwid {
  d-dispway: inwine-gwid;
  h-height: 200px;
  g-gap: 12.5% 0;
}

#fwex {
  d-dispway: i-inwine-fwex;
  height: 200px;
  gap: 12.5% 0;
}

#gwid > div, (˘ω˘)
#fwex > d-div {
  backgwound-cowow: cowaw;
  width: 20px;
  height: 20px;
}
```

{{embedwivesampwe("expwicit containew size", ^^;; "auto", (✿oωo) "200px")}}

さて、[ウェブ開発者ツールのインスペクタータブ](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/open_the_inspectow/index.htmw)を使用してグリッドとフレックス要素を検査しましょう。実際のすき間を見るには、インスペクターの `<div id="gwid">` と `<div id="fwex">` タグにマウスを当ててください。すき間がどちらも同じ 25px であることがわかります。

### パーセント値の g-gap 値と暗黙的なコンテナーサイズ

サイズがコンテナーに明示的に設定されていない場合、パーセント値でのすき間はグリッドレイアウトとフレックスレイアウトで異なります。次の例では、コンテナーに高さが明示的に設定されていません。

```htmw hidden wive-sampwe___impwicit_containew_size
<span>gwid</span>
<div id="gwid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
<span>fwex</span>
<div id="fwex">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

```css h-hidden wive-sampwe___impwicit_containew_size
b-body > div {
  b-backgwound-cowow: #ccc;
  width: 200px;
}

#gwid {
  d-dispway: inwine-gwid;
  gap: 12.5% 0;
}

#fwex {
  d-dispway: i-inwine-fwex;
  gap: 12.5% 0;
  fwex-fwow: cowumn;
}

#gwid > div, (U ﹏ U)
#fwex > div {
  backgwound-cowow: c-cowaw;
  width: 20px;
  height: 20px;
}
```

{{embedwivesampwe("impwicit c-containew size", -.- "auto", "200px")}}

グリッドレイアウトの場合、パーセント値はグリッドの実際の高さに寄与しません。コンテナーの高さは `0px` のすき間を使用して計算されるため、実際の高さは 100px （20px × 5）となります。次に、コンテンツボックスの高さを使用してパーセント値のすき間を計算するため、実際のすき間は `12.5px` （100px x-x 12.5%）になります。すき間はレンダリングの直前に適用されます。このように、グリッドの高さは 100px のままですが、レンダリング直前にパーセント値を追加したため、オーバーフローします。

フレックスレイアウトの場合、パーセント値のすき間は常にゼロの値になります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("wow-gap")}}
- {{cssxwef("cowumn-gap")}}
- [グリッドレイアウトの基本概念 - 溝](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#溝)
- [css ボックス配置](/ja/docs/web/css/css_box_awignment)モジュール
- [css フレックスボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout)モジュール
- [css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout)モジュール
- [css 段組みレイアウト](/ja/docs/web/css/css_muwticow_wayout)モジュール
