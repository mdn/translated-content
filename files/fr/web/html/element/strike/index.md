---
title: <strike>
slug: Web/HTML/Element/strike
tags:
  - Element
  - HTML
  - Obsolete
  - Reference
translation_of: Web/HTML/Element/strike
---
{{Obsolete_header}}{{HTMLRef}}

L'élément HTML **`<strike>`** permet de représenter du texte barré ou avec une ligne le traversant.

> **Note :** Comme tous les éléments se limitant à la présentation, {{HTMLElement("strike")}} a été déprécié en HTML 4 et XHTML 1, et rendu obsolète dans HTML5. Si on souhaite représente du contenu _supprimé_, on utilisera l'élément {{HTMLElement("del")}} ; dans les autres cas, on utilisera un élément {{HTMLElement("s")}}.

## Attributs

Cet élément n'a aucun autre attribut en dehors [des attributs universels](/fr/docs/Web/HTML/Attributs_universels), communs à tous les éléments.

## Interface DOM

Cet élément implémente l'interface {{domxref("HTMLElement")}}.

> **Note :** Jusqu'à Gecko 1.9.2 inclus, Firefox implémente l'interface {{domxref("HTMLSpanElement")}} pour cet élément.

## Exemples

```html
<strike>
  Plat du jour : Saumon
</strike>
ÉPUISÉ
```

### Résultat

{{EmbedLiveSample("Exemples","100%","140")}}

## Spécifications

| Spécification                                                                                                | État                             | Commentaires                                                                                        |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------- |
| {{SpecName("HTML WHATWG", "obsolete.html#strike", "&lt;strike&gt;")}}                 | {{Spec2("HTML WHATWG")}} | Rendu obsolète et remplacé par {{HTMLElement("del")}} et {{HTMLElement("s")}}.        |
| {{SpecName("HTML5 W3C", "obsolete.html#strike", "&lt;strike&gt;")}}                     | {{Spec2("HTML5 W3C")}}     | Rendu obsolète et remplacé par {{HTMLElement("del")}} et {{HTMLElement("s")}}.        |
| {{SpecName("HTML4.01", "/present/graphics.html#edef-STRIKE", "&lt;strike&gt;")}} | {{Spec2("HTML4.01")}}     | Rendu déprécié pour être remplacé par {{HTMLElement("del")}} et {{HTMLElement("s")}}. |

## Compatibilité des navigateurs

{{Compat("html.elements.strike")}}

## Voir aussi

- L'élément {{HTMLElement("s")}}, proche de {{HTMLElement("strike")}}, également obsolète
- L'élément {{HTMLElement("del")}} qui doit être utilisé lorsque le contenu a été _supprimé_
- La propriété CSS {{cssxref("text-decoration")}} qui permet d'obtenir le même effet visuel que l'élément {{HTMLElement("strike")}}
