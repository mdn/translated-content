---
title: "ARIA : attribut aria-busy"
short-title: aria-busy
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-busy
l10n:
  sourceCommit: 3f5e0667617e7c472a3ce99dc0afdb0999044341
---

L'attribut `aria-busy` est un état ARIA global qui indique si un élément est en cours de modification.
Il aide les technologies d'assistance à comprendre que les changements apportés au contenu ne sont pas encore terminés, et qu'elles doivent attendre avant d'informer l'utilisateur·ice de la mise à jour.
Si `aria-busy` est couramment utilisé dans les [régions ARIA dynamiques](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions) pour retarder les annonces jusqu'à la fin des mises à jour, il peut aussi être utilisé en dehors de ces régions&nbsp;: par exemple, dans des widgets ou des fils d'actualités, pour signaler des modifications en cours ou un chargement.

Lorsque plusieurs parties d'une région dynamique doivent être chargées avant d'annoncer les changements à l'utilisateur·ice, définissez `aria-busy="true"` jusqu'à la fin du chargement, puis passez à `aria-busy="false"`. Cela empêche les technologies d'assistance d'annoncer les changements avant que les mises à jour ne soient terminées.

## Description

Il existe une section de contenu qui se met à jour. Ces mises à jour sont importantes et vous souhaitez informer l'utilisateur·ice lorsqu'elle a été modifiée, vous l'avez donc transformée en [région ARIA dynamique](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions) avec l'attribut [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live). Vous pouvez vouloir mettre à jour plusieurs composants de cette section en même temps, mais il est possible que tout ne se mette pas à jour simultanément. Même s'il s'agit d'une région dynamique très importante avec `aria-live="assertive"`, vous ne souhaitez pas interrompre l'utilisateur·ice plusieurs fois à mesure que différentes parties du contenu se chargent. C'est là que `aria-busy` est utile.

La propriété `aria-busy` est une propriété optionnelle des régions dynamiques qui peut prendre la valeur `true` ou `false`. L'attribut `aria-busy` avec la valeur `true` peut être ajouté à un élément en cours de modification, pour informer la technologie d'assistance qu'elle doit attendre la fin des modifications avant d'exposer le contenu à l'utilisateur·ice. Utilisez la propriété [`ariaBusy`](/fr/docs/Web/API/Element/ariaBusy) de l'objet pour passer la valeur à `false` une fois le téléchargement terminé.

```js
ariaLiveElement.ariaBusy = "false";
```

La valeur de [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) détermine si les changements sont annoncés immédiatement lors du passage à `false`, ou si la technologie d'assistance attend la fin de la tâche en cours avant d'interrompre l'utilisateur·ice.

### Dans un `feed`

Si un élément avec le rôle [`feed`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role) a `aria-busy` à `true`, les changements de rendu à l'intérieur du fil ne seront pas annoncés, sauf s'ils sont initiés par l'utilisateur·ice.

### Dans un widget

Si les modifications d'un widget affiché créent un état où le widget manque d'éléments enfants requis pendant l'exécution du script, définissez `aria-busy` à `true` sur le widget pendant le processus de mise à jour. Par exemple, si une arborescence affichée met à jour plusieurs branches qui ne sont pas nécessairement rendues simultanément, une alternative au remplacement de tout l'arbre en une seule mise à jour consiste à marquer l'arbre comme occupé pendant la modification de chaque branche.

## Valeurs

- `false` (valeur par défaut)&nbsp;:
  - : Aucun changement n'est attendu pour l'élément.
- `true`
  - : L'élément est en cours de modification.

## Interfaces associées

- {{domxref("Element.ariaBusy")}}
  - : La propriété [`ariaBusy`](/fr/docs/Web/API/Element/ariaBusy), qui fait partie de l'interface de chaque élément, reflète la valeur de l'attribut `aria-busy` et indique si un élément est en cours de modification.

```html
<div
  id="clock"
  role="timer"
  aria-live="polite"
  aria-atomic="true"
  aria-busy="false"></div>
```

```js
const el = document.getElementById("clock");
console.log(el.ariaBusy); // false
el.ariaBusy = "true";
console.log(el.ariaBusy); // true
```

## Rôles associés

Utilisé dans **TOUS** les rôles

## Spécifications

{{Specifications}}

## Voir aussi

- [Régions ARIA dynamiques](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- L'attribut ARIA [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- L'attribut ARIA [`aria-relevant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- L'attribut ARIA [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
