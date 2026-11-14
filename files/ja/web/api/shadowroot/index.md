---
title: ShadowRoot
slug: Web/API/ShadowRoot
l10n:
  sourceCommit: a23122d0e86fb376234614beb5b350b217068054
---

{{APIRef("Shadow DOM")}}

**`ShadowRoot`** は[シャドウ DOM API](/ja/docs/Web/API/Web_components/Using_shadow_DOM) のインターフェイスで、文書のメイン DOM ツリーとは別にレンダリングされる DOM サブツリーのルートノードです。

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
- {{domxref("ShadowRoot.customElementRegistry")}} {{ReadOnlyInline}}
  - : このシャドウルートに関連付けられた {{domxref("CustomElementRegistry")}} オブジェクトを返します。設定されていない場合は `null` を返します。
- {{domxref("ShadowRoot.delegatesFocus")}} {{ReadOnlyInline}}
  - : 論理値で、フォーカスできないノードが選択された場合に、シャドウルートがフォーカスを譲るかどうかを示します。
- {{DOMxRef("ShadowRoot.fullscreenElement")}} {{ReadOnlyInline}}
  - : このシャドウツリーで現在全画面表示になっている要素です。
- {{domxref("ShadowRoot.host")}} {{ReadOnlyInline}}
  - : `ShadowRoot` が取り付けられた DOM 要素への参照を返します。
- {{domxref("ShadowRoot.innerHTML")}}
  - : `ShadowRoot` 内の DOM ツリーを設定または返します。
- {{domxref("ShadowRoot.mode")}} {{ReadOnlyInline}}
  - : `ShadowRoot` のモードで `open` または `closed` の値を取ります。
    これはシャドウルートの内部の機能に JavaScript からアクセスできるかどうかを定義します。
- {{DOMxRef("ShadowRoot.pictureInPictureElement")}} {{ReadOnlyInline}}
  - : シャドウツリー内で現在ピクチャインピクチャモードで表示されている {{DOMxRef('Element')}} を返します。
- {{DOMxRef("ShadowRoot.pointerLockElement")}} {{ReadOnlyInline}}
  - : ポインターがロックされている間、マウスイベントのターゲットとして設定されている {{DOMxRef('Element')}} を返します。
    ロックが保留中か、ポインターがロックされていないか、ターゲットがほかのツリーにある場合は `null` を返します。
- `ShadowRoot.referenceTarget` {{Experimental_Inline}} {{non-standard_inline}}
  - : シャドウホストをホスト要素の外部から参照したときの、参照の実効的な対象を示す null 許容の文字列です。この値には、シャドウ DOM 内の要素の ID を指定します。設定すると、シャドウ DOM の外部からホスト要素を参照したとき、その参照の実効的な対象が指定した要素になります。
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
- {{DOMxRef("ShadowRoot.setHTML()")}}
  - : HTML 文字列を構文解析・無害化して {{domxref("DocumentFragment")}} に変換し、それをシャドウ DOM 内の既存のツリーと置き換える、XSS 対策済みの安全な方法を提供します。
- {{DOMxRef("ShadowRoot.setHTMLUnsafe()")}}
  - : HTML 文字列を無害化せずに文書フラグメントとして構文解析し、シャドウルートに元から存在するサブツリーと置き換えます。HTML 文字列には宣言型シャドウルートを含めることができます。これは、[`ShadowRoot.innerHTML`](/ja/docs/Web/API/ShadowRoot/innerHTML) を使用して HTML を設定した場合と同様に、テンプレート要素として構文解析されます。

## イベント

以下のイベントは {{domxref("HTMLSlotElement")}} からのイベントバブリングによって `ShadowRoot` で利用できます。

- `HTMLSlotElement` {{domxref("HTMLSlotElement.slotchange_event", "slotchange")}} event
  - : そのスロットに含まれるノードが変更されたときに発行されるイベント。

## 例

以下のコードは、要素の属性で指定されたサイズと色の四角形を表示する [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks) の例から抜粋したものです（[ライブデモ](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)も確認してください）。

`<custom-square>` 要素のクラス定義には、外部関数 `updateStyle()` を呼び出すライフサイクルコールバックが含まれています。この関数が要素にサイズと色を適用します。引数として `this`（カスタム要素自身）を渡していることが分かります。

```js
class Square extends HTMLElement {
  // …
  connectedCallback() {
    console.log("四角形のカスタム要素がページに追加されました。");
    updateStyle(this);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("四角形のカスタム要素の属性が変更されました。");
    updateStyle(this);
  }
  // …
}
```

`updateStyle()` 関数内では、{{domxref("Element.shadowRoot")}} を使用してシャドウ DOM への参照を取得します。標準的な DOM の探索手法でシャドウ DOM 内の {{htmlelement("style")}} 要素を見つけ、その中の CSS を更新します。

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

## 関連情報

- [シャドウ DOM の使用](/ja/docs/Web/API/Web_components/Using_shadow_DOM)
- [ウェブコンポーネント](/ja/docs/Web/API/Web_components)
