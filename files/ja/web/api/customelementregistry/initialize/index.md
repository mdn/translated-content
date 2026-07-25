---
title: "CustomElementRegistry: initialize() メソッド"
short-title: initialize()
slug: Web/API/CustomElementRegistry/initialize
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

**`initialize()`** は {{domxref("CustomElementRegistry")}} インターフェイスのメソッドで、このレジストリーを DOM サブツリーに関連付け、まだレジストリーを持っていない配下の子孫要素に対して {{domxref("Element.customElementRegistry", "customElementRegistry")}} を設定し、それぞれの[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)をアップグレードしようとします。

## 構文

```js-nolint
initialize(root)
```

### 引数

- `root`
  - : {{domxref("Node")}} オブジェクト（通常は {{domxref("Document")}}、{{domxref("ShadowRoot")}}、{{domxref("Element")}} のいずれか）で、このレジストリーをその中に含まれる子孫要素に関連付けるもの。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : この `CustomElementRegistry` がスコープ外である場合（つまり、`new CustomElementRegistry()` で作成されていない場合）、かつ `root` が {{domxref("Document")}} ノードであるか、あるいは `root` のノードの文書の {{domxref("Document.customElementRegistry", "customElementRegistry")}} がこの `CustomElementRegistry` ではない場合に、この例外が発生します。

## 解説

`initialize()` が呼び出されると、`root` に含まれる子孫要素をツリー順に走査します。各要素（またはルートなる `Document`/`ShadowRoot`）について、{{domxref("Element.customElementRegistry", "customElementRegistry")}} が `null` であった場合、そのレジストリーをこの `CustomElementRegistry` に設定します。その後、`customElementRegistry`がこのレジストリーと一致するそれぞれの要素に対して、[アップグレード](/ja/docs/Web/API/CustomElementRegistry/upgrade)を試みます。

ひとたびノードの `customElementRegistry` が `CustomElementRegistry` オブジェクトに設定されると、それを変更することはできません。つまり、`initialize()` メソッドは、レジストリーが `null` であるノードに対してのみレジストリーを設定できます。ただし、[アップグレード](/ja/docs/Web/API/CustomElementRegistry/upgrade)については、新しく代入された要素だけでなく、`customElementRegistry` がすでにこのレジストリーと一致している要素に対しても行われます。

ノードは、次のような状況において、カスタム要素レジストリーが `null` になります。

- {{domxref("DOMImplementation.createHTMLDocument()")}} によって作成された文書。この関数のカスタム要素レジストリーは、デフォルトで `null` です。このような文書内で作成された要素のレジストリーも `null` になります。
- {{domxref("Element.attachShadow()")}} を用いて、`customElementRegistry` を `null` に設定して作成されたシャドウルート。
- {{HTMLElement("template")}} 要素から作成される、`shadowrootcustomelementregistry` 属性を持つ宣言型シャドウルート。この属性は、HTML パーサーに対し、シャドウルートの独自の要素レジストリーを `null` のままにするよう指示するものです。

## 例

### シャドウルートをスコープ付きレジストリーを添付して初期化

この例では、カスタム要素レジストリーを使用せずにシャドウルートを生成し、カスタム要素を含む HTML を追加した後、`initialize()` を呼び出してスコープ付きレジストリーを関連付けます。`initialize()` がシャドウルートとその子要素にレジストリーを設定すると、`<my-element>` 要素がアップグレードされます。

```js
const myRegistry = new CustomElementRegistry();
myRegistry.define(
  "my-element",
  class extends HTMLElement {
    connectedCallback() {
      this.textContent = "スコープ付きレジストリーからこんにちは!";
    }
  },
);

const host = document.createElement("div");
document.body.appendChild(host);

// レジストリーを使用せずにシャドウ DOM 構造を生成する
const shadow = host.attachShadow({
  mode: "open",
  customElementRegistry: null,
});
shadow.innerHTML = "<my-element></my-element>";

// その後、スコープ付きレジストリーを関連付け、独自の要素をアップグレードする
myRegistry.initialize(shadow);

console.log(shadow.querySelector("my-element").textContent);
// "スコープ付きレジストリーからこんにちは!"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [カスタム要素の使用](/ja/docs/Web/API/Web_components/Using_custom_elements)
- {{domxref("CustomElementRegistry.CustomElementRegistry()", "CustomElementRegistry()")}} コンストラクター
- {{domxref("CustomElementRegistry.define()")}}
- {{domxref("CustomElementRegistry.upgrade()")}}
