---
title: 垂直フォームコントロールの作成
slug: Web/CSS/CSS_writing_modes/Vertical_controls
l10n:
  sourceCommit: 0f4b28bdc51e89cd25d132b9db12e3e903a9c5aa
---

{{CSSRef}}

このガイドでは、CSS の {{cssxref("writing-mode")}} および {{cssxref("direction")}} プロパティを使用して縦書きのフォームコントロールを作成および構成する方法を説明しています。 これには以下が含まれます。

- [`<input type="range">`](/ja/docs/Web/HTML/Element/input/range) のスライダー、{{htmlelement("progress")}} の進捗バー、{{htmlelement("meter")}} 要素。
- {{htmlelement("select")}} 要素。
- {{htmlelement("button")}} 要素や [`<input type="button">`](/ja/docs/Web/HTML/Element/input/button)、[`<input type="reset">`](/ja/docs/Web/HTML/Element/input/reset)、[`<input type="submit">`](/ja/docs/Web/HTML/Element/input/submit) のようなボタン入力型。
- {{htmlelement("textarea")}} 要素や [`<input type="text">`](/ja/docs/Web/HTML/Element/input/text)、[`<input type="datetime-local">`](/ja/docs/Web/HTML/Element/input/datetime-local)、[`<input type="url">`](/ja/docs/Web/HTML/Element/input/url) などのテキストベースの入力型。

## 一般的なテクニック

最近のブラウザーでは、 {{cssxref("writing-mode")}} プロパティを縦書きの値に設定することで、フォームコントロールを縦書きで表示し、通常は横書きのテキスト文字（ラテン文字など）を既定から 90 度回転して表示することができます。通常は縦書きされるテキスト文字（中国語や日本語など）は、この点では影響を受けません。

これは縦書きの言語フォームを作成する際に有益です。

具体的には、次のようになります。

- `writing-mode: vertical-lr` は、ブロックフロー方向が左から右になる縦書きのフォームコントロールを作成します。つまり、折り返しや複数行のテキストを含むコントロールでは、次の行がその前の行の右側に現れるということです。
- `writing-mode: vertical-rl` は、ブロックフロー方向が右から左になる縦書きのフォームコントロールを作成します。つまり、折り返しや複数行のテキストを含むコントロールでは、次の行がその前の行の左側に現れるということです。

[座標変換](/ja/docs/Web/CSS/transform)を使用してコントロールを 90 度回転させることもできますが、コントロールを独自のレイヤーで持つことになり、他のコンテンツが重なってしまうなど、予期せぬレイアウト上の副作用が発生する可能性があります。 `writing-mode` を使用することで、より信頼性の高いソリューションが得られます。

> **メモ:** {{cssxref("writing-mode")}} プロパティは十分に実装されているものの、 `writing-mode` を使用して縦書きのフォームコントロールを作成することは、 2024 年になってようやくすべてのブラウザーで対応されました。

> [!NOTE]
> 実験的な `sideways-lr` および `sideways-rl` の値は、それぞれ `vertical-lr` および `vertical-rl` 値が示すのと似た効果を持っていますが、通常、縦書きのテキスト文字（中国語や日本語など）は 90 度回転して横書きで表示されますが、横書きのテキスト文字（例えばラテン語）はこれらの値の影響を受けません。

さらに、 {{cssxref("direction")}} プロパティを使用して、コントロール内のコンテンツの方向を制御することができます。

- `direction: ltr` はコンテンツが上端から始まり、下端へ流れます。
- `direction: rtl` はコンテンツが下端から始まり、上端へ流れます。

`direction` プロパティを使用すると、**インラインのベース方向**（コンテンツが行に配置される際の主な方向）を設定することができます。これは、行の「先頭」と「末尾」がどの辺にあるかを定義します。テキストベースのフォームコントロールでは、違いは明白です。テキストの流れは上または下から始まります。範囲スライダーなどのテキストベースではないコントロールでは、 `direction` はコントロールが描画される方向を設定します。例えば、 `direction: ltr` を垂直スライダーに記載すると、スライダーの一番下の値がスライダーの一番上に、一番上の値がスライダーの一番下に設定されます。

下記の節では、さまざまな種類の縦書きフォームコントロールの作成方法と、例えばどのようなものかをご紹介しています。各種類の正確な対応情報については、リンク先の参考ページにあるブラウザーの互換性情報をご覧ください。

