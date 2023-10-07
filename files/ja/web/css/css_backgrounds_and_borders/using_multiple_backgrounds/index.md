---
title: 複数の背景画像の利用
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
---

{{CSSRef}}

**複数の背景画像**を要素に適用できます。これらは、最初に記述した背景が一番上になり、後に記述した背景がその下になるように重ね合わされます。最後の背景にだけ、背景色が指定できます。

複数の背景の指定は、下記のように簡単です。

```css
.myclass {
  background: background1, background2, ..., backgroundN;
}
```

{{ cssxref("background-color") }} を除いて、一括指定プロパティの {{ cssxref("background") }} と個々のプロパティの両方で指定できます。つまり、{{ cssxref("background") }}, {{ cssxref("background-attachment") }}, {{ cssxref("background-clip") }}, {{ cssxref("background-image") }}, {{ cssxref("background-origin") }}, {{ cssxref("background-position") }}, {{ cssxref("background-repeat") }}, {{ cssxref("background-size") }} のプロパティは背景ひとつずつに対して指定することができます。

<h2 id="Example">例</h2>

この例では、3 つの背景が重なっています。Firefox のロゴ、泡の画像、そして [linear-gradient](</ja/docs/Web/CSS/gradient/linear-gradient()>) です。

### HTML

```html
<div class="multi-bg-example"></div>
```

### CSS

```css
.multi-bg-example {
  width: 100%;
  height: 400px;
  background-image: url(firefox.png), url(bubbles.png), linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    bottom right,
    left,
    right;
}
```

### 結果

(CodePen で画像が表示されない場合、CSS 部分の「Tidy CSS」をクリックしてください)

{{EmbedLiveSample('Example','600','400')}}

ご覧のように、Firefox のロゴ ({{ cssxref("background-image") }} で最初に記載) が一番上になり、泡の画像がそれに続き、グラデーション (最後に記述) が前述の全ての画像の下に配置されています。後に続くプロパティ ({{ cssxref("background-repeat") }} と {{ cssxref("background-position") }}) はそれぞれの背景に対応して適用されています。つまり、{{ cssxref("background-repeat") }} の最初の値は最初(最前面)の画像に適用され、後に続くものも順番に適用されます。

## 関連情報

- [CSS グラデーションの利用](/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
