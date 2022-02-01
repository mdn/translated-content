---
title: element.ownerDocument
slug: Web/API/Node/ownerDocument
tags:
  - API
  - DOM
  - Document
  - Noeuds
  - Propriétés
translation_of: Web/API/Node/ownerDocument
---
{{APIRef("DOM")}}

La propriété en lecture seule **`Node.ownerDocument`** renvoie l'objet document de niveau supérieur pour ce nœud.

## Syntaxe

    document = element.ownerDocument;

- `document` est l'objet [`document`](/fr/docs/Web/API/document) parent de l'élément courant.

## Exemple

```html
// étant donné un nœud "p", obtient le premier enfant HTML
// de l'objet document
var d = p.ownerDocument;
var html = d.documentElement;
```

## Notes

L'objet `document` renvoyé par cette propriété est l'objet principal avec lequel tous les nœuds enfants du document HTML réel sont créés. Si cette propriété est utilisée sur un nœud qui est lui-même un document, le résultat est `null`.

### Spécifications

| Spécification                                                                                        | Statut                       | Commentaire          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("DOM4", "#dom-node-ownerdocument", "Node.ownerDocument")}}         | {{Spec2("DOM4")}}     |                      |
| {{SpecName("DOM3 Core", "core.html#node-ownerDoc", "Node.ownerDocument")}} | {{Spec2("DOM3 Core")}} | Pas de changement    |
| {{SpecName("DOM2 Core", "core.html#node-ownerDoc", "Node.ownerDocument")}} | {{Spec2("DOM2 Core")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Node.ownerDocument")}}
