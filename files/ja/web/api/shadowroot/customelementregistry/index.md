---
title: "ShadowRoot: customElementRegistry プロパティ"
short-title: customElementRegistry
slug: Web/API/ShadowRoot/customElementRegistry
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

**`customElementRegistry`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、このシャドウルートに関連付けられた {{domxref("CustomElementRegistry")}} オブジェクトを、設定されていない場合は `null` を返します。

シャドウルートの `customElementRegistry` は、そのシャドウツリー内の要素を、どの[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)定義が使用してアップグレードするかを決定します。これは、シャドウルートが作成される際に {{domxref("Element.attachShadow()")}} の `customElementRegistry` オプションを介して設定するか、あるいは後で {{domxref("CustomElementRegistry.initialize()")}} を使用して設定することができます。一度 `CustomElementRegistry` オブジェクトに設定されると、変更することはできません。

このプロパティは、{{domxref("Document")}} オブジェクト上でも、同時に {{domxref("Document/customElementRegistry","customElementRegistry")}} というプロパティ名を通じて利用可能です。

## 値

{{domxref("CustomElementRegistry")}} オブジェクト、または `null` です。

## 例

### シャドウツリーにスコープ付きレジストリーを設定

この例では、カスタム要素定義を含むスコープ付きレジストリーを作成し、それを {{domxref("Element.attachShadow()")}} に渡しています。その結果として生成されるシャドウルートの `customElementRegistry` プロパティには、そのスコープ付きレジストリーが反映されます。

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

console.log(shadow.customElementRegistry === myRegistry); // true
console.log(shadow.querySelector("my-element").textContent);
// "スコープ付きレジストリーからこんにちは!"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.customElementRegistry")}}
- {{domxref("Element.customElementRegistry")}}
- {{domxref("CustomElementRegistry")}}
- {{domxref("CustomElementRegistry.CustomElementRegistry()", "CustomElementRegistry()")}} コンストラクター
- {{domxref("Element.attachShadow()")}}
- [カスタム要素の使用](/ja/docs/Web/API/Web_components/Using_custom_elements)
- [シャドウ DOM の使用](/ja/docs/Web/API/Web_components/Using_shadow_DOM)
