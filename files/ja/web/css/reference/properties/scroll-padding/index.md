---
title: scroll-padding
slug: Web/CSS/Reference/Properties/scroll-padding
l10n:
  sourceCommit: 57b9e55cd708d8ff4bfd9dc65c568bdee4089453
---

**`scroll-padding`** は[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、要素のすべての辺に一度にスクロールパディングを設定します。{{glossary("scroll container", "スクロールコンテナー")}}内におけるスクロールポートの最適表示領域を定義するオフセットを指定します。

{{InteractiveExample("CSS デモ: scroll-padding")}}

```css interactive-example-choice
scroll-padding: 0;
```

```css interactive-example-choice
scroll-padding: 20px;
```

```css interactive-example-choice
scroll-padding: 20%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div class="info">スクロール »</div>
</section>
```

```css interactive-example
.default-example .info {
  inline-size: 100%;
  padding: 0.5em 0;
  font-size: 90%;
  writing-mode: vertical-rl;
}

.scroller {
  text-align: left;
  height: 250px;
  width: 270px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: y mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{CSSXref("scroll-padding-bottom")}}
- {{CSSXref("scroll-padding-left")}}
- {{CSSXref("scroll-padding-right")}}
- {{CSSXref("scroll-padding-top")}}

## 構文

```css
/* キーワード値 */
scroll-padding: auto;

/* <length> 値 */
scroll-padding: 10px;
scroll-padding: 1em 0.5em 1em 1em;
scroll-padding: 10%;

/* グローバル値 */
scroll-padding: inherit;
scroll-padding: initial;
scroll-padding: revert;
scroll-padding: revert-layer;
scroll-padding: unset;
```

### 値

- {{cssxref("&lt;length-percentage&gt;")}}
  - : スクロールポートの対応する縁からの内側へのオフセットを、有効な {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} として指定します。
- `auto`
  - : オフセットがユーザーエージェントによって決定されます。これは一般的には `0px` になりますが、ゼロ以外の値がより適切であれば、ユーザエージェントは自由に検出して他の値を取ることができます。

## 解説

`scroll-padding` プロパティは一括指定で、{{CSSXref("scroll-padding-top")}}、{{CSSXref("scroll-padding-right")}}、{{CSSXref("scroll-padding-bottom")}}、{{CSSXref("scroll-padding-left")}} をその順序で設定します。これらはそれぞれスクロールコンテナーの上部、右側、下部、左側のスクロールパディングを設定します。

スクロールスナップコンテナーを作成する際に役立つ `scroll-padding` プロパティは、スクロールポートの最適な表示領域（ユーザーに表示される要素の配置先となる領域）のオフセットを定義することができます。これにより、固定位置のツールバーやサイドバーなどコンテンツを遮る可能性のあるオブジェクトのための余地を確保したり、対象要素とスクロールポートの端との間に余裕を持たせたりするために、スクロールポート内に内側の空間を作成することができます。

このプロパティは [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュールで定義されていますが、{{cssxref("scroll-snap-type")}} プロパティの値にかかわらず、すべてのスクロールコンテナーに適用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("scroll-snap-type")}}
- [スクロールスナップの基本概念](/ja/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts)
- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュール
