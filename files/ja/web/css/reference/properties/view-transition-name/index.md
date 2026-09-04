---
title: view-transition-name
slug: Web/CSS/Reference/Properties/view-transition-name
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`view-transition-name`** は [CSS](/ja/docs/Web/CSS) のプロパティで、選択された要素が参加する [ビュー遷移](/ja/docs/Web/API/View_Transition_API)のスナップショットを指定します。これにより、ビュー遷移中にデフォルトのクロスフェードアニメーションを使用することができるページの他の部分とは別に、それらの要素をアニメーションさせることができます。これにより、これらの要素に対して独自のアニメーションスタイルを定義することができます。

## 構文

```css
/* <custom-ident> 値の例 */
view-transition-name: header;
view-transition-name: figure-caption;

/* キーワード値 */
view-transition-name: none;
view-transition-name: match-element;

/* グローバル値 */
view-transition-name: inherit;
view-transition-name: initial;
view-transition-name: revert;
view-transition-name: revert-layer;
view-transition-name: unset;
```

### 値

- {{cssxref("custom-ident")}}
  - : 選択された要素を、ルートスナップショットとは別個のスナップショットに参加させる識別名です。`<custom-ident>` の値は、`auto`、`match-element`、`none`、[CSS 共通キーワード](/ja/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords)のいずれかにすることはできません。
- `match-element`
  - : ブラウザーは、選択された要素に自動的に固有の名前を割り当てます。この名前は、ページ上の他の要素とは別個に、その要素のスナップショットを取得するために使用されます。（この名前は内部的なものであり、DOM からは読み取ることができません。）
- `none`
  - : 選択された要素は、`view-transition-name` が設定された親要素を持たない限り、別個のスナップショットには含まれません。親要素がある場合は、その要素の一部としてスナップショットが作成されます。

## 解説

