---
title: Element.prefix
slug: Web/API/Element/prefix
---

{{APIRef("DOM")}}

La propriété en lecture seule **`Element.prefix`** renvoie le préfixe d'espace de noms de l'élément spécifié ou `null` si aucun préfixe n'est précisé.

> **Note :** Avant DOM4 cet API était défini dans l'interface {{domxref("Node")}}.

## Syntaxe

```js
string = element.prefix;
```

## Exemples

Les logs "x" suivants à la console.

```xml
<x:div onclick="console.log(this.prefix)"/>
```

## Notes

Cela fonctionnera uniquement lorsqu'un analyseur connaissant l'espace de noms est utilisé, c'est-à-dire lorsqu'un document est servi avec un type XML MIME. Cela ne fonctionnera pas pour les documents HTML.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.localName")}}
- {{domxref("Attr.prefix")}}
- {{domxref("Node.prefix")}}
