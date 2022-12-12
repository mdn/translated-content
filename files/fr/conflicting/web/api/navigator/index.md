---
title: Navigator.mozIsLocallyAvailable()
slug: conflicting/Web/API/Navigator
translation_of: Web/API/Navigator/mozIsLocallyAvailable
original_slug: Web/API/Navigator/mozIsLocallyAvailable
browser-compat: api.Navigator.mozIsLocallyAvailable
---

{{APIRef("HTML DOM")}} {{non-standard_header}}{{deprecated_header}}

La méthode **`Navigator.mozIsLocallyAvailable()`** permet aux modules complémentaires de déterminer si une ressource donnée est disponible.

> **Note :** Des exceptions de sécurité peuvent se produire si l'URI demandé ne provient pas de la même origine.

## Syntaxe

```js
mozIsLocallyAvailable(uri, ifOffline)
```

### Paramètres

- `uri`
  - : L'URI de la ressource dont on souhaite vérifier la disponibilité sous la forme d'une chaîne de caractères.
- `ifOffline`
  - : Un booléen qui permet d'indiquer si on souhaite vérifier également le cache des ressources hors-ligne.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Exemples

```js
const available = navigator.mozIsLocallyAvailable("mon-fichier-image.png", true);
if (available) {
  /* La ressource hors ligne est présente */
} else {
  console.log("Certaines ressources nécessaires ne sont pas disponibles hors ligne.");
}
```

## Spécifications

Cette méthode ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}
