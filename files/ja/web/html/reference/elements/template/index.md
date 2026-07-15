---
title: HTML `<template>` コンテンツテンプレート要素
short-title: <template>
slug: Web/HTML/Reference/Elements/template
l10n:
  sourceCommit: 29e6ba9d844b835a1f00346ef1a78fa5d9e7c1a8
---

**`<template>`** は [HTML](/ja/docs/Web/HTML) の要素で、{{Glossary("HTML")}} のフラグメントを保持し、後で JavaScript を使用して使用したり、シャドウ DOM の中に直接生成したりするためのメカニズムとして機能します。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `shadowrootmode`
  - : 親要素の[シャドウルート](/ja/docs/Glossary/Shadow_tree)を生成します。
    これは {{domxref("Element.attachShadow()")}} メソッドの宣言版で、同じ{{glossary("enumerated", "列挙")}}値を受け入れます。
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

- `shadowrootcustomelementregistry`
  - : この要素を使用して作成された [`ShadowRoot`](/ja/docs/Web/API/ShadowRoot) の [`customElementRegistry`](/ja/docs/Web/API/ShadowRoot) プロパティを、文書の [カスタム要素レジストリー](/ja/docs/Web/API/Document/customElementRegistry) ではなく、`null` に設定します。
    これにより、スコープ化された {{domxref("CustomElementRegistry")}} を、後から {{domxref("CustomElementRegistry.initialize()")}} を使用して添付できます。

- `shadowrootdelegatesfocus`
  - : この要素を使用して作成した [`ShadowRoot`](/ja/docs/Web/API/ShadowRoot) の [`delegatesFocus`](/ja/docs/Web/API/ShadowRoot/delegatesFocus) プロパティの値を `true` に設定します。
    これが設定されていて、シャドウツリー内のフォーカス可能でない要素が選択されている場合、フォーカスはツリー内の最初のフォーカス可能な要素に譲られます。
    この値は `false` が既定値です。

- `shadowrootreferencetarget` {{Experimental_Inline}} {{non-standard_inline}}
  - : この要素を使用して生成された [`ShadowRoot`](/ja/docs/Web/API/ShadowRoot) の `referenceTarget` プロパティの値を設定します。値はシャドウ DOM 内の要素の ID である必要があります。設定すると、シャドウ DOM 外からホスト要素への参照が行われた場合、参照された対象要素がホスト要素への参照の有効なターゲットとなります。

- `shadowrootserializable`
  - : この要素を使用して作成した [`ShadowRoot`](/ja/docs/Web/API/ShadowRoot) の [`serializable`](/ja/docs/Web/API/ShadowRoot/serializable) プロパティの値を `true` に設定します。
    設定されている場合、シャドウルートは {{DOMxRef('Element.getHTML()')}} または {{DOMxRef('ShadowRoot.getHTML()')}} メソッドを、`options.serializableShadowRoots` 引数を `true` に設定して呼び出すことでシリアライズされます。
    この値は `false` が既定値です。

