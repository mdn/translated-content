---
title: PerformanceNavigation
slug: Web/API/PerformanceNavigation
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Déprécié
  - Interface
  - Navigation Timing
  - Navigation Timing API
  - Performance
  - PerformanceNavigation
  - Reference
  - Timing
translation_of: Web/API/PerformanceNavigation
---
{{APIRef("Navigation Timing")}}

> **Attention :** cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne interface **`PerformanceNavigation`** représente des informations sur la façon dont la navigation vers le document actuel a été effectuée.

Un objet de ce type peut être obtenu en appelant l'attribut en lecture seule [`Performance.navigation`](/fr/docs/Web/API/Performance/navigation).

## Propriétés

_L'interface `PerformanceNavigation` n'hérite d'aucune propriété._

- [`PerformanceNavigation.type`](/fr/docs/Web/API/PerformanceNavigation/type) {{readonlyInline}} {{deprecated_inline}}

  - : Une valeur `unsigned short` qui indique comment la navigation vers cette page s'est faite. Les valeurs possibles sont :

    - `TYPE_NAVIGATE` (0)
      - : La page a été consultée en suivant un lien, un signet, un formulaire ou un script, ou en tapant l'URL dans la barre d'adresse.
    - `TYPE_RELOAD` (1)
      - : L'accès à la page s'est fait en cliquant sur le bouton Recharger ou via la méthode [`Location.reload()`](/fr/docs/Web/API/Location/reload).
    - `TYPE_BACK_FORWARD` (2)
      - : On a accédé à cette page en naviguant dans l'historique.
    - `TYPE_RESERVED` (255)
      - : De n'importe quelle autre manière.

- [`PerformanceNavigation.redirectCount`](/fr/docs/Web/API/PerformanceNavigation/redirectCount) {{readonlyInline}} {{deprecated_inline}}
  - : Un `unsigned short` représentant le nombre de **Redirections** effectués avant d'atteindre la page.

## Méthodes

_L'interface `Performance` n'hérite d'aucune méthode._

- [`PerformanceNavigation.toJSON()`](/fr/docs/Web/API/PerformanceNavigation/toJSON) {{deprecated_inline}}
  - : Un sérialiseur renvoyant un objet json représentant l'objet `PerformanceNavigation`.

## Spécifications

| Spécifications                                                                                                   | Statut                                   | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Navigation Timing', '#performancenavigation', 'PerformanceNavigation')}} | {{Spec2('Navigation Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceNavigation")}}

## Voir aussi

- L'interface [`Performance`](/fr/docs/Web/API/Performance) qui permet d'accéder à un objet de ce type.
- [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) (fait partie de Navigation Timing Level 2) {{experimental_inline}}
