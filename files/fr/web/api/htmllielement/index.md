---
title: HTMLLIElement
slug: Web/API/HTMLLIElement
l10n:
  sourceCommit: 4032e31c51141511f5aa4068d5572e4736584afe
---

{{ APIRef("HTML DOM") }}

L'interface **`HTMLLIElement`** expose des propriétés et méthodes spécifiques (en plus de celles définies par l'interface {{domxref("HTMLElement")}} dont elle hérite) pour manipuler les éléments de liste.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{domxref("HTMLElement")}}._

- `HTMLLIElement.type` {{deprecated_inline}}
  - : Une chaîne de caractères représentant le type de puce, `"disc"`, `"square"` ou `"circle"`. Comme la manière standard de définir le type de liste est via la propriété CSS {{cssxref("list-style-type")}}, il est recommandé d'utiliser les méthodes CSSOM pour la définir via un script.
- {{domxref("HTMLLIElement.value")}}
  - : Un entier indiquant la position ordinale de l'élément de liste dans un {{HTMLElement("ol")}} donné. Il reflète l'attribut `value` de l'élément HTML {{HTMLElement("li")}}, et peut être inférieur à `0`. Si l'élément {{HTMLElement("li")}} n'est pas enfant d'un élément {{HTMLElement("ol")}}, cette propriété n'a pas de signification.

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{domxref("HTMLElement")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML qui implémente cette interface&nbsp;: {{HTMLElement("li")}}
