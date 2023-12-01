---
title: PerformanceNavigation.type
slug: Web/API/PerformanceNavigation/type
---

{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser la propriété [`PerformanceNavigationTiming.type`](/fr/docs/Web/API/PerformanceNavigationTiming/type) de l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété **`PerformanceNavigation.type`** en lecture seule renvoie un `unsigned short` contenant une constante décrivant comment la navigation vers cette page a été effectuée. Les valeurs possibles sont :

| Valeur | Nom de la constante | Signification                                                                                                                          |
| ------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `0`    | `TYPE_NAVIGATE`     | La page a été consultée en suivant un lien, un signet, un formulaire, un script ou en tapant l'URL dans la barre d'adresse.            |
| `1`    | `TYPE_RELOAD`       | La page a été consultée en cliquant sur le bouton Recharger ou via la méthode [`Location.reload()`](/fr/docs/Web/API/Location/reload). |
| `2`    | `TYPE_BACK_FORWARD` | La page a été consultée en naviguant dans l'historique.                                                                                |
| `255`  | `TYPE_RESERVED`     | De toute autre manière.                                                                                                                |

## Syntaxe

```js
let type = performanceNavigation.type;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`PerformanceNavigation`](/fr/docs/Web/API/PerformanceNavigation) à laquelle il appartient.
