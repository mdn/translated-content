---
title: handler.apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
tags:
  - ECMAScript 2015
  - JavaScript
  - Metodă
  - Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
original_slug: Web/JavaScript/Referencje/Obiekty/Proxy/handler/apply
---
{{JSRef}}

Metoda **`handler.apply()`** jest pułapką na wywołanie funkcji.

{{EmbedInteractiveExample("pages/js/proxyhandler-apply.html", "taller")}}

## Składnia

```js
var p = new Proxy(target, {
  apply: function(target, thisArg, argumentsList) {
  }
});
```

### Parametry

Następujące parametry są przekazywane do metody `apply`. Wartością `this` jest handler.

- `target`
  - : Obiekt, na którym została wywołana metoda.
- `thisArg`
  - : Obiekt, który jest `this` w metodzie.
- `argumentsList`
  - : Lista argumentów, które zostały przekazane do metody.

### Zwracana wartość

Metoda `apply` może zwrócić dowolną wartość.

## Opis

Metoda **`handler.apply`** jest pułapką na wywołanie funkcji.

### Przechwycenia

Ta pułapka może przechwycić poniższe operacje:

- `proxy(...args)`
- {{jsxref("Function.prototype.apply()")}} i {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}

### Niezmienniki

Jeśli poniższe zmiemienniki są naruszone, poxy rzuci wyjątek TypeError:

`target` musi być obiektem, który da się wywołać. To znaczy, że musi być obiektem funkcyjnym.

## Przykłady

Poniższy kod przechwytuje wywołanie funkcji.

```js
var p = new Proxy(function() {}, {
  apply: function(target, thisArg, argumentsList) {
    console.log('called: ' + argumentsList.join(', '));
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  }
});

console.log(p(1, 2, 3)); // "called: 1, 2, 3"
                         // 6
```

## Specyfikacje

| Specification                                                                                                                                                        | Status                       | Comment               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist', '[[Call]]')}} | {{Spec2('ES2015')}}     | Początkowa definicja. |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist', '[[Call]]')}} | {{Spec2('ESDraft')}} |                       |

## Kompatybilność przeglądarek

{{Compat("javascript.builtins.Proxy.handler.apply")}}

## Zobacz również

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Function.prototype.apply")}}
- {{jsxref("Function.prototype.call")}}
- {{jsxref("Reflect.apply()")}}
