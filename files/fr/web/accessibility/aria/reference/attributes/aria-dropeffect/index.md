---
title: "ARIA : attribut aria-dropeffect"
short-title: aria-dropeffect
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut global `aria-dropeffect` indique quelles fonctions peuvent être réalisées lorsqu'un objet déplacé est relâché sur la cible de dépôt. {{deprecated_inline}}

## Description

Obsolète dans ARIA 1.1, la propriété `aria-dropeffect` indique quelles fonctions peuvent être réalisées lorsqu'un objet déplacé est relâché sur la cible de dépôt. L'attribut global `aria-dropeffect` fournit aux utilisateur·ice·s de technologies d'assistance la même information que celle fournie aux utilisateur·ice·s voyant·e·s via l'icône de dropeffect, grâce à [`DataTransfer.dropEffect`](/fr/docs/Web/API/DataTransfer/dropEffect).

Les sélections de texte, images et liens peuvent être déplacées par défaut. L'ajout de l'attribut global [`draggable="true"`](/fr/docs/Web/HTML/Reference/Global_attributes/draggable), qui fait partie de l'API HTML5 [Glisser-déposer](/fr/docs/Web/API/HTML_Drag_and_Drop_API), avec un gestionnaire d'événement [`dragstart`](/fr/docs/Web/API/HTMLElement/dragstart_event), permet de rendre n'importe quel nœud DOM déplaçable.

Lorsqu'un événement de glisser-déposer se produit, une image translucide de l'élément déplacé est générée et suit le pointeur de l'utilisateur·ice pendant le déplacement. L'image par défaut peut être remplacée par n'importe quelle image avec [`setDragImage`](/fr/docs/Web/API/DataTransfer/setDragImage). En plus de l'image par défaut identifiant l'élément déplacé, la propriété [`dataTransfer.dropEffect`](/fr/docs/Web/API/DataTransfer/dropEffect) peut être utilisée pour contrôler le retour visuel donné à l'utilisateur·ice pendant l'opération de glisser-déposer. La propriété `aria-dropeffect` doit être utilisée pour fournir aux utilisateur·ice·s de technologies d'assistance le même retour que celui donné aux utilisateur·ice·s voyant·e·s via la propriété `dataTransfer.dropEffect`.

`dropeffect` définit le curseur affiché par le navigateur pendant le déplacement et il est défini sur l'élément sur lequel l'objet peut être déposé. Pendant l'opération de glisser-déposer, lorsque l'élément déplaçable survole différentes zones de dépôt, les effets de glissement — `dataTransfer.dropeffect` et `aria-dropeffect` — doivent être modifiés pour indiquer le type d'opération qui se produira si l'élément déplacé est relâché.

Plus d'un effet de dépôt peut être pris en charge pour un élément donné. Ainsi, la valeur de l'attribut `aria-dropeffect` est une liste d'actions séparées par des espaces. Les actions incluent `copy`, `execute`, `link` et `move`. La valeur par défaut est `none`, ce qui signifie qu'aucune fonctionnalité n'est prise en charge dans l'application. Définir `aria-dropeffect="popup"` informe les utilisateur·ice·s de technologies d'assistance qu'un menu contextuel ou une boîte de dialogue d'opérations de glisser-déposer est disponible pour faire un choix.

Inclure cet attribut permet aux technologies d'assistance d'indiquer les options de déplacement disponibles à l'utilisateur·ice, mais n'ajoute aucune fonctionnalité réelle.

La propriété `aria-dropeffect` devrait être remplacée par une nouvelle fonctionnalité dans une future version de WAI-ARIA et est considérée comme obsolète.

En général, les fonctions d'effet de dépôt ne peuvent être fournies qu'une fois qu'un objet a été saisi pour une opération de glisser-déposer, car les fonctions disponibles dépendent de l'objet déplacé. Par conséquent, vous ajoutez généralement `aria-dropeffect` à toutes les cibles potentielles de dépôt lorsque l'événement {{domxref("HTMLElement/dragstart_event", "dragstart")}} est déclenché.

## Valeurs

La valeur est une liste d'actions possibles séparées par des espaces. Les jetons valides sont les suivants&nbsp;:

- `copy`
  - : Une copie de l'objet source sera déposée dans la cible.
- `execute`
  - : Une fonction prise en charge par la cible de dépôt est exécutée, en utilisant la source du déplacement comme entrée.
- `link`
  - : Une référence ou un raccourci vers l'objet déplacé sera créé dans l'objet cible.
- `move`
  - : L'objet source sera retiré de son emplacement actuel et déposé dans la cible.
- `none` (par défaut)
  - : Aucune opération ne peut être réalisée&nbsp;; annule effectivement l'opération de déplacement si une tentative de dépôt est faite sur cet objet. Ignoré si combiné avec une autre valeur&nbsp;; par exemple, «&nbsp;none copy&nbsp;» équivaut à «&nbsp;copy&nbsp;».
- `popup`
  - : Un menu contextuel ou une boîte de dialogue permet à l'utilisateur·ice de choisir une des opérations de déplacement (copy, move, link, execute) et toute autre fonctionnalité de déplacement, comme annuler.

## Rôles associés

Utilisé dans **TOUS** les rôles.

## Spécifications

{{Specifications}}

## Voir aussi

- [`aria-grabbed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed)
- [L'Attribut global HTML `draggable`](/fr/docs/Web/HTML/Reference/Global_attributes/draggable)
- L'API HTML [Glisser-déposer](/fr/docs/Web/API/HTML_Drag_and_Drop_API)
- {{domxref('dataTransfer')}}
- {{domxref('DataTransfer.dropEffect')}}
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
