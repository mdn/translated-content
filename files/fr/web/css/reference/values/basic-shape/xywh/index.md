---
title: xywh()
slug: Web/CSS/Reference/Values/basic-shape/xywh
original_slug: Web/CSS/basic-shape/xywh
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`xywh()`** crée un rectangle à partir des distances spécifiées depuis le bord gauche (`x`) et le bord supérieur (`y`) du bloc englobant, ainsi que la largeur (`w`) et la hauteur (`h`) du rectangle. Il s'agit d'une fonction de forme de base du [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) {{CSSxRef("&lt;basic-shape&gt;")}}. Vous pouvez utiliser la fonction `xywh()` dans des propriétés CSS telles que {{CSSxRef("offset-path")}} pour créer le chemin rectangulaire le long duquel un élément se déplace, ou dans {{CSSxRef("clip-path")}} pour définir la forme de la région de découpe.

## Syntaxe

```css
offset-path: xywh(0 1% 2px 3% round 0 1px 2% 3px);
clip-path: xywh(1px 2% 3px 4em round 0 1% 2px 3em);
```

### Valeurs

- `<length-percentage>`
  - : Définit les valeurs {{CSSxRef("&lt;length-percentage&gt;")}} pour les coordonnées `x` et `y` du rectangle.
- `<length-percentage [0,∞]>`
  - : Définit des valeurs {{CSSxRef("&lt;length-percentage&gt;")}} non négatives pour la largeur et la hauteur du rectangle. La valeur minimale peut être zéro, la valeur maximale n'a pas de limite.
- `round <'border-radius'>`
  - : Définit le rayon des coins arrondis du rectangle en utilisant la même syntaxe que la propriété abrégée CSS [`border-radius`](/fr/docs/Web/CSS/Reference/Properties/border-radius). Ce paramètre est optionnel.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer un offset-path avec xywh()

Dans l'exemple ci-dessous, la propriété {{CSSxRef("offset-path")}} utilise la fonction `xywh()` pour définir la forme du chemin sur lequel l'élément (une boîte magenta ici) se déplace. Deux scénarios différents sont présentés, chacun avec des valeurs différentes pour la fonction `xywh()`. La flèche à l'intérieur des boîtes pointe vers le bord droit de la boîte.

```html
<div class="container">
  Chemin rectangulaire 1
  <div class="path xywh-path-1">→</div>
</div>
<div class="container">
  Chemin rectangulaire 2
  <div class="path xywh-path-2">→</div>
</div>
```

```css
.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin: 30px;
  text-align: center;
}

.path {
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: magenta;
  animation: move 10s linear infinite;
}

.xywh-path-1 {
  offset-path: xywh(20px 20px 100% 100% round 10%);
}

.xywh-path-2 {
  offset-path: xywh(20px 30% 150% 200%);
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### Résultat

{{EmbedLiveSample("créer_un_offset-path_avec_xywh", "100%", 600)}}

- Le rectangle du chemin 1 est décalé de `20px` depuis les bords gauche et supérieur du bloc englobant. Ce rectangle a les mêmes dimensions que le bloc englobant, c'est-à-dire que la largeur est de `100%` de la largeur du bloc englobant et la hauteur de `100%` de sa hauteur. Remarquez comment la flèche à l'intérieur de la boîte suit la courbe de `10%` (définie par `round 10%`) aux coins du chemin rectangulaire.
- Comme la limite supérieure de la largeur et de la hauteur dans `xywh()` est infinie, définir la hauteur à `200%` dans le rectangle du chemin 2 rend le rectangle généré deux fois plus haut que le bloc englobant. Remarquez le comportement de la flèche aux coins lorsque `round <'border-radius'>` n'est pas spécifié.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("basic-shape/inset","inset()")}}
- La fonction {{CSSxRef("basic-shape/rect","rect()")}}
- La propriété {{CSSxRef("clip-path")}}
- La propriété {{CSSxRef("offset-path")}}
- Le type de données {{CSSxRef("&lt;basic-shape&gt;")}}
- Le module des [formes CSS](/fr/docs/Web/CSS/Guides/Shapes)
- [Guide des formes de base](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
