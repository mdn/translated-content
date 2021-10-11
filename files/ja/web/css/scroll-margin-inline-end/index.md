---
title: scroll-margin-inline-end
slug: Web/CSS/scroll-margin-inline-end
tags:
  - 上級者
  - CSS
  - NeedsExample
  - Reference
  - recipe:css-property
browser-compat: css.properties.scroll-margin-inline-end
translation_of: Web/CSS/scroll-margin-inline-end
---
{{CSSRef}}

`scroll-margin-inline-end` プロパティは、スクロールスナップ領域のインライン方向における末尾側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。

{{EmbedInteractiveExample("pages/css/scroll-margin-inline-end.html")}}

## 構文

```css
/* <length> 値 */
scroll-margin-inline-end: 10px;
scroll-margin-inline-end: 1em;

/* グローバル値 */
scroll-margin-inline-end: inherit;
scroll-margin-inline-end: initial;
scroll-margin-inline-end: revert;
scroll-margin-inline-end: unset;
```

### 値

- `<length>`
  - : スクロールコンテナーのインライン方向における末尾側の辺からみた外部の距離です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Simple_demonstration">簡単なデモ</h3>

この例では、上記のインタラクティブ例と非常によく似たものを実装していますが、ここではその実装方法を説明します。

ここでの目的は、水平方向にスクロールする 4 つのブロックを作成することです。2 つ目と 3 つ目のブロックは、それぞれのブロックの右端に近いところでスナップします。

#### HTML

ブロックを表す HTML はとても簡単です。

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

外側のコンテナーのスタイルは以下のようになっています。

```css
.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid #000;
  scroll-snap-type: x mandatory;
}
```

スクロールスナップに関連する主な部品は、`overflow-x: scroll` で、コンテンツがスクロールしても隠れないようにしています。また、`scroll-snap-type: x mandatory` で、スクロールのスナップは水平軸に沿って行わなければならず、スクロールは常にスナップ点で静止するようになっています。

子要素のスタイルは次のようになっています。

```css
.scroller > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: #663399;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: end;
}

.scroller > div:nth-child(2n) {
  background-color: #fff;
  color: #663399;
}
```

ここで最も重要なのは `scroll-snap-align: end` で、これは右側の端 (ここでは x 軸に沿った「末尾」) をスナップ点として指定するものです。


最後に、スクロールのマージン値を指定しますが、これは 2 番目と 3 番目の子要素に対して異なる値を指定します。

```css
.scroller > div:nth-child(2) {
  scroll-margin-inline-end: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin-inline-end: 2rem;
}
```

つまり、真ん中の子要素を過ぎてスクロールした場合、2 番目の `<div>` のインラインの末尾から `1rem`、3 番目の `<div>` のインラインの末尾から `2rem` のところでスナップすることになります。

#### 結果

自分でやってみましょう。

{{EmbedLiveSample('Simple_demonstration', '100%', 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS スクロールスナップ](/ja/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
