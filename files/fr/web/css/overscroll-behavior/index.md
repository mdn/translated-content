---
title: overscroll-behavior
slug: Web/CSS/overscroll-behavior
---

{{CSSRef}}

La propriété CSS **`overscroll-behavior`** est une propriété raccourcie permettant de définir les propriétés {{cssxref("overscroll-behavior-x")}} et {{cssxref("overscroll-behavior-y")}}. Ces propriétés contrôlent le comportement du navigateur lorsqu'on dépasse la limite d'une zone de défilement (_scrolling_).

Par défaut, les navigateurs mobiles fournissent un effet de rebondissement voire déclenchent un rafraîchissement de la page lorsqu'on défile jusqu'en haut ou jusqu'en bas de la page. Vous avez pu remarquer que, lorsqu'une boîte de dialogue possède du contenu qu'on peut faire défiler, si on atteint la limite de défilement pour ce contenu, c'est la page sous-jacente qui défilera sous la boîte de dialogue : c'est ce qu'on appelle **le chaînage du défilement** (_scroll chaining_).

Dans certains cas, ces effets ne sont pas souhaitables. On peut alors utiliser `overscroll-behavior` pour éviter les chaînages intempestifs et les comportements du type "défiler pour rafraîchir".

## Syntaxe

```css
/* Valeurs avec un mot-clés */
overscroll-behavior: auto;
overscroll-behavior: contain;
overscroll-behavior: none;

/* Valeurs avec deux mots-clés */
overscroll-behavior: auto contain;

/* Valeurs globales */
overflow: inherit;
overflow: initial;
overflow: unset;
```

La propriété `overscroll-behavior` est définie avec un ou deux mots-clés parmi ceux de la liste ci-après.

Lorsqu'on utilise cette propriété raccourcie avec deux valeurs, la première est utilisée pour `overscroll-behavior-x` et la seconde pour `overscroll-behavior-y`. Si une seule valeur est fournie, c'est cette même valeur qui est utilisée pour les deux propriétés.

### Valeurs

- `auto`
  - : Le dépassement de la zone de défilement se déroule normalement.
- `contain`
  - : Le comportement normal est utilisé à l'intérieur de l'élément pour lequel s'applique cette valeur (on a donc un effet de rebondissement) mais aucun effet associé n'a lieu sur les zones de défilement environnantes. Autrement dit, les éléments sous-jacents ne défilent pas.
- `none`
  - : Il n'y a pas d'effet associé sur les zones de défilement environnantes et on empêche le comportement normal de se produire sur l'élément lorsqu'on dépasse de la zone de défilement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans notre exemple sur [`overscroll-behavior`](https://mdn.github.io/css-examples/overscroll-behavior/) (cf. [le code source](https://github.com/mdn/css-examples/tree/master/overscroll-behavior) associé), on affiche une page entière de contacts et une boîte de dialogue avec une fenêtre de discussion.

![](example.png)

Ces deux zones possèdent du contenu qui entraîne leur défilement. Normalement, si on défile la fenêtre de discussion jusqu'à une limite de défilement, ce serait au tour de la liste de contacts de défiler en dessous. Cependant, cet effet n'est pas souhaitable ici. On utilise donc `overscroll-behavior-y` (`overscroll-behavior` fonctionnerait également) sur la fenêtre de discussion :

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

On souhaite également se débarasser des effets de bord lorsqu'on défile jusqu'en haut ou jusqu'en bas de la liste des contacts (Chrome pour Android rafraichit la page lorsqu'on défile après la limite haute par exemple). Pour cela, on utilise `overscroll-behavior: none` sur l'élément {{htmlelement("body")}} :

```css
body {
  margin: 0;
  overscroll-behavior: none;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Take control of your scroll: customizing pull-to-refresh and overflow effects (en anglais)](https://developers.google.com/web/updates/2017/11/overscroll-behavior#demo)
- {{cssxref("-ms-scroll-chaining")}}
