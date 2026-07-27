---
title: "Element: customElementRegistry プロパティ"
short-title: customElementRegistry
slug: Web/API/Element/customElementRegistry
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

**`customElementRegistry`** は {{domxref("Element")}} インターフェイスの読み取り専用プロパティで、この要素に関連付けられた {{domxref("CustomElementRegistry")}} オブジェクトを、設定されていない場合は `null` を返します。

要素の `customElementRegistry` は、要素が作成されたときに設定されます（例えば {{domxref("Document.createElement()")}} の使用時に `customElementRegistry` オプションを指定した場合や、スコープ付きのレジストリーを持つコンテキストで構文解析された場合など）。一度 `CustomElementRegistry` オブジェクトが設定されると、変更することはできません。このレジストリーは、要素をどの[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)定義を使用して[アップグレード](/ja/docs/Web/API/CustomElementRegistry/upgrade)するかを決定します。

## 値

{{domxref("CustomElementRegistry")}} オブジェクト、または `null` です。

## 例

### 要素のカスタム要素レジストリーへアクセス

この例では、スコープ付きレジストリーをを作成し、それをシャドウルートに接続します。その後、シャドウツリー内の要素から `customElementRegistry` プロパティを読み取り、それがスコープ付きレジストリーと一致することを確認します。

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

const el = shadow.querySelector("my-element");
console.log(el.customElementRegistry === myRegistry); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.customElementRegistry")}}
- {{domxref("ShadowRoot.customElementRegistry")}}
- {{domxref("CustomElementRegistry")}}
- [カスタム要素の使用](/ja/docs/Web/API/Web_components/Using_custom_elements)
