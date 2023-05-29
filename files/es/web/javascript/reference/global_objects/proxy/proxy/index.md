---
title: Proxy handler
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
original_slug: Web/JavaScript/Reference/Global_Objects/Proxy/handler
---

{{JSRef}}

The proxy's handler object is a placeholder object which contains traps for {{jsxref("Proxy", "proxies", "", 1)}}.

## Methods

All traps are optional. If a trap has not been defined, the default behavior is to forward the operation to the target.

- {{jsxref("Global_Objects/Proxy/handler/getPrototypeOf", "handler.getPrototypeOf()")}}
  - : A trap for {{jsxref("Object.getPrototypeOf")}}.
- {{jsxref("Global_Objects/Proxy/handler/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : A trap for {{jsxref("Object.setPrototypeOf")}}.
- {{jsxref("Global_Objects/Proxy/handler/isExtensible", "handler.isExtensible()")}}
  - : A trap for {{jsxref("Object.isExtensible")}}.
- {{jsxref("Global_Objects/Proxy/handler/preventExtensions", "handler.preventExtensions()")}}
  - : A trap for {{jsxref("Object.preventExtensions")}}.
- {{jsxref("Global_Objects/Proxy/handler/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
  - : A trap for {{jsxref("Object.getOwnPropertyDescriptor")}}.
- {{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty()")}}
  - : A trap for {{jsxref("Object.defineProperty")}}.
- {{jsxref("Global_Objects/Proxy/handler/has", "handler.has()")}}
  - : A trap for the {{jsxref("Operators/in", "in")}} operator.
- {{jsxref("Global_Objects/Proxy/handler/get", "handler.get()")}}
  - : A trap for getting property values.
- {{jsxref("Global_Objects/Proxy/handler/set", "handler.set()")}}
  - : A trap for setting property values.
- {{jsxref("Global_Objects/Proxy/handler/deleteProperty", "handler.deleteProperty()")}}
  - : A trap for the {{jsxref("Operators/delete", "delete")}} operator.
- {{jsxref("Global_Objects/Proxy/handler/ownKeys", "handler.ownKeys()")}}
  - : A trap for {{jsxref("Object.getOwnPropertyNames")}} and {{jsxref("Object.getOwnPropertySymbols")}}.
- {{jsxref("Global_Objects/Proxy/handler/apply", "handler.apply()")}}
  - : A trap for a function call.
- {{jsxref("Global_Objects/Proxy/handler/construct", "handler.construct()")}}
  - : A trap for the {{jsxref("Operators/new", "new")}} operator.

Some non-standard traps are [obsolete and have been removed](/es/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#Proxy).

## Especificaciones

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Proxy")}}
