---
title: ::scroll-button()
slug: Web/CSS/Reference/Selectors/::scroll-button
original_slug: Web/CSS/::scroll-button
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{SeeCompatTable}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::scroll-button()`** représente un bouton permettant de contrôler le défilement d'un {{glossary("scroll container","conteneur de défilement")}}. Ces boutons sont générés sur les conteneurs de défilement lorsque leur propriété {{cssxref("content")}} n'est pas définie à `none`. La direction du défilement est déterminée par la valeur du paramètre.

## Syntaxe

```css-nolint
::scroll-button(<scroll-button-direction>) {
  /* ... */
}
```

### Paramètres

- `<scroll-button-direction>`
  - : Une valeur représentant la direction du bouton de défilement à sélectionner. Les valeurs suivantes sont disponibles&nbsp;:
    - `*`
      - : Sélectionne tous les boutons de défilement de l'élément d'origine, ce qui permet de leur appliquer des mises en évidence dans une seule règle.
    - `down`
      - : Sélectionne le bouton qui fera défiler le contenu vers le bas.
    - `left`
      - : Sélectionne le bouton qui fera défiler le contenu vers la gauche.
    - `right`
      - : Sélectionne le bouton qui fera défiler le contenu vers la droite.
    - `up`
      - : Sélectionne le bouton qui fera défiler le contenu vers le haut.
    - `block-end`
      - : Sélectionne le bouton qui fera défiler le contenu vers la fin du bloc.
    - `block-start`
      - : Sélectionne le bouton qui fera défiler le contenu vers le début du bloc.
    - `inline-end`
      - : Sélectionne le bouton qui fera défiler le contenu vers la fin de l'axe en ligne.
    - `inline-start`
      - : Sélectionne le bouton qui fera défiler le contenu vers le début de l'axe en ligne.

    La spécification définit également deux autres valeurs — `next` et `prev` — mais elles ne sont actuellement prises en charge par aucun navigateur.

## Description

Les pseudo-éléments `::scroll-button()` sont générés à l'intérieur d'un {{glossary("scroll container","conteneur de défilement")}} uniquement lorsque leurs propriétés {{cssxref("content")}} sont définies sur une valeur autre que `none`. Ils sont générés comme des éléments frères des enfants DOM du conteneur de défilement, immédiatement avant ceux-ci et avant tout {{cssxref("::scroll-marker-group")}} généré sur le conteneur.

Vous pouvez générer jusqu'à quatre boutons de défilement par conteneur, qui feront défiler le contenu vers le début et la fin des axes de bloc et en ligne. L'argument du sélecteur précise la direction de défilement sélectionnée. Vous pouvez aussi utiliser la valeur `*` pour cibler tous les pseudo-éléments `::scroll-button()` et leur appliquer des mises en évidence dans une seule règle.

Les boutons générés se comportent comme de véritables éléments {{htmlelement("button")}}, y compris leurs styles par défaut spécifiques au navigateur. Ils sont focalisables, accessibles et peuvent être activés comme des boutons classiques. Lorsqu'un bouton de défilement est activé, le contenu du conteneur est défilé dans la direction spécifiée d'une «&nbsp;page&nbsp;», soit environ la dimension du conteneur, de manière similaire à la pression des touches <kbd>PgUp</kbd> et <kbd>PgDn</kbd>.

Il est recommandé de configurer le [verrouillage du défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap) sur le conteneur de défilement et de définir chaque élément de contenu que vous souhaitez défiler comme une [cible d'ancrage](/fr/docs/Glossary/Scroll_snap#cible_dancrage). Ainsi, l'activation d'un bouton de défilement fera défiler le contenu jusqu'à la cible d'ancrage située à une «&nbsp;page&nbsp;» de distance. Bien que les boutons de défilement fonctionnent sans verrouillage du défilement, l'effet obtenu risque de ne pas être optimal.

Lorsqu'il n'est pas possible de défiler davantage dans une direction donnée, le bouton correspondant est automatiquement désactivé, sinon il est activé. Vous pouvez mettre en évidence les boutons de défilement dans leurs états activé et désactivé en utilisant les pseudo-classes {{cssxref(":enabled")}} et {{cssxref(":disabled")}}.

## Exemples

Voir [Créer des carrousels en CSS](/fr/docs/Web/CSS/CSS_overflow/CSS_carousels) pour d'autres exemples.

### Créer des boutons de défilement

Dans cet exemple, nous montrons comment créer des boutons de défilement sur un carrousel en CSS.

#### HTML

Nous avons une liste {{htmlelement("ul")}} HTML de base avec plusieurs éléments {{htmlelement("li")}}.

```html live-sample___créer_des_boutons_de_défilement live-sample___positionner_les_boutons_de_défilement
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

##### Mettre en évidence le carrousel

