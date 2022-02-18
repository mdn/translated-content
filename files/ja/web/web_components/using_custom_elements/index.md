---
title: カスタム要素の使用
slug: Web/Web_Components/Using_custom_elements
tags:
  - クラス
  - ガイド
  - HTML
  - ウェブコンポーネント
  - autonomous
  - カスタム要素
  - customized
translation_of: Web/Web_Components/Using_custom_elements
---
{{DefaultAPISidebar("Web Components")}}

ウェブコンポーネント標準の主な特徴の 1 つは、 HTML ページに機能をカプセル化するカスタム要素を作成できることで、カスタムページの機能を提供する要素の長いネストしたバッチを作成する必要がありません。この記事では、 Custom Elements API の使い方を紹介します。

## 高水準のビュー

ウェブ文書上でカスタム要素を制御するのは {{domxref("CustomElementRegistry")}} オブジェクトです。 — このオブジェクトで、ページへカスタム要素を登録したり、どのようなカスタム要素が登録されているのかを返したりすることができます。

ページにカスタム要素を登録するには、 {{domxref("CustomElementRegistry.define()")}} メソッドを使います。引数に次のものを取ります。

- 要素に与える名前を表す {{domxref("DOMString")}}。カスタム要素の名前は、[ダッシュが使われている名前](https://html.spec.whatwg.org/#valid-custom-element-name) (kebab-case) である必要があります。単一の単語にすることはできません。
- 要素の振る舞いを定義した[クラス](/en-US/docs/Web/JavaScript/Reference/Classes)のオブジェクト。
- {{optional_inline}} `extends` プロパティを含むオプションオブジェクトです。このプロパティは、もしあれば、要素が継承する組み込み要素を指定します（カスタマイズされた組み込み要素にのみ関係します）。

例えば、カスタムの [word-count 要素](https://mdn.github.io/web-components-examples/word-count-web-component/)を定義するには次のようにします。

```js
customElements.define('word-count', WordCount, { extends: 'p' });
```

`word-count` 要素は `WordCount` クラスのオブジェクトで、 {{htmlelement("p")}} 要素を拡張します。

カスタム要素のクラスのオブジェクトは ES 2015 のクラス構文で実装します。例えば、 `WordCount` は次のように構成します。

```js
class WordCount extends HTMLParagraphElement {
  constructor() {
    // コンストラクターでは常に super を最初に呼び出してください
    super();

    // ここに要素の機能を記述します

    ...
  }
}
```

これはごく簡単な例ですが、ここでできることはもっとあります。クラスの中でライフサイクルコールバックを定義することができ、要素のライフサイクルの特定の時点で実行されます。例えば、`connectedCallback` はドキュメント接続要素にカスタム要素が追加されるたびに実行されます。一方 `attributeChangedCallback` はカスタム要素に属性が追加、削除、変更される時に実行されます。

これらについては、下記の{{anch("ライフサイクルコールバックの使用")}}の節で詳しく学ぶことができます。

カスタム要素には 2 つの種類があります。

- スタンドアロンの**自律カスタム要素** — 標準の HTML 要素を継承しません。 HTML 要素としてページ内で記述して使います。例えば、`<popup-info>` あるいは `document.createElement("popup-info")` などです。
- 基礎となる HTML 要素を継承する**カスタマイズされた組み込み要素**。これらを作成するには、どの要素を拡張するかを指定する必要があり（上記の例で示した通り）、基本要素を記述し、カスタム要素の名前を {{htmlattrxref("is")}} 属性（またはプロパティ）で指定することで使用します。例えば、 `<p is="word-count">` や `document.createElement("p", { is: "word-count" })` のようにします。

## 簡単な例での作業

ここで、もう少し簡単な例で、カスタム要素の作成方法をより詳しく説明しましょう。

### 自律カスタム要素

自律カスタム要素の例を見てみましょう。[`<popup-info-box>`](https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component) ([ライブ例](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)も参照) です。これは画像とテキストを受け取り、ページにアイコンを埋め込みます。アイコンにフォーカスすると、テキストをポップアップ情報ボックスに表示し、さらにコンテキスト内の情報を提供します。

最初に汎用的な {{domxref("HTMLElement")}} クラスを継承して `PopUpInfo` というクラスを定義する JavaScript ファイルです。

```js
class PopUpInfo extends HTMLElement {
  constructor() {
    // コンストラクターでは常に super を最初に呼び出してください
    super();

    // ここに要素の機能を記述します

    ...
  }
}
```

前述のコードスニペットはクラスのコンストラクター ([`constructor()`](/ja/docs/Web/JavaScript/Reference/Classes/constructor)) の定義を含んでいます。ここでは常に [`super()`](/en-US/docs/Web/JavaScript/Reference/Operators/super) を最初に呼び出し、正しいプロタイプチェーンが確立されるようにします。

コンストラクターの内部では、その要素のインスタンスが生成されたときに持つすべての機能を定義します。この場合、カスタム要素にシャドウルートを添付し、いくつかの DOM 操作を使用して要素の内部シャドウ DOM 構造を作成します。それをシャドウルートに添付します。そして最後に、いくつかの CSS をシャドウルートに添付してスタイル付けを行います。

```js
// シャドウルートを生成
this.attachShadow({mode: 'open'}); // 'this.shadowRoot' を設定して返す

// (内部の) span 要素を生成
const wrapper = document.createElement('span');
wrapper.setAttribute('class','wrapper');
const icon = wrapper.appendChild(document.createElement('span'));
icon.setAttribute('class','icon');
icon.setAttribute('tabindex', 0);
// アイコンを、定義された属性または既定のアイコンから挿入
const img = icon.appendChild(document.createElement('img'));
img.src = this.hasAttribute('src') ? this.getAttribute('src') : 'img/default.png';

const info = wrapper.appendChild(document.createElement('span'));
info.setAttribute('class','info');
// 属性の中身を取得し、 info の span の中に入れる
info.textContent = this.getAttribute('data-text');

// CSS を作成しシャドウ DOM に割り当てる
const style = document.createElement('style');
style.textContent = '.wrapper {' +
// 簡略化のために CSS は省略

// 生成された要素をシャドウ DOM に添付する
this.shadowRoot.append(style,wrapper);
```

最後に、カスタム要素を `CustomElementRegistry` に登録します。前述の `define()` を使用して、引数で要素名とその機能を定義するクラス名を指定します。

```js
customElements.define('popup-info', PopUpInfo);
```

これによって要素がページで使えるようになりました。 HTML 中で下記のように使用することができます。

```html
<popup-info img="img/alt.png" data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

> **Note:** こちらで[完全な JavaScript ソース](https://github.com/mdn/web-components-examples/blob/master/popup-info-box-web-component/main.js) を見ることができます。

### 内部スタイルと外部スタイル

上記の例では {{htmlelement("style")}} 要素を用いてシャドウ DOM にスタイルを適用しましたが、代わりに完全に {{htmlelement("link")}} 要素から外部スタイルシートを参照することが可能です。

例えば、 [popup-info-box-external-stylesheet](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/) のコードを少し見てみましょう（[ソースコード](https://github.com/mdn/web-components-examples/blob/master/popup-info-box-external-stylesheet/main.js)はこちら）。

```js
// 外部スタイルシートをシャドウ DOM に適用
const linkElem = document.createElement('link');
linkElem.setAttribute('rel', 'stylesheet');
linkElem.setAttribute('href', 'style.css');

// 生成された要素をシャドウ DOM に添付
shadow.appendChild(linkElem);
```

なお、 {{htmlelement("link")}} 要素はシャドウルートの描画をブロックしないので、スタイルシートのロード中にスタイル付けされていないコンテンツ (FOUC) が一瞬表示されるかもしれないことに注意してください。

最近のブラウザーの多くは、共通のノードからクローンされた、あるいは同一のテキストを持つ {{htmlelement("style")}} タグに対して、単一のバッキングスタイルシートを共有できるようにする最適化を実装しています。この最適化によって、外部スタイルでも内部スタイルでも性能は同程度になるはずです。

### カスタマイズされた組み込み要素

ここで、もう 1 つの組み込み要素の例を見てみましょう。 [expanding-list](https://github.com/mdn/web-components-examples/tree/master/expanding-list-web-component) ([ライブでも確認してください](https://mdn.github.io/web-components-examples/expanding-list-web-component/)) です。 これにより番号なしリストが展開・縮小するメニューになります。

 まず始めに、これまでと同様の方法でクラス要素を定義します。

```js
class ExpandingList extends HTMLUListElement {
  constructor() {
    // コンストラクターでは常に super を最初に呼び出してください
    super();

    // ここに要素の機能を記述します

    ...
  }
}
```

ここでは要素の詳細な機能については説明しませんが、ソースコードからどのように動作するのか確認することができます。これまでと唯一違う点は、 {{domxref("HTMLUListElement")}} インターフェースを継承しており、 {{domxref("HTMLElement")}} ではないことです。そのため、独立した要素ではなく、 {{htmlelement("ul")}} 要素の特徴を備えた上に、定義した機能を持ちます。これこそが、自律カスタム要素ではなくカスタマイズされた組み込み要素である理由です。

 次に、以前と同様に `define()` を用いて要素を登録しますが、今回はこのカスタム要素がどの要素から継承したのかという情報をオプションとして渡しています。

```js
customElements.define('expanding-list', ExpandingList, { extends: "ul" });
```

ウェブ文書内で組み込み要素を使用する場合とはやや異なります。

```html
<ul is="expanding-list">

  ...

</ul>
```

通常のように `<ul>` を使用していますが、カスタム要素の名前が `is` 属性で指定されています。

> **Note:** 繰り返しますが、完全な [JavaScript のソースコード](https://github.com/mdn/web-components-examples/blob/master/expanding-list-web-component/main.js)はこちらにあります。

## ライフサイクルコールバックの使用

カスタム要素のクラス定義内に、いくつかの異なるコールバックを定義できます。これらは要素のライフサイクルのさまざまな時点で起動します。

- `connectedCallback`: 文書に接続された要素にカスタム要素が追加されるたびに呼び出されます。これはそのノードが移動するために発生するので、要素の内容が完全に解釈される前に発生することがあります。

  > **Note:** `connectedCallback` は要素の接続が終了したときにも呼び出されることがあります。 {{domxref("Node.isConnected")}} を使用して確認してください。

- `disconnectedCallback`: カスタム要素が文書の DOM から切断されるたびに呼び出されます。
- `adoptedCallback`: カスタム要素が新しい文書に移動するたびに呼び出されます。
- `attributeChangedCallback`: カスタム要素の属性の 1 つが追加、削除、変更されるたびに呼び出されます。どの属性の変更が通知されたかは、 static get `observedAttributes()` メソッドで指定されます。

これらの使用例を見てみましょう。以下のコードは [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks) の例から引用しています ([実行可能なライブでも確認してください](https://mdn.github.io/web-components-examples/life-cycle-callbacks/))。これは、ページ上に一定の大きさの色のついた四角形を生成する些細な例です。カスタム要素は次のようなものです。

```html
<custom-square l="100" c="red"></custom-square>
```

クラスのコンストラクターは非常に単純です。ここでは、要素にシャドウ DOM を割り当て、空の {{htmlelement("div")}} および {{htmlelement("style")}} 要素をシャドウルートに追加します。

```js
const shadow = this.attachShadow({mode: 'open'});

const div = document.createElement('div');
const style = document.createElement('style');
shadow.appendChild(style);
shadow.appendChild(div);
```

この例の主要な機能は `updateStyle()` です。これは要素を取得し、シャドウルートを取得し、その `<style>` 要素を見つけて、{{cssxref("width")}}, {{cssxref("height")}}, および{{cssxref("background-color")}} をそのスタイルに追加します。

```js
function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector('style').textContent = `
    div {
      width: ${elem.getAttribute('l')}px;
      height: ${elem.getAttribute('l')}px;
      background-color: ${elem.getAttribute('c')};
    }
  `;
}
```

実際の更新はすべて、メソッドとしてクラス定義内に配置されているライフサイクルコールバックによって処理されます。 `connectedCallback()` は、要素が DOM に追加されるたびに実行されます。ここでは、 `updateStyle()` 関数を実行して、正方形がその属性で定義されたスタイルになっていることを確認します。

```js
connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
}
```

`disconnectedCallback()` および `adoptedCallback()` コールバックは、要素が DOM から削除されるか、別のページに移動されたときに通知する単純なメッセージをコンソールに記録します。

```js
disconnectedCallback() {
  console.log('Custom square element removed from page.');
}

