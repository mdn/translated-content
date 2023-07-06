---
title: scroll-snap-coordinate
slug: orphaned/Web/CSS/scroll-snap-coordinate
tags:
  - CSS
  - Déprécié
  - Propriété
  - Reference
translation_of: Web/CSS/scroll-snap-coordinate
original_slug: Web/CSS/scroll-snap-coordinate
---

{{CSSRef}}{{deprecated_header}}

La propriété **`scroll-snap-coordinate`** définit les coordonnées horizontale et verticale, au sein de l'élément, qui s'aligneront avec les points définis par {{cssxref("scroll-snap-destination")}} dans le conteneur le plus proche en termes de parenté.

Si l'élément a été transformé, les coordonnées sont transformées de la même façon afin d'aligner le point d'accroche avec l'élément tel qu'il est affiché.

```css
/* Valeur avec un mot-clé */
scroll-snap-coordinate: none;

/* Valeurs de <position> */
/* Une paire de coordonnées */
scroll-snap-coordinate: 50px 50px;
/* Plusieurs coordonnées */
scroll-snap-coordinate: 100px 100px, 100px bottom;

/* Valeurs globales */
scroll-snap-coordinate: inherit;
scroll-snap-coordinate: initial;
scroll-snap-coordinate: unset;
```

## Syntaxe

### Valeurs

- `none`
  - : L'élément ne contribue à aucun point d'accrochage.
- `<position>`
  - : Définit le décalage du point d'accrochage par rapport à la boîte de bordure le l'élément. Pour chaque paire, la première valeur indique l'abscisse et la seconde, l'ordonnée. Pour plus d'informations sur les valeurs possibles, voir {{cssxref("&lt;position&gt;")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<div id="container">
  <div>
    <p>Coordonnées (0, 0)</p>
    <div class="scrollContainer coordinate0">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>Coordonnées (25, 0)</p>
    <div class="scrollContainer coordinate25">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>

  <div>
    <p>Coordonnées (50, 0)</p>
    <div class="scrollContainer coordinate50">
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
  scroll-snap-type: mandatory;
  font-size: 0;
}

.scrollContainer > div {
  width: 100px;
  height: 100px;
  display: inline-block;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
}

.coordinate0 > div {
  scroll-snap-coordinate: 0 0;
}

.coordinate25 > div {
  scroll-snap-coordinate: 25px 0;
}

.coordinate50 > div {
  scroll-snap-coordinate: 50px 0;
}

.scrollContainer > div:nth-child(even) {
  background-color: #87ea87;
}

.scrollContainer > div:nth-child(odd) {
  background-color: #87ccea;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", "170")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
