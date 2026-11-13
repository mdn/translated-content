---
title: Attribut
slug: Glossary/Attribute
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **attribut** étend un {{Glossary("element", "élément")}} {{Glossary("HTML")}} ou un élément {{Glossary("XML")}}, modifiant son comportement ou fournissant des métadonnées.

Un attribut a toujours la forme `nom="valeur"` (l'identifiant de l'attribut suivi de sa valeur associée). Il est possible de voir des attributs sans signe égal ni valeur. Il s'agit d'une abréviation pour fournir la chaîne vide en HTML. Cependant, cela n'est pas valide en XML&nbsp;: XML exige que tous les attributs aient une valeur explicite.

Un certain nombre d'attributs HTML sont des {{Glossary("Boolean/HTML", "attributs booléens")}}. La valeur de ces attributs est uniquement contrôlée par la présence ou l'absence de l'attribut. Voir {{Glossary("Boolean/HTML", "attributs booléens")}} pour plus d'informations.

## Réflexion d'un attribut

Les attributs peuvent être _reflétés_ dans une propriété particulière de l'interface spécifique.

Cela signifie que la valeur de l'attribut peut être lue ou modifiée directement en JavaScript via une propriété sur l'interface correspondante, et réciproquement.
Les propriétés reflétées offrent une approche de programmation plus naturelle que l'obtention et la définition d'attributs à l'aide des méthodes {{DOMxRef("Element.getAttribute()","getAttribute()")}} et {{DOMxRef("Element.setAttribute()","setAttribute()")}} de l'interface {{DOMxRef("Element")}}.

Pour plus d'informations, voir [Réflexion des attributs](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes).

## Voir aussi

- [Référence des attributs HTML](/fr/docs/Web/HTML/Reference/Attributes)
- [Réflexion des attributs](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes)
- Informations sur les [attributs globaux](/fr/docs/Web/HTML/Reference/Global_attributes) de HTML
- Recommandation sur les attributs StartTag XML dans la [Recommandation XML du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/xml/#sec-starttags)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Element", "Élément")}}
  - {{Glossary("Tag", "Balise")}}
  - {{Glossary("HTML")}}
  - {{Glossary("XML")}}
  - {{Glossary("Boolean/HTML", "Attributs booléens")}}
  - {{Glossary("Enumerated", "Attributs énumérés")}}
