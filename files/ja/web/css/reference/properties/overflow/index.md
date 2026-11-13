---
title: "`overflow` プロパティ (CSS)"
short-title: overflow
slug: Web/CSS/Reference/Properties/overflow
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

**`overflow`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、コンテンツが要素のパディングボックスに収まらない（オーバーフローする）場合に、水平方向および垂直方向の望ましい動作を設定します。

{{InteractiveExample("CSS デモ: overflow")}}

```css interactive-example-choice
overflow: visible;
```

```css interactive-example-choice
overflow: hidden;
```

```css interactive-example-choice
overflow: clip;
```

```css interactive-example-choice
overflow: scroll;
```

```css interactive-example-choice
overflow: auto;
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

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("overflow-x")}}
- {{cssxref("overflow-y")}}

## 構文

```css
/* キーワード値 */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;

/* 2 値構文: 水平 | 垂直 */
overflow: hidden visible;

/* グローバル値 */
overflow: inherit;
overflow: initial;
overflow: revert;
overflow: revert-layer;
overflow: unset;
```

### 値

このプロパティは、1 つまたは 2 つの空白区切りの {{CSSXref("overflow_value", "&lt;overflow&gt;")}} キーワード値で指定します。

- `visible`
  - : あふれたコンテンツは切り取られず、要素のパディングボックスの外側に表示されることがあります。この要素ボックスは{{glossary("scroll container", "スクロールコンテナー")}}にはなりません。
- `hidden`
  - : あふれたコンテンツは、要素のパディングボックスで切り取られ、切り取られたコンテンツは非表示になります。この要素ボックスがオーバーフローした場合、そのボックスはスクロールバーのない{{glossary("scroll container", "スクロールコンテナー")}}となります。ただし、非表示のフォーカス可能な要素へのタブ移動、{{domxref("Element.scrollLeft", "scrollLeft")}} プロパティ、{{domxref("Element.scrollTo", "scrollTo()")}} メソッドなどの他の方法によるスクロールはできます。
- `clip`
  - : あふれたコンテンツは、{{cssxref("overflow-clip-margin")}} プロパティを使用して定義された要素のはみ出しクリップ辺で切り取られます。要素ボックスはスクロールコンテナーにはならず、切り取られたコンテンツは表示されず、プログラムによるスクロールは対応していません。
- `scroll`
  - : あふれたコンテンツは、要素のパディングボックスで切り取られます。要素ボックスは、コンテンツがオーバーフローしているかどうかに関わらず、常にスクロールバーを表示させるスクロールコンテナーとなります。
- `auto`
  - : あふれたコンテンツは、要素のパディングボックスで切り取られます。オーバーフローが発生した場合、要素のボックスはスクロールバーを表示させるスクロールコンテナーとなります。

#### 標準外の値

一部のブラウザーでは、標準外の値にも対応しています。

- `overlay`
  - : `auto` の古い別名で、ウェブ互換性を確保するために仕様書で定義されています。もともとは、スクロールバーが空間を占有するのではなく、コンテンツの上に表示されるようにするための標準外の値として実装されました。新しいコードでの使用は推奨されません。

## 解説

デフォルトで、ブロックレベル要素はコンテンツに合わせてサイズが伸長します。コンテナーのサイズに制約がある場合、コンテンツはオーバーフローします。`overflow` プロパティは、コンテナーの端からあふれたコンテンツをどのように扱うかを決定します。

`overflow` プロパティは、水平方向の {{cssxref("overflow-x")}} および垂直方向の {{cssxref("overflow-y")}} プロパティの一括指定プロパティです。キーワードが 1 つだけ指定された場合、`overflow-x` と `overflow-y` の両方に同じ値が設定されます。キーワードが 2 つ指定された場合、水平方向の `overflow-x` に 1 つ目の値が適用され、2 つ目には垂直方向の `overflow-y` に適用されます。

overflow のオプションには、オーバーフローしたコンテンツを非表示にするもの、スクロールバーを表示してオーバーフローしたコンテンツが見られるようにするもの、オーバーフローしたコンテンツを要素ボックスの周囲の領域に流すもの、およびそれらの組み合わせがあります。

`visible` と `clip` を除いたすべての値では、新しい[ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)が作成されます。スクロールコンテナーには、新しいブロック整形コンテキストが必要です。浮動ボックスがスクロール要素と重なった場合、スクロールのたびにコンテンツが強制的に改行され、スクロールの動作が重くなってしまうからです。

### オーバーフローを作成するもの

オーバーフローは、ブロックレベル要素のコンテンツが、その要素に割り当てられた空間からあふれた場合に発生します。割り当てられる空間は、垂直方向のオーバーフローの場合は高さ（{{cssxref("height")}} または {{cssxref("max-height")}}）、水平方向のオーバーフローの場合は幅（{{cssxref("width")}} または {{cssxref("max-width")}}）、ブロック方向のオーバーフローの場合はブロックサイズ（{{cssxref("block-size")}} または {{cssxref("max-block-size")}}）、インライン方向のオーバーフローの場合はインラインサイズ（{{cssxref("inline-size")}} または {{cssxref("max-inline-size")}}、または {{cssxref("white-space")}} に `nowrap` を設定）によって制約されることがあります。

次の CSS は、コンテナーのサイズを制限するもので、コンテナーのサイズを制限する[ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)のプロパティ値を定義しています。
同時に、`content-box` に切り取られる背景色も追加しています。これは、後述の説明でオーバーフローしたコンテンツがコンテンツボックスからはみ出す様子を確認しやすくするためです。

```css
div {
  height: 10em;
  width: 15em;
  border: 3px solid;
  padding: 10px;

  background-color: #ededed;
  background-clip: content-box;
}
```

### オーバーフロー値について

それぞれの `overflow` の値によって、要素にスクロールバーが表示されるかどうか、ユーザーやプログラムによってスクロール可能かどうか、そしてその要素がスクロールコンテナーになる（要素のコンテンツがオーバーフローした際に新しい[ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)を生成する）かどうかが定義されます。また、`scroll` の場合、コンテンツがオーバーフローしていないときでもスクロールコンテナーとなります。

#### `visible` 値

デフォルト値は `visible` です。デフォルトで、コンテンツがコンテナーの制約範囲からオーバーフローした場合、そのコンテンツはコンテナー内に収まりません。デフォルトで、または明示的に `visible` に設定された要素にはスクロールバーが表示されず、ユーザーによるスクロールやプログラムによるスクロールもできず、{{glossary("scroll container", "スクロールコンテナー")}}にもなりません。この値では、新しいブロック整形コンテキストは生成されません。

```css live-sample___visible
div {
  overflow: visible;
}
```

{{EmbedLiveSample("visible", "", "300px")}}

```html-nolint hidden live-sample___visible
<div>
  <h2>overflow: visible;</h2>
