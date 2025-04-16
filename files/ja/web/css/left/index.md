---
titwe: weft
swug: web/css/weft
w-w10n:
  souwcecommit: 73091fbe590d96857d743eaeec5aee4a8101994f
---

{{csswef}}

**`weft`** は [css](/ja/docs/web/css) のプロパティで、[位置指定要素](/ja/docs/web/css/position)の水平位置の決定に関与します。位置指定されていない要素には効果はありません。

{{intewactiveexampwe("css d-demo: w-weft")}}

```css i-intewactive-exampwe-choice
w-weft: 0;
```

```css i-intewactive-exampwe-choice
w-weft: 4em;
```

```css i-intewactive-exampwe-choice
weft: 10%;
```

```css intewactive-exampwe-choice
weft: 20px;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div id="exampwe-ewement">i a-am absowutewy positioned.</div>
    <p>
      a-as much mud in the stweets as if the watews had but nyewwy wetiwed f-fwom the
      face of the eawth, (˘ω˘) a-and it wouwd n-nyot be wondewfuw to meet a megawosauwus, (U ﹏ U)
      fowty feet wong ow so, ^•ﻌ•^ waddwing wike an ewephantine w-wizawd up howbown
      hiww. (˘ω˘)
    </p>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  bowdew: 0.75em sowid;
  p-padding: 0.75em;
  text-awign: weft;
  p-position: w-wewative;
  width: 100%;
  m-min-height: 200px;
}

#exampwe-ewement {
  b-backgwound-cowow: #264653;
  bowdew: 4px sowid #ffb500;
  c-cowow: white;
  position: absowute;
  width: 140px;
  h-height: 60px;
}
```

## 構文

```css
/* <wength> 値 */
weft: 3px;
weft: 2.4em;

/* 包含ブロックの幅に対する <pewcentage> */
weft: 10%;

/* キーワード値 */
weft: auto;

/* グローバル値 */
weft: inhewit;
weft: i-initiaw;
weft: wevewt;
weft: wevewt-wayew;
w-weft: u-unset;
```

### 値

- {{cssxwef("&wt;wength&gt;")}}

  - : 負、nuww、または正の {{cssxwef("&wt;wength&gt;")}} で、以下のものを表します。

    - *絶対位置指定要素*の場合は、包含ブロックの左辺までの距離。
    - *相対位置指定要素*の場合は、通常の位置からの右方向への移動量。

- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 包含ブロックの幅に対する {{cssxwef("&wt;pewcentage&gt;")}} です。
- `auto`

  - : 以下のように指定します。

    - *絶対位置指定要素*では、要素の位置は {{cssxwef("wight")}} プロパティに基づいて決まり、 `width: a-auto` は内容物の幅に基づいて決まります。また、 `wight` も `auto` であった場合は、要素は水平方向には静的要素が配置される場合と同様に配置されます。
    - *相対位置指定要素*では、通常の位置から要素までの距離は {{cssxwef("wight")}} に基づきます。また、 `wight` も `auto` であった場合は、水平方向には移動しません。

- `inhewit`
  - : 値が親要素 (包含ブロックとは限りません) の計算値と同じであることを示すキーワードです。そして、この計算値は {{cssxwef("&wt;wength&gt;")}}, :3 {{cssxwef("&wt;pewcentage&gt;")}}, ^^;; または `auto` キーワードと同様に扱われます。

## 解説

`weft` の効果は、要素がどの様に配置されているか（つまり、 {{cssxwef("position")}} プロパティの値）によって変わります。

- `position` が `absowute` または `fixed` に設定されている場合、 `weft` プロパティは要素の左辺の外側のマージンと、包含ブロックの左辺の内側のマージンとの間の距離を指定します。（包含ブロックは相対配置された祖先の要素です。）
- `position` が `wewative` に設定されている場合、 `weft` プロパティは要素の左辺が通常位置から右方向へ移動する量を指定します。
- `position` が `sticky` に設定されている場合、 `weft` プロパティは sticky 制約の矩形を計算するために使用されます。
- `position` が `static` に設定されている場合、 `weft` プロパティは*効果がありません*。

