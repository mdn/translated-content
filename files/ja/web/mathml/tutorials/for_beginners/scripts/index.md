---
title: MathML 添字要素
slug: Web/MathML/Tutorials/For_beginners/Scripts
original_slug: Web/MathML/Guides/Scripts
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MathMLRef}}

{{PreviousMenuNext("Web/MathML/Guides/Fractions_and_roots", "Web/MathML/Guides/Tables", "Web/MathML/Guides")}}

基本的な数学記法の復習を続け、添字つきの MathML 要素の構築に焦点を当てます。

## 下付き文字と上付き文字

[前回の記事](/ja/docs/Web/MathML/Tutorials/For_beginners/Fractions_and_roots)で見たものと同様に、`<msub>`、`<msup>`、`<msubsup>` は、ちょうど 2 つの要素（`<msub>`、`<msup>`の場合）、または 3 つの要素（`<msubsup>` の場合）ガ指定された特別な構造があります。

```html
<p>
  msub:
  <math>
    <msub>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </msub>
  </math>
</p>

<p>
  msup:
  <math>
    <msup>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </msup>
  </math>
</p>
<p>
  msubsup:
  <math>
    <msubsup>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
      <mtext>child3</mtext>
    </msubsup>
  </math>
</p>
```

上記の例をブラウザーで表示すると次のようになります。

{{ EmbedLiveSample('Subtrees_of_msub_msup_msubsup', 700, 200, "", "") }}

次の点に気を付けてください。

- `<msub>` 要素の 2 つ目の子は、 1 つ目の子の下付き文字として添付されます。
- `<msup>` 要素の 2 つ目の子は、 1 つ目の子の上付き文字として添付されます。
- `<msubsup>` 要素の 2 つ目と 3 つ目の子は、それぞれ 1 つ目の子の下付き文字と上付き文字として添付されます。
- 添字内のテキストは小さくなります。

> [!NOTE]
> MathML 要素 `<msub>` と `<msup>` は HTML の [`<sub>`](/ja/docs/Web/HTML/Reference/Elements/sub) や [`<sup>`](/ja/docs/Web/HTML/Reference/Elements/sup) 要素とは異なります。これらにより、テキストに限らず、任意の MathML サブツリーを添字として提供することができます。

## 真下付き文字と真上付き文字

`<munder>`、`<mover>`、`<munderover>` の各要素は、真下付き文字と真上付き文字を使用する以外はとてもよく似ています。詳細を説明する代わりに、以下の練習でその定義を理解してください。

### アクティブラーニング: 真下・真上付き文字を理解する

次の例では、謎の要素（疑問符で書かれています）の名前を推測してください。解決策を確認するには、ボタンを押してください。

```html-nolint hidden
<p>
  <code>&lt;<span>????????</span>&gt;</code> 要素にちょうど 2 つの子 (child1, child2):
  <math>
    <mover>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </mover>
  </math>
</p>
<p>
  <code>&lt;<span>????????</span>&gt;</code> 要素にちょうど 3 つの子 (child1, child2, child3):
  <math>
    <munderover>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
      <mtext>child3</mtext>
    </munderover>
  </math>
</p>
<p>
  <code>&lt;<span>????????</span>&gt;</code> 要素にちょうど 2 つの子 (child1, child2):
  <math>
    <munder>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </munder>
  </math>
</p>

<p><input type="button" id="showSolution" value="答えを表示" /></p>
```

```css hidden
p {
  padding: 0.5em;
}
```

```js hidden
document.getElementById("showSolution").addEventListener("click", () => {
  const maths = Array.from(document.getElementsByTagName("math"));
  Array.from(document.getElementsByTagName("span")).forEach((span, index) => {
    span.textContent = maths[index].firstElementChild.tagName;
  });
});
```

{{ EmbedLiveSample('Subtrees_of_munder_mover_munderover', 700, 400, "", "") }}

### アクティブラーニング: 添字要素を認識する

以下のMathML式は、分数、根号、添字を入れ子にして、より複雑な式を格納しています。添字要素 `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>`, `<munderover>` でレイアウトされた要素を推測してみてください。このような要素をクリックするたびに、その要素が強調表示され、確認メッセージが表示されます。最後に、 MathML のソースを読んで、それが予想と一致しているかどうかを確認してください。

```html-nolint hidden
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>添字要素の入ったマイページ</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mroot>
        <mrow>
          <munder>
            <mi>β</mi>
            <mo>⎵</mo>
          </munder>
        </mrow>
        <mn>3</mn>
      </mroot>
      <mo>+</mo>
      <mfrac>
        <mrow>
          <mo>|</mo>
          <mover>
            <mi>α</mi>
            <mo>→</mo>
          </mover>
          <mo>|</mo>
        </mrow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfrac>
      <mo>−</mo>
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mi>n</mi>
        </munderover>
        <msqrt>
          <mrow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>K</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mrow>
        </msqrt>
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
const scriptedElements = Array.from(
  document.querySelectorAll("msub, msup, msubsup, munder, mover, munderover"),
);
const outputDiv = document.getElementById("output");
function clearHighlight() {
  scriptedElements.forEach((scripted) => {
    scripted.classList.remove("highlight");
  });
}
scriptedElements.forEach((scripted) => {
  scripted.addEventListener("click", () => {
    clearHighlight();
    scripted.classList.add("highlight");
    outputDiv.insertAdjacentHTML(
      "beforeend",
      `<p><strong><code>&lt;${scripted.tagName}&gt;</code> 要素をクリックしました。</strong></p>`,
    );
  });
});
document.getElementById("clearOutput").addEventListener("click", () => {
  clearHighlight();
  outputDiv.textContent = "";
});
```

