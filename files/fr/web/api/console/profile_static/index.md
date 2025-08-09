---
title: "console : méthode statique profile()"
slug: Web/API/console/profile_static
l10n:
  sourceCommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{APIRef("Console API")}}{{Non-standard_header}}

La méthode **`console.profile()`** démarre l'enregistrement d'un profil de performance.

On peut fournir un argument indiquant le nom du profil, ce qui permet d'enregistrer plusieurs profils nommés en parallèle. Voir la documentation de [`console.profileEnd()`](/fr/docs/Web/API/console/profileEnd_static) pour plus d'informations sur cet argument.

Pour arrêter l'enregistrement du profil, on appellera [`console.profileEnd()`](/fr/docs/Web/API/console/profileEnd_static).

{{AvailableInWorkers}}

## Syntaxe

```js-nolint
profile(nomProfil)
```

### Paramètres

- `nomProfil` {{optional_inline}}
  - : Le nom à donner au profil.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`console.profileEnd()`](/fr/docs/Web/API/console/profileEnd_static)