## 範囲スライダー、メーター、進捗バー

範囲スライダー、メーター、進捗バーの作成を見てみましょう。

### 基本的な例

典型的な視覚的な [`<input type="range">`](/ja/docs/Web/HTML/Element/input/range) のスライダー、{{htmlelement("progress")}}、{{htmlelement("meter")}} の一連のコントロールは、次のように作成されます。

```html
<form>
  <input type="range" min="0" max="11" value="9" step="1" />
  <meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="20">
    at 50/100
  </meter>
  <progress id="file" max="100" value="70">70%</progress>
</form>
```

> [!NOTE]
> 最善の手法は、アクセシビリティの目的で、各フォームコントロールに {{htmlelement("label")}} 要素を含め、各フィールドに意味のあるテキスト説明を関連付けます（詳細は「[意味の通るテキストラベル](/ja/docs/Learn/Accessibility/HTML#意味の通るテキストラベル)」を参照）。この記事ではフォームコントロールの視覚的なレンダリングに焦点を絞っているため、ここではその手法を採用していませんが、本番コードでは必ずそのようにしてください。

次のような CSS を使用すると、コントロールを縦に表示できます。

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  writing-mode: vertical-lr;
}
```

{{cssxref("writing-mode", "writing-mode: vertical-lr")}}（および `vertical-rl`）は、現行のブラウザーでコントロールを縦方向に表示させる原因となります。

この結果は次のようになります。

{{ EmbedLiveSample("Basic example", "100%", "170") }}

### 下から上向きのコントロールを描く

既定では、コントロールは {{cssxref("direction")}} の値が `ltr` になっています。これにより、スライダー、メーター、進捗バーは上から下に向かって描画されます（上図参照）。

これを変更するには、`direction: rtl` を設定します。これにより、代わりに下から上に向かって描画されるようになります。

```html hidden
<form>
  <input type="range" min="0" max="11" value="9" step="1" />
  <meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="20">
    at 50/100
  </meter>
  <progress id="file" max="100" value="70">70%</progress>
</form>
```

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  writing-mode: vertical-lr;
  direction: rtl;
}
```

結果は次のようになります。

{{ EmbedLiveSample("Drawing the control from bottom to top", "100%", "170") }}

### 古いブラウザーで垂直範囲スライダーを作成

`writing-mode` および `direction` 属性で縦書きのフォームコントロールを作成できない古いブラウザーでは、利用できる選択肢は限られています。以下のコードは、 `<input type="range">` にのみ適用でき、テキストは下から上に流れるようになります。 `<meter>` および `<progress>` 要素には効果はありません。

- Safari と Chrome の旧バージョンでは、標準外の [`appearance: slider-vertical`](/ja/docs/Web/CSS/appearance) プロパティを使用することができます。
- Firefox の旧バージョンでは、標準外の `orient="vertical"` 属性を `<input type="range">` 要素自体に追加することができます。

この例の HTML には、 [`<input type="range">`](/ja/docs/Web/HTML/Element/input/range) のスライダーのみがあります。古いバージョンの Firefoxで 垂直方向に表示されるように `orient="vertical"` が追加されています。

```html
<form>
  <input type="range" min="0" max="11" value="9" step="1" orient="vertical" />
</form>
```

Chrome と Safari の旧バージョンでもコントロールが縦に表示されるようにするには、 `appearance: slider-vertical` を使用することができます。

```css
input[type="range"] {
  margin-block-end: 20px;
  appearance: slider-vertical;
}
```

結果は次のようになります。

{{ EmbedLiveSample("Creating vertical range sliders in older browsers", "100%", "190") }}

## select 要素

この節では、垂直の {{htmlelement("select")}} 要素の扱い方を紹介します。

### select の基本的な例

次の HTML では、単一の選択肢を選択できる要素と、複数の選択肢を選択できる要素の 2 つの `<select>` 要素を作成します。

```html
<form>
  <select multiple>
    <option>First</option>
    <option>Second</option>
    <option>Third</option>
    <option>Fourth</option>
    <option>Fifth</option>
  </select>
  <select>
    <option>First</option>
    <option>Second</option>
    <option>Third</option>
    <option>Fourth</option>
    <option>Fifth</option>
  </select>
</form>
```

