---
title: text-size-adjust
slug: Web/CSS/text-size-adjust
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/text-size-adjust
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`text-size-adjust`** permet de contrôler l'algorithme d'amplification du texte sur certains appareils mobiles. Cette propriété n'est pas standard et doit donc être préfixée : `-moz-text-size-adjust`, `-webkit-text-size-adjust`, and `-ms-text-size-adjust`.

```css
/* Valeur avec un mot-clé */
text-size-adjust: none;
text-size-adjust: auto;

/* Valeurs proportionnelles */
text-size-adjust: 80%;

/* Valeurs globales */
text-size-adjust: inherit;
text-size-adjust: initial;
text-size-adjust: unset;
```

De nombreuses pages web n'ont pas été conçues pour le mobile et les navigateurs mobiles n'affichent pas les pages web de la même façon que les navigateurs de bureau. Plutôt que d'afficher une page web dans la largeur de l'écran, un navigateur mobile sera parfois amené à l'afficher dans une zone d'affichage beaucoup plus large que l'écran. Pour gérer la largeur de l'écran, le navigateur n'affichera qu'une partie ou rétrécira la taille de la zone d'affichage.

Par essence, cela signifie que, sur mobiles, on ne voit qu'une portion rectangulaire de la page ou que la page a l'air dézoomée (et apparaît donc plus petite).

Cependant, lorsque l'utilisateur zoome jusqu'à ce que le texte soit lisible, on a alors une barre horizontale de défilement qui apparaît car le texte est large que la largeur de l'écran et l'ergonomie est donc détériorée car l'utilisateur doit défiler à la fin et au début à chaque passage à la ligne. Pour éviter ce problème, plusieurs navigateurs mobiles implémentent un algorithme de **gonflement** (_inflation_). Lorsqu'un élément reçoit le focus, qu'il contient du texte et qu'il utilise 100 % de la largeur de l'écran, la taille du texte est augmentée afin qu'il soit lisible, sans pour autant modifier la disposition générale (ce qui évite d'avoir à recourir à une barre de défilement horizontale).

La propriété `text-size-adjust` permet aux auteurs de ne pas suivre ce comportement si les pages web ont été adaptées pour les différents formats d'écran.

## Syntaxe

La propriété `text-size-adjust` est définie avec le mot-clé `none` ou le mot-clé `auto` ou avec une valeur de type `<percentage>`.

### Valeurs

- `none`
  - : Un mot-clé qui permet de ne pas utiliser l'algorithme de gonflement. En résumé, cela signifie que l'élément sera affiché sans que le texte soit amplifié. Pour les anciennes versions des navigateurs basés sur le moteur WebKit (Chrome ≤ 26 et Safari ≤ 5), cela empêchera l'utilisateur de zoomer/dézoomer sur la page web.
- `auto`
  - : Active l'algorithme d'amplification du navigateur. Ce mot-clé permet notamment d'annuler une valeur `none` utilisée précédemment.
- `<percentage>`
  - : Une valeur exprimée en pourcentages (type de données {{cssxref("&lt;percentage&gt;")}}. Cette valeur est synonyme du mot-clé `auto` et ajoute comme information le taux d'amplification à utiliser sur la police avec l'algorithme.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

| Spécification                                                                                            | État                                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName("CSS Text Size Adjust", "#adjustment-control", "text-size-adjust")}} | {{Spec2("CSS Text Size Adjust")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.text-size-adjust")}}

## Voir aussi

- [La documentation d'Apple](https://developer.apple.com/library/ios/#DOCUMENTATION/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html)
- [Le comportement de Gecko décrit par L. David Baron](http://dbaron.org/log/20111126-font-inflation)
- [La documentation de Microsoft](<http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff462082(v=vs.105).aspx>)
