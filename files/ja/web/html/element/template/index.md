---
title: "<template>: コンテンツテンプレート要素"
slug: Web/HTML/Element/template
l10n:
  sourceCommit: 5618052b7314a29552ff9e4331dd3da13dc19f5e
---

{{HTMLSidebar}}

**`<template>`** は [HTML](/ja/docs/Web/HTML) の要素で、{{Glossary("HTML")}} フラグメントを保持し、後で JavaScript を使用して使用したり、シャドウ DOM の中に即座に生成したりするためのメカニズムとして機能します。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `shadowrootmode`

  - : 親要素の[シャドウルート](/ja/docs/Glossary/Shadow_tree)を生成します。
    これは {{domxref("Element.attachShadow()")}} メソッドの宣言版で、同じ {{glossary("enumerated")}} 値を受け入れます。

    - `open`

      - : 内部シャドウルート DOM を JavaScript に公開します（ほとんどの用途で推奨）。

    - `closed`

      - : 内部シャドウルート DOM を JavaScript から隠します。

    > [!NOTE]
    > HTML パーサーは、この属性が設定されているノードの最初の `<template>` に対して、DOM に {{domxref("ShadowRoot")}} オブジェクトを作成します。
    > この属性が設定されていない場合、または許可された値が設定されていない場合、あるいは `ShadowRoot` が既に同じ親に宣言的に作成されている場合は、{{domxref("HTMLTemplateElement")}} が作成されます。
    > {{domxref("HTMLTemplateElement")}} は、{{domxref("HTMLTemplateElement.shadowRootMode")}} を設定したりすることで、解釈後にシャドウルートに変更することはできません。

    > [!NOTE]
    > 古いチュートリアルや例では、Chrome 90-110 で対応していた非標準の `shadowroot` 属性が見つかるかもしれません。この属性は削除され、標準の `shadowrootmode` 属性に置き換えられています。

- `shadowrootclonable`

  - : この要素を使用して作成した [`ShadowRoot`](/ja/docs/Web/API/ShadowRoot) の [`clonable`](/ja/docs/Web/API/ShadowRoot/clonable) プロパティの値を `true` に設定します。
    設定されている場合、シャドウホスト（この `<template>` の親要素）の複製を {{domxref("Node.cloneNode()")}} または {{domxref("Document.importNode()")}} で作成すると、コピーにシャドウルートが含まれます。

- `shadowrootdelegatesfocus`

  - : この要素を使用して作成した [`ShadowRoot`](/ja/docs/Web/API/ShadowRoot) の [`delegatesFocus`](/ja/docs/Web/API/ShadowRoot/delegatesFocus) プロパティの値を `true` に設定します。
    これが設定されていて、シャドウツリー内のフォーカス可能でない要素が選択されている場合、フォーカスはツリー内の最初のフォーカス可能な要素に譲られます。
    この値は `false` が既定値です。

- `shadowrootserializable` {{experimental_inline}}

  - : この要素を使用して作成した [`ShadowRoot`](/ja/docs/Web/API/ShadowRoot) の [`serializable`](/ja/docs/Web/API/ShadowRoot/serializable) プロパティの値を `true` に設定します。
    設定されている場合、シャドウルートは {{DOMxRef('Element.getHTML()')}} または {{DOMxRef('ShadowRoot.getHTML()')}} メソッドを、`options.serializableShadowRoots` 引数を `true` に設定して呼び出すことでシリアライズされます。
    この値は `false` が既定値です。

## 使用上のメモ

`<template>` 要素の主な用途は 2 つあります。

### テンプレート文書フラグメント

既定では、要素のコンテンツはレンダリングされません。
対応する {{domxref("HTMLTemplateElement")}} インターフェイスは標準で {{domxref("HTMLTemplateElement.content", "content")}} プロパティを含みます（同等の content/markup 属性はありません）。この `content` プロパティは読み取り専用で、テンプレートが表す DOM サブツリーを格納する {{domxref("DocumentFragment")}} を保持します。
このフラグメントは {{domxref("Node.cloneNode", "cloneNode")}} メソッドで複製し、DOM に挿入することができます。