次のような CSS を使用すると、コントロールを垂直に表示することができます。

```css
select {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

この結果は次のようになります。

{{ EmbedLiveSample("Select basic example", "100%", "130") }}

### テキストの方向と選択肢の順序の調整

繰り返しになりますが、 {{cssxref("direction")}} プロパティを rtl の値に設定すると、既定では上から下であるテキストの方向を、下から上に設定することが可能です。

また、例えば、選択肢のインライン方向が右から左になっている点にも注目すべきでしょう。これは、 `writing-mode: vertical-rl` を使用しているためです。代わりに `writing-mode: vertical-lr` を使用すると、`<option>` テキストは左から右に現れます。

この 2 つの用途を、 3 つのリストボックス (`multiple`) `<select>` 要素を使用して探求し、横に並んでいる効果を簡単に比較できるようにします。

```html
<form>
  <div>
    <h2>writing-mode: vertical-lr</h2>
    <select multiple>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
      <option>Fourth</option>
      <option>Fifth</option>
    </select>
  </div>
  <div class="direction">
    <h2>direction: rtl & writing-mode: vertical-lr</h2>
    <select multiple>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
      <option>Fourth</option>
      <option>Fifth</option>
    </select>
  </div>
  <div class="reverse-option-order">
    <h2>writing-mode: vertical-rl</h2>
    <select multiple>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
      <option>Fourth</option>
      <option>Fifth</option>
    </select>
  </div>
</form>
```

この例の CSS では、 3 つのリストボックスに以下のプロパティを設定します。

1. `writing-mode: vertical-rl` は、前の例と同じように表示されます。つまり、テキストは上から下に流れ、選択肢は右から左に表示されます。
2. `writing-mode: vertical-rl` および `direction: rtl` は、選択肢は右から左ですが、テキストの流れは下から上に反転します。
3. `writing-mode: vertical-lr` は、選択肢は右から左ですが、テキストの流れは下から上に反転します。

```css hidden
form {
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  font-family: sans-serif;
}

h2 {
  margin-top: 0;
  font-size: 1rem;
  text-align: center;
  flex: 1 0 100%;
}

div {
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: row wrap;
}
```

```css
select {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}

.direction select {
  direction: rtl;
}

