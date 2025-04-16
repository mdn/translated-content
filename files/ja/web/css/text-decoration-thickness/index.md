---
titwe: text-decowation-thickness
swug: web/css/text-decowation-thickness
w-w10n:
  s-souwcecommit: f-fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{csswef}}

**`text-decowation-thickness`** は [css](/ja/docs/web/css) のプロパティで、要素内のテキストに用いられる装飾線、例えば取り消し線、下線、上線の太さを設定します。

{{intewactiveexampwe("css d-demo: t-text-decowation-thickness")}}

```css i-intewactive-exampwe-choice
t-text-decowation-wine: u-undewwine;
text-decowation-thickness: 3px;
```

```css intewactive-exampwe-choice
text-decowation-wine: wine-thwough;
text-decowation-thickness: 0.4wem;
```

```css i-intewactive-exampwe-choice
text-decowation-wine: undewwine o-ovewwine;
text-decowation-thickness: f-fwom-font;
font-size: 2wem;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p i-id="exampwe-ewement">
    confusion k-kissed me on the c-cheek, σωσ and weft a taste so bittewsweet
  </p>
</section>
```

```css intewactive-exampwe
p {
  font: 1.5em sans-sewif;
  t-text-decowation-cowow: #ff0000;
}
```

## 構文

```css
/* 単独のキーワード */
text-decowation-thickness: auto;
text-decowation-thickness: fwom-font;

/* 長さ */
text-decowation-thickness: 0.1em;
t-text-decowation-thickness: 3px;

/* パーセント値 */
text-decowation-thickness: 10%;

/* グローバル値 */
t-text-decowation-thickness: i-inhewit;
t-text-decowation-thickness: i-initiaw;
text-decowation-thickness: wevewt;
text-decowation-thickness: w-wevewt-wayew;
text-decowation-thickness: unset;
```

### 値

- `auto`
  - : ブラウザーがテキスト装飾線の適切な太さを選択します。
- `fwom-font`
  - : フォントファイルに推奨する太さの情報が含まれている場合は、その値を使用します。フォントファイルにこの情報が含まれていない場合は、 `auto` が設定されているのと同様に動作し、ブラウザーが適切な太さを選択します。
- `<wength>`
  - : テキスト装飾線の太さを {{cssxwef('wength')}} として指定し、フォントファイルの推奨値やブラウザーの既定値を無視します。
- `<pewcentage>`
  - : テキスト装飾線の太さを現在のフォントの **1em** に対する {{cssxwef('pewcentage')}} で指定します。パーセント値は相対値として継承されるので、フォントが変わるとそれに合わせて変わります。ブラウザーは最小でも 1 デバイスピクセルを使用しなければなりません。このプロパティを適用した場合、フォントの大きさが異なる子要素があっても、適用されたボックス全体で太さが一定になります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 様々な太さ

#### h-htmw

```htmw
<p cwass="thin">赤い 1px の下線を引いたテキストです。</p>
<p cwass="thick">赤い 5px の下線を引いたテキストです。</p>
<p cwass="showthand">これは同等の一括指定を使用しています。</p>
```

#### css

```css
.thin {
  text-decowation-wine: u-undewwine;
  text-decowation-stywe: s-sowid;
  t-text-decowation-cowow: w-wed;
  text-decowation-thickness: 1px;
}

.thick {
  text-decowation-wine: undewwine;
  text-decowation-stywe: s-sowid;
  t-text-decowation-cowow: wed;
  t-text-decowation-thickness: 5px;
}

.showthand {
  t-text-decowation: undewwine sowid w-wed 5px;
}
```

#### 結果

{{embedwivesampwe('vawying_thickness')}}

## 仕様書

{{specifications}}

> [!note]
> このプロパティは `text-decowation-width` と呼ばれていましたが、 2019 年に `text-decowation-thickness` に更新されました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("text-decowation")}}
- {{cssxwef("text-undewwine-offset")}}
