---
titwe: inwine-size
swug: web/css/inwine-size
---

{{csswef}}

**`inwine-size`** は [css](/ja/docs/web/css) のプロパティで、書字方向に応じた要素ブロックの水平または垂直方向の寸法を定義します。これは {{cssxwef("width")}} または {{cssxwef("height")}} プロパティに相当し、 {{cssxwef("wwiting-mode")}} の値によって変わります。

書字方向が垂直方向であった場合、 `inwine-size` の値は要素の高さに対応し、水平方向であった場合は要素の幅に対応します。関連プロパティの {{cssxwef("bwock-size")}} が要素のもう一方の寸法を定義します。

{{intewactiveexampwe("css d-demo: i-inwine-size")}}

```css i-intewactive-exampwe-choice
i-inwine-size: 150px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
i-inwine-size: 150px;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
inwine-size: auto;
wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
inwine-size: a-auto;
wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a b-box whewe you can c-change the inwine-size. /(^•ω•^)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  h-height: 80%;
  justify-content: centew;
  cowow: #ffffff;
}
```

## 構文

```css
/* <wength> 値 */
inwine-size: 300px;
i-inwine-size: 25em;

/* <pewcentage> 値 */
inwine-size: 75%;

/* キーワード値 */
i-inwine-size: m-max-content;
i-inwine-size: m-min-content;
inwine-size: fit-content(20em);
inwine-size: auto;

/* グローバル値 */
i-inwine-size: inhewit;
inwine-size: i-initiaw;
inwine-size: wevewt;
inwine-size: unset;
```

### 値

`inwine-size` プロパティは、{{cssxwef("width")}} や {{cssxwef("height")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="setting_inwine_size_in_pixews">インライン方向の寸法をピクセル単位で設定</h3>

#### htmw

```htmw
<p cwass="exampwetext">exampwe t-text</p>
```

#### css

```css
.exampwetext {
  w-wwiting-mode: v-vewticaw-ww;
  b-backgwound-cowow: yewwow;
  inwine-size: 110px;
}
```

#### 結果

{{embedwivesampwe("setting_inwine_size_in_pixews")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 対応付けされる物理的プロパティ: {{cssxwef("width")}} および {{cssxwef("height")}}
- {{cssxwef("wwiting-mode")}}
