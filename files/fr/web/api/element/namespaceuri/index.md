---
title: "Element : propriété namespaceURI"
short-title: namespaceURI
slug: Web/API/Element/namespaceURI
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

La propriété en lecture seule **`namespaceURI`** de l'interface {{DOMxRef("Element")}} retourne l'URI d'espace de noms de l'élément, ou `null` si l'élément n'est pas dans un espace de noms.

## Valeur

Une chaîne de caractères, ou `null`.

## Exemples

Dans cet extrait, un élément est examiné pour son {{DOMxRef("Element.localName", "localName")}} et son `namespaceURI`. Si le `namespaceURI` retourne l'espace de noms XUL et le `localName` retourne «&nbsp;browser&nbsp;», alors le nœud est compris comme étant un `<browser/>` XUL.

```js
if (
  element.localName === "browser" &&
  element.namespaceURI ===
    "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
) {
  // c'est un navigateur XUL
}
```

## Notes

Ce n'est pas une valeur calculée qui est le résultat d'une recherche d'espace de noms basée sur un examen des déclarations d'espace de noms dans la portée. L'URI de l'espace de noms d'un nœud est fixé au moment de la création du nœud.

Dans Firefox 3.5 et antérieurs, l'URI d'espace de noms pour les éléments HTML dans un document HTML est `null`. Dans les versions postérieures, en conformité avec HTML5, c'est [`http://www.w3.org/1999/xhtml` <sup>(angl.)</sup>](https://www.w3.org/1999/xhtml/) comme dans XHTML.

Vous pouvez créer un élément avec un `namespaceURI` défini en utilisant la méthode DOM niveau 2 {{DOMxRef("document.createElementNS()")}}.

Le DOM ne gère pas ou n'applique pas la validation de l'espace de noms en soi. Il appartient à l'application DOM de faire toute validation nécessaire. Notez également que le préfixe d'espace de noms, une fois associé à un élément particulier, ne peut pas être modifié.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.localName")}}
- La propriété {{DOMxRef("Element.prefix")}}
- La propriété {{DOMxRef("Attr.namespaceURI")}}
