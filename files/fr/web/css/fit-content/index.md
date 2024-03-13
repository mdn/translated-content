---
title: fit-content()
slug: Web/CSS/fit-content
---

{{CSSRef}}{{SeeCompatTable}}

La fonction CSS **`fit-content()`** permet d'obtenir une dimension restreinte à un intervalle donnée (en utilisant la formule `min(taille maximale, max(taille minimale, argument))`.

```css
/* Valeurs de type <length> */
fit-content(200px)
fit-content(5cm)
fit-content(30vw)
fit-content(100ch)

/* Valeurs de type <percentage> */
fit-content(40%)
```

Cette fonction peut être utilisée pour définir la taille d'une piste via les propriétés relatives aux grilles CSS où la taille maximale est définie par [`max-content`](/fr/docs/Web/CSS/grid-template-columns#max-content) et où la taille minimale est définie par [`auto`](/fr/docs/Web/CSS/grid-template-columns#auto) et qui est calculée de façon similaire à `auto` (i.e. [`minmax(auto, max-content)`](</fr/docs/Web/CSS/minmax()>)), sauf que la taille de la piste est ramenée à _argument_ si celui-ci est supérieur à `auto`.

Elle peut également être utilisée pour définir la taille d'une boîte avec {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}} et {{cssxref("max-height")}} où la taille maximale fait référence à la taille maximale du contenu et où la taille minimale fait référence à la taille minimale du contenu.

## Syntaxe

### Valeurs

- `<length>`
  - : Une longueur (valeur de type {{cssxref("&lt;length&gt;")}}) exprimée de façon absolue.
- `<percentage>`
  - : Un pourcentage (valeur de type {{cssxref("&lt;percentage&gt;")}}) relatif à l'espace disponible sur l'axe indiqué (la hauteur ou la largeur). Pour les propriétés qui concernent les grilles, le pourcentage est relative à la dimension en ligne du conteneur de la grille pour les pistes qui sont disposées en colonnes et à la dimension en block pour les pistes qui sont disposées en lignes. Sinon, le pourcentage est relatif à la dimension en ligne ou en bloc selon le mode d'écriture utilisé.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#container {
  display: grid;
  grid-template-columns: fit-content(300px) fit-content(300px) 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

### HTML

```html
<div id="container">
  <div>Item as wide as the content.</div>
  <div>
    Item with more text in it. Because the contents of it are wider than the
    maximum width, it is clamped at 300 pixels.
  </div>
  <div>Flexible item</div>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
