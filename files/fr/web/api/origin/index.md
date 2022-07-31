---
title: origin
slug: Web/API/origin
page-type: web-api-global-property
translation_of: Web/API/origin
original_slug: Web/API/WindowOrWorkerGlobalScope/origin
browser-compat: api.origin
---
{{APIRef()}}{{SeeCompatTable}}

La propriété globale en lecture seule **`origin`** renvoie l'origine de la portée globale, sérialisée sous la forme d'une chaîne de caractères.

## Valeur

Une chaîne de caractères.

## Exemples

Exécutée depuis le script d'un <i lang="en">worker</i>, le fragment de code suivant affichera l'origine de la portée globale du <i lang="en">worker</i> chaque fois qu'il reçoit un message.

```js
onmessage = function() {
  console.log(self.origin);
};
```

Si l'origine n'est pas une combinaison schéma/hôte/port (par exemple avec une exécution locale via une URL `file://`), `origin` renverra la chaîne de caractères `"null"`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
