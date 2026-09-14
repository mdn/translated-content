---
title: HTMLProgressElement
slug: Web/API/HTMLProgressElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLProgressElement`** fournit des propriétés et méthodes spécifiques (en plus de celles de l'interface {{DOMxRef("HTMLElement")}} héritées) pour manipuler la présentation et la mise en page des éléments HTML {{HTMLElement("progress")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLProgressElement.max")}}
  - : Une valeur `double` reflétant l'attribut de contenu du même nom, limitée aux nombres supérieurs à zéro. Sa valeur par défaut est `1.0`.
- {{DOMxRef("HTMLProgressElement.position")}} {{ReadOnlyInline}}
  - : Retourne une valeur `double` correspondant au résultat de la division de la valeur courante (`value`) par la valeur maximale (`max`)&nbsp;; si la barre de progression est indéterminée, retourne `-1`.
- {{DOMxRef("HTMLProgressElement.value")}}
  - : Une valeur `double` reflétant la valeur courante&nbsp;; si la barre de progression est indéterminée, retourne `0`.
- {{DOMxRef("HTMLProgressElement.labels")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("NodeList")}} contenant la liste des éléments HTML {{HTMLElement("label")}} qui sont des étiquettes pour cet élément.

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML qui implémente cette interface&nbsp;: {{HTMLElement("progress")}}
