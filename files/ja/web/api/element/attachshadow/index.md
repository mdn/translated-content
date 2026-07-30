---
title: "Element: attachShadow() メソッド"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("Shadow DOM")}}

**`attachShadow()`** は {{domxref("Element")}} インターフェイスのメソッドで、シャドウ DOM ツリーを特定の要素に設定し、そのシャドウルート ({{domxref("ShadowRoot")}}) への参照を返します。

## 構文

```js-nolint
attachShadow(options)
```

### 引数

- `options`
  - : 以下のフィールドを含むオブジェクトです。
    - `mode`
      - : 文字列で、シャドウ DOM ツリーの*カプセル化モード*を指定します。
        以下のいずれかの値を取ります。
        - `open`
          - : シャドウルート内の要素には、JavaScript から {{domxref("Element.shadowRoot","shadowRoot")}} プロパティを介してアクセスすることができます。
        - `closed`
          - : シャドウルート内の要素には、JavaScript から {{domxref("Element.shadowRoot","shadowRoot")}} プロパティを介してアクセスすることはできません。このプロパティは `null` に設定されています。

    - `clonable` {{Optional_Inline}}
      - : 論理値で、シャドウルートが複製可能かどうかを指定します。`true` に設定すると、{{domxref("Node.cloneNode()")}} または {{domxref("Document.importNode()")}} を使用してシャドウホストを複製した際、コピーにシャドウルートが含まれます。デフォルト値は `false` です。

    - `customElementRegistry` {{Optional_Inline}}
      - : 接続されたシャドウルートの [スコープ付きカスタム要素レジストリー](/ja/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) として使用される {{DOMxRef("CustomElementRegistry")}} です。
        `null` または `undefined` の場合、シャドウルートは {{domxref("Window.customElements")}} で参照されるグローバルレジストリーを使用します。

    - `delegatesFocus` {{Optional_Inline}}
      - : 論理値で、 `true` に設定された場合、フォーカス可能性に関するカスタム要素の問題を緩和します。シャドウ DOM のフォーカスができない部分がクリックされた場合、最初のフォーカス可能な部分がフォーカスを得て、シャドウホストは `:focus` のスタイルを利用することができます。デフォルト値は `false` です。

    - `referenceTarget` {{Optional_Inline}} {{Experimental_Inline}}
      - : ホスト要素の外部からシャドウホストに対して行われる要素参照の有効なターゲットを示す文字列値。この値は、シャドウ DOM 内の要素の ID である必要があります。この値が設定されている場合、シャドウ DOM の外部からホスト要素への参照が行われると、参照先の対象要素が、そのホスト要素への参照の有効なターゲットとなります。

    - `serializable` {{Optional_Inline}}
      - : 論理値で、`true` に設定されると、シャドウルートがシリアライズ可能であることを示します。
        この設定が有効になっている場合、{{DOMxRef('Element.getHTML()')}} または {{DOMxRef('ShadowRoot.getHTML()')}} メソッドを、`options.serializableShadowRoots` 引数を `true` に設定して呼び出すことで、シャドウルートをシリアライズすることができます。
        デフォルト値は `false` です。

    - `slotAssignment` {{Optional_inline}}
      - : シャドウ DOM ツリーの _スロット割り当てモード_ を指定します。これは以下のどちらかです。
        - `named`
          - : 要素は自動的にこのシャドウルート内の {{HTMLElement("slot")}} 要素に割り当てられます。
            このシャドウルート内の `<slot>` の `name` 属性と一致する `slot` 属性を持つホスティングの子孫は、そのスロットに割り当てられます。
            ホスティングの最上位の子で `slot` 属性を持たないものは、 `name` 属性を持たない `<slot>`（「デフォルトのスロット」）が存在する場合、そのスロットに割り当てられます。
        - `manual`
          - : 要素は、{{domxref("HTMLSlotElement.assign()")}} を使用して、特定のスロット要素に手動で割り当てられます。
            自動的な割り当ては行われません。

### 返値

