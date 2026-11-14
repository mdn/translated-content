---
title: "`text-fit` プロパティ"
short-title: text-fit
slug: Web/CSS/Reference/Properties/text-fit
l10n:
  sourceCommit: cc66520c973185b32319769333271680832a854e
---

{{SeeCompatTable}}

**`text-fit`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキストノード（およびその他のインラインコンテンツ）の描画フォントサイズを拡大または縮小し、包含ボックスのインライン寸法にぴったり収まるようにします。任意で、最大または最小の**拡大率**を指定できます。

## 構文

```css
/* キーワード 1 つ */
text-fit: none;
text-fit: grow;
text-fit: shrink;

/* キーワード 2 つ */
text-fit: grow consistent;
text-fit: shrink per-line-all;

/* キーワードと <percentage> */
text-fit: grow 300%;
text-fit: shrink 80%;
text-fit: grow per-line-all 300%;

/* グローバル値 */
text-fit: inherit;
text-fit: initial;
text-fit: revert;
text-fit: revert-layer;
text-fit: unset;
```

### 値

このプロパティは、次の一覧から 1 ～ 3 個の値を空白区切りで指定します。

- `none`
  - : デフォルト値です。テキストの拡大縮小は適用されません。
- `grow`
  - : テキストノードの描画フォントサイズを拡大し、包含ボックスのインライン寸法にぴったり収まるようにします。
- `shrink`
  - : テキストノードの描画フォントサイズを縮小し、包含ボックスのインライン寸法にぴったり収まるようにします。
- `consistent`
  - : テキストノードのすべての行を同じ拡大率で拡大縮小します。最初のキーワードに `none` を指定した場合、このキーワードは効果がありません。2 つ目のキーワードを指定しない場合は、`consistent` が指定されたものとみなされます。
- `per-line`
  - : テキストノードの各行を、それぞれ独自の拡大率で拡大縮小します。テキストノードの最後の行と、強制改行で終わる行（例えば、{{htmlelement("br")}} 要素による改行）には、テキストの拡大縮小は適用されません。最初のキーワードに `none` を指定した場合、このキーワードは効果がありません。
- `per-line-all`
  - : 最後の行や強制改行で終わる行を含め、テキストノードの各行をそれぞれ独自の拡大率で拡大縮小します。最初のキーワードに `none` を指定した場合、このキーワードは効果がありません。
- {{cssxref("&lt;percentage&gt;")}}
  - : 拡大率の最大値（`grow` を指定した場合）または最小値（`shrink` を指定した場合）を指定します。`grow` を指定した場合は `100%` 以上、`shrink` を指定した場合は `0%` 以上 `100%` 以下でなければなりません。それ以外のパーセント値は効果がありません。

最初の値は必須で、`none`、`grow`、`shrink` のいずれかを指定できます。2 つ目の値は省略可能で、`consistent`、`per-line`、`per-line-all` のいずれかを指定できます。省略可能な {{cssxref("percentage")}} 値は最後に指定します。各値はこの順序で指定する必要があります。

## 解説

ウェブデザインでは、レイアウトやビューポートのサイズにかかわらず、見出しなどのテキストを包含ボックスにきれいに収めることがよく課題になります。最も一般的な用途は、横書きの見出しを、包含ボックスの幅にぴったり収めることです。これまでは、複雑な {{cssxref("font-size")}} の計算や JavaScript による回避策が使われていました。

`text-fit` プロパティを使うと、利用可能な空間に合わせてテキストの描画フォントサイズを特定の拡大率で調整できます。{{cssxref("text-align")}} プロパティの `justify` 値のように両端揃えにするのではなく、CSS だけで手軽に解決できます。

`text-fit` の基本形では、単一のキーワードを使います。

- `grow` を指定すると、包含ボックスにテキストがぴったり収まるまでフォントサイズを拡大します。前述の用途に適しています。
- `shrink` を指定すると、包含ボックスにテキストがぴったり収まるまでフォントサイズを縮小します。例えば、非常に長い単語などによってテキスト行が包含ボックスより長くなり、はみ出しを防ぐために縮小したい場合に適しています。

