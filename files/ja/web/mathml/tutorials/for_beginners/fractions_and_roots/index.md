---
title: MathML 分数と根号
slug: Web/MathML/Tutorials/For_beginners/Fractions_and_roots
original_slug: Web/MathML/Guides/Fractions_and_roots
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MathMLRef}}

{{PreviousMenuNext("Web/MathML/Guides/Text_containers", "Web/MathML/Guides/Scripts", "Web/MathML/Guides")}}

この記事では、テキストコンテナーを利用して、分数や根号を入れ子にしてより複雑な MathML 式を構築する方法を説明します。

## \<mfrac>, \<msqrt>, \<mroot> のサブツリー

[MathML を始めよう](/ja/docs/Web/MathML/Tutorials/For_beginners/Getting_started)の記事で、分数を記述するための `<mfrac>` 要素をすでに紹介しました。ここでは、根号を表す新しい要素（`<msqrt>` と `<mroot>`）を追加した基本的な例を考えてみましょう。

```html
<math>
  <mfrac>
    <mtext>child1</mtext>
    <mtext>child2</mtext>
  </mfrac>
</math>
<br />
<math>
  <msqrt>
    <mtext>child1</mtext>
    <mtext>child2</mtext>
    <mtext>...</mtext>
    <mtext>childN</mtext>
  </msqrt>
</math>
<br />
<math>
  <mroot>
    <mtext>child1</mtext>
    <mtext>child2</mtext>
  </mroot>
</math>
```

下記はブラウザーでどのように表示されるかを示すスクリーンショットです。

![mfrac, msqrt, mroot のスクリーンショット](mfrac-msqrt-mroot.png)

