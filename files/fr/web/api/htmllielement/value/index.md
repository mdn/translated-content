---
title: "HTMLLIElement : propriété value"
short-title: value
slug: Web/API/HTMLLIElement/value
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`value`** de l'interface {{domxref("HTMLLIElement")}} indique la position ordinale de l'élément de liste dans un {{HTMLElement("ol")}} donné. Elle peut être inférieure à `0`. Si l'élément {{HTMLElement("li")}} n'est pas enfant d'un {{HTMLElement("ol")}}, cette propriété n'a pas de signification.

Elle reflète l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/li#value) de l'élément {{htmlelement("li")}} correspondant. Si l'élément `<li>` ne possède pas d'attribut de contenu `value` spécifié, alors cette propriété retourne `0` par défaut, même si l'élément peut avoir une valeur ordinale attribuée automatiquement lors de l'affichage.

## Valeur

Un entier.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
