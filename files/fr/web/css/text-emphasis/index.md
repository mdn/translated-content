---
title: text-emphasis
slug: Web/CSS/text-emphasis
---

{{CSSRef}}

La propriété **`text-emphasis`** est une propriété raccourcie qui permet de définir {{cssxref("text-emphasis-style")}} et {{cssxref("text-emphasis-color")}} avec une seule déclaration. Cette propriété appliquera les marques d'emphase définies sur chaque caractères du texte de l'élément sauf pour les séparateurs (comme les espaces) et les caractères de contrôle.

{{EmbedInteractiveExample("pages/css/text-emphasis.html")}}

La propriété `text-emphasis` est différente de {{cssxref("text-decoration")}}. La propriété `text-decoration` n'a pas d'héritage et la décoration est appliquée sur tout l'élément. Cependant, `text-emphasis` a un héritage et il est donc possible de changer la marque selon les « descendants » d'un élément.

La taille du symbole d'emphase, comme celle des symboles Ruby, représente environ 50% de la taille de la police du texte. `text-emphasis` peut modifier la hauteur de la ligne lorsque l'interlignage n'est pas suffisant pour placer les marques.

> **Note :** `text-emphasis` ne réinitialise pas la valeur de {{cssxref("text-emphasis-position")}}. En effet, bien que la couleur et le style des marques puisse varier, il est très peu probable qu'on change leurs positions au cours du même document.

## Syntaxe

```css
/* Valeur initiale */
text-emphasis: none; /* Pas de marque */

/* Chaîne de caractères */
/* Type <string>        */
text-emphasis: "x";
text-emphasis: "点";
text-emphasis: "\25B2";
text-emphasis: "*" #555;
/* À ne pas utiliser, cela pourra être */
/* considéré comme 't' uniquement      */
text-emphasis: "toto";

/* Valeurs avec mot(s)-clé(s) */
text-emphasis: filled;
text-emphasis: open;
text-emphasis: filled sesame;
text-emphasis: open sesame;

/* Valeurs avec mots-clés, combinés à une couleur */
text-emphasis: filled sesame #555;

/* Valeurs globales */
text-emphasis: inherit;
text-emphasis: initial;
text-emphasis: unset;
```

### Valeurs

- `none`
  - : Il n'y aura pas de marques d'emphase appliquées.
- `filled`
  - : La forme de la marque est remplie avec une couleur unie. Si aucun des mots-clés parmi `filled` ou `open` n'est présent, ce sera la valeur par défaut.
- `open`
  - : La forme de la marque est évidée.
- `dot`
  - : La forme de la marque est un petit cercle. Le cercle plein est le caractère `'•'` (`U+2022`) et celui qui est évidé est `'◦'` (`U+25E6`).
- `circle`
  - : La forme de la marque est un grand cercle. Le cercle plein est le caractère `'●'` (`U+25CF`) et celui du cercle évidé est `'○'` (`U+25CB`). Lorsqu'aucune forme n'est spécifiée, c'est la forme par défaut utilisée pour les modes d'écriture horizontaux.
- `double-circle`
  - : La forme de la marque est un double-cercle. Le double-cercle plein est le caractère `'◉'` (`U+25C9`), celui du double-cercle évidé est `'◎'` (`U+25CE`).
- `triangle`
  - : La forme de la marque est un triangle. Le triangle plein correspond au caractère `'▲'` (`U+25B2`) et celui du triangle évidé correspond à `'△'` (`U+25B3`).
- `sesame`
  - : La forme de la marque est un sésame. Le sésame plein correspond au caractère `'﹅'` (`U+FE45`) et celui du sésame évidé correspond à `'﹆'` (`U+FE46`). Lorsqu'aucune forme n'a été définie, c'est la forme par défaut qui est utilisée pour les marques d'emphase pour les modes d'écriture verticaux.
- `<string>`
  - : La marque affichée sera la chaîne de caractères. Attention à n'utiliser que des chaînes d'un seul caractère. L'agent utilisateur peut tronquer ou ignorer les chaînes qui comportent plusieurs graphèmes.
- `<color>`
  - : Définit la couleur utilisée pour la marque. Si aucune couleur n'est définie, la valeur utilisée par défaut sera `currentColor`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p><em>Coucou</em>, je suis <em>là</em></p>
```

### CSS

```css
em {
  text-emphasis: sesame blue;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref('text-emphasis-style')}}
- {{cssxref('text-emphasis-color')}}
- {{cssxref('text-emphasis-position')}}
