---
title: カスタム要素の使用
slug: Web/API/Web_components/Using_custom_elements
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("Web Components")}}

ウェブコンポーネントの主な特徴のひとつは、カスタム要素を作成できることです。つまり、ウェブ開発者によって動作が定義され、ブラウザーで利用可能な要素セットを拡張する HTML 要素です。

この記事では、カスタム要素について紹介し、いくつかの例を説明します。

## カスタム要素の種類

カスタム要素には 2 つの種類があります。

- **カスタム組み込み要素** (Customized built-in element) は、標準 HTML 要素、例えば {{domxref("HTMLImageElement")}} や {{domxref("HTMLParagraphElement")}} を継承します。これらの実装により、標準要素の特定のインスタンスの動作が拡張されます。

  > [!NOTE]
  > カスタム組み込み要素の実装に関する注意事項については、[`is`](/ja/docs/Web/HTML/Global_attributes/is) 属性のリファレンスを参照してください。

- **自律型カスタム要素** (Autonomous custom element) は HTML 要素の基底クラスである {{domxref("HTMLElement")}} を継承します。一から動作を実装する必要があります。

## カスタム要素の実装

カスタム要素は、{{domxref("HTMLElement")}} を拡張する[クラス](/ja/docs/Web/JavaScript/Reference/Classes)（自立型要素の場合）またはカスタマイズするインターフェイス（カスタム組み込み要素の場合）として実装されます。

以下は、最小限のカスタム要素で、{{HTMLElement("p")}} 要素をカスタマイズする実装例です。

```js
class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
  }
  // 要素の機能をここに書く
}
```

最小限の自律型カスタム要素の実装は次のとおりです。

```js
class PopupInfo extends HTMLElement {
  constructor() {
    super();
  }
  // 要素の機能をここに書く
}
```

クラスの[コンストラクター](/ja/docs/Web/JavaScript/Reference/Classes/constructor)では、初期状態や既定値の設定、イベントリスナーの登録、シャドウルートを作成することなどが可能です。この時点では、要素の属性や子要素を検査したり、新しい属性や子要素を追加したりしないでください。要件のすべてについては、[Requirements for custom element constructors and reactions](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) を参照してください。

### カスタム要素のライフサイクルコールバック

カスタム要素が登録されると、ページのコードがカスタム要素と特定の方法でやり取りを行う際に、ブラウザーがそのクラスの特定のメソッドを呼び出します。 仕様書ではこれらのメソッドの実装を「ライフサイクルコールバック」と呼んでいますが、これらのメソッドを提供することで、これらのイベントに応答してコードを実行することができます。

カスタム要素のライフサイクルコールバックには、以下のものが含まれます。

