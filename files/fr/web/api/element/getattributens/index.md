---
title: "Element : méthode getAttributeNS()"
short-title: getAttributeNS()
slug: Web/API/Element/getAttributeNS
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("DOM")}}

La méthode **`getAttributeNS()`** de l'interface {{DOMxRef("Element")}} retourne la valeur de l'attribut avec l'espace de noms et le nom donnés, sous la forme d'une chaîne de caractères. Si l'attribut nommé n'existe pas, la valeur retournée est soit `null`, soit `""` (une chaîne de caractères vide)&nbsp;; voir la section [Notes](#notes) pour plus de détails.

Si vous travaillez avec des documents HTML et que vous n'avez pas besoin de définir l'attribut demandé comme faisant partie d'un espace de noms spécifique, utilisez plutôt la méthode {{DOMxRef("Element.getAttribute()", "getAttribute()")}}.

## Syntaxe

```js-nolint
getAttributeNS(namespace, name)
```

### Paramètres

- `namespace`
  - : L'espace de noms dans lequel rechercher l'attribut défini.
- `name`
  - : Le nom de l'attribut à rechercher.

### Valeur de retour

Une chaîne de caractères avec la valeur de l'attribut recherché. Si l'attribut n'existe pas, le résultat est `null`.

> [!NOTE]
> Les versions antérieures de la spécification DOM avaient cette méthode décrite comme renvoyant une chaîne de caractères vide pour des attributs inexistants, mais elle n'était généralement pas implémentée de cette façon, car `null` a plus de sens. La spécification DOM4 indique maintenant que cette méthode doit retourner `null` pour les attributs inexistants.

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

## Notes

La méthode `getAttributeNS()` diffère de {{DOMxRef("element.getAttribute()", "getAttribute()")}} en ce qu'elle permet de définir les attributs faisant partie d'un espace de noms particulier, comme dans l'exemple ci-dessus, où l'attribut fait partie de l'espace de noms fictif `"test"`.

Avant la spécification DOM4, cette méthode était définie pour retourner une chaîne de caractères vide plutôt qu'une valeur nulle pour les attributs inexistants. Cependant, la plupart des navigateurs retournaient à la place `null`. À partir de DOM4, la spécification stipule désormais de retourner `null`. Cependant, certains navigateurs plus anciens retournent une chaîne de caractères vide. C'est pourquoi vous devez utiliser {{DOMxRef("element.hasAttributeNS()", "hasAttributeNS()")}} pour vérifier l'existence d'un attribut avant d'appeler `getAttributeNS()` s'il est possible que l'attribut défini n'existe pas sur l'élément en question.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.hasAttributeNS()")}}
- La méthode {{DOMxRef("Element.setAttributeNS()")}}
- La méthode {{DOMxRef("Element.removeAttributeNS()")}}
