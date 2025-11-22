---
title: ::column
slug: Web/CSS/Reference/Selectors/::column
original_slug: Web/CSS/::column
l10n:
  sourceCommit: 601a0178d9b45121b72638d18e4e509644bd9258
---

{{SeeCompatTable}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::column`** représente les colonnes individuelles générées lorsqu'un conteneur est configuré pour afficher son contenu dans plusieurs colonnes via une [mise en page CSS multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout). Le pseudo-élément `::column` permet d'appliquer des styles qui n'affectent pas la mise en page à ces fragments générés.

## Syntaxe

```css-nolint
::column {
  /* ... */
}
```

## Description

Quand une mise en page CSS multi-colonnes est utilisée pour disposer le contenu d'un conteneur en plusieurs colonnes (par exemple, en utilisant la propriété {{cssxref("column-count")}}), des pseudo-éléments `::column` sont générés pour contenir chaque colonne individuelle.

Le pseudo-élément `::column` n'accepte que les propriétés de défilement qui s'appliquent aux éléments à l'intérieur d'un conteneur de défilement, y compris {{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-align")}} et {{cssxref("scroll-snap-stop")}}.

Le pseudo-élément `::column` peut avoir un pseudo-élément {{cssxref("::scroll-marker")}}. D'autres pseudo-éléments comme {{cssxref("::before")}} et {{cssxref("::after")}} ne sont pas générés sur `::column`. L'application de `::column::scroll-marker` crée un marqueur pour chaque colonne du [conteneur de défilement](/fr/docs/Glossary/Scroll_container) d'origine, les pseudo-éléments `::scroll-marker` héritant de l'élément d'origine du pseudo-élément `::column` plutôt que du `::column` lui-même.

Cela est utile pour les [carrousels CSS](/fr/docs/Web/CSS/CSS_overflow/CSS_carousels)&nbsp;: `::column` peut être utilisé pour générer des pseudo-éléments `::scroll-marker` pour chaque colonne, et les définir comme [cibles de défilement](/fr/docs/Glossary/Scroll_snap#snap_target) en utilisant [accrochage de défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap).

Bien que le style qui peut être appliqué à `::column` soit très limité, il pourrait être étendu à l'avenir. Toutes les propriétés et valeurs prises en charge à l'avenir seront limitées à celles qui n'affectent pas la mise en page.

## Examples

### Mise en page de colonnes défilantes

Cette démo crée un conteneur réactif qui ajuste chaque "page" de contenu en place. Elle utilise la propriété {{cssxref("columns")}} et le pseudo-élément `::column` pour créer des colonnes de contenu qui s'étendent sur toute la largeur de leur conteneur {{glossary("scroll container")}} parent, qui peut être défilé horizontalement. Chaque colonne contient un ou plusieurs éléments de liste, dont le nombre varie en fonction de la largeur de la fenêtre d'affichage.

#### HTML

Le code HTML suivant consiste en une [liste non ordonnée](/fr/docs/Web/HTML/Reference/Elements/ul), chaque [élément de liste](/fr/docs/Web/HTML/Reference/Elements/li) contenant un contenu d'exemple&nbsp;:

```html-nolint
<ul>
...
  <li>
    <h2>Élément 1</h2>
  </li>
...
</ul>
```

```html hidden live-sample___mise_en_page_de_colonnes_défilantes live-sample___carousel_basé_sur_les_colonnes_avec_des_marqueurs_de_défilement
<ul>
  <li>
    <h2>Élément 1</h2>
  </li>
  <li>
    <h2>Élément 2</h2>
  </li>
  <li>
    <h2>Élément 3</h2>
  </li>
  <li>
    <h2>Élément 4</h2>
  </li>
  <li>
    <h2>Élément 5</h2>
  </li>
  <li>
    <h2>Élément 6</h2>
  </li>
  <li>
    <h2>Élément 7</h2>
  </li>
  <li>
    <h2>Élément 8</h2>
  </li>
  <li>
    <h2>Élément 9</h2>
  </li>
  <li>
    <h2>Élément 10</h2>
  </li>
  <li>
    <h2>Élément 11</h2>
  </li>
  <li>
    <h2>Élément 12</h2>
  </li>
  <li>
    <h2>Élément 13</h2>
  </li>
  <li>
    <h2>Élément 14</h2>
  </li>
  <li>
    <h2>Élément 15</h2>
  </li>
</ul>
```

#### CSS

La liste est donnée avec une hauteur ({{cssxref("height")}}) fixe et une largeur ({{cssxref("width")}}) de `100vw` pour s'étendre sur toute la largeur de la fenêtre d'affichage. Une valeur {{cssxref("overflow-x")}} de `scroll` est ensuite définie afin que le contenu défile horizontalement, et [CSS scroll snap](/fr/docs/Web/CSS/Guides/Scroll_snap) est utilisé pour s'accrocher à chaque élément ou «&nbsp;page&nbsp;» — une valeur {{cssxref("scroll-snap-type")}} de `x mandatory` est utilisée pour faire de la liste un [scroll snap container](/fr/docs/Glossary/Scroll_snap#scroll_snap_container). Enfin, une valeur {{cssxref("columns")}} de `1` est définie pour forcer le contenu de la liste à s'afficher comme une seule colonne. Une valeur {{cssxref("text-align")}} de `center` est également appliquée, pour aligner le contenu avec le centre de la liste.

```css hidden live-sample___mise_en_page_de_colonnes_défilantes live-sample___carousel_basé_sur_les_colonnes_avec_des_marqueurs_de_défilement
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
```

```css live-sample___mise_en_page_de_colonnes_défilantes live-sample___carousel_basé_sur_les_colonnes_avec_des_marqueurs_de_défilement
ul {
  width: 100vw;
  height: 300px;
  padding: 10px;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  columns: 1;
  text-align: center;
}
```

Les éléments de la liste sont ensuite mis en forme&nbsp;:

- Une valeur {{cssxref("display")}} de `inline-block` est définie pour faire en sorte que les éléments de la liste s'alignent les uns à côté des autres et que la liste défile horizontalement.
- Une {{cssxref("width")}} et une {{cssxref("height")}} fixes ont été définies sur eux.
- Une valeur de `text-align` de `left` est définie sur eux pour remplacer le `text-align: center` défini sur le conteneur parent, de sorte que le contenu de l'élément sera aligné à gauche.
- Chaque élément de liste de numéro pair se voit attribuer une couleur de fond différente via {{cssxref(":nth-child()")}}, afin qu'il soit plus facile de voir l'effet de défilement.

```css live-sample___mise_en_page_de_colonnes_défilantes live-sample___carousel_basé_sur_les_colonnes_avec_des_marqueurs_de_défilement
li {
  list-style-type: none;

  display: inline-block;
  height: 100%;
  width: 200px;
  text-align: left;

  background-color: #eeeeee;
  outline: 1px solid #dddddd;
  padding: 0 20px;
  margin: 0 10px;
}

li:nth-child(even) {
  background-color: cyan;
}
```

La propriété {{cssxref("scroll-snap-align")}} est définie sur les pseudo-éléments `::column` — qui représentent les colonnes de contenu générées par la propriété `columns` — de sorte que lorsqu'elles sont défilées, une colonne soit centrée dans le conteneur de défilement.

```css live-sample___mise_en_page_de_colonnes_défilantes live-sample___carousel_basé_sur_les_colonnes_avec_des_marqueurs_de_défilement
ul::column {
  scroll-snap-align: center;
}
```

#### Résultat

{{EmbedLiveSample("mise_en_page_de_colonnes_défilantes", "100%", "400px")}}

### Carousel basé sur les colonnes avec des marqueurs de défilement

En s'appuyant sur l'exemple précédent, nous allons créer des marqueurs de défilement pour permettre une navigation directe vers différentes colonnes en appliquant un {{cssxref("scroll-marker-group")}} au conteneur et un {{cssxref("::scroll-marker")}} à chaque pseudo-élément `::column`. Le HTML reste inchangé.

#### CSS

Nous créons un groupe de marqueurs de défilement avec la propriété {{cssxref("scroll-marker-group")}}, plaçant le groupe après tout le contenu&nbsp;:

```css live-sample___carousel_basé_sur_les_colonnes_avec_des_marqueurs_de_défilement
ul {
  scroll-marker-group: after;
}
```

Nous appliquons ensuite des styles au pseudo-élément {{cssxref("::scroll-marker-group")}} pour disposer les marqueurs de défilement au centre de la ligne avec un écart de `0.4em` entre chacun d'eux&nbsp;:

```css live-sample___carousel_basé_sur_les_colonnes_avec_des_marqueurs_de_défilement
::scroll-marker-group {
  display: flex;
  gap: 0.4em;
  place-content: center;
}
```

Enfin, nous utilisons le pseudo-élément {{cssxref("::scroll-marker")}} pour créer un marqueur rond et transparent pour chaque élément de liste avec une bordure noire, puis nous stylisons le marqueur de l'élément actuellement défilé différemment des autres, en ciblant le marqueur avec la pseudo-classe {{cssxref(":target-current")}}&nbsp;:

```css live-sample___carousel_basé_sur_les_colonnes_avec_des_marqueurs_de_défilement
ul::column::scroll-marker {
  content: "";
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
}

ul::column::scroll-marker:target-current {
  background-color: black;
}
```

#### Résultat

{{EmbedLiveSample("carousel_basé_sur_les_colonnes_avec_des_marqueurs_de_défilement", "100%", "400px")}}

Essayez d'appuyer sur les marqueurs de défilement pour sauter directement à chaque page. Notez comment le marqueur actuel est mis en surbrillance afin que vous puissiez voir où vous en êtes dans la pagination. Essayez également de tabuler vers le groupe de marqueurs de défilement, puis utilisez les touches de direction pour faire défiler chaque page.

Voir la [création de carrousels CSS](/fr/docs/Web/CSS/CSS_overflow/CSS_carousels) pour plus d'exemples de carrousels.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("columns")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}
- [Création de carrousels CSS](/fr/docs/Web/CSS/CSS_overflow/CSS_carousels)
- Le module de [Mise en page multi-colonnes CSS](/fr/docs/Web/CSS/Guides/Multicol_layout)
- Le module de [Débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- [Galerie CSS de carrousels <sup>(angl.)</sup>](https://chrome.dev/carousel/) sur chrome.dev (2025)
