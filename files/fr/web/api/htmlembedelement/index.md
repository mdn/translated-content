---
title: HTMLEmbedElement
slug: Web/API/HTMLEmbedElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLEmbedElement`** fournit des propriétés spécifiques (en plus de l'interface standard {{DOMxRef("HTMLElement")}} dont elle hérite) permettant de manipuler les éléments HTML {{HTMLElement("embed")}}.

> [!NOTE]
> Ce sujet décrit l'interface `HTMLEmbedElement` telle qu'elle est définie dans la norme. Il n'aborde pas les versions antérieures non standardisées de cette interface.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- `HTMLEmbedElement.align` {{Deprecated_Inline}}
  - : Une chaîne de caractères représentant une propriété énumérée indiquant l'alignement du contenu de l'élément par rapport au contexte environnant. Les valeurs possibles sont `"left"`, `"right"`, `"center"` et `"justify"`.
- {{DOMxRef("HTMLEmbedElement.height")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`height`](/fr/docs/Web/HTML/Reference/Elements/embed#height), contenant la hauteur d'affichage de la ressource.
- `HTMLEmbedElement.name` {{Deprecated_Inline}}
  - : Une chaîne de caractères représentant le nom de l'objet intégré.
- {{DOMxRef("HTMLEmbedElement.src")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`src`](/fr/docs/Web/HTML/Reference/Elements/embed#src), contenant l'adresse de la ressource.
- {{DOMxRef("HTMLEmbedElement.type")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`type`](/fr/docs/Web/HTML/Reference/Elements/embed#type), contenant le type de la ressource.
- {{DOMxRef("HTMLEmbedElement.width")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`width`](/fr/docs/Web/HTML/Reference/Elements/embed#width), contenant la largeur d'affichage de la ressource.

## Méthodes d'instance

_Hérite également des méthodes de son interface parente, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLEmbedElement.getSVGDocument()")}}
  - : Retourne le SVG intégré en tant que {{DOMxRef("Document")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("embed")}}
