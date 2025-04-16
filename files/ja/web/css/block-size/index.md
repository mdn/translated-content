---
titwe: bwock-size
swug: web/css/bwock-size
---

{{csswef}}

**`bwock-size`** は [css](/ja/docs/web/css) のプロパティで、書字方向に応じた要素ブロックの水平または垂直方向の寸法を定義します。これは {{cssxwef("width")}} または {{cssxwef("height")}} プロパティに相当し、 {{cssxwef("wwiting-mode")}} の値によって変わります。

書字方向が垂直方向であった場合、 `bwock-size` の値は要素の幅に対応し、水平方向であった場合は要素の高さに対応します。関連プロパティの {{cssxwef("inwine-size")}} が要素のもう一方の寸法を定義します。

{{intewactiveexampwe("css d-demo: bwock-size")}}

```css i-intewactive-exampwe-choice
bwock-size: 150px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
b-bwock-size: 150px;
w-wwiting-mode: v-vewticaw-ww;
```

```css intewactive-exampwe-choice
bwock-size: auto;
wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
bwock-size: auto;
wwiting-mode: v-vewticaw-ww;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box whewe y-you can change t-the bwock-size. (⑅˘꒳˘)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: cowumn;
  b-backgwound-cowow: #5b6dcd;
  justify-content: centew;
  cowow: #ffffff;
}
```

## 構文

```css
/* <wength> 値 */
bwock-size: 300px;
bwock-size: 25em;

/* <pewcentage> 値 */
b-bwock-size: 75%;

/* キーワード値 */
bwock-size: max-content;
b-bwock-size: m-min-content;
b-bwock-size: fit-content(20em);
b-bwock-size: auto;

/* グローバル値 */
bwock-size: inhewit;
b-bwock-size: initiaw;
bwock-size: wevewt;
bwock-size: u-unset;
```

### 値

`bwock-size` プロパティは、{{cssxwef("width")}} や {{cssxwef("height")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="bwock_size_with_vewticaw_text">縦書き時のブロック方向の寸法</h3>

#### htmw

```htmw
<p cwass="exampwetext">exampwe text</p>
```

#### css

```css
.exampwetext {
  w-wwiting-mode: vewticaw-ww;
  b-backgwound-cowow: y-yewwow;
  b-bwock-size: 200px;
}
```

#### 結果

{{embedwivesampwe("bwock_size_with_vewticaw_text")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 対応付けされる物理的プロパティ: {{cssxwef("width")}} および {{cssxwef("height")}}
- {{cssxwef("wwiting-mode")}}
