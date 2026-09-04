---
title: ::before
slug: Web/CSS/Reference/Selectors/::before
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

CSS において **`::before`** は、選択した要素の最初の子要素として[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)を生成します。よく {{cssxref("content")}} プロパティを使用して、要素に装飾的な内容を追加するために用いられます。この要素は既定でインラインです。

{{InteractiveExample("CSS デモ: ::before", "tabbed-standard")}}

```css interactive-example
a {
  color: blue;
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

## 構文

```css-nolint
::before {
  content: /* 値 */;
  /* プロパティ */
}
```

## 解説

`::before` 擬似要素は、関連付けられた要素、すなわち「生成元要素」の直下の子として生成されるインラインボックスです。多くの場合、{{CSSxRef("content")}} プロパティを介して要素に装飾的なコンテンツ（アイコン、引用符、その他の装飾など）を追加するために使用されます。

`::before` 擬似要素は、{{ glossary("replaced elements", "置換要素")}}（{{htmlelement("img")}} など）には適用できません。これらは外部リソースによってコンテンツが決定され、現在の文書のスタイルの影響を受けないためです。

`::before` 擬似要素の {{cssxref("display")}} 値が `list-item` の場合、リストアイテムのように振る舞いますので、{{cssxref("::marker")}} 擬似要素は {{htmlelement("li")}} 要素と同様に生成可能です。

{{cssxref("content")}} プロパティが指定されていない場合、不正な値を持つ場合、または値として `normal` または `none` を取る場合、`::before` 擬似要素はレンダリングされません。これは `display: none` が設定された場合と同様の挙動を示します。

> [!NOTE]
> [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content) では[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)と[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)を見分けやすくするために、 `::before` の表記法（二重コロン付き）が導入されました。ブラウザーでは CSS2 で導入された `:before` も使用できます。

デフォルトでは、`::before` および `::after` 擬似要素は親要素と同じ重ね合わせコンテキストを共有します。明示的に {{cssxref("z-index")}} が設定されていない場合、`::after` 擬似要素の生成コンテンツは `::before` 擬似要素の生成コンテンツの上に現れます。これは、`::after` が DOM フローにおいて後からレンダリングされるためです。

## アクセシビリティ

`::before` 擬似要素を使用してコンテンツを追加することは推奨されません。スクリーンリーダーによる確実なアクセシビリティが保証されないためです。

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

{{EmbedLiveSample('Adding_quotation_marks', '500', '50')}}

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
const list = document.querySelector("ul");
list.addEventListener("click", (ev) => {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("done");
  }
});
```

ここで上記のコードをライブで実行できます。なお、アイコンは使用しておらず、チェックマークは実際に CSS の `::before` で整形したものです。先に進んでやってみてください。

#### 結果

{{EmbedLiveSample('To-do_list', 400, 300)}}

### 特殊文字

これは CSS であり HTML ではないので、 content の値の中でエンティティのマークアップを使用することは**できません**。特殊文字を使用する必要がある場合で、 CSS の content の文字列に直接入力できない場合は、バックスラッシュの後に 16 進数の Unicode 値を続ける Unicode エスケープシーケンスを使用してください。

#### HTML

```html
<ol>
  <li>玉子を割ってボウルに入れる</li>
  <li>牛乳を入れる</li>
  <li>小麦粉を入れる</li>
  <li aria-current="step">滑らかになるまでかき混ぜる</li>
  <li>熱した油をひいた平らなフライパンに、お玉一杯分の生地を流し入れる</li>
  <li>パンケーキの表面のつやがなくなるまで焼く</li>
  <li>ひっくり返して、あと数分焼く</li>
  <li>お好みのトッピングをつけてお召し上がりください</li>
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

li[aria-current="step"]::before {
  content: "\21E8 "; /* Unicode エスケープシーケンス "Rightwards White Arrow" */
  display: inline;
}
```

#### 結果

{{EmbedLiveSample('Special_characters', 400, 200)}}

### `::before::marker` の入れ子の擬似要素

`::before::marker` [入れ子の擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements)は、リストアイテム、すなわち {{CSSxRef("display")}} プロパティが `list-item` に設定されている `::before` 擬似要素のリストのマーカー ({{CSSxRef("::marker")}}) を選択します。

このデモでは、`::before` と `::after` を使用してリストナビゲーションメニューの前後に追加の[リストアイテム](/ja/docs/Web/HTML/Reference/Elements/li)を生成します（`display: list-item` を設定してリストアイテムのように振る舞うようにします）。その後、`ul::before::marker` と `ul::after::marker` を使用して、それぞれのリストマーカーに異なる色を適用します。

#### HTML

```html
<ul>
  <li><a href="#">まえがき</a></li>
  <li><a href="#">はじめに</a></li>
  <li><a href="#">基本の理解</a></li>
</ul>
```

#### CSS

```css
ul {
  font-size: 1.5rem;
  font-family: "Helvetica", "Arial", sans-serif;
}

ul::before,
ul::after {
  display: list-item;
  color: orange;
}

ul::before {
  content: "開始";
}

ul::after {
  content: "終了";
}

ul::before::marker,
ul::after::marker {
  color: red;
}
```

#### 結果

{{EmbedLiveSample('`::before::marker` nested pseudo-elements', 450, 200)}}

3 つのナビゲーションアイテムのリストの箇条書き記号は `<li>` 要素であるため生成されますが、「開始」と「終了」が擬似要素を介して挿入されており、箇条書き記号のスタイル設定には `::marker` が使用されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("::after")}}
- {{Cssxref("content")}}
