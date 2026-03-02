---
title: HTMLMapElement
slug: Web/API/HTMLMapElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLMapElement`** fournit des propriétés et méthodes spéciales (en plus de celles de l'interface objet {{DOMxRef("HTMLElement")}} régulière auxquelles elle a aussi accès par héritage) pour manipuler la disposition et la présentation des éléments HTML {{HTMLElement("map")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLMapElement.name")}}
  - : Une chaîne de caractères représentant l'élément {{HTMLElement("map")}} pour le référencer dans d'autres contextes. Si l'attribut `id` est défini, il doit avoir la même valeur&nbsp;; et il ne peut pas être `null` ou vide.
- {{DOMxRef("HTMLMapElement.areas")}} {{ReadOnlyInline}}
  - : Une {{DOMxRef("HTMLCollection")}} dynamique représentant les éléments {{HTMLElement("area")}} associés à ce {{HTMLElement("map")}}.

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("map")}}.
