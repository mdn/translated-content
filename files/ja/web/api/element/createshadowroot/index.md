---
title: Element.createShadowRoot()
slug: Web/API/Element/createShadowRoot
tags:
  - API
  - Deprecated
  - Element
  - メソッド
  - Non-standard
  - リファレンス
  - shadow dom
browser-compat: api.Element.createShadowRoot
---
{{APIRef('Shadow DOM')}}{{non-standard_header}}{{deprecated_header}}

Use `Element.createShadowRoot` to create an instance of [shadow DOM](/ja/docs/Web/Web_Components/Using_shadow_DOM). When shadow DOM is
created, it is always attached to an existing element. After the shadow DOM is created,
the element that it is attached to is called the {{glossary("shadow root")}}.

> **Note:** This method has been deprecated in favor of
> {{DOMxRef("Element.attachShadow()","attachShadow()")}}.

## 構文

```js
var shadowroot = element.createShadowRoot();
```

### 引数

No parameters.

### Result value

Returns a {{DOMxRef("ShadowRoot")}}.

## 仕様書

This feature is no longer defined by any specifications.

## ブラウザーの互換性

{{Compat}}
