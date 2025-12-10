---
title: circle()
slug: Web/CSS/Reference/Values/basic-shape/circle
original_slug: Web/CSS/basic-shape/circle
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`circle()`** définit un cercle grâce à son rayon et à la position du centre.
Elle fait partie du [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) {{CSSxRef("&lt;basic-shape&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: circle()")}}

```css interactive-example-choice
clip-path: circle(50px);
```

```css interactive-example-choice
clip-path: circle(6rem at right center);
```

```css interactive-example-choice
clip-path: circle(10% at 2rem 90%);
```

```css interactive-example-choice
clip-path: circle(closest-side at 5rem 6rem);
```

```css interactive-example-choice
clip-path: circle(farthest-side);
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
shape-outside: circle(50%);
clip-path: circle(6rem at 12rem 8rem);
```

### Valeurs

- `<shape-radius>`
  - : Il peut s'agir d'une longueur {{CSSxRef("length")}}, d'un pourcentage {{CSSxRef("percentage")}} ou des valeurs `closest-side` et `farthest-side`.
    - `closest-side`
      - : Utilise la distance du centre de la forme jusqu'au côté le plus proche de la boîte de référence. Pour un cercle, il s'agit du côté le plus proche dans n'importe quelle dimension.
    - `farthest-side`
      - : Utilise la distance du centre de la forme jusqu'au côté le plus éloigné de la boîte de référence. Pour un cercle, il s'agit du côté le plus éloigné dans n'importe quelle dimension.

- `<position>`
  - : Déplace le centre du cercle. Il peut s'agir d'une longueur {{CSSxRef("length")}}, d'un pourcentage {{CSSxRef("percentage")}} ou de mots‑clés comme `left`. Si `<position>` est omis, la valeur par défaut est `center` (<i lang="en">center</i>).

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Cercle simple

Dans l'exemple ci‑dessous, la propriété {{CSSxRef("shape-outside")}} a pour valeur `circle(50%)`, ce qui définit un cercle sur un élément flottant autour duquel le texte s'écoule.

```html live-sample___circle
<div class="box">
  <img
    alt="A hot air balloon"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
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

```css live-sample___circle
body {
  font: 1.2em / 1.5 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "300px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriétés qui utilisent ce type de données&nbsp;: {{CSSxRef("clip-path")}}, {{CSSxRef("shape-outside")}}
- [Guide des formes de base](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
