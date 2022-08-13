---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/undefined
original_slug: Web/JavaScript/Referencje/Obiekty/undefined
---
{{jsSidebar("Objects")}}

## Podsumowanie

Wartość niezdefiniowana.

{{js_property_attributes(0,0,0)}}

## Składnia

    undefined

## Opis

`undefined` jest własnością najwyższego rzędu i nie jest przypisana do żadnego obiektu.

Zmienna, której nie przypisano wartości, jest typu undefined. Metoda lub wyrażenie zwraca `undefined`, jeśli wyliczana zmienna nie posiada wartości.

Można wykorzystać `undefined` do zbadania, czy dana zmienna ma wartość. W poniższym kodzie zmienna `x` nie jest zdefiniowana i wyrażenie `if` ma wartość "prawda" (true).

```js
var x;
if (x === undefined) {
   // polecenia tu umieszczone są wykonywane
} else {
   // polecenia tu umieszczone nie są wykonywane
}
```

`undefined` jest także wartością prostą.
