---
title: UIEvent.view
slug: Web/API/UIEvent/view
tags:
  - API
  - DOM
  - NeedsLiveExample
  - プロパティ
  - 読み取り専用
  - リファレンス
  - UIEvent
browser-compat: api.UIEvent.view
translation_of: Web/API/UIEvent/view
---
{{APIRef("DOM Events")}}

**`UIEvent.view`** は読み取り専用のプロパティで、イベントを生成したものの {{domxref("WindowProxy")}} オブジェクトを返します。ブラウザーでは、これはイベントが発行された {{ domxref("Window") }} です。

## 構文

```js
var view = event.view;
```

- `view` は `AbstractView` オブジェクトの参照です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
