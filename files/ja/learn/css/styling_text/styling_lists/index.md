---
title: リストの装飾
slug: Learn/CSS/Styling_text/Styling_lists
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}

[リスト](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists)は他のテキストとほとんど同じようにふるまいますが、知っておくべきリスト固有の CSS プロパティと、考慮すべきベストプラクティスがいくつかあります。 この記事はすべてを説明しています。

| 前提知識: | 基本的なコンピューターリテラシー、HTML の基本 ([HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)を学ぶ)、 CSS の基本 ([CSS 入門](/ja/docs/Learn/CSS/First_steps)を学ぶ)、[CSS のテキストとフォントの基礎](/ja/docs/Learn/CSS/Styling_text/Fundamentals)。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 学習目標: | リストの装飾に関連するベストプラクティスとプロパティに慣れること。                                                                                                                                                                                            |

## 簡単なリストの例

はじめに、簡単なリストの例を見てみましょう。 この記事を通して、順序なしリスト、順序付きリスト、そして説明リストを見ていきます。これらはどれも似たような装飾機能持っていますが、リストの種類に特有のものもあります。 [装飾していない例](https://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html)は Github にあります ([ソースコード](https://github.com/mdn/learning-area/blob/master/css/styling-text/styling-lists/unstyled-list.html)もチェックしてください) 。

そのリストの例の HTML はこんな感じです。

```html
<h2>Shopping (unordered) list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<ul>
  <li>Hummus</li>
  <li>Pita</li>
  <li>Green salad</li>
  <li>Halloumi</li>
</ul>

<h2>Recipe (ordered) list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<ol>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>

<h2>Ingredient description list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<dl>
  <dt>Hummus</dt>
  <dd>
    A thick dip/sauce generally made from chick peas blended with tahini, lemon
    juice, salt, garlic, and other ingredients.
  </dd>
  <dt>Pita</dt>
  <dd>A soft, slightly leavened flatbread.</dd>
  <dt>Halloumi</dt>
  <dd>
    A semi-hard, unripened, brined cheese with a higher-than-usual melting
    point, usually made from goat/sheep milk.
  </dd>
  <dt>Green salad</dt>
  <dd>That green healthy stuff that many of us just use to garnish kebabs.</dd>
</dl>
```

ここで実際の例に行き、[ブラウザー開発者ツール](/ja/docs/Learn/Common_questions/What_are_browser_developer_tools)を使用してリスト要素を調べると、次のようないくつかの装飾の既定設定に気付くでしょう。

- {{htmlelement("ul")}} 要素と {{htmlelement("ol")}} 要素の上下の {{cssxref("margin")}} は `16px` (`1em`)、{{cssxref("padding-left")}} は `40px` (`2.5em`) です。
- リスト項目 ({{htmlelement("li")}} 要素) には、間隔の設定に関する既定はありません。
- {{htmlelement("dl")}} 要素の上下の {{cssxref("margin")}} は `16px` (`1em`) ですが、パディングの設定はありません。
- {{htmlelement("dd")}} 要素の {{cssxref("margin-left")}} は `40px` (`2.5em`) です。
- 参照用に含めた {{htmlelement("p")}} 要素には、さまざまな種類のリストと同じ `16px` (`1em`) の上下の {{cssxref("margin")}} があります。

## リストの間隔の取り扱い

リストを装飾するときは、 (段落や画像などの) 周囲の要素と同じ垂直方向の間隔 (バーティカルリズム (vertical rhythm) とも呼ばれる) と、互いに同じ水平方向の間隔を維持するように装飾を調整する必要があります (Github で[完成した装飾した例](https://mdn.github.io/learning-area/css/styling-text/styling-lists/)を見ることができ、[ソースコード](https://github.com/mdn/learning-area/blob/master/css/styling-text/styling-lists/index.html)も見つけることができます) 。

テキストの装飾と間隔調整に使用する CSS は次のとおりです。

```css
/* General styles */

html {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 10px;
}

h2 {
  font-size: 2rem;
}

ul,
ol,
dl,
p {
  font-size: 1.5rem;
}

li,
p {
  line-height: 1.5;
}

/* Description list styles */

dd,
dt {
  line-height: 1.5;
}

dt {
  font-weight: bold;
}
```

- 1 番目の規則はサイト全体のフォントと `10px` の基準フォントサイズを設定します。 これらはページ上のすべてのものに継承されます。
- 2 番目と 3 番目の規則では、見出し、さまざまなリストの種類 (リスト要素の子はこれらを継承) 、および段落に相対フォントサイズを設定します。 つまり、各段落とリストのフォントサイズ、上下の間隔は同じになり、バーティカルリズムを一定に保つのに役立ちます。
- 4 番目では、段落とリスト項目に同じ {{cssxref("line-height")}} を設定しているため、段落と各個々のリスト項目のラインの間隔は同じになります。 これは、バーティカルリズムを一定に保つのにも役立ちます。
- 説明リストには 5 番目と 6 番目の規則が適用されます。 説明リストの用語と説明には、段落とリスト項目の場合と同じ `line-height` を設定します。 繰り返しますが、一貫性があることは良いことです！ また、説明する用語は太字にして、視覚的に目立つようにしています。>

## リスト固有の装飾

リストの一般的な間隔調整テクニックを見てきました。 次に、リスト固有のプロパティを調べてみましょう。 最初に知っておくべき 3 つのプロパティがあり、それらは {{htmlelement("ul")}} や {{htmlelement("ol")}} 要素に設定できます。

- {{cssxref("list-style-type")}}: リストに使用する行頭記号の種類を設定します。 例えば、順序なしリストの場合は正方形や丸の行頭記号、順序付きリストの場合は数字、文字、ローマ数字などです。
- {{cssxref("list-style-position")}}: 行頭記号をリスト項目の内側に表示するか、その外側の各項目の先頭より前に表示するかを設定します。
- {{cssxref("list-style-image")}}: 行頭記号に簡単な正方形や円ではなく、カスタム画像を使うことができます。

### 行頭記号の装飾

前述のように、{{cssxref("list-style-type")}} プロパティを使用して、行頭記号 (bullet point) に使用する行頭記号 (bullet) の種類を設定できます。 この例では、順序付きリストで大文字のローマ数字を使用するように設定しています。

```css
ol {
  list-style-type: upper-roman;
}
```

これにより、次のようになります。

![行頭記号がリスト項目テキストの外側に表示されるように設定された順序付きリスト。](outer-bullets.png)

それ以外のオプションを見るには、 {{cssxref("list-style-type")}} のリファレンスページを参照してください。

### 行頭記号の位置

{{cssxref("list-style-position")}} プロパティは、行頭記号をリスト項目の内側に表示するか、その外側の各項目の先頭より前に表示するかを設定します。 既定値は `outside` です。 これは、上で見たように、行頭記号をリスト項目の外側に配置します。

値を `inside` に設定すると、行頭記号を行の内側に配置します。

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![行頭記号がリスト項目のテキストの内側に表示されるように設定された順序付きリスト。](inner-bullets.png)

### 独自の行頭記号画像の使用

{{cssxref("list-style-image")}} プロパティを使用すると、行頭記号に独自の画像を使用することができます。構文は次のようにとても簡単です。

```css
ul {
  list-style-image: url(star.svg);
}
```

ただし、このプロパティは、行頭記号の位置、サイズなどを制御するという点では少し制限があります。 {{cssxref("background")}} プロパティファミリーを使用するほうが得策です。 これについては、[ボックスの装飾](/ja/docs/Learn/CSS/Building_blocks)モジュールで詳しく説明します。とりあえず、その例をご紹介しましょう。

完成した例では、 (既に上で見たものの上に) 次のように順序なしリストを装飾しました。

```css
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url(star.svg);
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

ここでは次のことを行いました。

- {{htmlelement("ul")}} の {{cssxref("padding-left")}} を既定の `40px` から `20px` に減らし、リスト項目にも同じ量を設定します。 これにより、リスト項目は全体的にはまだ順序リスト項目や説明リストの説明文が並んでいますが、リスト項目には背景画像が入るように多少のパディングが入っています。これをしないと、背景画像がリスト項目のテキストと重なってしまい、見た目がごちゃごちゃしてしまいます。
- 既定で行頭記号が表示されないように、{{cssxref("list-style-type")}} を `none` に設定します。 代わりに、行頭記号を処理するために {{cssxref("background")}} プロパティを使用します。
- 各順序なしリスト項目に行頭記号を挿入しました。 関連するプロパティは次のとおりです。

  - {{cssxref("background-image")}}: 行頭記号として使用する画像ファイルへのパスを参照します。
  - {{cssxref("background-position")}}: これは選択した要素の背景のどこに画像を表示するかを定義します。 この場合は `0 0` としています。 つまり、各リスト項目の左上に行頭記号が表示されます。
  - {{cssxref("background-size")}}: 背景画像のサイズを設定します。 行頭記号のサイズをリスト項目と同じサイズ (または、ごくわずかに大きいか小さい) にすることをお勧めします。 サイズは `1.6rem` (`16px`) を使用しています。 これは、行頭記号を内部に配置できる `20px` のパディングに非常によく合っています — 行頭記号とリスト項目のテキストの間に 16px + 4px のスペースがあるとうまくいきます。
  - {{cssxref("background-repeat")}}: 既定では、背景画像は利用可能な背景スペースを埋めつくすまで繰り返します。 それぞれの場合に画像のコピーを 1 つだけ挿入したいので、これを `no-repeat` の値に設定します。

これにより、次のような結果が得られます。

![行頭記号が小さな星の画像として設定された順序なしリスト](list_formatting.png)

### list-style 一括指定

上記の 3 つのプロパティはすべて、単一の一括指定プロパティ {{cssxref("list-style")}} を使用して設定できます。 例えば、次の CSS を、

```css
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

これに置き換えることができます。

```css
ul {
  list-style: square url(example.png) inside;
}
```

値は任意の順序でリストすることができ、1 つ、2 つ、または 3 つすべてを使用できます (含まれていないプロパティーに使用される既定値は `disc`、`none`、`outside` です) 。 `type` と `image` の両方が指定されている場合、画像が何らかの理由でロードできない場合に、`type` を代替として使用します。

## リストの数え方の制御

場合によっては、順序付きリストで異なる方法で数えたいことがあります — 例えば 1 以外の数から始めたり、逆方向に数えたり、1 以上のステップで数えたりです。 HTML と CSS には、ここで役立つツールがいくつかあります。

### start

[`start`](/ja/docs/Web/HTML/Element/ol#start) 属性を使用すると、1 以外の数からリストを数え始めます。 次の例では、

```html
<ol start="4">
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

この出力が得られます。

{{ EmbedLiveSample('start', '100%', 150) }}

### reversed

[`reversed`](/ja/docs/Web/HTML/Element/ol#reversed) 属性はリストのカウントアップではなくカウントダウンを開始します。 次の例では、

```html
<ol start="4" reversed>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

この出力が得られます。

{{ EmbedLiveSample('reversed', '100%', 150) }}

> **メモ:** 逆方向のリストに `start` 属性の値より多くのリスト項目がある場合、カウントは引き続きゼロになり、その後負の値になります。

### value

[`value`](/ja/docs/Web/HTML/Element/ol#value) 属性を使用すると、リスト項目を特定の数値に設定できます。 次の例では、

```html
<ol>
  <li value="2">Toast pita, leave to cool, then slice down the edge.</li>
  <li value="4">
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li value="6">Wash and chop the salad.</li>
  <li value="8">Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

この出力が得られます。

{{ EmbedLiveSample('value', '100%', 150) }}

> **メモ:** 数値以外の {{cssxref("list-style-type")}} を使用している場合でも、`value` 属性に同等の数値を使用する必要があります。

## アクティブラーニング: ネストしたリストの装飾

このアクティブラーニングセッションでは、上で学んだことを取り入れて、ネストしたリストを装飾してください。 HTML を提供してあるので、次のことを行います。

1. 順序なしリストに正方形の行頭記号を付けます。
2. 順序なしリスト項目と順序付きリスト項目のフォントサイズの 1.5 のラインの高さを指定します。
3. 順序付きリストに小文字のアルファベットの行頭記号を付けます。
4. 行頭記号の種類、間隔、その他見つけられるものは何でも試して、好きなだけリストの例を試してみてください。

間違えた場合は、_Reset_ ボタンを使用していつでもリセットできます。 本当に立ち往生したら、答えを見るために _Show solution_ ボタンを押してください。

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<ul>
  <li>First, light the candle.</li>
  <li>Next, open the box.</li>
  <li>Finally, place the three magic items in the box, in this exact order, to complete the spell:
    <ol>
      <li>The book of spells</li>
      <li>The shiny rod</li>
      <li>The goblin statue</li>
    </ol>
  </li>
</ul></textarea
  >

  <h2>CSS Input</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></textarea>

  <h2>Output</h2>
  <div
    class="output"
    style="width: 90%;height: 12em;padding: 10px;border: 1px solid #0095dd;overflow: auto;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Reset"
      style="margin: 10px 10px 0 0;" />
    <input
      id="solution"
      type="button"
      value="Show solution"
      style="margin: 10px 0 0 10px;" />
  </div>
</div>
```

```js hidden
var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

var styleElem = document.createElement("style");
var headElem = document.querySelector("head");
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value =
    "ul {\n  list-style-type: square;\n}\n\nul li, ol li {\n  line-height: 1.5;\n}\n\nol {\n  list-style-type: lower-alpha\n}";
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 800) }}

## 関連情報

CSS カウンターは、リストの数え方と装飾をカスタマイズするための高度なツールを提供しますが、非常に複雑です。 あなたが自身を伸ばしたいと思うならば、これらを調べることを勧めます。 次を見てください。

- {{cssxref("@counter-style")}}
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}

## 腕試し

この記事の最後までたどり着き、アクティブラーニングのセクションでいくつかのスキルテストを行いましたが、今後も最も重要な情報を覚えていられますか？モジュールの最後には、あなたがこの情報を覚えているかどうかを確認するための評価があります — [コミュニティスクールのホームページの組版](/ja/docs/Learn/CSS/Styling_text/Typesetting_a_homepage)を参照してください。

この評価は、このモジュールで説明されているすべての知識をテストするものなので、先に進む前に他の記事を読んでおくとよいでしょう。

## まとめ

関連するいくつかの基本的な原則と特定のプロパティを知っていれば、リストの装飾のこつは比較的簡単です。 次の記事では、リンクの装飾テクニックについて説明します。

{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}
