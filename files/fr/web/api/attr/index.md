---
title: Attr
slug: Web/API/Attr
---

{{APIRef("DOM")}}

L'interface **`Attr`** représente un attribut d'un élément DOM comme un objet. Dans la plupart des méthodes DOM, vous avez probablement récupéré l'attribut directement comme une chaîne de caractères (par exemple, {{DOMxRef("Element.getAttribute()")}}), mais certaines fonctions (par exemple, {{DOMxRef("Element.getAttributeNode()" )}}) ou des moyens d'itération donnent des types `Attr`.

{{InheritanceDiagram}}

> [!NOTE]
> Cette interface représente uniquement les attributs présents dans la représentation arborescente d'un {{DOMxRef("Element")}} SVG, HTML ou MathML. Elle ne représente pas les propriétés de l'interface associée à cet élément, telles que les propriétés de {{DOMxRef("HTMLTableElement")}} pour un élément HTML {{HTMLElement("table")}}. (Voir {{Glossary("Attribute", "cet article")}} pour plus d'informations sur les attributs et la manière dont ils sont _reflétés_ dans les propriétés.)

## Propriétés d'instance

- {{domxref("Attr.name", "name")}} {{readOnlyInline}}
  - : Le nom de l'attribut.
- {{domxref("Attr.namespaceURI", "namespaceURI")}} {{readOnlyInline}}
  - : Une {{jsxref("String","Chaîne de caractères")}} représentant l'URI de l'espace nom de l'attribut ou `null` s'il n'y a pas d'espace nom.
- {{domxref("Attr.localName", "localName")}} {{readOnlyInline}}
  - : Une {{jsxref("String","Chaîne de caractères")}} représentant la partie locale du nom qualifié de l'attribut.
- {{domxref("Attr.prefix", "prefix")}} {{readOnlyInline}}
  - : Une {{jsxref("String","Chaîne de caractères")}} représentant le préfixe de l'espace nom de l'attribut, ou `null` si aucun préfixe n'est spécifié.
- {{domxref("Attr.ownerElement", "ownerElement")}} {{readOnlyInline}}
  - : L'élément contenant l'attribut.
- {{domxref("Attr.specified", "specified")}} {{readOnlyInline}}
  - : Cette propriété renvoie toujours la valeur `true`. À l'origine, elle renvoyait true si l'attribut était explicitement spécifié dans le code source ou par un script, et `false` si sa valeur provenait de la valeur par défaut définie dans la DTD du document.
- {{domxref("Attr.value", "Value")}}
  - : La valeur de l'attribut.

## Méthodes d'instance

_Cette interface n'a pas de méthodes spécifiques, mais hérite des méthodes de ses interfaces parentes, {{DOMxRef("Node")}} et {{DOMxRef("EventTarget")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres nœuds sont {{DOMxRef("CDATASection")}}, {{DOMxRef("CharacterData")}}, {{DOMxRef("Comment")}}, {{DOMxRef("Document")}}, {{DOMxRef("Element")}}, {{DOMxRef("ProcessingInstruction")}} et {{DOMxRef("Text")}}.
