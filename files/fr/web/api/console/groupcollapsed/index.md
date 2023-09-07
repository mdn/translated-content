---
title: Console.groupCollapsed()
slug: Web/API/console/groupCollapsed
---

{{APIRef("Console API")}}

Crée un nouveau groupe intégré dans la console Web. Contrairement à {{domxref ("console.group ()")}}, le nouveau groupe est créé réduit. L'utilisateur devra utiliser le bouton de divulgation à côté pour le développer, en révélant les entrées créées dans le groupe.

Appellez {{domxref("console.groupEnd()")}} pour revenir au groupe parent.

Voir [Using groups in the console](/fr/docs/Web/API/console#Using_groups_in_the_console) dans la documentation de {{domxref("console")}} pour plus de détails et des exemples.

{{AvailableInWorkers}}

## Syntaxe

```js
console.groupCollapsed([label]);
```

## Paramètres

- `label`
  - : Étiquette pour le groupe. Facultatif.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
