---
title: CSS `view-transition-class` プロパティ
short-title: view-transition-class
slug: Web/CSS/Reference/Properties/view-transition-class
l10n:
  sourceCommit: 7447816a276e95c5b4c2ab2f6a1f80b081371de2
---

**`view-transition-class`** は [CSS](/ja/docs/Web/CSS) のプロパティで、選択された要素に 1 つ以上の識別用のクラス ({{cssxref("custom-ident")}}) をつけて、それらの要素のビュー遷移のスタイル設定のための追加の方法を提供します。

## 構文

```css
/* <custom-ident> 値の例 */
view-transition-class: card;
view-transition-class: card fast-slide;

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
  - : スタイル設定のためにビュー遷移の擬似要素を選択する際に使用される識別名です。`view-transition-name` とは異なり、クラス名は固有の名称である必要はなく、また、その要素が別個のビュー遷移グループに参加することにもなりません。
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

### 複数の要素にまたがる共有クラスのスタイル設定

この例では、3 枚のカードそれぞれに固有の {{cssxref("view-transition-name")}} が割り当てられていますが（新旧の状態を対応付けるために要求される）、これらはすべて同じ `view-transition-class` を共有しています。これにより、それぞれの名前ごとにスタイルを個別に繰り返すのではなく、単一のルールでこれらの遷移すべてに一括してスタイルを設定することができます。`view-transition-name` とは異なり、`view-transition-class` には固有の値が必要ではありません。

```html
<div class="card" id="card1">カード 1</div>
<div class="card" id="card2">カード 2</div>
<div class="card" id="card3">カード 3</div>
```

```css
/* それぞれの要素には、固有の view-transition-name を持つ必要がある */
#card1 {
  view-transition-name: card-1;
}

#card2 {
  view-transition-name: card-2;
}

#card3 {
  view-transition-name: card-3;
}

/* しかし、これらはすべて同じビュー遷移クラスを共有することができる */
.card {
  view-transition-class: card;
}

/* この単一のルールは、3 枚のカードすべての遷移に適用される */
::view-transition-group(.card) {
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
}
```

### 1 つの要素に対して複数のクラスを使用

`view-transition-class` の値は、空白で区切られた識別子のリストにすることができます。これにより、同じ要素に対して複数の「原子的な」スタイルを組み合わせ、ビュー遷移の擬似要素とは独立してそれぞれを別個に指定することが可能になります。この例では、両方のカードが同じ 2 つのクラス（アニメーションを制御する `slide` と、その再生時間を制御する `fast-transition`）を共有していますが、それぞれのカードにはなお固有の {{cssxref("view-transition-name")}} が割り当てられています。

```html
<div class="card" id="card1">カード 1</div>
<div class="card" id="card2">カード 2</div>
```

```css
.card {
  view-transition-class: slide fast-transition;
}

#card1 {
  view-transition-name: card-1;
}

#card2 {
  view-transition-name: card-2;
}

/* `slide` クラスは、どのアニメーションを実行するかを決定する... */
::view-transition-new(.slide) {
  animation-name: slide-in;
}

::view-transition-old(.slide) {
  animation-name: slide-out;
}

/* ...一方、`fast-transition` クラスは、その遷移を実行する時間を制御する */
::view-transition-group(.fast-transition) {
  animation-duration: 0.5s;
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
