---
title: Propriété CSS `background-repeat-x`
short-title: background-repeat-x
slug: Web/CSS/Reference/Properties/background-repeat-x
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`background-repeat-x`** définit comment les images de fond sont répétées, ou non, le long de l'axe horizontal.

Les propriétés `background-repeat-x` et {{CSSxRef("background-repeat-y")}} peuvent également être définies en utilisant les propriétés abrégées {{CSSxRef("background-repeat")}} ou {{CSSxRef("background")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: background-repeat-x")}}

```css interactive-example-choice
background-repeat-x: repeat;
```

```css interactive-example-choice
background-repeat-x: space;
```

```css interactive-example-choice
background-repeat-x: round;
```

```css interactive-example-choice
background-repeat-x: no-repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background: #cccccc url("/shared-assets/images/examples/moon.jpg") no-repeat
    center / 120px;
  min-width: 100%;
  min-height: 100%;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-repeat-x: repeat;
background-repeat-x: space;
background-repeat-x: round;
background-repeat-x: no-repeat;

/* Valeurs globales */
background-repeat-x: inherit;
background-repeat-x: initial;
background-repeat-x: revert;
background-repeat-x: revert-layer;
background-repeat-x: unset;
```

La propriété `background-repeat-x` est définie comme une ou plusieurs valeurs, séparées par des virgules.

## Valeurs

- `repeat`
  - : La valeur par défaut. L'image est répétée autant de fois que nécessaire pour couvrir toute la largeur de la zone de peinture de l'image de fond. L'image de bord est découpée si plusieurs images ne s'adaptent pas exactement à la largeur du fond.

- `no-repeat`
  - : L'image n'est pas répétée. La position de l'image de fond non répétée est définie par la propriété CSS {{CSSxRef("background-position")}}.

- `space`
  - : L'image est répétée autant que possible sans être découpée. La première et la dernière image sont fixées à gauche et à droite de l'élément, et l'espace restant est réparti uniformément entre elles. La propriété {{CSSxRef("background-position-x")}} est ignorée sauf si une ou plusieurs images peuvent être affichées sans être découpées. Si l'image est plus large que l'élément, elle est découpée, car il n'y a pas assez de place pour l'afficher.

- `round`
  - : L'image est répétée horizontalement. À mesure que l'espace disponible augmente, les images répétées s'étirent (sans laisser d'espaces) jusqu'à ce qu'il y ait de la place pour en ajouter une autre. Si plusieurs images ne s'adaptent pas exactement au fond, elles sont redimensionnées pour s'adapter.

## Description

La propriété `background-repeat-x` accepte une liste de mots-clés [`<repetition>`](#valeurs) séparés par des virgules, qui définissent comment l'image de fond doit se répéter horizontalement, ou ne pas se répéter du tout.

La valeur par défaut est `repeat`. Avec cette valeur, l'image de fond se répète horizontalement, couvrant toute la largeur de la zone de peinture de l'image de fond, les images de bord étant découpées à la taille de l'élément. Que les bords gauche, droit ou les deux soient découpés dépend de la valeur de la propriété {{CSSxRef("background-position")}} correspondante. Le nombre de fois que les images sont répétées et la quantité de découpe des images sur les bords dépendent de la taille de la zone de peinture de l'image de fond et de la valeur de largeur de la propriété {{CSSxRef("background-size")}} correspondante.

Les images répétées peuvent être espacées uniformément, garantissant que les images répétées ne sont pas découpées horizontalement. Avec la valeur `space`, si la largeur de la zone de peinture de l'image de fond n'est pas un multiple de la largeur de l'image ou n'a pas autrement une taille qui est un multiple de la taille de l'image de fond dans la direction de la largeur, il y aura des zones non couvertes par l'image de fond.

D'une autre manière, l'image de fond répétée peut être étirée pour couvrir toute la largeur de la zone de fond sans être découpée. Avec `round`, l'image répétée est étirée pour remplir tout l'espace disponible jusqu'à ce qu'il y ait de la place pour ajouter une image répétée supplémentaire.

Par exemple, étant donné une image de fond de `100px` par `100px` et une zone de peinture de fond de `1099px` de largeur, l'image sera redimensionnée à `109.9px` de largeur et répétée 10 fois dans la direction horizontale. Ça modifie le {{Glossary("aspect ratio", "rapport d'aspect")}} de l'image et la déforme. Si la largeur de la zone de peinture augmente de `1px` pour atteindre `1100px`, une 11ème image pourra s'afficher horizontalement, chaque image étant peinte à `100px` de largeur, et n'étant plus déformée horizontalement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir `background-repeat-x`

#### HTML

```html
<ol>
  <li>
    no-repeat
    <div class="one"></div>
  </li>
  <li>
    repeat
    <div class="two"></div>
  </li>
  <li>
    space
    <div class="three"></div>
  </li>
  <li>
    round
    <div class="four"></div>
  </li>
</ol>
```

#### CSS

```css
ol,
li {
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 12px;
}
div {
  background-image: url("star-solid.gif");
  width: 160px;
  height: 70px;
}

/* Répétitions de l'arrière-plan */
.one {
  background-repeat-x: no-repeat;
}
.two {
  background-repeat-x: repeat;
}
.three {
  background-repeat-x: space;
}
.four {
  background-repeat-x: round;
}
```

```css hidden
@layer no-support {
  @supports not (background-repeat-x: repeat) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété `background-repeat-x`.";
      background-color: wheat;
      display: block;
      padding: 1em;
      text-align: center;
    }
  }
}
```

#### Résultat

Dans cet exemple, chaque élément de la liste est associé à une valeur différente de `background-repeat-x`.

{{EmbedLiveSample("Définir `background-repeat-x`", 240, 460)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("background-repeat-y")}} et la propriété raccourcie {{CSSxRef("background-repeat")}}.
- Les composants de la propriété raccourcie {{CSSxRef("background")}}&nbsp;: {{CSSxRef("background-attachment")}}, {{CSSxRef("background-clip")}}, {{CSSxRef("background-color")}}, {{CSSxRef("background-image")}}, {{CSSxRef("background-origin")}}, {{CSSxRef("background-position")}} ({{CSSxRef("background-position-x")}} et {{CSSxRef("background-position-y")}}), et {{CSSxRef("background-size")}}
- [Utiliser plusieurs arrière-plans](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- Le module [d'arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [Comprendre les rapports d'aspect](/fr/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
