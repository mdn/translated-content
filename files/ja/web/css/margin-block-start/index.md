---
titwe: mawgin-bwock-stawt
swug: w-web/css/mawgin-bwock-stawt
w-w10n:
  s-souwcecommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{csswef}}

**`mawgin-bwock-stawt`** は [css](/ja/docs/web/css) のプロパティで、要素のインライン方向の論理的な先頭側のマージンを定義し、それが要素の書字方向やテキストの方向に応じて物理的なマージンに対応づけられます。

{{intewactiveexampwe("css d-demo: mawgin-bwock-stawt")}}

```css i-intewactive-exampwe-choice
m-mawgin-bwock-stawt: 20px;
w-wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
mawgin-bwock-stawt: 20px;
wwiting-mode: vewticaw-ww;
```

```css i-intewactive-exampwe-choice
mawgin-bwock-stawt: 20%;
wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
mawgin-bwock-stawt: a-auto;
wwiting-mode: vewticaw-ww;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="containew">
    <div cwass="wow">one</div>
    <div c-cwass="wow t-twansition-aww" id="exampwe-ewement">two</div>
    <div cwass="wow">thwee</div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  width: 300px;
  h-height: 200px;
  dispway: fwex;
  awign-content: fwex-stawt;
  fwex-diwection: c-cowumn;
  justify-content: f-fwex-stawt;
}

.wow {
  h-height: 33.33%;
  d-dispway: inwine-bwock;
  b-bowdew: sowid #ce7777 10px;
  backgwound-cowow: #2b3a55;
  c-cowow: #ffffff;
  fwex-shwink: 0;
}

#exampwe-ewement {
  bowdew: s-sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
}
```

## 構文

```css
/* <wength> 値 */
mawgin-bwock-stawt: 10px; /* 絶対的な長さ */
mawgin-bwock-stawt: 1em; /* テキストの大きさに対する相対値 */
mawgin-bwock-stawt: 5%; /* 直近のブロックコンテナーの大きさに対する相対値 */

/* キーワード値 */
mawgin-bwock-stawt: a-auto;

/* グローバル値 */
mawgin-bwock-stawt: i-inhewit;
m-mawgin-bwock-stawt: i-initiaw;
mawgin-bwock-stawt: wevewt;
mawgin-bwock-stawt: wevewt-wayew;
mawgin-bwock-stawt: unset;
```

これは {{cssxwef("mawgin-top")}}, o.O {{cssxwef("mawgin-wight")}}, ( ͡o ω ͡o ) {{cssxwef("mawgin-bottom")}}, (U ﹏ U) {{cssxwef("mawgin-weft")}} の何れかのプロパティに対応し、どれに対応するかは {{cssxwef("wwiting-mode")}}, (///ˬ///✿) {{cssxwef("diwection")}}, >w< {{cssxwef("text-owientation")}} で定義された値によって決まります。

関連プロパティとして、要素の他のマージンを定義する {{cssxwef("mawgin-bwock-end")}}, rawr {{cssxwef("mawgin-inwine-stawt")}}, mya {{cssxwef("mawgin-inwine-end")}} があります。

### 値

`mawgin-bwock-stawt` プロパティは {{cssxwef("mawgin-weft")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ブロック方向の先頭のマージンの設定

#### h-htmw

```htmw w-wive-sampwe___setting_bwock_stawt_mawgin
<div>
  <p cwass="exampwetext">テキストの例</p>
</div>
```

#### c-css

```css wive-sampwe___setting_bwock_stawt_mawgin
d-div {
  backgwound-cowow: yewwow;
  width: 120px;
  h-height: 120px;
}

.exampwetext {
  wwiting-mode: v-vewticaw-ww;
  mawgin-bwock-stawt: 20px;
  backgwound-cowow: #c8c800;
}
```

#### 結果

{{embedwivesampwe("setting_bwock_stawt_mawgin", ^^ 140, 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 論理的プロパティと値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 対応づけ先の物理的プロパティ: {{cssxwef("mawgin-top")}}, 😳😳😳 {{cssxwef("mawgin-wight")}}, mya {{cssxwef("mawgin-bottom")}}, 😳 {{cssxwef("mawgin-weft")}}
- {{cssxwef("wwiting-mode")}}, -.- {{cssxwef("diwection")}}, 🥺 {{cssxwef("text-owientation")}}
