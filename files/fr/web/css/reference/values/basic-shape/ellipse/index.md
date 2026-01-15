---
title: ellipse()
slug: Web/CSS/Reference/Values/basic-shape/ellipse
original_slug: Web/CSS/basic-shape/ellipse
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

Une ellipse est essentiellement un cercle aplati&nbsp;; la fonction `ellipse()` agit de manière très similaire à {{CSSxRef("basic-shape/circle","circle()")}}, sauf qu'il faut préciser deux rayons&nbsp;: x puis y.

### Valeurs

- `<shape-radius>`
  - : Deux rayons, x puis y, dans cet ordre. Ils peuvent être une longueur {{CSSxRef("length")}}, un pourcentage {{CSSxRef("percentage")}} ou les mots‑clés `closest-side` et `farthest-side`.
    - `closest-side`
      - : Utilise la distance entre le centre de la forme et le côté le plus proche de la boîte de référence. Pour les ellipses, il s'agit du côté le plus proche selon la dimension du rayon.
    - `farthest-side`
      - : Utilise la distance entre le centre de la forme et le côté le plus éloigné de la boîte de référence. Pour les ellipses, il s'agit du côté le plus éloigné selon la dimension du rayon.

- `<position>`
  - : Déplace le centre de l'ellipse. Il peut s'agir d'une longueur {{CSSxRef("length")}}, d'un pourcentage {{CSSxRef("percentage")}} ou de valeurs comme `left`. La valeur par défaut de `<position>` est center si elle est omise.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple d'`ellipse()`

Cet exemple montre une ellipse positionnée à gauche, avec un rayon horizontal de 40 % et un rayon vertical de 50 %.
Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code pour modifier les valeurs et observer le rendu&nbsp;:

```html live-sample___ellipse
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

### Utilisation de `closest-side` / `farthest-side`

Les mots‑clés `closest-side` et `farthest-side` sont utiles pour créer rapidement une ellipse basée sur la taille de la boîte de référence de l'élément flottant.

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

- Propriétés qui utilisent ce type de données&nbsp;: {{CSSxRef("clip-path")}}, {{CSSxRef("shape-outside")}}
- [Guide des formes de base](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
