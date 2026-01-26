---
title: HTMLOptionElement
slug: Web/API/HTMLOptionElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLOptionElement`** représente les éléments HTML {{HTMLElement("option")}} et hérite de toutes les propriétés et méthodes de l'interface {{DOMxRef("HTMLElement")}}.

{{InheritanceDiagram}}

## Constructeur

- {{DOMxRef("HTMLOptionElement.Option", "Option()")}}
  - : Retourne un nouvel objet `HTMLOptionElement`. Il possède quatre paramètres&nbsp;: le texte à afficher, `text`, la valeur associée, `value`, la valeur de `defaultSelected` et la valeur de `selected`. Les trois derniers paramètres sont optionnels.

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLOptionElement.defaultSelected")}}
  - : Prend la valeur `true` ou `false` et indique la valeur initiale de l'attribut HTML [`selected`](/fr/docs/Web/HTML/Reference/Elements/option#selected), indiquant si l'option est sélectionnée par défaut ou non.
- {{DOMxRef("HTMLOptionElement.disabled")}}
  - : Prend la valeur `true` ou `false` et représente la valeur de l'attribut HTML [`disabled`](/fr/docs/Web/HTML/Reference/Elements/option#disabled), qui indique que l'option n'est pas disponible à la sélection.
- {{DOMxRef("HTMLOptionElement.form")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("HTMLFormElement")}} représentant la même valeur que le formulaire (`form`) de l'élément HTML {{HTMLElement("select")}} correspondant, si l'option est un descendant d'un élément {{HTMLElement("select")}}, ou `null` si aucun n'est trouvé.
- {{DOMxRef("HTMLOptionElement.index")}} {{ReadOnlyInline}}
  - : Un entier `long` représentant la position de l'option dans la liste des options à laquelle elle appartient, selon l'ordre de l'arbre. Si l'option ne fait pas partie d'une liste d'options, comme lorsqu'elle fait partie d'un élément HTML {{HTMLElement("datalist")}}, la valeur est `0`.
- {{DOMxRef("HTMLOptionElement.label")}}
  - : Une chaîne de caractères reflétant la valeur de l'attribut HTML [`label`](/fr/docs/Web/HTML/Reference/Elements/option#label), qui fournit une étiquette pour l'option. Si cet attribut n'est pas spécifiquement défini, la lecture retourne le contenu {{DOMxRef("HTMLOptionElement.text", "text")}} de l'élément.
- {{DOMxRef("HTMLOptionElement.selected")}}
  - : Prend la valeur `true` ou `false` et indique si l'option est actuellement sélectionnée.
- {{DOMxRef("HTMLOptionElement.text")}}
  - : Une chaîne de caractères contenant le contenu textuel de l'élément.
- {{DOMxRef("HTMLOptionElement.value")}}
  - : Une chaîne de caractères reflétant la valeur de l'attribut HTML [`value`](/fr/docs/Web/HTML/Reference/Elements/option#value), si elle existe&nbsp;; sinon, reflète la valeur de la propriété {{DOMxRef("Node.textContent")}}.

## Méthodes d'instance

_N'implémente aucune méthode spécifique, mais hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("option")}}
- L'élément HTML {{HTMLElement("select")}}
- L'élément HTML {{HTMLElement("datalist")}}
- L'élément HTML {{HTMLElement("optgroup")}}
- L'interface {{DOMxRef("HTMLOptionsCollection")}}
- L'interface {{DOMxRef("HTMLSelectElement")}}
- L'interface {{DOMxRef("HTMLOptGroupElement")}}
- L'interface {{DOMxRef("HTMLElement")}}
- L'interface {{DOMxRef("HTMLCollection")}}
