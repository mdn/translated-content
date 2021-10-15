---
title: WindowOrWorkerGlobalScope.origin
slug: Web/API/origin
translation_of: Web/API/WindowOrWorkerGlobalScope/origin
original_slug: Web/API/WindowOrWorkerGlobalScope/origin
---
{{APIRef()}}{{SeeCompatTable}}

La propriété **`origin`** de l'interface {{domxref("WindowOrWorkerGlobalScope")}} retourne l'origine du scope global, serialisé en chaîne de caractères.

## Syntaxe

    var myOrigin = self.origin; // ou simplement origin

### Valeur

Une {{domxref("USVString")}}.

## Exemples

Exécuté depuis un worker, le code suivant permet d'afficher en console le scope global de ce worker à chaque message reçu.

```js
onmessage = function() {
  console.log(self.origin);
};
```

Si l'origine n'est pas sous la forme scheme/host/port (par exemple, si vous exécutez le code en local, via `file://`), `origin` retournera la chaîne de caractère `"null"`.

## Spécifications

| Spécification                                                                                                                | Statut                           | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', 'webappapis.html#dom-origin', 'WindowOrWorkerGlobalScope.origin')}} | {{Spec2('HTML WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.WindowOrWorkerGlobalScope.origin")}}