{{domxref("ShadowRoot")}} オブジェクトです。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 要素にシャドウルートを設定しようとすると、次のエラーが発生する場合があります。
    - HTML 名前空間の外にある要素、またはシャドウを設定することができない要素であった場合。
    - 要素定義の静的プロパティ `disabledFeatures` に `"shadow"` の値が指定された場合。
    - 宣言的に作成されていないシャドウルートをすでに持っている要素。
    - [宣言的なシャドウルート](/ja/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom)を持っているが、指定された `mode` が既存のモードと一致しない場合。
    - `null` またはローカルスコープのレジストリー（`new CustomElementRegistry()` を使用して作成したもの）以外の `customElementRegistry` 値を渡した場合。
      グローバルレジストリーを渡した場合、このエラーが発生します。

## 解説

**`Element.attachShadow()`** メソッドは、指定された要素にシャドウ DOM ツリーを添付し、その {{domxref("ShadowRoot")}} への参照を返します。

これは、`ShadowRoot` を生成するためのプログラム的な仕組みです。これは、ホスト要素に紐付けられた[シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) のルートノードです（{{htmlelement("template")}} 要素の [`shadowrootmode`](/ja/docs/Web/HTML/Reference/Elements/template#shadowrootmode) 属性を使用して、宣言的に `ShadowRoot` を生成することもできます）。
これは[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)を作成するために使用します。

## シャドウツリーを追加できる要素

シャドウルートはすべての要素に追加できるわけではありません。セキュリティ上の理由でシャドウ DOM を持てないものもあります（{{htmlelement("a")}} など）。

以下にシャドウルートを追加できる要素を列挙します。

- 任意の自律カスタム要素で[有効な名前](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)を持つもの
- {{htmlelement("article")}}
- {{htmlelement("aside")}}
- {{htmlelement("blockquote")}}
- {{htmlelement("body")}}
- {{htmlelement("div")}}
- {{htmlelement("footer")}}
- {{htmlelement("Heading_Elements", "h1")}}
- {{htmlelement("Heading_Elements", "h2")}}
- {{htmlelement("Heading_Elements", "h3")}}
- {{htmlelement("Heading_Elements", "h4")}}
- {{htmlelement("Heading_Elements", "h5")}}
- {{htmlelement("Heading_Elements", "h6")}}
- {{htmlelement("header")}}
- {{htmlelement("main")}}
- {{htmlelement("nav")}}
- {{htmlelement("p")}}
- {{htmlelement("section")}}
- {{htmlelement("span")}}

### すでにシャドウホストとなっている要素に対するこのメソッドの呼び出し

このメソッドは、指定されたモード `mode` が既存のモードと一致する場合に限り、すでに[宣言型シャドウルート](/ja/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom)を持つ要素に対して呼び出スことができます。
この場合、すでに存在していた {{domxref("ShadowRoot")}} はクリアされて返されます。
これにより、例えば、サーバーサイドレンダリングによってシャドウルートが宣言的に生成された後、クライアントサイドのコードがそのルートを再度設定しようとするようなケースに対応することができます。

そうでない場合、すでにシャドウルートを持つ要素に対して `attachShadow()` を呼び出すと、例外が発生します。

### open および closed のシャドウルート

シャドウルートには、`open` または `close` のいずれかで指定されるカプセル化[モード](#mode)を設定することができます。

`{mode: "open"}` 引数が渡された場合、ホスト要素の {{domxref("Element.shadowRoot","shadowRoot")}} プロパティを使用して、関連付けられたシャドウルートを取得することができます。
これにより、シャドウ DOM 内の要素にアクセスすることができます。

```js
element.attachShadow({ mode: "open" });
element.shadowRoot; // ShadowRoot オブジェクトを返す
```

`{mode: "closed"}` が渡された場合、その Element の {{domxref("Element.shadowRoot","shadowRoot")}} プロパティは `null` に設定されます。
なお、関数が返す値を保存しておけば、JavaScript から閉じられたシャドウルートにアクセスすることは可能です。

```js
element.attachShadow({ mode: "closed" });
element.shadowRoot; // null を返す
```

## 例

### 文字数カウントのカスタム要素

以下の例は [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) のデモを使用しています([実行例](https://mdn.github.io/web-components-examples/word-count-web-component/))。
コードの途中で `attachShadow()` を使ってシャドウルートを作成し、そこにカスタム要素の中身を設定しているのがわかると思います。

```js
// その要素用のクラスを作成
class WordCount extends HTMLParagraphElement {
  constructor() {
    // コンストラクターでは、常にまず super を呼び出す
    super();

    // 要素の親要素に含まれる単語数を数える
    const wcParent = this.parentNode;

    function countWords(node) {
      const text = node.innerText || node.textContent;
      return text
        .trim()
        .split(/\s+/g)
        .filter((a) => a.trim().length > 0).length;
    }

    const count = `Words: ${countWords(wcParent)}`;

    // シャドウルートを作成
    const shadow = this.attachShadow({ mode: "open" });

    // テキストノードを作成し、そこに単語数を追加
    const text = document.createElement("span");
    text.textContent = count;

    // シャドウルートに追加
    shadow.appendChild(text);

    // 要素のコンテンツが変更された際に更新回数をカウント
    this.parentNode.addEventListener("input", () => {
      text.textContent = `Words: ${countWords(wcParent)}`;
    });
  }
}

// 新しい要素を定義
customElements.define("word-count", WordCount, { extends: "p" });
```

### シャドウ DOM の無効化

要素に `disabledFeatures` という名前付きの静的プロパティがあり、その値が文字列 `"shadow"` を含む配列である場合、`attachShadow()` の呼び出しにより例外が発生します。

例を示します。

```js
class MyCustomElement extends HTMLElement {
  // この要素のシャドウ DOM を無効化
  static disabledFeatures = ["shadow"];

  constructor() {
    super();
  }

  connectedCallback() {
    // シャドウルートを作成
    // これは例外が発生する
    const shadow = this.attachShadow({ mode: "open" });
  }
}

// 新しい要素を定義
customElements.define("my-custom-element", MyCustomElement);
```

### 名前付きスロットの割り当て

この例では、名前付きスロットの割り当てについて説明しています。

#### ウェブコンポーネントの作成

このコードは、記事のタイトル、メタデータ、本文セクション用の 3 つの名前付きスロットを持つウェブ要素を作成します。

`ShadowRoot` は、カスタム要素のコンストラクター内で添付されます。
`slotAssignment: "named"` オプションはデフォルトで設定されているため、明示的に設定する必要はありません。

```js
class MyArticle extends HTMLElement {
  constructor() {
    super();
    // シャドウルートを設定
    this.attachShadow({ mode: "open" /* , slotAssignment: "named" */ });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // 内部構造とスタイルを定義
    this.shadowRoot.innerHTML = `
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
    `;
  }
}

// コンポーネントを登録
customElements.define("my-article", MyArticle);
```

#### ウェブコンポーネントの使用

下記 HTML では、先ほど作成した `<my-article>` ウェブコンポーネントを使用しています。
ネストされた要素は、名前の照合に基づいてコンポーネントのスロット内にレンダリングされます。
名前が指定されていない要素は、コンポーネントの無名スロット (body) 内にレンダリングされます。

```html-nolint
<my-article>
  <span slot="title">タイトル欄のテキスト</span>
  <span slot="meta">メタスロット用のテキスト</span>

  <p>
    スロット属性をつけていないテキスト 1。"body" div 内のデフォルト（名前のない）スロットに配置されます。
  </p>
  <p>
    スロット属性をつけていないテキスト 2。"body" div 内のデフォルト（名前のない）スロットにも同時に配置されます。
  </p>
</my-article>
```

#### 結果

下記例では、各セクションに表示されるスロットのコンテンツが示されています。

{{EmbedLiveSample('Named slot assignment','100', '220px')}}

### 無名スロットの代入

この例は、[手動によるスロットの割り当て](/ja/docs/Web/API/HTMLSlotElement/assign)を示しています。
この手法では、それぞれの要素を {{domxref("HTMLSlotElement.assign()")}} を使用して、具体的なスロットに手動で割り当てる必要があります。
デフォルトの割り当ては行われないため、割り当てられていないスロットは空になります。

#### HTML

まず、ブラウザーが `slotAssignment: "manual"` を対応していない場合に、JavaScript で表示させる非表示の対応に関する警告があります。

```html-nolint
<p id="support-warning" hidden>
  ⛔ このブラウザーは手動によるスロットの割り当てに対応していません（名前付き割り当てが使用されています）。
</p>
```

次に、タイトル、メタデータ、本体コンテンツの子要素を持つ独自の要素 `<my-article>` を定義します。
それぞれの子要素は `id` によって識別されます。名前付きスロットの割り当てとは異なり、`slot` 属性は必要ありません。

```html
<my-article>
  <span id="text_title">タイトル欄のテキスト</span>
  <span id="text_meta">メタスロット用のテキスト</span>
  <p id="text_body_1">body スロットのテキスト 1</p>
  <p id="text_body_2">body スロットのテキスト 1</p>
</my-article>
```

#### JavaScript

このカスタム要素は、`slotAssignment: "manual"` を指定してシャドウルートを設定します。
シャドウ DOM には、`id` で識別される名前のないスロットが含まれています。
`assignSlots()` メソッドは、軽量 DOM 要素をスロットに手動で代入します。
1 つのスロットに複数のノードを代入することができる点に注意してください。指定された順序がレンダリング順序を決定します。

```js
class MyArticle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open", slotAssignment: "manual" });
  }

  connectedCallback() {
    this.render();
    this.assignSlots();
  }

  render() {
    this.shadowRoot.innerHTML = `
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
    `;
  }

  assignSlots() {
    // 1. スロットをターゲットにする
    const titleSlot = this.shadowRoot.querySelector("#titleSlot");
    const metaSlot = this.shadowRoot.querySelector("#metaSlot");
    const bodySlot = this.shadowRoot.querySelector("#bodySlot");

    // 2. 軽量 DOM 要素をターゲットにする
    const titleText = this.querySelector("#text_title");
    const metaText = this.querySelector("#text_meta");
    const body1Text = this.querySelector("#text_body_1");
    const body2Text = this.querySelector("#text_body_2");

    // 3. 手動で割り当てる
    titleSlot.assign(titleText);
    metaSlot.assign(metaText);
    bodySlot.assign(body2Text, body1Text);
  }
}

customElements.define("my-article", MyArticle);
```

このコードは、{{domxref("ShadowRoot.slotAssignment")}} プロパティが定義されているかどうかを検査し、定義されていない場合は警告を表示させます。

```js
const isSlotAssignmentSupported = Object.hasOwn(
  ShadowRoot.prototype,
  "slotAssignment",
);

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isSlotAssignmentSupported);
```

#### 結果

下記の例では、各セクションにスロットのコンテンツが表示されているはずです。

{{EmbedLiveSample('Unnamed slot assignment','100', '220px')}}

> [!NOTE]
> 手動によるスロットの割り当てに対応していない場合、警告が表示され、ブラウザーは `named` 割り当てを使用します。
> ただし、軽量 DOM 要素にはいずれも `slot` 属性を持っていないため、それらはすべて最初の無名スロット（タイトルスロット）に挿入されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ShadowRoot.mode")}}
- {{domxref("ShadowRoot.delegatesFocus")}}
- {{domxref("ShadowRoot.slotAssignment")}}
- [`<template>` 要素](/ja/docs/Web/HTML/Reference/Elements/template) の [`shadowrootmode`](/ja/docs/Web/HTML/Reference/Elements/template#shadowrootmode) 属性による宣言的なシャドウルートの設定
- [Declarative shadow DOM](https://web.dev/articles/declarative-shadow-dom) - web.dev (2023)
