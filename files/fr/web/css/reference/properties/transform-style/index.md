---
title: transform-style
slug: Web/CSS/Reference/Properties/transform-style
original_slug: Web/CSS/transform-style
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`transform-style`** définit si les éléments-fils d'un éléments sont positionnés dans l'espace tridimensionnel ou s'ils sont aplatis dans le plan de l'élément.

{{InteractiveExample("CSS Demo: transform-style")}}

```css interactive-example-choice
transform-style: flat;
```

```css interactive-example-choice
transform-style: preserve-3d;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all layer" id="example-element">
    <p>Parent</p>
    <div class="numeral"><code>rotate3d(1, 1, 1, 45deg)</code></div>
  </div>
</section>
```

```css interactive-example
.layer {
  background: #623e3f;
  border-radius: 0.75rem;
  color: white;
  transform: perspective(200px) rotateY(30deg);
}

.numeral {
  background-color: #ffba08;
  border-radius: 0.2rem;
  color: #000;
  margin: 1rem;
  padding: 0.2rem;
  transform: rotate3d(1, 1, 1, 45deg);
}
```

S'ils sont aplanis, les éléments-fils n'auront pas d'espace tridimensionnel propre.

Cette propriété n'est pas héritée et doit donc être définie sur tous les descendants de l'éléments qui ne sont pas des feuilles (autrement dit des descendants qui n'ont aucun fils).

## Syntaxe

```css
/* Avec un mot-clé */
transform-style: preserve-3d;
transform-style: flat;

/* Valeurs globales */
transform-style: inherit;
transform-style: initial;
transform-style: unset;
```

### Valeurs

- `flat`
  - : Indique que les fils de l'éléments sont positionnés dans le plan de l'élément.
- `preserve-3d`
  - : Indique que les fils de l'élément ciblé doivent être positionnés dans l'espace tridimensionnel.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
