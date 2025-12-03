---
title: rect()
slug: Web/CSS/Reference/Values/basic-shape/rect
original_slug: Web/CSS/basic-shape/rect
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`rect()`** crée un rectangle à la distance spécifiée depuis les bords supérieur et gauche du bloc englobant. Il s'agit d'une fonction de forme de base du [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) {{CSSxRef("&lt;basic-shape&gt;")}}. Vous pouvez utiliser la fonction `rect()` dans des propriétés CSS telles que {{CSSxRef("offset-path")}} pour créer le chemin rectangulaire le long duquel un élément se déplace, ou dans {{CSSxRef("clip-path")}} pour définir la forme de la région de découpe.

## Syntaxe

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### Valeurs

Le rectangle intérieur est défini en spécifiant quatre valeurs de décalage, en commençant par le bord supérieur puis dans le sens des aiguilles d'une montre, ainsi qu'un mot-clé optionnel `round` avec le paramètre `border-radius` pour ajouter des coins arrondis au rectangle. Chaque valeur de décalage peut être soit une longueur (`<length>`), un pourcentage (`<percentage>`), ou le mot-clé `auto`.

- `<length-percentage>`
  - : Définit la valeur {{CSSxRef("&lt;length-percentage&gt;")}} de la distance du bord supérieur, droit, inférieur ou gauche du rectangle par rapport au bord supérieur ou gauche du bloc englobant. La première (haut) et la troisième (bas) valeurs sont des distances depuis le bord supérieur du bloc englobant, et la deuxième (droite) et la quatrième (gauche) valeurs sont des distances depuis le bord gauche du bloc englobant. Les valeurs droite (deuxième) et bas (troisième) sont limitées par les valeurs gauche (quatrième) et haut (première), respectivement, pour éviter que le bord inférieur ne croise le bord supérieur et que le bord droit ne croise le bord gauche. Par exemple, `rect(10px 0 0 20px)` est limité à `rect(10px 20px 10px 20px)`.

- `auto`
  - : Fait coïncider le bord pour lequel cette valeur est utilisée avec le bord correspondant du bloc englobant. Si `auto` est utilisé pour la première (haut) ou la quatrième (gauche) valeur, la valeur de `auto` est `0`, et si utilisé pour la deuxième (droite) ou la troisième (bas), la valeur de `auto` est `100%`.

- `round <'border-radius'>`
  - : Définit le rayon des arrondis des coins du rectangle en utilisant la même syntaxe que la propriété abrégée CSS {{CSSxRef("border-radius")}}. Ce paramètre est optionnel.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer un offset-path avec rect()

Dans cet exemple, la propriété {{CSSxRef("offset-path")}} utilise la fonction `rect()` pour définir la forme du chemin sur lequel l'élément, ici une boîte rouge, se déplace. Trois scénarios différents sont présentés, chacun utilisant des valeurs différentes pour la fonction `rect()`. La flèche à l'intérieur des boîtes pointe vers le bord droit de la boîte.

```html
<div class="container">
  Chemin rectangulaire 1
  <div class="path rect-path-1">→</div>
</div>
<div class="container">
  Chemin rectangulaire 2
  <div class="path rect-path-2">→</div>
</div>
<div class="container">
  Chemin rectangulaire 3
  <div class="path rect-path-3">→</div>
</div>
```

```css
.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin: 15px;
  text-align: center;
}

.path {
  width: 40px;
  height: 40px;
  background-color: red;
  position: absolute;
  animation: move 10s linear infinite;
}

.rect-path-1 {
  offset-path: rect(50px 150px 200px 50px round 20%);
}

.rect-path-2 {
  offset-path: rect(50px auto 200px 50px round 20%);
}

.rect-path-3 {
  offset-path: rect(50px auto 200px auto);
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

{{EmbedLiveSample("créer_un_offset-path_avec_rect", "100%", 400)}}

- Le rectangle du chemin 1 définit les distances des quatre bords (haut, droit, bas et gauche) par rapport au bloc englobant. Les valeurs haut et bas sont des distances depuis le bord supérieur du bloc englobant. Les valeurs droite et gauche sont des distances depuis le bord gauche du bloc englobant. De plus, le coin du rectangle est arrondi à `20%`, ce qui fait que l'élément boîte rouge suit les coins arrondis lorsqu'il se déplace le long de ce chemin. Remarquez comment la flèche à l'intérieur de la boîte suit la courbe aux coins du chemin rectangulaire.
- Le rectangle du chemin 2 est similaire à celui du chemin 1, sauf que la valeur droite est `auto`, ce qui équivaut à la valeur `100%`. Cela fait coïncider le bord droit du rectangle avec le bord droit du bloc englobant, créant un rectangle plus large que celui du chemin 1.
- Le rectangle du chemin 3 définit les paramètres des bords gauche et droit comme `auto` et omet le paramètre `round <'border-radius'>`. Cela crée un rectangle ayant la largeur du bloc englobant et des coins rectangulaires au lieu de coins arrondis comme dans les rectangles des chemins 1 et 2. Remarquez le mouvement de la flèche à l'intérieur de cette boîte aux coins.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("basic-shape/inset","inset()")}}
- La fonction {{CSSxRef("basic-shape/xywh","xywh()")}}
- La propriété {{CSSxRef("clip-path")}}
- La propriété {{CSSxRef("offset-path")}}
- Le type de données {{CSSxRef("&lt;basic-shape&gt;")}}
- Le module de [formes CSS](/fr/docs/Web/CSS/Guides/Shapes)
- [Guide des formes de base](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
