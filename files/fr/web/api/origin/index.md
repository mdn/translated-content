---
title: origin
slug: Web/API/origin
l10n:
  sourceCommit: 7060fc880765875bbee8d5cd8f54e9170eb2691d
---

{{APIRef()}}

La propriété globale en lecture seule **`origin`** renvoie l'origine de la portée globale, sérialisée sous la forme d'une chaîne de caractères.

## Valeur

Une chaîne de caractères.

## Exemples

Exécutée depuis le script d'un <i lang="en">worker</i>, le fragment de code suivant affichera l'origine de la portée globale du <i lang="en">worker</i> dans la console chaque fois qu'il reçoit un message.

```js
onmessage = () => {
  console.log(self.origin);
};
```

Si l'origine n'est pas une combinaison schéma/hôte/port (par exemple avec une exécution locale via une URL `file://`), `origin` renverra la chaîne de caractères `"null"`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
