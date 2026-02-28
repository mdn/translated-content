---
title: HTMLLabelElement
slug: Web/API/HTMLLabelElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLLabelElement`** donne accès à des propriétés spécifiques aux éléments HTML {{HTMLElement("label")}}. Elle hérite des méthodes et des propriétés de l'interface de base {{DOMxRef("HTMLElement")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLLabelElement.control")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("HTMLElement")}} représentant le contrôle associé au libellé.
- {{DOMxRef("HTMLLabelElement.form")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("HTMLFormElement")}} représentant le formulaire auquel le contrôle étiqueté est associé, ou `null` s'il n'y a pas de contrôle associé, ou si ce contrôle n'est pas associé à un formulaire. Autrement dit, il s'agit simplement d'un raccourci pour `HTMLLabelElement.control.form`.
- {{DOMxRef("HTMLLabelElement.htmlFor")}}
  - : Une chaîne de caractères contenant l'identifiant du contrôle étiqueté. Cela reflète l'attribut [`for`](/fr/docs/Web/HTML/Reference/Elements/label#for).

> [!NOTE]
> Pour définir l'attribut `for` par programmation, utilisez [`htmlFor`](/fr/docs/Web/API/HTMLLabelElement/htmlFor).

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("label")}}
- L'élément HTML {{HTMLElement("form")}}
- L'interface {{DOMxRef("HTMLFormElement")}}
