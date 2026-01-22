---
title: "ARIA : attribut aria-pressed"
short-title: aria-pressed
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-pressed
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-pressed` indique l'état «&nbsp;enfoncé&nbsp;» actuel d'un bouton à bascule.

## Description

Ajouter `aria-pressed` à un élément ayant le rôle [`button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) transforme le bouton en bouton à bascule. L'attribut `aria-pressed` n'est pertinent que pour les boutons à bascule. Il représente l'état «&nbsp;enfoncé&nbsp;» actuel du bouton.

La valeur est «&nbsp;tri-état&nbsp;», ce qui signifie qu'elle peut être définie sur `true`, `false`, `mixed` ou `undefined`. Pour `aria-pressed`, comme pour la plupart des types de valeurs tri-état, la valeur par défaut est `undefined`.

Les boutons à bascule nécessitent un cycle complet d'appui et de relâchement pour changer leur valeur. Un appui et relâchement change la valeur à `true`. Un nouvel appui et relâchement la ramène à `false`.

Une valeur `mixed` signifie que les valeurs de plusieurs éléments contrôlés par le bouton ne sont pas toutes identiques.

Ne modifiez pas le contenu du label d'un bouton à bascule lorsque l'état change. Si le label du bouton indique «&nbsp;Pause&nbsp;», ne le changez pas en «&nbsp;Lecture&nbsp;» lorsque le bouton est enfoncé. Dans cet exemple, lorsque l'état enfoncé est vrai, le label reste «&nbsp;Pause&nbsp;» afin qu'un lecteur d'écran annonce «&nbsp;Bouton à bascule Pause enfoncé&nbsp;».

```html
<button aria-pressed="false">Pause</button>
```

Si vous souhaitez que le label bascule entre «&nbsp;Pause&nbsp;» et «&nbsp;Lecture&nbsp;», n'utilisez pas `aria-pressed`.

La première règle d'utilisation d'ARIA est&nbsp;: «&nbsp;Si vous pouvez utiliser une fonctionnalité native avec la sémantique et le comportement requis déjà intégrés, au lieu de détourner un élément et d'ajouter un rôle, un état ou une propriété ARIA pour le rendre accessible, faites-le.&nbsp;» Si l'on utilise la sémantique HTML native avec {{HTMLElement('button')}}, on peut basculer le label au lieu de l'état enfoncé, ce qui supprime le besoin de l'attribut `aria-pressed`.

## Valeurs

- `false`
  - : Le bouton peut être enfoncé mais ne l'est pas actuellement.
- `mixed`
  - : Indique une valeur mixte pour un bouton à bascule tri-état.
- `true`
  - : Le bouton est enfoncé.
- `undefined` (valeur par défaut)
  - : L'élément ne prend pas en charge l'état enfoncé.

## Interfaces associées

- {{DOMxRef("Element.ariaPressed")}}
  - : La propriété {{DOMxRef("Element.ariaPressed", "ariaPressed")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-pressed`.
- {{DOMxRef("ElementInternals.ariaPressed")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaPressed", "ariaPressed")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-pressed`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)

## Spécifications

{{Specifications}}

## Voir aussi

- [`<input type="button">`](/fr/docs/Web/HTML/Reference/Elements/input/button)
- [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit)
- L'élément HTML {{HTMLElement('button')}}
- L'attribut ARIA [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
- L'attribut ARIA [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
