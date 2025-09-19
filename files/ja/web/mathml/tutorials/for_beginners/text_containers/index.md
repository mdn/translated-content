---
title: MathML テキストコンテナー
slug: Web/MathML/Tutorials/For_beginners/Text_containers
original_slug: Web/MathML/Guides/Text_containers
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MathMLRef}}

{{PreviousMenuNext("Web/MathML/Guides/Getting_started", "Web/MathML/Guides/Fractions_and_roots", "Web/MathML/Guides")}}

これで MathML の概要を理解していただけたと思いますので、次は MathML 数式の構成要素として使用するテキストコンテナー（変数、数値、演算子...）に焦点を移します。

## 数式のための Unicode 文字

数式には多くの特殊文字が含まれます。例えば、ギリシャ文字（例: Δ）、フラクター文字（例: 𝔄）、二重打文字（例: ℂ）、二項演算子（例: ≠）、矢印（例: ⇒）、積分記号（例: ∮）、和記号 (例: ∑), 論理記号 (例: ↪Ps∀), 柵 (例: ↪Ps_230A) など。ウィキペディアの記事 [Unicode における数学演算子と記号](https://en.wikipedia.org/wiki/Mathematical_operators_and_symbols_in_Unicode)は、使用する文字の概要を提供しています。

これらの文字のほとんどは基本ラテン語 Unicode ブロックに属しませんので、[文書の文字エンコーディング](/ja/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#html_文書の文字コードを指定する)を指定し、適切なウェブフォントで提供することをお勧めします。以下は UTF-8 エンコーディング方式と [Latin Modern Math](/ja/docs/Web/MathML/Guides/Fonts#math_表を含むフォント) フォントを使用する基本的なテンプレートです。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>数学記号の入ったマイページ</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <p style="font-family: Latin Modern Math">∀A∊𝔰𝔩(n,𝔽),TrA=0</p>
  </body>
</html>
```

{{ EmbedLiveSample('Unicode_characters_for_mathematics', 700, 100, "", "") }}

## ちょっとした意味づけ

[MathML を始めよう](/ja/docs/Web/MathML/Tutorials/For_beginners/Getting_started)の記事で、 MathML の数式中のテキストは `<mn>` や `<mo>` のような固有のコンテナー要素に包まれていることに注目しました。より一般的には、 MathML 数式のすべてのテキストはトークン要素と呼ばれるコンテナーの中に記載しなければなりません。さらに、 MathML ではテキストコンテンツの様々な意味を判別するために、複数のトークン要素を指定しています。

- `<mi>` 要素は「識別子」を表します。この「識別子」は記号でも任意のテキストでもかまいません。例えば、`<mi>x</mi>` （変数）、`<mi>cos</mi>` （関数名）、`<mi>π</mi>`（記号定数）などです。
- `<mn>` 要素は「数値リテラル」、または数値リテラルとして表示されるべき他のデータを表します。例えば、`<mn>2</mn>` （整数）、 `<mn>0.123</mn>` （10 進数）、 `<mn>0xFFEF</mn>` （16 進数値）などです。
- `<mo>` 要素は演算子、または演算子として表示されるべき何らかのものを表します。例えば、 `<mo>+</mo>` （二項演算子）、 `<mo>≤</mo>` （二項関係演算子）、 `<mo>∑</mo>` （和記号）、 `<mo>[</mo>` （フェンス）などです。
- `<mtext>` 要素は任意のテキストを表すために使用します。例えば `<mtext>if<mtext>` や `<mtext>maps to</mtext>` のような数式中の短い単語です。

### アクティブラーニング: トークン要素を認識する

下記の例はもっと複雑で、実数の絶対値が負でない場合に限り、その実数に等しいと言うものです。 さまざまなトークン要素と、それらが何に使用されるかを見てください。対応するテキストをクリックするたびに、そのテキストは強調表示され、確認メッセージが表示されます。

```html hidden
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>数学記号の入ったマイページ</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mrow>
        <mrow>
          <mo>|</mo>
          <mi>x</mi>
          <mo>|</mo>
        </mrow>
        <mo>=</mo>
        <mi>x</mi>
      </mrow>
      <mtext>&nbsp;iff&nbsp;</mtext>
      <mrow>
        <mi>x</mi>
        <mo>≥</mo>
        <mn>0</mn>
      </mrow>
    </math>
    <input type="button" id="clearOutput" value="リセット" />
    <div id="output"></div>
  </body>
</html>
```

```css hidden
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

```js hidden
const tokenElements = Array.from(
  document.querySelectorAll("mi, mo, mn, mtext"),
);
const outputDiv = document.getElementById("output");
function clearHighlight() {
  tokenElements.forEach((token) => {
    token.classList.remove("highlight");
  });
}
tokenElements.forEach((token) => {
  token.addEventListener("click", () => {
    clearHighlight();
    token.classList.add("highlight");
    outputDiv.insertAdjacentHTML(
      "beforeend",
      `<p><strong>あなたは <code>&lt;${token.tagName}&gt;</code> 要素をクリックしました。</strong></p>`,
    );
  });
});
document.getElementById("clearOutput").addEventListener("click", () => {
  clearHighlight();
  outputDiv.textContent = "";
});
```

{{ EmbedLiveSample('Active_learning_recognize_token_elements', 700, 400, "", "") }}

最後に、 MathML のソースを読んで、それがあなたの予想と一致しているかどうかを確認してください。

```xml
<math display="block">
  <mrow>
    <mrow>
      <mo>|</mo>
      <mi>x</mi>
      <mo>|</mo>
    </mrow>
    <mo>=</mo>
    <mi>x</mi>
  </mrow>
  <mtext>&nbsp;iff&nbsp;</mtext>
  <mrow>
    <mi>x</mi>
    <mo>≥</mo>
    <mn>0</mn>
  </mrow>
</math>
```

> [!NOTE]
> 指定されたテキストコンテンツにどのトークン要素を使用するかを決めるのは難しい場合があります。実際には、間違った要素を選んでも大きな問題が発生することはありません。なぜなら、すべてのトークン要素はブラウザー実装によって一般的に同じようにレンダリングされるからです（視覚的な表示と支援技術のために）。しかし、`<mi>` 要素と `<mo>` 要素には特別な判別する機能があるので注意が必要です。それらは以下の節で説明します。

## \<mi> の自動的なイタリック化

数学における組版上の慣例として、変数にはイタリック体を使用する慣例があります。そのために、単一の文字を持つ `<mi>` 要素は自動的にイタリック体として表示されます。これはラテン文字とギリシャ文字のすべてについて当てはまります。以下の式の 2 つの `<mi>` 要素のレンダリングを見比べてください。

```html
<math>
  <mi>sin</mi>
  <mi>x</mi>
</math>
```

{{ EmbedLiveSample('Automatic italicization of <mi>', 700, 50) }}

> [!NOTE]
> [MathML Core のこの表](https://w3c.github.io/mathml-core/#italic-mappings)は、斜体化の指定された文字の完全なリストと、それに対応する斜体文字を提供しています。

## \<mi> の自動的なイタリック化の取り消し

この既定のイタリックへの変換は、 `<mi>` 要素に `mathvariant="normal"` 属性を付けることで取り消すことができます。
以下の式でガンマ文字の大文字の描画を比較してみてください。

```html
<math>
  <mi>Γ</mi>
  <mi mathvariant="normal">Γ</mi>
</math>
```

{{ EmbedLiveSample('Reverting automatic italicization of <mi>', 700, 50) }}

> [!NOTE]
> この変換を適用することができますが、通常は専用の[数学用英数字記号](https://ja.wikipedia.org/wiki/数学用英数字記号)を使用します。

## \<mo> の演算子プロパティ

MathML には[演算子辞書](https://w3c.github.io/mathml-core/#operator-dictionary-human)があり、 `<mo>` 要素のコンテンツとコンテナー内での位置（前置き、中間、後置き）に応じて既定のプロパティを定義しています。具体例を考えてみましょう。

```html
<table>
  <tr>
    <td>Prefix plus</td>
    <td>
      <math>
        <mo>+</mo>
        <mi>i</mi>
      </math>
    </td>
  </tr>
  <tr>
    <td>Infix plus</td>
    <td>
      <math>
        <mi>j</mi>
        <mo>+</mo>
        <mi>i</mi>
      </math>
    </td>
  </tr>
  <tr>
    <td>Prefix sum</td>
    <td>
      <math>
        <mo>∑</mo>
        <mi>i</mi>
      </math>
    </td>
  </tr>
</table>
```

この例は下記のスクリーンショットのように表示されるはずです。 `<mi>i</mi>` 要素とそれに先行する `<mo>` の間の空間をよく見てください。前置プラスには空間がなく、中間プラスにはいくらか空間があり、前置き和記号には小さめの空間があります。

![演算子の空間が異なる MathML 数式のスクリーンショット](operator-spacing.png)

演算子は他にも多くのプロパティを所持しており、後で詳しく説明します。これで、演算子辞書にある文字には `<mo>` コンテナーを使用し、 `<mrow>` 要素で部分式を適切にグループ化することで、 MathML レンダラーの助けになります。

### アクティブラーニング: 違いを見つける

これで `<mi>` と `<mo>` の特別な機能に少し慣れたと思いますので、[ページ先頭の例](#数式のための_unicode_文字) の `<p>` 要素を実際の MathML で書き換えてみましょう。ブラウザーに視覚的に表示されたものを比較し、テキストのみのバージョンとの違いを説明してください。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>数学記号の入ったマイページ</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <p style="font-family: Latin Modern Math">∀A∊𝔰𝔩(n,𝔽),TrA=0</p>
    <p>
      <math>
        <mo>∀</mo>
        <mrow>
          <mi>A</mi>
          <mo>∊</mo>
          <mrow>
            <mi>𝔰𝔩</mi>
            <mrow>
              <mo>(</mo>
              <mi>n</mi>
              <mo>,</mo>
              <mi>𝔽</mi>
              <mo>)</mo>
            </mrow>
          </mrow>
        </mrow>
        <mo>,</mo>
        <mrow>
          <mrow>
            <mi>Tr</mi>
            <mi>A</mi>
          </mrow>
          <mo>=</mo>
          <mn>0</mn>
        </mrow>
      </math>
    </p>
    <input id="showSolution" type="button" value="答えを表示" />
    <div id="solution"></div>
  </body>
</html>
```

```css hidden
div {
  padding: 0.5em;
}
```

```js hidden
document.getElementById("showSolution").addEventListener(
  "click",
  () => {
    document.getElementById("solution").insertAdjacentHTML(
      "beforeEnd",
      `<ul>
      <li><strong><code>&lt;mi&gt;</code> 要素に "A" および "n" 変数を格納すると、イタリックでレンダリングされます</strong>。ただし、 <code>&lt;mi&gt;</code> 要素に複数の文字 "𝔰𝔩" や、そのような文字 "𝔽" を入れたりすると、直立のままレンダリングされます。</li>
      <li><strong><code>&lt;mo&gt;</code> 要素のテキストが　"∀", "∊", "=", またはカンマの場合、自動的に空間が追加されます</strong>。しかし、そのうちのいくつかは、括弧の周りに空間がないまま、前に空間が追加されません。</li>
    </ul>`,
    );
  },
  { once: true },
);
```

{{ EmbedLiveSample('active_learning_spot_the_difference', 700, 500, "", "") }}

> [!NOTE]
> 明らかな違いは、 MathML ではソースコードがより冗長になることです。このチュートリアルはこの言語を学ぶためのものですが、実際には MathML のコンテンツは一般的に手動では書かれません。詳しい情報は [MathML を書く](/ja/docs/Web/MathML/Guides/Authoring)のページを参照してください。

### アクティブラーニング: 伸縮演算子

演算子辞書では、いくつかの演算子に対応する伸縮軸と同様に、既定の伸縮プロパティを定義しています。例えば、演算子は既定では縦方向に伸縮し、 `<mrow>` コンテナー内の伸縮しない兄弟の最大の高さに応じた伸縮を行います。[以前の練習](#アクティブラーニング_トークン要素を認識する)を少し調整することで、演算子を垂直に伸縮させることができます。見つけられますか？

```html hidden
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>伸縮演算子のあるマイページ</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mrow>
        <mrow>
          <mo>|</mo>
          <mfrac>
            <mn>1</mn>
            <mi>x</mi>
          </mfrac>
          <mo>|</mo>
        </mrow>
        <mo>=</mo>
        <mfrac>
          <mn>1</mn>
          <mrow>
            <mo>|</mo>
            <mi>x</mi>
            <mo>|</mo>
          </mrow>
        </mfrac>
        <mo>=</mo>
        <mfrac>
          <mn>1</mn>
          <mi>x</mi>
        </mfrac>
      </mrow>
      <mtext>&nbsp;iff&nbsp;</mtext>
      <mrow>
        <mi>x</mi>
        <mo>≥</mo>
        <mn>0</mn>
      </mrow>
    </math>
    <input type="button" id="clearOutput" value="リセット" />
    <div id="output"></div>
  </body>
</html>
```

```css hidden
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

```js-nolint hidden
const tokenElements = Array.from(
  document.querySelectorAll("mi, mo, mn, mtext"),
);
const stretchyMoElements = Array.from(
  document.getElementsByTagName("mo"),
).slice(0, 2);
const outputDiv = document.getElementById("output");
function clearHighlight() {
  tokenElements.forEach((token) => {
    token.classList.remove("highlight");
  });
}
tokenElements.forEach((token) => {
  token.addEventListener("click", () => {
    clearHighlight();
    token.classList.add("highlight");
    let message = "";
    let tagName = `<code>&lt;${token.tagName}&gt;</code>`;
    if (token.tagName !== "mo")
      message = `いいえ、これは ${tagName} 要素です。`;
    else if (!stretchyMoElements.includes(token))
      message = `いいえ、これは ${tagName} 要素ですが、垂直方向に伸縮されていません。`;
    else
      message = `正解です。この ${tagName} 要素は子孫の <code>&lt;mfrac&gt;</code> の高さまで必要に応じて伸縮されます。`;
    outputDiv.insertAdjacentHTML(
      "beforeend",
      `<p><strong>${message}</strong></p>`,
    );
  });
});
document.getElementById("clearOutput").addEventListener("click", () => {
  clearHighlight();
  outputDiv.textContent = "";
});
```

{{ EmbedLiveSample('Active_learning_stretchy_fences', 700, 400, "", "") }}

いつものように、完了したらソースコードを読んでください。

```xml
<math display="block">
  <mrow>
    <mrow>
      <mo>|</mo>
      <mfrac>
        <mn>1</mn>
        <mi>x</mi>
      </mfrac>
      <mo>|</mo>
    </mrow>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mrow>
        <mo>|</mo>
        <mi>x</mi>
        <mo>|</mo>
      </mrow>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mi>x</mi>
    </mfrac>
  </mrow>
  <mtext>&nbsp;iff&nbsp;</mtext>
  <mrow>
    <mi>x</mi>
    <mo>≥</mo>
    <mn>0</mn>
  </mrow>
</math>
```

> [!WARNING]
> 伸縮できるようにするには、一般に特別な[数学フォント](/ja/docs/Web/MathML/Guides/Fonts)が要求されます。上記の例は[ウェブフォント](/ja/docs/Learn_web_development/Core/Text_styling/Web_fonts)に頼っています。

## まとめ

この記事では、テキストコンテナーとして使用されるいくつかのトークン要素とその意味付け、すなわち `<mi>` （識別子）、 `<mn>` （数値）、 `<mo>` （演算子）、 `<mtext>` （汎用テキスト）について学びました。ここまで、数式でよく使われる特殊な Unicode 文字を見て、 `<mi>` と `<mo>` 要素の監視できる動作の概要を述べてきました。次の記事では、トークン要素によって[分数と根号](/ja/docs/Web/MathML/Tutorials/For_beginners/Fractions_and_roots)のような複雑な式を作る方法を見ていきます。

## 関連情報

- [`<mi>` 要素](/ja/docs/Web/MathML/Reference/Element/mi)
- [`<mn>` 要素](/ja/docs/Web/MathML/Reference/Element/mn)
- [`<mo>` 要素](/ja/docs/Web/MathML/Reference/Element/mo)
- [`<mtext>` 要素](/ja/docs/Web/MathML/Reference/Element/mtext)

{{PreviousMenuNext("Web/MathML/Guides/Getting_started", "Web/MathML/Guides/Fractions_and_roots", "Web/MathML/Guides")}}