</div>
<div>
  <p>
    この例では、<code>overflow</code> プロパティが <code>visible</code> に設定されています。スクロールコンテナーは生成されず、コンテンツはコンテナーからはみ出します。
  </p>
</div>
```

`visible`では切り取りが一切行われないため、あふれたコンテンツは要素のパディングボックスの外側にも表示され、隣接するコンテンツと重なってしまう可能性があります。

#### `scroll` 値

`scroll`では、コンテンツは要素のパディングボックスで切り取られ、ビュー内でスクロールできるようになります。ユーザーエージェントは、コンテンツがあふれているかどうかに関わらず、両方向にスクロールバーを表示させます。これにより、コンテンツの変化に伴ってスクロールバーが現れたり消えたりすることを防ぎます。ただし、プリンターでは、あふれたコンテンツが表示されることがあります。

この要素は、あふれたコンテンツがない場合でも常に{{glossary("scroll container", "スクロールコンテナー")}}となり、ユーザーによるスクロールとプログラムによるスクロールの両方が可能です。

```css live-sample___scroll
div {
  overflow: scroll;
}
```

{{EmbedLiveSample("scroll", "", "300px")}}

```html-nolint hidden live-sample___scroll
<div>
  <h2>overflow: scroll;</h2>
</div>
<div>
  <p>
    この例では、<code>overflow</code> プロパティが <code>scroll</code> に設定されています。これにより、スクロールコンテナーが生成され、必要がない場合でもスクロールバーが常に表示されます。
  </p>
</div>
```

最初の例では、たとえコンテンツがあふれていなくても、スクロールコンテナーが生成されます。2 つ目の例では、コンテンツはパディングボックス内に切り取られ、スクロールバーを使ってあふれたコンテンツまでスクロールできるようになっています。

#### `auto` 値

`auto` の場合、要素にスクロールバーが表示されるか、またその要素がスクロールコンテナーとなるかどうかは、要素にあふれるコンテンツがあるかどうかに依存します。要素に含まれるコンテンツがあふれた場合、その挙動は `scroll` と同様にになります。つまり、あふれたコンテンツは要素のパディングボックスで切り取られ、スクロールバーを使用してあふれたコンテンツを画面内にスクロールして表示することができます。`scroll` とは異なり、ユーザーエージェントは、コンテンツがあふれている場合にのみスクロールバーを表示します。コンテンツが要素のパディングボックス内に収まる場合、見た目は `visible` の場合と同じになりますが、それでも新しい整形コンテキストが確立されます。要素のボックスがスクロールコンテナーとなるのは、あふれたコンテンツがある場合のみです。

```css live-sample___auto
div {
  overflow: auto;
}
```

{{EmbedLiveSample("auto", "", "300px")}}

```html-nolint hidden live-sample___auto
<div>
  <h2>overflow: auto;</h2>
