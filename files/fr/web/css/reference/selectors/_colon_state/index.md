---
title: :state()
slug: Web/CSS/Reference/Selectors/:state
original_slug: Web/CSS/:state
l10n:
  sourceCommit: 52463eeca07031f88cdaf7c45aec5ebbb717533c
---

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:state()`** correspond aux [éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements) qui ont l'état personnalisé spécifié.

## Syntaxe

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

### Paramètres

La pseudo-classe `:state()` prend en argument un identifiant personnalisé qui représente l'état de l'élément personnalisé à correspondre.

## Description

Les éléments peuvent passer d'un état à un autre en raison de l'interaction de l'utilisateur·ice et d'autres facteurs.
Par exemple, un élément peut être dans l'état "hover" lorsqu'un·e utilisateur·ice survole l'élément, ou un lien peut être dans l'état "visited" après qu'un·e utilisateur·ice a cliqué dessus.
Les éléments fournis par les navigateurs peuvent être stylisés en fonction de ces états à l'aide de pseudo-classes CSS telles que [`:hover`](/fr/docs/Web/CSS/Reference/Selectors/:hover) et [`:visited`](/fr/docs/Web/CSS/Reference/Selectors/:visited).
De même, [les éléments personnalisés autonomes](/fr/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (éléments personnalisés qui ne sont pas dérivés d'éléments intégrés) peuvent exposer leurs états, permettant aux pages qui utilisent les éléments de les mettre en forme à l'aide de la pseudo-classe CSS `:state()`.

Les états d'un élément personnalisé sont représentés par des valeurs de chaîne.
Ces valeurs sont ajoutées ou supprimées d'un objet [`CustomStateSet`](/fr/docs/Web/API/CustomStateSet) associé à l'élément.
La pseudo-classe CSS `:state()` correspond à un élément lorsque l'identifiant, passé en argument, est présent dans le `CustomStateSet` de l'élément.

La pseudo-classe `:state()` peut également être utilisée pour correspondre à des états personnalisés dans l'implémentation d'un élément personnalisé.
Cela se fait en utilisant `:state()` dans la fonction pseudo-classe [`:host()`](/fr/docs/Web/CSS/Reference/Selectors/:host_function), qui correspond à un état uniquement dans le shadow DOM de l'élément personnalisé actuel.

De plus, le pseudo-élément [`::part()`](/fr/docs/Web/CSS/Reference/Selectors/::part) suivi de la pseudo-classe `:state()` permet de correspondre aux [parties fantôme](/fr/docs/Web/CSS/CSS_shadow_parts) d'un élément personnalisé qui sont dans un état particulier. (**Les parties fantôme** sont des parties de l'arbre fantôme d'un élément personnalisé qui sont explicitement exposées à une page contenant à des fins de style.)

## Exemples

### Correspondance d'un état personnalisé

Ce CSS montre comment changer la bordure de l'élément personnalisé autonome `<labeled-checkbox>` en `rouge` lorsqu'il est dans l'état «&nbsp;checked&nbsp;».

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Pour un exemple en direct de ce code en action, consultez l'exemple [Correspondance avec l'état personnalisé d'un élément de case à cocher personnalisé](/fr/docs/Web/API/CustomStateSet#correspondance_de_létat_personnalisé_dun_élément_case_à_cocher_personnalisé) sur la page `CustomStateSet`.

### Correspondance d'un état personnalisé dans le DOM fantôme d'un élément personnalisé

Cet exemple montre comment la pseudo-classe `:state()` peut être utilisée dans la fonction pseudo-classe [`:host()`](/fr/docs/Web/CSS/Reference/Selectors/:host_function) pour correspondre à des états personnalisés dans l'implémentation d'un élément personnalisé.

Le CSS suivant injecte un `[x]` gris avant l'élément lorsqu'il est dans l'état «&nbsp;checked&nbsp;».

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Pour un exemple en direct de ce code en action, consultez l'exemple [Correspondance avec l'état personnalisé d'un élément de case à cocher personnalisé](/fr/docs/Web/API/CustomStateSet#correspondance_de_létat_personnalisé_dun_élément_case_à_cocher_personnalisé) sur la page `CustomStateSet`.

### Correspondance d'un état personnalisé dans une partie fantôme

Cet exemple montre comment la pseudo-classe `:state()` peut être utilisée pour cibler les [parties fantôme](/fr/docs/Web/CSS/CSS_shadow_parts) d'un élément personnalisé.

Les parties fantôme sont définies et nommées à l'aide de l'attribut [`part`](/fr/docs/Web/HTML/Reference/Global_attributes/part).
Par exemple, considérons un élément personnalisé nommé `<question-box>` qui utilise un élément personnalisé `<labeled-checkbox>` comme partie fantôme nommée `checkbox`&nbsp;:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

Le CSS ci-dessous montre comment le pseudo-élément [`::part()`](/fr/docs/Web/CSS/Reference/Selectors/::part) peut être utilisé pour correspondre à la partie fantôme de `'checkbox'`.
Il montre ensuite comment le pseudo-élément `::part()` suivi de la pseudo-classe `:state()` peut être utilisé pour correspondre à la même partie lorsqu'elle est dans l'état `checked`.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
  outline: dashed 1px green;
}
```

Pour un exemple en direct de ce code en action, consultez l'exemple [Correspondance d'un état personnalisé dans une partie masquée d'un élément personnalisé](/fr/docs/Web/API/CustomStateSet#correspondance_dun_état_personnalisé_dans_une_partie_masquée_dun_élément_personnalisé) sur la page `CustomStateSet`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`CustomStateSet`](/fr/docs/Web/API/CustomStateSet)
- Les [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Apprendre&nbsp;: pseudo-classes et pseudo-éléments](/fr/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [États personnalisés et sélecteurs CSS de pseudo-classes d'états personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements#états_personnalisés_et_sélecteurs_css_de_pseudo-classes_détats_personnalisés) dans l'[Utilisation d'éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements)