.reverse-option-order select {
  writing-mode: vertical-lr;
}
```

結果は次の通りです。

{{ EmbedLiveSample("Adjusting text direction and option order", "100%", "200") }}

## ボタン

この節では、垂直方向の {{htmlelement("button")}} 要素の扱い方を示します。なお、下記の例では `<button>` 要素しか使用していませんが、ボタンを作成する他の要素、たとえば [`<input>`](/ja/docs/Web/HTML/Element/input) の [`button`](/ja/docs/Web/HTML/Element/input/button)、[`reset`](/ja/docs/Web/HTML/Element/input/reset)、[`submit`](/ja/docs/Web/HTML/Element/input/submit)なども動作は同じです。

### 基本的なボタンの例

次の HTML では、単一の行のテキストの要素と、3 行のテキストを持つ要素の 2 つの `<button>` 要素を作成します。

```html
<button>Press me</button> <button>Press me<br />Please?<br />Thanks</button>
```

次のような CSS を使用すると、ボタンを垂直に表示することができます。

```css
button {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

結果は次のようになります。

{{ EmbedLiveSample("Basic button example", "100%", "130") }}

### ボタンテキストの行の順序を調整

`writing-mode` の値を `vertical-rl` から `vertical-lr` に変更すると、テキストの次の行は、前回行の左ではなく、正しく右側に現れます。

この例では、前回使用した 3 行テキストボタンのコピーを 2 つ使用しています。そのため、テキストの方向を変更した場合の効果を簡単に確認することができます。

```html
<div>
  <h2>writing-mode: vertical-lr</h2>
  <button>Press me<br />Please?<br />Thanks</button>
</div>
<div class="reverse-line-order">
  <h2>writing-mode: vertical-rl</h2>
  <button>Press me<br />Please?<br />Thanks</button>
</div>
```

CSSでは、最初のボタンに `writing-mode: vertical-rl` を設定して、正しい行順（右から左）でレイアウトします。 2 つ目のボタンには、行順を逆に（左から右）するために `writing-mode: vertical-lr` を設定します。

```css hidden
body {
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  font-family: sans-serif;
}

h2 {
  margin-top: 0;
  font-size: 1rem;
  text-align: center;
  flex: 1 0 100%;
}

div {
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: row wrap;
}
```

```css
button {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}

.reverse-line-order button {
  writing-mode: vertical-lr;
}
```

結果は次のようになります。

{{ EmbedLiveSample("Adjusting button text line order", "100%", "160") }}

## テキストベースのフォームコントロール

最後に、垂直方向の {{htmlelement("textarea")}} とテキスト型の `<input>` について見ていきます。なお、下記の例では `<input>` 型として `<input type="text">` 要素のみを記載していますが、他のテキストの [`<input>`](/ja/docs/Web/HTML/Element/input) 型（[`password`](/ja/docs/Web/HTML/Element/input/button)、[`number`](/ja/docs/Web/HTML/Element/input/reset)、[`url`](/ja/docs/Web/HTML/Element/input/submit) など）でも動作は同じです。

### 基本的なテキスト入力フィールドとテキストエリアの例

次の HTML では、 `<textarea>` と `<input type="text">` を作成します。

```html
<form>
  <textarea>これはテキストエリアです</textarea>
  <input type="text" value="入力フィールド" />
</form>
```

入力とテキストエリアを縦に表示するには、次のような CSS を使用することができます。

```css
textarea,
input[type="text"] {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

結果は次のようになります。

{{ EmbedLiveSample("Basic text input and textarea example", "100%", "130") }}

### テキストの方向と行レイアウトの順序の調整

{{cssxref("direction")}} プロパティを `rtl` の値に使用すると、テキストの方向を既定の「上から下」から「下から上」に変更することができます。また、`writing-mode` を `vertical-rl` の代わりに `vertical-lr` に設定することで、 `<textarea>` 内の複数行のテキストを既定の「右から左」ではなく「左から右」に表示させることもできます。

例えば、この例では、前回使用したテキストコントロールのコピーが 3 つ使用されているため、前述の `direction` と `writing-mode` を変更した場合の効果を簡単に確認できます。

```html
<form>
  <div>
    <h2>writing-mode: vertical-lr</h2>
    <textarea>This is my textarea</textarea>
    <input type="text" value="Input text" />
  </div>
  <div class="direction">
    <h2>direction: rtl & writing-mode: vertical-lr</h2>
    <textarea>This is my textarea</textarea>
    <input type="text" value="Input text" />
  </div>
  <div class="reverse-line-order">
    <h2>writing-mode: vertical-rl</h2>
    <textarea>This is my textarea</textarea>
    <input type="text" value="Input text" />
  </div>
</form>
```

CSS では、以下のプロパティを 3 つのテキストコントロールを設定します。

1. `writing-mode: vertical-rl` と指定すると、前回と同じように表示されます。つまり、テキストは上から下に流れ、行は右から左に流れます。
2. `writing-mode: vertical-rl` と `direction: rtl` を使用すると、行は右から左に流れますが、テキストの流れは下から上に逆転します。
3. `writing-mode: vertical-lr` を指定すると、テキストは上から下に流れますが、行の流れは逆になります（左から右）。 これは、常に単一の行であるため、`<input type="text">` 要素には効果がないことに注意してください。

```css hidden
form {
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  font-family: sans-serif;
}

h2 {
  margin-top: 0;
  font-size: 1rem;
  text-align: center;
  flex: 1 0 100%;
}

div {
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: row wrap;
}
```

```css
textarea,
input[type="text"] {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}

.direction textarea,
.direction input[type="text"] {
  writing-mode: vertical-rl;
  direction: rtl;
}

.reverse-line-order textarea,
.reverse-line-order input[type="text"] {
  writing-mode: vertical-lr;
}
```

結果は次のようになります。

{{ EmbedLiveSample("Adjusting text direction and line layout order", "100%", "180") }}

## 関連情報

- [`<input>`](/ja/docs/Web/HTML/Element/input) 要素
- 他の関連要素: {{htmlelement("button")}}, {{htmlelement("meter")}}, {{htmlelement("progress")}}, {{htmlelement("select")}}
- [様々なテキストの方向の扱い](/ja/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
- [ウェブフォームのスタイル設定](/ja/docs/Learn/Forms/Styling_web_forms)