具体的には、この拡大縮小の影響を受けるテキストノードの部分（**拡大縮小の対象部分**）は、末尾の空白を除くテキスト自体と、テキストの `font-size` に比例するインラインサイズを持つ間隔です。例えば、パーセント値による {{cssxref("letter-spacing")}} や {{cssxref("word-spacing")}}、{{cssxref("text-autospace")}} が該当します。インラインの {{cssxref("border")}}、{{cssxref("margin")}}、{{cssxref("padding")}} など、その他の部分は拡大縮小されません。

`text-fit` プロパティはコンテナーの内在サイズに影響しません。そのため、例えば {{cssxref("fit-content")}} キーワードを使い、コンテンツに応じてコンテナーのサイズが決まる場合、テキストコンテンツは拡大できません。また、`text-fit` を設定しても要素の計算済み `font-size` は変わりません。サイズの調整は最終的な描画の後に適用されます。

### 拡大率はどのように計算されるか

拡大率は、テキスト行のインラインコンテンツが包含ボックスにぴったり収まるように、拡大縮小の対象部分に適用する倍率です。テキストノードの各行の拡大率は、次のような式で計算されます（正確な計算方法は実装によって異なる場合があります）。

```plain
(A + B) / A
```

ここで、

- `A` は、テキスト行の拡大縮小の対象部分のインラインサイズの合計です。
- `B` は、末尾の空白を含むテキスト行内の残りの空間です。テキストがはみ出す場合は負の値になることがあります。

拡大縮小の対象部分がないテキスト行の拡大率は `1` です。

### 拡大率の上限・下限の指定

テキストの拡大量を制限するには、`grow` または `shrink` キーワードの後に `<percentage>` 値を指定します。

`grow` を指定した場合、パーセント値は `100%` 以上でなければならず、拡大率の上限として機能します。例えば、

```css
text-fit: grow 300%;
```

この指定を適用したテキストは、包含ボックスに収まるように拡大しますが、元の `font-size` の 300% を超えるサイズにはなりません。

`shrink` を指定した場合、パーセント値は `0%` 以上 `100%` 以下でなければならず、拡大率の下限として機能します。例えば、

```css
text-fit: shrink 50%;
```

この指定を適用したテキストは、包含ボックスに収まるように縮小しますが、元の `font-size` の 50% 未満のサイズにはなりません。

