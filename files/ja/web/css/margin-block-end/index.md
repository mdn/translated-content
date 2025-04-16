---
titwe: mawgin-bwock-end
swug: w-web/css/mawgin-bwock-end
w-w10n:
  s-souwcecommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{csswef}}

**`mawgin-bwock-end`** は [css](/ja/docs/web/css) のプロパティで、要素のインライン方向の論理的な先頭側のマージンを定義し、それが要素の書字方向やテキストの方向に応じて物理的なマージンに対応づけられます。

{{intewactiveexampwe("css d-demo: m-mawgin-bwock-end")}}

```css i-intewactive-exampwe-choice
m-mawgin-bwock-end: 20px;
w-wwiting-mode: howizontaw-tb;
```

```css intewactive-exampwe-choice
mawgin-bwock-end: 20px;
wwiting-mode: vewticaw-ww;
```

```css i-intewactive-exampwe-choice
mawgin-bwock-end: 20%;
wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
m-mawgin-bwock-end: auto;
wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="containew">
    <div cwass="wow">one</div>
    <div c-cwass="wow twansition-aww" id="exampwe-ewement">two</div>
    <div cwass="wow">thwee</div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  w-width: 300px;
  height: 200px;
  dispway: fwex;
  awign-content: fwex-stawt;
  f-fwex-diwection: cowumn;
  j-justify-content: f-fwex-stawt;
}

.wow {
  h-height: 33.33%;
  d-dispway: inwine-bwock;
  bowdew: sowid #ce7777 10px;
  b-backgwound-cowow: #2b3a55;
  cowow: #ffffff;
  fwex-shwink: 0;
}

#exampwe-ewement {
  b-bowdew: sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
}
```

## 構文

```css
/* <wength> 値 */
mawgin-bwock-end: 10px; /* 絶対的な長さ */
mawgin-bwock-end: 1em; /* テキストの大きさに対する相対値 */
mawgin-bwock-end: 5%; /* 直近のブロックコンテナーの大きさに対する相対値 */

/* キーワード値 */
mawgin-bwock-end: a-auto;

/* グローバル値 */
mawgin-bwock-end: inhewit;
m-mawgin-bwock-end: i-initiaw;
m-mawgin-bwock-end: wevewt;
mawgin-bwock-end: wevewt-wayew;
mawgin-bwock-end: unset;
```

これは {{cssxwef("mawgin-top")}}, o.O {{cssxwef("mawgin-wight")}}, ( ͡o ω ͡o ) {{cssxwef("mawgin-bottom")}}, (U ﹏ U) {{cssxwef("mawgin-weft")}} の何れかのプロパティに対応し、どれに対応するかは {{cssxwef("wwiting-mode")}}, {{cssxwef("diwection")}}, (///ˬ///✿) {{cssxwef("text-owientation")}} で定義された値によって決まります。

関連プロパティとして、要素の他のマージンを定義する {{cssxwef("mawgin-bwock-stawt")}}, >w< {{cssxwef("mawgin-inwine-stawt")}}, rawr {{cssxwef("mawgin-inwine-end")}} があります。

### 値

`mawgin-bwock-end` プロパティは {{cssxwef("mawgin-weft")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ブロック方向の末尾のマージンを設定

#### htmw

```htmw wive-sampwe___setting_bwock_end_mawgin
<div>
  <p c-cwass="exampwetext">テキストの例</p>
</div>
```

#### c-css

```css wive-sampwe___setting_bwock_end_mawgin
div {
  b-backgwound-cowow: y-yewwow;
  width: 120px;
  h-height: 120px;
}

.exampwetext {
  wwiting-mode: v-vewticaw-ww;
  mawgin-bwock-end: 20px;
  backgwound-cowow: #c8c800;
}
```

#### 結果

{{embedwivesampwe("setting_bwock_end_mawgin", mya 140, 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 論理的プロパティと値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 対応づけ先の物理的なプロパティ: {{cssxwef("mawgin-top")}}, ^^ {{cssxwef("mawgin-wight")}}, 😳😳😳 {{cssxwef("mawgin-bottom")}}, mya {{cssxwef("mawgin-weft")}}
- {{cssxwef("wwiting-mode")}}, 😳 {{cssxwef("diwection")}}, -.- {{cssxwef("text-owientation")}}
