---
title: ::scroll-marker-group
slug: Web/CSS/Reference/Selectors/::scroll-marker-group
original_slug: Web/CSS/::scroll-marker-group
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{SeeCompatTable}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::scroll-marker-group`** est généré à l'intérieur d'un {{glossary("scroll container","conteneur de défilement")}} et contient tout pseudo-élément {{cssxref("::scroll-marker")}} généré sur les descendants de ce conteneur.

## Syntaxe

```css-nolint
::scroll-marker-group {
  /* ... */
}
```

## Description

Le pseudo-élément **`::scroll-marker-group`** d'un conteneur de défilement représente un **groupe de marqueurs de défilement**. Il s'agit d'un conteneur qui inclut automatiquement tout pseudo-élément {{cssxref("::scroll-marker")}} généré sur lui-même ou ses descendants. Cela permet de les positionner et de les disposer comme un groupe et s'utilise généralement lors de la création d'un carrousel CSS pour fournir un indicateur de position de défilement. Les marqueurs individuels peuvent être utilisés pour naviguer vers leurs éléments de contenu associés.

Le conteneur de défilement doit avoir une valeur {{cssxref("scroll-marker-group")}} différente de `none` afin que le pseudo-élément `::scroll-marker-group` soit généré. La valeur de {{cssxref("scroll-marker-group")}} détermine l'endroit où le groupe de marqueurs apparaît dans l'ordre d'onglet et l'ordre de disposition des boîtes du carrousel (mais pas dans la structure du DOM)&nbsp;: `before` le place au début, tandis que `after` le place à la fin.

Il est recommandé d'aligner la position de rendu visuelle du groupe de marqueurs avec l'ordre d'onglet. Lorsque vous positionnez le groupe au début du contenu, placez-le au début de l'ordre d'onglet avec `before`. Lorsque vous positionnez le groupe à la fin du contenu, placez-le à la fin de l'ordre d'onglet avec `after`.

En termes d'accessibilité, le groupe de marqueurs de défilement et les marqueurs qu'il contient sont rendus avec les sémantiques [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role). Lorsque vous utilisez <kbd>Tab</kbd> pour atteindre le groupe, il se comporte comme un seul élément (c'est-à-dire qu'une autre pression sur la touche <kbd>Tab</kbd> passera au prochain élément), et vous pouvez vous déplacer entre les différents marqueurs avec les flèches gauche et droite (ou haut et bas).

## Exemples

Voir [Créer des carrousels en CSS](/fr/docs/Web/CSS/CSS_overflow/CSS_carousels) pour d'autres exemples qui utilisent le pseudo-élément `::scroll-marker`.

### Créer des marqueurs de défilement pour un carrousel

Cette démonstration est un carrousel de pages uniques, chaque élément occupant toute la page. Nous avons inclus des marqueurs de défilement afin de permettre à l'utilisateur·ice de naviguer vers n'importe quelle page en cliquant sur un marqueur.

#### HTML

Le HTML se compose d'une [liste non ordonnée](/fr/docs/Web/HTML/Reference/Elements/ul), chaque [élément de liste](/fr/docs/Web/HTML/Reference/Elements/li) contenant un contenu d'exemple&nbsp;:

```html live-sample___créer_des_marqueurs_de_défilement_pour_un_carrousel live-sample___positionner_le_groupe_de_marqueurs_avec_le_positionnement_par_ancrage
<ul>
  <li>
    <h2>Page 1</h2>
  </li>
  <li>
    <h2>Page 2</h2>
  </li>
  <li>
    <h2>Page 3</h2>
  </li>
  <li>
    <h2>Page 4</h2>
  </li>
