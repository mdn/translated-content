---
title: シャドウ DOM の使用
slug: Web/API/Web_components/Using_shadow_DOM
l10n:
  sourceCommit: de954cbfe1c070de631cdaf91005c7def339c344
---

{{DefaultAPISidebar("Web Components")}}

ウェブコンポーネントにおける重要な側面の一つが、カプセル化です。マークアップ構造、スタイル、動作を隠蔽し、コード上の他のコードから分離することで、他の部分でクラッシュすることを防ぎ、コードをきれいにしておくことができます。シャドウ DOM API はこの主要部分であり、隠蔽され分離された DOM を要素に取り付けるための方法を提供しています。この記事ではシャドウ DOM を使う基本を記述しています。

## 高水準のビュー

この記事は、すでにあなたが [DOM (Document Object Model)](/ja/docs/Web/API/Document_Object_Model/Introduction) の概念を理解していることを想定しています。これはツリー上の構造で、接続されたノードがマークアップ文書（ウェブ文書の場合は通常 HTML 文書）に現れるさまざまな要素や文字列を表します。例として、以下のような HTML の断片を考えてみましょう。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Simple DOM example</title>
  </head>
  <body>
    <section>
      <img
        src="dinosaur.png"
        alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
      <p>
        Here we will add a link to the
        <a href="https://www.mozilla.org/">Mozilla homepage</a>
      </p>
    </section>
  </body>
</html>
```

この断片によって以下のような DOM 構造が構成されます。

![要素とテキストノードを持つDOMツリー、要素の属性名と内容を含めるために、空でないテキストノードのコンテンツ。](dom-screenshot.png)

_シャドウ_ DOM により、通常の DOM ツリーの要素の下に隠れた DOM ツリーを取り付けることができます。このシャドウ DOM ツリーはシャドウルートから始まり、その下には普通の DOM ツリーと同様に任意の要素を追加することができます。

![文書、シャドウルート、シャドウホストの相互作用を示す図の SVG 版。](shadowdom.svg)

以下にシャドウ DOM における用語を定義します。

- **シャドウホスト**: シャドウ DOM が取り付けられた、通常の DOM ノード
- **シャドウツリー**: シャドウ DOM の中にある DOM ツリー
- **シャドウ境界**: シャドウ DOM と通常の DOM の境界
- **シャドウルート**: シャドウツリーの根ノード

シャドウ DOM 内のノードには、シャドウでないノードと全く同じように影響を与えることができます。たとえば、子を追加したり、属性を設定したり、element.style.foo を使用して個々のノードのスタイルを設定したり、 {{htmlelement("style")}} 要素内でシャドウ DOM ツリー全体へのスタイルを追加したりすることができます。違いは、シャドウ DOM 内のどのコードもその外の何かに影響を与えることができず、便利なカプセル化ができることです。

なお、シャドウ DOM は決して新しいものではありません。ブラウザーは長い間、要素の内部構造をカプセル化するためにこれを使用してきました。例えば、既定のブラウザーコントロールが公開されている {{htmlelement("video")}} 要素を思い浮かべてください。 DOM には `<video>` 要素しか表示されませんが、そのシャドウ DOM の内部には、一連のボタンやその他のコントロールが含まれています。 シャドウ DOM 仕様書により、独自のカスタム要素のシャドウ DOM を実際に操作することができるようになりました。

## 基本的な使い方

任意の要素にシャドウルートを取り付けるには {{domxref("Element.attachShadow()")}} メソッドを使用します。このメソッドはオプションオブジェクトを引数として取り、その中にはオプションが 1 つ、 `mode` オプションを `open` または `closed` の値で取ります。

```js
const shadowOpen = elementRef.attachShadow({ mode: "open" });
const shadowClosed = elementRef.attachShadow({ mode: "closed" });
```

`open` の場合は、シャドウ DOM にメインページに書かれた JavaScript からアクセスできます。以下のように {{domxref("Element.shadowRoot")}} プロパティを利用してアクセスできます。

```js
const myShadowDom = myCustomElem.shadowRoot;
```

シャドウルートを `mode: "closed"` が設定された状態で取り付けた場合、外部からシャドウ DOM にアクセスすることができません。 `myCustomElem.shadowRoot` は `null` を返します。シャドウ DOM を含む既成の要素、例えば `<video>` などはこれに該当します。

なお、同じ JavaScript の領域内において、これはシャドウルートを隠す方法として完全に安全な訳ではありません。コードが `Element.prototype.attachShadow` を上書きして、常に `mode: "open"` を使用することが可能だと[このブログ記事](https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af)が示しています。しかし、悪意のあるコードがグローバルを操作することが懸念される環境でない限り、このことを心配する必要はないでしょう。さらに、ウェブ拡張機能はウィンドウのグローバルにアクセスしないため、シャドウ DOM をウェブ拡張機能から確実に保護することができます。

シャドウ DOM をカスタム要素のコンストラクターの一部として取り付けた場合（シャドウ DOM の最も有用な用途です）、次のような方法を使用することになります。

```js
const shadow = this.attachShadow({ mode: "open" });
```

シャドウ DOM を要素に取り付けた場合、その操作は通常の DOM 操作と同じ DOM API を使うだけでよいのです。

```js
const para = document.createElement("p");
shadow.appendChild(para);
// etc.
```

## 簡単な例を一通り扱う

カスタム要素内のシンプルなシャドウ DOM を見てみましょう。 [`<popup-info>`](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component) （[ライブ例](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)を参照）です。この要素は画像アイコンとテキストを取り、アイコンをページに埋め込みます。アイコンがフォーカスされるとポップアップが表示され、さらなる情報を提供します。まずは `HTMLElement` を拡張して `PopUpInfo` というクラスを定義します。

```js
class PopUpInfo extends HTMLElement {
  constructor() {
    // コンストラクターでは常に super を最初に呼び出してください
    super();

    // ここに要素の機能を記述します
  }
}
```

クラス定義の中で、要素のコンストラクターを定義し、その中で要素のインスタンスが生成されたときに、その要素が持つすべての機能を定義します。

### シャドウルートの作成

最初にシャドウルートをカスタム要素に追加します。

```js
// シャドウルートを生成
const shadow = this.attachShadow({ mode: "open" });
```

### シャドウ DOM 構造の作成

次に、いくつかの DOM 操作を使用して、要素の内部シャドウ DOM 構造を作成します。

```js
// span の生成
const wrapper = document.createElement("span");
wrapper.setAttribute("class", "wrapper");
const icon = document.createElement("span");
icon.setAttribute("class", "icon");
icon.setAttribute("tabindex", "0");
const info = document.createElement("span");
info.setAttribute("class", "info");

