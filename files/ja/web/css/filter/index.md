---
title: filter
slug: Web/CSS/filter
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

**`filter`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ぼかしや色変化などのグラフィック効果を要素に適用します。フィルターは画像、背景、境界の描画を調整するためによく使われます。

いくつかの[関数](#関数)、例えば `blur()` や `contrast()` などが利用でき、あらかじめ定義された効果を実現するのに役立てることができます。

{{EmbedInteractiveExample("pages/css/filter.html")}}

## 構文

```css
/* <filter-function> 値 */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* URL */
filter: url("filters.svg#filter-id");

/* 複数のフィルター */
filter: contrast(175%) brightness(3%);
filter: drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue);

/* フィルターを使用しない */
filter: none;

/* グローバル値 */
filter: inherit;
filter: initial;
filter: revert;
filter: revert-layer;
filter: unset;
```

次のように関数と共に使用してください。

```css-nolint
filter: <filter-function> [<filter-function>]* | none;
```

`url()` を使用して [SVG の filter 要素](/ja/docs/Web/SVG/Element/filter)を参照することができます。 SVG の {{SVGElement("filter")}} 要素を参照するには、次のような構文を使用してください。

```css
filter: url(file.svg#filter-element-id);
```

## 関数

`filter` プロパティは `none` または以下にある関数を一つ以上使って指定します。いずれかの関数の引数が妥当でない場合、関数は `none` を返します。特に示す場合を除いて、パーセント記号付きの値（`34%` など）を取る関数は、 10 進数の値（`0.34` など）も受け付けます。

`filter` プロパティ値に複数の関数が指定されている場合、フィルターは順番通りに適用されます。

- {{cssxref("filter-function/blur", "blur()")}}

  - : 入力画像にガウスぼかしを適用します。

    ```css
    filter: blur(5px);
    ```

- {{cssxref("filter-function/brightness", "brightness()")}}

  - : 関数は、入力画像に線形乗数を適用して明るさを明るくしたり暗くしたりします。 `0%` の値を設定すると、完全な黒の画像が作成されます。 `100%` の値を指定すると、入力は変更されません。 `100%` を超える値が許されており、より明るい結果が得られます。

    ```css
    filter: brightness(2);
    ```

- {{cssxref("filter-function/contrast", "contrast()")}}

  - : 入力画像のコントラストを調整します。 `0%` の値を指定するとグレーの画像が作成されます。 `100%` の値を指定すると、入力画像は変更されません。 `100%` を超える値を指定すると、コントラストを増加させます。

    ```css
    filter: contrast(200%);
    ```

- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}

  - : 引数 `<shadow>` を画像の輪郭に沿ってドロップシャドウとして適用します。影の構文は `<box-shadow>` （[CSS 背景と境界モジュール](/ja/docs/Web/CSS/CSS_backgrounds_and_borders)で定義されています）と似ていますが、`inset` キーワードと `spread` 引数は使用できません。すべての `filter` プロパティ値と同様に、`drop-shadow()` 以降のフィルターが影に適用されます。

    ```css
    filter: drop-shadow(16px 16px 10px black);
    ```

- {{cssxref("filter-function/grayscale", "grayscale()")}}

  - : 画像をグレースケールに変換します。値 `100%` は完全にグレースケールです。初期値の `0%` は入力を変更しません。 `0%` と `100%` の間の値は、効果に対する線形乗数です。

    ```css
    filter: grayscale(100%);
    ```

- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}

  - : 色相の角度を回転させます。 `<angle>` の値は、入力サンプルが調整される色相環の度数を定義します。 `0deg` の値では入力は変更されません。

    ```css
    filter: hue-rotate(90deg);
    ```

- {{cssxref("filter-function/invert", "invert()")}}

  - : 入力画像のサンプルを反転します。 `100%` の値を指定すると、完全に反転されます。 `0%` では入力画像が変化しないままになります。 `0%` と `100%` の間は効果の線形乗数になります。

    ```css
    filter: invert(100%);
    ```

- {{cssxref("filter-function/opacity", "opacity()")}}

  - : 透過率を適用します。 `0%` は画像を完全に透明にし、 `100%` は画像をそのままにします。

    ```css
    filter: opacity(50%);
    ```

- {{cssxref("filter-function/saturate", "saturate()")}}

  - : 画像の彩度を設定します。 `0%` は完全に彩度をなくし、 `100%` はそのまま、 `100%` 以上の値は彩度を上げます。

    ```css
    filter: saturate(200%);
    ```

- {{cssxref("filter-function/sepia", "sepia()")}}

  - : 画像をセピア調にします。値を `100%` にすると画像は完全にセピアになり、`0%` にすると何も変わりません。

    ```css
    filter: sepia(100%);
    ```

## 関数の組み合わせ

関数をいくつでも組み合わせてレンダリングを操作できます。フィルターは宣言順に適用されます。次の例は画像のコントラストと明るさを強調します。

```css
filter: contrast(175%) brightness(103%);
```

### 補間

アニメーション時、最初のフィルターと最後のフィルターの両方が同じ長さの関数リストであり、 {{cssxref("url_value", "&lt;url&gt;")}} を持たない場合、それぞれのフィルター関数は、その特有の規則に従って{{Glossary("interpolation", "補間")}}されます。