> [!NOTE]
> 多くの場合、単語の折り返し動作によって `text-fit: shrink` は効果がありません。テキストが縮小されず、新しい行に折り返されるためです。このような場合は、`nowrap` のような {{cssxref("white-space")}} 値を使って折り返しを止めると、効果を確認できます。[基本的な `text-fit` の使い方](#基本的な_text-fit_の使い方)の例をご覧ください。

### 複数行のテキストに拡大率を適用する方法の指定

デフォルトでは、複数行のテキストノードは、すべての行を同じ拡大率で拡大縮小します。拡大率は行ごとに計算され、そのうち最小の値がすべての行に適用されます。各行を同じ割合で拡大または縮小できるため、通常はこの動作が適しています。

この動作を調整するには、最初のキーワードの後、パーセント値を指定する場合はその前に、2 つ目の値を指定します。デフォルトの `consistent` キーワードを指定すると前述の動作を維持しますが、`per-line` または `per-line-all` も指定できます。いずれも、テキストノードの各行をそれぞれ独自の拡大率で拡大縮小します。違いは、`per-line` ではテキストノードの最後の行と、強制改行（例えば `<br>` 要素による改行）で終わる行に拡大縮小を適用しないのに対し、`per-line-all` ではこれらの行にも適用することです。

例えば、次の宣言はテキストノードのすべての行をそれぞれの拡大率で拡大し、包含ボックスに収めます。

```css
text-fit: grow per-line-all;
```

一方、次の宣言はテキストノードの各行をそれぞれの拡大率で縮小し、包含ボックスに収めます。ただし、最後の行と強制改行で終わる行は対象外で、元の `font-size` の `50%` 未満には縮小しません。

```css
text-fit: shrink per-line 50%;
```

## アクセシビリティ

`text-fit` を使用する場合は、描画されるフォントサイズが小さくなりすぎたり、大きくなりすぎたりしないように、さまざまなビューポートサイズでデザインを慎重にテストする必要があります。フォントサイズが大きく変わると、特に視覚障害のある人や弱視の人にとって、コンテンツが読めなくなる可能性があります。

いずれの場合も、コンテンツや機能を損なうことなくテキストのサイズを変更できなければなりません。[WCAG 達成基準 1.4.4「テキストのサイズ変更」](https://w3c.github.io/wcag/guidelines/22/#resize-text)<sup>(英語)</sup>を参照してください。

関連するガイダンス:

- [MDN WCAG を理解する、ガイドライン 1.4: 前景と背景を分離するなど、ユーザーがコンテンツを見たり聞いたりしやすくする](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な `text-fit` の使い方

この例では、`text-fit` を使ってテキストノードを拡大・縮小し、包含ボックスに収める基本的な方法を示します。

#### HTML

{{htmlelement("div")}} の中に、[`<h1>` と `<h2>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) の 2 つのテキスト要素を入れます。

```html hidden live-sample___basic-text-fit live-sample___text-fit-percentages live-sample___multi-line-keywords
<input
  type="range"
  min="0.4"
  max="1"
  value="1"
  step="0.01"
  aria-label="ページの幅を調整" />
```

```html live-sample___basic-text-fit live-sample___text-fit-percentages
<div>
  <h1>見出し</h1>

  <h2>サブタイトル: 少し長いため、縮小が必要になる場合があります</h2>
</div>
```

```js hidden live-sample___basic-text-fit live-sample___text-fit-percentages live-sample___multi-line-keywords
const divElem = document.querySelector("div");
const slider = document.querySelector("input");
let maxWidth;

function setMaxWidth() {
  maxWidth = document.documentElement.clientWidth;
}

function setWidth() {
  divElem.style.width = `${maxWidth * slider.value}px`;
}

slider.addEventListener("input", setWidth);
window.addEventListener("resize", () => {
  setMaxWidth();
  setWidth();
});

setMaxWidth();
setWidth();
```

また、ビューポート幅の変化を再現できるように、コンテンツの幅を調整する[`<input type="range">`](/ja/docs/Web/HTML/Reference/Elements/input/range) 要素も含めます。簡潔にするため、範囲入力とそれを動作させる JavaScript は非表示にしています。

#### CSS

テキストの周囲に空間を設けるため、コンテナーの `<div>` に {{cssxref("padding")}} 値 `20px` を指定します。

```css hidden live-sample___basic-text-fit live-sample___text-fit-percentages live-sample___multi-line-keywords
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  background-color: white;
}

div {
  margin: 0 auto;
  background-color: coral;
}

input {
  width: 99%;
}
```

```css live-sample___basic-text-fit
div {
  padding: 20px;
}
```

`<h1>` には `text-fit` 値 `grow` を指定し、包含ボックスの利用可能なインライン空間を埋めるように拡大します。長い `<h2>` には {{cssxref("white-space")}} 値 `nowrap` を指定します。これにより、通常なら 1 行にとどまり、コンテナーの端に達したときに折り返されず、はみ出します。続けて `text-fit: shrink` を指定することで、はみ出す代わりに、包含ボックスの利用可能なインライン空間に収まるよう縮小します。

```css live-sample___basic-text-fit
h1 {
  text-fit: grow;
}

h2 {
  white-space: nowrap;
  text-fit: shrink;
}
```

#### 結果

{{EmbedLiveSample("basic-text-fit","100%","320")}}

スライダーを調整し、`<h1>` が親の `<div>` 内の利用可能な空間を常に埋めるよう自動的に拡大することを確認してみてください。また、狭い幅では `<h2>` が `<div>` 内の利用可能な空間を常に埋めるよう縮小し、広い幅で `<div>` 内に収まる場合は自然な幅を維持することも確認してください。

`text-fit` がなければ、`<h1>` は利用可能な空間を埋めず、狭い幅では `<h2>` がはみ出します。

### 拡大率のパーセント値による上限・下限の設定

この例は前の例とよく似ていますが、ここでは `<percentage>` 値を使って見出しの拡大・縮小の量を制限します。

HTML と JavaScript は前の例と同じです。

#### CSS

`<h1>` には `text-fit` 値 `grow 300%` を指定し、自然な `font-size` の 300% まで、包含ボックスの利用可能なインライン空間を埋めるよう拡大します。

```css live-sample___text-fit-percentages
h1 {
  text-fit: grow 300%;
}
```

`<h2>` には {{cssxref("white-space")}} 値 `nowrap` を指定します。これにより、コンテナーの端に達したときに折り返されず、1 行のままになってはみ出します。続けて `text-fit: shrink 80%` を指定することで、はみ出す代わりに、自然な `font-size` の `80%` まで縮小し、包含ボックスの利用可能なインライン空間に収めます。

```css live-sample___text-fit-percentages
h2 {
  white-space: nowrap;
  text-fit: shrink 80%;
}
```

この時点で問題となるのは、`<div>` の `width` が約 `400px` より小さくなると、`<h2>` がコンテナーからはみ出し始めることです。これを避けるには、その時点で通常どおりテキストを複数行に折り返す必要があります。そこで、まずコンテナーである `<div>` に {{cssxref("container-type")}} 値 `inline-size` を指定します。これにより、幅に応じて選択的に CSS を適用する[コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)を使えます。

```css hidden live-sample___text-fit-percentages
div {
  padding: 20px;
}
```

```css live-sample___text-fit-percentages
div {
  container-type: inline-size;
}
```

次に、コンテナークエリーを使い、`<div>` の `width` が `400px` より小さくなったときに `<h2>` の `white-space` 値を `wrap` に変更します。

```css live-sample___text-fit-percentages
@container (width < 400px) {
  h2 {
    white-space: wrap;
  }
}
```

#### 結果

{{EmbedLiveSample("text-fit-percentages","100%","320")}}

スライダーを調整してみてください。`<h1>` は、ある幅を上限として、親の `<div>` 内の利用可能な空間を常に埋めるよう自動的に拡大します。また、狭い幅では `<h2>` が `<div>` 内の利用可能な空間を常に埋めるよう縮小します。`<div>` の幅が `400px` より小さくなるとコンテナークエリーが適用され、`white-space: wrap` が設定されるため、`<h2>` は複数行に折り返されます。

### 複数行の拡大縮小動作を指定するキーワードのデモ

この例では、複数の段落の `text-fit` 値に `consistent`、`per-line`、`per-line-all` キーワードを指定した場合の違いを示します。

#### HTML

同じ埋め草テキストを含み、それぞれ異なる `id` 値が設定された {{htmlelement("p")}} 要素を 3 つ用意します。

```html live-sample___multi-line-keywords
<div>
  <p id="consistent">
    これはサンプルの文章です。幅に応じてテキストの拡大率がどのように変わるかを確認できます。
  </p>

  <p id="per-line">
    これはサンプルの文章です。幅に応じてテキストの拡大率がどのように変わるかを確認できます。
  </p>

  <p id="per-line-all">
    これはサンプルの文章です。幅に応じてテキストの拡大率がどのように変わるかを確認できます。
  </p>
</div>
```

幅調整スライダーの HTML と JavaScript もこの例に含まれています。

#### CSS

各段落の `text-fit` 値では最初のキーワードに `grow` を指定し、2 つ目のキーワードにはそれぞれ異なる値、`consistent`、`per-line`、`per-line-all` を指定します。

```css live-sample___multi-line-keywords
#consistent {
  text-fit: grow consistent;
}

#per-line {
  text-fit: grow per-line;
}

#per-line-all {
  text-fit: grow per-line-all;
}
```

```css hidden live-sample___multi-line-keywords
* {
  box-sizing: border-box;
}

