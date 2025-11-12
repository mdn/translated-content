---
title: ::scroll-marker
slug: Web/CSS/Reference/Selectors/::scroll-marker
original_slug: Web/CSS/::scroll-marker
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{SeeCompatTable}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::scroll-marker`** peut être généré à l'intérieur de n'importe quel élément et représente son marqueur de défilement. Il est placé dans le {{cssxref("::scroll-marker-group")}} de l'ancêtre du {{glossary("scroll container","conteneur de défilement")}} le plus proche. Un marqueur de défilement se comporte comme une ancre (élément {{htmlelement("a")}}) dont la cible de défilement est l'élément d'origine du marqueur — et fait défiler le conteneur de défilement jusqu'à cet élément lorsqu'il est activé.

## Syntaxe

```css-nolint
::scroll-marker {
  /* ... */
}
```

## Description

Un `::scroll-marker` est généré sur un élément lorsque la propriété {{cssxref("content")}} de `::scroll-marker` est définie sur une valeur différente de `none`, et que l'élément possède un ancêtre, conteneur de défilement, avec une valeur {{cssxref("scroll-marker-group")}} différente de `none` (ce qui signifie qu'il générera un pseudo-élément {{cssxref("::scroll-marker-group")}}).

Le pseudo-élément `::scroll-marker-group` du conteneur de défilement contient automatiquement tout pseudo-élément `::scroll-marker` généré sur le conteneur ou ses descendants. Cela permet de les positionner et de les disposer comme un groupe, généralement utilisé lors de la création d'un carrousel CSS pour générer un indicateur de position de défilement. Les marqueurs individuels peuvent être utilisés pour naviguer vers leurs éléments de contenu associés.

En termes d'accessibilité, le groupe de marqueurs de défilement et les marqueurs qu'il contient sont rendus avec les sémantiques [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role). Lorsque vous utilisez <kbd>Tab</kbd> pour atteindre le groupe, il se comporte comme un seul élément (c'est-à-dire qu'une autre pression sur la touche <kbd>Tab</kbd> passera au prochain élément), et vous pouvez naviguer entre les différents marqueurs à l'aide des flèches gauche et droite (ou haut et bas).

## Exemples

Voir [Créer des carrousels en CSS](/fr/docs/Web/CSS/CSS_overflow/CSS_carousels) pour d'autres exemples utilisant le pseudo-élément `::scroll-marker`.

### Créer des marqueurs de défilement de carrousel

Dans cet exemple, nous montrons comment créer des marqueurs de défilement sur un carrousel CSS.

#### HTML

Nous avons une liste {{htmlelement("ul")}} HTML de base avec plusieurs éléments {{htmlelement("li")}}.

```html live-sample___créer_des_marqueurs_de_défilement_de_carrousel live-sample___numérotation_et_style_personnalisés_des_marqueurs_de_défilement
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
  <li>Élément 4</li>
  <li>Élément 5</li>
  <li>Élément 6</li>
  <li>Élément 7</li>
  <li>Élément 8</li>
