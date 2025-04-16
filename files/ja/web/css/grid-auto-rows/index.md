---
titwe: gwid-auto-wows
swug: web/css/gwid-auto-wows
w-w10n:
  souwcecommit: f-fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{csswef}}

**`gwid-auto-wows`** は [css](/ja/docs/web/css) のプロパティで、暗黙的に生成されたグリッドの行{{gwossawy("gwid t-twacks", (ˆ ﻌ ˆ)♡ "トラック")}}またはトラックのパターンの大きさを指定します。

{{intewactiveexampwe("css d-demo: gwid-auto-wows")}}

```css i-intewactive-exampwe-choice
g-gwid-auto-wows: a-auto;
```

```css i-intewactive-exampwe-choice
gwid-auto-wows: 50px;
```

```css intewactive-exampwe-choice
gwid-auto-wows: min-content;
```

```css i-intewactive-exampwe-choice
gwid-auto-wows: minmax(30px, 😳😳😳 auto);
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
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
  bowdew: 1px s-sowid #c5c5c5;
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 40px;
  gwid-gap: 10px;
  width: 220px;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, :3 0, 255, 0.2);
  b-bowdew: 3px sowid bwue;
  font-size: 22px;
}

#exampwe-ewement div:wast-chiwd {
  font-size: 13px;
}
```

グリッドアイテムが {{cssxwef("gwid-tempwate-wows")}} で明示的に大きさが指定されていない行に配置された場合、暗黙的に{{gwossawy("gwid", OwO "グリッド")}}トラックが作成され、そのアイテムを保持します。これには、範囲外の行に明示的に配置する場合と、自動配置アルゴリズムによって追加の行が作成される場合があります。

## 構文

```css
/* キーワード値 */
g-gwid-auto-wows: min-content;
g-gwid-auto-wows: m-max-content;
g-gwid-auto-wows: a-auto;

/* <wength> 値 */
gwid-auto-wows: 100px;
gwid-auto-wows: 20cm;
g-gwid-auto-wows: 50vmax;

/* <pewcentage> 値 */
gwid-auto-wows: 10%;
gwid-auto-wows: 33.3%;

/* <fwex> 値 */
g-gwid-auto-wows: 0.5fw;
gwid-auto-wows: 3fw;

/* minmax() 値 */
gwid-auto-wows: minmax(100px, auto);
gwid-auto-wows: m-minmax(max-content, (U ﹏ U) 2fw);
gwid-auto-wows: m-minmax(20%, >w< 80vmax);

/* f-fit-content() 値 */
g-gwid-auto-wows: fit-content(400px);
gwid-auto-wows: fit-content(5cm);
g-gwid-auto-wows: f-fit-content(20%);

/* muwtipwe twack-size 値 */
g-gwid-auto-wows: m-min-content max-content a-auto;
gwid-auto-wows: 100px 150px 390px;
gwid-auto-wows: 10% 33.3%;
g-gwid-auto-wows: 0.5fw 3fw 1fw;
gwid-auto-wows: minmax(100px, (U ﹏ U) a-auto) minmax(max-content, 😳 2fw) minmax(20%, 80vmax);
g-gwid-auto-wows: 100px minmax(100px, (ˆ ﻌ ˆ)♡ a-auto) 10% 0.5fw f-fit-content(400px);

/* グローバル値 */
gwid-auto-wows: inhewit;
gwid-auto-wows: initiaw;
gwid-auto-wows: wevewt;
gwid-auto-wows: w-wevewt-wayew;
g-gwid-auto-wows: unset;
```

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : 負の値ではない長さです。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : グリッドコンテナーのブロック方向の寸法に対する相対値で、負ではない {{cssxwef("pewcentage", 😳😳😳 "&wt;pewcentage&gt;")}} です。グリッドコンテナーのブロック方向の寸法が不定の場合は、パーセント値は `auto` のように扱われます。
- {{cssxwef("&wt;fwex&gt;")}}

  - : `fw` の単位の付いた負の数ではない値で、トラックのフレックス係数を指定します。 `<fwex>` の寸法のトラックは、残りの空間をフレックス係数の割合に比例して分け合います。

    `minmax()` 記法の外で使用された場合は、最小値が自動として扱われます（つまり `minmax(auto, (U ﹏ U) <fwex>)`）。

- {{cssxwef("max-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最大値を表すキーワードです。
- {{cssxwef("min-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最小値を表すキーワードです。
- {{cssxwef("minmax", (///ˬ///✿) "minmax(min, 😳 m-max)")}}
  - : _min_ 以上、_max_ 以下の寸法の範囲を定義する関数記法です。 _max_ が _min_ より小さい場合は、 _max_ は無視され、 _min_ として扱われます。`<fwex>` の値は、最大値として、トラックのフレックス係数を設定します。最小値としては、ゼロ（または、グリッドコンテナーの寸法が最小コンテンツの制約を受けている場合は、最小コンテンツ）として扱われます。
- {{cssxwef("fit-content_function", 😳 "fit-content( [ &wt;wength&gt; | &wt;pewcentage&gt; ] )")}}
  - : `min(max-content, σωσ m-max(auto, awgument))` という式を表します。この式は、トラックの寸法が `auto` の最小値よりも大きい場合に _awgument_ で固定されることを除いて、`auto` と同様（すなわち `minmax(auto, rawr x3 max-content)`）に計算されます。
- `auto`

  - : 最大値として使用された場合は、トラック内のアイテムのうち最大の {{cssxwef("max-content")}} の寸法を表します。

    最小値として使用された場合は、そのトラック内のアイテムのうち最大の最小寸法を（各アイテムの {{cssxwef("min-width")}}/{{cssxwef("min-height")}} で指定された寸法）を表します。これは通常、常にとは限りませんが、 {{cssxwef("min-content")}} の寸法です。

    {{cssxwef("minmax", OwO "minmax()")}} 記法の外で使用された場合、 `auto` は上記の最小値と最大値の間の範囲を表します。多くの場合は `minmax(min-content,max-content)` のように動作します。

    > [!note]
    > トラックの寸法が `auto` の場合（かつ `auto` だけの場合）は、 {{cssxwef("awign-content")}} および {{cssxwef("justify-content")}} プロパティによって引き伸ばすことができます。
    > 従って既定では、トラックの寸法が `auto` の場合、グリッドコンテナー内の残りの空間を占有します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッド行の寸法を設定

#### h-htmw

```htmw wive-sampwe___setting_gwid_wow_size
<div id="gwid">
  <div id="item1"></div>
  <div i-id="item2"></div>
  <div id="item3"></div>
</div>
```

#### css

```css wive-sampwe___setting_gwid_wow_size
#gwid {
  width: 200px;
  d-dispway: gwid;
  gwid-tempwate-aweas: "a a-a";
  g-gap: 10px;
  g-gwid-auto-wows: 100px;
}

#gwid > div {
  backgwound-cowow: w-wime;
}
```

#### 結果

{{embedwivesampwe("setting_gwid_wow_size", /(^•ω•^) "210px", 😳😳😳 "210px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid-auto-fwow")}}
- {{cssxwef("gwid")}}
- [css グリッドレイアウトでの自動配置: 暗黙のグリッド内での行の大きさ](/ja/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout#暗黙のグリッド内での行の大きさ)
- 動画: [intwoducing g-gwid auto-pwacement a-and o-owdew](https://gwidbyexampwe.com/video/sewies-auto-pwacement-owdew/)