Nous transformons notre `<ul>` en carrousel en définissant {{cssxref("display")}} sur `flex`, créant une seule ligne non enroulée d'éléments `<li>`. La propriété {{cssxref("overflow-x")}} est définie sur `auto`, ce qui signifie que si les éléments débordent de leur conteneur sur l'axe x, le contenu défile horizontalement. Nous convertissons ensuite le `<ul>` en [conteneur d'ancrage au défilement](/fr/docs/Glossary/Scroll_snap#conteneur_dancrage_au_défilement), garantissant que les éléments s'alignent toujours lorsqu'on fait défiler le conteneur, grâce à une valeur {{cssxref("scroll-snap-type")}} de `mandatory`.

```css live-sample___créer_des_boutons_de_défilement live-sample___positionner_les_boutons_de_défilement
ul {
  display: flex;
  gap: 4vw;
  padding-left: 0;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
}
```

Ensuite, nous mettons en évidence les éléments `<li>`, en utilisant la propriété {{cssxref("flex")}} pour les rendre égaux à 100&nbsp;% de la largeur du conteneur. La valeur {{cssxref("scroll-snap-align")}} `start` permet d'aligner le côté gauche de l'élément visible le plus à gauche avec le bord gauche du conteneur.

```css live-sample___créer_des_boutons_de_défilement live-sample___positionner_les_boutons_de_défilement
li {
  list-style-type: none;
  background-color: #eeeeee;
  flex: 0 0 100%;
  height: 100px;
  padding-top: 20px;
  scroll-snap-align: start;
  text-align: center;
}
```

##### Créer les boutons de défilement

Tout d'abord, tous les boutons de défilement sont ciblés avec des styles rudimentaires, ainsi qu'avec des mises en évidence selon différents états. Il est important de définir des styles {{cssxref(":focus")}} pour les utilisateur·ice·s utilisant un clavier. De plus, comme les boutons de défilement sont automatiquement mis en état [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled) lorsqu'il n'est plus possible de défiler dans une direction, nous utilisons la pseudo-classe {{cssxref(":disabled")}} pour cibler cet état.

```css live-sample___créer_des_boutons_de_défilement live-sample___positionner_les_boutons_de_défilement
ul::scroll-button(*) {
  border: 0;
  font-size: 2rem;
  background: none;
  color: black;
  opacity: 0.7;
  cursor: pointer;
}

ul::scroll-button(*):hover,
ul::scroll-button(*):focus {
  opacity: 1;
}

ul::scroll-button(*):active {
  translate: 1px 1px;
}

ul::scroll-button(*):disabled {
  opacity: 0.2;
  cursor: unset;
}
```

> [!NOTE]
> Nous définissons aussi une valeur {{cssxref("cursor")}} `pointer` sur les boutons de défilement afin de rendre plus évident qu'ils sont interactifs (une amélioration pour l'[UX](/fr/docs/Glossary/UX) générale et l'[accessibilité cognitive](/fr/docs/Web/Accessibility/Guides/Cognitive_accessibility)), puis nous la supprimons lorsque les boutons sont en état `:disabled`.

Ensuite, une icône adaptée est définie sur les boutons gauche et droit via la propriété `content`, ce qui déclenche également la génération des boutons&nbsp;:

```css live-sample___créer_des_boutons_de_défilement live-sample___positionner_les_boutons_de_défilement
ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}
```

Il n'est pas nécessaire de définir de [texte alternatif](/fr/docs/Web/CSS/Reference/Properties/content#texte_alternatif_string_counter) pour les icônes de `content`, car le navigateur fournit automatiquement des {{glossary("accessible name","noms accessibles")}} appropriés.

#### Résultat

{{EmbedLiveSample("créer_des_boutons_de_défilement", '', '220')}}

Notez que les boutons de défilement apparaissent en bas à gauche du carrousel. Essayez de les activer pour voir comment le contenu défile.

### Positionner les boutons de défilement

L'exemple précédent fonctionne, mais les boutons ne sont pas idéalement placés. Dans cette section, nous ajoutons du CSS pour les positionner en utilisant [le positionnement par ancrage](/fr/docs/Web/CSS/CSS_anchor_positioning).

#### CSS

Tout d'abord, une référence {{cssxref("anchor-name")}} est définie sur le `<ul>` pour l'identifier comme ancre nommée. Ensuite, chaque bouton de défilement a sa propriété {{cssxref("position")}} définie à `absolute` et sa propriété {{cssxref("position-anchor")}} définie sur le `anchor-name` de la liste, afin de [les associer](/fr/docs/Web/CSS/CSS_anchor_positioning/Using#associer_des_éléments_dancrage_et_des_éléments_positionnés).

```css live-sample___positionner_les_boutons_de_défilement
ul {
  anchor-name: --mon-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --mon-carousel;
}
```

Pour positionner réellement chaque bouton de défilement, nous commençons par définir une valeur {{cssxref("align-self")}} `anchor-center` sur chacun, afin de les centrer verticalement sur le carrousel&nbsp;:

```css live-sample___positionner_les_boutons_de_défilement
ul::scroll-button(*) {
  align-self: anchor-center;
}
```

Nous définissons ensuite des valeurs sur leurs {{glossary("inset properties","propriétés d'insertion")}} pour gérer le positionnement horizontal. Nous utilisons les fonctions {{cssxref("anchor()")}} pour positionner les côtés des boutons par rapport aux côtés du carrousel. Dans chaque cas, la fonction {{cssxref("calc()")}} est utilisée pour ajouter un espace entre le bord du bouton et celui du carrousel. Par exemple, le bord droit du bouton gauche est placé 45 pixels à droite du bord gauche du carrousel.

```css live-sample___positionner_les_boutons_de_défilement
ul::scroll-button(left) {
  right: calc(anchor(left) - 45px);
}

ul::scroll-button(right) {
  left: calc(anchor(right) - 45px);
}
```

#### Résultat

{{EmbedLiveSample("positionner_les_boutons_de_défilement", '', '220')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::column")}}
- {{cssxref(":target-current")}}
- [Créer des carrousels en CSS](/fr/docs/Web/CSS/CSS_overflow/CSS_carousels)
- Le module de [débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- Le module de [positionnement par ancrage CSS](/fr/docs/Web/CSS/CSS_anchor_positioning)
- [Galerie de carrousels CSS <sup>(angl.)</sup>](https://chrome.dev/carousel/) par chrome.dev (2025)
