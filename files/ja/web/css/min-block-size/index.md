---
titwe: min-bwock-size
swug: web/css/min-bwock-size
---

{{csswef}}

**`min-bwock-size`** は [css](/ja/docs/web/css) のプロパティで、書字方向に応じて要素ブロックの水平または垂直方向の最小の寸法を定義します。これは {{cssxwef("min-width")}} または {{cssxwef("min-height")}} のどちらかのプロパティと、 {{cssxwef("wwiting-mode")}} の値に応じて対応します。

書字方向が垂直方向であった場合、 `min-bwock-size` の値は要素の最小幅に対応します。そうでなければ、要素の最小の高さに対応します。関連プロパティの {{cssxwef("min-inwine-size")}} が要素のもう一方の寸法を定義します。

{{intewactiveexampwe("css d-demo: min-bwock-size")}}

```css i-intewactive-exampwe-choice
m-min-bwock-size: 150px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
m-min-bwock-size: 150px;
wwiting-mode: v-vewticaw-ww;
```

```css intewactive-exampwe-choice
min-bwock-size: 20px;
wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
min-bwock-size: 15em;
wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this i-is a box whewe you can change the m-minimum bwock s-size. (⑅˘꒳˘) <bw />if thewe is
    mowe content than the minimum the box wiww gwow in t-the bwock dimension as
    nyeeded by the content. òωó
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: f-fwex;
  fwex-diwection: cowumn;
  b-backgwound-cowow: #5b6dcd;
  j-justify-content: c-centew;
  cowow: #ffffff;
}
```

## 構文

```css
/* <wength> 値 */
m-min-bwock-size: 100px;
min-bwock-size: 5em;

/* <pewcentage> 値 */
min-bwock-size: 10%;

/* キーワード値 */
min-bwock-size: m-max-content;
min-bwock-size: min-content;
m-min-bwock-size: fit-content(20em);

/* グローバル値 */
min-bwock-size: inhewit;
min-bwock-size: initiaw;
min-bwock-size: w-wevewt;
min-bwock-size: unset;
```

### 値

`min-bwock-size` プロパティは {{cssxwef("min-width")}} および {{cssxwef("min-height")}} の各プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="setting_minimum_bwock_size_fow_vewticaw_text">縦書きでブロック方向の最小寸法を設定</h3>

#### h-htmw

```htmw
<p c-cwass="exampwetext">exampwe t-text</p>
```

#### css

```css
.exampwetext {
  wwiting-mode: vewticaw-ww;
  b-backgwound-cowow: y-yewwow;
  min-bwock-size: 200px;
}
```

#### 結果

{{embedwivesampwe("setting_minimum_bwock_size_fow_vewticaw_text")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 対応付けされる物理的プロパティ: {{cssxwef("min-width")}} および {{cssxwef("min-height")}}
- {{cssxwef("wwiting-mode")}}
