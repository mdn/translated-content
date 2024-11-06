---
title: ShadowRoot
slug: Web/API/ShadowRoot
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef('Shadow DOM')}}

**`ShadowRoot`** はシャドウ DOM API のインターフェイスで、文書の DOM ツリーから分離してレンダリングされた部分ツリーのルートノードを指します。

要素のシャドウルートへの参照は {{domxref("Element.shadowRoot")}} プロパティで受け取ることができます。これは {{domxref("Element.attachShadow()")}} で `mode` オプションが `open` に設定されて作成されたときに提供されます。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("ShadowRoot.activeElement")}} {{ReadOnlyInline}}
  - : フォーカスを持っているシャドウツリー内の {{domxref('Element')}} を返します。
- {{domxref("ShadowRoot.adoptedStyleSheets")}}
  - : シャドウ DOM のサブツリーで使用するために構築されたスタイルシートの配列を追加します。
    これらは、同じ親 {{domxref("Document")}} ノードを共有する他の DOM サブツリーや、文書自身と共有されることがあります。
- {{domxref("ShadowRoot.clonable")}} {{ReadOnlyInline}}
  - : 論理値で、シャドウルートがクローン可能であるかどうかを示します。
- {{domxref("ShadowRoot.delegatesFocus")}} {{ReadOnlyInline}}
  - : 論理値で、フォーカスできないノードが選択された場合に、シャドウルートがフォーカスを譲るかどうかを示します。
- {{DOMxRef("ShadowRoot.fullscreenElement")}} {{ReadOnlyInline}}
  - : このシャドウツリーで現在全画面モードになっている要素です。
- {{domxref("ShadowRoot.host")}} {{ReadOnlyInline}}
  - : `ShadowRoot` が取り付けられた DOM 要素への参照を返します。
- {{domxref("ShadowRoot.innerHTML")}}
  - : `ShadowRoot` の内部の DOM ツリーへの参照を設定したり返却したりします。
- {{domxref("ShadowRoot.mode")}} {{ReadOnlyInline}}
  - : `ShadowRoot` のモードで `open` または `closed` の値を取ります。
    これはシャドウルートの内部の機能に JavaScript からアクセスできるかどうかを定義します。
- {{DOMxRef("ShadowRoot.pictureInPictureElement")}} {{ReadOnlyInline}}
  - : シャドウツリー内で現在ピクチャインピクチャモードで表示されている {{DOMxRef('Element')}} を返します。
- {{DOMxRef("ShadowRoot.pointerLockElement")}} {{ReadOnlyInline}}
  - : ポインターがロックされている間、マウスイベントのターゲットとして設定されている {{DOMxRef('Element')}} を返します。
    ロックが保留中か、ポインターがロックされていないか、ターゲットがほかのツリーにある場合は `null` を返します。
- {{DOMxRef("ShadowRoot.serializable")}} {{ReadOnlyInline}}
  - : 論理値で、シャドウルートがシリアライズ可能かどうかを示します。
    要素内のシリアライズ可能なシャドウルートは、[`options.serializableShadowRoots`](/ja/docs/Web/API/Element/getHTML#serializableshadowroots) 引数が `true` に設定されている場合、{{DOMxRef('Element.getHTML()')}} または {{DOMxRef('ShadowRoot.getHTML()')}} によってシリアライズされます。
    これは、シャドウルートが作成される際に設定されます。
- {{DOMxRef("ShadowRoot.slotAssignment")}} {{ReadOnlyInline}}
  - : スロット割り当ての型（`manual` または `named`）を持つ文字列を返します。
- {{domxref("ShadowRoot.styleSheets")}} {{ReadOnlyInline}}
  - : シャドウツリーに明示的にリンクされている、または埋め込まれている {{domxref('CSSStyleSheet')}} オブジェクトの {{domxref('StyleSheetList')}} を返します。

## インスタンスメソッド

- {{DOMxRef("ShadowRoot.getAnimations()")}}
  - : 現在有効なすべての {{DOMxRef("Animation")}} オブジェクトのうち、ターゲット要素がシャドウツリーの子孫であるものの配列を返します。
- {{domxref("ShadowRoot.getSelection()")}} {{Non-standard_Inline}}
  - : ユーザーによって選択されたテキストの範囲または現在のキャレットの位置を表現する {{domxref('Selection')}} オブジェクトを返します。
- {{domxref("ShadowRoot.elementFromPoint()")}} {{Non-standard_Inline}}
  - : 指定された座標における最上位の要素を返します。
- {{domxref("ShadowRoot.elementsFromPoint()")}} {{Non-standard_Inline}}
  - : 指定された座標における全要素からなる配列を返します。
- {{DOMxRef("ShadowRoot.setHTMLUnsafe()")}}
  - : HTML 文字列を、無害化せずに文書フラグメントとして解析し、シャドウルートに元から存在するサブツリーを置き換えます。HTML 文字列には宣言型のシャドウルートを記載することができます。これは、[`ShadowRoot.innerHTML`](#shadowroot.innerhtml) を使用して設定された HTML のテンプレート要素として解釈されます。

## イベント

以下のイベントは {{domxref("HTMLSlotElement")}} からのイベントバブリングによって `ShadowRoot` で利用できます。

- `HTMLSlotElement` {{domxref("HTMLSlotElement.slotchange_event", "slotchange")}} event
  - : そのスロットに含まれるノードが変更されたときに発行されるイベント。

## 例

以下のコードは、サイズと色の属性が指定された四角形の要素を作る [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks) の例です。 ([ライブでも確認](https://mdn.github.io/web-components-examples/life-cycle-callbacks/))

`<custom-square>` 要素のクラス定義の中に、外部関数である `updateStyle()` を呼び出すライフサイクルコールバックが含まれています。`updateStyle()` は要素のサイズと色を適用します。`this` (カスタム要素自身) を引数として関数に渡していることが分かるでしょう。

```js
connectedCallback() {
  console.log('四角形のカスタム要素がページに追加されました。');
  updateStyle(this);
}

attributeChangedCallback(name, oldValue, newValue) {
  console.log('四角形のカスタム要素の属性が変更されました。');
  updateStyle(this);
}
```

`updateStyle()` 関数の中では、{{domxref("Element.shadowRoot")}} を利用してシャドウ DOM への参照を取得しています。シャドウ DOM 内では、標準的な DOM の探索手法を用いて {{htmlelement("style")}} を探し、CSS を更新しています。

```js
function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  const childNodes = shadow.childNodes;
  for (const node of childNodes) {
    if (node.nodeName === "STYLE") {
      node.textContent = `
div {
  width: ${elem.getAttribute("l")}px;
  height: ${elem.getAttribute("l")}px;
  background-color: ${elem.getAttribute("c")};
}
      `;
    }
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
