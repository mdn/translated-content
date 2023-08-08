---
title: exportparts
slug: Web/HTML/Global_attributes/exportparts
---

{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Global_attributes) **`exportparts`** permet de sélectionner et de mettre en forme des éléments qui existent dans des [<i lang="en">shadow trees</i>](/fr/docs/Glossary/Shadow_tree), en exportant leur nom `part`.

L'arbre du <i lang="en">Shadow DOM</i> est une structure isolée ou les identifiants, les classes et les styles ne peuvent être atteints par des sélecteurs ou des requêtes appartenant au DOM classique. Pour appliquer un style à un élément qui vit dans un arbre du <i lang="en">Shadow DOM</i> avec une règle CSS créée en dehors de cet arbre, il faudra utiliser l'attribut universel [`part`](/fr/docs/Web/HTML/Global_attributes/part). Cet attribut doit être affecté à un élément présent dans l'arbre et sa valeur est un identifiant. Les règles présentes en dehors de l'arbre du <i lang="en">Shadow DOM</i> doivent utiliser le pseudo-élément CSS [`::part`](/fr/docs/Web/CSS/::part) et celui-ci doit contenir le même identifiant comme argument.

L'attribut universel [`part`](/fr/docs/Web/HTML/Global_attributes/part) rend l'élément visible sur un seul niveau de profondeur. Lorsque l'arbre du <i lang="en">Shadow DOM</i> est imbriqué, les attributs `part` ne seront visibles que du parent direct de l'arbre, mais pas des autres ancêtres. `exportparts` permet d'exporter ces informations vers ces autres niveaux.

L'attribut `exportparts` doit être placé sur un hôte auquel l'arbre du <i lang="en">Shadow DOM</i> sera attaché. La valeur de l'attribut doit être une liste de valeurs de `part`, séparées par des virgules, qui doivent être rendues disponibles au DOM en dehors de la structure courante.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les attributs universels](/fr/docs/Web/HTML/Global_attributes).
