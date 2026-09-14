---
title: 複数の背景画像の使用
slug: Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

**複数の背景画像**を要素に適用できます。これらは、最初に記述した背景が一番上になり、後に記述した背景がその下になるように重ね合わされます。最後の背景にだけ、背景色が指定できます。

複数の背景のは、`background: background1, background2, ...;` のようにカンマ区切りのリストで指定します。この構文は、一括指定の {{cssxref("background")}} プロパティと、{{cssxref("background-color")}} を除く個々のプロパティ、つまり {{cssxref("background-attachment")}}、{{cssxref("background-clip")}}、{{cssxref("background-image")}}、{{cssxref("background-origin")}}、{{cssxref("background-position")}}、{{cssxref("background-repeat")}}、{{cssxref("background-size")}} のどちらでも指定することができます。

## 例

この例では、3 つの背景が重なっています。Firefox のロゴ、泡の画像、そして[線形グラデーション](/ja/docs/Web/CSS/Reference/Values/gradient/linear-gradient)です。

### HTML

```html
<div class="multi-bg-example"></div>
```

### CSS

```css
.multi-bg-example {
  width: 100%;
  height: 400px;
  background-image:
    url("firefox.png"), url("bubbles.png"),
    linear-gradient(to right, rgb(30 75 115 / 100%), transparent);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    bottom right,
    left,
    right;
}
```

### 結果

{{EmbedLiveSample('Example','600','400')}}

ご覧のように、 Firefox のロゴ ({{ cssxref("background-image") }} で最初に記載) が一番上になり、泡の画像がそれに続き、グラデーション (最後に記述) が前述の全ての画像の下に配置されています。後に続くプロパティ ({{ cssxref("background-repeat") }} と {{ cssxref("background-position") }}) はそれぞれの背景に対応して適用されています。つまり、 {{ cssxref("background-repeat") }} の最初の値は最初（最前面）の画像に適用され、後に続くものも順番に適用されます。

## 関連情報

- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
- [CSS グラデーションの使用](/ja/docs/Web/CSS/Guides/Images/Using_gradients)
