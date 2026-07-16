---
title: Nom accessible
slug: Glossary/Accessible_name
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **nom accessible** (<i lang="en">accessible name</i> en anglais) est le nom d'un élément d'interface utilisateur&nbsp;; il s'agit du texte associé à un élément HTML qui fournit aux utilisateur·ice·s d'une technologie d'assistance une étiquette pour l'élément en question.

Les noms accessibles indiquent l'objectif ou l'intention de l'élément. Cela aide les utilisateur·ice·s à comprendre à quoi sert l'élément et comment ils peuvent interagir avec lui. En général, les noms accessibles des éléments doivent être propres à une page. Cela permet aux utilisateur·ice·s de distinguer un élément des autres et d'identifier l'élément avec lequel ils veulent interagir.

En fonction de l'élément et du balisage HTML, la valeur du nom accessible peut être dérivée du contenu visible (par exemple, le texte dans {{HTMLElement("figcaption")}}) ou invisible (par exemple, l'attribut `aria-label` défini sur un élément), ou d'une combinaison des deux. La manière dont le nom accessible d'un élément est déterminé est basée sur [le calcul du nom accessible <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation), qui est différent pour chaque élément.

Il est préférable d'utiliser du texte visible comme noms accessibles. De nombreux éléments HTML, notamment {{HTMLElement("a")}}, {{HTMLElement("td")}} et {{HTMLElement("button")}}, tirent leur nom de leur contenu. Par exemple, étant donné `<a href="toto.html">Tata</a>`, le nom accessible est «&nbsp;Tata&nbsp;».

D'autres éléments tirent leur nom accessible du contenu des éléments associés. Par exemple, lorsqu'un élément HTML {{HTMLElement("fieldset")}} ou {{HTMLElement("table")}} contient un élément descendant {{HTMLElement("legend")}} ou {{HTMLElement("caption")}}, respectivement, l'association de l'élément imbriqué fournissant un nom accessible pour le parent est automatique. Pour les éléments de formulaire comme {{HTMLElement("textarea")}} et {{HTMLElement("input")}}, le nom accessible provient de l'élément {{HTMLElement("label")}} associé. L'association doit être explicitement définie en définissant l'attribut `for` dans l'élément `<label>` pour correspondre à l'attribut `id` de l'élément de formulaire. Alternativement, une association implicite est créée lorsque le contrôle de formulaire est directement imbriqué dans l'élément `<label>`.

Avec certains éléments, comme {{HTMLElement("img")}}, le nom accessible provient de ses attributs, dans ce cas, la valeur est l'attribut `alt`. En considérant que `<img src="grape.jpg" alt="banane"/>`, le nom accessible de l'image est «&nbsp;banane&nbsp;».

Pour créer une association entre le contenu visible et un élément ou plusieurs nœuds de texte et un élément, l'attribut [`aria-labeledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) peut être utilisé. S'il n'y a pas de texte visible à associer à un élément d'interface utilisateur nécessitant un nom accessible, l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) peut être utilisé. Les noms ne doivent pas être ajoutés aux éléments balisant le texte en ligne, comme {{HTMLElement("code")}}, {{HTMLElement("del")}} et {{HTMLElement("mark")}}.

De nombreux éléments, tels que des sections de contenu textuel, n'ont pas besoin d'un nom accessible. Tous les contrôles doivent avoir un nom accessible. Toutes les images qui transmettent des informations et qui ne sont pas purement décoratives le sont également.

Les technologies d'assistance fourniront à l'utilisateur·ice la propriété de nom d'accessibilité, qui est le nom accessible ainsi que le rôle de l'élément. Bien que de nombreux éléments n'aient pas besoin d'un nom accessible, certains [rôles](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) de contenu peuvent bénéficier d'un nom accessible. Par exemple, un panneau d'onglets [`tabpanel`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) est une section de contenu qui apparaît après qu'un·e utilisateur·ice a activé l'élément associé avec un rôle d'onglet [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role). Ce rôle peut être défini sur un élément sans nom nécessaire, comme l'élément {{HTMLElement("div")}}. L'onglet `tab` est le contrôle et doit avoir un nom accessible. Le panneau d'onglets `tabpanel` est l'enfant (section de contenu) de `tab`. L'ajout de `aria-labelledby` à `tabpanel` est une bonne pratique.

## Voir aussi

- [Rôles ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Roles)
- [Attributs ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes)
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
  - {{Glossary("Accessibility tree", "Arbre d'accessibilité")}}
  - {{Glossary("Accessible description", "Description accessible")}}
  - {{Glossary("ARIA")}}
