---
title: NavigatorLanguage
slug: orphaned/Web/API/NavigatorLanguage
tags:
  - API
  - HTML-DOM
  - NeedsTranslation
  - No Interface
  - Reference
  - TopicStub
translation_of: Web/API/NavigatorLanguage
original_slug: Web/API/NavigatorLanguage
browser-compat: api.NavigatorLanguage
---
{{APIRef("HTML DOM")}}

**`NavigatorLanguage`** contains methods and properties related to the language of the navigator.

There is no object of type `NavigatorLanguage`, but other interfaces, like {{domxref("Navigator")}} or {{domxref("WorkerNavigator")}}, implement it.

## Properties

_The `NavigatorLanguage`_ _interface doesn't inherit any property._

- {{domxref("NavigatorLanguage.language")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} representing the preferred language of the user, usually the language of the browser UI. The `null` value is returned when this is unknown.
- {{domxref("NavigatorLanguage.languages")}} {{readonlyInline}}
  - : Returns an array of {{domxref("DOMString")}} representing the languages known to the user, by order of preference.

## Methods

_The_ _`NavigatorLanguage`_ _interface neither implements, nor inherit any method._

## Especificaciones

{{Specifications}}

## Compatibilidad de Navegadores

{{Compat}}

## See also

- The {{domxref("Navigator")}} interface that implements it.
