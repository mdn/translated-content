---
title: scroll-snap-coordinate
slug: Web/CSS/scroll-snap-coordinate
tags:
  - CSS
  - CSS プロパティ
  - CSS スクロールスナップ
  - 非推奨
  - Reference
  - recipe:css-property
browser-compat: css.properties.scroll-snap-coordinate
translation_of: Web/CSS/scroll-snap-coordinate
---
{{CSSRef}}{{deprecated_header}}

**`scroll-snap-coordinate`** は [CSS](/ja/docs/Web/CSS)のプロパティで、このプロパティは、最も近い祖先のスクロールコンテナーの {{cssxref("scroll-snap-destination")}} に配置される要素内の X 座標と Y 座標の位置をそれぞれの軸で定義します。

```css
/* キーワード値 */
scroll-snap-coordinate: none;

/* <position> 値 */
scroll-snap-coordinate: 50px 50px;                   /* 単一の座標 */
scroll-snap-coordinate: 100px 100px, 100px bottom;   /* 複数の座標 */

/* グローバル値 */
scroll-snap-coordinate: inherit;
scroll-snap-coordinate: initial;
scroll-snap-coordinate: unset;
```

要素が変換されていた場合は、スナップ座標はそのように変換されるので、スナップ点の配置は要素が表示された時に行われます。

## 構文

### 値

- `none`
  - : 要素がスナップ点を提供しないことを示します。
- {{cssxref("&lt;position&gt;")}}
  - : スナップ座標を要素の境界ボックスの開始側の辺からのオフセットで示します。それぞれの組は、最初の値がスナップ座標の X 座標で、二番目の値は Y 座標です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_scroll_snap_coordinates">スクロールスナップ座標の設定</h3>

#### HTML

```html
<div id="container">
  <div>
    <p>At coordinate (0, 0)</p>
    <div class="scrollContainer coordinate0">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>At coordinate (25, 0)</p>
    <div class="scrollContainer coordinate25">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>At coordinate (50, 0)</p>
    <div class="scrollContainer coordinate50">
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
  scroll-snap-type: mandatory;
  font-size: 0;
}

.scrollContainer > div {
  width: 100px;
  height: 100px;
  display: inline-block;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
}

.coordinate0 > div {
  scroll-snap-coordinate: 0 0;
}

.coordinate25 > div {
  scroll-snap-coordinate: 25px 0;
}

.coordinate50 > div {
  scroll-snap-coordinate: 50px 0;
}

.scrollContainer > div:nth-child(even) {
  background-color: #87ea87;
}

.scrollContainer > div:nth-child(odd) {
  background-color: #87ccea;
}
```

#### 結果

{{EmbedLiveSample("Setting_scroll_snap_coordinates", "100%", "170")}}

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS スクロールスナップ](/ja/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
