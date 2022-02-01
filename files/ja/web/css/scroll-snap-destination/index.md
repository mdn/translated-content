---
title: scroll-snap-destination
slug: Web/CSS/scroll-snap-destination
tags:
  - CSS
  - CSS プロパティ
  - CSS スクロールスナップ
  - 非推奨
  - Reference
  - recipe:css-property
browser-compat: css.properties.scroll-snap-destination
translation_of: Web/CSS/scroll-snap-destination
---
{{CSSRef}}{{deprecated_header}}

**`scroll-snap-destination`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スクロールコンテナーの視覚{{Glossary("viewport", "ビューポート")}}内の要素のスナップ点が配置される X および Y 座標の位置を定義します。

```css
/* <position> 値 */
scroll-snap-destination: 400px 600px;

/* グローバル値 */
scroll-snap-destination: inherit;
scroll-snap-destination: initial;
scroll-snap-destination: unset;
```

## 構文

### 値

- `<position>`
  - : スクロールコンテナーの視覚ビューポートの先頭側の端からのスナップ距離のオフセットを指定します。最初の値はスナップ距離の X 座標、二番目の値は Y 座標です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_scroll_snap_destination">スクロールスナップの宛先を設定</h3>

#### HTML

```html
<div id="container">
  <div>
    <p>At coordinate (0, 0)</p>
    <div class="scrollContainer destination0">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>At coordinate (25, 0)</p>
    <div class="scrollContainer destination25">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>At coordinate (50, 0)</p>
    <div class="scrollContainer destination50">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</div>
```

#### CSS

```css
#container {
  display: flex;
}

#container > div:nth-child(-n+2) {
  margin-right: 20px;
}

.scrollContainer {
  width: 100px;
  overflow: auto;
  white-space: nowrap;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
  scroll-snap-destination: 20px 0;
  font-size: 0;
}

.destination0 {
  scroll-snap-destination: 0 0;
}

.destination25 {
  scroll-snap-destination: 25px 0;
}

.destination50 {
  scroll-snap-destination: 50px 0;
}

.scrollContainer > div {
  width: 100px;
  height: 100px;
  display: inline-block;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
}

.scrollContainer > div:nth-child(even) {
  background-color: #87EA87;
}

.scrollContainer > div:nth-child(odd) {
  background-color: #87CCEA;
}
```

#### 結果

{{EmbedLiveSample("Setting_scroll_snap_destination", "100%", "170")}}

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS スクロールスナップ](/ja/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