adoptedCallback() {
  console.log('Custom square element moved to new page.');
}
```

`attributeChangedCallback()` コールバックは、要素の属性の 1 つが何らかの方法で変更されるたびに実行されます。そのプロパティからわかるように、属性、属性の名前、および古い属性値と新しい属性値を個別に操作することができます。ただし、この場合は、 `updateStyle()` 関数を再度実行して、新しい値に従って正方形のスタイルが更新されるようにします。

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');
  updateStyle(this);
}
```

ある属性が変更されたときに起動する `attributeChangedCallback()` コールバックを取得するには、その属性を監視する必要があることに注意してください。これは、カスタム要素クラス内で `static get observedAttributes()` メソッドを定義することによって行われます。これは、監視したい属性の名前を含む配列を返すようにしてください。

```js
static get observedAttributes() { return ['c', 'l']; }
```

この例では、これはコンストラクターの最上部に配置されています。

> **Note:** [完全な JavaScript のソース](https://github.com/mdn/web-components-examples/blob/master/life-cycle-callbacks/main.js)はこちらから探してください。

## トランスパイラーとクラス

古いブラウザーを対象とした Babel 6 や TypeScript では、 ES2015 のクラス構文は期待通りにトランスパイルされない可能性があることに注意してください。 Babel 7 もしくは Babel 6 の [babel-plugin-transform-builtin-classes](https://www.npmjs.com/package/babel-plugin-transform-builtin-classes) を使用すると、 TypeScript で古いブラウザーではなく ES2015 をターゲットとすることができます。

## ライブラリー

カスタム要素を作る際に抽象度を高めることを目的とした、ウェブコンポーネントで実装されたライブラリーがあります。これらのライブラリーには、 [FASTElement](https://www.fast.design/docs/fast-element/getting-started), [snuggsi](https://github.com/devpunks/snuggsi), [X-Tag](https://x-tag.github.io/), [Slim.js](https://slimjs.com/), [Lit](https://lit.dev/), [Smart](https://www.htmlelements.com/), [Stencil](https://stenciljs.com), [hyperHTML-Element](https://github.com/WebReflection/hyperHTML-Element), [DataFormsJS](https://www.dataformsjs.com/), [Custom-Element-Builder](https://tmorin.github.io/ceb/) などがあります。