`content` プロパティを使用するときは、返値の `DocumentFragment` が予期せぬ挙動を示すことがあることに注意が必要です。
詳細は下記の [DocumentFragment の落とし穴を避ける](#documentfragment_の落とし穴を避ける)節を参照してください。

### 宣言的シャドウ DOM

もし `<template>` 要素が [`shadowrootmode`](#shadowrootmode) 属性の値 `open` または `closed` を格納すると、HTML パーサーは直ちにシャドウ DOM を生成します。その要素は {{domxref("ShadowRoot")}} でラップされたコンテンツによって DOM 内で置き換えられ、親要素に装着されます。
これは {{domxref("Element.attachShadow()")}} を呼び出して要素にシャドウルートを付けるのと宣言的に等価です。

要素が `shadowrootmode` に他の値を示す場合、または `shadowrootmode` 属性を持たない場合、パーサは {{domxref("HTMLTemplateElement")}} を生成します。
同様に、宣言的シャドウルートが複数ある場合、最初のシャドウルートのみが {{domxref("ShadowRoot")}} で置き換えられ、それ以降は {{domxref("HTMLTemplateElement")}} オブジェクトとして解釈できます。

## 例

### 表の行を生成

まず、HTML 部分の例から始めましょう。

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- existing data could optionally be included here -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

まず、JavaScript コードを使用して後からコンテンツを挿入するための表を作ります。次に、1 行分を表す HTML 断片の構造が書かれたテンプレートが続きます。

表が生成され、テンプレートが定義されました。 JavaScript を使って、テンプレートを基に構築される各行を表に挿入します。

```js
// templete 要素の content 属性の有無を確認することで、
// ブラウザーが HTML の template 要素に対応しているかテストします。
if ("content" in document.createElement("template")) {
  // 既存の HTML tbody と template の行を使って
  // table をインスタンス生成します。
  const tbody = document.querySelector("tbody");
  const template = document.querySelector("#productrow");

  // 新しい行を複製して表に挿入します。
  const clone = template.content.cloneNode(true);
  let td = clone.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  tbody.appendChild(clone);

  // 新しい行を複製して表に挿入します。
  const clone2 = template.content.cloneNode(true);
  td = clone2.querySelectorAll("td");
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans 2";

  tbody.appendChild(clone2);
} else {
  // HTML の template 要素に対応していないので
  // 表に行を追加するほかの方法を探します。
}
```

結果として、 JavaScript を通して、新しい行が追加された HTML の表ができます。

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

{{EmbedLiveSample("Generating table rows", 500, 120)}}

### 宣言的シャドウ DOM の実装

この例では、マークアップの始めに非表示で対応する警告を記載しています。この警告は後でブラウザーの `shadowrootmode` 属性に対応していない場合に JavaScript で表示するように設定します。次の記事には 2 つの {{HTMLElement("article")}} 要素があり、それぞれ異なる振る舞いをする {{HTMLElement("style")}} 要素を含んでいます。最初の `<style>` 要素は文書全体に対してグローバルです。2 つ目は `shadowrootmode` 属性が存在するため、`<template>` 要素の代わりに生成されたシャドウルートにスコープされます。

```html
<p hidden>
  ⛔ Your browser doesn't support <code>shadowrootmode</code> attribute yet.
</p>
<article>
  <style>
    p {
      padding: 8px;
      background-color: wheat;
    }
  </style>
  <p>I'm in the DOM.</p>
</article>
<article>
  <template shadowrootmode="open">
    <style>
      p {
        padding: 8px;
        background-color: plum;
      }
    </style>
    <p>I'm in the shadow DOM.</p>
  </template>
</article>
```

```js
const isShadowRootModeSupported =
  HTMLTemplateElement.prototype.hasOwnProperty("shadowRootMode");

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isShadowRootModeSupported);
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/scoping.html", "", "120")}}

### フォーカスを譲渡を伴う宣言的シャドウ DOM

この例では、`shadowrootdelegatesfocus` を宣言的に作成したシャドウルートに適用し、フォーカスにどのような効果があるかを示します。

このコードでは、最初に `<template>` 要素に `shadowrootmode` 属性を用いて、`<div>` 要素の中にシャドウルートを宣言します。
これにより、テキストを格納したフォーカスできない `<div>` と、フォーカスできる `<input>` 要素の両方が表示されます。
また、[`:focus`](/ja/docs/Web/CSS/:focus) を持つ要素を青にスタイル設定し、ホスト要素の通常のスタイル設定を設定するには CSS を使用します。

```html
<div>
  <template shadowrootmode="open">
    <style>
      :host {
        display: block;
        border: 1px dotted black;
        padding: 10px;
        margin: 10px;
      }
      :focus {
        outline: 2px solid blue;
      }
    </style>
    <div>Clickable Shadow DOM text</div>
    <input type="text" placeholder="Input inside Shadow DOM" />
  </template>
</div>
```

2 つ目のコードブロックは、`shadowrootdelegatesfocus` 属性を設定している以外は同じです。この属性は、ツリー内のフォーカス可能でない要素が選択された場合に、ツリー内の最初のフォーカス可能な要素にフォーカスを譲ったものです。

```html
<div>
  <template shadowrootmode="open" shadowrootdelegatesfocus>
    <style>
      :host {
        display: block;
        border: 1px dotted black;
        padding: 10px;
        margin: 10px;
      }
      :focus {
        outline: 2px solid blue;
      }
    </style>
    <div>Clickable Shadow DOM text</div>
    <input type="text" placeholder="Input inside Shadow DOM" />
  </template>
</div>
```

最後に、以下の CSS を使用して、親要素である `<div>` にフォーカスがあるときに緑黄色の枠線を適用します。

```css
div:focus {
  border: 2px solid red;
}
```

その結果を下記に示します。
HTML は最初にレンダリングされるとき、最初の画像に示すように要素にはスタイル設定がありません。
`shadowrootdelegatesfocus` が設定されていないシャドウルートでは、`<input>` 以外の場所をクリックしてもフォーカスは変わりません（`<input>` 要素を選択すると 2 つ目の画像のようになります）。

![フォーカスが設定されていないコードの画面ショット](template_with_no_focus.png)

`shadowrootdelegatesfocus` を設定したシャドウルートでは、テキスト（フォーカスできない）をクリックすると、`<input>` 要素が選択されます。
これは下記に示すように親要素もフォーカスされます。

![要素にフォーカスがあるコードの画面ショット](template_with_focus.png)

## DocumentFragment の落とし穴の回避

{{domxref("DocumentFragment")}} の値が渡されると、{{domxref("Node.appendChild")}} や同様のメソッドはその値の子ノードだけを対象とするノードに移動させます。したがって、イベントハンドラーは `DocumentFragment` 自体ではなく、`DocumentFragment` の子ノードに設定することが推奨されます。

以下の HTML および JavaScript を考えてみてください。

### HTML

```html
<div id="container"></div>

<template id="template">
  <div>クリックしてください</div>
</template>
```

### JavaScript

```js
const container = document.getElementById("container");
const template = document.getElementById("template");

function clickHandler(event) {
  event.target.append(" — この div がクリックされました");
}

const firstClone = template.content.cloneNode(true);
firstClone.addEventListener("click", clickHandler);
container.appendChild(firstClone);

const secondClone = template.content.cloneNode(true);
secondClone.children[0].addEventListener("click", clickHandler);
container.appendChild(secondClone);
```

### 結果

`firstClone` は `DocumentFragment` なので、`appendChild` が呼び出されたときに `container` に追加されるのはその子ノードだけで、`firstClone` のイベントハンドラーはコピーされません。一方、`secondClone` は最初の子ノードにイベントハンドラーが追加されているため、`appendChild` が呼び出されるとイベントハンドラーがコピーされ、クリックすると期待通りに動作します。

{{EmbedLiveSample('Avoiding_DocumentFragment_pitfall')}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#メタデータコンテンツ">メタデータコンテンツ</a>,
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>,
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ">記述コンテンツ</a>,
        <a href="/ja/docs/Web/HTML/Content_categories#スクリプト対応要素">スクリプト対応要素</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>制限なし</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#メタデータコンテンツ">メタデータコンテンツ</a>,
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ">記述コンテンツ</a>,
        <a href="/ja/docs/Web/HTML/Content_categories#スクリプト対応要素">スクリプト対応要素</a>
        を受け付けるすべての要素。また、 <a href="/ja/docs/Web/HTML/Element/colgroup#span"><code>span</code></a> 属性を持たない {{HTMLElement("colgroup")}} 要素の子になることもできます。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLTemplateElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`part`](/ja/docs/Web/HTML/Global_attributes#part) および [`exportparts`](/ja/docs/Web/HTML/Global_attributes#exportparts) 属性
- {{HTMLElement("slot")}} 要素
- {{CSSXref(":host")}}、{{CSSXref(":host_function", ":host()")}}、{{CSSXref(":host-context", ":host-context()")}} 擬似クラス
- {{CSSXref("::part")}}、{{CSSXref("::slotted")}} 擬似要素
- [`ShadowRoot`](/ja/docs/Web/API/ShadowRoot) インターフェイス
- [テンプレートとスロットの使用](/ja/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS スコープ化](/ja/docs/Web/CSS/CSS_scoping) モジュール
- [宣言的シャドウ DOM （HTML による）](/ja/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) （シャドウ DOM の使用）
- [Declarative shadow DOM](https://web.dev/articles/declarative-shadow-dom) (developer.chrome.com, 2023)
