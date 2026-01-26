---
title: "ARIA : rôle meter"
short-title: meter
slug: Web/Accessibility/ARIA/Reference/Roles/meter_role
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Le rôle `meter` sert à identifier un élément utilisé comme indicateur de mesure.

> [!NOTE]
> Lorsque cela est possible, il est recommandé d'utiliser l'élément natif {{HTMLElement("meter")}} plutôt que le rôle `meter`, car les éléments natifs sont mieux pris en charge par les navigateurs et les technologies d'assistance.

## Description

Un indicateur de mesure (<i lang="en">meter</i> en anglais) est une représentation graphique d'une valeur numérique dans une plage définie. Par exemple, l'affichage du pourcentage de batterie. Un indicateur de mesure n'est pas adapté aux valeurs qui n'ont pas de limite maximale significative. Il ne doit pas être utilisé pour indiquer une progression (exemple&nbsp;: chargement), cela doit être communiqué avec l'élément {{HTMLElement('progress')}}.

Chaque élément avec `role="meter"` doit également comporter l'un des attributs suivants&nbsp;:

- Un attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).
- Un attribut [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) pointant vers un élément contenant un texte qui décrit l'indicateur de mesure.

### Tous les descendants sont des éléments de présentation

Certaines interfaces utilisateur, lorsqu'elles sont représentées dans une API d'accessibilité de plateforme, ne peuvent contenir que du texte. Les API d'accessibilité ne permettent pas de représenter des éléments sémantiques contenus dans un `meter`. Pour pallier cette limitation, les navigateurs appliquent automatiquement le rôle [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) à tous les éléments descendants d'un élément `meter`, car il s'agit d'un rôle qui ne prend pas en charge les enfants sémantiques.

Par exemple, considérez l'élément `meter` suivant, qui contient un titre&nbsp;:

```html
<div role="meter"><h3>Titre de mon indicateur de mesure</h3></div>
```

Comme les descendants de `meter` sont des éléments de présentation, le code suivant est équivalent&nbsp;:

```html
<div role="meter">
  <h3 role="presentation">Titre de mon indicateur de mesure</h3>
</div>
```

Du point de vue de l'utilisateur·ice de technologies d'assistance, le titre n'existe pas puisque les extraits de code précédents sont équivalents à ce qui suit dans [l'arbre d'accessibilité](/fr/docs/Glossary/Accessibility_tree)&nbsp;:

```html
<div role="meter">Titre de mon indicateur de mesure</div>
```

### Propriétés, états et rôles WAI-ARIA associés

- [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Défini sur une valeur décimale comprise entre `aria-valuemin` et `aria-valuemax` indiquant la valeur actuelle de l'indicateur de mesure.
- [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Les technologies d'assistance présentent souvent la valeur de `aria-valuenow` comme un pourcentage. Si cela n'est pas pertinent, utilisez cette propriété pour rendre la valeur compréhensible.
- [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Défini sur une valeur décimale représentant la valeur minimale, et inférieure à `aria-valuemax`.
- [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Défini sur une valeur décimale représentant la valeur maximale, et supérieure à `aria-valuemin`.

Il est recommandé d'utiliser l'élément natif {{HTMLElement("meter")}} plutôt que le rôle `meter`. Les navigateurs proposent un widget stylisé pour l'élément {{HTMLElement("meter")}} en fonction de la valeur courante (`value`) par rapport aux valeurs `min` et `max`. Si vous utilisez des éléments non sémantiques, toutes les fonctionnalités de l'élément natif doivent être recréées avec des attributs ARIA, du JavaScript et du CSS.

## Exemples

Exemple d'indicateur de mesure utilisant `role="meter"`&nbsp;:

```html
<div
  role="meter"
  aria-valuenow="90"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-labelledby="cpu_usage_label">
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width: 90%">
    <rect x="0" y="0" width="100%" height="100%" fill="currentColor"></rect>
  </svg>
</div>
```

Dans ce scénario, lorsque la valeur de `aria-valuenow` est mise à jour, la largeur du SVG doit aussi être modifiée, comme illustré dans [l'exemple fonctionnel du guide des bonnes pratiques ARIA (APG) <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/meter/examples/meter/).

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('meter')}}
- L'élément HTML {{HTMLElement('progress')}}
