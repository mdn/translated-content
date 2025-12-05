---
title: path()
slug: Web/CSS/Reference/Values/basic-shape/path
original_slug: Web/CSS/basic-shape/path
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`path()`** accepte une chaîne de caractères représentant un [tracé SVG](/fr/docs/Web/SVG/Reference/Element/path) et permet de dessiner une forme dans les modules [formes CSS](/fr/docs/Web/CSS/Guides/Shapes) et [chemin de déplacement CSS](/fr/docs/Web/CSS/Guides/Motion_path). La fonction `path()` est une valeur du [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) {{CSSxRef("&lt;basic-shape&gt;")}}. Elle peut être utilisée dans les propriétés CSS [`offset-path`](/fr/docs/Web/CSS/Reference/Properties/offset-path) et [`clip-path`](/fr/docs/Web/CSS/Reference/Properties/clip-path), ainsi que dans l'attribut SVG [`d`](/fr/docs/Web/SVG/Reference/Attribute/d).

Il existe certaines limitations à l'utilisation de la fonction `path()`. Le tracé doit être défini comme une seule chaîne de caractères, il n'est donc pas possible de créer un tracé personnalisé à l'aide de variables (fonctions [`var()`](/fr/docs/Web/CSS/Reference/Values/var)). De plus, toutes les longueurs du tracé sont implicitement définies en [pixels](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`px`)&nbsp;; aucune autre unité n'est acceptée. La fonction [`shape()`](/fr/docs/Web/CSS/Reference/Values/basic-shape/shape) offre plus de flexibilité que la fonction `path()`.

{{InteractiveExample("Démonstration CSS&nbsp;: path()")}}

```css interactive-example-choice
clip-path: path(
  "M  20  240 \
 L  20  80 L 160  80 \
 L 160  20 L 280 100 \
 L 160 180 L 160 120 \
 L  60 120 L  60 240 Z"
);
```

```css interactive-example-choice
clip-path: path(
  "M 20 240 \
 C 20 0 300 0 300 240 Z"
);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## Syntaxe

```css
path("M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80")

/* Utilisé uniquement avec clip-path */
path(evenodd,"M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80")
```

### Paramètres

- [`<fill-rule>`](/fr/docs/Web/SVG/Reference/Attribute/fill-rule) {{Optional_Inline}}
  - : Définit quelles parties du tracé sont à l'intérieur de la forme. Les valeurs possibles sont&nbsp;:
    - `nonzero`&nbsp;: Un point est considéré comme étant à l'intérieur de la forme si un rayon tracé depuis ce point croise plus de segments du tracé de gauche à droite que de droite à gauche, ce qui donne un compte non nul. C'est la valeur par défaut si `<fill-rule>` est omis.

    - `evenodd`&nbsp;: Un point est considéré comme étant à l'intérieur de la forme si un rayon tracé depuis ce point croise un nombre impair de segments du tracé. Cela signifie que chaque fois que le rayon entre dans la forme, il n'en est pas sorti un nombre égal de fois, indiquant un nombre impair d'entrées sans sorties correspondantes.

    > [!WARNING]
    > `<fill-rule>` n'est pas pris en charge dans {{CSSxRef("offset-path")}} et son utilisation invalide la propriété.

- {{CSSxRef("string")}}
  - : Une [chaîne de données](/fr/docs/Web/SVG/Reference/Attribute/d), placée entre guillemets, qui définit un [tracé SVG](/fr/docs/Web/SVG/Reference/Element/path). La chaîne de données du tracé SVG contient des [commandes de tracé](/fr/docs/Web/SVG/Reference/Attribute/d#path_commands) qui utilisent implicitement l'unité pixel. Un tracé vide est considéré comme invalide.

### Valeur de retour

Retourne une valeur {{CSSxRef("basic-shape")}}.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser la fonction `path()` comme valeur de `offset-path`

Une fonction `path()` est utilisée comme valeur de {{CSSxRef("offset-path")}} dans l'exemple suivant pour créer un chemin elliptique le long duquel une balle se déplace.

```html
<div id="path">
  <div id="ball"></div>
</div>
<button>animer</button>
```

```css
#path {
  margin: 40px;
  width: 400px;
  height: 200px;

  /* dessine la rampe grise */
  background: radial-gradient(at 50% 0%, transparent 70%, grey 70%, grey 100%);
}

#ball {
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50%;

  /* marque le chemin elliptique */
  offset-path: path("M 15 15 A 6 5.5 10 0 0 385 15");
}
```

```js
const btn = document.querySelector("button");
const ball = document.getElementById("ball");

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", true);
  setTimeout(() => btn.removeAttribute("disabled"), 6000);

  ball.animate(
    // anime la distance sur le chemin
    { offsetDistance: [0, "100%"] },
    {
      duration: 1500,
      iterations: 4,
      easing: "cubic-bezier(.667,0.01,.333,.99)",
      direction: "alternate",
    },
  );
});
```

{{EmbedLiveSample("Use as the value of offset-path", "100%", 350)}}

### Modifier la valeur de l'attribut d du tracé SVG

La fonction `path()` peut être utilisée pour modifier la valeur de l'attribut [`d`](/fr/docs/Web/SVG/Reference/Attribute/d) d'un tracé SVG, qui peut aussi être défini à `none` dans votre CSS.

Le symbole «&nbsp;V&nbsp;» se retournera verticalement au survol, si `d` est pris en charge comme propriété CSS.

#### CSS

```css
html,
body,
svg {
  height: 100%;
}

/* Ce tracé s'affiche au survol */
#svg_css_ex1:hover path {
  d: path("M20,80 L50,20 L80,80");
}
```

#### HTML

```html
<svg id="svg_css_ex1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="red" d="M20,20 L50,80 L80,20" />
</svg>
```

#### Résultat

{{EmbedLiveSample('Modify the value of the SVG path d attribute', '100%', 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("&lt;shape-outside&gt;")}}
- Le module des [formes CSS](/fr/docs/Web/CSS/Guides/Shapes)
- [Présentation des formes CSS](/fr/docs/Web/CSS/Guides/Shapes/Overview)
- [Guide illustré de la syntaxe du tracé SVG <sup>(angl.)</sup>](https://css-tricks.com/svg-path-syntax-illustrated-guide/) sur CSS-tricks (2021)