</div>
<div>
  <p>
    この例では、<code>overflow</code> プロパティが <code>auto</code> に設定されています。あふれたコンテンツがあるため、スクロールコンテナーが生成されます。コンテンツはパディングボックス内にクリップされ、スクロールバーによってはみ出したコンテンツまでスクロールできるようになります。
  </p>
</div>
```

2 値構文を使用した場合、一方の値が `visible` に設定されているとき、もう一方の値が `visible` または `clip` でない限り、その `visible` のオーバーフロー方向は `auto` として扱われます。

#### `hidden` 値

`hidden` を指定すると、あふれたコンテンツは要素のパディングボックスで切り取られます。スクロールバーは表示されず、切り取られたコンテンツは表示されません（つまり、「非表示」になります）。

コンテンツがはみ出している場合、その要素はスクロールコンテナーとなります。スクロールバーは表示されず、ユーザーがタッチスクリーン上でドラッグしたり、マウスのスクロールホイールを使用したりといった操作を行っても、切り取られた領域外のコンテンツを表示することはできませんが、非表示になっているあふれたコンテンツをスクロールして表示することは可能です。

コンテンツにフォーカス可能な要素が含まれている場合、タブキーを押すと、現在フォーカスが当たっている要素が画面上に表示されます。また、コンテンツはプログラムによってスクロールすることも可能です。{{domxref("Element.scrollLeft", "scrollLeft")}} または {{domxref("Element.scrollTop", "scrollTop")}} プロパティに値を設定すると、それぞれ左端または上端からその距離だけスクロールされます。また、{{domxref("Element.scrollTo", "scrollTo()")}} メソッドを使用してスクロールすることもできます。

```css live-sample___hidden
div {
  overflow: hidden;
}
```

{{EmbedLiveSample("hidden", "", "300px")}}

```html-nolint hidden live-sample___hidden
<div>
  <h2>overflow: hidden;</h2>
</div>
<div>
  <p>
    この例では、<code>overflow</code> プロパティが <code>hidden</code> に設定されています。hidden に設定されている場合でも、<a href="https://developer.mozilla.org/ja/docs/Web/HTML/Guides/Content_categories#対話型コンテンツ">対話型コンテンツ</a>は、フォーカスが当たるとスクロールして表示領域内に表示されるようになります。コンテンツがあふれているため、スクロールバーは存在しません。しかし、この要素はスクロールコンテナーとなります。
    タブキーを押すと、この <input aria-label="input" placeholder="input" /> にフォーカスが移り、画面内に表示される位置までスクロールされます。このコンテンツは、プログラムによるスクロールも可能です。
  </p>
</div>
```

最初の例にはあふれたコンテンツがないため、スクロールコンテナーにはなりません。2 つ目の例では、コンテンツがあふれていますが、パディングボックス内に切り取られています。あふれたコンテンツにスクロールするためのスクロールバーはありませんが、隠れたコンテンツ内の {{htmlelement("input")}} までタブキーで移動するなどして、そのコンテンツを画面内に表示させることは可能です。2 つ目の例はスクロールコンテナーです。

#### `clip` 値

`clip`の場合、あふれたコンテンツはデフォルトで非表示となり、スクロールバーは表示されず、プログラムによるスクロールもできません。この要素はスクロールコンテナーではなく、新しい [整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)も生成されません。切り取られたコンテンツに対話型コンテンツが含まれている場合、非表示のフォーカス可能なコンテンツはキーボードフォーカスを受け取りますが、そのコンテンツは画面内にスクロールされて表示されないため、キーボードユーザーはアクセスできなくなります。

`clip`の場合、あふれたコンテンツは、{{cssxref("overflow-clip-margin")}} プロパティで定義された要素のオーバーフロー切り取り辺で切り取られます。切り取られたコンテンツは、`overflow-clip-margin` の {{cssxref("&lt;length&gt;")}} 値分だけ、要素のパディングボックスからはみ出します。この値のデフォルトは `0px` です。

```css live-sample___clip
div {
  overflow: clip;
}
```

{{EmbedLiveSample("clip", "", "350")}}

```html-nolint hidden live-sample___clip
<div>
  <h2>overflow: clip;</h2>
