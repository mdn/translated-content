---
title: Arbre d'accessibilité (MOA)
slug: Glossary/Accessibility_tree
tags:
  - AOM
  - Accessibilité
  - DOM
  - Glossaire
  - Reference
translation_of: Glossary/Accessibility_tree
---
L'**arbre d'accessibilité**, ou **modèle d'objets d'accessibilité** (**MOA**), contient des informations concernant l'{{Glossary("accessibility")}} pour la plupart des éléments HTML.

Les navigateurs convertissent le balisage en une représentation interne appelée [arbre DOM](/fr/docs/Comment_créer_un_arbre_DOM). Le DOM contient un objet pour chaque balise, attribut et noeud de texte. Les navigateurs créent ensuite un arbre d'accessibilité basé sur l'arbre DOM, celui-ci est utilisé par les technologies d'assistance telles que les lecteurs d'écran via des APIs spécifiques à une plateforme.

Un objet de l'arbre d'accessibilité contient quatre éléments :

- **name**
  - : Comment peut-on faire référence à cet élément ? Par exemple, pour un lien contenant le texte "Lire la suite" name contiendra 'Lire la suite' (pour en savoir plus sur la façon dont la valeur de name est déterminée voir la spécification suivante : [Accessible Name and Description Computation](https://www.w3.org/TR/accname-1.1/)).
- **description**
  - : Comment peut-on décrire cet élément si l'on veut apporter une information en plus de son nom ? La description d'un tableau pourrait expliquer quel genre d'information ce tableau apporte.
- **role**
  - : Quel genre de chose est cet élément ? Par exemple est-ce un bouton, une barre de navigation ou une liste d'éléments ?
- **state**
  - : A-t-il un état ? Pensez à coché/décoché pour les checkboxes, ou plié/déplié pour l'élément [`<summary>`](/fr/docs/Web/HTML/Element/summary).

De plus, l'arbre d'accessibilité contient souvent des informations concernant ce qui peut être fait avec un élément : un lien peut être _suivi,_ on peut _écrire dans_ un champ texte etc.

## Voir aussi

1.  [Glossaire](/fr/docs/Glossaire)

    1.  {{Glossary("Accessibility")}}
    2.  {{Glossary("ARIA")}}
