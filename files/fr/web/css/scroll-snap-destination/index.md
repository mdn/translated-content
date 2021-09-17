---
title: scroll-snap-destination
slug: Web/CSS/scroll-snap-destination
tags:
  - CSS
  - Déprécié
  - Propriété
  - Reference
translation_of: Web/CSS/scroll-snap-destination
---
{{CSSRef}}{{deprecated_header}}

La propriété **`scroll-snap-destination`** définit les coordonnées horizontale et verticale des points d'accroche dans le {{Glossary("viewport")}} du conteneur.

```css
/* Valeur <position> */
scroll-snap-destination: 400px 600px;

/* Valeurs globales */
scroll-snap-destination: inherit;
scroll-snap-destination: initial;
scroll-snap-destination: unset;
```

## Syntaxe

### Valeurs

- `<position>`
  - : Définit le décalage entre le bord du viewport du conteneur et le point d'accroche à utiliser lors du défilement. La première valeur indique la coordonnée horizontale et la seconde indique la coordonnée verticale.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div id="container">
  <div>
    <p>Coordonnées (0, 0)</p>
    <div class="scrollContainer destination0">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>Coordonnées (25, 0)</p>
    <div class="scrollContainer destination25">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>Coordonnées (50, 0)</p>
    <div class="scrollContainer destination50">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</div>
```

### CSS

```css
#container {
  display: flex;
}

#container > div:nth-child(-n+2) {
  margin-right: 20px;
}

.scrollContainer {
  width: 100px;
  overflow: auto;
  white-space: nowrap;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
  scroll-snap-destination: 20px 0;
  font-size: 0;
}

.destination0 {
  scroll-snap-destination: 0 0;
}

.destination25 {
  scroll-snap-destination: 25px 0;
}

.destination50 {
  scroll-snap-destination: 50px 0;
}

.scrollContainer > div {
  width: 100px;
  height: 100px;
  display: inline-block;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
}

.scrollContainer > div:nth-child(even) {
  background-color: #87EA87;
}

.scrollContainer > div:nth-child(odd) {
  background-color: #87CCEA;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", "170")}}

## Spécifications

| Spécification                                                                                                                            | État                                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Scroll Snap Points", "#propdef-scroll-snap-destination", "scroll-snap-destination")}} | {{Spec2("CSS Scroll Snap Points")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.scroll-snap-destination")}}
