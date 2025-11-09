---
title: overflow-y
slug: Web/CSS/Reference/Properties/overflow-y
original_slug: Web/CSS/overflow-y
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`overflow-y`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ブロックレベル要素のコンテンツが上下の端からあふれた時にどのように表示するかを設定します。これは表示なし、スクロールバー付き、コンテンツをはみ出させる、のいずれかになります。このプロパティは、[`overflow`](/ja/docs/Web/CSS/Reference/Properties/overflow) 一括指定プロパティを使用して設定することもできます。

{{InteractiveExample("CSS デモ: overflow-y")}}

```css interactive-example-choice
overflow-y: visible;
```

```css interactive-example-choice
overflow-y: hidden;
```

```css interactive-example-choice
overflow-y: clip;
```

```css interactive-example-choice
overflow-y: scroll;
```

```css interactive-example-choice
overflow-y: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p id="example-element">
    Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's
    Inn Hall. Implacable November weather. As much mud in the streets as if the
    waters had but newly retired from the face of the earth.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 15em;
  height: 9em;
  border: medium dotted;
  padding: 0.75em;
  text-align: left;
}
```

## 構文

```css
/* キーワード値 */
overflow-y: visible;
overflow-y: hidden;
overflow-y: clip;
overflow-y: scroll;
overflow-y: auto;

/* グローバル値 */
overflow-y: inherit;
overflow-y: initial;
overflow-y: revert;
overflow-y: revert-layer;
overflow-y: unset;
```

`overflow-y` プロパティは、単一の {{CSSXref("overflow_value", "&lt;overflow&gt;")}} キーワード値で指定します。

{{cssxref("overflow-x")}} が `hidden`、`scroll`、`auto` のいずれかで、 `overflow-y` プロパティが `visible` （既定値）の場合、この値は暗黙的に `auto` として計算されます。

### 値

- `visible`
  - : あふれたコンテンツは切り取られず、この要素のパディングボックスの上下の端よりも外側に表示される可能性があります。この要素ボックスは{{glossary("scroll container","スクロールコンテナー")}}になりません。
- `hidden`
  - : 要素のパディングボックスに垂直方向に合わせる必要がある場合は、コンテンツを切り取ります。スクロールバーは表示されません。
- `clip`
  - : あふれたコンテンツは、 [`overflow-clip-margin`](/ja/docs/Web/CSS/Reference/Properties/overflow-clip-margin) プロパティを使用して定義された要素のオーバーフロークリップ枠で切り取られます。その結果、コンテンツは要素のパディングボックスから `overflow-clip-margin` の値 {{cssxref("&lt;length&gt;")}} だけはみ出します（設定されていない場合は `0px` です）。 `clip` と `hidden` の違いは、 `clip` キーワードはプログラムによるスクロールも含め、すべてのスクロールを禁止することです。新しい整形コンテキストは生成されません。新しい整形コンテキストを生成するのであれば、 `overflow: clip` と共に {{cssxref("display", "display: flow-root", "#flow-root")}} を使用してください。この要素ボックスはスクロールコンテナーにはなりません。
- `scroll`
  - : あふれたコンテンツは、垂直方向にパディングボックスに合わせる必要がある場合に切り取られます。ブラウザーはコンテンツが実際に切り取られるかどうかにかかわらず、垂直方向のスクロールバーを表示します。 (これで、コンテンツが変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターはあふれたコンテンツを印刷するかもしれません。
- `auto`
  - : あふれたコンテンツは要素のパディングボックスで切り取られ、あふれたコンテンツはビュー内にスクロールすることができます。 `scroll` とは異なり、ユーザーエージェントはコンテンツがあふれた場合のみスクロールバーを表示し、既定では、スクロールバーを非表示にします。コンテンツが要素のパディングボックス内に収まる場合、 `visible` と同じように見えますが、新しいブロック整形コンテキストを確立します。

> [!NOTE]
> キーワード値 `overlay` は、 `auto` の古い別名です。 `overlay` の場合、スクロールバーは空間を占有することなく、コンテンツの上に描画されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### overflow-y の動作を設定

#### HTML

```html-nolint
<ul>
  <li>
    <code>overflow-y:hidden</code> — ボックスの外側のテキストを隠す
    <div id="div1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y:scroll</code> — 常にスクロールバーを表示
    <div id="div2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y:visible</code> — 必要に応じてテキストをボックスの外に表示
    <div id="div3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-y:auto</code> — 多くのブラウザーでは <code>scroll</code> と同じ
  <div id="div4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

#### CSS

```css
div {
  border: 1px solid black;
  width: 250px;
  height: 100px;
}

#div1 {
  overflow-y: hidden;
  margin-bottom: 12px;
}
#div2 {
  overflow-y: scroll;
  margin-bottom: 12px;
}
#div3 {
  overflow-y: visible;
  margin-bottom: 120px;
}
#div4 {
  overflow-y: auto;
  margin-bottom: 120px;
}
```

### 結果

{{EmbedLiveSample("Setting_overflow-y_behavior", "100%", "780")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("clip")}}, {{Cssxref("display")}}, {{cssxref("text-overflow")}}, {{cssxref("white-space")}}
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [学習: コンテンツのオーバーフロー](/ja/docs/Learn_web_development/Core/Styling_basics/Overflow)