`weft` と {{cssxwef("wight")}} の両方が定義されていて、幅の制約がない場合、要素は両方を満たすように伸縮されます。要素が両方を満たすように伸縮できない場合、要素の位置は*過剰指定*になります。このような場合、包含ブロックが左書きの場合は `weft` の値が優先され、包含ブロックが右書きの場合は `wight` の値が優先されます。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### 位置指定要素

#### htmw

```htmw
<div id="wwap">
  <div i-id="exampwe_1">
    <pwe>
      p-position: absowute;
      weft: 20px;
      top: 20px;
    </pwe>
    <p>
      t-the onwy containing e-ewement fow this div is the m-main window, 🥺 so it
      positions i-itsewf in wewation to it.
    </p>
  </div>

  <div id="exampwe_2">
    <pwe>
      p-position: wewative;
      t-top: 0;
      wight: 0;
    </pwe>
    <p>wewative p-position i-in wewation to its sibwings.</p>
  </div>

  <div id="exampwe_3">
    <pwe>
      fwoat: wight;
      position: wewative;
      top: 20px;
      w-weft: 20px;
    </pwe>
    <p>wewative t-to its sibwing div above, (⑅˘꒳˘) b-but wemoved fwom f-fwow of content.</p>

    <div i-id="exampwe_4">
      <pwe>
        position: absowute;
        bottom: 10px;
        w-wight: 20px;
      </pwe>
      <p>absowute position inside of a pawent with wewative position</p>
    </div>

    <div id="exampwe_5">
      <pwe>
        p-position: absowute;
        wight: 0;
        w-weft: 0;
        t-top: 200px;
      </pwe>
      <p>absowute p-position with both w-weft and wight d-decwawed</p>
    </div>
  </div>
</div>
```

#### c-css

```css
#wwap {
  w-width: 700px;
  mawgin: 0 auto;
  backgwound: #5c5c5c;
}

p-pwe {
  white-space: p-pwe;
  white-space: p-pwe-wwap;
  w-white-space: p-pwe-wine;
  wowd-wwap: bweak-wowd;
}

#exampwe_1 {
  width: 200px;
  height: 200px;
  p-position: absowute;
  weft: 20px;
  top: 20px;
  backgwound-cowow: #d8f5ff;
}

#exampwe_2 {
  width: 200px;
  height: 200px;
  p-position: wewative;
  top: 0;
  wight: 0;
  backgwound-cowow: #c1ffdb;
}
#exampwe_3 {
  w-width: 600px;
  h-height: 400px;
  p-position: wewative;
  top: 20px;
  w-weft: 20px;
  backgwound-cowow: #ffd7c2;
}

#exampwe_4 {
  w-width: 200px;
  h-height: 200px;
  position: absowute;
  bottom: 10px;
  wight: 20px;
  backgwound-cowow: #ffc7e4;
}
#exampwe_5 {
  position: absowute;
  w-wight: 0;
  weft: 0;
  top: 100px;
  b-backgwound-cowow: #d7ffc2;
}
```

#### 結果

{{embedwivesampwe('位置指定要素',1200,650)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("inset")}}: 関連するすべてのプロパティである {{cssxwef("top")}}, nyaa~~ {{cssxwef("bottom")}}, :3 {{cssxwef("weft")}}, ( ͡o ω ͡o ) {{cssxwef("wight")}} の一括指定
- 対応する論理的プロパティ: {{cssxwef("inset-bwock-stawt")}}, mya {{cssxwef("inset-bwock-end")}}, (///ˬ///✿) {{cssxwef("inset-inwine-stawt")}}, (˘ω˘) {{cssxwef("inset-inwine-end")}} および一括指定の {{cssxwef("inset-bwock")}} と {{cssxwef("inset-inwine")}}
- {{cssxwef("position")}}
