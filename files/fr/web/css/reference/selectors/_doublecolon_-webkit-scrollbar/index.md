---
title: ::-webkit-scrollbar
slug: Web/CSS/Reference/Selectors/::-webkit-scrollbar
original_slug: Web/CSS/::-webkit-scrollbar
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{Non-standard_header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-webkit-scrollbar`** est une [extension de WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions) qui permet de modifier le style de la barre de défilement associée à un élément. Il s'agit d'un pseudo-élément propriétaire, uniquement disponible pour les navigateurs WebKit.

## Sélecteurs de barre de défilement

Vous pouvez utiliser les pseudo-éléments suivants pour personnaliser différentes parties de la barre de défilement (<i lang="en">scrollbar</i>) pour les navigateurs WebKit&nbsp;:

- `::-webkit-scrollbar` — la barre entière.
- `::-webkit-scrollbar-button` — les boutons de la barre de défilement (les flèches vers le bas ou le haut)
- `::-webkit-scrollbar-thumb` — l'emplacement qui permet de déplacer la barre de défilement.
- `::-webkit-scrollbar-track` — la piste (la zone de progression) de la barre de défilement
- `::-webkit-scrollbar-track-piece` — la partie de la piste qui n'est pas couverte par le bouton de la barre de défilement.
- `::-webkit-scrollbar-corner` — le coin inférieur de la barre où les barres horizontales et verticales se rencontrent.
- `::-webkit-resizer` — le bouton qui apparaît dans le coin inférieur de certains éléments et qui permet de les redimensionner.

## Accessibilité

Les auteur·ice·s doivent éviter de mettre en forme les barres de défilement, car le changement de l'apparence des barres de défilement par rapport à la valeur par défaut [perturbe la cohérence externe <sup>(angl.)</sup>](https://inclusivedesignprinciples.info/#be-consistent), ce qui a un impact négatif sur l'utilisabilité. Si vous mettez en forme les barres de défilement, assurez-vous qu'il y a suffisamment de contraste de couleur et que les cibles tactiles mesurent au moins 44px de large et de haut. Voir [Techniques pour WCAG 2.0 : G183 : Utiliser un rapport de contraste de 3:1 <sup>(angl.)</sup>](https://www.w3.org/TR/WCAG20-TECHS/G183.html) et [Comprendre WCAG 2.1 : Taille de la cible <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html).

## Exemples

### Mettre en forme les barres de défilement en utilisant `-webkit-scrollbar`

#### HTML

```html
<div class="visible-scrollbar">
  Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor. Proin at nulla
  elementum, consectetur ex eget, commodo ante. Sed eros mi, bibendum ut
  dignissim et, maximus eget nibh. Phasellus blandit quam turpis, at mollis
  velit pretium ut. Nunc consequat efficitur ultrices. Nullam hendrerit posuere
  est. Nulla libero sapien, egestas ac felis porta, cursus ultricies quam.
  Vestibulum tincidunt accumsan sapien, a fringilla dui semper in. Vivamus
  consectetur ipsum a ornare blandit. Aenean tempus at lorem sit amet faucibus.
  Curabitur nibh justo, faucibus sed velit cursus, mattis cursus dolor.
  Pellentesque id pretium est. Quisque convallis nisi a diam malesuada mollis.
  Aliquam at enim ligula.
</div>
<div class="invisible-scrollbar">
  C'estuntrèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèslongmot<br />
</div>
<div class="mostly-customized-scrollbar">
  C'estuntrèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèslongmot<br />
  Et une très grande<br />
  chose avec des barres de défilement étranges.<br />
  Qui aurait pensé que les barres de défilement pouvaient être rendues
  étranges&nbsp;?
</div>
```

#### CSS

```css
.visible-scrollbar,
.invisible-scrollbar,
.mostly-customized-scrollbar {
  display: block;
  width: 10em;
  overflow: auto;
  height: 2em;
  padding: 1em;
  margin: 1em auto;
  outline: 2px dashed cornflowerblue;
}

.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Demonstrate a "mostly customized" scrollbar
 * (won't be visible otherwise if width/height is specified) */
.mostly-customized-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaaaaa; /* or add it to the track */
}
/* Add a thumb */
.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
  background: black;
}
```

#### Résultat

{{EmbedLiveSample("mettre_en_forme_les_barres_de_défilement_en_utilisant_-webkit-scrollbar", 600, 300)}}

### Ajouter une solution de repli pour les styles de barre de défilement

Vous pouvez utiliser une règle {{cssxref("@supports")}} pour détecter si un navigateur prend en charge les propriétés standard {{cssxref("scrollbar-color")}} et {{cssxref("scrollbar-width")}}, et sinon utiliser une solution de repli avec les pseudo-éléments `::-webkit-scrollbar-*`.
L'exemple suivant montre comment appliquer des couleurs aux barres de défilement en utilisant {{cssxref("scrollbar-color")}} si pris en charge et les pseudo-éléments `::-webkit-scrollbar-*` si ce n'est pas le cas.

#### HTML

```html
<div class="scroll-box">
  <h1>Yoshi</h1>
  <p>
    Yoshi est un dinosaure fictif qui apparaît dans des jeux vidéo publiés par
    Nintendo. Yoshi a fait ses débuts dans Super Mario World (1990) sur la SNES
    en tant qu'acolyte de Mario et Luigi.
  </p>
  <p>
    Tout au long de la série principale de Super Mario, Yoshi sert généralement
    de monture de confiance à Mario.
  </p>
  <p>
    Avec un appétit glouton, Yoshi peut gober des ennemis avec sa longue langue,
    et pondre des œufs qui fonctionnent également comme projectiles.
  </p>
</div>
```

#### CSS

```css hidden
.scroll-box {
  overflow: auto;
  width: 20rem;
  height: 5rem;
  border: 2px solid cornflowerblue;
  margin: 2rem auto;
  font-family: monospace;
}
```

```css
/* Pour les navigateurs qui prennent en charge les propriétés `scrollbar-*` */
@supports (scrollbar-color: auto) {
  .scroll-box {
    scrollbar-color: aquamarine cornflowerblue;
  }
}

/* Sinon, utilisez les pseudo-éléments `::-webkit-scrollbar-*` */
@supports selector(::-webkit-scrollbar) {
  .scroll-box::-webkit-scrollbar {
    background: aquamarine;
  }
  .scroll-box::-webkit-scrollbar-thumb {
    background: cornflowerblue;
  }
}
```

#### Résultat

Dans l'exemple ci-dessous, vous pouvez faire défiler la boîte bordée verticalement pour voir l'effet de la mise en forme de la barre de défilement.

{{EmbedLiveSample("ajouter_une_solution_de_repli_pour_les_styles_de_barre_de_défilement")}}

## Spécifications

Ce pseudo-élément ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
- Billet du blog Eric W. Bailey [N'utilisez pas de barres de défilement personnalisées <sup>(angl.)</sup>](https://ericwbailey.website/published/dont-use-custom-css-scrollbars/) (2023)
- Billet du blog Chrome [Mettre en forme les barres de défilement](https://developer.chrome.com/docs/css-ui/scrollbar-styling) (2024)
- Billet du blog WebKit [sur la mise en forme des barres de défilement <sup>(angl.)</sup>](https://webkit.org/blog/363/styling-scrollbars/) (2009)
