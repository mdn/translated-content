---
title: "HTMLElement : propriété autofocus"
short-title: autofocus
slug: Web/API/HTMLElement/autofocus
l10n:
  sourceCommit: 01d5901fdbad83033fe1f86486f652d07db7ce2a
---

{{APIRef("HTML DOM")}}

La propriété **`autofocus`** de l'interface {{DOMxRef("HTMLElement")}} représente une valeur booléenne reflétant l'attribut HTML universel [`autofocus`](/fr/docs/Web/HTML/Reference/Global_attributes/autofocus). Cela indique si l'élément doit être sélectionné lors du chargement de la page ou, s'il est imbriqué dans un {{HTMLElement("dialog")}} ou un élément [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover), lorsque le `<dialog>` ou le popover est affiché.

Un seul élément à l'intérieur d'un document, d'un élément `<dialog>` ou d'un popover peut avoir cet attribut défini. Si plusieurs éléments ont cet attribut, le premier élément pouvant recevoir la sélection est sélectionné.

> [!NOTE]
> Définir cette propriété ne sélectionne pas l'élément associé&nbsp;: cela indique simplement au navigateur de le sélectionner lorsque _l'élément est inséré_ dans le document. La définir après l'insertion, c'est-à-dire la plupart du temps après le chargement du document, n'a aucun effet visible.

## Valeur

Une valeur booléenne.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
