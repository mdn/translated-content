---
title: interpolate-size
slug: Web/CSS/Reference/Properties/interpolate-size
original_slug: Web/CSS/interpolate-size
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

{{seecompattable}}

**`interpolate-size`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[アニメーション](/ja/docs/Web/CSS/Guides/Animations)および[トランジション](/ja/docs/Web/CSS/Guides/Transitions)を行うときに、[`<length-percentage>`](/ja/docs/Web/CSS/Reference/Values/length-percentage) 値と、`auto`、[`fit-content`](/ja/docs/Web/CSS/Reference/Values/fit-content)、[`max-content`](/ja/docs/Web/CSS/Reference/Values/max-content) などの[内在サイズ](/ja/docs/Glossary/Intrinsic_Size)値との間で行うことができます。

このプロパティは通常、 {{cssxref("width")}} や {{cssxref("height")}} を、 `<length-percentage>` とそのコンテンツのフルサイズの間（つまり、「閉じた」と「開いた」状態、あるいは「非表示」と「表示」状態の間）でアニメーションさせる場合に使用します。 {{cssxref("transform")}} など、ボックスモデル以外の CSS プロパティをアニメーション化する場合、これは実行可能な解決策ではありません。

> [!NOTE]
> `interpolate-size` で選択された動作は、ウェブ全体で既定で有効にすることはできません。これは、多くのサイトでは、スタイルシートが、内在サイズ値はアニメーションできないと仮定して使用されているためです。これを既定で有効にすると、いくつかの下位互換性の課題が発生します（関連する [CSS WG の議論](https://github.com/w3c/csswg-drafts/issues/626#issuecomment-2071016522)を参照してください）。

## 構文

```css
/* キーワード値 */
interpolate-size: allow-keywords;
interpolate-size: numeric-only;

/* グローバル値 */
interpolate-size: inherit;
interpolate-size: initial;
interpolate-size: revert;
interpolate-size: revert-layer;
interpolate-size: unset;
```

### 値

- `allow-keywords`
  - : [`<length-percentage>`](/ja/docs/Web/CSS/Reference/Values/length-percentage) 値と内在サイズ値の間の[補間処理](/ja/docs/Glossary/Interpolation)を有効にし、 2 つの間のアニメーションを可能にします。
- `numeric-only`
  - : 既定の動作では、内在サイズ値は補間処理できません。

## 解説

`interpolate-size: allow-keywords` を設定すると、[`<length-percentage>`](/ja/docs/Web/CSS/Reference/Values/length-percentage) 値と内在サイズ値の間の補間処理が可能になります。2 つの内在サイズ値間のアニメーションは有効にならないことに注意してください。アニメーションの一方の端は `<length-percentage>` でなければなりません。

`interpolate-size` の値は継承されるため、文書ルートで設定することで、文書全体に対して内在サイズ値への（または内在サイズ値からの）アニメーションを有効にすることができます。

```css
:root {
  interpolate-size: allow-keywords;
}
```

スコープを制限したい場合は、関連するコンテナー要素で設定します。次の例では、{{htmlelement("main")}} およびその子孫に対してのみ、内在サイズの補間処理を有効にしています。

```css
main {
  interpolate-size: allow-keywords;
}
```

> [!NOTE]
> 関数 {{cssxref("calc-size()")}} の返値も補間処理の対象となります。事実上、プロパティ値に `calc-size()` を含めると、選択範囲に `interpolate-size: allow-keywords` が自動的に適用されます。ただし、 `interpolate-size` は上記のように継承されるため、ほとんどの場合、内在サイズのアニメーションを有効にするにはこの方法を使用することをお勧めします。 `calc-size()` は、計算も要求される場合にのみ、内在サイズのアニメーションを有効にするために使用しましょう。

### 補完可能な値

現在、アニメーションに次の固有の値を指定することができます。

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` （{{cssxref("flex-basis")}} を使用してサイズ設定されたコンテナーの場合）

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な `interpolate-size` の使用

この例では、文書に `interpolate-size: allow-keywords` を設定して、内在サイズを含むアニメーションを有効にする方法を示します。このデモでは、キャラクターのバッジ/「名前タグ」が機能し、その上にカーソルを置いたりフォーカスを合わせたりすると、そのキャラクターに関する情報が表示されます。情報の表示は、設定した長さから `max-content` への {{cssxref("height")}} のトランジションによって処理されます。

#### HTML

HTML には、キーボードのフォーカスを受け取ることができるように [`tabindex="0"`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) が設定された単一の {{htmlelement("section")}} 要素が含まれています。この `<section>` には、{{htmlelement("header")}} および {{htmlelement("main")}} 要素が含まれており、それぞれの要素には、それぞれの子コンテンツが含まれています。

```html
<section tabindex="0">
  <header>
    <h2>Tanuki</h2>
  </header>
  <main>
    <p>Tanuki is the silent phantom of MDN.</p>
    <ul>
      <li><strong>Height</strong>: 3.03m</li>
      <li><strong>Weight</strong>: 160kg</li>
      <li><strong>Tech Fu</strong>: 7</li>
      <li><strong>Bad Jokes</strong>: 9</li>
    </ul>
  </main>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

section {
  font-family: Arial, Helvetica, sans-serif;
  width: 175px;
  border-radius: 5px;
  background: #eeeeee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);
}

header {
  padding: 0.7rem;
  border-bottom: 2px solid #cccccc;
}

main {
  padding: 10px;
}

h2 {
  margin: 0;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 1px;
}

p,
li {
  font-size: 0.8rem;
  line-height: 1.5;
}

p {
  margin-top: 0;
}
```

CSS では、まず `interpolate-size: allow-keywords` を {{cssxref(":root")}} に設定して、文書全体に対して有効にします。

```css
:root {
  interpolate-size: allow-keywords;
}
```

次に、`<section>` の {{cssxref("height")}} を `2.5rem` に、{{cssxref("overflow")}} を `hidden` に設定して、既定では `<header>` だけが表示されるようにし、状態変化時に `<section>` の `height` を 1 秒かけてアニメーションさせる `transition` を指定します。最後に、`<section>` の `height` を {{cssxref(":hover")}} および {{cssxref(":focus")}} に `max-content` に設定します。

```css
section {
  height: 2.5rem;
  overflow: hidden;
  transition: height ease 1s;
}

section:hover,
section:focus {
  height: max-content;
}
```

簡潔にするため、残りの CSS は省略しています。

#### 結果

`<section>` にカーソルを当てたり、キーボードでフォーカスを当てたりしてみてください。その領域がアニメーションで全高まで拡大し、すべてのコンテンツが表示されます。

{{ EmbedLiveSample('Basic `interpolate-size` usage', '100%', '225') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("calc-size()")}}
- [Animate to height: auto; (and other intrinsic sizing keywords) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) (developer.chrome.com, 2024)
