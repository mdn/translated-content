---
title: Proxy handler
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
translation_of_original: Web/JavaScript/Reference/Global_Objects/Proxy/handler
original_slug: Web/JavaScript/Referencje/Obiekty/Proxy/handler
---
{{JSRef}}

Obiekt obsługujący proxy (proxy's handler object) jest obiektem zastępczym który zawiera pułapki dla obiektów {{jsxref("Proxy", "proxy", "", 1)}}.

## Metody

Wszystkie pułapki są opcjonalne. Jeśli pułapka nie została zdefiniowana, domyślnym zachowaniem jest przekazanie operacji do obiektu docelowego.

- {{jsxref("Global_Objects/Proxy/handler/getPrototypeOf", "handler.getPrototypeOf()")}}
  - : Pułapka na {{jsxref("Object.getPrototypeOf")}}.
- {{jsxref("Global_Objects/Proxy/handler/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : Pułapka na {{jsxref("Object.setPrototypeOf")}}.
- {{jsxref("Global_Objects/Proxy/handler/isExtensible", "handler.isExtensible()")}}
  - : Pułapka na {{jsxref("Object.isExtensible")}}.
- {{jsxref("Global_Objects/Proxy/handler/preventExtensions", "handler.preventExtensions()")}}
  - : Pułapka na {{jsxref("Object.preventExtensions")}}.
- {{jsxref("Global_Objects/Proxy/handler/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
  - : Pułapka na {{jsxref("Object.getOwnPropertyDescriptor")}}.
- {{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty()")}}
  - : Pułapka na {{jsxref("Object.defineProperty")}}.
- {{jsxref("Global_Objects/Proxy/handler/has", "handler.has()")}}
  - : Pułapka na operator {{jsxref("Operators/in", "in")}}.
- {{jsxref("Global_Objects/Proxy/handler/get", "handler.get()")}}
  - : Pułapka na pobieranie wartości atrybutu.
- {{jsxref("Global_Objects/Proxy/handler/set", "handler.set()")}}
  - : Pułapka na ustawianie wartości atrybutu.
- {{jsxref("Global_Objects/Proxy/handler/deleteProperty", "handler.deleteProperty()")}}
  - : Pułapka na operator {{jsxref("Operators/delete", "delete")}}.
- {{jsxref("Global_Objects/Proxy/handler/ownKeys", "handler.ownKeys()")}}
  - : Pułapka na {{jsxref("Object.getOwnPropertyNames")}} i {{jsxref("Object.getOwnPropertySymbols")}}.
- {{jsxref("Global_Objects/Proxy/handler/apply", "handler.apply()")}}
  - : Pułapka na wywołanie funkcji.
- {{jsxref("Global_Objects/Proxy/handler/construct", "handler.construct()")}}
  - : Pułapka na operator {{jsxref("Operators/new", "new")}}.

Niektóre niestandardowe pułapki są [przestarzałe i zostały usunięte](/pl/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#Proxy).

## Specyfikacje

| Specyfikacja                                                                                                                                                                     | Status                       | Komentarz                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------- |
| {{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots', 'Proxy Object Internal Methods and Internal Slots')}} | {{Spec2('ES2015')}}     | Początkowa definicja.                     |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots', 'Proxy Object Internal Methods and Internal Slots')}} | {{Spec2('ESDraft')}} | Usunięto funkcję obsługującą `enumerate`. |

## Kompatybilność przeglądarek

{{Compat("javascript.builtins.Proxy.handler")}}

## Zobacz również

- {{jsxref("Proxy")}}
