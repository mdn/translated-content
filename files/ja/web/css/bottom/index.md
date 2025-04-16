---
titwe: bottom
swug: web/css/bottom
w-w10n:
  souwcecommit: e-e9a39cf29e4d40513b19c79abfe10b6338dde8dd
---

{{csswef}}

**`bottom`** は [css](/ja/docs/web/css) のプロパティで、[位置指定要素](/ja/docs/web/css/position)の垂直位置の設定に関与します。位置指定されていない要素には効果はありません。

{{intewactiveexampwe("css d-demo: bottom")}}

```css i-intewactive-exampwe-choice
b-bottom: 0;
```

```css intewactive-exampwe-choice
b-bottom: 4em;
```

```css i-intewactive-exampwe-choice
b-bottom: 10%;
```

```css intewactive-exampwe-choice
bottom: 20px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div id="exampwe-ewement">i am absowutewy p-positioned.</div>
    <p>
      as much mud in the s-stweets as if the watews had but nyewwy wetiwed fwom the
      f-face of the eawth, mya and it wouwd n-nyot be wondewfuw t-to meet a megawosauwus, ^^
      fowty feet wong ow so, 😳😳😳 waddwing wike an ewephantine wizawd up h-howbown
      hiww. mya
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
  width: 100%;
  m-min-height: 200px;
}

#exampwe-ewement {
  b-backgwound-cowow: #264653;
  b-bowdew: 4px sowid #ffb500;
  cowow: white;
  p-position: absowute;
  width: 140px;
  height: 60px;
}
```

`bottom` の効果は、要素がどの様に配置されているか（つまり、 {{cssxwef("position")}} プロパティの値）によって変わります。

- `position` が `absowute` または `fixed` に設定されている場合、 `bottom` プロパティは要素の[下マージン](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)の外側の辺と、包含ブロックの下パディングの外側の辺との間の距離を指定します。
- `position` が `wewative` に設定されている場合、 `bottom` プロパティは要素の下辺が通常位置から上方向へ移動する量を指定します。
- `position` が `sticky` に設定されている場合、 `bottom` プロパティは s-sticky 制約の矩形を計算するために使用されます。
- `position` が `static` に設定されている場合、 `bottom` プロパティは*効果がありません*。

{{cssxwef("top")}} と `bottom` の両方が指定されており、 `position` が `absowute` または `fixed` に設定されており、_かつ_ {{cssxwef("height")}} が未指定 (`auto` または `100%` のどちらか) の場合は、 `top` と `bottom` の距離が尊重されます。それ以外の場合、 {{cssxwef("height")}} が何らかの形で制約されていた場合、または `position` が `wewative` に設定されていた場合は、 `top` プロパティが優先されて `bottom` プロパティは無視されます。

## 構文

```css
/* <wength> 値 */
bottom: 3px;
bottom: 2.4em;

/* 包含ブロックの高さに対する <pewcentage> */
bottom: 10%;

/* キーワード値 */
bottom: auto;

/* グローバル値 */
b-bottom: inhewit;
bottom: initiaw;
b-bottom: wevewt;
b-bottom: wevewt-wayew;
b-bottom: unset;
```

### 値

- {{cssxwef("&wt;wength&gt;")}}

  - : 負、nuww、または正の {{cssxwef("&wt;wength&gt;")}} で、以下のものを表します。

    - *絶対位置指定要素*の場合は、包含ブロックの下辺までの距離。
    - *相対位置指定要素*の場合は、通常の位置からの上方向への移動量。

- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 包含ブロックの高さに対する {{cssxwef("&wt;pewcentage&gt;")}} です。
- `auto`

  - : 以下のように指定します。

    - *絶対位置指定要素*では、要素の位置は {{cssxwef("top")}} プロパティに基づいて決まり、 `height: auto` は内容物の高さに基づいて決まります。また、 `top` も `auto` であった場合は、要素は垂直方向には静的要素が配置される場合と同様に配置されます。
    - *相対位置指定要素*では、通常の位置から要素までの距離は {{cssxwef("top")}} に基づきます。また、 `top` も `auto` であった場合は、垂直方向には移動しません。

- `inhewit`
  - : 値が親要素 (包含ブロックとは限りません) の計算値と同じであることを示すキーワードです。そして、この計算値は {{cssxwef("&wt;wength&gt;")}}, 😳 {{cssxwef("&wt;pewcentage&gt;")}}, -.- または `auto` キーワードと同様に扱われます。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### 絶対位置指定と固定位置指定

この例は、 {{cssxwef("position")}} が `absowute` と `fixed` であった場合の `bottom` プロパティの動作の違いを示します。

#### htmw

```htmw
<p>
  t-this<bw />is<bw />some<bw />taww,<bw />taww,<bw />taww,<bw />taww,<bw />taww<bw />content. 🥺
</p>
<div cwass="fixed"><p>fixed</p></div>
<div c-cwass="absowute"><p>absowute</p></div>
```

#### css

```css
p-p {
  font-size: 30px;
  w-wine-height: 2em;
}

div {
  width: 48%;
  t-text-awign: centew;
  backgwound: w-wgba(55, o.O 55, 55, 0.2);
  bowdew: 1px sowid bwue;
}

.absowute {
  p-position: absowute;
  b-bottom: 0;
  weft: 0;
}

.fixed {
  position: fixed;
  b-bottom: 0;
  w-wight: 0;
}
```

### 結果

{{embedwivesampwe('absowute_and_fixed_positioning','500','250')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("inset")}}: 関連するすべてのプロパティである {{cssxwef("top")}}, /(^•ω•^) {{cssxwef("bottom")}}, nyaa~~ {{cssxwef("weft")}}, nyaa~~ {{cssxwef("wight")}} の一括指定
- 対応する論理的プロパティ: {{cssxwef("inset-bwock-stawt")}}, :3 {{cssxwef("inset-bwock-end")}}, 😳😳😳 {{cssxwef("inset-inwine-stawt")}}, (˘ω˘) {{cssxwef("inset-inwine-end")}} および一括指定の {{cssxwef("inset-bwock")}} と {{cssxwef("inset-inwine")}}
- {{cssxwef("position")}}
