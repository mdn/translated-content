---
title: appearance
slug: Web/CSS/Reference/Properties/appearance
original_slug: Web/CSS/appearance
l10n:
  sourceCommit: 6eae35bc64a49865a469ca29bc40e6993b9cb8cc
---

**`appearance`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フォームコントロールなどの置換された UI ウィジェット要素のレンダリングされた外観を指定します。最も一般的な場合、これらの要素にはオペレーティングシステムのテーマに基づくネイティブでプラットフォーム特定のスタイルが適用されるか、 CSS を使用して上書き可能なスタイルによる基本的な外観が指定されます。

{{InteractiveExample("CSS デモ: appearance")}}

```css interactive-example-choice
appearance: auto;
```

```css interactive-example-choice
appearance: none;
```

```css interactive-example-choice
appearance: textfield;
```

```html interactive-example
<section id="default-example">
  <div class="background" id="example-element">
    <input type="search" value="search" aria-label="unlabeled search" />
    <input type="checkbox" aria-label="unlabeled checkbox" />
    <input type="radio" aria-label="unlabeled radio button" />
    <button>ボタン</button>
  </div>
</section>
```

```css interactive-example
input,
button {
  appearance: inherit;
}
```

## 構文

```css
/* CSS 基本ユーザーインターフェイス Level 4 の値 */
appearance: none;
appearance: auto;
appearance: menulist-button;
appearance: textfield;
appearance: base-select;

/* グローバル値 */
appearance: inherit;
appearance: initial;
appearance: revert;
appearance: revert-layer;
appearance: unset;

/* <compat-auto> 値は 'auto' と同じ効果がある */
appearance: button;
appearance: checkbox;
```

### 値

`appearance` プロパティはすべての要素および擬似要素に適用できますが、指定された値の効果（ある場合）は、それが適用される要素によって異なります。

- `none`
  - : ウィジェットに基本的な外観を与え、 CSS によるスタイル設定を可能にします。ただし、ウィジェットのネイティブ機能は維持されます。この値はウィジェット以外の要素には影響しません。

- `auto`
  - : 対話型ウィジェットを OS ネイティブの外観でレンダリングするように設定します。 OS ネイティブのスタイル設定が適用されていない要素では `none` と同様に動作します。

- `base-select`
  - : {{htmlelement("select")}} 要素および {{cssxref("::picker()", "::picker(select)")}} 擬似要素にのみ関連し、それらのスタイル設定ができるようにします。

