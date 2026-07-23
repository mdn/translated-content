---
title: "CustomElementRegistry: CustomElementRegistry() コンストラクター"
short-title: CustomElementRegistry()
slug: Web/API/CustomElementRegistry/CustomElementRegistry
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

{{APIRef("Web Components")}}

**`CustomElementRegistry()`** コンストラクターは、スコープ付きの用途のために新しい {{domxref("CustomElementRegistry")}} オブジェクトを作成します。

このコンストラクターは、[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)の定義を、要素や {{domxref("ShadowRoot")}} などの特定のスコープに制限する、スコープ付きレジストリーを作成するために特化して使用されます。

> [!NOTE]
> グローバルな `CustomElementRegistry` オブジェクトは、{{domxref("Window")}} に関連付けられていますが、このコンストラクターを使用して作成されるわけではありません。このオブジェクトは、ウィンドウの初期化時に自動的に作成され、{{domxref("window.customElements")}} プロパティを介してアクセスできます。

## 構文

```js-nolint
new CustomElementRegistry()
```

### 引数

なし。

### 返値

新しい {{domxref("CustomElementRegistry")}} オブジェクトです。

## 解説

`CustomElementRegistry` を `new CustomElementRegistry()` で構築すると、その結果として生成されるレジストリーはスコープ付きとみなされます。これは、次のことを意味します。

- {{domxref("CustomElementRegistry.define", "define()")}} を使用してこのレジストリーに追加されたカスタム要素の定義は、グローバルには利用できません。これらは、このレジストリーに関連付けられたノードにのみ適用されます。
- `define()` の `extends` オプション（[カスタム組み込み要素](/ja/docs/Web/API/Web_components/Using_custom_elements#カスタム要素の種類)を作成するためのもの）は対応していません。スコープ付きレジストリーで `extends` を使用しようとすると、`NotSupportedError` {{domxref("DOMException")}} が発生します。

スコープ付きレジストリーを DOM サブツリーに関連付けるには、{{domxref("CustomElementRegistry.initialize()", "initialize()")}} メソッドを使用し、これを {{domxref("Element.attachShadow()")}} に渡すか、{{domxref("Document.createElement()")}} メソッドの `customElementRegistry` オプションを使用することもできます。

## 例

### スコープ付きカスタム要素レジストリーの作成

この例では、スコープ付きレジストリーを生成し、その上に独自の要素を定義して、そのレジストリーを {{domxref("Element.attachShadow()")}} に渡しています。`<my-element>` を含む HTML がシャドウルートに追加されると、その要素はスコープ付きレジストリーの定義を使用してアップグレードされます。

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
const shadow = host.attachShadow({
  mode: "open",
  customElementRegistry: myRegistry,
});
shadow.innerHTML = "<my-element></my-element>";

console.log(shadow.querySelector("my-element").textContent);
// "スコープ付きレジストリーからこんにちは!"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [カスタム要素の使用](/ja/docs/Web/API/Web_components/Using_custom_elements)
- {{domxref("CustomElementRegistry.initialize()")}}
- {{domxref("CustomElementRegistry.define()")}}
