---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - Właściwość
translation_of: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
original_slug: Web/JavaScript/Referencje/Obiekty/Number/EPSILON
---
{{JSRef}}

Właściwość **`Number.EPSILON`** reprezentuje różnicę pomiędzy 1 a najmniejszą liczbą zmiennoprzecinkową większą niż 1.

Jest to właściwość statyczna. Nie musisz tworzyć obiektu {{jsxref("Number")}}, żeby mieć do niej dostęp (użyj `Number.EPSILON`).

{{EmbedInteractiveExample("pages/js/number-epsilon.html")}}{{js_property_attributes(0, 0, 0)}}

## Opis

Wartość właściwości `EPSILON` to w przybliżeniu  `2.2204460492503130808472633361816E-16` lub `2-52`.

## Przykłady

### Testowanie równości

```js
x = 0.2;
y = 0.3;
z = 0.1;
equal = (Math.abs(x - y + z) < Number.EPSILON);
```

## Polyfill

```js
if (Number.EPSILON === undefined) {
    Number.EPSILON = Math.pow(2, -52);
}
```

## Specyfikacja

| Specification                                                                        | Status                       | Comment             |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-number.epsilon', 'Number.EPSILON')}} | {{Spec2('ES2015')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-number.epsilon', 'Number.EPSILON')}} | {{Spec2('ESDraft')}} |                     |

## Kompatybilność

{{Compat("javascript.builtins.Number.EPSILON")}}

## Zobacz również

- {{jsxref("Number")}} obiekt, do którego należy ta właściwość.
