---
title: "ARIA : rôle term"
short-title: term
slug: Web/Accessibility/ARIA/Reference/Roles/term_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `term` peut être utilisé pour un mot ou une expression avec une [`definition`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role) associée (optionnelle).

## Description

Le rôle `term` peut être utilisé pour un mot ou une expression avec une [`definition`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role) associée (optionnelle). Il est sémantiquement équivalent à l'élément HTML {{HTMLElement('dfn')}} et à l'élément terme de définition ({{HTMLElement('dt')}}) dans une liste de définitions ({{HTMLElement('dl')}}).

Le rôle `term` sert à identifier explicitement un mot ou une expression pour lequel une définition a été fournie par l'auteur·ice ou est attendue de l'utilisateur·ice. S'il existe une définition, ou un formulaire ou un contrôle de formulaire pour saisir une définition, il est recommandé d'utiliser [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) pour pointer vers l'élément associé.

N'utilisez pas le rôle `term` sur des éléments interactifs comme des liens, car cela peut gêner l'accès des utilisateur·ice·s de technologies d'assistance à l'élément. De plus, le terme lui-même constitue le nom accessible, donc n'utilisez pas [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ni [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).

> [!WARNING]
> Le nom accessible doit être le terme lui-même, donc n'utilisez PAS `aria-label` ni `aria-labelledby`.

### Propriétés, états et rôles WAI-ARIA associés

Aucun.

### Interactions au clavier

Aucune.

### Fonctionnalités JavaScript requises

Aucune.

## Exemples

```html
<p>
  <span role="term">Mansplaining</span>,
  <span role="definition"
    >Mot-valise formé à partir de «&nbsp;man&nbsp;» et «&nbsp;explain&nbsp;»,
    désigne l'acte paternaliste d'expliquer sans qu'on le demande, à une
    personne déjà experte sur le sujet, souvent après qu'une autre explication
    ait déjà été donnée.</span
  >.
</p>
```

Pour une meilleure sémantique, cela pourrait aussi s'écrire&nbsp;:

```html
<p>
  <dfn role="term">Mansplaining</dfn>,
  <span role="definition"
    >Mot-valise formé à partir de «&nbsp;man&nbsp;» et «&nbsp;explain&nbsp;»,
    désigne l'acte paternaliste d'expliquer sans qu'on le demande, à une
    personne déjà experte sur le sujet, souvent après qu'une autre explication
    ait déjà été donnée.</span
  >.
</p>
```

Ou sans ARIA (mais ce n'est peut-être pas la présentation souhaitée)&nbsp;:

```html
<dl>
  <dt>Mansplaining</dt>
  <dd>
    Mot-valise formé à partir de «&nbsp;man&nbsp;» et «&nbsp;explain&nbsp;»,
    désigne l'acte paternaliste d'expliquer sans qu'on le demande, à une
    personne déjà experte sur le sujet, souvent après qu'une autre explication
    ait déjà été donnée.
  </dd>
</dl>
```

## Problèmes d'accessibilité

N'utilisez pas le rôle `term` sur des éléments interactifs comme les liens, car cela peut gêner l'accès des utilisateur·ice·s de technologies d'assistance à l'élément.

## Bonnes pratiques

Laissez le terme lui-même définir le nom accessible. N'utilisez pas `aria-label` ni `aria-labelledby`.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `definition`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role).
- L'élément HTML {{HTMLElement('dfn')}}
