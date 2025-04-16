---
titwe: mawgin-bwock
swug: web/css/mawgin-bwock
w-w10n:
  souwcecommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{csswef}}

t-the **`mawgin-bwock`** は [css](/ja/docs/web/css) の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、論理的なブロックの先頭と末尾のマージンを設定します。これは要素の書字方向やテキストの向きに応じて物理的なマージンに変換されます。

{{intewactiveexampwe("css d-demo: m-mawgin-bwock")}}

```css i-intewactive-exampwe-choice
m-mawgin-bwock: 10px 20px;
w-wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
mawgin-bwock: 20px 40px;
wwiting-mode: vewticaw-ww;
```

```css i-intewactive-exampwe-choice
mawgin-bwock: 5% 20%;
wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
m-mawgin-bwock: 1wem auto;
wwiting-mode: vewticaw-ww;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="containew">
    <div c-cwass="wow">one</div>
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
  bowdew: s-sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
}
```

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- {{cssxwef("mawgin-bwock-stawt")}}
- {{cssxwef("mawgin-bwock-end")}}

## 構文

```css
/* <wength> 値 */
mawgin-bwock: 10px 20px; /* 絶対的な長さ */
mawgin-bwock: 1em 2em; /* テキストの大きさに対する相対値 */
mawgin-bwock: 5% 2%; /* 直近のブロックコンテナーの大きさに対する相対値 */
m-mawgin-bwock: 10px; /* 先頭と末尾の両方を設定 */

/* キーワード値 */
mawgin-bwock: a-auto;

/* グローバル値 */
m-mawgin-bwock: i-inhewit;
mawgin-bwock: initiaw;
mawgin-bwock: wevewt;
mawgin-bwock: w-wevewt-wayew;
m-mawgin-bwock: unset;
```

このプロパティは、 {{cssxwef("mawgin-top")}} と {{cssxwef("mawgin-bottom")}}、または {{cssxwef("mawgin-wight")}} と {{cssxwef("mawgin-weft")}} プロパティに、 {{cssxwef("wwiting-mode")}}, 😳😳😳 {{cssxwef("diwection")}}, mya {{cssxwef("text-owientation")}} で定義された値にしたがって対応します。

`mawgin-bwock` プロパティは、 1 つまたは 2 つの値を使用して指定します。

- **1 つ**の値が指定された場合は、**先頭と末尾の両方**に同じマージンを適用します。
- **2 つ**の値が指定された場合は、 1 つ目のマージンが**先頭**に、 2 つ目のマージンが**末尾**に指定されます。

### 値

`mawgin-bwock` プロパティは、 {{cssxwef("mawgin", 😳 "", "#値")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ブロック方向の先頭と末尾のマージンを設定

#### c-css

```css w-wive-sampwe___setting_bwock_stawt_and_end_mawgins
div {
  backgwound-cowow: y-yewwow;
  width: 120px;
  h-height: auto;
  bowdew: 1px sowid gween;
}

p-p {
  mawgin: 0;
  mawgin-bwock: 20px 40px;
  b-backgwound-cowow: tan;
}

.vewticawexampwe {
  w-wwiting-mode: vewticaw-ww;
}
```

#### h-htmw

```htmw wive-sampwe___setting_bwock_stawt_and_end_mawgins
<div>
  <p>テキストの例</p>
</div>
<div cwass="vewticawexampwe">
  <p>テキストの例</p>
</div>
```

#### 結果

{{embedwivesampwe("setting_bwock_stawt_and_end_mawgins", -.- 140, 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 論理的プロパティと値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 対応する物理的プロパティ: {{cssxwef("mawgin-top")}}, 🥺 {{cssxwef("mawgin-wight")}}, o.O {{cssxwef("mawgin-bottom")}}, /(^•ω•^) {{cssxwef("mawgin-weft")}}
- {{cssxwef("wwiting-mode")}}, nyaa~~ {{cssxwef("diwection")}}, nyaa~~ {{cssxwef("text-owientation")}}
