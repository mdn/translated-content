---
title: Attr.prefix
slug: Web/API/Attr/prefix
tags:
  - API
  - DOM
  - Propriétés
  - Reference
translation_of: Web/API/Attr/prefix
---
{{APIRef("DOM")}}

La propriété **`Attr.prefix`** en lecture seule renvoie le préfixe de l'espace de noms de l'attribut spécifié ou `null` si aucun préfixe n'est spécifié.

> **Note :** Avant DOM4, cette API a été définie dans l'interface {{domxref ("Node")}}.

## Syntaxe

    string = attribute.prefix

## Exemples

Le code suivant affiche "x" dans la console.

```xml
<div x:id="example" onclick="console.log(this.attributes[0].prefix)"/>
```

## Notes

Cela ne fonctionnera que lorsqu'un analyseur conscient de l'espace de noms est utilisé, c'est-à-dire lorsqu'il s'agit d'un document avec un type MIME XML. Cela ne fonctionnera pas pour les documents HTML.

## Spécifications

| Spécification                                                            | Statut                   | Commentaire         |
| ------------------------------------------------------------------------ | ------------------------ | ------------------- |
| {{SpecName("DOM4", "#dom-attr-prefix", "Attr.prefix")}} | {{Spec2("DOM4")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Attr.prefix")}}

## Voir également

- {{domxref("Attr.namespaceURI")}}
- {{domxref("Attr.localName")}}
- {{domxref("Element.prefix")}}
- {{domxref("Node.prefix")}}
