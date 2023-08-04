---
title: shape-outside
slug: Web/CSS/shape-outside
---

{{CSSRef}}

La propriété **`shape-outside`** définit une forme (qui peut ne pas être un rectangle) autour de laquelle le contenu en ligne devra « s'écouler ». Par défaut, le contenu en ligne évolue autour de la boîte de marge de l'élément flottant. La propriété `shape-outside` permet de personnaliser ce contour et d'obtenir un texte qui s'écoule autour d'objets plus complexes que des rectangles.

{{EmbedInteractiveExample("pages/css/shape-outside.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
shape-outside: none;
shape-outside: margin-box;
shape-outside: content-box;
shape-outside: border-box;
shape-outside: padding-box;

/* Valeurs utilisant une fonction */
shape-outside: circle();
shape-outside: ellipse();
shape-outside: inset(10px 10px 10px 10px);
shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);
shape-outside: linear-gradient(45deg, rgba(255, 255, 255, 0) 150px, red 150px);

/* Valeur de type <url> */
shape-outside: url(image.png);

/* Valeur de type <gradient> */
shape-outside: linear-gradient(45deg, rgba(255, 255, 255, 0) 150px, red 150px);

/* Valeurs globales */
shape-outside: initial;
shape-outside: inherit;
shape-outside: unset;
```

### Valeurs

- `none`
  - : La zone de flottement n'est pas modifiée. Le contenu en ligne épouse le contour de la boîte de marge normalement.
- `<shape-box>`
  - : La forme est calculée selon '`margin-box`', '`border-box`', '`padding-box`' or '`content-box`' qui correspondent chacune aux boîtes de marge, bordure, remplissage et de contenu. La boîte ainsi définie inclue les courbures induites par {{cssxref("border-radius")}}. On a un effet semblable à {{cssxref("background-clip")}}.
- `<basic-shape>`
  - : Une valeur de type {{cssxref("&lt;basic-shape&gt;")}}. La forme est calculée selon une valeur parmi [`inset()`](</fr/docs/Web/CSS/basic-shape#inset()>), [`circle()`](</fr/docs/Web/CSS/basic-shape#circle()>), [`ellipse()`](</fr/docs/Web/CSS/basic-shape#ellipse()>), ou [`polygon()`](</fr/docs/Web/CSS/basic-shape#polygon()>). Si une valeur `<shape-box>` est fournie, cela définira la boîte de référence dans laquelle appliquée la forme définie avec la fonction `<basic-shape>`. Si `<shape-box>` n'est pas fournie, la valeur par défaut sera '`margin-box`'.
- `<image>`
  - : La forme est extraite et calculée à partir du canal alpha de l'image {{cssxref("image")}} en utilisant l propriété {{cssxref("shape-image-threshold")}}. Les agents utilisateurs doivent utiliser la méthode `fetch`, éventuellement avec CORS pour les URL utilisées dans `shape-outside`. Lors de l'accès à la ressource, les agents utilisateurs doivent utiliser le mode Anonymous et définir la source du _referrer_ comme l'URL de la feuille de style, l'origine de l'URL doit être celle du document. S'il y a des erreurs réseau empêchant de récupérer l'image, l'effet sera le même que celui obtenu avec la valeur **`none`**.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Interpolation

Afin de pouvoir interpoler entre deux formes, on appliquera les règles suivantes. Les valeurs avec des fonctions sont interpolées comme une liste simple. Les valeurs d'une liste sont interpolées comme des longueurs, des pourcentages ou des valeurs calculées lorsque c'est possible. Si les valeurs de la liste n'ont pas ces types mais sont identiques (par exemple, on trouve `nonzero` à la même position dans les deux listes), les valeurs pourront interopérer.

- Les deux formes doivent utiliser la même boîtes de référence.
- Si les deux formes sont du même type, que ce type est `ellipse()` ou `circle()` et qu'aucun des rayons n'utilise les mots-clés `closest-side` ou `farthest-side`, on aura une interpolation entre chaque valeur.
- Si les deux formes sont du type `inset()`, on aura une interpolation entre chaque valeur.
- Si les deux formes sont du types `polygon()`, que les deux polygones ont le même nombre de côtés et utilisent la même règle `<fill-rule>`, on aura une interpolation entre chaque valeur.
- Dans les autres cas, on n'a pas d'interpolation définie.

## Exemples

### HTML

```html
<div class="main">
  <div class="left"></div>
  <div class="right"></div>
  <p>
    Sometimes a web page's text content appears to be funneling your attention
    towards a spot on the page to drive you to follow a particular link.
    Sometimes you don't notice.
  </p>
</div>
```

### CSS

```css
.main {
  width: 530px;
}

.left,
.right {
  width: 40%;
  height: 12ex;
  background-color: lightgray;
}

.left {
  -webkit-shape-outside: polygon(0 0, 100% 100%, 0 100%);
  shape-outside: polygon(0 0, 100% 100%, 0 100%);
  float: left;
  -webkit-clip-path: polygon(0 0, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 100%, 0 100%);
}

.right {
  -webkit-shape-outside: polygon(100% 0, 100% 100%, 0 100%);
  shape-outside: polygon(100% 0, 100% 100%, 0 100%);
  float: right;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%);
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
}

p {
  text-align: center;
}
```

### Résultat

{{EmbedLiveSample('Exemples', "100%", 130)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les formes CSS : le module de spécification _CSS Shapes_](/fr/docs/Web/CSS/CSS_Shapes)
- [Un aperçu des formes CSS](/fr/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes)
- [Créer des formes à partir des boîtes](/fr/docs/Web/CSS/CSS_Shapes/From_box_values)
- [Les formes simples : le type de donnée `<basic-shape>`](/fr/docs/Web/CSS/CSS_Shapes/Basic_Shapes)
- [Créer des formes à partir d'images](/fr/docs/Web/CSS/CSS_Shapes/Shapes_From_Images)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-image-threshold")}}