- すでに `<mfrac>` 要素が分数として描画されることは知っていますね。最初の子要素（分子）は横棒で区切られた 2 つ目の子要素（分母）の上に描画されます。
- `<msqrt>`は平方根としてレンダリングされます。子要素は [`<mrow>`](/ja/docs/Web/MathML/Tutorials/For_beginners/Getting_started#mrow_要素でのグループ化) のように並べられ、ルート記号 √ が先頭に付き、完全に上付き線で覆われます。
- 最後に、 `<mroot>` 要素は n 乗根としてレンダリングされます。最初の要素は根号に覆われ、 2 つ目の要素はルートの次数として使用され、前置上付き文字としてレンダリングされます。

### アクティブラーニング: 異なる要素を入れ子にする

MathML のサブツリーとその視覚的レンダリングとの関連を理解したかどうかを確認するための単純な練習です。この文書には MathML の数式が格納されており、その MathML の数式内のサブツリーに対応するすべてのサブツリーを調べる必要があります。それが終わったら、MathML 式のソースを検査し、それがあなたの予想と一致しているかどうかを確認することができます。

```html-nolint hidden
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8"/>
    <title>数式記号のあるマイページ</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <p>
      <math>
        <mfrac id="mfrac1">
          <msqrt id="msqrt1">
            <mn>2</mn>
          </msqrt>
          <mroot id="mroot1">
            <mn>4</mn>
            <mn>3</mn>
          </mroot>
        </mfrac>
        <mo>+</mo>
        <mroot id="mroot2">
          <mn>5</mn>
          <mfrac id="mfrac2">
            <mn>6</mn>
            <mn>7</mn>
          </mfrac>
        </mroot>
        <mo>+</mo>
        <msqrt id="msqrt2">
          <mn>8</mn>
          <mo>−</mo>
          <mn>9</mn>
        </msqrt>
      </math>
    </p>

    <ol id="options">
      <li>
        <input
          type="checkbox"
          data-comment="mfrac の子の順序を確認してください。" />
        mfrac に mroot が 1 番目の子として、 msqrt が 2 番目の子として入っている。
      </li>
      <li>
        <input
          type="checkbox"
          data-highlight="mroot2"
          data-comment="5 の「7 分の 6」乗根です。" />
        mroot に mn が 1 番目の子として、 mfrac が 2 番目の子として入っている。
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="この数式には、平方根の中に分数が入っているものはありません。" />
        msqrt に mfrac 要素が入っている。
    </li>
      <li>
        <input
          type="checkbox"
          data-comment="2 の平方根です。"
          data-highlight="msqrt1" />
        msqrt に 1 つの mn の子がある。
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="mroot の子の順序を確認してください。" />
        mroot に mfrac が 1 番目の子として、 mn が 2 番目の子として入っている。
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="「9 分の 8」の平方根です。"
          data-highlight="msqrt2" />
        msqrt に mn, mo, mn のリストの子がある。
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="4 の立方根分の 2 の平方根です。"
          data-highlight="mfrac1" />
        mfrac に msqrt が 1 番目の子として、 mroot が 2 番目の子として入っている。
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="mfrac には正確に 2 つの子が必要です。">
        mfrac に msqrt, mn, msqrt のリストの子がある。
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="mroot には正確に 2 つの子が必要です。" />
        mroot に 1 つの mn の子がある。
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="7 分の 6 の分数です。"
          data-highlight="mfrac2" />
        mfrac に 2 つの mn の子がある。
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="この数式には 2 つより多いの数値を持つ平方根はありません。" />
        msqrt に 5 つの mn の子がある。
      </li>
      <li>
        <input
          type="checkbox"
          data-highlight="mroot1"
          data-comment="4 の立方根です。" />
        mroot に 2 つの mn の子がある。
      </li>
    </ol>
    <p>
      <strong id="comment"></strong>
    </p>
    <p>
      <strong id="status"></strong>
    </p>
  </body>
</html>
```

```css hidden
math {
  font-family:
    Latin Modern Math,
    STIX Two Math;
  font-size: 200%;
}
math .highlight {
  background: pink;
}
math [id] .highlight {
  background: lightblue;
}
p {
  padding: 0.5em;
}
```

```js hidden
const options = document.getElementById("options");
const comment = document.getElementById("comment");
const checkboxes = Array.from(options.getElementsByTagName("input"));
const status = document.getElementById("status");
function verifyOption(checkbox) {
  let mathml = checkbox.dataset.highlight;
  if (mathml) {
    mathml = document.getElementById(mathml);
  }
  if (checkbox.checked) {
    comment.textContent = checkbox.dataset.comment;
    if (mathml) {
      mathml.classList.add("highlight");
    } else {
      checkbox.checked = false;
    }
  } else {
    comment.textContent = "";
    if (mathml) {
      mathml.classList.remove("highlight");
    }
  }
  const finished = checkboxes.every(
    (checkbox) => !!checkbox.checked === !!checkbox.dataset.highlight,
  );
  status.textContent = finished
    ? "おめでとう、正解をすべてチェックしました！"
    : "";
}
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    verifyOption(checkbox);
  });
});
```

{{ EmbedLiveSample('Active_learning_nesting_different_elements', 700, 600, "", "") }}

## 伸縮する根号

前回見たように、 `<msqrt>` 要素と `<mroot>` 要素の上付き線は、内容に応じて水平方向に伸びます。しかし、実際には根号 √ も内容と同じ高さに伸びます。

```html hidden
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

```html
<math display="block">
  <mroot>
    <msqrt>
      <mfrac>
        <mn>1</mn>
        <mn>2</mn>
      </mfrac>
    </msqrt>
    <mn>3</mn>
  </mroot>
</math>
```

{{ EmbedLiveSample('Stretchy_radical_symbols', 700, 200, "", "") }}

> [!WARNING]
> 伸縮を可能にするには、一般に特別な[数学フォント](/ja/docs/Web/MathML/Guides/Fonts)が必要です。前回の例は[ウェブフォント](/ja/docs/Learn_web_development/Core/Text_styling/Web_fonts)を使用しています。

## 線のない分数

数学の概念の中には[二項係数](https://ja.wikipedia.org/wiki/二項係数)や[ルジャンドル記号](https://ja.wikipedia.org/wiki/ルジャンドル記号)など、分数のような表記を用いて書かれるものがあります。このような表記をマークアップするには `<mfrac>` 要素を使用するのが適切です。横棒を描画しない分数のような表記の場合、 `<mfrac>` 要素に `linethickness="0"` 属性を付けてください。

```html hidden
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

```html
<math display="block">
  <mrow>
    <mo>(</mo>
    <mfrac linethickness="0">
      <mn>3</mn>
      <mn>2</mn>
    </mfrac>
    <mo>)</mo>
  </mrow>
  <mo>=</mo>
  <mn>3</mn>
  <mo>≠</mo>
  <mfrac>
    <mn>3</mn>
    <mn>2</mn>
  </mfrac>
</math>
```

{{ EmbedLiveSample('Fraction_without_bar', 700, 200, "", "") }}

> [!NOTE]
> `linethickness` 属性を使用して任意の太さを指定することができますが、数学フォントで指定する引数から計算される既定値のままにしておく方がよいでしょう。

## まとめ

今回は `<mfrac>`、`<msqrt>`、`<mroot>` 要素を使用して分数と根号を作る方法を見てきました。これらの要素には、分数と根号という特別な機能があることがわかりました。また、 `linethickness` 属性を使用して、分数を棒なしで描画する方法も見てきました。次の記事では、基本的な数学の記法を続け、[添字](/ja/docs/Web/MathML/Tutorials/For_beginners/Scripts)について考えます。

## 関連情報

- [`<mfrac>` 要素](/ja/docs/Web/MathML/Reference/Element/mfrac)
- [`<msqrt>` 要素](/ja/docs/Web/MathML/Reference/Element/msqrt)
- [`<mroot>` 要素](/ja/docs/Web/MathML/Reference/Element/mroot)

{{PreviousMenuNext("Web/MathML/Guides/Text_containers", "Web/MathML/Guides/Scripts", "Web/MathML/Guides")}}
