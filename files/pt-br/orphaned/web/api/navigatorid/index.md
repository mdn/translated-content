---
title: NavigatorID
slug: orphaned/Web/API/NavigatorID
---

{{APIRef("HTML DOM")}}

The **`NavigatorID`** interface contains methods and properties related to the identity of the browser.

There is no object of type `NavigatorID`, but other interfaces, like {{domxref("Navigator")}} or {{domxref("WorkerNavigator")}}, implement it.

## Properties

_The `NavigatorID`_ _interface doesn't inherit any property._

- {{domxref("NavigatorID.appCodeName")}} {{readonlyInline}}{{deprecated_inline}}
  - : Always returns `'Mozilla'`, on any browser. This property is kept only for compatibility purpose.
- {{domxref("NavigatorID.appName")}} {{readonlyInline}} {{deprecated_inline}}
  - : Returns the official name of the browser. Do not rely on this property to return the correct value.
- {{domxref("NavigatorID.appVersion")}} {{readonlyInline}} {{deprecated_inline}}
  - : Returns the version of the browser as a string. Do not rely on this property to return the correct value.
- {{domxref("NavigatorID.platform")}} {{readonlyInline}} {{deprecated_inline}}
  - : Returns a string representing the platform of the browser. Do not rely on this property to return the correct value.
- {{domxref("NavigatorID.product")}} {{readonlyInline}} {{deprecated_inline}}
  - : Always returns `'Gecko'`, on any browser. This property is kept only for compatibility purpose.
- {{domxref("NavigatorID.userAgent")}} {{readonlyInline}}
  - : Returns the user agent string for the current browser.

## Methods

_The_ _`NavigatorID`_ _interface doesn't inherit any method._

- {{domxref("NavigatorID.taintEnabled()")}} {{deprecated_inline()}}
  - : Always returns `false`. JavaScript taint/untaint functions were removed in JavaScript 1.2. This method is only kept for compatibility purpose

## Specifications

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- The {{domxref("Navigator")}} and {{domxref("WorkerNavigator")}} interfaces that implement it.