- `shadowrootslotassignment` {{experimental_inline}}
  - : この要素を使用して作成された [`ShadowRoot`](/ja/docs/Web/API/ShadowRoot) の [`slotAssignment`](/ja/docs/Web/API/ShadowRoot) プロパティを設定します。
    これは {{domxref("Element.attachShadow()")}} メソッドの [`slotAssignment`](/ja/docs/Web/API/Element/attachShadow#slotassignment) オプションの宣言的な同等物です。
    - `named`
      - : このシャドウルート内の {{HTMLElement("slot")}} 要素には、自動的に要素が割り当てられます。
        これがデフォルト値です。

        [`slot` 属性](/ja/docs/Web/API/Element/slot)を持つ要素は、テンプレート内で対応する `name` 属性を持つ最初の {{htmlelement("slot")}} に割り当てられます。
        複数の要素で同じスロット名が指定されている場合、それらはすべて、テンプレート内でその名前を持つ最初のスロットに追加され、宣言された順序でレンダリングされます。
        名前が指定されていない要素（`slot` 属性を指定していない要素）はすべて、宣言された順序でデフォルトのスロットに代入されます。
        これは、テンプレート内の最初の名前が指定されていない `<slot>` です。

    - `manual`
      - : 要素は特定の slot 要素に、{{domxref("HTMLSlotElement.assign()")}} を使用して手動で割り当てられます。
        自動的な割り当ては行われません。

## 使用上のメモ

この要素には、許可されているコンテンツはありません。中に含まれる HTML ソースは、実際には `<template>` 要素の子になるわけではないからです。 `<template>` 要素の {{domxref("Node.childNodes")}} プロパティは常に空であり、内側のコンテンツのように見えるものにアクセスするには、特殊な {{domxref("HTMLTemplateElement.content", "content")}} プロパティを使用します。{{domxref("Node.appendChild()")}} または同様のメソッドを `<template>` 要素に対して呼び出すと、その `<template>` 要素自身の子を挿入することになり、コンテンツモデル違反となる上、実際には `content` プロパティから返される {{domxref("DocumentFragment")}} が更新されません。

`<template>` 要素の構文解析の仕組み上、テンプレート内の `<html>`、`<head>`、`<body>` の開始タグおよび終了タグは、すべてパーサーから構文エラーとして無視されます。したがって、`<template><head><title>Test</title></head></template>` は `<template><title>Test</title></template>` と同等です。

`<template>` 要素の用途は主に 2 つあります。

### テンプレート文書フラグメント

既定では、要素のコンテンツはレンダリングされません。
対応する {{domxref("HTMLTemplateElement")}} インターフェイスは、標準で {{domxref("HTMLTemplateElement.content", "content")}} プロパティを含みます（同等の content/markup 属性はありません）。この `content` プロパティは読み取り専用で、テンプレートが表す DOM サブツリーを格納する {{domxref("DocumentFragment")}} を保持します。

{{domxref("Node.cloneNode()")}} メソッドと {{domxref("Document.importNode()")}} メソッドはどちらもノードのコピーを生成します。違いは、`importNode()` が呼び出し元の文書のコンテキストでノードを複製するのに対し、`cloneNode()` は複製対象のノードが属する文書を使用する点です。文書コンテキストは、カスタム要素を構築するための {{domxref("CustomElementRegistry")}} を決定します。このため、`content` フラグメントを複製する際は `document.importNode()` を使用し、カスタム要素の子孫がテンプレートコンテンツを所有する別文書ではなく、現在の文書内の定義を使用して構築されるようにします。詳細は {{domxref("Node.cloneNode()")}} ページの例を参照してください。

`DocumentFragment` コンテナーそのものにはデータを添付しないように注意してください。詳細は [DocumentFragment のデータはクローンされない](#documentfragment_のデータはクローンされない)の例を参照してください。

### 宣言的シャドウ DOM

もし `<template>` 要素が [`shadowrootmode`](#shadowrootmode) 属性の値 `open` または `closed` を格納すると、HTML パーサーは直ちにシャドウ DOM を生成します。その要素は {{domxref("ShadowRoot")}} でラップされたコンテンツによって DOM 内で置き換えられ、親要素に装着されます。
これは {{domxref("Element.attachShadow()")}} を呼び出して要素にシャドウルートを付けるのと宣言的に等価です。

要素が `shadowrootmode` に他の値を示す場合、または `shadowrootmode` 属性を持たない場合、パーサーは {{domxref("HTMLTemplateElement")}} を生成します。
同様に、宣言的シャドウルートが複数ある場合、最初のシャドウルートのみが {{domxref("ShadowRoot")}} で置き換えられ、それ以降は {{domxref("HTMLTemplateElement")}} オブジェクトとして解釈できます。

`shadowroot` という接頭辞の付いたその他の属性を使用すると、スロットの割り当て方法を制御するなど、`ShadowRoot` を宣言的にカスタマイズすることができます。

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
    <!-- 既存のデータは、必要に応じてここに含めることができます -->
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
// template 要素の content 属性の有無を確認することで、
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
  background: black;
}
table td {
  background: white;
}
```

{{EmbedLiveSample("Generating table rows", 500, 120)}}

### 宣言的シャドウ DOM の実装

この例では、マークアップの始めに非表示で対応する警告を記載しています。この警告は後でブラウザーの `shadowrootmode` 属性に対応していない場合に JavaScript で表示するように設定します。次の記事には 2 つの {{HTMLElement("article")}} 要素があり、それぞれ異なる振る舞いをする {{HTMLElement("style")}} 要素を含んでいます。最初の `<style>` 要素は文書全体に対してグローバルです。2 つ目は `shadowrootmode` 属性が存在するため、`<template>` 要素の代わりに生成されたシャドウルートにスコープされます。

```html
<p hidden>
  ⛔ このブラウザーはまだ <code>shadowrootmode</code> 属性に対応していません。
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
const isShadowRootModeSupported = Object.hasOwn(
  HTMLTemplateElement.prototype,
  "shadowRootMode",
);

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isShadowRootModeSupported);
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/scoping.html", "", "120")}}

### フォーカスを譲渡を伴う宣言的シャドウ DOM

この例では、`shadowrootdelegatesfocus` を宣言的に作成したシャドウルートに適用し、フォーカスにどのような効果があるかを示します。

このコードでは、最初に `<template>` 要素に `shadowrootmode` 属性を用いて、`<div>` 要素の中にシャドウルートを宣言します。
これにより、テキストを格納したフォーカスできない `<div>` と、フォーカスできる `<input>` 要素の両方が表示されます。
また、{{cssxref(":focus")}} を持つ要素を青にスタイル設定し、ホスト要素の通常のスタイル設定を設定するには CSS を使用します。

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
    <div>クリック可能なシャドウ DOM テキスト</div>
    <input type="text" placeholder="シャドウ DOM 内の入力" />
  </template>
</div>
```

2 つ目のコードブロックは、`shadowrootdelegatesfocus` 属性を設定している以外は同じです。この属性は、ツリー内のフォーカス可能でない要素が選択された場合に、ツリー内の最初のフォーカス可能な要素にフォーカスを譲るものです。

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
    <div>クリック可能なシャドウ DOM テキスト</div>
    <input type="text" placeholder="シャドウ DOM 内の入力" />
  </template>
</div>
```

最後に、以下の CSS を使用して、親要素である `<div>` にフォーカスがあるときに赤の枠線を適用します。

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

### 名前付きスロット割り当てを行う宣言的なシャドウ DOM

この例では、要素の [`slot` 属性](/ja/docs/Web/API/Element/slot)に基づいて（スロットの `name` 属性と照合することで）、シャドウ DOM 内のスロットに要素を代入する方法を示しています。

#### HTML

まず、タイトル、メタデータ、および記事本文の情報を表示する {{HTMLElement("article")}} 要素を定義します。

この記事には `<template>` 要素が含まれており、`shadowrootmode` 属性が設定されているため、シャドウルートとなります。
名前付きスロットの割り当てがデフォルトであるため、`shadowrootslotassignment` 属性を設定する必要はありません。

このテンプレートでは、"header" および "meta" 情報用の名前付きスロットと、"body" 情報用の名前なしスロットを持つ要素を定義しています。
各要素には異なるスタイル設定が適用されており、区別しやすくなっています。

```html-nolint
<article id="host">
  <template shadowrootmode="open" shadowrootslotassignment="named">
    <style>
      .header {
        background-color: plum;
      }
      .meta {
        background-color: green;
      }
      .body {
        background-color: lightblue;
      }
    </style>

    <h2 class="header">
      <slot name="title"></slot>
    </h2>

    <div class="meta">
      <slot name="meta"></slot>
    </div>

    <div class="body">
      <slot></slot>
    </div>
  </template>

  <p>
    スロット属性をつけていないテキスト 1 です。"body" の div 内のデフォルト（名前なし）のスロットに配置されます。
  </p>
  <span slot="title">title スロットのテキスト</span>
  <span slot="meta">meta スロットのテキスト</span>
  <p>
    スロット属性をつけていないテキスト 2 です。同時に、"body" の div 内のデフォルト（名前なし）のスロットにも配置されます。
  </p>
</article>
```

同じホスト内の、テンプレートの下に、スロットにデータを設定するための 4 つの要素が指定されています。
{{htmlelement("span")}} 要素には、テンプレート内のスロットの `name` 属性と一致する `slot` 属性があり、対応するスロットにデータが設定されます。
2つの{{htmlelement("p")}}要素には名前が指定されていないため、どちらも "body" 要素内の名前が指定されていない `<slot>` に挿入されます。

#### 結果

下の例では、各セクションにスロットのコンテンツが表示されているはずです。

{{EmbedLiveSample('Declarative shadow DOM with named slot assignment','100', '220px')}}

### 手動でスロットを代入する宣言型シャドウ DOM

この例では、手動によるスロット割り当てを使用して、シャドウ DOM 内のスロットに要素を割り当てる手法について説明します。

この手法では、それぞれの要素を具体的なスロットに手動で割り当てる必要があります。
デフォルトの割り当てはないため、割り当てられていないスロットは空になります。

#### HTML

まず、非表示の対応に関する警告があります。
この警告は、ブラウザーが `shadowrootslotassignment` 属性を対応していない場合、後で JavaScript で表示させるように設定されています。

```html-nolint
<p id="support-warning" hidden>
  ⛔ このブラウザーは、まだ <code>shadowrootslotassignment</code> 属性に対応していません。
</p>
```

次に、タイトル、メタデータ、および記事本文の情報を表示する {{HTMLElement("article")}} 要素を定義します。
これには `<template>` 要素が含まれており、`shadowrootmode` 属性が設定されているためシャドウルートとなり、`shadowrootslotassignment="manual"` が設定されているため、スロットの手動割り当てが使用されます。

このテンプレートでは、"header"、"meta"、"body" 情報のスロットを持つ要素が定義されており、それぞれの `id` 属性によって別個に参照することができます。
各要素には異なるスタイル設定が適用されているため、区別が容易です。

```html
<article id="host">
  <template shadowrootmode="open" shadowrootslotassignment="manual">
    <style>
      .header {
        background-color: plum;
      }
      .meta {
        background-color: green;
      }
      .body {
        background-color: lightblue;
      }
    </style>

    <h2 class="header">
      <slot id="titleSlot"></slot>
    </h2>

    <div class="meta">
      <slot id="metaSlot"></slot>
    </div>

    <div class="body">
      <slot id="bodySlot"></slot>
    </div>
  </template>

  <span id="text_title">title スロットのテキスト</span>
  <span id="text_meta">meta スロットのテキスト</span>
  <p id="text_body_1">body スロットのテキスト 1 です。</p>
  <p id="text_body_2">body スロットのテキスト 2 です。</p>
</article>
```

同じホスト内のテンプレートの下記には、スロットにデータを入力するための 4 つの要素が指定されています。
これらも ID で識別されます。

#### JavaScript

手動でのスロット割り当てを行う JavaScript は、下記に示す通りです。
まず、コードはシャドウルート内のスロットを取得し、次に挿入するテキストを取得し、最後にそのテキストをスロットに割り当てます。
なお、特定のスロットにはノードを 1 回しか割り当てることができません。また、{{domxref("HTMLSlotElement.assign()")}} を使用して単一のスロットに複数のノードを割り当てる場合、指定された順序が追加される順序を決定します。

```js
const host = document.querySelector("#host");
const shadow = host.shadowRoot;

// 1. スロットを対象とする
const titleSlot = shadow.querySelector("#titleSlot");
const metaSlot = shadow.querySelector("#metaSlot");
const bodySlot = shadow.querySelector("#bodySlot");

// 2. スロットに入れる要素を対象とする
const body1Text = document.querySelector("#text_body_1");
const body2Text = document.querySelector("#text_body_2");
const titleText = document.querySelector("#text_title");
const metaText = document.querySelector("#text_meta");

// 3. 手動で割り当てる
titleSlot.assign(titleText);
metaSlot.assign(metaText);
bodySlot.assign(body2Text, body1Text);
```

スロットの割り当てに対応していない場合、このコードは非表示の対応警告を表示させます。

```js
const isShadowRootSlotAssignmentSupported = Object.hasOwn(
  HTMLTemplateElement.prototype,
  "shadowRootSlotAssignment",
);

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isShadowRootSlotAssignmentSupported);
```

#### 結果

下の例では、各セクションにスロットのコンテンツが表示されているはずです。

{{EmbedLiveSample('Declarative shadow DOM with manual slot assignment','100', '220px')}}

> [!NOTE]
> `shadowrootslotassignment` 属性が対応していない場合、警告メッセージが表示され、ブラウザーは `named` の割り当てを使用します。
> ただし、挿入されるスロットや要素のいずれも名前が付けられていないため、すべての要素がタイトルスロットに挿入されます（これは、これが最初の無名のスロットであり、したがって「デフォルト」のスロットとなるためです）。

### DocumentFragment のデータはクローンされない

{{domxref("DocumentFragment")}} の値が渡されると、{{domxref("Node.appendChild")}} や同様のメソッドはその値の子ノードだけを対象とするノードに移動させます。したがって、イベントハンドラーは `DocumentFragment` 自体ではなく、`DocumentFragment` の子ノードに設定することが推奨されます。

以下の HTML および JavaScript を考えてみてください。

#### HTML

```html
<div id="container"></div>

<template id="template">
  <div>クリックしてください</div>
</template>
```

#### JavaScript

```js
const container = document.getElementById("container");
const template = document.getElementById("template");

function clickHandler(event) {
  event.target.append(" — この div がクリックされました");
}

const firstClone = document.importNode(template.content, true);
firstClone.addEventListener("click", clickHandler);
container.appendChild(firstClone);

const secondClone = document.importNode(template.content, true);
secondClone.children[0].addEventListener("click", clickHandler);
container.appendChild(secondClone);
```

#### 結果

`firstClone` は `DocumentFragment` なので、`appendChild` が呼び出されたときに `container` に追加されるのはその子ノードだけで、`firstClone` のイベントハンドラーはコピーされません。一方、`secondClone` は最初の子ノードにイベントハンドラーが追加されているため、`appendChild` が呼び出されるとイベントハンドラーがコピーされ、クリックすると期待通りに動作します。

{{EmbedLiveSample(' Data on the DocumentFragment is not cloned')}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#メタデータコンテンツ"
          >メタデータコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#スクリプト対応要素"
          >スクリプト対応要素</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>なし（<a href="#使用上のメモ">使用上のメモ</a>を参照）</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#メタデータコンテンツ"
          >メタデータコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#スクリプト対応要素"
          >スクリプト対応要素</a
        > を受け付けるすべての要素。
        また、<a href="/ja/docs/Web/HTML/Reference/Elements/colgroup#span"><code>span</code></a> 属性を持たない {{HTMLElement("colgroup")}} 要素の子になることもできます。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">対応するロールなし</a>
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

- [`part`](/ja/docs/Web/HTML/Reference/Global_attributes/part) および [`exportparts`](/ja/docs/Web/HTML/Reference/Global_attributes/exportparts) 属性
- {{HTMLElement("slot")}} 要素
- {{CSSXref(":host")}}、{{cssxref(":host()")}}、{{cssxref(":host-context()")}} 擬似クラス
- {{CSSXref("::part")}}、{{CSSXref("::slotted")}} 擬似要素
- [`ShadowRoot`](/ja/docs/Web/API/ShadowRoot) インターフェイス
- [テンプレートとスロットの使用](/ja/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS スコープ化](/ja/docs/Web/CSS/Guides/Scoping)モジュール
- [宣言的シャドウ DOM （HTML による）](/ja/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) （シャドウ DOM の使用）
- [Declarative shadow DOM](https://web.dev/articles/declarative-shadow-dom) (web.dev, 2023)
