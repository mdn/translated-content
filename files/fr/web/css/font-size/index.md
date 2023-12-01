---
title: font-size
slug: Web/CSS/font-size
---

{{CSSRef}}

La propriété **`font-size`** définit la taille de fonte utilisée pour le texte. La modification de cette taille peut entraîner la modification de la taille d'autres éléments car elle est utilisée pour calculer les valeurs des longueurs relatives (type {{cssxref("&lt;length&gt;")}}) (par exemple exprimées avec les unités `em` ou `ex`).

{{EmbedInteractiveExample("pages/css/font-size.html")}}

## Syntaxe

```css
/* Valeurs dont la taille est absolue */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;

/* Valeurs relatives */
font-size: larger;
font-size: smaller;

/* Valeurs de longueurs */
/* Type <length>        */
font-size: 12px;
font-size: 0.8em;

/* Valeurs proportionnelles */
/* Type <percentage>        */
font-size: 80%;

/* Valeurs globales */
font-size: inherit;
font-size: initial;
font-size: unset;
```

La propriété `font-size` peut être définie de deux façons :

- Comme un mot-clé désignant [une taille absolue](#absolue) ou [une taille relative](#relative)
- Comme une valeur de type `<length>` ou de `<percentage>`

### Valeurs

- `xx-small, x-small, small, medium, large, x-large, xx-large`
  - : Un ensemble de mots-clés désignant des valeurs absolues basées sur la taille par défaut de l'utilisateur (qui vaut `medium`). Le comportement est analogue à ce qu'on obtient en utilisant le code HTML `<font size="1">` à `<font size="7">` lorsque la taille par défaut de l'utilisateur vaut `<font size="4">`.
- `larger, smaller`
  - : La taille de la fonte est plus grande (`larger`) ou plus petite (`smaller`) que celle de l'élément parent. Le ratio d'agrandissement/réduction est le même que celui qui sépare les mots-clés présentés avant.
- `<length>`
  - : Une longueur positive (type {{cssxref("&lt;length&gt;")}} ou un pourcentage (type {{cssxref("&lt;percentage&gt;")}}). Lorsque les valeurs sont exprimées avec les unités `em` ou `ex`, la taille est alors relative à la taille de la fonte de l'élément parent. Ainsi, une valeur de `0.5em` indiquera que la taille de fonte pour l'élément courant est la moitié de celle utilisée pour l'élément parent. Lorsque l'unité utilisée est `rem`, la taille est alors relative à la taille de la fonte utilisée pour l'élément racine `html`.
- `<percentage>`
  - : Les valeurs exprimées en pourcentages (type {{cssxref("&lt;percentage&gt;")}}) sont proportionnelles à la taille de fonte de l'élément parent.

> **Note :** Il est généralement préférable d'utiliser des valeurs relatives à la taille par défaut choisie par l'utilisateur.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Les différentes approches

Plusieurs méthodes existent pour définir la taille de fonte utilisée : des mots-clés ou des valeurs numériques exprimées en pixels ou en ems. Selon les besoins, on utilisera une méthode différente.

### Les mots-clés

Les mots-clés sont une méthode simple et efficace pour déterminer la taille de fonte à utiliser. En utilisant un mot-clé sur l'élément {{HTMLElement("body")}}, on peut définir des tailles relatives sur toute la page et réduire ou augmenter la taille de la fonte en conséquence.

### Les pixels

L'utilisation des pixels (`px`) permet d'obtenir un résultat statique, absolu et indépendant du système d'exploitation et du navigateur. Cependant, cette méthode est déconseillée car elle n'est pas accessible. Ainsi, les utilisateurs ne peuvent pas adapter la taille du texte avec leurs réglages si besoin.

### Les ems

On peut également définir la taille de la fonte en `em`. La taille d'une valeur exprimée en `em` est dynamique. Lorsqu'on définit la propriété `font-size`, un `em` est équivalent à la taille de fonte appliquée à l'élément parent de l'élément courant. Si cette taille n'a pas été définie pour l'élément parent, elle correspondra à la taille par défaut du navigateur (généralement 16px). Ainsi, si on définit `font-size` avec une valeur de `20px` sur l'élément `body`, `1em` correspondra à `20px` et `2em` à `40px`. Ici, la valeur 2 est un facteur multiplicateur de la taille.

Pour calculer une équivalence entre `em` et un résultat exprimé en pixels, on peut utiliser cette formule :

```css
em = taille visée en px / font-size du parent en pixels
```

Ainsi, si la taille `font-size` de `body` vaut `1em` et que l'échelle par défaut du navigateur indique `1em` = `16px` et qu'on souhaite obtenir une `font-size` équivalente à `12px`, on pourra utiliser la valeur `0.75em` (car 12/16 = 0.75). De même, si on veut une taille analogue à `10px`, on utilisera `0.625em` (10/16 = 0.625).

L'unité `em` est très utile car elle s'adapte automatiquement à la taille de fonte choisie par l'utilisateur.

Un autre aspect important est la **composition** des valeurs exprimées avec cette unité. Si on prend le fragment HTML suivant :

```html
<div>
  <span>
    Extérieur
    <span>Intérieur</span>
    Extérieur
  </span>
</div>
```

Et qu'on applique la feuille de style suivante :

```css
body {
  font-size: 62.5%;
}
span {
  font-size: 1.6em;
}
```

On obtiendra le résultat suivant :

{{EmbedLiveSample("Les_ems", 400, 40)}}

Si la taille par défaut du navigateur est 16px, le mot « Extérieur » sera affiché avec 16 pixels et le mot « Intérieur » sera affiché avec 25.6 pixes. En effet, la taille de `font-size` pour le bloc `span` vaut `1.6em` et cette valeur est relative à la valeur de `font-size` pour son élément parent, elle-même relative à la valeur de `font-size` pour son élément parent. C'est ce qu'on appelle **la composition**.

### Les rems

L'unité `rem` a été conçue pour régler les problèmes engendrés par la composition. Les valeurs exprimées en `rem` sont relatives à l'élément {{HTMLElement("html")}} et pas à l'élément parent. Autrement dit, cette unité permet d'exprimer une taille relative sans être impacté par la taille de l'élément parent, court-circuitant ainsi la composition.

La feuille de style qui suit ressemble fortement à celle utilisée dans l'exemple précédent, on a simplement remplacé l'unité par `rem`.

```css
html {
  font-size: 62.5%;
}
span {
  font-size: 1.6rem;
}
```

On utilisera le même fragment de HTML :

```html
<span>
  Extérieur
  <span>Intérieur</span>
  Extérieur
</span>
```

{{EmbedLiveSample("Les_rems", 400, 40)}}

Dans cet exemple, si la taille par défaut du navigateur vaut `16px`, tous les mots seront affichés avec une hauteur de `16px`.

## Exemples

### Premiers exemples

```css
/* Le paragraphe sera écrit avec une grande */
/* fonte.                                   */
p {
  font-size: xx-large;
}

/* La taille du texte des h1 sera 2.5 fois plus */
/* grande que le texte autour.                  */
h1 {
  font-size: 250%;
}

/* Le texte contenu dans des éléments span */
/* mesurera 16px                           */
span {
  font-size: 16px;
}
```

### Démonstration

#### CSS

```css
.small {
  font-size: xx-small;
}
.larger {
  font-size: larger;
}
.point {
  font-size: 24pt;
}
.percent {
  font-size: 200%;
}
```

#### HTML

```html
<h1 class="small">Petit H1</h1>
<h1 class="larger">H1 plus grand</h1>
<h1 class="point">H1 de 24 points</h1>
<h1 class="percent">H1 à 200%</h1>
```

#### Résultat

{{EmbedLiveSample('Démonstration','600','200')}}

## Notes

Les unités `em` et `ex` pour la propriété {{Cssxref("font-size")}} sont relatives à la taille de la fonte de l'élément parent. Pour les autres propriétés, en utilisant ces unités, on aura une valeur relative à la taille de fonte de l'élément courant. Cela signifie que les valeurs exprimées en `em` ou en pourcents ont le même comportement pour {{cssxref("font-size")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
