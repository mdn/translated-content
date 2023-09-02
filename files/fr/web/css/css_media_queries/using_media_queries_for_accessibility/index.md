---
title: Utilisation des requêtes média pour l'accessibilité
slug: Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility
---

{{QuickLinksWithSubpages("/fr/docs/Web/CSS/Requêtes_média/")}}

**Les requêtes média (_media queries_)** peuvent être utilisées afin d'améliorer l'accessibilité d'un site web.

## Réduction de mouvement - `prefers-reduced-motion`

Le clignotement ou les animations rapides peuvent poser problème, notamment pour les personnes souffrant de troubles tels que le troubles de déficit de l'attention ou d'epilepsie, de migraines, etc.

Cette méthode peut également améliorer l'expérience des utilisateurs en économisant l'énergie nécessaire à l'affichage de la page (avec une amélioration sensible pour les appareils avec une batterie faible ou qui ne sont pas particulièrement récents).

### Syntaxe

- `no-preference`
  - : Cette valeur indique que l'utilisateur n'a pas indiqué de préférence particulière dans le système.
- `reduce`
  - : Cette valeur indique que l'utilisateur a signalé au système qu'il préférait une interface minimisant la quantité de mouvement ou d'animation. Idéalement, tous les mouvements qui ne sont pas essentiles doivent être retirés.

### Exemple

Cet exemple illustre comment éviter les animations inutiles en activant une préférence pour réduire les mouvements à l'écran.

#### HTML

```html
<div class="animation">animated box</div>
```

#### CSS

```css
.animation {
  -webkit-animation: vibrate 0.3s linear infinite both;
  animation: vibrate 0.3s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
  }
}
```

#### Résultat

{{EmbedLiveSample("Exemple")}}

## Mode de contraste élevé{{Non-standard_inline}}

La caractéristique média **`-ms-high-contrast`** est [spécifique à Microsoft](/fr/docs/Web/CSS/Microsoft_extensions) mais permet d'indiquer si l'application est affichée avec un mode de contraste élevé et, si c'est le cas, quelle variation de couleur est utilisée.

Cela ne bénéficie pas seulement aux utilisateurs souffrant de troubles de la vision mais aussi aux personnes qui consultent le document avec une lumière ambiante importante (ex. sur un écran faiblement éclairé et en plein soleil).

### Syntaxe

La caractéristique média **`-ms-high-contrast`** peut être définie avec l'une des valeurs suivantes.

### Valeurs

- `active`
  - : Cette valeur indique que les règles suivantes seront appliquées lorsque le système utilise un mode de contraste élevé, quelle que soit la variation de couleurs.
- `black-on-white`
  - : Cette valeur indique que les règles suivantes seront appliquées lorsque le système utilise un mode de contraste élevé avec une dominante noir sur blanc.
- `white-on-black`
  - : Cette valeur indique que les règles suivantes seront appliquées lorsque le système utilise un mode de contraste élevé avec une dominante blanc sur noir.

### Exemple

Les déclarations suivantes s'appliqueront respectivement aux applications qui sont affichées avec un mode de contraste élevé, quelle que soit la variation de couleur (1), avec une dominante noir sur blanc (2), avec une dominante blanc sur noir (3).

```css
@media screen and (-ms-high-contrast: active) {
  /* Toutes les règles appliquées en contraste élevé */
}
@media screen and (-ms-high-contrast: black-on-white) {
  div {
    background-image: url("image-bw.png");
  }
}
@media screen and (-ms-high-contrast: white-on-black) {
  div {
    background-image: url("image-wb.png");
  }
}
```