- `connectedCallback()`: 要素が文書に追加されるたびに呼び出されます。仕様では、開発者は可能な限り、カスタム要素の設定をコンストラクターではなく、このコールバックで実装することを推奨しています。
- `disconnectedCallback()`: 要素が文書から削除されるたびに呼び出されます。
- `adoptedCallback()`: 要素が新しい文書に移動されるたびに呼び出されます。
- `attributeChangedCallback()`: 属性が変更、追加、削除、置換されたときに呼び出されます。このコールバックの詳細については、[属性の変更への応答](#属性の変更への応答)を参照してください。

これらのライフサイクルイベントを記録する最小限のカスタム要素は次のとおりです。

```js
// 要素のためのクラスを作成
class MyCustomElement extends HTMLElement {
  static observedAttributes = ["color", "size"];

  constructor() {
    // コンストラクターでは、常に super を最初に呼び出す
    super();
  }

  connectedCallback() {
    console.log("カスタム要素がページに追加されました。");
  }

  disconnectedCallback() {
    console.log("カスタム要素がページから除去されました。");
  }

  adoptedCallback() {
    console.log("カスタム要素が新しいページへ移動されました。");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`属性 ${name} が変更されました。`);
  }
}

customElements.define("my-custom-element", MyCustomElement);
```

## カスタム要素の登録

カスタム要素をページで利用できるようにするには、{{domxref("Window.customElements")}} の {{domxref("CustomElementRegistry.define()", "define()")}} メソッドを呼び出します。

`define()` メソッドは、以下の引数を取ります。

- `name`
  - : 要素の名前。これは小文字で始まり、ハイフンを含み、仕様書の [definition of a valid name](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) に記載されているその他の特定のルールを満たす必要があります。
- `constructor`
  - : カスタム要素のコンストラクター関数。
- `options`
  - : カスタム組み込み要素のみに含まれ、これは単一のプロパティ `extends` を含むオブジェクトです。これは、拡張する組み込み要素の名前を指定する文字列です。

例えば、このコードはカスタム組み込み要素である `WordCount` を登録します。

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

このコードは、`PopupInfo` という自律型カスタム要素を登録します。

```js
customElements.define("popup-info", PopupInfo);
```

## カスタム要素の使用

カスタム要素を定義し登録すると、コードで使用できるようになります。

カスタム組み込み要素を使用するには、組み込み要素を使用しますが、カスタム名を [`is`](/ja/docs/Web/HTML/Global_attributes/is) 属性の値として使用します。

```html
<p is="word-count"></p>
```

自律型カスタム要素を独自に作成して使用するには、組み込みの HTML 要素と同様にカスタム名を使用します。

```html
<popup-info>
  <!-- 要素の中身 -->
</popup-info>
```

## 属性の変更への応答

組み込み要素と同様に、カスタム要素も HTML 属性を使用して要素の動作を設定することができます。属性を効果的に使用するには、要素が属性値の変更に対応できなければなりません。これを実現するには、カスタム要素を実装するクラスに以下のメンバーを追加する必要があります。

- `observedAttributes` という名前の静的プロパティ。これは、その要素が変更通知を必要とするすべての属性の名前を含む配列でなければなりません。
- `attributeChangedCallback()` ライフサイクルコールバックの実装。

`attributeChangedCallback()` コールバックは、要素の `observedAttributes` プロパティにリストされた名前の属性が追加、修正、削除、置換されるたびに呼び出されます。

コールバックには 3 つの引数が渡されます。

- 変更された属性の名前。
- 属性の古い値。
- 属性の新しい値。

例えば、この自律的な要素は `size` 属性を監視し、値が変更された際に新旧の値を記録します。

```js
// 要素のためのクラスを作成
class MyCustomElement extends HTMLElement {
  static observedAttributes = ["size"];

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
    );
  }
}

customElements.define("my-custom-element", MyCustomElement);
```

要素の HTML 宣言に監視される属性が含まれている場合、その属性が初期化された後に、要素の宣言が最初に解釈された時点で `attributeChangedCallback()` が呼び出されることに
注意してください。 したがって、以下の例では、たとえ属性がその後変更されることがなかったとしても、DOM が解釈された時点で `attributeChangedCallback()` が呼び出されます。

```html
<my-custom-element size="100"></my-custom-element>
```

`attributeChangedCallback()` の使用を示す完全な例については、このページの[ライフサイクルコールバック](#ライフサイクルコールバックの使用)を参照してください。

### カスタム状態と CSS のカスタム状態擬似クラスセレクター

HTML 要素に組み込まれた要素は、「ホバー」、「無効」、「読み取り専用」など、様々な状態を取ります。
これらの状態の一部は、HTML または JavaScript を使用して属性として設定できますが、内部的なものもあり、設定できないものもあります。
外部または内部に関わらず、これらの状態には通常、特定の状態にある要素を選択し、スタイルを適用するために使用できる対応する [CSS 擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)が存在します。

また、自律型カスタム要素（組み込み要素をベースにした要素を除く）では、擬似クラス関数 `:state()` を使用して状態を定義し、それに対して選択を行うこともできます。
以下のコードでは、内部状態 "`collapsed`" を持つ自律型カスタム要素の例を使用して、その動作を示しています。

`collapsed` の状態は、要素の外からは見えない論理値プロパティ（セッターとゲッターメソッド付き）として表現されます。
この状態を CSS で選択できるようにするために、カスタム要素は最初のコンストラクターで {{domxref("HTMLElement.attachInternals()")}} を呼び出し、{{domxref("ElementInternals")}} オブジェクトを装着します。これにより、{{domxref("ElementInternals.states")}} プロパティを通じて {{domxref("CustomStateSet")}} にアクセスできるようになります。
（内部で）折りたたまれた状態のセッターは、状態が `true` であれば `CustomStateSet` に識別子 `hidden` を追加し、状態が `false` であれば除去します。 識別子は単なる文字列です。この場合、`hidden` と呼びましたが、`collapsed` と読んでも同じように機能します。

```js
class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  get collapsed() {
    return this._internals.states.has("hidden");
  }

  set collapsed(flag) {
    if (flag) {
      // Existence of identifier corresponds to "true"
      this._internals.states.add("hidden");
    } else {
      // Absence of identifier corresponds to "false"
      this._internals.states.delete("hidden");
    }
  }
}

// Register the custom element
customElements.define("my-custom-element", MyCustomElement);
```

カスタム要素の `CustomStateSet` (`this._internals.states`) に追加された識別子を使用して、要素のカスタム状態と照合することができます。
これは、[`:state()`](/ja/docs/Web/CSS/:state) 擬似クラスに識別子を渡すと照合されます。
例えば、下記では、`hidden` セレクターを使用して、`hidden` 状態が `true`（したがって、要素が`collapsed` 状態）であることを選択し、境界線を削除します。

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

`:state()` 擬似クラスを [`:host()`](/ja/docs/Web/CSS/:host_function) 擬似クラス関数内で使用すると、[カスタム要素のシャドウ DOM 内の](/ja/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom)カスタム状態と照合することもできます。
さらに、`:state()` 擬似クラスを [`::part()`](/ja/docs/Web/CSS/::part) 擬似要素の後で使用することで、特定の状態にあるカスタム要素の[シャドウパーツ](/ja/docs/Web/CSS/CSS_shadow_parts)と照合することもできます。

{{domxref("CustomStateSet")}} には、これがどのように動作するのかを示すいくつかのライブサンプルがあります。

## 例

このガイドの残りの部分では、いくつかのカスタム要素の例を見ていきます。 これらの例のすべて、およびその他のソースは、[web-components-examples](https://github.com/mdn/web-components-examples) リポジトリーで参照できます。また、すべてをライブで確認するには、<https://mdn.github.io/web-components-examples/> にアクセスしてください。

### 自律カスタム要素

まず、自律カスタム要素の例を見てみましょう。`<popup-info>` カスタム要素は、画像アイコンとテキスト文字列を属性として取り、アイコンにフォーカスすると、テキストをポップアップ情報ボックスに表示し、さらにコンテキスト内の情報を提供します。

- [この例のライブ実行を確認](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)
- [ソースコードを参照](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

最初に {{domxref("HTMLElement")}} クラスを継承して `PopupInfo` というクラスを定義する JavaScript ファイルです。

```js
// 要素のためのクラスを作成
class PopupInfo extends HTMLElement {
  constructor() {
    // コンストラクターでは super を常に最初に呼び出す
    super();
  }

  connectedCallback() {
    // シャドウルートを生成
    const shadow = this.attachShadow({ mode: "open" });

    // span 要素を生成
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // 属性の中身を取得し、情報 span の中に入れる
    const text = this.getAttribute("data-text");
    info.textContent = text;

    // アイコンを挿入
    let imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }

    const img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    // いくらかの CSS を生成してシャドウ DOM に適用
    const style = document.createElement("style");
    console.log(style.isConnected);

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
      }
    `;

    // 生成要素をシャドウ DOM に結びつける
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}
```

前述のコードスニペットはクラスのコンストラクター（[`constructor()`](/ja/docs/Web/JavaScript/Reference/Classes/constructor)）の定義を含んでいます。ここでは常に [`super()`](/ja/docs/Web/JavaScript/Reference/Operators/super) を最初に呼び出し、正しいプロトタイプチェーンが確立されるようにします。

`connectedCallback()` メソッド内で、要素が DOM に接続された際にその要素が持つすべての機能を定義します。この例では、シャドウルートをカスタム要素に割り当て、DOM 操作を使用して要素の内部シャドウルート構造を作成します（そしてシャドウルートに割り当てます）。最後に、シャドウルートにいくつかの CSS を割り当ててスタイル設定します。要素の属性は DOM に接続されるまで利用できないため、コンストラクターでは処理はうまくいきません。

最後に、カスタム要素を `CustomElementRegistry` に登録します。前述の `define()` を使用して、引数で要素名とその機能を定義するクラス名を指定します。

```js
customElements.define("popup-info", PopupInfo);
```

これによって要素がページで使えるようになりました。 HTML 内で下記のように使用することができます。

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

### 内部スタイルと外部スタイル

上記の例では、{{htmlelement("style")}} 要素を用いてシャドウ DOM にスタイルを適用しましたが、代わりに {{htmlelement("link")}} 要素から外部スタイルシートを参照することが可能です。この例では、外部スタイルシートを使用するように `<popup-info>` カスタム要素を変更します。

- [この例のライブ実行を確認](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/)
- [ソースコードを参照](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-external-stylesheet)

こちらがクラス定義です。

```js
// 要素のためのクラスを作成
class PopupInfo extends HTMLElement {
  constructor() {
    // コンストラクターでは super を常に最初に呼び出す
    super();
  }

  connectedCallback() {
    // シャドウルートを生成
    const shadow = this.attachShadow({ mode: "open" });

    // span 要素を生成
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // 属性の中身を取得し、情報 span の中に入れる
    const text = this.getAttribute("data-text");
    info.textContent = text;

    // アイコンを挿入
    let imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }

    const img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    // 外部スタイルシートをシャドウ DOM に適用
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "style.css");

    // 生成した要素をシャドウ DOM に結びつける
    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}
```

これは、元の `<popup-info>` の例とほぼ同じですが、外部スタイルシートにリンクするために、シャドウ DOM に追加する {{HTMLElement("link")}} 要素を使用している点が異なります。

なお、 {{htmlelement("link")}} 要素はシャドウルートの描画をブロックしないので、スタイルシートのロード中にスタイル付けされていないコンテンツ (FOUC) が一瞬表示されるかもしれないことに注意してください。

最近のブラウザーの多くは、共通のノードからクローンされた、あるいは同一のテキストを持つ {{htmlelement("style")}} タグに対して、単一のバッキングスタイルシートを共有できるようにする最適化を実装しています。この最適化によって、外部スタイルでも内部スタイルでも性能は同程度になるはずです。

### カスタム組み込み要素

ここで、もう 1 つの組み込み要素の例を見てみましょう。この例は、組み込みの {{HTMLElement("ul")}} 要素を拡張して、リストアイテムが展開・収納するするようにします。

- [この例のライブ実行を確認](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [ソースコードを参照](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> カスタム組み込み要素の実装に関する注意事項については、[`is`](/ja/docs/Web/HTML/Global_attributes/is) 属性のリファレンスを参照してください。

まず始めに、これまでと同様の方法でクラス要素を定義します。

```js
// 要素のためのクラスを作成
class ExpandingList extends HTMLUListElement {
  constructor() {
    // コンストラクターでは super を常に最初に呼び出す
    // super() の返値はこの要素への参照
    self = super();
  }

  connectedCallback() {
    // このカスタム ul 要素の子である ul および li 要素を取得する
    // li 要素は、その中に ul がある場合、コンテナーとして機能する
    const uls = Array.from(self.querySelectorAll("ul"));
    const lis = Array.from(self.querySelectorAll("li"));
    // すべての子の ul を隠す
    // これらのリストは、ユーザーが上位レベルのコンテナーをクリックしたときに表示される
    uls.forEach((ul) => {
      ul.style.display = "none";
    });

    // ul内のli要素をそれぞれ見ていく
    lis.forEach((li) => {
      // この li に ul が子要素としてある場合、クリックハンドラーを追加する
      if (li.querySelectorAll("ul").length > 0) {
        // スタイル設定で使用できる属性を追加し、
        // 開く・閉じるアイコンを表示させる
        li.setAttribute("class", "closed");

        // li 要素のテキストを新しい span 要素で囲むことで、
        // span にスタイルやイベントハンドラーを割り当てることができる
        const childText = li.childNodes[0];
        const newSpan = document.createElement("span");

        // li から span にテキストをコピーし、カーソルスタイルを設定
        newSpan.textContent = childText.textContent;
        newSpan.style.cursor = "pointer";

        // この span にクリックハンドラーを追加
        newSpan.addEventListener("click", (e) => {
          // span 要素の次兄弟要素は ul であるはず
          const nextul = e.target.nextElementSibling;

          // 表示状態を切り替え、ul の class 属性を更新
          if (nextul.style.display == "block") {
            nextul.style.display = "none";
            nextul.parentNode.setAttribute("class", "closed");
          } else {
            nextul.style.display = "block";
            nextul.parentNode.setAttribute("class", "open");
          }
        });
        // span を追加し、li から裸のテキストノードを除去
        childText.parentNode.insertBefore(newSpan, childText);
        childText.parentNode.removeChild(childText);
      }
    });
  }
}
```

なお、今回は {{domxref("HTMLElement")}} ではなく、{{domxref("HTMLUListElement")}} を拡張しています。 つまり、リストの既定の動作が得られ、独自のカスタマイズのみを実装すればよいということです。

前回と同様に、コードのほとんどは `connectedCallback()` ライフサイクルコールバック内にあります。

次に、前回と同様に `define()` メソッドを使用して要素を登録しますが、今回は、カスタム要素が継承する要素の詳細を記載した options オブジェクトも含めます。

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

ウェブ文書内で組み込み要素を使用すると、また少し違った見え方になります。

```html
<ul is="expanding-list">
  …
</ul>
```

通常のように `<ul>` を使用していますが、カスタム要素の名前が `is` 属性で指定されています。

この場合、DOM が完全に解釈された後にカスタム要素を定義するスクリプトが実行されるように保証する必要があります。`connectedCallback()` は展開されたリストが DOM に追加されると同時に呼び出されますが、その時点では子要素はまだ追加されていないため、`querySelectorAll()` の呼び出しでは何も見つかりません。これを保証する一つの方法は、スクリプトを記載する行に [defer](/ja/docs/Web/HTML/Element/script#defer) 属性を追加することです。

```html
<script src="main.js" defer></script>
```

## ライフサイクルコールバック

これまでは、`connectedCallback()` というライフサイクルコールバックが 1 つだけ動作しているのを見てきました。最後の例である `<custom-square>` では、他にもいくつか見ていきます。この例では、自律型のカスタム要素 `<custom-square>` を紹介します。これは、名前付きの 2 つの属性 `"size"` および `"color"` によってサイズと色が決定される四角形を描画します。

- [この例のライブ実行を確認](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [ソースコードを参照](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

クラスのコンストラクターでは、要素にシャドウ DOM を割り当て、空の {{htmlelement("div")}} および {{htmlelement("style")}} 要素をシャドウルートに追加します。

```js
constructor() {
  // コンストラクターでは super を常に最初に呼び出す
  super();

const shadow = this.attachShadow({ mode: "open" });

const div = document.createElement("div");
const style = document.createElement("style");
shadow.appendChild(style);
shadow.appendChild(div);
}
```

この例の主要な機能は `updateStyle()` です。これは要素を取得し、シャドウルートを取得し、その `<style>` 要素を見つけて、{{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}} をそのスタイルに追加します。

```js
function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector("style").textContent = `
    div {
      width: ${elem.getAttribute("size")}px;
      height: ${elem.getAttribute("size")}px;
      background-color: ${elem.getAttribute("color")};
    }
  `;
}
```

実際の更新はすべて、メソッドとしてクラス定義内に配置されているライフサイクルコールバックによって処理されます。 `connectedCallback()` は、要素が DOM に追加されるたびに実行されます。ここでは、 `updateStyle()` 関数を実行して、正方形がその属性で定義されたスタイルになっていることを確認します。

```js
connectedCallback() {
  console.log("Custom square element added to page.");
  updateStyle(this);
}
```

`disconnectedCallback()` および `adoptedCallback()` コールバックは、要素が DOM から削除されるか、別のページに移動されたときに通知する単純なメッセージをコンソールに記録します。

```js
disconnectedCallback() {
  console.log("Custom square element removed from page.");
}

adoptedCallback() {
  console.log("Custom square element moved to new page.");
}
```

`attributeChangedCallback()` コールバックは、要素の属性の 1 つが何らかの方法で変更されるたびに実行されます。その引数からわかるように、属性、属性の名前、および古い属性値と新しい属性値を個別に操作することができます。ただし、この場合は、`updateStyle()` 関数を再度実行して、新しい値に従って正方形のスタイルが更新されるようにします。

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log("Custom square element attributes changed.");
  updateStyle(this);
}
```

ある属性が変更されたときに起動する `attributeChangedCallback()` コールバックを取得するには、その属性を監視する必要があることに注意してください。これは、カスタム要素クラス内で `static get observedAttributes()` メソッドを定義することによって行われます。これは、監視したい属性の名前を含む配列を返すようにしてください。

```js
static get observedAttributes() {
  return ["color", "size"];
}
```
