---
title: "console : méthode statique log()"
slug: Web/API/console/log_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}}{{AvailableInWorkers}}

La méthode **`console.log()`** permet d'afficher un message dans la console.

## Syntaxe

```js-nolint
console.log(val1)
console.log(val1, /* …, */ valN)
console.log(msg)
console.log(msg, subst1, /* …, */ substN)
```

### Paramètres

- `val1` … `valN`
  - : Une liste de valeurs JavaScript à afficher. Une représentation de chacune de ces valeurs est affichée dans la console dans l'ordre donné avec un certain type de séparation entre chacune d'elles. Il y a un cas particulier si `val1` est une chaîne de caractères, qui est décrit ci-après.
- `msg`
  - : Une chaîne de caractères JavaScript qui contient zéro ou plusieurs chaînes de caractères de substitution qui sont remplacées par `subst1` … `substN` dans l'ordre, jusqu'au nombre de chaînes de caractères de substitution. Voir [Utiliser des chaînes de caractères de substitution](/fr/docs/Web/API/console#utiliser_des_chaînes_de_substitution) pour une description du fonctionnement des substitutions.
- `subst1` … `substN`
  - : Des valeurs JavaScript avec lesquelles remplacer les chaînes de caractères de substitution dans `msg`. Si le nombre de valeurs de substitution est supérieur au nombre de chaînes de caractères de substitution, les valeurs supplémentaires sont elles-mêmes écrites dans la console après le message d'assertion détaillé de la même manière que lorsqu'il n'y a pas de chaîne de caractères de format.

Voir [Afficher du texte dans la console](/fr/docs/Web/API/console#afficher_du_texte_dans_la_console) pour plus de détails.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Documentation de Microsoft Edge pour `console.log()`](https://learn.microsoft.com/fr-fr/microsoft-edge/devtools/console/api#log)
- [Documentation de Node.js pour `console.log()` <sup>(angl.)</sup>](https://nodejs.org/docs/latest/api/console.html#consolelogdata-args)
- [Documentation de Google Chrome pour `console.log()` <sup>(angl.)</sup>](https://developer.chrome.com/docs/devtools/console/api/#log)
