---
title: scroll-snap-type
slug: Web/CSS/scroll-snap-type
---

{{CSSRef}}

**`scroll-snap-type`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スナップ点が存在する場合にスクロールコンテナーにどれだけ厳密にスナップ点を強制するかを設定します。

{{EmbedInteractiveExample("pages/css/scroll-snap-type.html")}}

スナップ点へ強制するために使用する詳細なアニメーションや力学の指定はこのプロパティでは扱わず、ユーザーエージェントに委ねられます。

```css
/* キーワード値 */
scroll-snap-type: none;
scroll-snap-type: x;
scroll-snap-type: y;
scroll-snap-type: block;
scroll-snap-type: inline;
scroll-snap-type: both;

/* 任意の mandatory | proximity*/
scroll-snap-type: x mandatory;
scroll-snap-type: y proximity;
scroll-snap-type: both mandatory;

/* など */

/* グローバル値 */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: unset;
```

## 構文

### 値

- `none`
  - : このスクロールコンテナーの視覚{{Glossary("viewport", "ビューポート")}}がスクロールする時は、スナップ点を無視しなければなりません。
- `x`
  - : スクロールコンテナーは水平軸のみで、スナップ位置に合わせられます。
- `y`
  - : スクロールコンテナーは垂直軸のみで、スナップ位置に合わせられます。
- `block`
  - : スクロールコンテナーはブロック軸のみで、スナップ位置に合わせられます。
- `inline`
  - : スクロールコンテナーはインライン軸のみで、スナップ位置に合わせられます。
- `both`
  - : スクロールコンテナーは両方の軸で、個別にスナップ位置に合わせられます (それぞれの軸で異なる要素に位置が合わせられる可能性があります)。
- `mandatory`
  - : このスクロールコンテナーの視覚ビューポートは、現在スクロール中でなければスナップ点に合わせられます。これはスクロールアクションが終了した際に、可能であればその点にはまるということを意味しています。内容が追加、移動、削除、リサイズされた場合、スクロール量のオフセットは、そのスナップ点に載り続けるよう調整されます。
- `proximity`
  - : このスクロールコンテナーの視覚ビューポートは、現在スクロール中でなければ、ユーザーエージェントのスクロール引数を考慮しつつスナップ点に載るよう動作する可能性があります。コンテンツが追加、移動、削除、リサイズされた場合、スクロール量のオフセットは、そのスナップ点に載り続けるよう調整されることがあります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Snapping_in_different_axes">様々な軸にスナップ</h3>

#### HTML

```html
<div class="holster">
  <div class="container x mandatory-scroll-snapping" dir="ltr">
    <div>X Mand. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container x proximity-scroll-snapping" dir="ltr">
    <div>X Prox. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container y mandatory-scroll-snapping" dir="ltr">
    <div>Y Mand. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container y proximity-scroll-snapping" dir="ltr">
    <div>Y Prox. LTR</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container x mandatory-scroll-snapping" dir="rtl">
    <div>X Mand. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container x proximity-scroll-snapping" dir="rtl">
    <div>X Prox. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container y mandatory-scroll-snapping" dir="rtl">
    <div>Y Mand. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container y proximity-scroll-snapping" dir="rtl">
    <div>Y Prox. RTL</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
</div>
```

#### CSS

```css
/* setup */
html,
body,
.holster {
  height: 100%;
}
.holster {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}

.container {
  display: flex;
  overflow: auto;
  outline: 1px dashed lightgray;
  flex: none;
}

.container.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
}

.container.y {
  width: 256px;
  height: 256px;
  flex-flow: column nowrap;
}
/* scroll-snap */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}

.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}

.y.proximity-scroll-snapping {
  scroll-snap-type: y proximity;
}

.container > div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}

.x.container > div {
  line-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}

.y.container > div {
  line-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 100%;
}
/* appearance fixes */
.y.container > div:first-child {
  line-height: 1.3;
  font-size: 64px;
}
/* coloration */
.container > div:nth-child(even) {
  background-color: #87ea87;
}

.container > div:nth-child(odd) {
  background-color: #87ccea;
}
```

#### 結果

{{EmbedLiveSample("Snapping_in_different_axes", "100%", "1630")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS スクロールスナップ](/ja/docs/Web/CSS/CSS_Scroll_Snap)
- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)
