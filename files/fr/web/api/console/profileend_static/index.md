---
title: "console : méthode statique profileEnd()"
slug: Web/API/console/profileEnd_static
l10n:
  sourceCommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{APIRef("Console API")}}{{Non-standard_header}}

La méthode **`console.profileEnd()`** arrête l'enregistrement d'un profil de performance précédemment initié avec un appel à [`console.profile()`](/fr/docs/Web/API/console/profile_static).

Un argument facultatif permet d'indiquer le nom du profil en question. Utiliser ce nom permet de cibler un profil donné pour l'arrêt de l'enregistrement lorsque plusieurs profils sont enregistrés.

- Si `console.profileEnd()` est utilisée avec un nom de profil et que celui-ci correspond à un profil en cours d'enregistrement, l'enregistrement de ce profil donné est arrêté.
- Si `console.profileEnd()` est utilisée avec un nom de profil qui ne correspond à aucun profil en cours d'enregistrement, rien ne se passe.
- Si `console.profileEnd()` est utilisée sans nom de profil, c'est le profil dont l'enregistrement a démarré en dernier qui est arrêté.

{{AvailableInWorkers}}

## Syntaxe

```js-nolint
profileEnd(nomProfil)
```

### Paramètres

- `nomProfil` {{optional_inline}}
  - : Le nom à donner au profil.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`console.profile()`](/fr/docs/Web/API/console/profile_static)