</div>
<div>
  <p>
    この例では <code>overflow</code> プロパティは <code>clip</code> に設定されています。hidden の場合、<a href="https://developer.mozilla.org/ja/docs/Web/HTML/Guides/Content_categories#対話型コンテンツ">対話型コンテンツ</a> は、フォーカスが当たってもスクロールして表示領域内に表示されることはありません。はみ出したコンテンツはコンテナーに合わせて切り取られます。スクロールコンテナーは作成されません。
    Tabキーを押すと、この <input aria-label="input" placeholder="input" /> にフォーカスが移りますが、表示範囲内にスクロールされることはありません。キーボードユーザーはこのコンテンツに到達できません。また、このコンテンツはプログラムによるスクロールもできません。
  </p>
</div>
<fieldset>
  <legend><code>overflow-clip-margin</code> の値を選択</legend>
  <ul>
    <li>
      <label
        ><input type="radio" name="overflow" value="0" /> overflow-clip-margin:
        0;</label
      >
    </li>
    <li>
      <label
        ><input type="radio" name="overflow" value="3em" />
        overflow-clip-margin: 3em;</label
      >
    </li>
  </ul>
</fieldset>
```

2 つ目の例では、あふれたコンテンツが切り取られています。非表示のコンテンツ内の {{htmlelement("input")}} までタブキーで移動すると、その要素にフォーカスが移りますが、画面内にスクロールされて表示されることはなく、その結果、キーボードユーザーはそのコンテンツにアクセスできません。

2 値構文を使用した場合、一方の値が `clip` に設定されているとき、もう一方の値が `visible` または `clip` に設定されていないと、その `clip` のオーバーフロー方向は `hidden` として扱われます。

```css hidden live-sample___clip
ul {
  list-style-type: none;
}
label {
  font-family: monospace;
}
:has([value="0"]:checked) div {
  overflow-clip-margin: 0;
}
:has([value="3em"]:checked) div {
  overflow-clip-margin: 3em;
}

@supports not (overflow-clip-margin: 0) {
  body::before {
    content: "このブラウザーはまだ overflow-clip-margin に対応していません。";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;

    width: 100%;
  }
}
```

#### スクロール駆動アニメーションの場合

{{cssxref("animation-timeline/scroll", "scroll()")}} 関数を使用して[スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)を作成する際、切り取られた領域内に対話型コンテンツがない場合は、明示的にスクロールコンテナーを生成したい場合を除き、`hidden` の代わりに `clip` 使用することを検討してください。

`hidden` と `clip` の両方では、はみ出した領域は切り取られますが、`overflow: clip` ではスクロールコンテナーが作成されないため、ユーザーエージェントが DOM ツリーを遡って最も近い親のスクロールコンテナーを探す際、切り取られた要素はスキップされます。

`overflow: hidden` は、コンテンツがあふれた場合にスクロールコンテナーを生成するため、意図せずスクロールしないスクロール親要素を作成してしまうことがあります。ただし、対話型コンテンツが切り取られていないことを確認できる場合にのみ、`clip` を使用してください。

```css hidden live-sample___visible live-sample___scroll live-sample___auto live-sample___clip live-sample___hidden
div {
  height: 10em;
  width: 15em;
  border: 3px solid;
  padding: 10px;
  background-color: #ededed;
  background-clip: content-box;
}
p {
  font-size: 1.5rem;
  line-height: 1.6;
  font-family: sans-serif;
}
h2 {
  font-family: monospace;
}
body {
  height: 98vh;
  overflow: clip;
  display: flex;
  flex-flow: row wrap;
  gap: 3em;
}
```

### 置換要素のオーバーフロー

画像やその他の{{glossary("replaced elements", "置換要素")}}に対して `overflow` を設定すると、CSS Overflow Module Level 4 に対応しているブラウザーでは期待どおりに動作します。以前の版の仕様書では、置換要素は常にバウンディングコンテナーに合わせて切り取られていました。

最新のブラウザーの対応状況に関する情報については、[ブラウザーの互換性](#ブラウザーの互換性)の表をご覧ください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## アクセシビリティ

ブラウザーによっては、スクロール可能なコンテンツ領域がキーボードフォーカスを受け取らないため、キーボードのみを使用するユーザーはスクロールできません。キーボードのみを使用するすべてのユーザーがコンテナーをスクロールすることができるようにするには、[`tabindex="0"`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) をコンテナーに設定して要素がフォーカスを受け取れるようにする必要があります。コンテナがフォーカスを受け取った際に、スクリーンリーダーのユーザーにコンテキストを伝えるため、コンテナーに適切な [WAI-ARIA ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles)（`role="region"` など）とアクセシブル名（[`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) または [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を使用して）を指定してください。

## 例

### 様々な overflow キーワードの結果のデモ

#### HTML

```html
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
```

#### CSS

```css hidden
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

```css
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
- SVG の {{SVGAttr("overflow")}} 属性
- [スクロール進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュール
- [Keyboard-only scrolling areas](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) - adrianroselli.com (2022)
