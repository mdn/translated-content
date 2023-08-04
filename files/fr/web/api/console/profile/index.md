---
title: Console.profile()
slug: Web/API/console/profile
---

{{APIRef("Console API")}}{{Non-standard_header}}

Commence l'enregistrement d'un profil de performance (par exemple, l'outil [performance de Firefox](/fr/docs/Outils/Performance)).

Vous pouvez éventuellement fournir un argument pour nommer le profil, ce qui vous permet d'arrêter uniquement ce profil si plusieurs profils sont enregistrés. Voir {{domxref("Console.profileEnd()")}} pour voir comment cet argument est interprété.

Pour arrêter l'enregistrement, appeler {{domxref("Console.profileEnd()")}}.

{{AvailableInWorkers}}

## Syntaxe

```js
console.profile(profileName);
```

## Paramètres

- `profileName`
  - : Le nom à donner au profil. Facultatif.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Console.profileEnd()")}}
