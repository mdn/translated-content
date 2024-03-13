---
title: "Element: attachShadow() メソッド"
short-title: attachShadow()
slug: Web/API/Element/attachShadow
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef('Shadow DOM')}}

**`Element.attachShadow()`** メソッドは、シャドウ DOM ツリーを特定の要素に追加し、そのシャドウルート ({{domxref("ShadowRoot")}}) への参照を返します。

## シャドウツリーを追加できる要素

シャドウルートはすべての要素に追加できるわけではありません。セキュリティ上の理由でシャドウ DOM を持てないものもあります（{{htmlelement("a")}} など）。

以下にシャドウルートを追加**できる**要素を列挙します。

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

## 構文

```js-nolint
attachShadow(options)
```

### 引数

- `options`

  - : 以下のフィールドを含むオブジェクトです。

    - `mode`

      - : 文字列で、シャドウ DOM ツリーの*カプセル化モード*を指定します。
        以下のいずれかをの値を取ります。

        - `open`

          - : シャドウルートの要素には、例えば {{domxref("Element.shadowRoot")}} を使用して、ルートの外部の JavaScript からアクセスできます。

            ```js
            element.attachShadow({ mode: "open" });
            element.shadowRoot; // ShadowRoot オブジェクトを返す
            ```

        - `closed`

          - : 閉じたシャドウルートに対する外部の JavaScript からのアクセスを拒否します。

            ```js
            element.attachShadow({ mode: "closed" });
            element.shadowRoot; // null を返す
            ```

    - `delegatesFocus` {{Optional_Inline}}

      - : 論理値で、 `true` に設定された場合、フォーカス可能性に関するカスタム要素の問題を緩和します。シャドウ DOM のフォーカスができない部分がクリックされた場合、最初のフォーカス可能な部分がフォーカスを得て、シャドウホストは `:focus` のスタイルを利用することができます。既定値は `false` です。

    - `slotAssignment` {{Optional_inline}}

      - : シャドウ DOM ツリーの _スロット割り当てモード_ を指定します。これは以下のいずれかです。

        - `named`
          - : 要素は自動的にこのシャドウルート内の {{HTMLElement("slot")}} 要素に割り当てられます。このシャドウルート内の `<slot>` の `name` 属性と一致する `slot` 属性を持つホスティングの子孫は、そのスロットに割り当てられます。ホスティングの最上位の子で `slot` 属性を持たないものは、 `name` 属性を持たない `<slot>`（「既定のスロット」）が存在する場合、そのスロットに割り当てられます。
        - `manual`
          - : 要素は自動的に {{HTMLElement("slot")}} 要素に割り当てることはできません。代わりに、{{domxref("HTMLSlotElement.assign()")}} で手動で割り当てる必要があります。
            既定値は `named` です。

### 返値

{{domxref("ShadowRoot")}} オブジェクトです。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 取り付けようとしている要素が既にシャドウホストである場合。
- `NotSupportedError` {{domxref("DOMException")}}
  - : シャドウルートを HTML 名前空間外の要素に取り付けようとした場合、シャドウを取り付けられない要素であった場合、要素の定義で静的プロパティ `disabledFeatures` が `"shadow"` の値であった場合。

## 例

以下の例は [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) のデモを使用しています([実行例](https://mdn.github.io/web-components-examples/word-count-web-component/))。
コードの途中で `attachShadow()` を使ってシャドウルートを作成し、そこにカスタム要素の中身を取り付けているのがわかると思います。

```js
// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    const wcParent = this.parentNode;

    function countWords(node) {
      const text = node.innerText || node.textContent;
      return text
        .trim()
        .split(/\s+/g)
        .filter((a) => a.trim().length > 0).length;
    }

    const count = `Words: ${countWords(wcParent)}`;

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create text node and add word count to it
    const text = document.createElement("span");
    text.textContent = count;

    // Append it to the shadow root
    shadow.appendChild(text);

    // Update count when element content changes
    setInterval(() => {
      const count = `Words: ${countWords(wcParent)}`;
      text.textContent = count;
    }, 200);
  }
}

// Define the new element
customElements.define("word-count", WordCount, { extends: "p" });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ShadowRoot.mode")}}
- {{domxref("ShadowRoot.delegatesFocus")}}
- {{domxref("ShadowRoot.slotAssignment")}}
