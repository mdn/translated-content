---
title: Arbre d'accessibilité (MOA)
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

L'**arbre d'accessibilité**, ou **modèle d'objets d'accessibilité** (**MOA**), contient des informations concernant l'[accessibilité](/fr/docs/Glossary/Accessibility) pour la plupart des éléments HTML.

Les navigateurs convertissent le balisage en une représentation interne appelée [_arbre DOM_](/fr/docs/conflicting/Web/API/Document_Object_Model/Using_the_Document_Object_Model). Le DOM contient un objet pour chaque balise, attribut et noeud de texte. Les navigateurs créent ensuite un arbre d'accessibilité basé sur l'arbre DOM, celui-ci est utilisé par les technologies d'assistance telles que les lecteurs d'écran via des APIs spécifiques à une plateforme.

Un objet de l'arbre d'accessibilité contient quatre éléments&nbsp;:

- **name**
  - : Comment peut-on faire référence à cet élément&nbsp;? Par exemple, pour un lien contenant le texte «&nbsp;Lire la suite&nbsp;» name contiendra «&nbsp;Lire la suite&nbsp;» (pour en savoir plus sur la façon dont la valeur de name est déterminée voir la spécification suivante&nbsp;: [Accessible Name and Description Computation](https://www.w3.org/TR/accname-1.1/)).
- **description**
  - : Comment peut-on décrire cet élément si l'on veut apporter une information en plus de son nom&nbsp;? La description d'un tableau pourrait expliquer quel genre d'information ce tableau apporte.
- [**role**](/fr/docs/Web/Accessibility/ARIA/Roles)
  - : Quel genre de chose est cet élément&nbsp;? Par exemple est-ce un bouton, une barre de navigation ou une liste d'éléments&nbsp;?
- **state**
  - : A-t-il un état&nbsp;? Pensez à coché/décoché pour les checkboxes, ou plié/déplié pour l'élément [`<summary>`](/fr/docs/Web/HTML/Reference/Elements/summary).

De plus, l'arbre d'accessibilité contient souvent des informations concernant ce qui peut être fait avec un élément&nbsp;: un lien peut être _suivi_, on peut _écrire dans_ un champ texte etc.

Toujours à l'état de brouillon au sein du Web Incubator Community Group en avril 2022, Le **[modèle d'objet accessible](https://wicg.github.io/aom/explainer.html)** (<i lang="en">Accessibility Object Model, AOM</i> en anglais) cherche à étendre les APIs pour rendre plus facile l'expression des sémantiques d'accessibilité et potentiellement permettre l'accès en lecture à l'arborescence d'accessibilité calculée.

## Voir aussi

- [Glossaire](/fr/docs/Glossary)
  - [Accessibilité](/fr/docs/Glossary/Accessibility)
  - [ARIA](/fr/docs/Glossary/ARIA)
