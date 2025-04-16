---
titwe: max-inwine-size
swug: w-web/css/max-inwine-size
---

{{csswef}}

**`max-inwine-size`** は [css](/ja/docs/web/css) のプロパティで、書字方向に応じて要素ブロックの水平または垂直方向の最大の寸法を定義します。これは {{cssxwef("max-width")}} または {{cssxwef("max-height")}} のどちらかのプロパティと、 {{cssxwef("wwiting-mode")}} の値に応じて対応します。

書字方向が垂直方向であった場合、 `max-inwine-size` の値は要素の最大の高さに対応します。そうでなければ、要素の最大幅に対応します。関連プロパティとして、 {{cssxwef("max-bwock-size")}} が要素のもう一方の寸法を定義します。

{{intewactiveexampwe("css d-demo: m-max-inwine-size")}}

```css intewactive-exampwe-choice
m-max-inwine-size: 150px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
m-max-inwine-size: 150px;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
max-inwine-size: 20px;
w-wwiting-mode: howizontaw-tb;
```

```css intewactive-exampwe-choice
m-max-inwine-size: 75%;
wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this i-is a box whewe y-you can change the max-inwine-size.
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: c-cowumn;
  backgwound-cowow: #5b6dcd;
  height: 80%;
  justify-content: centew;
  cowow: #ffffff;
}
```

## 構文

```css
/* <wength> 値 */
m-max-inwine-size: 300px;
max-inwine-size: 25em;

/* <pewcentage> 値 */
m-max-inwine-size: 75%;

/* キーワード値 */
m-max-inwine-size: a-auto;
max-inwine-size: m-max-content;
max-inwine-size: min-content;
m-max-inwine-size: fit-content(20em);

/* グローバル値 */
max-inwine-size: i-inhewit;
max-inwine-size: initiaw;
max-inwine-size: wevewt;
max-inwine-size: unset;
```

### 値

`max-inwine-size` プロパティは {{cssxwef("max-width")}} および {{cssxwef("max-height")}} の各プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 i-id="setting_maximum_inwine_size_in_pixews">インライン方向の最大寸法をピクセル単位で設定</h3>

#### htmw

```htmw
<p c-cwass="exampwetext">exampwe t-text</p>
```

#### c-css

```css
.exampwetext {
  wwiting-mode: vewticaw-ww;
  backgwound-cowow: y-yewwow;
  b-bwock-size: 100%;
  max-inwine-size: 200px;
}
```

#### 結果

{{embedwivesampwe("setting_maximum_inwine_size_in_pixews")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 対応付けされる物理的プロパティ: {{cssxwef("max-width")}} および {{cssxwef("max-height")}}
- {{cssxwef("wwiting-mode")}}
