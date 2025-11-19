---
title: saturate()
slug: Web/CSS/Reference/Values/filter-function/saturate
original_slug: Web/CSS/filter-function/saturate
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

**`saturate()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、入力画像の彩度を上げたり下げたりします。結果は {{cssxref("&lt;filter-function&gt;")}} です。

> [!NOTE]
> `saturate()` は RGB 色に対する行列演算として定義されています。これは実際には色を HSL モデルに変換するものではなく、非線形操作です。そのため、特に彩度の高い色の場合、元の色の彩度や明度が維持されない場合があります。

{{InteractiveExample("CSS デモ: saturate()")}}

```css interactive-example-choice
filter: saturate(1);
```

```css interactive-example-choice
filter: saturate(4);
```

```css interactive-example-choice
filter: saturate(50%);
```

```css interactive-example-choice
filter: saturate(0);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

## 構文

```css
saturate(amount)
```

### 引数

- `amount`
  - : 変換の量で、 {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で指定します。 `100%` 未満の値では彩度を下げ、 `100%` を超える値では彩度を上げます。 `0%` の値では画像が完全に彩度がなくなり、 `100%` の値では入力が変更されないままになります。{{Glossary("interpolation","補間")}}の初期値は `1` です。

## 例

### saturate() の正しい値の例

```css
saturate(0)     /* 彩度なし */
saturate(.4)    /* 彩度 40% */
saturate(100%)  /* 効果なし */
saturate(200%)  /* 2 倍の彩度 */
```

### saturate() は色相や明度を保存しない

下記の図は、`hsl(0 50% 50%)` を中間点とする2つのカラーグラデーションを比較したものです。最初のグラデーションは `saturate()` を使用して生成したもので、2つ目は実際の HSL カラー値を使用したものです。 `saturate()` グラデーションが両端で色相と明度の違いを示していることに注目してください。

```html
<div>
  <p><code>saturate()</code> を使用</p>
  <div id="saturate"></div>
</div>
<div>
  <p><code>hsl()</code> を使用</p>
  <div id="hsl"></div>
</div>
```

```css hidden
#saturate,
#hsl {
  display: flex;
  margin: 1em 0;
}

#saturate div,
#hsl div {
  width: 2px;
  height: 100px;
}
```

```js
const saturate = document.getElementById("saturate");
const hsl = document.getElementById("hsl");

for (let i = 0; i <= 200; i++) {
  const div1 = document.createElement("div");
  div1.style.backgroundColor = `hsl(0 ${i / 2}% 50%)`;
  hsl.appendChild(div1);

  const div2 = document.createElement("div");
  div2.style.backgroundColor = "hsl(0 50% 50%)";
  div2.style.filter = `saturate(${i}%)`;
  saturate.appendChild(div2);
}
```

{{EmbedLiveSample('saturate_does_not_preserve_hue_or_lightness','100%','350')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

その他の {{cssxref("filter")}} および {{cssxref("backdrop-filter")}} プロパティの値で使用できる {{cssxref("&lt;filter-function&gt;")}} 関数には、次のものがあります。

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
