---
title: paint()
slug: Web/CSS/image/paint()
tags:
  - CSS
  - CSS 関数
  - CSS4-images
  - 関数
  - Houdini
  - リファレンス
  - ウェブ
browser-compat: css.types.image.paint
translation_of: Web/CSS/image/paint()
original_slug: Web/CSS/paint()
---
{{CSSRef}}{{SeeCompatTable}}

**`paint()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、 PaintWorklet で生成された {{cssxref("&lt;image&gt;")}} の値を定義します。

## 構文

```css
paint(workletName, parameters)
```

凡例

- _workletName_
  - : 登録された Worklet の名前です。
- _parameters_
  - : PaintWorklet へ渡される省略可能な追加の引数です。

## 例

### 基本的な使用例

CSS の paint() 関数で追加の引数を渡すことができます。この例では、 2 つの引数を渡しています。リストアイテムのグループの背景画像が塗りつぶしか輪郭線だけかと、輪郭線の太さです。

```html hidden
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
    <li>item 11</li>
    <li>item 12</li>
    <li>item 13</li>
    <li>item 14</li>
    <li>item 15</li>
    <li>item 16</li>
    <li>item 17</li>
    <li>item 18</li>
    <li>item 19</li>
    <li>item 20</li>
</ul>
```

```js hidden
  CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js');
```

```css
li {
   --boxColor: hsla(55, 90%, 60%, 1.0);
   background-image: paint(hollowHighlights, stroke, 2px);
}

li:nth-of-type(3n) {
   --boxColor: hsla(155, 90%, 60%, 1.0);
   background-image: paint(hollowHighlights, filled,  3px);
}

li:nth-of-type(3n+1) {
   --boxColor: hsla(255, 90%, 60%, 1.0);
   background-image: paint(hollowHighlights, stroke, 1px);
}
```

boxColor を定義しているセレクターブロックにカスタムプロパティを設定しました。カスタムプロパティは PaintWorklet にアクセスすることができます。

{{EmbedLiveSample("Examples", 300, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('PaintWorklet')}}
- {{domxref('CSS Painting API')}}
- [CSS Painting API の使用](/ja/docs/Web/API/CSS_Painting_API/Guide)
- {{cssxref("&lt;image&gt;")}}
- {{domxref("canvas")}}
