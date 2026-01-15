---
title: "ARIA : rôle presentation"
short-title: presentation
slug: Web/Accessibility/ARIA/Reference/Roles/presentation_role
original_slug: Web/Accessibility/ARIA/Roles/presentation_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `presentation` et son synonyme `none` suppriment les sémantiques ARIA implicites d'un élément afin qu'elles ne soient pas exposées à l'arbre d'accessibilité.

Le contenu de l'élément sera toujours accessible aux technologies d'assistance&nbsp;; seules les sémantiques du conteneur — et dans certains cas, les descendants associés requis — ne seront plus exposées à l'API d'accessibilité.

## Description

Bien que l'ARIA soit principalement utilisée pour exprimer des sémantiques, il existe certaines situations où il est utile de masquer les sémantiques d'un élément aux technologies d'assistance. Cela se fait avec le rôle `presentation` ou son synonyme `none`, qui déclarent qu'un élément est utilisé uniquement pour la présentation et n'a donc pas de sémantiques d'accessibilité.

Écrire `<h2 role="presentation">Les Licornes sont gentilles</h2>` supprime les sémantiques de titre de l'élément {{HTMLElement("Heading_Elements", "h2")}}, le rendant équivalent à `<div>Les Licornes sont gentilles</div>`. Les sémantiques de rôle de titre sont supprimées, mais le contenu lui-même est toujours disponible.

Lorsque un élément a des descendants requis, comme les différents éléments {{HTMLElement('table')}}, et les enfants {{HTMLElement('li')}} d'un {{HTMLElement('ul')}} ou {{HTMLElement('ol')}}, le rôle `presentation` ou `none` appliqué à la table ou à la liste supprime les sémantiques par défaut de l'élément sur lequel il a été appliqué et de leurs éléments descendants requis.

Si `presentation` ou `none` est appliqué à un élément {{HTMLElement('table')}}, les éléments descendants {{HTMLElement('caption')}}, {{HTMLElement('thead')}}, {{HTMLElement('tbody')}}, {{HTMLElement('tfoot')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, et {{HTMLElement('td')}} héritent du rôle et ne sont donc pas exposés aux technologies d'assistance. Mais, les éléments à l'intérieur des éléments {{HTMLElement('th')}} et {{HTMLElement('td')}} , y compris les tables imbriquées, sont exposés aux technologies d'assistance.

```html
<ul role="presentation">
  <li>
    <a href="#">Lien 1</a>
  </li>
  <li>
    <a href="#">Lien 2</a>
  </li>
  <li>
    <a href="#">Lien 3</a>
  </li>
</ul>
```

Parce que le rôle `presentation` a été appliqué à l'élément {{HTMLElement('ul')}}, chaque élément enfant {{HTMLElement('li')}} hérite du rôle `presentation`. Cela est dû au fait que l'ARIA exige que les éléments `listitem` aient un élément `list` parent. Bien que les éléments {{HTMLElement('li')}} ne soient pas exposés aux technologies d'assistance, les descendants de ces éléments requis le sont. Si nous avions imbriqué une liste dans l'un de ces {{HTMLElement('li')}} , elle serait visible pour les technologies d'assistance. Pour les éléments sans enfants requis, tous les éléments imbriqués à l'intérieur de l'élément avec `role="presentation"` ou `role="none"` conservent leur sémantique. Dans ce cas, les éléments {{HTMLElement('a')}} contenus à l'intérieur de ces éléments {{HTMLElement('li')}} sont exposés.

L'élément {{HTMLElement('a')}} est un cas particulier. Son rôle aurait été exposé même s'il avait le rôle `presentation` ou `none` directement appliqué. Les navigateurs ignorent `role="presentation"` et `role="none"` sur les éléments focusables, y compris les liens et les entrées, ou tout élément avec un attribut [tabindex](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) défini. Les navigateurs ignorent également l'inclusion du rôle si l'un des éléments contient des états et propriétés ARIA globaux, tels que [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

> [!NOTE]
> L'élément avec `role="presentation"` ne fait pas partie de l'arbre d'accessibilité et ne doit pas avoir de nom accessible. Ne **pas** utiliser [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Propriétés, états et rôles WAI-ARIA associés

Aucun. Si un état et une propriété ARIA globaux sont définis, `presentation` ou `none` seront ignorés, et le rôle implicite de l'élément sera utilisé.

## Exemples

```html
<hr role="none" />
```

## Spécifications

{{Specifications}}

## Voir aussi

- [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) contre [`role="presentation/none"`](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) — par Scott O'Hara
