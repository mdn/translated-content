---
title: "ARIA : rôle progressbar"
short-title: progressbar
slug: Web/Accessibility/ARIA/Reference/Roles/progressbar_role
original_slug: Web/Accessibility/ARIA/Roles/progressbar_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `progressbar` définit un élément qui affiche l'état de progression des tâches qui prennent du temps.

### Description

Le widget de plage `progressbar` indique qu'une demande a été reçue et que l'application progresse vers l'achèvement de l'action demandée.

Les auteur·ice·s **peuvent** définir `aria-valuemin` et `aria-valuemax` pour indiquer les valeurs minimale et maximale de l'indicateur de progression. Sinon, leurs valeurs implicites suivent les mêmes règles que celles de l'élément HTML [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range)&nbsp;:

- Si [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) est manquant ou n'est pas un nombre, il est par défaut à `0` (zéro).
- Si [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) est manquant ou n'est pas un nombre, il est par défaut à `100`.
- Les propriétés `aria-valuemin` et `aria-valuemax` n'ont besoin d'être définies pour le rôle `progressbar` que lorsque la valeur minimale de la barre de progression n'est pas `0` ou que la valeur maximale n'est pas `100`.
- La propriété en lecture seule [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) doit être fournie et mise à jour, sauf si la valeur est `indeterminate`, auquel cas n'incluez pas l'attribut. Si elle est définie, assurez-vous que la valeur de `aria-valuenow` se situe entre les valeurs minimale et maximale.

Si le rôle `progressbar` est appliqué à un élément HTML {{HTMLElement('progress')}}, le nom accessible peut provenir de la {{HTMLElement('label')}} associée. Sinon, utilisez [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) si une étiquette visible est présente ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) si une étiquette visible n'est pas présente.

### Tous les descendants sont des éléments de présentation

Il existe certains types de composants d'interface utilisateur qui, lorsqu'ils sont représentés dans une API d'accessibilité de plateforme, ne peuvent contenir que du texte. Les API d'accessibilité n'ont pas de moyen de représenter les éléments sémantiques contenus dans un `progressbar`. Pour faire face à cette limitation, les navigateurs appliquent automatiquement le rôle [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) à tous les éléments descendants de tout élément `progressbar`, car il s'agit d'un rôle qui ne prend pas en charge les enfants sémantiques.

Par exemple, considérons le suivant élément `progressbar`, qui contient un en-tête.

```html
<div role="progressbar"><h3>Titre de ma barre de progression</h3></div>
```

Parce que les descendants de `progressbar` sont des éléments de présentation, le code suivant est équivalent&nbsp;:

```html
<div role="progressbar">
  <h3 role="presentation">Titre de ma barre de progression</h3>
</div>
```

Du point de vue de l'utilisateur·ice de la technologie d'assistance, l'en-tête n'existe pas puisque les extraits de code précédents sont équivalents à ce qui suit dans l'{{Glossary("Accessibility_tree", "arbre d'accessibilité")}}&nbsp;:

```html
<div role="progressbar">Titre de ma barre de progression</div>
```

### Propriétés, états et rôles WAI-ARIA associés

- [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Seulement présent et requis si la valeur n'est pas indéterminée. Défini sur une valeur décimale comprise entre `0`, ou `aria-valuemin` si présent, et `aria-valuemax` indiquant la valeur actuelle de la barre de progression.
- [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Les technologies d'assistance présentent souvent la valeur de `aria-valuenow` sous forme de pourcentage. Si cela n'est pas précis, utilisez cette propriété pour rendre la valeur de la barre de progression compréhensible.
- [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Défini sur une valeur décimale représentant la valeur minimale, et inférieure à `aria-valuemax`. Si non présent, la valeur par défaut est `0`.
- [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Défini sur une valeur décimale représentant la valeur maximale, et supérieure à `aria-valuemin`. Si non présent, la valeur par défaut est `100`.
- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ou [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Définit la valeur de chaîne ou identifie l'élément (ou les éléments) qui étiquettent l'élément de la barre de progression fournissant un nom accessible. Un nom accessible est requis.

Il est recommandé d'utiliser un élément {{HTMLElement("progress")}} ou [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range) natif plutôt que le rôle `progressbar`. Les agents utilisateurs fournissent un widget stylisé pour l'élément {{HTMLElement("progress")}} basé sur la valeur actuelle par rapport à `0`, la valeur minimale et la valeur `max`. Lors de l'utilisation d'éléments non sémantiques, toutes les fonctionnalités de l'élément sémantique natif doivent être recréées avec des attributs ARIA, JavaScript et CSS.

## Exemples

Dans l'exemple ci-dessous, la barre de progression utilise les valeurs par défaut de 0 et 100 pour `aria-valuemin` et `aria-valuemax`&nbsp;:

```html
<div>
  <span id="loadinglabel">Chargement&nbsp;:</span>
  <span role="progressbar" aria-labelledby="loadinglabel" aria-valuenow="23">
    <svg width="100" height="10">
      <rect height="10" width="100" stroke="black" fill="black" />
      <rect height="10" width="23" fill="white" />
    </svg>
  </span>
</div>
```

En utilisant HTML sémantique, cela pourrait être écrit comme suit&nbsp;:

```html
<label for="loadinglabel">Chargement&nbsp;:</label>
<progress id="loadinglabel" max="100" value="23"></progress>
```

## Bonnes pratiques

Si la barre de progression décrit la progression de chargement d'une région particulière d'une page, incluez l'attribut [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) pour référencer l'état de la barre de progression, et définissez l'attribut [`aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) sur `true` dans la région jusqu'à ce qu'elle soit complètement chargée.

### Préférez HTML

Il est recommandé d'utiliser un élément {{HTMLElement("progress")}} ou [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range) natif plutôt que le rôle `progressbar`.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('progress')}}
- D'autres widgets de plage incluent&nbsp;:
  - [ARIA&nbsp;: rôle `meter`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [ARIA&nbsp;: rôle `scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [ARIA&nbsp;: rôle `separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (si sélectionnable)
  - [ARIA&nbsp;: rôle `slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
  - [ARIA&nbsp;: rôle `spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
