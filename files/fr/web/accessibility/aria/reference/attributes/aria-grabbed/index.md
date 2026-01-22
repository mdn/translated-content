---
title: "ARIA : attribut aria-grabbed"
short-title: aria-grabbed
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-grabbed` indique l'état de «&nbsp;saisi&nbsp;» d'un élément lors d'une opération de glisser-déposer. {{deprecated_inline}}

## Description

Les sélections de texte, images et liens peuvent être déplacées par défaut. L'ajout de l'attribut global [`draggable="true"`](/fr/docs/Web/HTML/Reference/Global_attributes/draggable), qui fait partie de l'API HTML5 [Glisser-déposer](/fr/docs/Web/API/HTML_Drag_and_Drop_API), avec un gestionnaire d'événement [`dragstart`](/fr/docs/Web/API/HTMLElement/dragstart_event), permet de rendre n'importe quel nœud DOM déplaçable.

L'attribut `aria-grabbed` était utilisé pour indiquer si un élément est dans un état de «&nbsp;saisi&nbsp;» lors d'une opération de glisser-déposer avec `aria-grabbed="true"`, ou si l'élément peut être saisi mais ne l'est pas actuellement avec `aria-grabbed="false"`.

Définir `aria-grabbed="true"` indiquait que l'élément avait été sélectionné pour être déplacé. Définir `aria-grabbed="false"` indiquait que l'élément pouvait être saisi pour une opération de glisser-déposer, mais n'est pas actuellement saisi.

Lorsque `aria-grabbed` est défini à `true`, l'attribut [`aria-dropeffect`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect) de toutes les cibles potentielles de dépôt doit être mis à jour avec le type de fonction ou d'effet qui sera appliqué à l'élément saisi lors de son dépôt. Lorsqu'aucun élément n'est en état saisi, réinitialisez les attributs `aria-dropeffect` de toutes vos cibles de dépôt.

La propriété `aria-grabbed` devrait être remplacée par une nouvelle fonctionnalité dans une future version de WAI-ARIA et est considérée comme obsolète.

> [!NOTE]
> ARIA n'active pas de fonctionnalité accessible. ARIA ne fait que transmettre le comportement prévu de votre fonctionnalité.

## Valeurs

- `true`
  - : L'élément a été sélectionné pour être déplacé.
- `false`
  - : L'élément n'est pas actuellement sélectionné pour être déplacé, mais peut l'être en définissant la propriété à `true`.
- `undefined` (par défaut)
  - : L'élément ne prend pas en charge le déplacement.

## Rôles associés

Utilisé dans **TOUS** les [rôles](/fr/docs/Web/Accessibility/ARIA/Reference/Roles)

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-dropeffect`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect)
- [Attribut global HTML `draggable`](/fr/docs/Web/HTML/Reference/Global_attributes/draggable)
- L'API HTML [Glisser-déposer](/fr/docs/Web/API/HTML_Drag_and_Drop_API)
- L'API {{domxref('DataTransfer')}}
- La propriété {{domxref('DataTransfer.dropEffect')}}
- L'évènement {{domxref("HTMLElement/dragstart_event", "dragstart")}}
