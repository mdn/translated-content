---
title: class
slug: Web/HTML/Global_attributes/class
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/class
original_slug: Web/HTML/Attributs_universels/class
---
{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`class`** indique une liste de classes associées à l'élément courant. Les classes permettent de manipuler les éléments, via CSS ou JavaScript en utilisant [les sélecteurs de classe](/fr/docs/Web/CSS/Sélecteurs_de_classe) ou des fonctions telles que {{domxref("document.getElementsByClassName")}}.

{{EmbedInteractiveExample("pages/tabbed/attribute-class.html","tabbed-standard")}}

Bien que la spécification ne précise aucune contrainte quant aux noms utilisés pour les classes, une bonne pratique consiste à utiliser des noms qui traduisent la sémantique de l'élément plutôt que la mise en forme. Ainsi, les noms sémantiques restent pertinents même lorsque la présentation de la page évolue.

## Spécifications

| Spécification                                                                                    | État                             | Commentaires                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "dom.html#classes", "class")}}                     | {{Spec2('HTML WHATWG')}} | Aucune modification depuis {{SpecName('HTML5.1')}}.                                                                                                                                                                                                                                                                                                                                   |
| {{SpecName('HTML5.1', "dom.html#element-attrdef-global-class", "class")}} | {{Spec2('HTML5.1')}}     | État selon {{SpecName('HTML WHATWG')}}. Aucune modification depuis {{SpecName('HTML5 W3C')}}                                                                                                                                                                                                                                                                                   |
| {{SpecName('HTML5 W3C', "dom.html#classes", "class")}}                         | {{Spec2('HTML5 W3C')}}     | État selon {{SpecName('HTML WHATWG')}}. `class` est désormas sun attribut universel depuis {{SpecName('HTML4.01')}},.                                                                                                                                                                                                                                                         |
| {{SpecName('HTML4.01', "struct/global.html#h-7.5.2", "class")}}             | {{Spec2('HTML4.01')}}     | Cet attribut est pris en charge sur tous les éléments à l'exception de {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("param")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} et {{HTMLElement("title")}}. |

## Compatibilité des navigateurs

{{Compat("html.global_attributes.class")}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Attributs_universels)
