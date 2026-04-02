---
title: background-repeat-y
slug: Web/CSS/Reference/Properties/background-repeat-y
l10n:
  sourceCommit: 76e6e5407fd7cb49fb54dc51c7790a8b71ecec7f
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`background-repeat-y`** définit comment les images de fond sont répétées, ou non, le long de l'axe vertical.

Les propriétés {{CSSxRef("background-repeat-x")}} et `background-repeat-y` peuvent également être définies en utilisant les propriétés abrégées {{CSSxRef("background-repeat")}} ou {{CSSxRef("background")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: background-repeat-y")}}

```css interactive-example-choice
background-repeat-y: repeat;
```

```css interactive-example-choice
background-repeat-y: space;
```

```css interactive-example-choice
background-repeat-y: round;
```

```css interactive-example-choice
background-repeat-y: no-repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background: #cccccc url("/shared-assets/images/examples/moon.jpg") center /
    120px;
  min-width: 100%;
  min-height: 100%;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-repeat-y: repeat;
background-repeat-y: space;
background-repeat-y: round;
background-repeat-y: no-repeat;

/* Valeurs globales */
background-repeat-y: inherit;
background-repeat-y: initial;
background-repeat-y: revert;
background-repeat-y: revert-layer;
background-repeat-y: unset;
```

La propriété `background-repeat-y` est définie comme une ou plusieurs valeurs, séparées par des virgules.

## Valeurs

- `repeat`
  - : La valeur par défaut. L'image est répétée autant de fois que nécessaire pour couvrir toute la hauteur de la zone de peinture de l'image de fond. L'image de bord est découpée si plusieurs images ne s'adaptent pas exactement à la hauteur du fond.

- `no-repeat`
  - : L'image n'est pas répétée. La position de l'image de fond non répétée est définie par la propriété CSS {{CSSxRef("background-position")}}.

- `space`
  - : L'image est répétée autant que possible sans être découpée. La première et la dernière image sont fixées en haut et en bas de l'élément, et l'espace restant est réparti uniformément entre elles. La propriété {{CSSxRef("background-position-y")}} est ignorée sauf si une ou plusieurs images peuvent être affichées sans être découpées. Si l'image est plus haute que l'élément, elle est découpée, car il n'y a pas assez de place pour l'afficher.

- `round`
  - : L'image est répétée verticalement. À mesure que l'espace disponible augmente, les images répétées s'étirent (sans laisser d'espaces) jusqu'à ce qu'il y ait de la place pour en ajouter une autre. Si plusieurs images ne s'adaptent pas exactement au fond, elles sont redimensionnées pour s'adapter.

## Description

La propriété `background-repeat-y` accepte une liste de mots-clés [`<repetition>`](#valeurs) séparés par des virgules, qui définissent comment l'image de fond doit se répéter verticalement, ou ne pas se répéter du tout.

La valeur par défaut est `repeat`. Avec cette valeur, l'image de fond se répète verticalement, couvrant toute la hauteur de la zone de peinture de l'image de fond, les images de bord étant découpées à la taille de l'élément. Que les bords supérieur, inférieur ou les deux soient découpés dépend de la valeur de la propriété {{CSSxRef("background-position")}} correspondante. Le nombre de fois que les images sont répétées et la quantité de découpe des images sur les bords dépendent de la taille de la zone de peinture de l'image de fond et de la valeur de hauteur de la propriété {{CSSxRef("background-size")}} correspondante.

Les images répétées peuvent être espacées uniformément, garantissant que les images répétées ne sont pas découpées verticalement. Avec la valeur `space`, si la hauteur de la zone de peinture de l'image de fond n'est pas un multiple de la hauteur de l'image ou n'a pas autrement une taille qui est un multiple de la taille de l'image de fond dans la direction verticale, il y aura des zones non couvertes par l'image de fond.

D'une autre manière, l'image de fond répétée peut être étirée pour couvrir toute la hauteur de la zone de fond sans être découpée. Avec `round`, si la hauteur de la zone de peinture de l'image de fond n'est pas un multiple de la hauteur de l'image de fond, l'image répétée est étirée pour remplir tout l'espace disponible jusqu'à ce qu'il y ait de la place pour ajouter une image répétée supplémentaire.

Par exemple, étant donné une image de fond de `100px` par `100px` et une zone de peinture de fond de `1099px` de hauteur, l'image sera répétée 10 fois dans la direction verticale, chaque image étant étirée à `109.9px` de hauteur, ce qui peut modifier le {{Glossary("aspect ratio", "rapport d'aspect")}} de l'image et la déformer. Si la hauteur de la zone de peinture augmente de `1px` pour atteindre `1100px`, une 11ème image pourra s'afficher verticalement, chaque image étant peinte à `100px` de hauteur, et n'étant plus étirée verticalement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir `background-repeat-y`

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
  background-repeat-y: no-repeat;
}
.two {
  background-repeat-y: repeat;
}
.three {
  background-repeat-y: space;
}
.four {
  background-repeat-y: round;
}
```

```css hidden
@layer no-support {
  @supports not (background-repeat-y: repeat) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété `background-repeat-y`.";
      background-color: wheat;
      display: block;
      padding: 1em;
      text-align: center;
    }
  }
}
```

#### Résultat

Dans cet exemple, chaque élément de la liste est associé à une valeur différente de `background-repeat-y`.

{{EmbedLiveSample("Définir `background-repeat-y`", 240, 460)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("background-repeat-x")}} et la propriété raccourcie {{CSSxRef("background-repeat")}}.
- Les composants de la propriété raccourcie {{CSSxRef("background")}}&nbsp;: {{CSSxRef("background-attachment")}}, {{CSSxRef("background-clip")}}, {{CSSxRef("background-color")}}, {{CSSxRef("background-image")}}, {{CSSxRef("background-origin")}}, {{CSSxRef("background-position")}} ({{CSSxRef("background-position-x")}} et {{CSSxRef("background-position-y")}}), et {{CSSxRef("background-size")}}
- [Utiliser plusieurs arrière-plans](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- Le module [d'arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [Comprendre les rapports d'aspect](/fr/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
