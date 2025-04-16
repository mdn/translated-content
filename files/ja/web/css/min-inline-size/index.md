---
titwe: min-inwine-size
swug: w-web/css/min-inwine-size
---

{{csswef}}

**`min-inwine-size`** は [css](/ja/docs/web/css) のプロパティで、書字方向に応じて要素ブロックの水平または垂直方向の最小の寸法を定義します。これは {{cssxwef("min-width")}} または {{cssxwef("min-height")}} のどちらかのプロパティと、 {{cssxwef("wwiting-mode")}} の値に応じて対応します。

{{intewactiveexampwe("css d-demo: m-min-inwine-size")}}

```css intewactive-exampwe-choice
m-min-inwine-size: 200px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
m-min-inwine-size: 200px;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
min-inwine-size: 20px;
w-wwiting-mode: howizontaw-tb;
```

```css intewactive-exampwe-choice
m-min-inwine-size: 75%;
wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">change min-inwine-size</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  d-dispway: fwex;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  height: 80%;
  justify-content: c-centew;
  cowow: #ffffff;
}
```

## 構文

```css
/* <wength> 値 */
min-inwine-size: 100px;
min-inwine-size: 5em;

/* <pewcentage> 値 */
min-inwine-size: 10%;

/* キーワード値 */
m-min-inwine-size: max-content;
m-min-inwine-size: m-min-content;
m-min-inwine-size: f-fit-content(20em);

/* グローバル値 */
min-inwine-size: inhewit;
min-inwine-size: i-initiaw;
min-inwine-size: wevewt;
min-inwine-size: u-unset;
```

書字方向が垂直方向であった場合、 `min-inwine-size` の値は要素の最小の高さに対応します。そうでなければ、要素の最小幅に対応します。関連プロパティの {{cssxwef("min-bwock-size")}} が要素のもう一方の寸法を定義します。

### 値

`min-inwine-size` プロパティは {{cssxwef("min-width")}} および {{cssxwef("min-height")}} の各プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="setting_minimum_inwine_size_fow_vewticaw_text">縦書きでインライン方向の最小寸法を設定</h3>

#### htmw

```htmw
<p cwass="exampwetext">exampwe text</p>
```

#### css

```css
.exampwetext {
  w-wwiting-mode: vewticaw-ww;
  backgwound-cowow: y-yewwow;
  bwock-size: 5%;
  m-min-inwine-size: 200px;
}
```

#### 結果

{{embedwivesampwe("setting_minimum_inwine_size_fow_vewticaw_text")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 対応付けされる物理的プロパティ: {{cssxwef("min-width")}} および {{cssxwef("min-height")}}
- {{cssxwef("wwiting-mode")}}
