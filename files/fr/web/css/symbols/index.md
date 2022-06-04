---
title: symbols()
slug: Web/CSS/symbols
tags:
  - CSS
  - Fonction
  - Reference
translation_of: Web/CSS/symbols()
original_slug: Web/CSS/symbols()
---
{{CSSRef}}

La fonction **`symbols()`** permet de définir des styles pour les compteurs en ligne, directement comme valeur de la propriété CSS. À la différence des styles définis avec {{cssxref("@counter-style")}}, ces styles sont anonymes. La fonction `symbols()` ne possède pas toute la flexibilité offerte par la règle @ {{cssxref("@counter-style")}} mais peut s'avérer utile dans des cas où le style nécessaire n'est utilisé qu'une seule fois et où il n'est pas nécessaire d'utiliser toutes les options fournies par {{cssxref("@counter-style")}}.

## Syntaxe

    symbols() = symbols( <symbols-type>? [ <string> | <image> ]+ );

`<symbols-type>` est l'un des mots-clés suivants :

- `cyclic` : le système utilisera les différentes valeurs les unes à la suite des autres, de façon cyclique.
- `numeric` : le système interprètera les valeurs fournies comme une suite numérique composant un système de numération.
- `alphabetic` : le système interprètera les valeurs fournies comme les chiffres d'un système de numération alphabétique (par exemple : A, B, C, AA, AB, AC, etc.) sans zéro.
- `symbolic` : le système parcourt les différentes valeurs fournies et en affiche une de plus à chaque cycle.
- `fixed` : le système affiche chaque symbole une fois puis poursuit avec les chiffres arabes.

## Exemples

### HTML

```html
<ol>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
</ol>
```

### CSS

```css
ol {
  list-style: symbols(alphabetic "*" "\2020" "\2021");
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Spécifications

| Spécification                                                                                | Statut                                       | Commentaires         |
| -------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('CSS3 Counter Styles', '#symbols-function', 'symbols()')}} | {{Spec2('CSS3 Counter Styles')}} | Définition initiale. |

## Voir aussi

- {{cssxref("@counter-style")}}
- {{cssxref("list-style-type")}} et la propriété raccourcie correspondante : {{cssxref("list-style")}}.
