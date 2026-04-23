---
title: inset()
slug: Web/CSS/Reference/Values/basic-shape/inset
original_slug: Web/CSS/basic-shape/inset
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`ellipse()`** fait partie du [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) {{CSSxRef("&lt;basic-shape&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: ellipse()")}}

```css interactive-example-choice
clip-path: ellipse(20px 50px);
```

```css interactive-example-choice
clip-path: ellipse(4rem 50% at right center);
```

```css interactive-example-choice
clip-path: ellipse(closest-side closest-side at 5rem 6rem);
```

```css interactive-example-choice
clip-path: ellipse(closest-side farthest-side);
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
shape-outside: ellipse(40% 50% at left);
shape-outside: ellipse(closest-side farthest-side at 30%);
```

An ellipse is essentially a squashed circle and so `ellipse()` acts in a very similar way to {{CSSxRef("basic-shape/circle","circle()")}} except that we have to specify two radii x and y.

### Valeurs

- `<shape-radius>`
  - : Deux rayons, x et y dans cet ordre. Ils peuvent être une longueur {{CSSxRef("length")}}, un pourcentage {{CSSxRef("percentage")}} ou les valeurs `closest-side` et `farthest-side`.
    - `closest-side`
      - : Utilise la distance entre le centre de la forme et le côté le plus proche de la boîte de référence. Pour une ellipse, il s'agit du côté le plus proche dans la dimension du rayon.
    - `farthest-side`
      - : Utilise la distance entre le centre de la forme et le côté le plus éloigné de la boîte de référence. Pour une ellipse, il s'agit du côté le plus éloigné dans la dimension du rayon.

- `<position>`
  - : Déplace le centre de l'ellipse. Peut être une longueur {{CSSxRef("length")}}, un pourcentage {{CSSxRef("percentage")}} ou une valeur comme `left`. La valeur `<position>` est centrée par défaut si elle est omise.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple basique d'`ellipse()`

Cet exemple montre une ellipse positionnée à gauche, avec un rayon horizontal de 40 % et un rayon vertical de 50 %. Le centre de l'ellipse se trouve donc sur le bord gauche de la boîte, ce qui crée une demi‑ellipse autour de laquelle le texte s'enroule.
Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code pour modifier ces valeurs et voir l'évolution de l'ellipse&nbsp;:

```html live-sample___ellipse
<div class="box">
  <div class="shape"></div>
  <p>
    Une nuit de novembre de l'année 1782, d'après la légende, deux frères
    étaient assis près de leur feu d'hiver dans la petite ville française
    d'Annonay, observant les volutes de fumée grisâtres monter dans la large
    cheminée. Ils s'appelaient Stephen et Joseph Montgolfier, étaient papetiers
    de profession et se distinguaient par leur curiosité scientifique et leur
    goût pour les nouvelles découvertes. Avant cette nuit—qui devait s'avérer
    mémorable—des centaines de millions de personnes avaient vu monter la fumée
    de leurs feux sans y prêter plus d'attention.
  </p>
</div>
```

```css live-sample___ellipse
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(40% 50% at left);
  margin: 20px;
  width: 100px;
  height: 200px;
}
```

{{EmbedLiveSample("ellipse", "", "300px")}}

### Utilisation des valeurs closest-side / farthest-side

Les mots‑clés `closest-side` et `farthest-side` permettent de définir rapidement une ellipse basée sur la taille de la boîte de référence de l'élément flottant.

```html live-sample___ellipse-keywords
<div class="box">
  <div class="shape"></div>
  <p>
    Une nuit de novembre en 1782, paraît‑il, deux frères étaient assis près de
    leur feu d'hiver dans la petite ville française d'Annonay, observant les
    volutes de fumée grises s'élever de la large cheminée. Ils s'appelaient
    Stephen et Joseph Montgolfier, ils exerçaient le métier de papetier, et
    étaient connus pour leur esprit réfléchi et leur vif intérêt pour toute
    connaissance scientifique et toute nouvelle découverte. Avant cette nuit—une
    nuit mémorable, comme elle devait le devenir—des centaines de millions de
    personnes avaient vu s'élever la fumée de leurs feux sans en tirer une
    inspiration particulière.
  </p>
</div>
```

```css live-sample___ellipse-keywords
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(closest-side farthest-side at 30%);
  margin: 20px;
  width: 100px;
  height: 140px;
}
```

{{EmbedLiveSample("ellipse-keywords", "", "300px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriétés utilisant ce type de donnée&nbsp;: {{CSSxRef("clip-path")}}, {{CSSxRef("shape-outside")}}
- [Guide des formes de base](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
