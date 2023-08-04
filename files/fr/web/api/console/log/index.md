---
title: console.log()
slug: Web/API/console/log
---

{{APIRef("Console API")}}

La méthode **`console.log()`** affiche un message dans la console Web. Le message peut être une simple chaine de caractères (avec des valeurs optionnelles de substitution) ou peut être composé d'un ou plusieurs objets JavaScript.

{{AvailableInWorkers}}

## Syntaxe

```js
console.log(obj1 [, obj2, ..., objN]);
console.log(msg [, subst1, ..., substN]);
```

### Paramètres

- `obj1` ... `objN`
  - : Une liste d'objets Javascript à afficher. Les représentations textuelles de chacun de ces objets seront affichées dans la console du navigateur selon l'ordre indiqué. Attention, pour les versions récentes de Chrome et Firefox, ce qui apparaît dans la console est une **référence à l'objet** et pas nécessairement la valeur de l'objet au moment de l'appel à `console.log()` mais sa valeur au moment où on ouvre la console.
- `msg`
  - : Une chaîne de caractères JavaScript contenant zéro ou plusieurs chaînes de substitution.
- `subst1` ... `substN`
  - : Des objets JavaScript dont les valeurs textuelles remplaceront les emplacements à substituer indiqués dans `msg`. Cela offre plus de contrôle sur le format d'affichage.

Voir [Afficher du texte sur la console](/fr/docs/Web/API/Console#outputting_text_to_the_console) dans la documentation de [`console`](/fr/docs/Web/API/Console) pour plus de détails.

## Différence entre console.log() et console.dir()

Vous pourriez vous demander quelles sont les différences entre [`console.dir()`](/fr/docs/Web/API/Console/dir) et `console.log()`.

Celles-ci concernent principalement la gestion particulière des objets du DOM :

- `console.log()` affiche les éléments dans un arbre de type HTML,
- `console.dir()` affiche les propriétés de l'objet JavaScript.

![](dozdcyr.png)

## Affichage d'objets dans la console

Évitez d'utiliser `console.log(obj)` mais préférez `console.log(JSON.parse(JSON.stringify(obj)))` si vous souhaîtez être sûr·e d'observer la valeur de l'objet au moment de l'exécution de `console.log()`. Autrement, de nombreux navigateurs produisent un affichage interactif de l'objet qui se maintient à jour quand les propriétés de l'objet changent. Cela ne pourrait pas être ce que vous voulez et peut porter à confusion.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Docs Microsoft : Edge - Afficher des messages dans la console](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/console-log)
- [La référence de l'API Console pour Chrome](https://developers.google.com/chrome-developer-tools/docs/console-api#consoledirobject)
- [NodeJS : API Console](https://nodejs.org/docs/latest/api/console.html#console_console_log_data)
