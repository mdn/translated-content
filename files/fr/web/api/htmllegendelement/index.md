---
title: HTMLLegendElement
slug: Web/API/HTMLLegendElement
l10n:
  sourceCommit: 31adb079729df4b96305b4ffa396bd4216042124
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLLegendElement`** permet d'accéder aux propriétés des éléments HTML {{HTMLElement("legend")}}. Elle hérite des propriétés et méthodes de l'interface {{DOMxRef("HTMLElement")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- `HTMLLegendElement.align` {{Deprecated_Inline}}
  - : Une chaîne de caractères représentant l'alignement par rapport à l'ensemble du formulaire.
- {{DOMxRef("HTMLLegendElement.form")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("HTMLFormElement")}} représentant le formulaire auquel cette légende appartient. Si la légende a un élément de groupe de champs comme parent, alors cet attribut retourne la même valeur que l'attribut **form** sur l'élément de groupe de champs parent. Sinon, il retourne `null`.

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("legend")}}