{{ EmbedLiveSample('Active_learning_recognize_scripted_elements', 700, 400, "", "") }}

## それ以外の演算子プロパティ

前回、いくつかの [`<mo>` 要素のプロパティ](/ja/docs/Web/MathML/Tutorials/For_beginners/Text_containers#mo_の演算子プロパティ)、すなわち縦方向の伸縮と空間について見てきました。これで添字要素が利用できるようになったので、このリストを拡張することができます。[前回の例](#アクティブラーニング_添字要素を認識する)を多少修正することで行います。

### 水平方向の伸長

最初に <math><mi>β</mi><mo>≔</mo><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>+</mo><msub><mi>z</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\beta := z*{1} + z*{2}</annotation></math> and <math><mi>α</mi><mo>≔</mo><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>v</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\alpha := v*{1} + v*{2}</annotation></math> の置き換えを行ってみましょう。

```html-nolint hidden
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>水平方向に伸縮する演算子のあるマイページ</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mroot>
        <mrow>
          <munder>
            <mrow>
              <msub>
                <mi>z</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>z</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>⎵</mo>
          </munder>
        </mrow>
        <mn>3</mn>
      </mroot>
      <mo>+</mo>
      <mfrac>
        <mrow>
          <mo>|</mo>
          <mover>
            <mrow>
              <msub>
                <mi>v</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>v</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>→</mo>
          </mover>
          <mo>|</mo>
        </mrow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfrac>
      <mo>−</mo>
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mi>n</mi>
        </munderover>
        <msqrt>
          <mrow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>K</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mrow>
        </msqrt>
      </mrow>
    </math>
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

{{ EmbedLiveSample('Stretching_in_horizontal_direction', 700, 200, "", "") }}

これで、下カッコ "⎵" と右向き矢印 "→" は、置換された値の幅に応じて水平方向に伸びることがわかりました。 `<mrow>` 内の伸縮しない兄弟の高さに応じて、[いくつかの縦方向の演算子は伸縮できる](/ja/docs/Web/MathML/Tutorials/For_beginners/Text_containers#active_learning_stretchy_operators) ことを思い出してください。同様に、いくつかの水平方向の演算子は `<munder>`、`<mover>`、`<munderover>` 要素内の伸縮しない兄弟の幅に応じて伸縮を行います。

> [!NOTE]
> 伸縮は `<munder>`、`<mover>` 、`<munderover>` 要素のどの子要素に対しても、真下付き文字や真上付き文字に限らず行うことができます。

### 大きな演算子と制限

これまでの例では、 [`display="block"`](/ja/docs/Web/MathML/Tutorials/For_beginners/Getting_started#display_属性) 属性を使用しています。同じ例を、その属性なしで表示してみましょう。

```html-nolint hidden
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>移動制限と小さな「大きな演算子」のあるマイページ</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math>
      <mroot>
        <mrow>
          <munder>
            <mrow>
              <msub>
                <mi>z</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>z</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>⎵</mo>
          </munder>
        </mrow>
        <mn>3</mn>
      </mroot>
      <mo>+</mo>
      <mfrac>
        <mrow>
          <mo>|</mo>
          <mover>
            <mrow>
              <msub>
                <mi>v</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>v</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>→</mo>
          </mover>
          <mo>|</mo>
        </mrow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfrac>
      <mo>−</mo>
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mi>n</mi>
        </munderover>
        <msqrt>
          <mrow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>K</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mrow>
        </msqrt>
      </mrow>
    </math>
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

{{ EmbedLiveSample('Large_operator_and_limits', 700, 200, "", "") }}

予想通り、数式は中央揃えされなくなり、レンダリングは高さが最小になるように変更されました。和の記号に注目すると、シグマが小さく描画され、 `<munderover>` 要素の添字がこれで下付き・上付き添字になっていることがわかります。これは "∑" 演算子の 2 つの特性によるものです。

- 大きな演算子: 演算子は `<math>` タグに `display="block"` 属性がある場合、より大きな字形で描画されます。
- 移動制限: 演算子に付けられた真下付き文字と真上付き文字は `<math>` タグに `display="block"` 属性がない場合、それぞれ下付き文字と上付き文字として表示されます。

> [!NOTE]
> 「大きな演算子」特性は添字とは無関係ですが、この特性が付いた演算子はを保有する演算子は一般的に添字が付きます。移動制限特性は、`<munder>` と `<mover>` 要素にも適用されます。

## まとめ

この記事では、下付き・上付き・真下付き・真上付き文字のための要素 `<msub>`、`<msup>`、`<msubsup>`、`<munder>`、`<mover>`、`<munderover>` を紹介し、基本的なレイアウトの確認を完了しました。これらの要素を用いて、 `<mo>` 要素の新しい特性を簡単に紹介することができました。次の記事では、引き続き[表レイアウト](/ja/docs/Web/MathML/Tutorials/For_beginners/Tables)を取り上げます。

## 関連情報

- [`<msub>` 要素](/ja/docs/Web/MathML/Reference/Element/msub)
- [`<msup>` 要素](/ja/docs/Web/MathML/Reference/Element/msup)
- [`<msubsup>` 要素](/ja/docs/Web/MathML/Reference/Element/msubsup)
- [`<munder>` 要素](/ja/docs/Web/MathML/Reference/Element/munder)
- [`<mover>` 要素](/ja/docs/Web/MathML/Reference/Element/mover)
- [`<munderover>` 要素](/ja/docs/Web/MathML/Reference/Element/munderover)

{{PreviousMenuNext("Web/MathML/Guides/Fractions_and_roots", "Web/MathML/Guides/Tables", "Web/MathML/Guides")}}