// 属性の中身を取得し、 info の span の中に入れる
const text = this.getAttribute("data-text");
info.textContent = text;

// アイコンを挿入
const img = document.createElement("img");
img.src = this.hasAttribute("img")
  ? this.getAttribute("img")
  : "img/default.png";
img.alt = this.hasAttribute("alt") ? this.getAttribute("alt") : "";
icon.appendChild(img);
```

### シャドウ DOM のスタイル付け

そのあと、 {{htmlelement("style")}} 要素を作り CSS でスタイルを付けます。

```js
// CSS を生成してシャドウ DOM に適用
let style = document.createElement("style");

style.textContent = `
.wrapper {
  position: relative;
}

.info {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  opacity: 0;
  transition: 0.6s all;
  position: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3;
}

img {
  width: 1.2rem;
}

.icon:hover + .info, .icon:focus + .info {
  opacity: 1;
}`;
```

### シャドウ DOM をシャドウルートに追加

最後のステップは、生成した要素すべてをシャドウルートに取り付けることです。

```js
// 生成した要素をシャドウ DOM に取り付ける
shadow.appendChild(style);
shadow.appendChild(wrapper);
wrapper.appendChild(icon);
wrapper.appendChild(info);
```

### カスタム要素の使用

一度クラスを定義すれば、[カスタム要素の使用](/ja/docs/Web/API/Web_components/Using_custom_elements)で説明したように、その要素を定義し、ページに配置するだけで簡単に使用できるようになります。

```js
// 新しい要素を定義
customElements.define("popup-info", PopUpInfo);
```

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC) is an extra security feature — it is the last 3 or 4 numbers on the back of your card."></popup-info>
```

### 内部スタイルと外部スタイル

上記の例では {{htmlelement("style")}} 要素を用いてシャドウ DOM にスタイルを適用しましたが、代わりに完全に {{htmlelement("link")}} 要素から外部スタイルシートを参照することが可能です。

例えば、 [popup-info-box-external-stylesheet](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/) のコードを少し見てみましょう（[ソースコード](https://github.com/mdn/web-components-examples/blob/main/popup-info-box-external-stylesheet/main.js)はこちら）。

```js
// 外部スタイルシートをシャドウ DOM に適用
const linkElem = document.createElement("link");
linkElem.setAttribute("rel", "stylesheet");
linkElem.setAttribute("href", "style.css");

// 生成された要素をシャドウ DOM に添付
shadow.appendChild(linkElem);
```

なお、 {{htmlelement("link")}} 要素はシャドウルートの描画をブロックしないので、スタイルシートのロード中にスタイル付けされていないコンテンツ (FOUC) が一瞬表示されるかもしれないことに注意してください。

最近のブラウザーの多くは、共通のノードからクローンされた、あるいは同一のテキストを持つ {{htmlelement("style")}} タグに対して、単一のバッキングスタイルシートを共有できるようにする最適化を実装しています。この最適化によって、外部スタイルでも内部スタイルでも性能は同程度になるはずです。

## 関連情報

- [カスタム要素の使用](/ja/docs/Web/API/Web_components/Using_custom_elements)
- [テンプレートとスロットの使用](/ja/docs/Web/API/Web_components/Using_templates_and_slots)
