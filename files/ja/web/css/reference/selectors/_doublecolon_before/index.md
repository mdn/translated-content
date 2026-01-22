---
title: ::before (:before)
slug: Web/CSS/Reference/Selectors/::before
original_slug: Web/CSS/::before
---

CSS において **`::before`** は、選択した要素の最初の子要素として[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)を生成します。よく {{cssxref("content")}} プロパティを使用して、要素に装飾的な内容を追加するために用いられます。この要素は既定でインラインです。

```css
/* リンクの前にハートを追加 */
a::before {
  content: "♥";
}
```

{{InteractiveExample("CSS デモ: ::before", "tabbed-standard")}}

```css interactive-example
a {
  color: #0000ff;
  text-decoration: none;
}

a::before {
  content: "🔗";
}

.local-link::before {
  content: url("/shared-assets/images/examples/firefox-logo.svg");
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
```

```html interactive-example
<p>
  Learning resources for web developers can be found all over the internet. Try
  out
  <a href="https://web.dev/">web.dev</a>,
  <a href="https://www.w3schools.com/">w3schools.com</a> or our
  <a href="https://developer.mozilla.org/" class="local-link">MDN web docs</a>.
</p>
```

> [!NOTE]
> `::before` および `::after` によって作成される擬似要素は[要素の整形ボックスに含まれるため](https://www.w3.org/TR/CSS2/generate.html#before-after-content)、 {{htmlelement("img")}} や {{htmlelement("br")}} のような[置換要素](/ja/docs/Web/CSS/Guides/Images/Replaced_element_properties)には適用されません。

## 構文

{{CSSSyntax}}

> [!NOTE]
> CSS3 では[疑似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)と[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)を見分けやすくするために、 `::before` の表記法（二重コロン付き）が導入されました。ブラウザーでは CSS2 で導入された `:before` も使用できます。

## 例

### 引用符の追加

`::before` 擬似要素を使用するシンプルな例の一つとして、引用符を追加します。引用符を挿入するために `::before` および {{Cssxref("::after")}} の両方を使用しています。

#### HTML

```html
<q>引用があることは、</q>彼は言った、<q>ないよりも良い。</q>
```

#### CSS

```css
q::before {
  content: "«";
  color: blue;
}

q::after {
  content: "»";
  color: red;
}
```

#### 結果

{{EmbedLiveSample('Adding_quotation_marks', '500', '50', '')}}

### 装飾の例

{{cssxref("content")}} プロパティ内の文字列や画像は、大体思う通りに整形することができます。

#### HTML

```html
<span class="ribbon">オレンジのボックスがどこにあるか注意してください。</span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::before {
  content: "このオレンジのボックスを見てください。";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### 結果

{{EmbedLiveSample('Decorative_example', 450, 60)}}

### やることリスト

この例では、擬似要素を使用して簡単なやることリストを作成します。この方法は UI に小さな変更を加え、使い勝手を改善するためによく使われます。

#### HTML

```html
<ul>
  <li>牛乳を買う</li>
  <li>犬の散歩をする</li>
  <li>エクササイズ</li>
  <li>コードを書く</li>
  <li>音楽を演奏する</li>
  <li>リラックスする</li>
</ul>
```

#### CSS

```css
li {
  list-style-type: none;
  position: relative;
  margin: 2px;
  padding: 0.5em 0.5em 0.5em 2em;
  background: lightgrey;
  font-family: sans-serif;
}

li.done {
  background: #ccff99;
}

li.done::before {
  content: "";
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}
```

#### JavaScript

```js
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("done");
    }
  },
  false,
);
```

ここで上記のコードをライブで実行できます。なお、アイコンは使用しておらず、チェックマークは実際に CSS の `::before` で整形したものです。先に進んでやってみてください。

#### 結果

{{EmbedLiveSample('To-do_list', 400, 300)}}

### 特殊文字

これは CSS であり HTML ではないので、 content の値の中でエンティティのマークアップを使用することは**できません**。特殊文字を使用する必要がある場合で、 CSS の content の文字列に直接入力できない場合は、バックスラッシュの後に 16 進数の Unicode 値を続ける Unicode エスケープシーケンスを使用してください。

#### HTML

```html
<ol>
  <li>Crack Eggs into bowl</li>
  <li>Add Milk</li>
  <li>Add Flour</li>
  <li aria-current="step">Mix thoroughly into a smooth batter</li>
  <li>Pour a ladleful of batter onto a hot, greased, flat frying pan</li>
  <li>Fry until the top of the pancake loses its gloss</li>
  <li>Flip it over and fry for a couple more minutes</li>
  <li>serve with your favorite topping</li>
</ol>
```

#### CSS

```css
li {
  padding: 0.5em;
}

li[aria-current="step"] {
  font-weight: bold;
}

li[aria-current="step"]::after {
  content: " \21E6"; /* 左向きの白い矢印を表す Unicode の 16 進数 */
  display: inline;
}
```

#### 結果

{{EmbedLiveSample('Special_characters', 400, 200)}}

## アクセシビリティの考慮

`::before` 擬似要素を使用してコンテンツを追加することは、スクリーンリーダーからアクセスできなくなる可能性があるため推奨されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("::after")}}
- {{Cssxref("content")}}
