---
title: Element.openOrClosedShadowRoot
slug: Web/API/Element/openOrClosedShadowRoot
tags:
  - API
  - Add-ons
  - Element
  - 拡張機能
  - Mozilla
  - 特権が必要
  - 標準外
  - プロパティ
  - リファレンス
  - WebExtensions
  - openOrClosedShadowRoot
  - シャドウ DOM
browser-compat: api.Element.openOrClosedShadowRoot
translation_of: Web/API/Element/openOrClosedShadowRoot
---
{{APIRef("Shadow DOM")}}{{non-standard_header}}

> **Note:** この API は [WebExtensions](/ja/docs/Mozilla/Add-ons/WebExtensions) でのみ使用できます。

`Element.openOrClosedShadowRoot` は読み取り専用プロパティで、この要素が保持しているシャドウルートを、 {{DOMxRef("ShadowRoot.mode", "mode")}} が `open` であるか `closed` であるかに関わらず表します。

{{DOMxRef("Element.attachShadow()")}} を使用すると、シャドウルートを既存の要素に追加することができます。

## 構文

```js
var shadowroot = element.openOrClosedShadowRoot;
```

### 値

{{DOMxRef("ShadowRoot")}} オブジェクトインスタンスで、 {{DOMxRef("ShadowRoot.mode", "mode")}} が `open` と `closed` のどちらに設定されていても取得できます。シャドウルートが存在しない場合は `null` です。
（詳細は {{DOMxRef("Element.attachShadow()")}} を参照してください。）

## 仕様書

_このプロパティは仕様書にはありません。_

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Element.shadowRoot")}}
