---
title: 編集コンテキスト API の使用
slug: Web/API/EditContext_API/Guide
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{DefaultAPISidebar("EditContext API")}}

**[編集コンテキスト API](/ja/docs/Web/API/EditContext_API)** を使うと、{{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) による文字変換や絵文字ピッカー、その他のプラットフォーム固有の編集関連 UI など、高度なテキスト入力に対応したリッチテキストエディターをウェブ上に構築できます。

この記事では、編集コンテキスト API を使ってテキストエディターを構築するために必要な手順を解説します。このガイドでは、入力しながら構文を強調表示し、IME による文字変換にも対応するシンプルな HTML コードエディターの構築手順を見ていきます。

## 最終的なコードとライブデモ

最終的なコードは GitHub の[ソースコード](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor)を確認してください。このチュートリアルではコードの重要な部分だけを紹介するため、ソースコードを開いたまま読み進めるとよいでしょう。

ソースコードは次のファイルで構成されています。

- [index.html](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/index.html) にはエディターの UI 要素が含まれ、デモに必要な CSS と JavaScript のコードを読み込みます。
- [styles.css](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/styles.css) にはエディター UI のスタイルが含まれます。
- [editor.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/editor.js) には、エディター UI の設定、HTML コードの描画、ユーザー入力の処理を行う JavaScript コードが含まれます。
- [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js) には、HTML コードを開始タグ、終了タグ、テキストノードなどのトークンに分割する JavaScript コードが含まれます。
- [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) には、編集コンテキスト API が使用する文字オフセットと、ブラウザーがテキスト選択に使用する DOM ノードとの間で変換する JavaScript コードが含まれます。

ライブデモを試すには、編集コンテキスト API に対応したブラウザーで[編集コンテキスト API: HTML エディターのデモ](https://mdn.github.io/dom-examples/edit-context/html-editor/)を開いてください。

## エディター UI の作成

最初の手順は、エディターの UI を作成することです。エディターには、スペルチェックを無効にするため [`spellcheck`](/ja/docs/Web/HTML/Reference/Global_attributes/spellcheck) 属性を `false` に設定した {{HTMLElement("div")}} 要素を使います。

```html
<div id="html-editor" spellcheck="false"></div>
```

エディター要素のスタイルには、次の CSS コードを使います。このコードはエディターをビューポート全体に広げ、内容が収まりきらないときにスクロールできるようにします。また、{{cssxref("white-space")}} プロパティで HTML 入力テキスト内の空白文字を保持し、{{cssxref("tab-size")}} プロパティでタブ文字を 2 つの空白として描画します。最後に、デフォルトの背景色、テキスト色、キャレット色を設定します。

```css
#html-editor {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow: auto;
  white-space: pre;
  tab-size: 2;
  caret-color: red;
  background: black;
  line-height: 1.6;
  color: red;
}
```

## エディターを編集可能にする

ウェブ上で要素を編集可能にするには、通常、{{HTMLElement("input")}} 要素、{{HTMLElement("textarea")}} 要素、または [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性を使います。

しかし、編集コンテキスト API を使うと、属性を使わずに他の種類の要素も編集可能にできます。編集コンテキスト API で使用できる要素の一覧については、HTMLElement の `editContext` プロパティのページにある[使用できる要素](/ja/docs/Web/API/HTMLElement/editContext#possible_elements)を参照してください。

エディターを編集可能にするため、デモアプリは初期 HTML テキストをコンストラクターに渡して {{domxref("EditContext")}} インスタンスを作成し、エディター要素の {{domxref("HTMLElement.editContext", "editContext")}} プロパティにその `EditContext` インスタンスを設定します。

```js
// DOM からエディター要素を取得
const editorEl = document.getElementById("html-editor");

// EditContext インスタンスを作成
const editContext = new EditContext({
  text: "<html>\n  <body id=foo>\n    <h1 id='header'>Cool Title</h1>\n    <p class=\"wow\">hello<br/>How are you? test</p>\n  </body>\n</html>",
});

// エディターの editContext プロパティに値を設定
editorEl.editContext = editContext;
```

これらのコード行により、エディター要素がフォーカス可能になります。この要素にテキストを入力すると、`EditContext` インスタンスで {{domxref("EditContext.textupdate_event", "textupdate")}} イベントが発生します。

## テキストとユーザーの選択範囲の描画

ユーザーがテキストを入力したときに、構文を強調表示した HTML コードをエディターに描画するため、デモアプリは `render()` という関数を使います。この関数は、新しいテキストが入力されたとき、文字が削除されたとき、または選択範囲が変更されたときに呼び出されます。

### HTML コードのトークン化

`render()` 関数が最初に行うことの 1 つは、HTML テキストの内容をトークン化することです。HTML の構文を強調表示するにはテキスト内容をトークン化する必要があります。これには HTML コードの文字列を読み取り、開始タグ、終了タグ、属性、コメントノード、テキストノードのそれぞれがどこから始まりどこで終わるかを特定する処理が含まれます。

デモアプリでは、この処理に `tokenizeHTML()` 関数を使います。この関数は状態機械を維持しながら、文字列を 1 文字ずつ反復処理します。`tokenizeHTML()` 関数のソースコードは GitHub の [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js) で確認できます。

この関数は、次のようにデモアプリの HTML ファイルにインポートします。

```js
import { tokenizeHTML } from "./tokenizer.js";
```

### テキストの描画

ユーザーがテキストを入力したときや選択範囲が変更されたときに `render()` 関数が呼び出されると、この関数はエディター要素の内容を削除し、各トークンを個別の HTML 要素として描画します。

```js
// HTML トークンのリストを格納
let currentTokens = [];

function render(text, selectionStart, selectionEnd) {
  // エディターを空にして再描画
  editorEl.textContent = "";

  // テキストをトークン化
  currentTokens = tokenizeHTML(text);

  for (const token of currentTokens) {
    // 各トークンを span 要素として描画
    const span = document.createElement("span");
    span.classList.add(`token-${token.type}`);
    span.textContent = token.value;

    // span をエディター要素に追加
    editorEl.appendChild(span);

    // 新しい DOM ノードを currentTokens 配列内のトークンのプロパティに保存
    // fromOffsetsToRenderedTokenNodes で再利用
    token.node = span;
  }

  // 簡潔化のため、選択範囲の描画コードを省略
  // 「選択範囲の描画」を参照
  // …
}
```

編集コンテキスト API を使うと、編集したテキストの描画方法を制御できます。上記の関数は HTML 要素を使って描画しますが、`<canvas>` 要素に描画するなど、他の方法も使えます。

デモアプリは必要に応じて `render()` 関数を実行します。アプリの起動時に 1 回実行し、その後は {{domxref("EditContext.textupdate_event", "textupdate")}} イベントを待ち受けて、ユーザーがテキストを入力したときにも実行します。

```js
// EditContext の textupdate イベントを待ち受け
// テキスト入力を検知し、ビューを再描画
editContext.addEventListener("textupdate", (e) => {
  render(editContext.text, e.selectionStart, e.selectionEnd);
});

// 初期描画
render(editContext.text, editContext.selectionStart, editContext.selectionEnd);
```

### トークンのスタイル設定

前の `render()` 関数のコード例にあるように、各トークンにはその種類に対応するクラス名が設定されています。デモアプリでは、次のようにこのクラス名を使って CSS でトークンのスタイルを設定します。

```css
.token-openTagStart,
.token-openTagEnd,
.token-closeTagStart,
.token-closeTagEnd,
.token-selfClose {
  background: rgb(7 53 92);
  margin: 0 2px;
  color: white;
  border-radius: 0.25rem;
}

.token-equal {
  color: white;
}

.token-tagName {
  font-weight: bold;
  color: rgb(117 186 242);
}

.token-attributeName {
  color: rgb(207 81 198);
}

.token-attributeValue {
  font-style: italic;
  color: rgb(127 230 127);
  border: 1px dashed #8c8c8c;
  border-width: 1px 0;
}

.token-quoteStart,
.token-quoteEnd {
  font-weight: bold;
  color: rgb(127 230 127);
  border: 1px solid #8c8c8c;
  border-width: 1px 0 1px 1px;
  border-radius: 0.25rem 0 0 0.25rem;
}

.token-quoteEnd {
  border-width: 1px 1px 1px 0;
  border-radius: 0 0.25rem 0.25rem 0;
}

.token-text {
  color: #6a6a6a;
  padding: 0 0.25rem;
}
```

### 選択範囲の描画

デモアプリでは、点滅するテキストカーソルの表示やユーザーの選択範囲の強調表示に対応している `<div>` 要素をエディターに使います。それでも、編集コンテキスト API では選択範囲を描画する必要があります。これらの動作に対応しない他の種類の要素でも API を使えるためです。また、選択範囲を自分で描画することで、その表示方法をより細かく制御できます。さらに、`render()` 関数は実行のたびにエディター要素の HTML 内容を消去するため、ユーザーが選択した範囲は次回の実行時に失われます。

選択範囲を描画するため、デモアプリでは `render()` 関数の最後に {{domxref("Selection.setBaseAndExtent()")}} メソッドを使います。このメソッドには、選択範囲の開始位置と終了位置を表す DOM ノードと文字オフセットの組が必要です。一方、編集コンテキスト API は、現在の選択範囲の状態を編集バッファー全体に対する開始・終了位置の文字オフセットの組としてのみ保持します。デモアプリでは `fromOffsetsToSelection()` という別の関数を使い、これらの文字オフセットを次の 4 つの値に変換します。

- 選択範囲の開始位置を含む DOM ノード。
- 開始ノード内で選択範囲の開始位置を表す文字インデックス。
- 選択範囲の終了位置を含む DOM ノード。
- 終了ノード内で選択範囲の終了位置を表す文字インデックス。

```js
function render(text, selectionStart, selectionEnd) {
  // …
  // 簡潔化のため、render 関数の先頭部分を省略

  // 開始・終了オフセットを DOM の選択範囲に変換
  const { anchorNode, anchorOffset, extentNode, extentOffset } =
    fromOffsetsToSelection(selectionStart, selectionEnd, editorEl);

  // エディター要素に選択範囲を描画
  document
    .getSelection()
    .setBaseAndExtent(anchorNode, anchorOffset, extentNode, extentOffset);
}
```

`fromOffsetsToSelection()` 関数のコードは [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) ファイルで確認できます。

## コントロールの境界の更新

編集コンテキスト API を使うと、テキストエディターの UI を柔軟に定義できます。ただし、その分、通常はブラウザーやオペレーティングシステム (OS) が処理する一部の内容も、自分で処理する必要があります。

たとえば、編集可能なテキスト領域がページ上のどこにあるかを OS に知らせる必要があります。そうすることで、OS はユーザーがテキスト入力に使っている IME の変換ウィンドウなどの UI を正しい位置に表示できます。

デモアプリでは、編集可能なテキスト領域の境界を表す {{domxref("DOMRect")}} オブジェクトを {{domxref("EditContext.updateControlBounds()")}} メソッドに渡します。このメソッドはエディターの初期化時と、ウィンドウのサイズ変更時に呼び出します。

```js
function updateControlBounds() {
  // エディター要素の DOMRect オブジェクトを取得
  const editorBounds = editorEl.getBoundingClientRect();

  // EditContext インスタンスのコントロール境界を更新
  editContext.updateControlBounds(editorBounds);
}

// エディター初期化時に updateControlBounds 関数を呼び出し
updateControlBounds();

// ウィンドウのリサイズ時にも呼び出し
window.addEventListener("resize", updateControlBounds);
```

## Tab、Enter などのテキスト編集キーの処理

前の節で使った `textupdate` イベントは、ユーザーが <kbd>Tab</kbd> キーや <kbd>Enter</kbd> キーを押しても発生しません。そのため、これらのキーは個別に処理する必要があります。

これらのキーを処理するため、デモアプリはエディター要素の {{domxref("Element.keydown_event", "keydown")}} イベントリスナーを使い、次のように `EditContext` インスタンスのテキスト内容と選択範囲を更新します。

```js
// EditContext が未処理のキー入力を処理
editorEl.addEventListener("keydown", (e) => {
  // EditContext.updateText() は開始・終了オフセットが
  // 正しい順序であることを想定
  // 現在の選択状態では逆順の場合あり
  const start = Math.min(editContext.selectionStart, editContext.selectionEnd);
  const end = Math.max(editContext.selectionStart, editContext.selectionEnd);

  // Tab キーを処理
  if (e.key === "Tab") {
    // Tab キーのデフォルト動作を抑止
    e.preventDefault();

    // EditContext.updateText() で現在の選択位置に
    // タブ文字を挿入
    editContext.updateText(start, end, "\t");

    // 挿入したタブ文字の後ろに選択範囲を移動
    updateSelection(start + 1, start + 1);

    // エディターを再描画
    render(
      editContext.text,
      editContext.selectionStart,
      editContext.selectionEnd,
    );
  }

  // Enter キーを処理
  if (e.key === "Enter") {
    // EditContext.updateText() で現在の選択位置に
    // 改行文字を挿入
    editContext.updateText(start, end, "\n");

    // 挿入した改行文字の後ろに選択範囲を移動
    updateSelection(start + 1, start + 1);

    // エディターを再描画
    render(
      editContext.text,
      editContext.selectionStart,
      editContext.selectionEnd,
    );
  }
});
```

上記のコードは、テキスト内容の更新後に選択範囲を更新するため `updateSelection()` 関数も呼び出します。詳しくは、後述の[選択状態と選択範囲の境界の更新](#updating_the_selection_state_and_selection_bounds)を参照してください。

テキストのコピーと貼り付けに使う <kbd>Ctrl</kbd>+<kbd>C</kbd> や <kbd>Ctrl</kbd>+<kbd>V</kbd>、テキストの変更を元に戻したりやり直したりする <kbd>Ctrl</kbd>+<kbd>Z</kbd> や <kbd>Ctrl</kbd>+<kbd>Y</kbd> など、他のキーの組み合わせも処理すれば、コードを改善できます。

## 選択状態と選択範囲の境界の更新

前述のとおり、`render()` 関数は現在のユーザー選択をエディター要素に描画します。ただし、ユーザーが選択範囲を変更したときには、デモアプリ側で選択状態と境界情報も_更新_する必要があります。編集コンテキスト API はこれを自動では行いません。エディター UI が `<canvas>` 要素を使うなど、別の方法で実装される場合があるためです。

ユーザーが選択範囲を変更したことを検出するため、デモアプリは {{domxref("Document/selectionchange_event", "selectionchange")}} イベントと {{domxref("Document.getSelection()")}} メソッドを使います。これらは、ユーザーがどこを選択しているかを示す {{domxref("Selection")}} オブジェクトを提供します。この情報を使い、デモアプリは {{domxref("EditContext.updateSelection()")}} メソッドと {{domxref("EditContext.updateSelectionBounds()")}} メソッドで、EditContext の選択状態と選択範囲の境界情報を更新します。OS はこの情報を使って IME の変換ウィンドウを正しく配置します。

ただし、編集コンテキスト API は選択範囲を文字オフセットで表すため、デモアプリでは DOM の選択オブジェクトを文字オフセットに変換する `fromSelectionToOffsets()` 関数も使います。

```js
// selectionchange イベントを待ち受け、選択位置を
// EditContext に通知
document.addEventListener("selectionchange", () => {
  const selection = document.getSelection();

  // DOM の選択範囲を文字オフセットに変換
  const offsets = fromSelectionToOffsets(selection, editorEl);
  if (offsets) {
    updateSelection(offsets.start, offsets.end);
  }
});

// EditContext オブジェクトの選択状態と選択範囲の境界情報を更新
// OS による IME 変換ウィンドウの適切な配置を補助
function updateSelection(start, end) {
  editContext.updateSelection(start, end);
  // 選択範囲の境界を取得
  editContext.updateSelectionBounds(
    document.getSelection().getRangeAt(0).getBoundingClientRect(),
  );
}
```

`fromSelectionToOffsets()` 関数のコードは [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) ファイルで確認できます。

## 文字境界の計算

OS がユーザーのテキスト入力に使う UI の位置を調整できるよう、{{domxref("EditContext.updateControlBounds()")}} メソッドと {{domxref("EditContext.updateSelectionBounds()")}} メソッドを使うだけでなく、もう 1 つ必要な情報があります。それは、エディター要素内の特定の文字の位置とサイズです。

そのため、デモアプリは {{domxref("EditContext.characterboundsupdate_event", "characterboundsupdate")}} イベントを待ち受けて、エディター要素内の一部の文字の境界を計算し、{{domxref("EditContext.updateCharacterBounds()")}} メソッドで文字の境界情報を更新します。

前述のとおり、編集コンテキスト API が扱うのは文字オフセットだけです。そのため `characterboundsupdate` イベントは、境界情報が必要な文字の開始・終了オフセットを提供します。デモアプリでは `fromOffsetsToRenderedTokenNodes()` という別の関数を使って、これらの文字が描画された DOM 要素を特定し、その情報から必要な境界を計算します。

```js
// characterboundsupdate イベントを待ち受け、必要な文字境界情報と
// 対象の文字を確認
editContext.addEventListener("characterboundsupdate", (e) => {
  // 範囲内のトークンノード情報を取得
  const tokenNodes = fromOffsetsToRenderedTokenNodes(
    currentTokens,
    e.rangeStart,
    e.rangeEnd,
  );

  // この情報を DOMRect オブジェクトのリストに変換
  const charBounds = tokenNodes.map(({ node, nodeOffset, charOffset }) => {
    const range = document.createRange();
    range.setStart(node.firstChild, charOffset - nodeOffset);
    range.setEnd(node.firstChild, charOffset - nodeOffset + 1);
    return range.getBoundingClientRect();
  });

  // 文字境界情報を EditContext インスタンスに通知
  editContext.updateCharacterBounds(e.rangeStart, charBounds);
});
```

`fromOffsetsToRenderedTokenNodes()` 関数のコードは [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) ファイルで確認できます。

## IME 変換中のテキスト書式の適用

デモアプリで IME による文字変換に完全に対応するには、最後にもう 1 つ手順が必要です。ユーザーが IME で文字を変換しているとき、変換中であることを示すために、IME がテキストの一部に異なる書式を適用する場合があります。たとえば、テキストに下線を引くことがあります。

編集可能なテキスト領域の内容を描画するのはデモアプリの責任であるため、必要な IME 書式を適用することもデモアプリの責任です。デモアプリは {{domxref("EditContext.textformatupdate_event", "textformatupdate")}} イベントを待ち受け、IME がいつ、どこに、どの書式を適用しようとしているかを確認します。

次のコード例に示すように、デモアプリは `textformatupdate` イベントと `fromOffsetsToSelection()` 関数を再び使い、IME が書式を適用しようとしているテキスト範囲を特定します。

```js
editContext.addEventListener("textformatupdate", (e) => {
  // IME が適用する書式リストを取得
  const formats = e.getTextFormats();

  for (const format of formats) {
    // 書式範囲に対応する DOM 選択範囲を特定
    const selection = fromOffsetsToSelection(
      format.rangeStart,
      format.rangeEnd,
      editorEl,
    );

    // 選択範囲を適切なスタイルと太さで強調表示
    addHighlight(selection, format.underlineStyle, format.underlineThickness);
  }
});
```

上記のイベントハンドラーは `addHighlight()` 関数を呼び出してテキストを書式設定します。この関数は [CSS カスタムハイライト API](/ja/docs/Web/API/CSS_Custom_Highlight_API) を使ってテキスト書式を描画します。CSS カスタムハイライト API は、JavaScript で任意のテキスト範囲を作成し、CSS でスタイルを設定する仕組みを提供します。この API では、{{cssxref("::highlight", "::highlight()")}} 擬似要素を使ってハイライトのスタイルを定義します。

```css
::highlight(ime-solid-thin) {
  text-decoration: underline 1px;
}

::highlight(ime-solid-thick) {
  text-decoration: underline 2px;
}

::highlight(ime-dotted-thin) {
  text-decoration: underline dotted 1px;
}

::highlight(ime-dotted-thick) {
  text-decoration: underline dotted 2px;
}

/* 簡潔にするため、他のハイライトは省略しています。 */
```

さらに、{{domxref("Highlight")}} インスタンスを作成してオブジェクトに格納し、{{domxref("CSS/highlights_static", "CSS.highlights")}} プロパティを使って {{domxref("HighlightRegistry")}} に登録します。

```js
// IME 変換中のテキスト書式を描画する CSS カスタムハイライトオブジェクト
const imeHighlights = {
  "solid-thin": null,
  "solid-thick": null,
  "dotted-thin": null,
  "dotted-thick": null,
  "dashed-thin": null,
  "dashed-thick": null,
  "wavy-thin": null,
  "wavy-thick": null,
  "squiggle-thin": null,
  "squiggle-thick": null,
};
for (const [key, value] of Object.entries(imeHighlights)) {
  imeHighlights[key] = new Highlight();
  CSS.highlights.set(`ime-${key}`, imeHighlights[key]);
}
```

これで `addHighlight()` 関数は、スタイルを設定する範囲を {{domxref("Range")}} オブジェクトで表し、それらを `Highlight` オブジェクトに追加できるようになります。

```js
function addHighlight(selection, underlineStyle, underlineThickness) {
  // 下線のスタイルと太さに応じた CSS カスタムハイライトオブジェクトを取得
  const highlight =
    imeHighlights[
      `${underlineStyle.toLowerCase()}-${underlineThickness.toLowerCase()}`
    ];

  if (highlight) {
    // 範囲を Highlight オブジェクトに追加
    const range = document.createRange();
    range.setStart(selection.anchorNode, selection.anchorOffset);
    range.setEnd(selection.extentNode, selection.extentOffset);
    highlight.add(range);
  }
}
```

## まとめ

この記事では、編集コンテキスト API を使って、IME による文字変換と構文強調表示に対応するシンプルな HTML コードエディターを構築する方法を紹介しました。

最終的なコードとライブデモは GitHub で確認できます。[ライブデモ](https://mdn.github.io/dom-examples/edit-context/html-editor/)と[ソースコード](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor)を参照してください。

さらに重要なのは、編集コンテキスト API を使うと、エディターのユーザーインターフェイスを柔軟に構築できることです。このデモを基に、デモで使っている `<div>` の代わりに `<canvas>` 要素で構文強調表示された HTML コードを描画する、同様のテキストエディターを構築できます。また、各トークンや選択範囲の描画方法を変更することもできます。

## 関連情報

- [編集コンテキスト API](/ja/docs/Web/API/EditContext_API)
- [CSS カスタムハイライト API](/ja/docs/Web/API/CSS_Custom_Highlight_API)
