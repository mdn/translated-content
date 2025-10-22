---
title: Description accessible
slug: Glossary/Accessible_description
l10n:
  sourceCommit: fd2acb039cc1caee4af10f76ffb839c8da7da5b8
---

Une **description accessible** (<i lang="en">accessible description</i> en anglais) est la description d'un élément d'interface utilisateur qui fournit des informations supplémentaires pour aider les utilisateur·ice·s de technologies d'assistance à comprendre l'élément UI et son contexte. Elle est associée à un élément HTML ou SVG et donne aux utilisateur·ice·s un contexte supplémentaire sur son but au-delà de ce qui est fourni par le {{Glossary("Accessible_name", "nom accessible")}} de l'élément. C'est particulièrement important pour les utilisateur·ice·s qui se servent de technologies d'assistance telles que {{Glossary("Screen_reader", "lecteurs d'écrans")}}. La description accessible d'un élément fait partie de {{Glossary("Accessibility_tree", "l'arbre d'accessibilité")}}.

Par exemple, le nom accessible d'un tableau ({{HTMLElement("table")}}) est fourni par sa première légende ({{HTMLElement("caption")}}). Dans le cas de tableaux de données complexes, une ou deux phrases décrivant le tableau peuvent fournir une description. Cela peut être un paragraphe juste avant ou après le tableau, tant visuellement que dans l'ordre du code source. S'il se trouve ailleurs dans l'ordre source, ou pour rendre l'association explicite, l'attribut [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) peut être utilisé pour associer le tableau à sa description.

De même, lorsqu'un·e utilisateur·ice doit créer un mot de passe, le `<label>` pour l'élément HTML {{HTMLElement("input")}} de type `password` fournit son nom accessible. Une bonne description accessible inclut les exigences du mot de passe de manière visible pour tous les utilisateur·ice·s. Elle peut être explicitement associée à l'entrée via son attribut `aria-describedby`, qui l'ajoute à l'arbre d'accessibilité en tant que «&nbsp;description&nbsp;» pour ce nœud.

Les descriptions sont réduites à des chaînes de texte. Dans notre exemple de mot de passe, si la valeur de l'attribut `aria-describedby` de l'entrée est l'`id` d'un élément de liste non ordonnée ({{HTMLElement("ul")}}) contenant une liste de conditions, la description est le texte concaténé et les équivalents texte de tous les éléments de la liste.

Vous pouvez inspecter la description accessible de tout élément sur votre page&nbsp;: consultez l'onglet d'accessibilité des outils de développement de votre navigateur, qui fournit les informations d'accessibilité pour l'élément actuellement sélectionné.

## Calcul de la description accessible

Pour les éléments HTML, s'il n'a pas de description accessible, celle‑ci doit être associée de façon programmatique à l'élément lié. Le modèle d'objet d'accessibilité (AOM) calcule la description accessible en vérifiant ces caractéristiques, dans l'ordre, jusqu'à ce qu'elle soit définie&nbsp;:

1. l'attribut [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).
2. l'attribut [`aria-description`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description).
3. Les caractéristiques spécifiques à la langue qui participent au calcul de la description si la caractéristique n'est pas déjà utilisée pour définir le {{Glossary("Accessible_name", "nom accessible")}}. Par exemple&nbsp;:
   - Un {{HTMLElement("summary")}} est décrit par le contenu du {{HTMLElement("details")}} dans lequel il est imbriqué.
   - Les boutons {{HTMLElement("input")}} (avec l'attribut type `button`, `submit` ou `reset`) sont décrits par la valeur de leur attribut `value`.
   - En SVG, le contenu de l'élément [`<desc>`](/fr/docs/Web/SVG/Reference/Element/desc), s'il est présent, sinon, le texte contenu dans les éléments descendants contenant du texte (c'est‑à‑dire [`<text>`](/fr/docs/Web/SVG/Reference/Element/text)), s'ils ne sont pas déjà utilisés pour le {{Glossary("Accessible_name", "nom accessible")}}.
4. Si aucune des options précédentes ne fournit une description, l'attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title) est utilisé, si le `title` n'est pas le {{Glossary("Accessible_name", "nom accessible")}} de cet élément.
5. Si aucune des options précédentes ne définit une description accessible, la description accessible est vide.

Les étapes de définition de la description accessible en HTML sont décrites dans la [Description Accessible HTML-AAM <sup>(angl.)</sup>](https://w3c.github.io/html-aam/#accdesc-computation). La description accessible des éléments SVG suit les mêmes étapes avec de petites différences énumérées dans la [Description Accessible SVG-AAM <sup>(angl.)</sup>](https://w3c.github.io/svg-aam/#mapping_additional_nd).

## Voir aussi

- [Calcul du nom et de la description accessibles 1.2 (accname) <sup>(angl.)</sup>](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Accessibilité](/fr/docs/Web/Accessibility)
- [Apprendre l'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility)
- [Accessibilité du Web](https://fr.wikipedia.org/wiki/Accessibilit%C3%A9_du_web) sur Wikipedia
- [Accessibilité Web en tête <sup>(angl.)</sup>](https://webaim.org/)
- [ARIA](/fr/docs/Web/Accessibility/ARIA)
- [Initiative W3C pour l'accessibilité Web (WAI) <sup>(angl.)</sup>](https://www.w3.org/WAI/)
- [Applications Riches d'Internet Accessible (WAI-ARIA) <sup>(angl.)</sup>](https://w3c.github.io/aria/)
- Termes associés du glossaire&nbsp;:
- {{Glossary("Accessibility", "Accessibilité")}}
- {{Glossary("Accessibility_tree", "Arbre d'accessibilité")}}
- {{Glossary("Accessible_name", "Nom accessible")}}
- {{Glossary("ARIA")}}
