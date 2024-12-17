---
title: "console : méthode statique log()"
slug: Web/API/console/log_static
l10n:
  sourceCommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{APIRef("Console API")}}

La méthode **`console.log()`** permet d'afficher un message dans la console. Le message peut être une chaîne de caractères (avec d'éventuelles valeurs de substitution) ou un ou plusieurs objets JavaScript.

{{AvailableInWorkers}}

## Syntaxe

```js-nolint
log(obj1)
log(obj1, /* …, */ objN)
log(msg)
log(msg, subst1, /* …, */ substN)
```

### Paramètres

- `obj1` … `objN`
  - : Une liste d'objets JavaScript à afficher. Les objets sont affichés dans l'ordre des arguments. Attention, pour certains navigateurs, ce qui est affiché dans la console est _une référence à l'objet_ et pas nécessairement la valeur de l'objet au moment où `console.log()` est appelé (mais la valeur de l'objet au moment où la console est ouverte).
- `msg`
  - : Une chaîne de caractères JavaScript qui contient zéro ou plusieurs chaînes de substitution qui seront remplacées par `subst1` … `substN` dans l'ordre.
- `subst1` … `substN`
  - : Des objets JavaScript avec lesquels remplacer les chaînes de substitution dans `msg`. Ce paramètre permet un contrôle supplémentaire sur le format de ce qui est affiché. Voir [la page sur les chaînes de caractères de substitution avec `console`](/fr/docs/Web/API/console#utiliser_des_chaînes_de_substitution) pour plus de détails.

Voir [Afficher du texte dans la console](/fr/docs/Web/API/console#afficher_du_texte_dans_la_console) pour plus de détails.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Journaliser des objets

Les informations relatives aux objets sont récupérées lorsque c'est nécessaire. Cela signifie que le message dans la console affiche le contenu de l'objet au moment où on l'observe depuis la console, et pas le contenu de l'objet au moment où la méthode a été appelée. Par exemple, avec&nbsp;:

```js
const obj = {};
console.log(obj);
obj.prop = 123;
```

On verra `{}` affiché comme résultat. Mais si on déplie le détail de l'objet, on verra alors `prop: 123`.

Si vous modifiez l'objet et que vous ne voulez pas que les informations journalisées dans la console soient mises à jour, il faudra réaliser [un clone profond](/fr/docs/Glossary/Deep_copy) de l'objet avant de le journaliser. Une méthode courante pour ce faire consiste à utiliser [`JSON.stringify()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) puis [`JSON.parse()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)&nbsp;:

```js
console.log(JSON.parse(JSON.stringify(obj)));
```

D'autres méthodes, comme [`structuredClone()`](/fr/docs/Web/API/Window/structuredClone), peuvent fonctionner dans les navigateurs et seront plus efficaces pour cloner différents types d'objet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Documentation Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/console-log#console-messages-examples-log-info-error-and-warn)
- [Documentation Node.JS sur l'API Console](https://nodejs.org/docs/latest/api/console.html#consolelogdata-args)
- [Documentation Chrome](https://developer.chrome.com/docs/devtools/console/api/#log)
