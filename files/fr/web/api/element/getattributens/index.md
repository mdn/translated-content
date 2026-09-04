---
title: "Element : méthode getAttributeNS()"
short-title: getAttributeNS()
slug: Web/API/Element/getAttributeNS
l10n:
  sourceCommit: f22f67069495dc37e550e354913d4ca984f5a4b0
---

{{APIRef("DOM")}}

La méthode **`getAttributeNS()`** de l'interface {{DOMxRef("Element")}} retourne la valeur de l'attribut avec espace de noms défini de l'élément défini, sous la forme d'une chaîne de caractères. Elle retourne `null` si l'élément n'a pas d'attribut avec le nom donné dans l'espace de noms.

Si vous travaillez avec des documents HTML et que vous n'avez pas besoin de définir l'attribut demandé comme faisant partie d'un espace de noms spécifique, utilisez plutôt la méthode {{DOMxRef("Element.getAttribute()", "getAttribute()")}}.

## Syntaxe

```js-nolint
getAttributeNS(namespace, localName)
```

### Paramètres

- `namespace`
  - : Une chaîne de caractères définissant l'espace de noms de l'attribut, ou `null` pour aucun espace de noms explicite.
- `localName`
  - : Une chaîne de caractères définissant le nom de l'attribut.

### Valeur de retour

Une chaîne de caractères contenant la valeur de l'attribut, ou `null` si l'élément n'a pas d'attribut avec le nom donné.

## Exemples

Le document SVG suivant utilise une valeur d'attribut `toto` d'un espace de noms spécifique.

```xml
<svg xmlns="http://www.w3.org/2000/svg"
    xmlns:test="http://www.example.com/2014/test" width="40" height="40">

  <circle id="cible" cx="12" cy="12" r="10" stroke="#444"
      stroke-width="2" fill="none" test:toto="Hello namespaced attribute!"/>

  <script>
    const ns = 'http://www.example.com/2014/test';
    const circle = document.getElementById('cible');

    console.log(`attribute test:toto: "${circle.getAttributeNS(ns, 'toto')}"`);
  </script>
</svg>
```

Dans un document HTML, il faut utiliser `test:toto` pour accéder à l'attribut, car les espaces de noms ne sont pas pris en charge.

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:test="http://www.example.com/2014/test"
  width="40"
  height="40">
  <circle
    id="cible"
    cx="12"
    cy="12"
    r="10"
    stroke="#444444"
    stroke-width="2"
    fill="none"
    test:toto="Valeur toto" />
</svg>
```

```js
const ns = "http://www.example.com/2014/test";
const circle = document.getElementById("cible");
console.log(`Valeur de l'attribut : ${circle.getAttribute("test:toto")}`);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.hasAttributeNS()")}}
- La méthode {{DOMxRef("Element.setAttributeNS()")}}
- La méthode {{DOMxRef("Element.removeAttributeNS()")}}
