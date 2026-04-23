---
title: États et propriétés ARIA (attributs)
short-title: Attributs
slug: Web/Accessibility/ARIA/Reference/Attributes
original_slug: Web/Accessibility/ARIA/Attributes
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Cette page constitue un index des pages de référence couvrant l'ensemble des attributs <abbr>WAI-ARIA</abbr> sur MDN.

Les attributs <abbr>ARIA</abbr> permettent de modifier les états et les propriétés d'un élément dans l'arbre d'accessibilité.

> [!NOTE]
> ARIA modifie uniquement l'arbre d'accessibilité, modifiant ainsi la façon dont les outils d'assistance présentent le contenu aux personnes qui les utilisent. ARIA ne modifie en rien les fonctionnalités ou le comportement d'un élément. Lorsqu'on utilise des éléments HTML en dehors de leur sémantique et de leurs fonctionnalités prévues, il faudra utiliser JavaScript pour gérer le comportement, le focus et les états ARIA.

## Types d'attribut ARIA

Il existe 4 catégories d'états et de propriétés ARIA&nbsp;:

### Attributs de widgets

- [`aria-autocomplete`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
- [`aria-disabled`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-invalid`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-level`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- [`aria-modal`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-multiline`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)
- [`aria-multiselectable`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
- [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
- [`aria-placeholder`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)
- [`aria-pressed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-readonly`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [`aria-sort`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
- [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
- [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)

### Attributs de régions dynamiques

- [`aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)

### Attributs de glisser-déposer

- [`aria-dropeffect`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)
- [`aria-grabbed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)

### Attributs de relation

- [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
- [`aria-colcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- [`aria-colspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
- [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-flowto`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- [`aria-rowcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-rowspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)

## Attributs ARIA universels

Certains états et propriétés s'appliquent à l'ensemble des éléments HTML, qu'un rôle AIRA soit appliqué ou non. Ils sont définis comme des attributs «&nbsp;universels&nbsp;». Les états et propriétés universels sont pris en charge par tous les rôles et tous les éléments de balisage de base.

La plupart des attributs listés avant sont universels, ce qui signifie qu'on peut les inclure sur n'importe quel élément, à moins qu'ils soient explicitement interdits&nbsp;:

- [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-current`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)
- [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-description`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-disabled`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-dropeffect`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)
- [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-flowto`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`aria-grabbed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)
- [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-invalid`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-keyshortcuts`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts)
- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-relevant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-roledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)

Tous les attributs de cette liste sont universels et seules les propriétés `aria-label` et `aria-labelledby` ne sont pas autorisées sur les éléments dont le rôle vaut [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)) ou le rôle synonyme [`none`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)).

## États et propriétés définis sur MDN

Les pages suivantes sont les pages de référence qui couvrent les états et propriétés <abbr>WAI-ARIA</abbr> sur <abbr title="Mozilla Developer Network">MDN</abbr>.

{{SubpagesWithSummaries}}

## Voir aussi

- [Utiliser ARIA&nbsp;: propriétés, états et rôles](/fr/docs/Web/Accessibility/ARIA/Guides/Techniques)
