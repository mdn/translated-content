---
title: view-transition-class
slug: Web/CSS/Reference/Properties/view-transition-class
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`view-transition-class`** は [CSS](/ja/docs/Web/CSS) のプロパティで、選択された要素に識別用のクラス（{{cssxref("custom-ident")}}）をつけて、それらの要素のビュー遷移のスタイル設定のための追加の方法を提供します。

## 構文

```css
/* <custom-ident> 値の例 */
view-transition-class: card;

/* キーワード値 */
view-transition-class: none;

/* グローバル値 */
view-transition-class: inherit;
view-transition-class: initial;
view-transition-class: revert;
view-transition-class: revert-layer;
view-transition-class: unset;
```

### 値

- {{cssxref("custom-ident")}}
  - : 選択された要素が、ルートビューの遷移とは別個の[ビュー遷移](/ja/docs/Web/API/View_Transition_API)に参加するように指定する識別名です。この識別子は固有のものである必要があります。2 つのレンダリング済み要素に同時に同じ `view-transition-name` が設定されている場合、{{domxref("ViewTransition.ready")}} はこれを拒否し、遷移はスキップされます。
- `none`
  - : この要素に対して生成される、名前付きビュー遷移擬似要素には、どのクラスも適用されません。

## 解説

`view-transition-class` の値を指定すると、CSS のクラス名と同様に、複数のビュー遷移擬似要素に同じスタイルを設定するためのフックとして使用することができます。ただし、この値は要素を捕捉対象としてマークするものではありません。それぞれの要素には、固有の {{cssxref("view-transition-name")}} が必要です。`view-transition-class`は、すでに`view-transition-name`を持つ要素にスタイルを適用するための追加の方法としてのみ使用されます。
`view-transition-name` を自動的に決定する機能については、[CSS View Transitions Module Level 2](https://drafts.csswg.org/css-view-transitions-2/#auto-vt-name) 仕様書で議論が進められています。

`view-transition-class` は、{{cssxref("::view-transition-group()")}}、{{cssxref("::view-transition-image-pair()")}}、{{cssxref("::view-transition-old()")}}、{{cssxref("::view-transition-new()")}} といったビュー遷移擬似要素を使用してスタイルを適用します。これは、古い状態の要素と新しい状態の対応する要素との間のビュー遷移を照合する `view-transition-name` とは異なります。

ビュー遷移に対応しているすべてのブラウザーで `view-transition-class` プロパティが完全に対応するまで、それぞれの要素に対して独自の `::view-transition-group()` を記載してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

```css
::view-transition-group(.fast-card-slide) {
  animation-duration: 3s;
}

.product {
  view-transition-class: fast-card-slide;
}

.product#card1 {
  view-transition-name: show-card;
}

.product#card2 {
  view-transition-name: hide-card;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("view-transition-name")}}
- [ビュー遷移 API の使用](/ja/docs/Web/API/View_Transition_API/Using)ガイド
- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