フィルターリストが異なる形で掲載されている場合、長い方のリストに欠けている同等のフィルター関数が、短い方のリストの終わりに追加されます。追加された関数は、フィルターを変更していない初期値を使用します。掲載されているすべてのフィルターは、フィルター関数特有の仕様に従って補間されます。それ以外の場合は離散補間を用います。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フィルター関数の適用

`filter` プロパティは 2 つ目の画像に適用され、画像とその境界の両方を灰色にして不鮮明にします。

```css
img {
  border: 5px solid yellow;
}
/* 2 番目の画像を 40% グレー化、 5px でぼかす */
img:nth-of-type(2) {
  filter: grayscale(0.4) blur(5px);
}
```

```html
<img src="pencil.jpg" alt="元画像はシャープ" />
<img src="pencil.jpg" alt="画像と境界は不鮮明でミュートされています。" />
```

{{EmbedLiveSample('Applying_filter_functions','100%','229px')}}

### 繰り返しフィルター機能

フィルター機能は現れる順に適用されます。同じフィルター関数を繰り返すことができます。

```css
#MDN-logo {
  border: 1px solid blue;
  filter: drop-shadow(5px 5px 0 red) hue-rotate(180deg)
    drop-shadow(5px 5px 0 red);
}
```

```html hidden
<svg
  id="MDN-logo"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 361 104.2"
  xml:space="preserve"
  role="img">
  <title>MDN Web Docs</title>
  <path
    d="M197.6 73.2h-17.1v-5.5h3.8V51.9c0-3.7-.7-6.3-2.1-7.9-1.4-1.6-3.3-2.3-5.7-2.3-3.2 0-5.6 1.1-7.2 3.4s-2.4 4.6-2.5 6.9v15.6h6v5.5h-17.1v-5.5h3.8V51.9c0-3.8-.7-6.4-2.1-7.9-1.4-1.5-3.3-2.3-5.6-2.3-3.2 0-5.5 1.1-7.2 3.3-1.6 2.2-2.4 4.5-2.5 6.9v15.8h6.9v5.5h-20.2v-5.5h6V42.4h-6.1v-5.6h13.4v6.4c1.2-2.1 2.7-3.8 4.7-5.2 2-1.3 4.4-2 7.3-2s5.3.7 7.5 2.1c2.2 1.4 3.7 3.5 4.5 6.4 1.1-2.5 2.7-4.5 4.9-6.1s4.8-2.4 7.9-2.4c3.5 0 6.5 1.1 8.9 3.3s3.7 5.6 3.7 10.2v18.2h6.1v5.5zm42.5 0h-13.2V66c-1.2 2.2-2.8 4.1-4.9 5.6-2.1 1.6-4.8 2.4-8.3 2.4-4.8 0-8.7-1.6-11.6-4.9-2.9-3.2-4.3-7.7-4.3-13.3 0-5 1.3-9.6 4-13.7 2.6-4.1 6.9-6.2 12.8-6.2s9.8 2.2 12.3 6.5V22.7h-8.6v-5.6h15.8v50.6h6v5.5zm-13.3-16.8V52c-.1-3-1.2-5.5-3.2-7.3s-4.4-2.8-7.2-2.8c-3.6 0-6.3 1.3-8.2 3.9-1.9 2.6-2.8 5.8-2.8 9.6 0 4.1 1 7.3 3 9.5s4.5 3.3 7.4 3.3c3.2 0 5.8-1.3 7.8-3.8 2.1-2.6 3.1-5.3 3.2-8zm61.5 16.8H269v-5.5h6V51.9c0-3.7-.7-6.3-2.2-7.9-1.4-1.6-3.4-2.3-5.7-2.3-3.1 0-5.6 1-7.4 3s-2.8 4.4-2.9 7v15.9h6v5.5h-19.3v-5.5h6V42.4h-6.2v-5.6h13.6V43c2.6-4.6 6.8-6.9 12.7-6.9 3.6 0 6.7 1.1 9.2 3.3s3.7 5.6 3.7 10.2v18.2h6v5.4h-.2z"
    style="fill: var(--text-primary);"></path>
  <g style="fill:blue;">
    <path
      d="M42 .2 13.4 92.3H1.7L30.2.2H42zM52.4.2v92.1H42V.2h10.4zm40.3 0L64.2 92.3H52.5L81 .2h11.7zM103.1.2v92.1H92.7V.2h10.4zM294 95h67v8.8h-67V95z"></path>
  </g>
</svg>
```

{{EmbedLiveSample('Repeating_filter_functions','100%','229px')}}

フィルターは順番に適用されます。最初のドロップシャドウの色相は `hue-rotate()` と関数によって変更されますが、 2 つ目のドロップシャドウの色相は変更されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS {{cssxref("backdrop-filter")}} プロパティ
- CSS [合成と混合](/ja/docs/Web/CSS/CSS_compositing_and_blending)モジュール（CSS の {{cssxref("background-blend-mode")}} および {{cssxref("mix-blend-mode")}} プロパティを含む）
- CSS の {{cssxref("mask")}} プロパティ
- [SVG](/ja/docs/Web/SVG) （SVG の {{SVGElement("filter")}} 要素や {{SVGAttr("filter")}} 属性を含む）
- [HTML コンテンツへの SVG 効果の適用](/ja/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
