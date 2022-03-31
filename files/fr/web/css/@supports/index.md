---
title: '@supports'
slug: Web/CSS/@supports
tags:
  - CSS
  - Reference
  - Règle @
translation_of: Web/CSS/@supports
---
{{CSSRef}}

La règle **`@supports`** permet de définir des déclarations qui dépendent de la prise en charge du navigateur d'une ou plusieurs fonctionnalités CSS. Cette condition est définie par un ensemble de paires de propriété/valeur qui forment une combinaison de conjonctions, disjonctions, négations. Une telle condition est appelée « condition de prise en charge » (ou _supports condition_).

```css
@supports (display: grid) {
  div {
    display: grid;
  }
}
```

```css
@supports not (display: grid) {
  div {
    float: right;
  }
}
```

`@supports` permet ainsi au moteur de rendu de tester la présence d'une fonctionnalité (on parle de _feature query_).

La règle @ `@supports` peut être utilisée au niveau le plus haut de la feuille de style et également à l'intérieur d'[un groupe de règle conditionnel](/fr/docs/Web/CSS/Règles_@#R.C3.A8gles_conditionnelles_de_groupe). Cette règle @ peut être manipulée via le modèle d'objets CSS et JavaScript, notamment via l'interface {{domxref("CSSSupportsRule")}}.

## Syntaxe

Une condition de prise en charge se compose d'une ou plusieurs déclarations combinées entre elles par des opérateurs logiques (`and`, `or`, `not`). La précédence des opérateurs peut être surchargée en utilisant des parenthèses autour des déclarations.

### Syntaxe déclarative

La plus simple expression est une déclaration CSS, c'est-à-dire un nom de propriété CSS suivi par deux points (:) puis une valeur. Ainsi, l'expression suivante :

```css
@supports ( transform-origin: 5% 5% ) { }
```

renvoie le booléen vrai si la propriété {{cssxref("transform-origin")}} du navigateur considère que la valeur `5% 5%` est valide.

Une déclaration CSS est toujours encadrée par des parenthèses.

### Syntaxe fonctionnelle

La deuxième syntaxe permet d'utiliser une fonction. Cette syntaxe est prise en charge par les différents navigateurs mais les fonctions sont en cours de standardisation.

#### `selector()` {{Experimental_inline}}

Dans l'exemple qui suit, on teste si le navigateur prend en charge la syntaxe du sélecteur passé en argument. Ici, le code renvoie VRAI si le navigateur prend en charge les [sélecteurs enfants](/fr/docs/Web/CSS/Sélecteurs_enfant)

```css
@supports selector(A > B) { }
```

### L'opérateur `not`

L'opérateur `not` peut être utilisée avant une expression afin de créer un expression dont le résultat logique est la négation du résultat de l'expression originale. Ainsi, l'expression suivante :

```css
@supports not ( transform-origin: 10em 10em 10em ) { }
```

renvoie VRAI si la propriété {{cssxref("transform-origin")}} du navigateur ne considère pas la valeur `10em 10em 10em` comme valide.

Comme pour les autres opérateurs, on peut appliquer l'opérateur `not` à une déclaration, quelle que soit sa complexité. Les exemples qui suivent sont donc des expressions valides :

```css
@supports not ( not ( transform-origin: 2px ) ) { }
@supports (display: grid) and ( not (display: inline-grid) ) { }
```

> **Note :** Au niveau le plus haut, il n'est pas nécessaire d'encadrer l'opérateur `not` entre parenthèses. Si on souhaite le combiner avec d'autres opérateurs comme `and` ou `or`, il faudra utiliser des parenthèses.

### L'opérateur `and`

L'opérateur `and` peut être utilisé pour former une nouvelle expression à partir de deux expressions. L'expression résultante sera la conjonction des deux expressions originelles. Autrement dit, le résultat de cette nouvelle expression sera VRAI si et seulement si les deux expressions de départ sont vraies et FAUX sinon. Dans l'exemple suivant, l'expression complète ne sera vérifiée que si les deux expressions sont vérifiées :

```css
@supports (display: table-cell) and (display: list-item) { }
```

On peut enchaîner plusieurs conjonctions sans avoir à ajouter de parenthèses (l'opérateur est commutatif).

```css
@supports (display: table-cell) and (display: list-item) and (display:run-in) { }
```

sera équivalente à :

```css
@supports (display: table-cell) and ((display: list-item) and (display:run-in)) { }
```

### L'opérateur `or`

L'opérateur `or` peut être utilisé pour former une nouvelle expression à partir de deux expressions. L'expression résultante sera la disjonction des deux expressions originelles. Autrement dit, le résultat de cette nouvelle expression sera VRAI si au moins une des deux expressions est vraie. Dans l'exemple qui suit, l'expression complète est vérifiée si au moins une des deux (ce peuvent être les deux) expressions est vérifiée :

```css
@supports ( transform-style: preserve ) or ( -moz-transform-style: preserve ) { }
```

On peut enchaîner plusieurs disjonctions sans qu'il soit nécessaire d'ajouter des parenthèses.

```css
@supports ( transform-style: preserve ) or ( -moz-transform-style: preserve ) or
          ( -o-transform-style: preserve ) or ( -webkit-transform-style: preserve  ) { }
```

sera ainsi équivalente à :

```css
@supports ( transform-style: preserve-3d ) or (( -moz-transform-style: preserve-3d ) or
          (( -o-transform-style: preserve-3d ) or ( -webkit-transform-style: preserve-3d  ))) { }
```

> **Note :** Lorsqu'on utilise à la fois l'opérateur `and` et l'opérateur `or`, il devient nécessaire d'utiliser des parenthèses pour que l'ordre d'application des opérateurs soit défini. Si on n'utilise pas de parenthèses, la condition sera considérée comme invalide et l'ensemble de la règle @ sera ignorée.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Tester la prise en charge d'une propriété CSS donnée

```css
@supports (animation-name: test) {
    … /* Du code CSS spécifique, appliqué quand les animations sont prises en charge sans préfixe */
    @keyframes { /* @supports est une règle @ qui peut inclure d'autres règles @ */
      …
    }
}
```

### Tester la prise en charge d'une propriété CSS donnée ou d'une version préfixée

```css
@supports ( (perspective: 10px) or (-moz-perspective: 10px) or (-webkit-perspective: 10px) or
            (-ms-perspective: 10px) or (-o-perspective: 10px) ) {
    … /* Du code CSS spécifique, appliqué lorsque les transformations 3D,
         sont prises en charge, éventuellement avec un préfixe */
}
```

### Tester l'absence de prise en charge d'une propriété CSS

```css
@supports not ((text-align-last:justify) or (-moz-text-align-last:justify) ){
    … /* Du code CSS spécifique, appliqué pour simuler text-align-last:justify */
}
```

### Tester la prise en charge des propriétés personnalisées

```css
@supports (--toto: green) {
  body {
    color: --nomVar;
  }
}
```

### Tester la prise en charge d'un sélecteur

{{SeeCompatTable}}

```css
/* Cette règle ne sera pas appliquée si le navigateur */
/* ne prend pas en charge :is() */
:is(ul, ol) > li {
  … /* Le CSS à utiliser lorsque :is(…) est pris en charge */
}

@supports not selector(:is(a, b)) {
  /* Que faire lorsque :is() n'est pas pris en charge */
  ul > li,
  ol > li {
    …
  }
}

@supports selector(:nth-child(1n of a, b)) {
  /* Cette règle doit être placée dans un bloc @supports */
  /* Sinon elle pourra être partiellement appliquée pour les */
  /* navigateurs qui ne prennent pas en charge :is(…) */
  :is(nth-child(1n of ul, ol) a,
  details > summary) {
    … /* CSS appliqué quand le sélecteur :is(…) et quand la forme
         `of` pour :nth-child sont pris en charge */
  }
}
```

## Spécifications

| Spécification                                                                    | État                                     | Commentaires                       |
| -------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------- |
| {{SpecName("CSS4 Conditional", "#at-supports", "@supports")}} | {{Spec2("CSS4 Conditional")}} | Ajout de la fonction `selector()`. |
| {{SpecName("CSS3 Conditional", "#at-supports", "@supports")}} | {{Spec2("CSS3 Conditional")}} | Définition initiale.               |

## Compatibilité des navigateurs

{{Compat("css.at-rules.supports")}}

## Voir aussi

- La classe CSSOM {{domxref("CSSSupportsRule")}}
- La méthode {{domxref("CSS.supports")}} qui permet d'effectuer les mêmes vérifications via JavaScript.
