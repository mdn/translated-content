---
title: popover
slug: Web/HTML/Reference/Global_attributes/popover
original_slug: Web/HTML/Global_attributes/popover
l10n:
  sourceCommit: 25b12ef8da856416af63a9c443e13d8f0adbca0a
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`popover`** permet de désigner un élément qui sera affiché par-dessus le contenu actuel.

Ces éléments sont masqués avec `display: none` jusqu'au déclenchement de leur ouverture par un élément qui les contrôle (c'est-à-dire un élément `<button>` ou `<input type="button">` doté d'un attribut [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget)) ou par un appel à la méthode [`HTMLElement.showPopover()`](/fr/docs/Web/API/HTMLElement/showPopover).

Lors de leur ouverture, les éléments marqués avec `popover` seront affichés par-dessus les autres éléments, dans la [couche supérieure](/fr/docs/Glossary/Top_layer) et ne seront pas influencés par la mise en forme de leur parent pour la position ([`position`](/fr/docs/Web/CSS/position)) ou le dépassement ([`overflow`](/fr/docs/Web/CSS/overflow)).

Pour plus d'informations sur l'utilisation de ces fonctionnalités, voir [la page de présentation de l'API <i lang="en">Popover</i>](/fr/docs/Web/API/Popover_API).

## Exemples

Ce qui suit affichera un bouton qui ouvrira un élément se superposant par-dessus le contenu actuel.

```html
<button popovertarget="my-popover">Ouvrir le contenu "popover"</button>
<div popover id="my-popover">Bonjour tout le monde !</div>
```

> [!NOTE]
> Voir [la page listant des exemples d'utilisation de l'API <i lang="en">Popover</i>](https://mdn.github.io/dom-examples/popover-api/) pour accéder à l'ensemble des exemples MDN sur ce sujet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API <i lang="en">Popover</i>](/fr/docs/Web/API/Popover_API)
