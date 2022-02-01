---
title: Console API
slug: Web/API/Console_API
tags:
  - API
  - Aperçu
  - Journal
  - Sortie
  - console
  - débogage
  - test
translation_of: Web/API/Console_API
---
{{DefaultAPISidebar("Console API")}}

L'**`API Console`** fournit des fonctionnalités permettant aux développeurs d'effectuer des tâches de débogage, telles que la journalisation des messages ou les valeurs des variables à des points définis dans votre code, ou calculer la durée d'une opération.

## Concepts et utilisation

L'`API Console` a commencé comme une API largement propriétaire, avec différents navigateurs l'implémentant, bien que cela ne soit pas cohérent. [La spécification de l'API Console](https://console.spec.whatwg.org/) a été créée pour définir un comportement cohérent, et tous les navigateurs modernes ont finalement décidé d'implémenter ce comportement - bien que certaines implémentations aient toujours leurs propres fonctions propriétaires supplémentaires. Découvrez-les sur:

- [Implémentation de Google Chrome DevTools](https://developers.google.com/chrome-developer-tools/docs/console-api)
- [Implémentation de Safari DevTools](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)

L'utilisation est très simple - l'objet {{domxref ("console")}} - disponible via {{domxref ("window.console")}}, ou {{domxref ("WorkerGlobalScope.console")}} dans les workers; accessible en utilisant uniquement la `console` - contient de nombreuses méthodes que vous pouvez appeler pour effectuer des tâches de débogage rudimentaires, généralement axées sur la journalisation de diverses valeurs dans la [console Web](/fr/docs/Tools/Web_Console) du navigateur.

La méthode de loin la plus couramment utilisée est {{domxref ("console.log")}}, qui est utilisée pour consigner la valeur en cours contenue dans une variable spécifique.

## Interfaces

- {{domxref("console")}}
  - : Fournit des fonctionnalités de débogage rudimentaires, y compris la journalisation, les traces de pile, les minuteries et les compteurs.

## Exemples

```js
let myString = 'Hello world'

// Output "Hello world" to the console
console.log(myString)
```

Consultez [la page de référence de la console](/fr/docs/Web/API/Console#Usage) pour plus d'exemples.

## Spécifications

| Spécification                        | Status                           | Comment             |
| ------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('Console API')}} | {{Spec2('Console API')}} | Définition initial. |

## Compatibilité des navigateurs

{{Compat("api.Console")}}

## Voir également

- [Outils](/en-US/docs/Tools)
- [Console Web](/fr/docs/Tools/Web_Console) - comment la console Web de Firefox traite les appels de l'`API Console`.
- [Débogage à distance](/fr/docs/Tools/Remote_Debugging) - comment voir la sortie de la console lorsque la cible de débogage est un appareil mobile.
