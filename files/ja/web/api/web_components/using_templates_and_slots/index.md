---
title: テンプレートとスロットの使用
slug: Web/API/Web_components/Using_templates_and_slots
---

{{DefaultAPISidebar("Web Components")}}

この記事では、{{htmlelement("template")}} と {{htmlelement("slot")}} 要素を使用して柔軟なテンプレートを作成し、それをウェブコンポーネントのシャドウ DOM を表示するために使用する方法について説明します。

## テンプレートの真実

ウェブページで同じマークアップ構造を繰り返し再利用する必要がある場合、同じ構造を何度も繰り返すよりも、何らかのテンプレートを使用する方が理にかなっています。
これは以前から可能でしたが、HTML の {{htmlelement("template")}} 要素によって、かなり容易になりました（最近のブラウザーはよく対応しています）。
この要素とその内容は DOM 内で描画されませんが、JavaScript を使って参照することは可能です。

簡単な例を見てみましょう。

```html
<template id="my-paragraph">
  <p>My paragraph</p>
</template>
```

これはページ上に表示されず、以下のようなコードで JavaScript で参照を取得し、 DOM に追加することで表示されます。

```js
let template = document.getElementById('my-paragraph');
let templateContent = template.content;
document.body.appendChild(templateContent);
```

つまらない例ですが、すでに有用性は見えてきたでしょう。

## ウェブコンポーネントを用いたテンプレートの使用

テンプレートはそれ自体でも便利ですが、ウェブコンポーネントと組み合わせるとさらに効果的です。
テンプレートをシャドウ DOM の内容として使用するウェブコンポーネントを定義してみましょう。
同様に `<my-paragraph>` と呼ぶことにします。

```js
customElements.define('my-paragraph',
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('my-paragraph');
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
    }
  }
);
```

ここで、テンプレートの内容を使用するために {{domxref("Node.cloneNode()")}} メソッドを使用して複製したものをシャドウルートに追加していることに注意してください。

また、その内容をシャドウ DOM に追加しているため、テンプレート内のスタイル情報を {{htmlelement("style")}} 要素に含めることができ、それがカスタム要素内にカプセル化されます。
これは、単に標準 DOM に追加しただけでは機能しません。

したがって、例えば

```html
<template id="my-paragraph">
  <style>
    p {
      color: white;
      background-color: #666;
      padding: 5px;
    }
  </style>
  <p>My paragraph</p>
</template>
```

HTML 文書に次のように追加するだけで利用できるようになりました。

```html
<my-paragraph></my-paragraph>
```

> **メモ:** テンプレートはブラウザーの対応が進んでいます。 Shadow DOM API は既定で、 Firefox (バージョン 63 以降) 、Chrome、Opera、Safari、Edge (バージョン 79 以降) で対応しています。

## スロットによる柔軟性の強化

ここまではいいのですが、この要素はあまり柔軟ではありません。
中には高々 1 つのテキストを表示できるだけなので、現時点では通常の段落よりも有用ではありません。 {{htmlelement("slot")}} 要素を使用することで、各要素インスタンスに異なるテキストを表示することを宣言的に行えるようにすることができます。
これは {{htmlelement("template")}} よりも対応が限定されており、Chrome 53, Opera 40, Safari 10, Firefox 59, Edge 79 から利用可能です。

スロットは `name` 属性で識別され、テンプレート内にプレイスホルダーを定義することができます。このプレースホルダーは、その要素がマークアップで使用されたときに、任意のマークアップフラグメントで埋められるようになります。

ですから、この些細な例にスロットを追加したい場合、テンプレートの段落要素を次のように更新してください。

```html
<p><slot name="my-text">既定のテキスト</slot></p>
```

マークアップに要素が含まれるときにスロットの内容が定義されていない場合、またはブラウザーがスロットに対応していない場合、 `<my-paragraph>` はに単に代替内容である「既定のテキスト」が入ります。