デフォルトで、ウェブアプリにビュー遷移が適用されると、そのトランジション中に発生する UI へのすべての変更がスナップショットとして記録され、まとめてアニメーションします。これがデフォルト（または `root`）のスナップショットです（[ビュー遷移の擬似要素ツリー](/ja/docs/Web/API/View_Transition_API/Using#ビュー遷移の擬似要素ツリー)を参照してください）。デフォルトでは、このアニメーションは滑らかなクロスフェードとなり、その動作は [SPA のビュー遷移のデモ](https://mdn.github.io/dom-examples/view-transitions/spa/) でご覧いただけます。

ビュー遷移中に、特定の要素を `root` スナップショットとは異なる方法でアニメーションさせたい場合は、その要素に次のように別の `view-transition-name` を指定することで実現できます。

```css
figcaption {
  view-transition-name: figure-caption;
}
```

その後、関連ビュー遷移擬似要素である {{cssxref("::view-transition-old()")}} と {{cssxref("::view-transition-new()")}} を使用することで、前後スナップショットにどのアニメーションを適用するかを指定できます。

```css
::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

特定の要素を別個のスナップショットに含めたくない場合は、`view-transition-name` の値を `none` に指定します。

```css
.dont-animate-me {
  view-transition-name: none;
}
```

ビュー遷移に関わるそれぞれのレンダリング済み要素ごとに、`view-transition-name` の `<custom-ident>` は固有の値である必要があります。もし 2 つのレンダリング済み要素が同時に同じ `view-transition-name` を持った場合は、 {{domxref("ViewTransition.ready")}} のプロミス ({{JSxRef("Promise")}}) が拒否され、遷移はスキップされます。

### 自動的に `view-transition-name` の値を指定

ビュー遷移時に、複数の UI の要素を別個にアニメーションさせたい場合があるでしょう。これは、ページ上に要素のリストがあり、それらを何らかの方法で再配置したい場合によく使われます。

```html
<ul>
  <li>アイテム 1</li>
  <li>アイテム 2</li>
  <li>アイテム 3</li>
  <li>アイテム 4</li>

  <!-- ... -->

  <li>アイテム 99</li>
</ul>
```

それぞれに固有の名前を付けると、特に要素の数が増えてきた場合に不便になることがあります。

```css-nolint
li:nth-child(1) {
  view-transition-name: item1;
}
li:nth-child(2) {
  view-transition-name: item2;
}
li:nth-child(3) {
  view-transition-name: item3;
}
li:nth-child(4) {
  view-transition-name: item4;
}

/* ... */

li:nth-child(99) {
  view-transition-name: item99;
}
```

この問題は、`match-element` を使用することで、ある程度回避できます。これにより、ブラウザーは選択されたそれぞれの要素に固有の内部の `view-transition-name` を発生させます。

```css
li {
  view-transition-name: match-element;
}
```

`match-element` は要素の識別子に基づいて `view-transition-name` の値を自動的に割り当てるため、同一文書内でのビュー遷移にのみ使用できます。自動生成された内部識別子は、異なる要素や文書間で引き継ぐことはできません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な `view-transition-name` の使い方

この例は、基本的な画像ギャラリーである [SPA のビュー遷移のデモ](https://mdn.github.io/dom-examples/view-transitions/spa/)から引用したものです。このデモの仕組みについては、[基本的な SPA のビュー遷移](/ja/docs/Web/API/View_Transition_API/Using#基本的な_spa_ビュー遷移)でより詳しく提供されています。

UI の変更のほとんどは、`root` の遷移スナップショットを使用してアニメーションしています。ただし、`<figcaption>` には `view-transition-name` として `figure-caption` が指定されており、ページ内の他の部分とは異なるアニメーションが適用されることができるようになっています。

```css
figcaption {
  view-transition-name: figure-caption;
}
```

次のコードは、`<figcaption>` 要素に対してのみ独自のアニメーションを適用します。

```css
@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-group(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

独自の CSS アニメーションを生成し、それを `::view-transition-old(figure-caption)` および `::view-transition-new(figure-caption)` の擬似要素に適用します。また、両者を同じ場所に固定し、デフォルトのスタイル設定がカスタムアニメーションに干渉しないようにするため、その他のスタイルも適用します。

### `match-element` 値の使用

この例では、HTML、CSS、SVG、JS といった技術の一覧を、最初は空の状態の本文領域の横にあるサイドバーに表示しています。各技術の見出しをクリックすると、その詳細が表示される隣接するコンテンツ領域に、コンテンツがアニメーションで展開されます。

#### HTML

{{htmlelement("main")}} 要素には、[順序なしリスト](/ja/docs/Web/HTML/Reference/Elements/ul)と {{htmlelement("article")}} 要素が含まれています。リスト内の複数の子要素である {{htmlelement("li")}} 要素は、それぞれ [見出し](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) の中に {{htmlelement("a")}} 要素が含まれています。

```html-nolint
<main class="match-element-applied">
  <ul>
    <li>
      <h2><a href="#">HTML</a></h2>
      <h3>ハイパーテキストマークアップ言語</h3>
      <p>
        ハイパーテキストマークアップ言語 (HTML) は、ウェブの最も基本的な構成要素です。これは、ウェブコンテンツの意味と構造を定義します。HTML は、ウェブ文書やアプリを構成するための基本的な要素を提供します。
      </p>
    </li>
    <li>
      <h2><a href="#">CSS</a></h2>
      <h3>カスケードスタイルシート</h3>
      <p>
        カスケードスタイルシート (CSS) は、HTML や XML（SVG、MathML、XHTML などの XML の派生言語も含む）で記述された文書の表示方法を記述するために使用されるスタイルシート言語です。CSS は、要素が画面上、紙面、音声、またはその他のメディア上でどのように表示されるべきかを記述します。
      </p>
    </li>
    <li>
      <h2><a href="#">SVG</a></h2>
      <h3>スケーラブルベクターグラフィック</h3>
      <p>
        スケーラブルベクターグラフィック (SVG) は、二次元ベクターグラフィックを説明するための XML ベースのマークアップ言語です。
      </p>
    </li>
    <li>
      <h2><a href="#">JS</a></h2>
      <h3>JavaScript</h3>
      <p>
        JavaScript (JS) は、ウェブのネイティブのプログラミング言語です。JavaScript は、第一級関数を備えた、軽量でインタープリタ型（あるいはジャストインタイムコンパイル型）のプログラミング言語です。ウェブページのスクリプト言語として最もよく知られていますが、Node.js など、ブラウザー以外の多くの環境でも使用されています。
      </p>
    </li>
  </ul>
  <article></article>
</main>
```

```html hidden
<form>
  <label for="match-element-checkbox">
    リストアイテムに <code>match-element</code> を適用する
  </label>
  <input type="checkbox" id="match-element-checkbox" checked />
</form>
```

#### CSS

[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)を使用して、`<li>` と `<article>` を横に並べて配置し、リストアイテムが最初の列で均等に空間を占有するようにしています。リストはコンテナー内の幅の 35% を占め、残りの利用できる水平方向の空間は `<article>` が埋めています。

```css hidden
/* 全般的なスタイルとリセット */
* {
  box-sizing: border-box;
  font-size: 0.9rem;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
li h2 {
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

li {
  overflow: hidden;
  container-type: inline-size;
}

li p {
  display: none;
}

li.active-item p {
  display: block;
}

li:nth-child(1) {
  background-color: #cbc0d3;
  border: 20px solid #cbc0d3;
}

li:nth-child(2) {
  background-color: #efd3d7;
  border: 20px solid #efd3d7;
}

li:nth-child(3) {
  background-color: #feeafa;
  border: 20px solid #feeafa;
}

li:nth-child(4) {
  background-color: #dee2ff;
  border: 20px solid #dee2ff;
}

/* リンク */

a {
  text-decoration: none;
  color: rgb(0 0 255 / 0.8);
}

a:hover,
a:focus {
  color: rgb(100 100 255);
}

/* フォームとチェックボックスのスタイル */
form {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  background-color: white;
  padding: 10px;
  border: 1px solid black;
}
```

```css
main {
  container-type: inline-size;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2cqw;
  position: relative;
}

ul {
  width: 35cqw;
  display: flex;
  flex-direction: column;
  gap: 1cqw;
}

article {
  flex: 1;
}

li {
  flex: 1;
}
```

同時に、`active-item` クラスを持つ要素を選択するルールも定義します。このクラスが要素に適用されると、その要素は `<article>` 要素の真上に位置指定されるようになります。このクラスは、リストアイテムのリンクがクリックされた際に JavaScript で適用され、ビューの遷移が開始されます。

```css
.active-item {
  position: absolute;
  z-index: 1;
  translate: 37cqw;
  width: calc(100% - 37cqw);
  height: 100%;
}
```

デフォルトで、ビュー遷移に含まれるすべての要素が、単一のクロスフェードで同時にアニメーションします。しかし、この例では、そのような動作は望んでいません。それぞれのリストアイテムに独自の動きのアニメーションを持たせたいのです。これを実現するには、すべてのリストアイテムに `view-transition-name: match-element` を適用します。

```css
.match-element-applied li {
  view-transition-name: match-element;
}
```

`match-element-applied` クラスはデフォルトで `<main>` 要素に適用されるため、結果フレーム内のチェックボックスは初期状態で選択されています。このチェックを外すと、クラスが除去され、代わりにデフォルトのクロスフェードアニメーションが適用されます。チェックボックスを切り替えることで、デフォルトのアニメーションと、`view-transition-name: match-element` を使用した場合に適用されるアニメーションを比較することができます。

次に、{{cssxref("::view-transition-group()")}} 擬似要素を使用して、すべてのビュー遷移グループ（`*` 識別子で示されるもの）に {{cssxref("animation-duration")}} を適用し、すべての「旧」および「新」のスナップショットに {{cssxref("height")}} を `100%` に設定することで、アニメーションをカスタマイズします。これにより、古いスナップショットと新しいスナップショットのアスペクト比の違いを補正し、アニメーションをより滑らかに見せることができます。

```css
::view-transition-group(*) {
  animation-duration: 0.5s;
}

html::view-transition-old(*),
html::view-transition-new(*) {
  height: 100%;
}
```

#### JavaScript

この例では、リンクがクリックされた際にリストアイテムに `active-item` クラスが適用されます。これは `updateActiveItem()` 関数によって実現されています。

```js
const mainElem = document.querySelector("main");
let prevElem;
let checkboxElem = document.querySelector("input");

// ビュートランジションのコード
function updateActiveItem(event) {
  // クリックされたリンクが含まれているリストアイテムを取得
  const clickedElem = event.target.parentElement.parentElement;

  // リストアイテムに active-item クラスを設定
  clickedElem.className = "active-item";

  // 前回クリックされたアイテムがあれば、それを追跡する。
  // <article> の上に常にリストアイテムが 1 つだけ表示されるように、
  // 前回のアイテムから active-item クラスを除去する。
  if (prevElem === clickedElem) {
    prevElem.className = "";
    prevElem = undefined;
  } else if (prevElem) {
    prevElem.className = "";
    prevElem = clickedElem;
  } else {
    prevElem = clickedElem;
  }
}

mainElem.addEventListener("click", (event) => {
  event.preventDefault(); // クリックされたときに iframe がスクロールするのを防ぐ
  // <main> 要素内のリンクがクリックされない限り、何もしない
  if (event.target.tagName !== "A") {
    return;
  }

  // ビュー遷移が対応していない場合は、updateActiveItem() を単独で実行
  if (!document.startViewTransition) {
    updateActiveItem(event);
  } else {
    // updateActiveItem() を startViewTransition() 経由で実行
    const transition = document.startViewTransition(() =>
      updateActiveItem(event),
    );
  }
});

// <main> のクラスをオン／オフに切り替えて、match-element の適用有無を制御

checkboxElem.addEventListener("change", () => {
  mainElem.classList.toggle("match-element-applied");
});
```

`updateActiveItem()` 関数を、`startViewTransition()` 関数を通じて実行すると、技術情報の表示がスムーズにアニメーションされます。

#### 結果

サイドバーの技術の見出しをクリックすると、そのコンテンツが本文領域に表示される際のアニメーション効果を確認してください。

同時に、デフォルトでチェックされているチェックボックスがあり、これにより `view-transition-name: match-element` が適用されます。チェックボックスのチェックを外し、もう一度見出しをクリックすると、`view-transition-name: match-element` がない場合のビュー遷移がどのように動作するかを確認できます。

{{EmbedLiveSample("using_the-match-element_value", "", "400")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("view-transition-class")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-old()")}}
- {{cssxref("::view-transition-new()")}}
- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
