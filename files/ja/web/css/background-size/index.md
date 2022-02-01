---
title: background-size
slug: Web/CSS/background-size
tags:
  - CSS
  - CSS 背景
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.background-size
translation_of: Web/CSS/background-size
---
{{CSSRef}}

**`background-size`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の背景画像の寸法を設定します。画像は自然な寸法になったり、引き伸ばされたり、利用可能な領域に収まるように縮小されたりします。

{{EmbedInteractiveExample("pages/css/background-size.html")}}

背景画像に覆われていない領域は {{cssxref("background-color")}} プロパティで埋められ、背景画像の後ろに見える背景色は透過性があります。

## 構文

```css
/* キーワード値 */
background-size: cover;
background-size: contain;

/* 値 1 つの構文 */
/* 画像の幅 (高さは 'auto' になる) */
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;

/* 値 2 つの構文 */
/* 1 つ目の値は画像の幅、2番目の値は高さ */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto;

/* 複数の背景 */
background-size: auto, auto; /* `auto auto` と混同しないでください */
background-size: 50%, 25%, 25%;
background-size: 6px, auto, contain;

/* グローバル値 */
background-size: inherit;
background-size: initial;
background-size: revert;
background-size: unset;
```

`background-size` プロパティは以下のいずれか 1 つの方法で指定します。

- `contain` または `cover` のキーワード値を使用
- 幅の値のみを使用、この場合の高さは既定の `auto` になります。
- 幅と高さの値の両方を使用、この場合は 1 番目の値で幅を、2 番目の値で高さを設定します。どちらの値も {{cssxref("&lt;length&gt;")}}、 {{cssxref("&lt;percentage&gt;")}} または `auto` のいずれかになります。

複数の背景画像の寸法を指定するには、それぞれの値をカンマで区切ってください。

### 値

- `contain`
  - : 画像を切り取ったり縦横比を崩したりすることなく、コンテナー内で可能な限り大きくします。コンテナーが画像よりも大きい場合、{{cssxref("background-repeat")}} プロパティが `no-repeat` に設定されていない限り、画像がタイル状に配置されます。
- `cover`
  - : 画像をコンテナーいっぱいにできるだけ大きく拡大縮小し、必要に応じて画像を引き伸ばします。画像の比率が要素と異なる場合は、何もない空間が残らないように、上下または左右が切り取られます。
- `auto`
  - : 背景画像の本来の比率が維持されるように、対応する方向に拡大縮小します。
- {{cssxref("&lt;length&gt;")}}
  - : その軸が指定された長さになるよう画像を拡大縮小します。負の値は使用できません。
- {{cssxref("&lt;percentage&gt;")}}
  - : その軸が*背景配置領域*の指定された割合になるよう拡大縮小します。背景配置領域とは、 {{cssxref("background-origin")}} の値 (既定ではパディングボックス) によって定められます。しかし、背景の {{cssxref("background-attachment")}} の値が `fixed` の場合、配置領域は{{glossary("viewport", "ビューポート")}}全体となります。負の値は使用できません。

## 固有の軸と比率

値の計算は画像の固有の寸法 (幅と高さ) と固有の比率 (幅と高さの比率) に依存します。属性は以下の通りです。

- ビットマップ画像 (JPG など) には、常に固有の寸法と比率があります。
- ベクター画像 (SVG など) には固有の寸法がないことがあります。水平と垂直の両方に固有の寸法がある場合は、固有の比率もあります。固有の寸法がなかったり、一方しかなかったりする場合は、固有の比率がある場合もあるしない場合もあります。
- CSS の {{cssxref("&lt;gradient&gt;")}} には固有の寸法も固有の比率もありません。
- {{cssxref("element()")}} 関数によって作成された背景画像では、それを作成する要素の固有の寸法と比率を使用します。

> **Note:**  Gecko では、 {{cssxref("element()")}} 関数を使用して作成された背景画像は要素の寸法、または要素が SVG の場合は背景配置領域の寸法を持つ画像として扱われ、適切な固有の比率を持ちます。これは非標準の振る舞いです。

固有の寸法と比率に基づき、背景画像の描画寸法は以下のようにして計算されます。

