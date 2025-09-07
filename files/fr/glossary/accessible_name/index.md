---
title: Nom accessible
slug: Glossary/Accessible_name
l10n:
  sourceCommit: 1f7c54fce7dc72e99e3d22ece8958db1290a7062
---

{{GlossarySidebar}}

Un **nom accessible** (<i lang="en">accessible name</i> en anglais) est le nom d'un élément d'interface utilisateur&nbsp;; il s'agit du texte associé à un élément HTML qui fournit aux utilisateur·ice·s d'une technologie d'assistance une étiquette pour l'élément en question.

Les noms accessibles indiquent l'objectif ou l'intention de l'élément. Cela aide les utilisateur·ice·s à comprendre à quoi sert l'élément et comment ils peuvent interagir avec lui. En général, les noms accessibles des éléments doivent être propres à une page. Cela permet aux utilisateur·ice·s de distinguer un élément des autres et d'identifier l'élément avec lequel ils veulent interagir.

En fonction de l'élément et du balisage HTML, la valeur du nom accessible peut être dérivée du contenu visible (par exemple, le texte dans [`<figcaption>`](/fr/docs/Web/HTML/Reference/Elements/figcaption)) ou invisible (par exemple, l'attribut `aria-label` défini sur un élément), ou d'une combinaison des deux. La manière dont le nom accessible d'un élément est déterminé est basée sur [le calcul du nom accessible (en anglais)](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation), qui est différent pour chaque élément.

Il est préférable d'utiliser du texte visible comme noms accessibles. De nombreux éléments, notamment [`<a>`](/fr/docs/Web/HTML/Reference/Elements/a), [`<td>`](/fr/docs/Web/HTML/Reference/Elements/td) et [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button), tirent leur nom de leur contenu. Par exemple, étant donné `<a href="foo.html">Bar</a>`, le nom accessible est «&nbsp;Bar&nbsp;».

D'autres éléments tirent leur nom accessible du contenu des éléments associés. Pour certains éléments parents, comme [`<fieldset>`](/fr/docs/Web/HTML/Reference/Elements/fieldset), [`<table>`](/fr/docs/Web/HTML/Reference/Elements/table), et [`<figure>`](/fr/docs/Web/HTML/Reference/Elements/figure), si ces derniers contiennent respectivement un enfant [`<fieldset>`](/fr/docs/Web/HTML/Reference/Elements/fieldset), [`<caption>`](/fr/docs/Web/HTML/Reference/Elements/caption), ou [`<figcaption>`](/fr/docs/Web/HTML/Reference/Elements/figcaption), l'association est automatique. Pour d'autres éléments, comme [`<textarea>`](/fr/docs/Web/HTML/Reference/Elements/textarea) et [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input), le nom accessible provient également d'un élément associé, l'élément [`<label>`](/fr/docs/Web/HTML/Reference/Elements/label), mais cette association doit être explicitement définie avec une valeur d'attribut `for` sur le `<label>` qui correspond à l'attribut `id` de l'élément de formulaire.

Avec certains éléments, comme [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img), le nom accessible provient de ses attributs, dans ce cas, la valeur est l'attribut `alt`. En considérant que `<img src="grape.jpg" alt="banane"/>`, le nom accessible de l'image est «&nbsp;banane&nbsp;».

Pour créer une association entre le contenu visible et un élément ou plusieurs nœuds de texte et un élément, l'attribut [`aria-labeledby`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) peut être utilisé. S'il n'y a pas de texte visible à associer à un élément d'interface utilisateur nécessitant un nom accessible, l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-label) peut être utilisé. Les noms ne doivent pas être ajoutés aux éléments balisant le texte en ligne, comme [`<code>`](/fr/docs/Web/HTML/Reference/Elements/code), [`<del>`](/fr/docs/Web/HTML/Reference/Elements/del), et [`<mark>`](/fr/docs/Web/HTML/Reference/Elements/mark).

De nombreux éléments, tels que des sections de contenu textuel, n'ont pas besoin d'un nom accessible. Tous les contrôles doivent avoir un nom accessible. Toutes les images qui transmettent des informations et qui ne sont pas purement décoratives le sont également.

Les technologies d'assistance fourniront à l'utilisateur·ice la propriété de nom d'accessibilité, qui est le nom accessible ainsi que le rôle de l'élément. Bien que de nombreux éléments n'aient pas besoin d'un nom accessible, certains [rôles](/fr/docs/Web/Accessibility/ARIA/Roles) de contenu peuvent bénéficier d'un nom accessible. Par exemple, un panneau d'onglets [`tabpanel`](/fr/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) est une section de contenu qui apparaît après qu'un·e utilisateur·ice a activé l'élément associé avec un rôle d'onglet [`tab`](/fr/docs/Web/Accessibility/ARIA/Roles/tab_role). Ce rôle peut être défini sur un élément sans nom nécessaire, comme l'élément [`<div>`](/fr/docs/Web/HTML/Reference/Elements/div). L'onglet `tab` est le contrôle et doit avoir un nom accessible. Le panneau d'onglets `tabpanel` est l'enfant (section de contenu) de `tab`. L'ajout de `aria-labelledby` à `tabpanel` est une bonne pratique.

## Voir aussi

- [Les rôles ARIA](/fr/docs/Web/Accessibility/ARIA/Roles)
- [Les attributs ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes)
- [Accessibilité](/fr/docs/Web/Accessibility)
- [Le guide sur l'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility)
