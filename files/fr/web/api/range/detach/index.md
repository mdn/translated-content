---
title: Range.detach()
slug: Web/API/Range/detach
translation_of: Web/API/Range/detach
---
{{ApiRef("DOM")}}

La méthode **`Range.detach()`** n'a aucun effet. Elle permet de désactiver l'objet {{domxref("Range")}} et de libérer les ressources associées. Cette méthode a été conservée pour des raisons de compatibilités.

## Syntaxe

    range.detach();

## Exemple

```js
var range = document.createRange();

range.selectNode(document.getElementsByTagName("div").item(0));
range.detach();
```

## Spécifications

| Spécification                                                                                                                    | Status                                       | Commentaires            |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------- |
| {{SpecName('DOM WHATWG', '#dom-range-detach', 'Range.detach()')}}                                         | {{Spec2('DOM WHATWG')}}             | Aucun changement.       |
| {{SpecName('DOM2 Traversal_Range', 'ranges.html#Level2-Range-method-detach', 'Range.detach()')}} | {{Spec2('DOM2 Traversal_Range')}} | Spécification initiale. |

## Compatibilité des navigateurs

{{Compat("api.Range.detach")}}

## Voir aussi

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
