---
title: API Console
slug: Web/API/Console_API
---

{{DefaultAPISidebar("Console API")}}

L'API Console fournit des fonctionnalités permettant d'effectuer des tâches de débogage lors du développement, telles que la journalisation de message ou des valeurs de variables à des points définis du code, ou le calcul de la durée d'une opération.

{{AvailableInWorkers}}

## Concepts et utilisation

L'API Console a commencé comme une API largement propriétaire, plusieurs différents navigateurs l'implémentant de façon hétérogène. [La spécification de l'API Console](https://console.spec.whatwg.org/) a été créée pour définir un comportement cohérent. L'ensemble des navigateurs modernes ont finalement décidé d'implémenter ce comportement (bien que certaines implémentations aient toujours certaines fonctions propriétaires supplémentaires).

L'utilisation se fait avec l'objet [`console`](/fr/docs/Web/API/Console) auquel on peut accéder via [`window.console`](/fr/docs/Web/API/Window/console), ou avec [`WorkerGlobalScope.console`](/fr/docs/Web/API/WorkerGlobalScope/console) pour les <i lang="en">workers</i> ou encore, plus simplement, avec `console`. Cet objet dispose de nombreuses méthodes permettant de réaliser des tâches de débogage rudimentaires, généralement axées sur la journalisation de diverses valeurs dans la [console web](/fr/docs/Tools/Web_Console) du navigateur.

La méthode la plus couramment utilisée est [`console.log()`](/fr/docs/Web/API/Console/log), qui permet d'afficher la valeur passée en argument dans la console des outils de développement.

## Interfaces

- [`console`](/fr/docs/Web/API/Console)
  - : Fournit des fonctionnalités de débogage rudimentaires, y compris la journalisation, les traces des piles d'appels, les chronomètres et les compteurs.

## Exemples

```js
let maChaine = "Hello world";

// Affiche "Hello world" dans la console
console.log(maChaine);
```

Consultez [la page de référence de la console](/fr/docs/Web/API/Console#exemples_dutilisation) pour plus d'exemples.

## Spécifications

{{Specifications("api.console")}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Documentation des outils de développement de Firefox](/fr/docs/Tools)
  - [Console web](/fr/docs/Tools/Web_Console) — comment la console web de Firefox traite les appels de l'API Console.
  - [Débogage à distance](/fr/docs/Tools/Remote_Debugging) — comment voir la sortie de la console lorsque la cible de débogage est un appareil mobile.
- [Documentation de l'API Console pour les outils de développement de Google Chrome (en anglais)](https://developer.chrome.com/docs/devtools/console/api/)
- [Documentation pour les outils de développement de Edge (en anglais)](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api)
- [Documentation de l'API Console pour les outils de dévéloppement de Safari (en anglais)](https://webkit.org/web-inspector/console-object-api/)
