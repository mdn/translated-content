---
title: "Element : propriété prefix"
short-title: prefix
slug: Web/API/Element/prefix
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}

La propriété en lecture seule **`prefix`** de l'interface {{DOMxRef("Element")}} retourne le préfixe d'espace de noms de l'élément défini, ou `null` si aucun préfixe n'est précisé.

## Valeur

Une chaîne de caractères.

## Exemples

Les éléments suivants enregistrent «&nbsp;x&nbsp;» dans la console.

```xml
<x:div onclick="console.log(this.prefix)"/>
```

## Notes

Ça ne fonctionne pas lorsqu'un analyseur connaissant l'espace de noms est utilisé, c'est-à-dire lorsqu'un document est servi avec un type MIME XML. Cela ne fonctionne pas pour les documents HTML.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.namespaceURI")}}
- La propriété {{DOMxRef("Element.localName")}}
- La propriété {{DOMxRef("Attr.prefix")}}
