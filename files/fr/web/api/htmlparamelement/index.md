---
title: HTMLParamElement
slug: Web/API/HTMLParamElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

L'interface **`HTMLParamElement`** fournit des propriétés spécifiques (en plus de celles de l'interface {{DOMxRef("HTMLElement")}} héritées) pour manipuler les éléments HTML {{HTMLElement("param")}}, représentant une paire clé-valeur servant de paramètre à un élément HTML {{HTMLElement("object")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- `HTMLParamElement.name` {{Deprecated_Inline}}
  - : Une chaîne de caractères représentant le nom du paramètre. Elle reflète l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/param#name).
- `HTMLParamElement.value` {{Deprecated_Inline}}
  - : Une chaîne de caractères représentant la valeur associée au paramètre. Elle reflète l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/param#value).
- `HTMLParamElement.type` {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant le type du paramètre lorsque `valueType` a la valeur `"ref"`. Elle reflète l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/param#type).
- `HTMLParamElement.valueType` {{Deprecated_Inline}}
  - : Une chaîne de caractères contenant le type de la valeur. Elle reflète l'attribut [valuetype](/fr/docs/Web/HTML/Reference/Elements/param#valuetype) et prend l'une des valeurs&nbsp;: `"data"`, `"ref"` ou `"object"`.

## Méthodes d'instance

_Aucune méthode spécifique, hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML qui implémente cette interface&nbsp;: {{HTMLElement("param")}}.
