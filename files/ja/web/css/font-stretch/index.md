---
title: font-stretch
slug: Web/CSS/font-stretch
l10n:
  sourceCommit: fb2af1f15456199685a9f4fbaf8c9d003a2bf91f
---

{{CSSRef}}

**`font-stretch`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フォントの normal, condensed, expanded のフェイスを選択します。

{{EmbedInteractiveExample("pages/css/font-stretch.html")}}

## 構文

```css
/* キーワード値 */
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: normal;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;

/* パーセント値 */
font-stretch: 50%;
font-stretch: 100%;
font-stretch: 200%;

/* グローバル値 */
font-stretch: inherit;
font-stretch: initial;
font-stretch: revert;
font-stretch: revert-layer;
font-stretch: unset;
```

このプロパティは、単一のキーワード値または単一の {{cssxref("&lt;percentage&gt;")}} 値として指定することができます。

### 値

- `normal`
  - : 通常のフォントフェイスを指定します。
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : 通常より幅の狭い (condensed) フォントフェイスを指定します。最も幅の狭いフェイスは ultra-condensed です。
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : 通常より幅の広い (expanded) フォントフェイスを指定します。最も幅の広いフェイスは ultra-expanded です。
- `<percentage>`

  - : {{cssxref("&lt;percentage&gt;")}} 値です。このプロパティでは負の数は許可されていません。

### キーワードと数値の対応

以下の表は、キーワード値とパーセントの数値の間の対応を示しています。

| キーワード        | パーセント値 |
| ----------------- | ------------ |
| `ultra-condensed` | 50%          |
| `extra-condensed` | 62.5%        |
| `condensed`       | 75%          |
| `semi-condensed`  | 87.5%        |
| `normal`          | 100%         |
| `semi-expanded`   | 112.5%       |
| `expanded`        | 125%         |
| `extra-expanded`  | 150%         |
| `ultra-expanded`  | 200%         |

## 解説

フォントファミリーによっては追加のフェイスを提供しており、通常より狭い文字、 (_condensed_ フェイス)、通常より広い文字 (_expanded_ フェイス) などがあります。

`font-stretch` を使うと、そのようなフォントで condensed や expanded フェイスを選択することができます。使用しているフォントが condensed や expanded フェイスを提供していない場合は、このプロパティは効果がありません。

#### フォントフェイスの選択

`font-stretch` で与えられた値で選択されるフェイスは、フォントがそのフェイスに対応しているかによります。与えられた値に正確に一致するフェイスがフォントに存在しない場合、値が 100% よりも小さい場合はより狭いフェイスが割り当てられ、100% と等しいか大きい場合はより広いフェイスが割り当てられます。

以下の表は 2 つの異なるフォントにおいて、 `font-stretch` に様々なパーセント値を提供した場合の効果を示しています。

```css hidden
@font-face {
  font-family: "Inconsolata";
  src: url("https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2")
    format("woff2");
  font-stretch: 50% 200%;
}

@font-face {
  font-family: "Anek Malayalam";
  src: url("https://fonts.gstatic.com/s/anekmalayalam/v4/6qLUKZActRTs_mZAJUZWWkhke0nYa-f6__Azq3-gP1W7db9_.woff2")
    format("woff2");
  font-stretch: 75% 125%;
}

td {
  border: solid;
  border-width: 1px;
}

#inconsolata td {
  font:
    90px Inconsolata,
    sans-serif;
}
#anek-malayalam td {
  font: 90px "Anek Malayalam";
}
#inconsolata td:nth-child(2),
#anek-malayalam td:nth-child(2) {
  font-stretch: 50%;
}
#inconsolata td:nth-child(3),
#anek-malayalam td:nth-child(3) {
  font-stretch: 62.5%;
}
#inconsolata td:nth-child(4),
#anek-malayalam td:nth-child(4) {
  font-stretch: 75%;
}
#inconsolata td:nth-child(5),
#anek-malayalam td:nth-child(5) {
  font-stretch: 87.5%;
}
#inconsolata td:nth-child(6),
#anek-malayalam td:nth-child(6) {
  font-stretch: 100%;
}
#inconsolata td:nth-child(7),
#anek-malayalam td:nth-child(7) {
  font-stretch: 112.5%;
}
#inconsolata td:nth-child(8),
#anek-malayalam td:nth-child(8) {
  font-stretch: 125%;
}
#inconsolata td:nth-child(9),
#anek-malayalam td:nth-child(9) {
  font-stretch: 150%;
}
#inconsolata td:nth-child(10),
#anek-malayalam td:nth-child(10) {
  font-stretch: 200%;
}
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">50%</th>
      <th scope="col">62.5%</th>
      <th scope="col">75%</th>
      <th scope="col">87.5%</th>
      <th scope="col">100%</th>
      <th scope="col">112.5%</th>
      <th scope="col">125%</th>
      <th scope="col">150%</th>
      <th scope="col">200%</th>
    </tr>
  </thead>
  <tbody>
    <tr id="inconsolata">
      <th scope="row">Inconsolata</th>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
    </tr>
    <tr id="anek-malayalam">
      <th scope="row">Anek Malayalam</th>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('Font_face_selection', "100%", "300px")}}

- [Anek Malayalam](https://fonts.google.com/specimen/Anek+Malayalam) は 75% から 125% の幅に対応している可変の Google フォントです。この範囲を下回る値と上回る値では、最も一致するフォントが選択されます。
- [Inconsolata](https://fonts.google.com/specimen/Inconsolata) は、 50% から 200% まで連続的に幅を変化させることができる可変フォントです。 <!-- Note, dynamically obtained woff2 from Google fonts using query: https://fonts.googleapis.com/css2?family=Inconsolata:wdth@50..200 -->

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フォントの引き伸ばしパーセント値の設定

{{EmbedGHLiveSample("css-examples/variable-fonts/font-stretch.html", '100%', 950)}}

## 仕様書

{{Specifications}}

> **メモ:** CSS プロパティ `font-stretch` は初め CSS 2 で定義されましたが、CSS 2.1 で実装経験不足のため外されました。CSS 3 では新しく定義されました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- [基本的なテキストとフォントの装飾](/ja/docs/Learn/CSS/Styling_text/Fundamentals)