</ul>
```

#### CSS

Nous transformons notre `<ul>` en conteneur de défilement avec accrochage en définissant {{cssxref("display")}} sur `flex`, créant une seule ligne non enroulée d'éléments `<li>`. La propriété {{cssxref("overflow-x")}} est définie sur `auto`, ce qui signifie que si les éléments débordent de leur conteneur sur l'axe x, le contenu défile horizontalement. Nous convertissons ensuite le `<ul>` en [conteneur d'ancrage au défilement](/fr/docs/Glossary/Scroll_snap#conteneur_dancrage_au_défilement), garantissant que les éléments s'alignent toujours lorsqu'on fait défiler le conteneur avec une valeur {{cssxref("scroll-snap-type")}} de `mandatory`.

Nous créons un groupe de marqueurs de défilement avec la propriété `scroll-marker-group`, en plaçant le groupe après tout le contenu.

```css live-sample___créer_des_marqueurs_de_défilement_de_carrousel live-sample___numérotation_et_style_personnalisés_des_marqueurs_de_défilement
ul {
  display: flex;
  gap: 4vw;
  padding-left: 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-marker-group: after;
}
```

Ensuite, nous mettons en évidence les éléments `<li>`, en utilisant la propriété {{cssxref("flex")}} pour les rendre à `33%` de la largeur du conteneur. La valeur {{cssxref("scroll-snap-align")}} `start` permet d'aligner le côté gauche de l'élément visible le plus à gauche avec le bord gauche du conteneur.

```css live-sample___créer_des_marqueurs_de_défilement_de_carrousel live-sample___numérotation_et_style_personnalisés_des_marqueurs_de_défilement
li {
  list-style-type: none;
  background-color: #eeeeee;
  flex: 0 0 33%;
  height: 100px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
```

Nous utilisons ensuite le pseudo-élément `::scroll-marker` pour créer un marqueur carré pour chaque élément de liste avec une bordure rouge&nbsp;:

```css live-sample___créer_des_marqueurs_de_défilement_de_carrousel
li::scroll-marker {
  content: "";
  border: 1px solid red;
  height: 1em;
  width: 1em;
}
```

Nous appliquons également des mises en évidence au pseudo-élément {{cssxref("::scroll-marker-group")}} afin de disposer les marqueurs de défilement au centre de la ligne, avec un espacement de `0.4em` entre chacun&nbsp;:

```css live-sample___créer_des_marqueurs_de_défilement_de_carrousel live-sample___numérotation_et_style_personnalisés_des_marqueurs_de_défilement
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Enfin, nous mettons en évidence différemment le marqueur de l'élément actuellement défilé, en ciblant ce marqueur avec la pseudo-classe {{cssxref(":target-current")}}.

```css live-sample___créer_des_marqueurs_de_défilement_de_carrousel
::scroll-marker:target-current {
  background: red;
}
```

#### Résultat

{{EmbedLiveSample("créer_des_marqueurs_de_défilement_de_carrousel", '', '200')}}

### Numérotation et style personnalisés des marqueurs de défilement

Cet exemple est identique au précédent, sauf que nous avons appliqué un style différent aux marqueurs de défilement et utilisé des [compteurs CSS](/fr/docs/Web/CSS/Guides/Lists) pour incrémenter le numéro affiché sur chaque marqueur. Les différences CSS sont expliquées dans la section suivante.

### CSS

Dans cet exemple, nous définissons un compteur nommé `markers` que nous voulons incrémenter sur chaque `<li>`, grâce à la propriété {{cssxref("counter-increment")}}&nbsp;:

```css live-sample___numérotation_et_style_personnalisés_des_marqueurs_de_défilement
li {
  counter-increment: markers;
}
```

Nous définissons ensuite la propriété {{cssxref("content")}} du pseudo-élément `::scroll-marker` sur la fonction {{cssxref("counter()")}}, en lui passant le nom du compteur `markers` en argument. Cela insère un numéro dans chaque marqueur, qui s'incrémente automatiquement. Le reste du style est rudimentaire, mais il illustre comment les marqueurs peuvent être entièrement mis en évidence.

```css live-sample___numérotation_et_style_personnalisés_des_marqueurs_de_défilement
li::scroll-marker {
  content: counter(markers);
  font-family: sans-serif;
  width: fit-content;
  height: 1em;
  padding: 5px;
  color: black;
  text-decoration: none;
  border: 2px solid rgb(0 0 0 / 0.15);
  border-radius: 0.5em;
  background-color: #eeeeee;
}
```

Pour une autre personnalisation intéressante, nous incluons deux règles pour sélectionner le marqueur du premier et du dernier élément de la liste, en insérant respectivement {{cssxref(":first-child")}} et {{cssxref(":last-child")}} dans le sélecteur. Nous donnons au premier marqueur le texte «&nbsp;Premier&nbsp;» et au dernier le texte «&nbsp;Dernier&nbsp;».

```css live-sample___numérotation_et_style_personnalisés_des_marqueurs_de_défilement
li:first-child::scroll-marker {
  content: "Premier";
}

li:last-child::scroll-marker {
  content: "Dernier";
}
```

Pour améliorer l'expérience utilisateur, nous appliquons une couleur différente aux marqueurs au survol ({{cssxref(":hover")}}) et utilisons la pseudo-classe `:target-current` pour définir une {{cssxref("color")}} et une {{cssxref("background-color")}} différentes sur le marqueur de l'élément actuellement affiché, afin que les utilisateur·ice·s sachent quel élément est visible&nbsp;:

```css live-sample___numérotation_et_style_personnalisés_des_marqueurs_de_défilement
::scroll-marker:hover {
  background-color: #ddcccc;
}

::scroll-marker:target-current {
  background-color: purple;
  color: white;
}
```

#### Résultat

{{EmbedLiveSample("numérotation_et_style_personnalisés_des_marqueurs_de_défilement", '', '220')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- [Créer des carrousels en CSS](/fr/docs/Web/CSS/CSS_overflow/CSS_carousels)
- Le module de [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
- Le module de [débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- [Galerie de carrousels CSS <sup>(angl.)</sup>](https://chrome.dev/carousel/) par chrome.dev (2025)
