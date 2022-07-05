---
title: Element.namespaceURI
slug: Web/API/Element/namespaceURI
tags:
  - API
  - DOM
  - Element
  - Espace de noms
  - Propriétés
  - URI
translation_of: Web/API/Element/namespaceURI
---
{{APIRef("DOM")}}

La propriété en lecture seule **`Element.namespaceURI`** renvoie l'URI d'espace de noms de l'élément ou `null` si l'élément n'est pas dans un espace de nom.

> **Note :** Avant DOM4, cet API était définie dans l'interface {{domxref("Node")}}.

## Syntaxe

    namespace = element.namespaceURI

## Exemple

Dans cet extrait, un élément est examiné pour son {{domxref("localName")}} et son `namespaceURI`. Si le `namespaceURI` renvoie l'espace de noms XUL et le `localName` retourne "browser" (_navigateur_), alors le noeud est compris comme étant un `<browser/>` XUL.

```js
if (element.localName == "browser" &&
    element.namespaceURI == "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul") {
  // c'est un navigateur XUL
}
```

## Notes

Ce n'est pas une valeur calculée qui est le résultat d'une recherche d'espace de noms basée sur un examen des déclarations d'espace de noms dans la portée. L'URI de l'espace de noms d'un nœud est fixé au moment de la création du nœud.

Dans Firefox 3.5 et antérieurs, l'URI d'espace de noms pour les éléments HTML dans un document HTML est `null`. Dans les versions postérieures, en conformité avec HTML5, c'est [`http://www.w3.org/1999/xhtml`](http://www.w3.org/1999/xhtml) comme dans XHTML.

Vous pouvez créer un élément avec l'`namespaceURI` spécifié en utilisant la méthode DOM niveau 2 [document.createElementNS](/fr/docs/Web/API/Document/createElementNS).

Le DOM ne gère pas ou n'applique pas la validation de l'espace de noms en soi. Il appartient à l'application DOM de faire toute validation nécessaire. Notez également que le préfixe d'espace de noms, une fois associé à un élément particulier, ne peut pas être modifié.

## Spécification

| Spécification                                                                                    | Statut                   | Commentaire         |
| ------------------------------------------------------------------------------------------------ | ------------------------ | ------------------- |
| {{SpecName("DOM4", "#dom-element-namespaceuri", "Element.namespaceuri")}} | {{Spec2("DOM4")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Element.namespaceURI")}}

## Voir aussi

- {{domxref("Element.localName")}}
- {{domxref("Element.prefix")}}
- {{domxref("Attr.namespaceURI")}}
- {{domxref("Node.namespaceURI")}}