</ul>
```

#### CSS

Nous convertissons d'abord notre `<ul>` en carrousel en définissant {{cssxref("display")}} sur `flex`, créant une seule ligne non enroulée d'éléments `<li>`. La propriété {{cssxref("overflow-x")}} est définie sur `auto`, ce qui signifie que si les éléments débordent de leur conteneur sur l'axe x, le contenu défile horizontalement. Nous convertissons ensuite le `<ul>` en [conteneur d'ancrage au défilement](/fr/docs/Glossary/Scroll_snap#conteneur_dancrage_au_défilement), garantissant que les éléments s'alignent toujours lorsque le conteneur est défilé avec une valeur {{cssxref("scroll-snap-type")}} de `mandatory`.

```css hidden live-sample___créer_des_marqueurs_de_défilement_pour_un_carrousel live-sample___positionner_le_groupe_de_marqueurs_avec_le_positionnement_par_ancrage
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
```

```css live-sample___créer_des_marqueurs_de_défilement_pour_un_carrousel live-sample___positionner_le_groupe_de_marqueurs_avec_le_positionnement_par_ancrage
ul {
  display: flex;
  gap: 4vw;
  padding-left: 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
}
```

Ensuite, nous mettons en évidence les éléments `<li>`, en utilisant la propriété {{cssxref("flex")}} pour les rendre à `100%` de la largeur du conteneur. La valeur {{cssxref("scroll-snap-align")}} `start` fait s'accrocher le côté gauche de l'élément visible le plus à gauche au bord gauche du conteneur lorsque le contenu est défilé.

```css live-sample___créer_des_marqueurs_de_défilement_pour_un_carrousel live-sample___positionner_le_groupe_de_marqueurs_avec_le_positionnement_par_ancrage
li {
  list-style-type: none;
  background-color: #eeeeee;
  flex: 0 0 100%;
  height: 200px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
```

Ensuite, la propriété {{cssxref("scroll-marker-group")}} de la liste est définie sur `after`, de sorte que le pseudo-élément `::scroll-marker-group` est placé après le contenu DOM de la liste dans l'ordre de tabulation et l'ordre de disposition des boîtes&nbsp;; cela signifie qu'il vient après les boutons de défilement.

```css live-sample___créer_des_marqueurs_de_défilement_pour_un_carrousel live-sample___positionner_le_groupe_de_marqueurs_avec_le_positionnement_par_ancrage
ul {
  scroll-marker-group: after;
}
```

Ensuite, le pseudo-élément `::scroll-marker-group` de la liste est disposé avec Flexbox, avec une valeur de {{cssxref("justify-content")}} à `center` et un {{cssxref("gap")}} de `20px` afin que ses enfants (les pseudo-éléments {{cssxref("::scroll-marker")}}) soient centrés à l'intérieur du `::scroll-marker-group` avec un espacement entre chacun.

```css live-sample___créer_des_marqueurs_de_défilement_pour_un_carrousel live-sample___positionner_le_groupe_de_marqueurs_avec_le_positionnement_par_ancrage
ul::scroll-marker-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

Ensuite, les marqueurs de défilement eux-mêmes sont mis en évidence. Leur apparence est gérée par {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("background-color")}}, {{cssxref("border")}} et {{cssxref("border-radius")}}. Il faut aussi définir une valeur de {{cssxref("content")}} différente de `none` afin qu'ils soient effectivement générés.

```css live-sample___créer_des_marqueurs_de_défilement_pour_un_carrousel live-sample___positionner_le_groupe_de_marqueurs_avec_le_positionnement_par_ancrage
li::scroll-marker {
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50%;
  content: "";
}
```

> [!NOTE]
> Le contenu généré est en ligne (<i lang="en">inline</i> en anglais) par défaut&nbsp;; nous pouvons appliquer `width` et `height` à nos marqueurs car ils sont disposés en éléments flexibles.

Enfin, la pseudo-classe {{cssxref(":target-current")}} est utilisée pour sélectionner le marqueur de défilement correspondant à la «&nbsp;page&nbsp;» visible, afin de mettre en évidence la progression de défilement. Ici, nous définissons `background-color` sur `black` pour obtenir un disque plein.

```css live-sample___créer_des_marqueurs_de_défilement_pour_un_carrousel live-sample___positionner_le_groupe_de_marqueurs_avec_le_positionnement_par_ancrage
li::scroll-marker:target-current {
  background-color: black;
}
```

#### Résultat

{{EmbedLiveSample("carousel-example", "100%", "280px")}}

### Positionner le groupe de marqueurs avec le positionnement par ancrage

Cet exemple étend le précédent en montrant l'utilisation du [positionnement par ancrage en CSS](/fr/docs/Web/CSS/CSS_anchor_positioning) pour positionner le groupe de marqueurs par rapport au carrousel.

#### CSS

Le pseudo-élément `::scroll-marker-group` de la liste est positionné par rapport au carrousel en utilisant le positionnement par ancrage, en donnant au groupe une valeur {{cssxref("position-anchor")}} qui correspond au {{cssxref("anchor-name")}} de l'élément `<ul>`. Nous positionnons ensuite ce groupe par rapport au conteneur de défilement dans la direction de bloc en définissant une valeur de {{cssxref("top")}} qui inclut une fonction {{cssxref("anchor()")}}. Nous ajoutons aussi une valeur {{cssxref("justify-self")}} `anchor-center`, qui aligne le groupe au centre du conteneur de défilement dans la direction en ligne.

```css live-sample___positionner_le_groupe_de_marqueurs_avec_le_positionnement_par_ancrage
ul {
  anchor-name: --mon-carousel;
}

ul::scroll-marker-group {
  /* Depuis l'exemple précédent */
  display: flex;
  gap: 20px;

  position: absolute;
  position-anchor: --mon-carousel;
  top: calc(anchor(bottom) - 70px);
  justify-self: anchor-center;
}
```

#### Résultat

{{EmbedLiveSample("positionner_le_groupe_de_marqueurs_avec_le_positionnement_par_ancrage", "100%", "260px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::column")}}
- {{cssxref(":target-current")}}
- [Créer des carrousels en CSS](/fr/docs/Web/CSS/CSS_overflow/CSS_carousels)
- Le module de [positionnement par ancrage CSS](/fr/docs/Web/CSS/CSS_anchor_positioning)
- Le module de [débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- [Galerie de carrousels CSS <sup>(angl.)</sup>](https://chrome.dev/carousel/) par chrome.dev (2025)
