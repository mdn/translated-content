---
title: Arbre d'accessibilité
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

L'**arbre d'accessibilité** contient des informations liées à l'{{Glossary("accessibility", "accessibilité")}} pour la plupart des éléments HTML.

Les navigateurs convertissent le balisage en une représentation interne appelée _[arbre DOM](/fr/docs/Web/API/Document_Object_Model)_. L'arbre DOM contient des objets représentant tous les éléments, attributs et nœuds de texte du balisage. Les navigateurs créent ensuite un arbre d'accessibilité à partir de l'arbre DOM, utilisé par les API d'accessibilité spécifiques à la plateforme pour fournir une représentation compréhensible par les technologies d'assistance, comme les lecteurs d'écran.

Un objet d'arbre d'accessibilité comporte quatre propriétés&nbsp;:

- **name**
  - : Comment peut-on faire référence à cet élément&nbsp;? Par exemple, pour un lien contenant le texte «&nbsp;Lire la suite&nbsp;», name contiendra «&nbsp;Lire la suite&nbsp;» (pour en savoir plus sur la façon dont la valeur de name est déterminée, voir la spécification suivante&nbsp;: [Calcul du nom et de la description accessibles <sup>(angl.)</sup>](https://w3c.github.io/accname/)).
- **description**
  - : Comment peut-on décrire cet élément si l'on veut apporter une information en plus de son nom&nbsp;? La description d'un tableau pourrait expliquer quel genre d'information ce tableau apporte.
- [**role**](/fr/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Quel genre de chose est cet élément&nbsp;? Par exemple, est-ce un bouton, une barre de navigation ou une liste d'éléments&nbsp;?
- [**state**](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes)
  - : A-t-il un état&nbsp;? Pensez à coché/décoché pour les cases à cocher, ou plié/déplié pour l'élément {{HTMLElement("summary")}}.

De plus, l'arbre d'accessibilité contient souvent des informations concernant ce qui peut être fait avec un élément&nbsp;: un lien peut être _suivi_, on peut _écrire dans_ un champ texte etc.

Toujours à l'état de brouillon au sein du Web Incubator Community Group en avril 2022, le **[modèle d'objet accessible <sup>(angl.)</sup>](https://wicg.github.io/aom/explainer.html)** (<i lang="en">Accessibility Object Model, AOM</i> en anglais) cherche à étendre les APIs pour rendre plus facile l'expression des sémantiques d'accessibilité et potentiellement permettre l'accès en lecture à l'arborescence d'accessibilité calculée.

## Voir aussi

- [Accessibilité](/fr/docs/Web/Accessibility)
- [Apprendre l'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility)
- [Accessibilité du Web](https://fr.wikipedia.org/wiki/Accessibilit%C3%A9_du_web) sur Wikipedia
- [Web Accessibility In Mind <sup>(angl.)</sup>](https://webaim.org/)
- [ARIA](/fr/docs/Web/Accessibility/ARIA)
- [Initiative pour l'accessibilité du Web du W3C (WAI) <sup>(angl.)</sup>](https://www.w3.org/WAI/)
- [Applications Internet Riches et Accessibles (WAI-ARIA) <sup>(angl.)</sup>](https://w3c.github.io/aria/)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Accessibility", "Accessibilité")}}
  - {{Glossary("Accessible description", "Description accessible")}}
  - {{Glossary("Accessible name", "Nom accessible")}}
  - {{Glossary("ARIA")}}
