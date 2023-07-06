---
title: scroll-snap-points-y
slug: orphaned/Web/CSS/scroll-snap-points-y
tags:
  - CSS
  - Déprécié
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/scroll-snap-points-y
original_slug: Web/CSS/scroll-snap-points-y
---

{{CSSRef}}{{deprecated_header}}

La propriété **`scroll-snap-points-y`** définit le positionnement vertical des points d'accroche dans le conteneur de défilement auquel ils s'appliquent.

```css
/* Valeur avec un mot-clé */
scroll-snap-points-y: none;

/* Répétition des points d'accroche */
scroll-snap-points-y: repeat(400px);

/* Valeurs globales */
scroll-snap-points-y: inherit;
scroll-snap-points-y: initial;
scroll-snap-points-y: unset;
```

## Syntaxe

### Valeurs

- `none`
  - : Le conteneur ne possède pas de points d'accroche. Les éléments contenus à l'intérieur peuvent définir leurs propres points d'accroche.
- `repeat(<length-percentage>)`
  - : Cette valeur permet de définir un intervalle de répétition pour les points d'accroche, en commençant par le bord (pertinent) du conteneur. Seules les longueurs positives sont autorisées. Les pourcentages sont relatifs à la largeur du conteneur.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div id="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

### CSS

```css
#container {
  height: 200px;
  width: 220px;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-points-y: repeat(200px);
  scroll-snap-type: mandatory;
  font-size: 0;
}

#container > div {
  width: 200px;
  height: 200px;
  display: inline-block;
  line-height: 200px;
  text-align: center;
  font-size: 100px;
}

#container > div:nth-child(even) {
  background-color: #87EA87;
}

#container > div:nth-child(odd) {
  background-color: #87CCEA;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 220, 220)}}

## Spécifications

Cette propriété avait été définie dans [un brouillon de spécification pour le module CSS sur les points d'accroche](http://www.w3.org/TR/2015/WD-css-snappoints-1-20150326/#scroll-snap-points) mais [a ensuite été retirée](https://github.com/w3c/csswg-drafts/commit/922af86be789222b8490c92038d1a5142e1c1198) de la spécification pour être remplacée par [l'accroche basée sur les éléments](https://lists.w3.org/Archives/Public/www-style/2015Nov/0266.html).

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat}}