- **`background-size` の幅と高さがともに定義されていて `auto` でない場合:** 背景画像は指定の寸法で描画されます。 
- **`background-size` が `contain` または `cover` の場合:** 固有の比率を維持するため、画像は背景配置領域の中に収まるか、背景配置領域を覆うように描画されます。画像が固有の比率を持たない場合は、背景配置領域の寸法で描画されます。
- **`background-size` が `auto` または `auto auto` の場合:**

  - 画像に水平および垂直の固有の寸法がある場合は、その寸法で描画されます。
  - 画像に固有の寸法も固有の比率もない場合は、背景配置領域の寸法で描画されます。
  - 画像に固有の寸法はない物の固有の比率がある場合は、 `contain` が指定された場合のように描画されます。
  - 画像に一方だけ固有の寸法があり、固有の比率がある場合は、一方の寸法に合わせて描画されます。もう一方の寸法は指定された寸法と固有の比率を使用して計算されます。
  - 画像に一方だけ固有の寸法があり、固有の比率がない場合は、指定された寸法と、もう一方は背景配置領域の寸法を使用して描画されます。

  > **Note:** SVG 画像には [`preserveAspectRatio`](/ja/docs/Web/SVG/Attribute/preserveAspectRatio) 属性があり、既定では `contain` と同等です。明示的に `background-size` が設定されると `preserveAspectRatio` が無視されます。

- **`background-size` の一方が `auto` でもう一方が `auto` ではない場合:**

  - 画像に固有の比率がある場合は、指定された寸法まで拡大縮小されます。指定されていない方の寸法は指定された寸法と固有の比率を使用して計算されます。
  - 画像に固有の比率がない場合は、指定された寸法まで拡大縮小されます。指定されていない方の寸法は、画像の指定された寸法を使用して計算されます。そのような固有の寸法がない場合、背景配置領域の適切な寸法になります。

  > **Note:** 固有の寸法や比率を持たないベクター画像の背景の拡大縮小は、まだすべてのブラウザーで完全に実装されているわけではありません。上記に記述した振る舞いに注意し、結果が適切であるかを複数のブラウザーで確認してください。

### グラデーションでの動き

背景に `<gradient>` を使用し、それに合わせて `background-size` を指定した場合、`auto` を 1 つだけ使用する大きさや、幅の値だけで指定する大きさ (例: `background-size: 50%`) は、指定しないほうがよいでしょう。こういった場合のグラデーションの描画方法は Firefox 8 で変更され、現在のところ [CSS3 の `background-size` 仕様](https://www.w3.org/TR/css3-background/#the-background-size)や [CSS3 の Image Values gradient 仕様](https://dev.w3.org/csswg/css3-images/#gradients)に完全準拠した描画方式をすべて実装していない他ブラウザーと、たいていは一致しません。

```css
.gradient-example {
  width: 50px;
  height: 100px;
  background-image: linear-gradient(blue, red);

  /* 利用が安全ではない */
  background-size: 25px;
  background-size: 50%;
  background-size: auto 50px;
  background-size: auto 50%;

  /* 利用可能 */
  background-size: 25px 50px;
  background-size: 50% 50%;
}
```

なお、 `<gradient>` に対してピクセルの寸法と `auto` を利用することは推奨されません。 Firefox の 8 より前と、 Firefox 8 のレンダリングを実装していないブラウザーでは、背景が指定されている要素の正確な寸法が分からないと、レンダリングできないからです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Tiling_a_large_image">巨大な画像をタイル表示</h3>

2982 x 2808 の Firefox ロゴ画像という大きな画像を考えてみましょう。この画像のコピーを 4 枚、300 x 300 ピクセルの要素にタイル状に配置したいとします。これを実現するには、固定の `background-size` 値として 150 ピクセルを使用します。

#### HTML

```html
<div class="tiledBackground">
</div>
```

#### CSS

```css
.tiledBackground {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
```

#### 結果

{{EmbedLiveSample("Tiling_a_large_image", 340, 340)}}

その他の例は[背景画像の拡大縮小](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [背景画像の拡大縮小](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images)
- [背景 SVG の拡大縮小](/ja/docs/Web/CSS/Scaling_of_SVG_backgrounds)
- {{cssxref("object-fit")}}
