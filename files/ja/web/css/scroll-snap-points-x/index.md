---
title: scroll-snap-points-x
slug: Web/CSS/scroll-snap-points-x
tags:
  - CSS
  - CSS プロパティ
  - CSS スクロールスナップ
  - 非推奨
  - Reference
  - recipe:css-property
browser-compat: css.properties.scroll-snap-points-x
translation_of: Web/CSS/scroll-snap-points-x
---
{{CSSRef}}{{deprecated_header}}

**`scroll-snap-points-x`** は [CSS](/ja/docs/Web/CSS) のプロパティで、適用先のスクロールコンテナーの内容物におけるスナップ点の水平位置を定義します。

```css
/* キーワード値 */
scroll-snap-points-x: none;

/* 反復スナップ点 */
scroll-snap-points-x: repeat(400px);

/* グローバル値 */
scroll-snap-points-x: inherit;
scroll-snap-points-x: initial;
scroll-snap-points-x: unset;
```

## 構文

### 値

- `none`
  - : スクロールコンテナーはスナップ点を定義しません。スクロールコンテナー内の要素は、スクロールコンテナーに代わってスナップ点を定義することができます。
- `repeat(<length-percentage>)`
  - : スナップ点を定義するための間隔を、コンテナーの関連する先頭の橋から定義します。正の長さのみが許可されます。パーセント値はコンテナーの幅を示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_horizontal_scroll_snap_points">水平スクロールスナップ点の設定</h3>

#### HTML

```html
<div id="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

#### CSS

```css
#container {
  width: 200px;
  overflow: auto;
  white-space: nowrap;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
  font-size: 0;
}

#container > div {
  width: 200px;
  height: 200px;
  display: inline-block;
  line-height: 200px;
  text-align: center;
  font-size: 100px;
}

#container > div:nth-child(even) {
  background-color: #87ea87;
}

#container > div:nth-child(odd) {
  background-color: #87ccea;
}
```

#### 結果

{{EmbedLiveSample("Setting_horizontal_scroll_snap_points", 220, 220)}}

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS スクロールスナップ](/ja/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
