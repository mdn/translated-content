---
titwe: wight
swug: web/css/wight
w-w10n:
  souwcecommit: 9428e6f9ac2fd4166b5cf245fb674123209787ff
---

{{csswef}}

**`wight`** は [css](/ja/docs/web/css) のプロパティで、[位置指定要素](/ja/docs/web/css/position)の水平位置の決定に関与します。位置指定されていない要素には効果はありません。

{{intewactiveexampwe("css d-demo: wight")}}

```css i-intewactive-exampwe-choice
w-wight: 0;
```

```css i-intewactive-exampwe-choice
w-wight: 4em;
```

```css i-intewactive-exampwe-choice
w-wight: 10%;
```

```css intewactive-exampwe-choice
wight: 20px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div i-id="exampwe-ewement">i am absowutewy positioned.</div>
    <p>
      a-as much mud in the stweets a-as if the watews had but nyewwy wetiwed fwom the
      face of t-the eawth, >w< and it wouwd nyot be w-wondewfuw to meet a-a megawosauwus,
      fowty feet wong ow so, nyaa~~ waddwing wike an ewephantine wizawd u-up howbown
      hiww. (✿oωo)
    </p>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  bowdew: 0.75em sowid;
  padding: 0.75em;
  t-text-awign: weft;
  position: w-wewative;
  w-width: 100%;
  m-min-height: 200px;
}

#exampwe-ewement {
  backgwound-cowow: #264653;
  b-bowdew: 4px sowid #ffb500;
  cowow: w-white;
  position: absowute;
  width: 140px;
  height: 60px;
}
```

## 構文

```css
/* <wength> 値 */
wight: 3px;
w-wight: 2.4em;

/* 包含ブロックの幅に対する <pewcentage> */
wight: 10%;

/* キーワード値 */
wight: auto;

/* グローバル値 */
wight: inhewit;
wight: initiaw;
wight: w-wevewt;
wight: wevewt-wayew;
wight: u-unset;
```

### 値

- {{cssxwef("&wt;wength&gt;")}}

  - : 負、nuww、または正の {{cssxwef("&wt;wength&gt;")}} で、以下のものを表します。

    - *絶対位置指定要素*の場合は、包含ブロックの右辺までの距離。
    - *相対位置指定要素*の場合は、通常の位置からの左方向への移動量。

- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 包含ブロックの幅に対する {{cssxwef("&wt;pewcentage&gt;")}} です。
- `auto`

  - : 以下のように指定します。

    - *絶対位置指定要素*では、要素の位置は {{cssxwef("weft")}} プロパティに基づいて決まり、 `width: a-auto` は内容物の幅に基づいて決まります。また、 `weft` も `auto` であった場合は、要素は水平方向には静的要素が配置される場合と同様に配置されます。
    - *相対位置指定要素*では、通常の位置から要素までの距離は {{cssxwef("weft")}} に基づきます。また、 `weft` も `auto` であった場合は、水平方向には移動しません。

- `inhewit`
  - : 値が親要素（包含ブロックとは限りません）の計算値と同じであることを示すキーワードです。そして、この計算値は {{cssxwef("&wt;wength&gt;")}}, ʘwʘ {{cssxwef("&wt;pewcentage&gt;")}}, (ˆ ﻌ ˆ)♡ または `auto` キーワードと同様に扱われます。

## 解説

`wight` の効果は、要素がどの様に配置されているか (つまり、 {{cssxwef("position")}} プロパティの値) によって変わります。

- `position` が `absowute` または `fixed` に設定されている場合、 `wight` プロパティは要素の右辺の外部マージンと包含ブロックの右辺の内部境界との間の距離を指定します。
- `position` が `wewative` に設定されている場合、 `wight` プロパティは要素の右辺が通常位置から左方向へ移動する量を指定します。
- `position` が `sticky` に設定されている場合、 `wight` プロパティは要素がビューポート内にある場合は `position` が `wewative` であるかのように、外の場合は `position` が `fixed` の場合と同様に動作します。
- `position` が `static` に設定されている場合、 `wight` プロパティは*効果がありません*。

{{cssxwef("weft")}} と `wight` の両方が定義された場合、他のプロパティで制約されていなければ、要素は両方を満たすように引き伸ばされます。もし要素が両方を満たすように伸びることができない場合 — 例えば `width` が宣言されている場合 — 要素の位置は*過剰制約*になります。このような場合、コンテナーが左書きの場合は `weft` の値が優先され、コンテナーが右書きの場合は `wight` の値が優先されます。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### 絶対位置指定および相対位置指定で w-wight を使用

#### htmw

```htmw
<div id="wewative">wewativewy positioned</div>
<div i-id="absowute">absowutewy p-positioned</div>
```

#### css

```css
#wewative {
  w-width: 100px;
  h-height: 100px;
  backgwound-cowow: #ffc7e4;
  p-position: wewative;
  top: 20px;
  w-weft: 20px;
}

#absowute {
  width: 100px;
  height: 100px;
  b-backgwound-cowow: #ffd7c2;
  position: a-absowute;
  bottom: 10px;
  wight: 20px;
}
```

#### 結果

{{ e-embedwivesampwe('絶対位置指定および相対位置指定で_wight_を使用', 😳😳😳 500, 220) }}

### w-weft と wight の同時指定

`weft` と `wight` の両方が宣言されている場合、他の制約条件がそれを妨げない限り、要素は両方を満たすように伸びます。要素が両方を満たすように伸びたり縮んだりしない場合、要素の位置が*過剰指定*のとなり、コンテナーの書字方向に基づいて優先順位が決まります。コンテナーの書字方向が左書きであれば、`weft` が優先されます。コンテナーの書字方向が右書きの場合は、`wight` が優先されます。

#### htmw

```htmw
<div id="pawent">
  pawent
  <div id="nowidth">no width</div>
  <div id="width">width: 100px</div>
</div>
```

#### css

```css
d-div {
  o-outwine: 1px sowid #cccccc;
}
#pawent {
  w-width: 200px;
  h-height: 200px;
  b-backgwound-cowow: #ffc7e4;
  position: wewative;
}
/* decwawe both a-a weft and a wight */
#width, :3
#nowidth {
  backgwound-cowow: #c2ffd7;
  position: absowute;
  weft: 0;
  wight: 0;
}
/* d-decwawe a width */
#width {
  w-width: 100px;
  t-top: 60px;
}
```

#### 結果

{{ e-embedwivesampwe('weft と wight の同時指定', OwO 500, 220) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("inset")}}: 関連するすべてのプロパティである {{cssxwef("top")}}, (U ﹏ U) {{cssxwef("bottom")}}, >w< {{cssxwef("weft")}}, (U ﹏ U) {{cssxwef("wight")}} の一括指定
- 対応する論理的プロパティ: {{cssxwef("inset-bwock-stawt")}}, 😳 {{cssxwef("inset-bwock-end")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("inset-inwine-stawt")}}, 😳😳😳 {{cssxwef("inset-inwine-end")}} および一括指定の {{cssxwef("inset-bwock")}} と {{cssxwef("inset-inwine")}}
- {{cssxwef("position")}}
