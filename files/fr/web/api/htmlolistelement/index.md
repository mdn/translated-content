---
title: HTMLOListElement
slug: Web/API/HTMLOListElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("HTML DOM") }}

L'interface **`HTMLOListElement`** fournit des propriétés spécifiques (en plus de celles définies sur l'interface {{domxref("HTMLElement")}} dont elle hérite) pour manipuler les éléments de liste ordonnée.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLOListElement.reversed")}}
  - : Un booléen reflétant l'attribut [`reversed`](/fr/docs/Web/HTML/Reference/Elements/ol#reversed) et définissant si la numérotation est décroissante (`true`) ou croissante (`false`).
- {{domxref("HTMLOListElement.start")}}
  - : Un entier long (`long`) reflétant l'attribut [`start`](/fr/docs/Web/HTML/Reference/Elements/ol#start) et définissant la valeur du premier numéro du premier élément de la liste.
- {{domxref("HTMLOListElement.type")}}
  - : Une chaîne de caractères reflétant l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/ol#type) et définissant le type de marqueur utilisé pour l'affichage. Ce type peut prendre les valeurs suivantes&nbsp;:
    - `'1'`&nbsp;: nombres décimaux (`1`, `2`, `3`, `4`, `5`, ...)
    - `'a'`&nbsp;: lettres minuscules de l'alphabet latin (`a`, `b`, `c`, `d`, `e`, ...)
    - `'A'`&nbsp;: lettres majuscules de l'alphabet latin (`A`, `B`, `C`, `D`, `E`, ...)
    - `'i'`&nbsp;: chiffres romains minuscules (`i`, `ii`, `iii`, `iv`, `v`, ...)
    - `'I'`&nbsp;: chiffres romains majuscules (`I`, `II`, `III`, `IV`, `V`, ...)

- {{domxref("HTMLOListElement.compact")}} {{deprecated_inline}}
  - : Un booléen indiquant que l'espacement entre les éléments de la liste doit être réduit. Cette propriété reflète uniquement l'attribut [`compact`](/fr/docs/Web/HTML/Reference/Elements/ol#compact) et ne prend pas en compte la propriété CSS {{cssxref("line-height")}} utilisée pour ce comportement dans les pages modernes.

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{domxref("HTMLElement")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML qui implémente cette interface&nbsp;: {{ HTMLElement("ol") }}.
