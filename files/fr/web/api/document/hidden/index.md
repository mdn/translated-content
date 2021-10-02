---
title: Document.hidden
slug: Web/API/Document/hidden
translation_of: Web/API/Document/hidden
---
{{ ApiRef("DOM") }}

La propriété **`Document.hidden`** retourne un Booléen qui indique si la page est considérée cachée ou pas.

## Syntaxe

    var boolean = document.hidden

## Exemples

```js
document.addEventListener("visibilitychange", function() {
  console.log( document.hidden );
  // Modifier le comportement...
});
```

## Spécifications

| Specification                                                                                            | Status                                       | Comment            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------ |
| {{SpecName('Page Visibility API','#dom-document-hidden', 'Document.hidden')}} | {{Spec2('Page Visibility API')}} | Initial definition |

## Browser compatibility

{{Compat("api.Document.hidden")}}
