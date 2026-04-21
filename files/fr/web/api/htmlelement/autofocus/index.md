---
title: "HTMLElement : propriété autofocus"
short-title: autofocus
slug: Web/API/HTMLElement/autofocus
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`autofocus`** de l'interface {{DOMxRef("HTMLElement")}} représente une valeur booléenne reflétant l'attribut HTML universel [`autofocus`](/fr/docs/Web/HTML/Reference/Elements/select#autofocus), qui indique si le contrôle doit être sélectionné lors du chargement de la page, ou lorsque la boîte de dialogue ou la fenêtre contextuelle est affichée si l'attribut `popover` est présent dans un élément à l'intérieur d'un élément HTML {{HTMLElement("dialog")}} ou d'un élément dont l'attribut `popover` est présent.

Un seul élément associé à un formulaire dans un document, ou un élément HTML {{HTMLElement("dialog")}}, ou un élément dont l'attribut `popover` est présent, peut avoir cet attribut présent. S'il y en a plusieurs, le premier élément inséré avec l'attribut présent, généralement le premier sur la page, reçoit la sélection initiale.

> [!NOTE]
> Définir cette propriété ne sélectionne pas l'élément associé&nbsp;: cela indique simplement au navigateur de le sélectionner lorsque _l'élément est inséré_ dans le document. La définir après l'insertion, c'est-à-dire la plupart du temps après le chargement du document, n'a aucun effet visible.

## Valeur

Une valeur booléenne.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
