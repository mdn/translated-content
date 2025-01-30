---
title: overflow
slug: Web/CSS/overflow
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{CSSRef}}

**`overflow`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、コンテンツが要素のパディングボックスに収まらない（はみ出す）場合に、水平方向および垂直方向の望ましい動作を設定します。

{{EmbedInteractiveExample("pages/css/overflow.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`overflow-x`](/ja/docs/Web/CSS/overflow-x)
- [`overflow-y`](/ja/docs/Web/CSS/overflow-y)

## 構文

```css
/* キーワード値 */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: hidden visible;

/* グローバル値 */
overflow: inherit;
overflow: initial;
overflow: revert;
overflow: revert-layer;
overflow: unset;
```

`overflow` プロパティは、1 つまたは 2 つの {{CSSXref("overflow_value", "&lt;overflow&gt;")}} キーワード値として指定される。キーワードが 1 つだけ指定された場合、`overflow-x` と `overflow-y` の両方が同じ値に設定される。2 つのキーワードが指定された場合、最初の値は水平方向の `overflow-x` に適用され、2 番目の値は垂直方向の `overflow-y` に適用されます。

### 値

- `visible`
  - : 溢れたコンテンツは切り取られず、要素のパディングボックスの外側に表示されることがあります。要素ボックスは{{glossary("scroll container", "スクロールコンテナー")}}ではありません。これは `overflow` プロパティの既定値です。
- `hidden`
  - : 溢れたコンテンツは要素のパディングボックスで切り取られます。スクロールバーはなく、切り取られたコンテンツは見えなくなります（つまり、切り取られたコンテンツは非表示になります）が、コンテンツはまだ存在しています。ユーザーエージェントはスクロールバーを追加せず、また、タッチスクリーンでのドラッグやマウスのスクロールホイールなどの操作によって、ユーザーが切り取られた領域の外にあるコンテンツを表示することもできません。コンテンツはプログラムによってスクロールさせることができ（例えば、アンカーテキストへのリンク、非表示でありながらフォーカス可能な要素へのタブ操作、{{domxref("Element.scrollLeft", "scrollLeft")}} プロパティの値や {{domxref("Element.scrollTo", "scrollTo()")}} メソッドの設定など）、この場合、要素ボックスはスクロールコンテナーとなります。
- `clip`
  - : 溢れたコンテンツは、[`overflow-clip-margin`](/ja/docs/Web/CSS/overflow-clip-margin) プロパティを使用して定義された要素のはみ出しクリップ辺で切り取られます。その結果、コンテンツは要素のパディングボックスを `overflow-clip-margin` の {{cssxref("&lt;length&gt;")}} 値分、または設定されていない場合は `0px` 分はみ出します。切り取られた領域の外側に溢れたコンテンツは表示されず、ユーザーエージェントはスクロールバーを追加せず、プログラムによるスクロールも行われません。新しい[整形コンテキスト](/ja/docs/Web/CSS/CSS_display/Block_formatting_context)は作成されません。整形コンテキストを確立するには、`overflow: clip` を {{cssxref("display", "display: flow-root", "#flow-root")}} とともに使用してください。この要素ボックスはスクロールコンテナーにはなりません。
- `scroll`
  - : 溢れたコンテンツは要素のパディングボックスで切り取られ、スクロールバーを使用してスクロールさせることで、溢れたコンテンツを表示することができます。ユーザーエージェントは、コンテンツが溢れているか否かに関わらずスクロールバーを表示します。そのため、このキーワードを使用すると、コンテンツが変化するたびにスクロールバーが表示されたり非表示になったりすることを防ぐことができます。ただし、印刷時には溢れたコンテンツが印刷される場合があります。要素ボックスはスクロールコンテナーになります。
- `auto`
  - : 溢れたコンテンツは要素のパディングボックスで切り取られ、溢れたコンテンツはスクロールバーを使ってスクロールして表示することができます。`scroll` とは異なり、ユーザエージェントはコンテンツが溢れた場合にのみスクロールバーを表示します。コンテンツが要素のパディングボックス内に収まる場合、`visible` と同じように見えますが、新しい整形コンテキストを確立します。要素ボックスはスクロールコンテナーになります。

> [!NOTE]
> キーワード値 `overlay` は、`auto` の値の古い別名です。 `overlay` を使用すると、スクロールバーは空間を占有するのではなく、コンテンツの上に描画されます。

## 解説

overflow のオプションには、溢れたコンテンツを非表示にするもの、スクロールバーを表示して溢れたコンテンツが見られるようにするもの、溢れたコンテンツを要素ボックスの周囲の領域に流すもの、およびそれらの組み合わせがあります。

`overflow` の各キーワードを使用する際には、以下の点に留意してください。

- `overflow` に `visible`（既定値）または `clip` 以外の値を指定すると、新しい[ブロック整形コンテキスト](/ja/docs/Web/CSS/CSS_display/Block_formatting_context)が作成されます。これは技術的な理由から必要です。浮動ボックスがスクロール要素と交差する場合、スクロールのステップごとにコンテンツが強制的に再配置されるため、スクロールの使い勝手が悪くなります。
- `overflow` の設定で期待通りの効果を出すには、溢れる方向が垂直方向の場合は高さ（{{cssxref("height")}} または {{cssxref("max-height")}}）、溢れる方向が水平方向の場合は幅（{{cssxref("width")}} または {{cssxref("max-width")}}）、溢れる方向がブロック方向の場合はブロックサイズ（{{cssxref("block-size")}} または {{cssxref("max-block-size")}}）、溢れる方向がインライン方向の場合はインラインサイズ（{{cssxref("inline-size")}} または {{cssxref("max-inline-size")}}）に加えて {{cssxref("white-space")}} に `nowrap` を、いずれかをブロックレベル要素に設定する必要があります。
- いずれかの方向で overflow を `visible`（すなわち、`overflow-x` または `overflow-y`）に設定する場合、もう一方の方向を `visible` または `clip` に設定する必要があり、そうしないと、`visible` の値は `auto` として動作します。
- いずれかの方向で overflow を `clip` に設定する場合、もう一方の方向を `visible` または `clip` に設定する必要があり、そうしないと、`clip` の値は `hidden` として動作します。
- JavaScript の {{domxref("Element.scrollTop")}} プロパティは、 `overflow` が `hidden` に設定されている場合でも HTML 要素をスクロールさせるために使うことができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## アクセシビリティ

スクロールするコンテンツ領域は、キーボードのみを使用するユーザーにはスクロールできません。ただし、Firefox を使用しているユーザーは例外です（Firefox では、コンテナーが既定ではキーボード操作可能に設定されています）。

開発者として、Firefox 以外のキーボードのみ操作のユーザーにコンテナーのスクロールを許可するには、[`tabindex`](/ja/docs/Web/HTML/Global_attributes/tabindex) 属性を使用して `tabindex="0"` と指定する必要があります。残念ながら、スクリーンリーダーがこのタブストップに遭遇すると、それが何であるかのコンテキストを保有していないため、スクリーンリーダーはそのコンテンツ全体をアナウンスする可能性が高いです。適切な WAI-ARIA ロール（例えば `role="region"`）とアクセシブル名（[`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) または [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) によって）を指定することで、この問題を軽減できます。

## 例

### 様々な overflow キーワードの結果のデモ

#### HTML

```html live-sample___demonstrating_results_of_various_overflow_keywords
<div>
  <code>visible</code>
  <p class="visible">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>

<div>
  <code>hidden</code>
  <p class="hidden">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>

<div>
  <code>clip</code>
  <p class="clip">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>

<div>
  <code>scroll</code>
  <p class="scroll">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>

<div>
  <code>auto</code>
  <p class="auto">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>

<div>
  <code>overlay</code>
  <p class="overlay">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>
```

#### CSS

```css hidden live-sample___demonstrating_results_of_various_overflow_keywords
body {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}

div {
  margin: 2em;
  font-size: 1.2em;
}

p {
  width: 5em;
  height: 5em;
  border: dotted;
  margin-top: 0.5em;
}

div:nth-of-type(5),
div:nth-of-type(6) {
  margin-top: 200px;
}
```

```css live-sample___demonstrating_results_of_various_overflow_keywords
p.visible {
  overflow: visible;
}

p.hidden {
  overflow: hidden;
}

p.clip {
  overflow: clip;
  overflow-clip-margin: 1em;
}

p.scroll {
  overflow: scroll;
}

p.auto {
  overflow: auto;
}

p.overlay {
  overflow: overlay;
}
```

#### 結果

{{EmbedLiveSample("Demonstrating results of various overflow keywords", "500", "620")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}
- {{Cssxref("overflow-block")}}, {{Cssxref("overflow-clip-margin")}}, {{Cssxref("overflow-inline")}}
- {{Cssxref("clip")}}, {{Cssxref("display")}}, {{cssxref("text-overflow")}}, {{cssxref("white-space")}}
- [CSS オーバーフロー](/ja/docs/Web/CSS/CSS_overflow)
- [Keyboard-only scrolling areas](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) on adrianroselli.com (2022)