- `<compat-special>`
  - : 特定の要素に対して `auto` と同様の効果を持ちます。
    - `textfield`
      - : 特定の `<input>` 型の外観が現れるようにして、[`text` 型の外観と一致させます](#試してみましょう)。
    - `menulist-button`
      - : `<select>` 要素に設定する形で使用された場合、ドロップダウンピッカーのスタイルは[既定の状態のものと一致します](#setting_the_appearance_of_a_select)。

- `<compat-auto>`
  - : 利用可能な値は `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button`, `textarea` です。
    すべての値は `auto` と同様に動作します。代わりに `auto` を使用してください。

> [!NOTE]
> 仕様では `base` 値も定義しています。これは現在どのブラウザーも対応していません。

#### 標準外の値

一部のブラウザーでは、 標準外の値にも対応しています。

- `slider-vertical`
  - : `<input type="range">` 要素に適用すると、スライダーを縦方向にします。[垂直スライダーを作成する](/ja/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)には、代わりに {{cssxref("writing-mode")}} を `vertical-lr` に、 {{cssxref("direction")}} を `rtl` に設定する必要があります。

- `-apple-pay-button`
  - : {{htmlelement("button")}}、{{htmlelement("a")}}、{{htmlelement("input")}} 要素で表示型が `button` または `reset` に設定されている場合に、Apple Pay のロゴを表示します。

## 解説

`appearance` プロパティは、オペレーティングシステムのテーマに基づいて要素を OS ネイティブスタイルで表示することを可能にします。また、 `none` 値を指定することでプラットフォーム固有のスタイル設定を無効化できます。 `appearance: none` を設定したり、 UI ウィジェットの外観を変更したりしても、要素の機能は変わりません。

文書内のほとんどの要素は CSS で完全にスタイル設定できますが、 UI コントロール（ウィジェット）は通常、ブラウザーがオペレーティングシステムのネイティブ UI スタイルを使用してレンダリングされます。このネイティブな外観は、オペレーティングシステムやブラウザーによって異なります。この既定の状態で、ウィジェットは CSS でスタイル設定できる機能が限られており、場合によっては全くありません。どの要素がこのネイティブ UI の外観を持つかは HTML で定義されています。

`appearance` プロパティは、既定ではネイティブ OS コントロールと同様に見える HTML ウィジェットの外観をコントロールします。特に `none` 値はウィジェットのネイティブ外観の一部を抑制します。これにより、機能性を維持しつつネイティブユーザー操作に対応しながら、 CSS でスタイル設定可能な基本的な外観が実現されます。

一部のウィジェットは `appearance: none` に設定すると完全に消えます。ただし、非表示のコントロールは依然としてインタラクティブです。例えば、 `appearance: none` のチェックボックスに関連付けられた {{htmlelement("label")}} をクリックすると、チェックボックスのチェック状態が切り替わります。

`none` はウィジェットを非表示にする可能性があるため、ウィジェットに基本外観を指定された `base` 値が追加されました。対応している場合、 `base` 値はウィジェットがネイティブ外観を維持しつつ、既定では変更できないウィジェットのスタイルを CSS で変更できるように確実にします。 `none` がラジオボタンやチェックボックスを消失させる可能性があるのに対し、 `base` はウィジェットに基本的な外観を与え、使用可能かつ相互運用性のある既定のネイティブスタイルを提供すると同時に、 CSS による良くカスタマイズを可能にします。この `base` 値はまだ対応していないものの、多くの `<compat-auto>` 値が同様の機能を果たします。ただしこれらは特定の型に属し、グローバルではありません。

`base-select` 値は、 {{htmlelement("select")}} 要素および {{cssxref("::picker()", "::picker(select)")}} 擬似要素にのみ関連し、[`<select>` 要素と選択ピッカーのスタイル設定](#select_の外見を設定)をすることができるのです （`<option>` 要素を含む）。ピッカーはポップオーバーと同様に最前面レイヤーに描画されます。 `base-select` が設定されている場合、 [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)機能を使用して、ピッカーを選択要素（または他の要素）に対して相対的に配置できます。さらに、 `base-select` 値を設定すると、 `<select>` がブラウザーペイン外にレンダリングされたり、組み込みのモバイル OS 要素が起動することを防ぎます。また、最も幅の広い `<option>` の幅に基づいてサイズが調整されることもなくなりました。

### 接頭辞付きの標準外の値

標準化以前、接頭辞付きプロパティである **`-moz-appearance`** および **`-webkit-appearance`** により、要素をボタンやチェックボックスなどのウィジェットとして示すことができるようになりました。古いスタイルシートでは、以下の標準外の値が使用されていることがあります。最も一般的なのは、シャドウ DOM 要素の[接頭辞付き擬似要素](/ja/docs/Web/CSS/Reference/Webkit_extensions#擬似要素)の値としてです。

<details>
<summary>標準外の値</summary>

- `attachment`
- `borderless-attachment`
- `button-bevel`
- `caps-lock-indicator`
- `caret`
- `checkbox-container`
- `checkbox-label`
- `checkmenuitem`
- `color-well`
- `continuous-capacity-level-indicator`
- `default-button`
- `discrete-capacity-level-indicator`
- `inner-spin-button`
- `image-controls-button`
- `list-button`
- `listitem`
- `media-enter-fullscreen-button`
- `media-exit-fullscreen-button`
- `media-fullscreen-volume-slider`
- `media-fullscreen-volume-slider-thumb`
- `media-mute-button`
- `media-play-button`
- `media-overlay-play-button`
- `media-return-to-realtime-button`
- `media-rewind-button`
- `media-seek-back-button`
- `media-seek-forward-button`
- `media-toggle-closed-captions-button`
- `media-slider`
- `media-sliderthumb`
- `media-volume-slider-container`
- `media-volume-slider-mute-button`
- `media-volume-slider`
- `media-volume-sliderthumb`
- `media-controls-background`
- `media-controls-dark-bar-background`
- `media-controls-fullscreen-background`
- `media-controls-light-bar-background`
- `media-current-time-display`
- `media-time-remaining-display`
- `menulist-text`
- `menulist-textfield`
- `meterbar`
- `number-input`
- `progress-bar-value`
- `progressbar`
- `progressbar-vertical`
- `range`
- `range-thumb`
- `rating-level-indicator`
- `relevancy-level-indicator`
- `scale-horizontal`
- `scalethumbend`
- `scalethumb-horizontal`
- `scalethumbstart`
- `scalethumbtick`
- `scalethumb-vertical`
- `scale-vertical`
- `scrollbarthumb-horizontal`
- `scrollbarthumb-vertical`
- `scrollbartrack-horizontal`
- `scrollbartrack-vertical`
- `searchfield-decoration`
- `searchfield-results-decoration`
- `searchfield-results-button`
- `searchfield-cancel-button`
- `snapshotted-plugin-overlay`
- `sheet`
- `sliderthumb-horizontal`
- `sliderthumb-vertical`
- `textfield-multiline`

</details>

製作者は標準キーワードのみを使用することが推奨されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例は、 `appearance` プロパティの基本的な使用法を示し、一部のブラウザーで {{htmlelement("input")}} 要素の外観を変更します。

#### HTML

2 つの `number` おのフォームコントロールとそのラベルを記載します。

```html
<p>
  <label>番号を入力: <input type="number" min="0" max="10" /></label>
</p>
<p>
  <label
    >番号を入力: <input type="number" min="0" max="10" class="text"
  /></label>
</p>
```

#### CSS

クラス名 `text` をつけた要素を、テキストフィールドの見た目同様に設定します。

```css
.text {
  appearance: textfield;
}
```

#### 結果

{{EmbedLiveSample("Basic example", 600, 100)}}

ブラウザーによっては、コントロールがテキストフィールドと同様に設定されている場合、スピナーが視覚的に除去されることがあります。 `appearance` プロパティは機能に影響を及ぼしません。例えば、クリック可能なスピナーが存在しなくなっても、上下のカーソルキーで値を増減させることが可能です。

### 外見を `none` に設定

次の例は、チェックボックス、ラジオボタン、 {{htmlelement("select")}} 要素から既定のスタイルを削除し、独自のスタイル設定を適用する方法を示しています。

#### HTML

チェックボックス、ラジオボタン、`<select>`要素と、それらに関連付けられたラベルのペアを記述します。

```html
<label><input type="checkbox" /> 既定で未チェック </label>
<label><input type="checkbox" checked /> 既定でチェック </label>

<hr />

<label><input type="radio" name="radio" /> 既定で未チェック </label>
<label><input type="radio" name="radio" checked /> 既定でチェック </label>

<hr />

<label
  >スタイル設定されていない select
  <select>
    <option>選択肢 1</option>
    <option>選択肢 2</option>
  </select>
</label>

<label
  >スタイル設定された select
  <select class="none">
    <option>選択肢 1</option>
    <option>選択肢 2</option>
  </select>
</label>
```

#### CSS

```css hidden
label {
  display: block;
  margin: 0.5em 0;
}
```

両方の {{htmlelement("input")}} 要素（`checkbox` 型）にスタイルを適用します。これらのスタイルは、要素がスタイル設定可能な場合に赤い四角形を作成します。すべての入力要素（`checkbox` および `radio`）の {{cssxref(":checked")}} UI 状態、ならびに `.none` クラスを持つ要素に対して `appearance: none` を設定します。これにより、マージン以外のラジオボタンとチェックボックスのスタイルがすべて除去され、設定されたスタイルが適用できる状態になります。ラジオボタンや `<select>` 要素に対して、 `none` が設定された場合の代替スタイルはありません。

```css
[type="checkbox"] {
  width: 1em;
  height: 1em;
  display: inline-block;
  background: red;
}
input:checked,
.none {
  appearance: none;
}
```

#### 結果

{{EmbedLiveSample("Appearance set to none", 600, 220)}}

`appearance: none` を設定すると、 UI の要素のスタイル設定できるようになりますが、ウィジェットが非表示になるリスクも発生します。チェックされていないチェックボックスは、`appearance` が既定で `auto` であるため、チェックボックスのように見えます。 `:checked` 状態で `appearance: none` を設定することで、スタイル設定することができる。

チェックされていないラジオボタンは、チェックされていないチェックボックスと同様に、ネイティブ UI ウィジェットのように見えます。なぜなら、それ自体がネイティブ UI ウィジェットであるからです。チェック状態のときに `appearance: none` を適用すると、ラジオボタンは現れなくなります。その機能は維持され、ページのレンダリングに影響を与えるのはマージンだけです。

### select の外見を設定

`appearance` プロパティを使用することができます。これにより、独自の選択機能の有効化を選択できます。これにより、 `<select>` 要素とそのピッカー（ページから飛び出すフォームコントロールの一部を表す）のスタイル設定が可能になります。

#### HTML

3 つの `<select>` 要素を記載し、それぞれに複数の {{htmlelement("option")}} 子要素があります。すべての `<select>` と同様に、関連付けられた {{htmlelement("label")}} 要素も含まれています。 3 つ目（3 番目のオプション）には、 `base-select` が `<select>` の幅に与える効果を示すために、より多くのテキストが含まれています。

```html
<label for="ice-cream1"
  >既定のフレーバー:
  <select id="ice-cream1">
    <option>アスパラガス</option>
    <option>ダルセ・デ・レチェ</option>
    <option>ピスタチオ、ラムレーズン、コーヒー</option>
  </select>
</label>
<label for="ice-cream2"
  >ベース select のフレーバー:
  <select id="ice-cream2" class="baseSelect">
    <option>アスパラガス</option>
    <option>ダルセ・デ・レチェ</option>
    <option>ピスタチオ、ラムレーズン、コーヒー</option>
  </select>
</label>
<label for="ice-cream3"
  >メニューリストボタンのフレーバー:
  <select id="ice-cream3" class="menulistButton">
    <option>アスパラガス</option>
    <option>ダルセ・デ・レチェ</option>
    <option>ピスタチオ、ラムレーズン、コーヒー</option>
  </select>
</label>
```

#### CSS

すべての `<select>` 要素のピッカーを、 {{cssxref("::picker()")}} 擬似要素を `select` 引数付きで使用して選択します。すべてピッカーと 1 つの `<select>` 要素の `appearance` 値は `base-select` に設定します。最後の `<select>` は `menulist-button` に設定します。まず `<select>` は既定で `auto` 状態に設定されます。

```css
.baseSelect,
::picker(select) {
  appearance: base-select;
}
.menulistButton {
  appearance: menulist-button;
}
```

```css
label {
  display: block;
}
```

`<select>` およびピッカーの {{cssxref("background-color")}} と {{cssxref("border")}} プロパティに値を設定し、 `appearance` 値の効果を示します。

```css
select {
  border: 1px solid red;
  background-color: orange;
}

::picker(select) {
  background-color: yellow;
  border: none;
}
```

#### 結果

{{EmbedLiveSample("Setting the appearance of a select", 1050, 80)}}

{{cssxref("background-color")}} および {{cssxref("border")}} のスタイルはすべての `<select>` 要素とそのピッカーに定義されていますが、`::picker(select)` のスタイルは、select と picker の両方に `appearance` プロパティが `base-select` に設定されている場合にのみ、そのピッカーに影響を与え、効果を及ぼします。1 つ目と 3 つ目の select ボックスが同じ見た目になるのは、 `menulist-button` が互換キーワードであるためです。

既定では、 `<select>` のインラインサイズは通常、最もテキスト量の多い `<option>` のインラインサイズに準じます。また、ドロップダウンピッカーは開くための操作でレンダリング済みページの上部に現れるため、周囲のページに制約されず完全に可視化されます。 `base-select` が設定されている場合、これらの文は真でなくなります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
