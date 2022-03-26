---
title: Entité
slug: Glossary/Entity
tags:
  - Composition
  - Encodage
  - Glossaire
  - HTML
translation_of: Glossary/Entity
original_slug: Glossaire/Entity
---
Une **entité** {{glossary("HTML")}} est une chaîne de texte _(string)_ qui commence par (`&)` et se termine avec `(;)`. Les entités sont fréquemment utilisées pour afficher des caractères réservés (qui seraient autrement interprétés comme du code HTML) et des caractères invisibles (comme des espaces insécables). Vous pouvez également les utiliser à la place d'autres caractères difficiles à taper avec un clavier standard.

De nombreux caractères sont des entités mnémoniques. Par exemple, l'entité pour le copyright symbole (`©`) est `&copy;`. Pour les caractères non mémorisables, comme `&#8212;` ou `&#x2014;`, vous pouvez utiliser un [tableau de référence](https://dev.w3.org/html5/html-author/charref) ou [un outil décodeur](https://mothereff.in/html-entities).

## Caractères réservés

Certains caractères spéciaux sont réservés pour une utilisation en HTML, ce qui signifie que votre navigateur les analysera en tant que code HTML. Par exemple, si vous utilisez le signe inférieur (<), le navigateur interprète tout texte qui suit comme une {{Glossary("Tag","balise")}}.

Pour afficher ces caractères comme texte, il faut les remplacer par l'entité de caractère correspondante, comme montrée dans le tableau suivant :

| Caractère | Entité   | Remarque                                                                                            |
| --------- | -------- | --------------------------------------------------------------------------------------------------- |
| &         | `&amp;`  | Interprété comme le début d'une référence d'entité ou de caractère.                                 |
| <         | `&lt;`   | Interprété comme le début d'une {{Glossary("Tag","balise")}}                                |
| >         | `&gt;`   | Interprété comme la fin d'une {{Glossary("Tag","balise")}}                                  |
| "         | `&quot;` | Interprété comme le début et la fin d'une valeur d'{{Glossary('Attribute','attributs')}} |

## En apprendre plus

### Référence technique

- [Liste officielle des identificateurs de caractères](http://dev.w3.org/html5/html-author/charref)
