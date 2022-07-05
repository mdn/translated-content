---
title: Console.profileEnd()
slug: Web/API/Console/profileEnd
tags:
  - API
  - DOM
  - Méthodes
  - Profils
translation_of: Web/API/Console/profileEnd
---
{{APIRef("Console API")}}{{Non-standard_header}}

> **Attention :** L'appel de cet API immédiatement après `console.profile()` peut l'empêcher de fonctionner. Pour contourner ce problème, appelez-le par un  `setTimeout` avec un délai d'au-moins 5 ms. Voir [bug #1173588](https://bugzilla.mozilla.org/show_bug.cgi?id=1173588).

La méthode `profileEnd`  arrête l'enregistrement d'un profil lancé précédemment avec {{domxref("Console.profile()")}}.

Vous pouvez éventuellement insérer un argument pour nommer le profil. Cela vous permet d'arrêter uniquement ce profil si vous avez enregistré plusieurs profils.

- Si `Console.profileEnd()` reçoit un nom de profil qui correspond au nom d'un profil en cours d'enregistrement, ce profil est arrêté.
- Si `Console.profileEnd()` reçoit un nom de profil qui ne correspond pas au nom d'un profil en cours d'enregistrement, aucune modification n'est apportée.
- Si `Console.profileEnd()` ne reçoit pas un nom de profil, le dernier profil démarré est arrêté.

{{AvailableInWorkers}}

## Syntaxe

    console.profileEnd(profileName);

## Paramètres

- `profileName`
  - : Le nom à donner au profil. Ce paramètre est facultatif.

## Compatibilité des navigateurs

{{Compat("api.Console.profileEnd")}}

## Voir aussi

- {{domxref("Console.profile()")}}
