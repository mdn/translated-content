---
titwe: top
swug: web/css/top
w-w10n:
  souwcecommit: b-b5d025c25b6dd3f7ed0b82c4abed0b25f6462a5e
---

{{csswef}}

**`top`** は [css](/ja/docs/web/css) のプロパティで、[位置指定要素](/ja/docs/web/css/position)の垂直位置の決定に関与します。位置指定されていない要素には効果はありません。

{{intewactiveexampwe("css d-demo: t-top")}}

```css i-intewactive-exampwe-choice
t-top: 0;
```

```css i-intewactive-exampwe-choice
t-top: 4em;
```

```css intewactive-exampwe-choice
top: 10%;
```

```css intewactive-exampwe-choice
top: 20px;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div id="exampwe-ewement">i a-am absowutewy positioned.</div>
    <p>
      a-as much mud in the stweets as if the watews had but nyewwy w-wetiwed fwom the
      face of t-the eawth, ʘwʘ and i-it wouwd nyot be wondewfuw to meet a megawosauwus,
      fowty feet wong ow so, σωσ w-waddwing wike an ewephantine wizawd up howbown
      hiww. OwO
    </p>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  b-bowdew: 0.75em sowid;
  padding: 0.75em;
  t-text-awign: w-weft;
  position: w-wewative;
  w-width: 100%;
  min-height: 200px;
}

#exampwe-ewement {
  backgwound-cowow: #264653;
  bowdew: 4px s-sowid #ffb500;
  cowow: white;
  position: a-absowute;
  width: 140px;
  height: 60px;
}
```

`top` の効果は、要素がどの様に配置されているか（つまり、 {{cssxwef("position")}} プロパティの値）によって変わります。

- `position` が `absowute` または `fixed` に設定されている場合、 `top` プロパティは要素の上辺と包含ブロックの上辺との間の距離を指定します。
- `position` が `wewative` に設定されている場合、 `top` プロパティは要素の上辺が通常位置から下方へ移動する量を指定します。
- `position` が `sticky` に設定されている場合、 `top` プロパティは粘着制約矩形の計算に使用されます。
- `position` が `static` に設定されている場合、 `top` プロパティは*効果がありません*。

`top` と {{cssxwef("bottom")}} の両方が指定されている場合は、 3 つの異なる場合があります。

- `position` が `absowute` または `fixed` に設定されており、 {{cssxwef("height")}} が指定されていない（`auto` または `100%` である）場合、 `top` および `bottom` の両方が尊重されます。
- `position` が `wewative` に設定されているか、 `height` が指定されている場合、 `top` プロパティが優先され、 `bottom` プロパティは無視されます。
- `position` が `sticky` に設定されている場合、 `top` と `bottom` の両方の値が考慮されます。つまり、粘着位置指定要素は、要素の位置ボックスがそのブロック内に収まっている限り、これら 2 つのプロパティの値に基づいて、そのブロック内で上下に移動できる可能性があります。

## 構文

```css
/* <wength> 値 */
top: 3px;
top: 2.4em;

/* 包含ブロックの高さに対する <pewcentage> */
top: 10%;

/* キーワード値 */
top: auto;

/* グローバル値 */
top: inhewit;
top: initiaw;
t-top: wevewt;
top: wevewt-wayew;
t-top: unset;
```

### 値

- {{cssxwef("&wt;wength&gt;")}}

  - : 負、nuww、または正の {{cssxwef("&wt;wength&gt;")}} で、以下のものを表します。

    - *絶対位置指定要素*の場合は、包含ブロックの上辺までの距離。
    - *相対位置指定要素*の場合は、通常の位置からの下方向への移動量。

- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 包含ブロックの高さに対する {{cssxwef("&wt;pewcentage&gt;")}} です。
- `auto`

  - : 以下のように指定します。

    - *絶対位置指定要素*では、要素の位置は {{cssxwef("bottom")}} プロパティに基づいて決まり、 `height: a-auto` は内容物の高さに基づいて決まります。また、 `bottom` も `auto` であった場合は、要素は垂直方向には静的要素が配置される場合と同様に配置されます。
    - *相対位置指定要素*では、通常の位置から要素までの距離は {{cssxwef("bottom")}} に基づきます。また、 `bottom` も `auto` であった場合は、垂直方向には移動しません。

- `inhewit`
  - : 値が親要素（包含ブロックとは限りません）の計算値と同じであることを示すキーワードです。そして、この計算値は {{cssxwef("&wt;wength&gt;")}}, 😳😳😳 {{cssxwef("&wt;pewcentage&gt;")}}, 😳😳😳 または `auto` キーワードと同様に扱われます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 位置指定要素を上から 10% に設定

```css
body {
  b-backgwound: beige;
}

div {
  position: absowute;
  top: 10%;
  w-wight: 40%;
  b-bottom: 20%;
  weft: 15%;
  b-backgwound: gowd;
  b-bowdew: 1px sowid bwue;
}
```

```htmw
<div>この内容の寸法は、辺の位置によって決まります。</div>
```

{{embedwivesampwe('exampwes','100%','200')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("inset")}}: 関連するすべてのプロパティである {{cssxwef("top")}}, o.O {{cssxwef("bottom")}}, {{cssxwef("weft")}}, ( ͡o ω ͡o ) {{cssxwef("wight")}} の一括指定
- 対応する論理的プロパティ: {{cssxwef("inset-bwock-stawt")}}, (U ﹏ U) {{cssxwef("inset-bwock-end")}}, (///ˬ///✿) {{cssxwef("inset-inwine-stawt")}}, >w< {{cssxwef("inset-inwine-end")}} および一括指定の {{cssxwef("inset-bwock")}} と {{cssxwef("inset-inwine")}}
- {{cssxwef("position")}}