:root {
  overflow: hidden;
}

div {
  padding: 20px;
}

p {
  padding: 20px;
  background-color: rgb(0 0 0 / 0.2);
  position: relative;
  margin-bottom: 40px;
}

p::before {
  content: attr(id);
  background-color: black;
  color: white;
  padding: 5px 10px;
  position: absolute;
  top: -28px;
  left: 0px;
}
```

#### 結果

{{EmbedLiveSample("multi-line-keywords","100%","650")}}

スライダーを上下に動かし、各段落の動作を注意深く確認してみてください。次のことがわかります。

- `consistent` の段落では、テキストの各行の `font-size` が常に同じです。
- `per-line` の段落では、テキストの各行の `font-size` が多少異なり、その差は幅が狭いほど目立ちます。最後の行の `font-size` は拡大縮小されません。
- `per-line-all` の段落では、最後の行も含めて、テキストの各行の `font-size` が多少異なります。最後の行に 1 語か 2 語だけが折り返される幅では、この違いが非常に目立ちます。

```css hidden live-sample___basic-text-fit live-sample___text-fit-percentages live-sample___multi-line-keywords
@supports not (text-fit: grow) {
  body::before {
    content: "このブラウザーは text-fit に対応していません。";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS テキスト](/ja/docs/Web/CSS/Guides/Text)モジュール
