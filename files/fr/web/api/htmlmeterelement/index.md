---
title: HTMLMeterElement
slug: Web/API/HTMLMeterElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Les éléments HTML {{HTMLElement("meter")}} exposent l'interface **`HTMLMeterElement`**, qui fournit des propriétés et méthodes spécifiques (en plus de l'interface objet {{DOMxRef("HTMLElement")}} dont ils héritent) pour manipuler la disposition et la présentation des éléments {{HTMLElement("meter")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite aussi des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLMeterElement.high")}}
  - : Un `double` représentant la valeur de la limite haute, reflétant l'attribut [`high`](/fr/docs/Web/HTML/Reference/Elements/meter#high).
- {{DOMxRef("HTMLMeterElement.low")}}
  - : Un `double` représentant la valeur de la limite basse, reflétant l'attribut [`low`](/fr/docs/Web/HTML/Reference/Elements/meter#low).
- {{DOMxRef("HTMLMeterElement.max")}}
  - : Un `double` représentant la valeur maximale, reflétant l'attribut [`max`](/fr/docs/Web/HTML/Reference/Elements/meter#max).
- {{DOMxRef("HTMLMeterElement.min")}}
  - : Un `double` représentant la valeur minimale, reflétant l'attribut [`min`](/fr/docs/Web/HTML/Reference/Elements/meter#min).
- {{DOMxRef("HTMLMeterElement.optimum")}}
  - : Un `double` représentant la valeur optimale, reflétant l'attribut [`optimum`](/fr/docs/Web/HTML/Reference/Elements/meter#optimum).
- {{DOMxRef("HTMLMeterElement.value")}}
  - : Un `double` représentant la valeur courante, reflétant l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/meter#value).
- {{DOMxRef("HTMLMeterElement.labels")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("NodeList")}} d'éléments {{HTMLElement("label")}} associés à l'élément.

## Méthodes d'instance

_Cette interface n'implémente aucune méthode spécifique mais hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("meter")}}
