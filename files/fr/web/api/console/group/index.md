---
title: Console.group()
slug: Web/API/Console/group
tags:
  - API
  - DOM
  - Développement
  - Méthodes
  - Web
  - console
  - débogage
translation_of: Web/API/Console/group
---
{{APIRef("Console API")}}

Création d'un nouveau groupe en ligne dans la [console Web](/en-US/docs/Tools/Web_Console). Cela indente les messages de console suivants par un niveau supplémentaire, jusqu'à ce que {{domxref("console.groupEnd()")}} soit appelé.

{{AvailableInWorkers}}

## Syntax

    console.group();

## Paramètres

- `label`
  - : donne une étiquette au groupe. Facultatif. (Chrome 59 testé). Ne fonctionne pas avec` ``console.groupEnd()`.

## Exemples

Vous pouvez utiliser des groupes imbriqués pour organiser votre sortie en associant visuellement les messages correspondants. Pour créer un nouveau bloc imbriqué, appelez `console.group ()`. La méthode `console.groupCollapsed ()` est similaire, mais le nouveau bloc est réduit et nécessite de cliquer sur un bouton de divulgation pour le lire.

Pour sortir du groupe courant, appeler `console.groupEnd()`. Par exemple, étant donné ce code :

```js
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");
```

La sortie ressemble à ceci :

![Une capture d'écran de messages imbriqués dans la sortie de la console.](nesting.png)

Pour plus de détail, se reporter à l'article [Using groups in the console](/fr/docs/Web/API/console#Using_groups_in_the_console) dans la documentation sur la {{domxref("console")}}.

## Spécifications

| Spécification                                                                                            | Statut                           | Commentaire        |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName("Console API", "#consolegroupobject-object-", "console.group()")}} | {{Spec2("Console API")}} | Initial definition |

## Compatibilité des navigateurs

{{Compat("api.Console.group")}}

## Voir aussi

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
