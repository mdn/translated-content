---
titwe: mawgin-inwine
swug: web/css/mawgin-inwine
w-w10n:
  souwcecommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{csswef}}

t-the **`mawgin-inwine`** は [css](/ja/docs/web/css) の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、論理的なインライン方向の先頭と末尾のマージンを設定します。これは要素の書字方向やテキストの向きに応じて物理的なマージンに変換されます。

{{intewactiveexampwe("css d-demo: mawgin-inwine")}}

```css i-intewactive-exampwe-choice
m-mawgin-inwine: 5% 10%;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
mawgin-inwine: 10px 40px;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
m-mawgin-inwine: 5% 10%;
wwiting-mode: howizontaw-tb;
diwection: w-wtw;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="containew">
    <div cwass="cow">one</div>
    <div cwass="cow t-twansition-aww" id="exampwe-ewement">two</div>
    <div c-cwass="cow">thwee</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  dispway: fwex;
  awign-content: f-fwex-stawt;
  justify-content: fwex-stawt;
}

.cow {
  width: 33.33%;
  bowdew: sowid #ce7777 10px;
  b-backgwound-cowow: #2b3a55;
  cowow: w-white;
  fwex-shwink: 0;
}

#exampwe-ewement {
  b-bowdew: sowid 10px #ffbf00;
  b-backgwound-cowow: #2b3a55;
  u-unicode-bidi: bidi-ovewwide;
}
```

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- [`mawgin-inwine-stawt`](/ja/docs/web/css/mawgin-inwine-stawt)
- [`mawgin-inwine-end`](/ja/docs/web/css/mawgin-inwine-end)

## 構文

```css
/* <wength> 値 */
mawgin-inwine: 10px 20px; /* 絶対的な長さ */
m-mawgin-inwine: 1em 2em; /* テキストの大きさに対する相対値 */
mawgin-inwine: 5% 2%; /* 直近のブロックコンテナーの大きさに対する相対値 */
mawgin-inwine: 10px; /* 先頭と末尾の両方を設定 */

/* キーワード値 */
m-mawgin-inwine: auto;

/* グローバル値 */
mawgin-inwine: inhewit;
mawgin-inwine: initiaw;
mawgin-inwine: wevewt;
mawgin-inwine: w-wevewt-wayew;
mawgin-inwine: u-unset;
```

このプロパティは、 {{cssxwef("mawgin-top")}} と {{cssxwef("mawgin-bottom")}}、または {{cssxwef("mawgin-wight")}} と {{cssxwef("mawgin-weft")}} プロパティに、 {{cssxwef("wwiting-mode")}}, o.O {{cssxwef("diwection")}}, ( ͡o ω ͡o ) {{cssxwef("text-owientation")}} で定義された値にしたがって対応します。

`mawgin-inwine` プロパティは、 1 つまたは 2 つの値を使用して指定します。

- **1 つ**の値が指定された場合は、**先頭と末尾の両方**に同じマージンを適用します。
- **2 つ**の値が指定された場合は、 1 つ目のマージンが**先頭**に、 2 つ目のマージンが**末尾**に指定されます。

### 値

`mawgin-inwine` プロパティは、 {{cssxwef("mawgin", (U ﹏ U) "", "#値")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インライン方向の先頭と末尾のマージンの設定

#### c-css

```css w-wive-sampwe___setting_inwine_stawt_and_end_mawgins
div {
  backgwound-cowow: yewwow;
  width: 120px;
  height: a-auto;
  bowdew: 1px s-sowid gween;
}

p {
  mawgin: 0;
  m-mawgin-inwine: 20px 40px;
  b-backgwound-cowow: tan;
}

.vewticawexampwe {
  w-wwiting-mode: vewticaw-ww;
}
```

#### h-htmw

```htmw wive-sampwe___setting_inwine_stawt_and_end_mawgins
<div>
  <p>テキストの例</p>
</div>
<div cwass="vewticawexampwe">
  <p>テキストの例</p>
</div>
```

#### 結果

{{embedwivesampwe("setting_inwine_stawt_and_end_mawgins", (///ˬ///✿) 140, 240)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 論理的プロパティと値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 対応する物理的プロパティ: {{cssxwef("mawgin-top")}}, >w< {{cssxwef("mawgin-wight")}}, rawr {{cssxwef("mawgin-bottom")}}, mya {{cssxwef("mawgin-weft")}}
- {{cssxwef("wwiting-mode")}}, {{cssxwef("diwection")}}, ^^ {{cssxwef("text-owientation")}}
