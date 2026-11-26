---
title: "ARIA : rôle graphics-symbol"
short-title: graphics-symbol
slug: Web/Accessibility/ARIA/Reference/Roles/graphics-symbol_role
l10n:
  sourceCommit: 370f1912b54d24bd7da541f8f2dd98c26d377121
---

Le rôle `graphics-symbol` identifie un objet graphique qui transmet un sens ou une catégorie simple, où le sens est plus important que l'apparence visuelle particulière.

> [!NOTE]
> Le rôle `graphics-symbol` est défini dans la spécification du [Module graphique WAI-ARIA <sup>(angl.)</sup>](https://w3c.github.io/graphics-aria/).
> Il ne fait pas partie de la spécification principale de [WAI-ARIA <sup>(angl.)</sup>](https://w3c.github.io/aria/).

## Description

Le rôle `graphics-symbol` identifie un élément comme un symbole significatif et atomique qui fonctionne comme une unité unique. Il peut faire partie d'une structure graphique plus vaste, telle qu'une carte, un graphique ou un diagramme.

Le rôle `graphics-symbol` est une sous-classe de [`img`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) pour les symboles ayant un sens simple, tandis qu'un `img` peut nécessiter une description détaillée.

### Tous les descendants sont présentatifs

Les enfants d'un `graphics-symbol` ne sont pas exposés séparément aux technologies d'assistance. Incluez tout texte significatif provenant de ses enfants dans le nom accessible du symbole.

### Rôles, états et propriétés WAI-ARIA associés

- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Un `graphics-symbol` doit avoir un nom accessible. Utilisez `aria-labelledby` pour référencer un libellé ou `aria-label` pour le fournir directement.
- [`aria-roledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Lorsqu'il est utilisé dans le cadre d'un langage symbolique structuré, cet attribut peut nommer le type de symbole séparément du nom et de la description d'un symbole individuel.

## Exemples

Chaque symbole d'emplacement de parking combine un rectangle et du texte en un seul élément {{SVGElement("g")}}. Le rôle `graphics-symbol` fait de cette combinaison un objet unique pour les technologies d'assistance, avec son sens fourni par `aria-label`. L'élément {{SVGElement("svg")}} externe fournit la sémantique du document graphique.

```html
<svg aria-label="Emplacement de parking" viewBox="0 0 700 220">
  <title>Emplacement de parking avec des places désignées</title>
  <g role="graphics-symbol" aria-label="Place de parking disponible">
    <rect
      x="90"
      y="50"
      width="100"
      height="150"
      fill="#3986ca"
      stroke="black"
      stroke-width="3" />
    <text
      x="140"
      y="135"
      text-anchor="middle"
      fill="black"
      font-size="35"
      font-weight="bold">
      P
    </text>
    <text x="140" y="180" text-anchor="middle" fill="black" font-size="18">
      Disponible
    </text>
  </g>
  <g role="graphics-symbol" aria-label="Place de parking réservée">
    <rect
      x="290"
      y="50"
      width="100"
      height="150"
      fill="#cac539"
      stroke="black"
      stroke-width="3" />
    <text
      x="340"
      y="135"
      text-anchor="middle"
      fill="black"
      font-size="35"
      font-weight="bold">
      P
    </text>
    <text x="340" y="180" text-anchor="middle" fill="black" font-size="18">
      Réservée
    </text>
  </g>
  <g role="graphics-symbol" aria-label="Place de parking indisponible">
    <rect
      x="490"
      y="50"
      width="100"
      height="150"
      fill="#b3b3b3"
      stroke="black"
      stroke-width="3" />
    <text
      x="540"
      y="135"
      text-anchor="middle"
      fill="black"
      font-size="35"
      font-weight="bold">
      P
    </text>
    <circle
      cx="540"
      cy="123"
      r="32"
      fill="none"
      stroke="black"
      stroke-width="4" />
    <line x1="517" y1="100" x2="563" y2="146" stroke="black" stroke-width="4" />
    <text x="540" y="180" text-anchor="middle" fill="black" font-size="16">
      Indisponible
    </text>
  </g>
</svg>
```

{{EmbedLiveSample("Exemples", 600, 250)}}

## Bonnes pratiques

N'utilisez pas ce rôle pour les graphiques décoratifs. Utilisez `aria-hidden="true"` à la place.

Évitez ce rôle pour les graphiques complexes avec une structure interne. Utilisez plutôt [`graphics-object`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role).

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément {{SVGElement("svg")}}
- [ARIA dans HTML <sup>(angl.)</sup>](https://w3c.github.io/html-aria/)
- [ARIA&nbsp;: rôle `graphics-document`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role)
- [ARIA&nbsp;: rôle `graphics-object`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role)
- [ARIA&nbsp;: rôle `figure`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
- [ARIA&nbsp;: rôle `img`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/img_role)
- [Notes sur l'utilisation de ARIA dans HTML <sup>(angl.)</sup>](https://w3c.github.io/using-aria/)
