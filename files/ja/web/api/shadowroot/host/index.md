---
title: "ShadowRoot: host プロパティ"
short-title: host
slug: Web/API/ShadowRoot/host
l10n:
  sourceCommit: 584e1d86cc4d770f43b32ec62613a4840d2821db
---

{{APIRef("Shadow DOM")}}

**`host`** は {{domxref("ShadowRoot")}} の読み取り専用プロパティで、 `ShadowRoot` が装着されている DOM 要素の参照を返します。

## 値

DOM の {{domxref('Element')}} です。

## 例

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// 後で、元のホスト要素を返す
let hostElem = shadow.host;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`part`](/ja/docs/Web/HTML/Reference/Global_attributes/part) および [`exportparts`](/ja/docs/Web/HTML/Reference/Global_attributes/exportparts) 属性
- HTML の {{HTMLelement("template")}} および {{HTMLElement("slot")}} 要素
- CSS の {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}}, {{CSSXref(":host-context", ":host-context()")}} 擬似クラス
- CSS の {{CSSXref("::part")}} および {{CSSXref("::slotted")}} 擬似クラス
