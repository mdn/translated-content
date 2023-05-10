---
title: console.debug()
slug: Web/API/console/debug
l10n:
  sourceCommit: d9026c37acaf22da682206c381686fe8a4666f16
---

{{APIRef("Console API")}}

La méthode **`console.debug()`** affiche un message dans la console web avec le niveau «&nbsp;débogage/<i lang="en">debug</i>&nbsp;». Le message est visible uniquement si la console est configurée pour afficher ce niveau de journalisation.

Pour la plupart des cas, le niveau de journalisation visible se configure via l'interface utilisateur de la console. Le niveau de débogage de cette méthode correspond au niveau `Debug` ou `Verbose` en anglais.

{{AvailableInWorkers}}

## Syntaxe

```js-nolint
debug(obj1)
debug(obj1, /* …, */ objN)
debug(msg)
debug(msg, subst1, /* …, */ substN)
```

### Paramètres

- `obj1` … `objN`
  - : Une liste d'objets JavaScript à afficher dans la sortie. Les représentations en chaînes de caractères de ces objets sont concaténées dans l'ordre des arguments puis cette concaténation est affichée dans la console.
- `msg`
  - : Une chaîne de caractères JavaScript contenant zéro ou plusieurs chaînes de caractères de substitution, remplacées respectivement par `subst1`, `substN`.
- `subst1` … `substN`
  - : Des objets JavaScript à utiliser pour remplacer les chaînes de substitution de `msg`. Cela fournit un contrôle supplémentaire sur le format de la sortie. Voir [Utiliser les chaînes de caractères de substitution](/fr/docs/Web/API/Console#utiliser_les_caractères_de_substitution) qui décrit le fonctionnement des substitutions.

Voir [Afficher du texte dans la console](/fr/docs/Web/API/Console#afficher_du_texte_dans_la_console) dans la documentation de l'objet [`console`](/fr/docs/Web/API/Console) pour plus de détails.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
