---
title: "ARIA : rôle graphics-object"
short-title: graphics-object
slug: Web/Accessibility/ARIA/Reference/Roles/graphics-object_role
l10n:
  sourceCommit: 370f1912b54d24bd7da541f8f2dd98c26d377121
---

Le rôle `graphics-object` identifie une section d'un [`graphics-document`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role) qui représente un objet ou un sous-composant distinct ayant une signification sémantique.

> [!NOTE]
> Le rôle `graphics-object` est défini dans la spécification du [Module graphique WAI-ARIA <sup>(angl.)</sup>](https://w3c.github.io/graphics-aria/).
> Il ne fait pas partie de la spécification principale de [WAI-ARIA <sup>(angl.)</sup>](https://w3c.github.io/aria/).

## Description

Le rôle `graphics-object` identifie une partie distincte d'un graphique plus vaste, comme une région sur une carte, une barre dans un graphique ou un nœud dans un diagramme. Un `graphics-object` peut lui-même contenir des sous-composants imbriqués. Contrairement à un [`graphics-document`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role), il n'a pas besoin d'être autonome et n'introduit pas de contexte de navigation distinct.

### Rôles, états et propriétés WAI-ARIA associés

- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Un nom accessible est facultatif et peut aussi être déduit du contenu de l'élément. Utilisez `aria-labelledby` pour référencer un libellé ou `aria-label` pour le fournir directement.

## Exemples

Sur cette carte simplifiée, chaque continent est un objet distinct qui contient une forme et un libellé textuel. Le rôle `graphics-object` identifie chaque {{SVGElement("g")}} comme une partie significative de la carte tout en préservant son contenu enfant. Un groupe utilisé uniquement pour positionner ou mettre en forme des éléments n'a pas besoin de ce rôle. L'élément {{SVGElement("svg")}} externe fournit la sémantique du document graphique.

```html
<svg
  aria-label="Carte du monde montrant les principaux continents"
  viewBox="0 0 900 420">
  <title>Carte du monde simplifiée</title>
  <g role="graphics-object">
    <circle cx="700" cy="130" r="120" fill="#3eca39" stroke="black" />
    <text x="700" y="137" fill="black" text-anchor="middle">Asie</text>
  </g>
  <g role="graphics-object">
    <circle cx="400" cy="70" r="50" fill="#7d39ca" stroke="black" />
    <text x="400" y="77" fill="white" text-anchor="middle">Europe</text>
  </g>
  <g role="graphics-object">
    <circle cx="400" cy="260" r="100" fill="#ca7d39" stroke="black" />
    <text x="400" y="267" fill="black" text-anchor="middle">Afrique</text>
  </g>
  <g role="graphics-object">
    <circle cx="120" cy="70" r="65" fill="#ca393e" stroke="black" />
    <text x="120" y="77" fill="white" text-anchor="middle">
      Amérique du Nord
    </text>
  </g>
  <g role="graphics-object">
    <circle cx="120" cy="260" r="60" fill="#39ca7d" stroke="black" />
    <text x="120" y="267" fill="black" text-anchor="middle">
      Amérique du Sud
    </text>
  </g>
  <g role="graphics-object">
    <circle cx="760" cy="350" r="50" fill="#cac539" stroke="black" />
    <text x="760" y="357" fill="black" text-anchor="middle">Australie</text>
  </g>
</svg>
```

{{EmbedLiveSample("Exemples", 600, 360)}}

## Bonnes pratiques

Lorsque vous traitez des éléments conteneurs qui représentent un ensemble d'objets disjoints, utilisez plutôt les rôles [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ou [`list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role).

Évitez d'attribuer ce rôle aux éléments de regroupement utilisés uniquement à des fins de mise en forme ou de mise en page. Dans ce cas, omettez le rôle ou utilisez plutôt `none` ou `presentation`.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément {{SVGElement("svg")}}
- [ARIA dans HTML <sup>(angl.)</sup>](https://w3c.github.io/html-aria/)
- [ARIA&nbsp;: rôle `graphics-document`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role)
- [ARIA&nbsp;: rôle `graphics-symbol`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-symbol_role)
- [ARIA&nbsp;: rôle `group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [Notes sur l'Utilisation de ARIA en HTML <sup>(angl.)</sup>](https://w3c.github.io/using-aria/)
