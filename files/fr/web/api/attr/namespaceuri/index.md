---
title: Attr.namespaceURI
slug: Web/API/Attr/namespaceURI
---

{{APIRef("DOM")}}

La propriété en lecture seule **`Attr.namespaceURI`** retourne l'URI d'espace de nom de l'attribut, ou `null` si l'élément n'est pas dans un espace de noms.

> **Note :** Avant DOM4 cet API était défini dans l'interface {{domxref("Node")}}.

## Syntaxe

```js
namespace = attribute.namespaceURI;
```

## Exemple

Dans cet extrait de code, un attribut est examiné pour son {{domxref("localName")}} et son `namespaceURI`. Si le `namespaceURI` renvoie l'espace de noms XUL et le `localName` retourne "browser" (_navigateur_), alors le noeud est compris comme étant un `<browser/>` XUL.

```js
if (
  attribute.localName == "value" &&
  attribute.namespaceURI ==
    "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
) {
  // ceci est une valeur XUL
}
```

## Notes

Ce n'est pas une valeur calculée, mais le résultat d'une recherche d'espace de noms basée sur un examen des déclarations d'espace de noms dans la portée. L'URI de l'espace de noms d'un attribut est figé à l'heure de création de l'attribut.

Dans Firefox 3.5 et précédents, l'URI d'espace de nom pour les attributs HTML dans les documents HTML est `null`. Dans les versions ultérieures, en conformité avec HTML5, il est [`https://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml) comme dans XHTML.

Vous pouvez créer un attribut avec le `namespaceURI` spécifié en utilisant la méthode de DOM niveau 2 {{domxref("Element.setAttributeNS")}}.

Selon la spécification [Namespaces en XML](https://www.w3.org/TR/xml-names11/), un attribut n'hérite pas de l'espace de noms de l'élément auquel il est attaché. Si un attribut n'est pas explicitement donné à un espace de noms, il n'a pas d'espace de noms.

Le DOM ne gère pas ou n'applique pas la validation de l'espace de noms en soi. Il appartient à l'application DOM de faire toute validation nécessaire. Notez également que le préfixe d'espace de noms, une fois associé à un nœud particulier, ne peut pas être modifié.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Attr.localName")}}
- {{domxref("Attr.prefix")}}
- {{domxref("Element.namespaceURI")}}
- {{domxref("Node.namespaceURI")}}