スロットの内容を定義するために、`<my-paragraph>` 要素の中に HTML 構造を入れ、 [`slot`](/ja/docs/Web/HTML/Global_attributes#slot) 属性の値が埋めたいスロットの名前と同じになるようにします。前と同じように、これは好きなものを指定できます。

```html
<my-paragraph>
  <span slot="my-text">別なテキストを入れましょう。</span>
</my-paragraph>
```

以下のようにも設定できます。

```html
<my-paragraph>
  <ul slot="my-text">
    <li>別なテキストを入れましょう。</li>
    <li>リストの中です。</li>
  </ul>
</my-paragraph>
```

> **メモ:** スロットに挿入できるのは _Slotable_ な要素に限られます; 要素がスロットに挿入されたとき、_slotted_ と呼ばれます。

> **メモ:** 無名の {{HTMLElement("slot")}} には、カスタム要素のトップレベルの子ノードのうち [`slot`](/ja/docs/Web/HTML/Global_attributes#slot) 属性を持たないすべてのノードが入ります。これにはテキストノードも含まれます。

簡単な例での説明は以上です。
もっと実行してみたい場合は、 [GitHub 上にあります](https://github.com/mdn/web-components-examples/tree/master/simple-template) ([ライブ実行版](https://mdn.github.io/web-components-examples/simple-template/)もあります)。

<h2 id="A_more_involved_example">より踏み込んだ例</h2>

記事の最後に、もう少し本格的なものを見てみましょう。

以下の一連のコードは、 {{HTMLElement("slot")}} を {{HTMLElement("template")}} と若干の JavaScript と組み合わせて使用する方法を示すコードスニペットです。

- **`<element-details>`** 要素を[名前付きスロット](/ja/docs/Web/HTML/Element/slot#named-slot)付きで[シャドウルート](/ja/docs/Web/API/ShadowRoot)の中に作成する
- **`<element-details>`** 要素を、文書内で使用されたとき、要素の内容とその[シャドウルート](/ja/docs/Web/API/ShadowRoot)の内容を組み合わせてレンダリングされるように設計します。つまり、要素の内容の断片は、その[シャドウルート](/ja/docs/Web/HTML/Element/slot#named-slot) の中で[名前付きスロット](/ja/docs/Web/API/ShadowRoot)を埋めるために使用されます。

なお、 {{HTMLElement("slot")}} 要素は技術的には、 {{HTMLElement("template")}} 要素なしで、例えば、通常の {{HTMLElement("div")}} 要素内で使うことも可能であり、それでもシャドウ DOM 内容に対して {{HTMLElement("slot")}} のプレースホルダー機能を活用することができますし、そうすれば、最初にテンプレート要素の `content` プロパティにアクセス（してそれを複製）する必要があるという小さなトラブルも実際に避けることができます。
しかし、一般的には {{HTMLElement("template")}} 要素内にスロットを追加する方がより実用的です。なぜなら、既にレンダリングされた要素に基づいてパターンを定義する必要があることはほとんどないからです。

また、まだレンダリングされていない場合でも、 {{HTMLElement("template")}} を使用することで、テンプレートとしてのコンテナーの目的がより意味的に明確になるはずです。また、 {{HTMLElement("template")}} には、 {{HTMLElement("td")}} のような、 {{HTMLElement("div")}} に追加すると消えてしまうような項目を直接追加することができます。

> **メモ:** 完全な例は [element-details](https://github.com/mdn/web-components-examples/tree/master/element-details) で ([ライブ実行版](https://mdn.github.io/web-components-examples/element-details/)も) 参照することができます。

### template をスロットと共に作成

まず最初に {{HTMLElement("slot")}} 要素を {{HTMLElement("template")}} 要素の中に作成し、[名前付きスロット](/ja/docs/Web/HTML/Element/slot#named-slot)を含んだ新しい "element-details-template" という[文書フラグメント](/ja/docs/Web/API/DocumentFragment)を作成します。

```html
<template id="element-details-template">
  <style>
  details {font-family: "Open Sans Light",Helvetica,Arial}
  .name {font-weight: bold; color: #217ac0; font-size: 120%}
  h4 { margin: 10px 0 -8px 0; }
  h4 span { background: #217ac0; padding: 2px 6px 2px 6px }
  h4 span { border: 1px solid #cee9f9; border-radius: 4px }
  h4 span { color: white }
  .attributes { margin-left: 22px; font-size: 90% }
  .attributes p { margin-left: 16px; font-style: italic }
  </style>
  <details>
    <summary>
      <span>
        <code class="name">&lt;<slot name="element-name">NEED NAME</slot>&gt;</code>
        <i class="desc"><slot name="description">NEED DESCRIPTION</slot></i>
      </span>
    </summary>
    <div class="attributes">
      <h4><span>Attributes</span></h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr>
</template>
```

この {{HTMLElement("template")}} 要素にはいくつかの特徴があります。

- {{HTMLElement("template")}} には {{HTMLElement("style")}} 要素があり、 {{HTMLElement("template")}} が生成する文書の断片だけを対象とした CSS スタイルの集合を持ちます。
- {{HTMLElement("template")}} は {{HTMLElement("slot")}} とその [`name`](/ja/docs/Web/HTML/Element/slot#name) 属性を用いて、 3 つの[名前付きスロット](/ja/docs/Web/HTML/Element/slot#named-slot) を生成しています。

  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- {{HTMLElement("template")}} には[名前付きスロット](/ja/docs/Web/HTML/Element/slot#named-slot)を {{HTMLElement("details")}} 要素の中に持ちます。

### 新しい \<element-details> 要素を \<template> から生成

次に、 **`<element-details>`** という名前の新しいカスタム要素を生成して、 {{DOMXref("Element.attachShadow")}} でその[シャドウルート](/ja/docs/Web/API/ShadowRoot)として追加し、上記の {{HTMLElement("template")}} 要素で生成した文書の断片を取り付けてみましょう。
これは、先ほどの簡単な例で見たのとまったく同じパターンを使っています。

```js
customElements.define('element-details',
  class extends HTMLElement {
    constructor() {
      super();
      const template = document
        .getElementById('element-details-template')
        .content;
      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(template.cloneNode(true));
    }
  }
);
```

### \<element-details> カスタム要素を名前付きスロットと共に使用する

では、 **`<element-details>`** 要素を文書内で実際に使ってみましょう。

```html
<element-details>
  <span slot="element-name">slot</span>
  <span slot="description">A placeholder inside a web
    component that users can fill with their own markup,
    with the effect of composing different DOM trees
    together.</span>
  <dl slot="attributes">
    <dt>name</dt>
    <dd>The name of the slot.</dd>
  </dl>
</element-details>

<element-details>
  <span slot="element-name">template</span>
  <span slot="description">A mechanism for holding client-
    side content that is not to be rendered when a page is
    loaded but may subsequently be instantiated during
    runtime using JavaScript.</span>
</element-details>
```

このコードについて以下の点に注意してください。

- このスニペットには **`<element-details>`** 要素が 2 つあり、どちらも [`slot`](/ja/docs/Web/HTML/Global_attributes#slot) 属性を使って `<element-details>` の[シャドウルート](/ja/docs/Web/API/ShadowRoot)に置いた[名前付きスロット](/ja/docs/Web/HTML/Element/slot#named-slot)の `"element-name"` と `"description"` を参照しています。
- これら 2 つの **`<element-details>`** 要素のうち最初のものだけが `"attributes"` [名前付きスロット](/ja/docs/Web/HTML/Element/slot#named-slot) を参照しています。 2 番目の `<element-details>` 要素は `"attributes"` [名前付きスロット](/ja/docs/Web/HTML/Element/slot#named-slot) への参照を欠いています。
- 最初の `<element-details>` 要素は `"attributes"` [名前付きスロット](/ja/docs/Web/HTML/Element/slot#named-slot) を {{HTMLElement("dt")}} と {{HTMLElement("dd")}} 子要素を使って参照しています。

### 最後に多少のスタイルを追加

最後に若干の CSS スタイルを、文書中の {{HTMLElement("dl")}}、{{HTMLElement("dt")}}、{{HTMLElement("dd")}} の各要素に追加ししす。

```css
  dl { margin-left: 6px; }
  dt { font-weight: bold; color: #217ac0; font-size: 110% }
  dt { font-family: Consolas, "Liberation Mono", Courier }
  dd { margin-left: 16px }
```

```css hidden
body { margin-top: 47px }
```

### 結果

以上のコードを繋げてどのような結果がレンダリングされるかを確認しましょう。

{{ EmbedLiveSample('A_more_involved_example', '300','400','element-details.png','') }}

このレンダリング結果について、以下の点に注意してください。

- 文書内で **`<element-details>`** 要素のインスタンスは {{HTMLElement("details")}} 要素を直接使用しませんが、 {{HTMLElement("details")}} を[シャドウルート](/ja/docs/Web/API/ShadowRoot)が表示させることでレンダリングされます。
- レンダリングされた {{HTMLElement("details")}} の出力結果で、**`<element-details>`** 要素の内容は[名前付きスロット](/ja/docs/Web/HTML/Element/slot#named-slot)を[シャドウルート](/ja/docs/Web/API/ShadowRoot)から埋め込みます。言い換えれば、 **`<element-details>`** 要素の DOM ツリーは[シャドウルート](/ja/docs/Web/API/ShadowRoot)の内容と共に構成されます。
- 両方の **`<element-details>`** 要素おいて、 **Attributes** の見出しは[シャドウルート](/ja/docs/Web/API/ShadowRoot)から `"attributes"` [名前付きスロット](/ja/docs/Web/HTML/Element/slot#named-slot)の位置の前に、自動的に追加されます。
- 最初の **`<element-details>`** は[シャドウルート](/ja/docs/Web/API/ShadowRoot)から[名前付きスロット](/ja/docs/Web/HTML/Element/slot#named-slot)を明示的に参照している {{HTMLElement("dl")}} 要素を持つため、{{HTMLElement("dl")}} の内容は [シャドウルート](/ja/docs/Web/API/ShadowRoot)から `"attributes"` [名前付きスロット](/ja/docs/Web/HTML/Element/slot#named-slot)を置き換えています。
- 2 つ目の **`<element-details>`** は[シャドウルート](/ja/docs/Web/API/ShadowRoot)から[名前付きスロット](/ja/docs/Web/HTML/Element/slot#named-slot)を明示的に参照していないため、[名前付きスロット](/ja/docs/Web/HTML/Element/slot#named-slot)の内容は[シャドウルート](/ja/docs/Web/API/ShadowRoot)の既定の内容が埋め込まれます。
