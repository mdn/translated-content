---
title: preserveAspectRatio
slug: Web/SVG/Attribute/preserveAspectRatio
tags:
  - SVG
  - SVG Attribute
translation_of: Web/SVG/Attribute/preserveAspectRatio
---
{{SVGRef}}

L'attribut **`preserveAspectRatio`** indique comment un élément est mis à l'échelle lorsque le ratio largeur:hauteur de la [`viewBox`](/fr/docs/Web/SVG/Attribute/viewBox) est différent du ratio de la zone d'affichage (défini par les attributs `width` et `height`).

Parce que les proportions du SVG sont définies par l'attribut `viewBox`, si ce dernier n'est pas défini alors l'attribut `preserveAspectRatio` n'a aucun effet (_à l'exception près de l'élément [`<image>`](/fr/docs/Web/SVG/Element/image) comme décrit ci-dessous_).

## Exemple

```html
<svg viewBox="-1 -1 162 92" xmlns="http://www.w3.org/2000/svg">
  <defs>
     <path id="smiley" d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>

  <!-- (largeur>hauteur) meet -->
  <rect x="0" y="0" width="20" height="10">
    <title>xMidYMid meet</title>
  </rect>
  <svg viewBox="0 0 100 100" width="20" height="10"
       preserveAspectRatio="xMidYMid meet" x="0" y="0">
    <use href="#smiley" />
  </svg>

  <rect x="25" y="0" width="20" height="10">
    <title>xMinYMid meet</title>
  </rect>
  <svg viewBox="0 0 100 100" width="20" height="10"
       preserveAspectRatio="xMinYMid meet" x="25" y="0">
    <use href="#smiley" />
  </svg>

  <rect x="50" y="0" width="20" height="10">
    <title>xMaxYMid meet</title>
  </rect>
  <svg viewBox="0 0 100 100" width="20" height="10"
       preserveAspectRatio="xMaxYMid meet" x="50" y="0">
    <use href="#smiley" />
  </svg>

  <!-- (largeur>hauteur) slice -->
  <rect x="0" y="15" width="20" height="10">
    <title>xMidYMin slice</title>
  </rect>
  <svg viewBox="0 0 100 100" width="20" height="10"
       preserveAspectRatio="xMidYMin slice" x="0" y="15">
    <use href="#smiley" />
  </svg>

  <rect x="25" y="15" width="20" height="10">
    <title>xMidYMid slice</title>
  </rect>
  <svg viewBox="0 0 100 100" width="20" height="10"
       preserveAspectRatio="xMidYMid slice" x="25" y="15">
    <use href="#smiley" />
  </svg>

  <rect x="50" y="15" width="20" height="10">
    <title>xMidYMax slice</title>
  </rect>
  <svg viewBox="0 0 100 100" width="20" height="10"
       preserveAspectRatio="xMidYMax slice" x="50" y="15">
    <use href="#smiley" />
  </svg>

  <!-- (largeur<hauteur) meet -->
  <rect x="75" y="0" width="10" height="25">
    <title>xMidYMin meet</title>
  </rect>
  <svg viewBox="0 0 100 100" width="10" height="25"
       preserveAspectRatio="xMidYMin meet" x="75" y="0">
    <use href="#smiley" />
  </svg>

  <rect x="90" y="0" width="10" height="25">
    <title>xMidYMid meet</title>
  </rect>
  <svg viewBox="0 0 100 100" width="10" height="25"
       preserveAspectRatio="xMidYMid meet" x="90" y="0">
    <use href="#smiley" />
  </svg>

  <rect x="105" y="0" width="10" height="25">
    <title>xMidYMax meet</title>
  </rect>
  <svg viewBox="0 0 100 100" width="10" height="25"
       preserveAspectRatio="xMidYMax meet" x="105" y="0">
    <use href="#smiley" />
  </svg>

  <!-- (largeur<hauteur) slice -->
  <rect x="120" y="0" width="10" height="25">
    <title>xMinYMid slice</title>
  </rect>
  <svg viewBox="0 0 100 100" width="10" height="25"
       preserveAspectRatio="xMinYMid slice" x="120" y="0">
    <use href="#smiley" />
  </svg>

  <rect x="135" y="0" width="10" height="25">
    <title>xMidYMid slice</title>
  </rect>
  <svg viewBox="0 0 100 100" width="10" height="25"
       preserveAspectRatio="xMidYMid slice" x="135" y="0">
    <use href="#smiley" />
  </svg>

  <rect x="150" y="0" width="10" height="25">
    <title>xMaxYMid slice</title>
  </rect>
  <svg viewBox="0 0 100 100" width="10" height="25"
       preserveAspectRatio="xMaxYMid slice" x="150" y="0">
    <use href="#smiley" />
  </svg>

  <!-- none -->
  <rect x="0" y="30" width="160" height="60">
    <title>none</title>
  </rect>
  <svg viewBox="0 0 100 100" width="160" height="60"
       preserveAspectRatio="none" x="0" y="30">
    <use href="#smiley" />
  </svg>
</svg>
```

```css hidden
html,body,svg { height:100% }

path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover, rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('Exemple', '100%', 200)}}

## Syntaxe

    preserveAspectRatio="<align> [<meetOrSlice>]"

La valeur de l'attribut est constituée d'un ou deux mots clés : l'alignement et l'option "meet ou slice" (satisfaire ou trancher) comme décrit ci-dessous:

- Alignement

  - : L'alignement indique s'il faut forcer une mise à l'échelle uniforme et si oui, comment faire dans le cas où le rapport largeur:hauteur de la [`viewBox`](/fr/docs/Web/SVG/Attribute/viewBox) ne correspond pas à celui affiché. Les différentes valeurs possibles sont:

    - **none**
      Ne pas forcer la mise à l'échelle uniforme. Étirer le contenu de manière à ce que le contenu remplisse toute la hauteur et toute la largeur affichée. _Notez que si_ `<align>` _vaut_ `none`_, alors la valeur_ `<meetOrSlice>` _est ignorée_.
    - **xMinYMin** - Force la mise à l'échelle uniforme.
      Aligne le côté gauche de l'élément à gauche de la zone d'affichage.
      Aligne le côté haut de l'élément en haut de la zone d'affichage.
    - **xMidYMin** - Force la mise à l'échelle uniforme.
      Aligne horizontalement le centre de l'élément au milieu de la zone d'affichage.
      Aligne le côté haut de l'élément en haut de la zone d'affichage.
    - **xMaxYMin** - Force la mise à l'échelle uniforme.
      Aligne le côté droit de l'élément à droite de la zone d'affichage.
      Aligne le côté haut de l'élément en haut de la zone d'affichage.
    - **xMinYMid** - Force la mise à l'échelle uniforme.
      Aligne le côté gauche de l'élément à gauche de la zone d'affichage.
      Aligne verticalement le centre de l'élément au milieu de la zone d'affichage.
    - **xMidYMid** (_par défaut_) - Force la mise à l'échelle uniforme.
      Aligne horizontalement le centre de l'élément au milieu de la zone d'affichage.
      Aligne verticalement le centre de l'élément au milieu de la zone d'affichage.
    - **xMaxYMid** - Force la mise à l'échelle uniforme.
      Aligne le côté droit de l'élément à droite de la zone d'affichage.
      Aligne verticalement le centre de l'élément au milieu de la zone d'affichage.
    - **xMinYMax** - Force la mise à l'échelle uniforme.
      Aligne le côté gauche de l'élément à gauche de la zone d'affichage.
      Aligne le côté bas de l'élément en bas de la zone d'affichage.
    - **xMidYMax** - Force la mise à l'échelle uniforme.
      Aligne horizontalement le centre de l'élément au milieu de la zone d'affichage.
      Aligne le côté bas de l'élément en bas de la zone d'affichage.
    - **xMaxYMax** - Force la mise à l'échelle uniforme.
      Aligne le côté droit de l'élément à droite de la zone d'affichage.
      Aligne le côté bas de l'élément en bas de la zone d'affichage.

- Meet ou slice

  - : La valeur _meet_ ou _slice_ est optionnelle. Les deux valeurs possibles sont:

    - **meet** (_par défaut_) - Mettre à l'échelle l'image tel que:

      - les proportions sont préservées
      - la [`viewBox`](/fr/docs/Web/SVG/Attribute/viewBox) est entièrement visible dans la zone d'affichage
      - la [`viewBox`](/fr/docs/Web/SVG/Attribute/viewBox) est agrandie autant que possible, tout en respectant les autres critères

      Autrement dit, si les proportions du contenu ne correspondent pas à la zone d'affichage, la zone d'affichage sera agrandie au-delà de la [`viewBox`](/fr/docs/Web/SVG/Attribute/viewBox) (la zone dans laquelle sera dessinée la [`viewBox`](/fr/docs/Web/SVG/Attribute/viewBox) sera plus petite que la zone d'affichage).

    - **slice** - Mettre à l'échelle l'image tel que:

      - les proportions sont préservées
      - la zone d'affichage est entièrement remplie par la [`viewBox`](/fr/docs/Web/SVG/Attribute/viewBox)
      - la [`viewBox`](/fr/docs/Web/SVG/Attribute/viewBox) est réduite autant que possible, tout en respectant les autres critères

      Autrement dit, si les proportions du contenu ne correspondent pas à la zone d'affichage, la [`viewBox`](/fr/docs/Web/SVG/Attribute/viewBox) sera agrandie au-delà de la zone d'affichage (la zone dans laquelle sera dessinée la [`viewBox`](/fr/docs/Web/SVG/Attribute/viewBox) sera plus grande que la zone d'affichage).

## Éléments

Sept éléments utilisent cet attribut: [`<svg>`](/fr/docs/Web/SVG/Element/svg), [`<symbol>`](/fr/docs/Web/SVG/Element/symbol), [`<image>`](/fr/docs/Web/SVG/Element/image), [`<feImage>`](/fr/docs/Web/SVG/Element/feImage), [`<marker>`](/fr/docs/Web/SVG/Element/marker), [`<pattern>`](/fr/docs/Web/SVG/Element/pattern), and [`<view>`](/fr/docs/Web/SVG/Element/view).

### feImage

Pour [`<feImage>`](/fr/docs/Web/SVG/Element/feImage), `preserveAspectRatio` définit comment l'image doit être ajustée dans le rectangle défini par l'élément `<feImage>`.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### image

Pour [`<feImage>`](/fr/docs/Web/SVG/Element/feImage), `preserveAspectRatio` définit comment l'image doit être ajustée dans le rectangle défini par l'élément `<image>`.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### marker

Pour [`<marker>`](/fr/docs/Web/SVG/Element/marker), `preserveAspectRatio` indique si une mise à l'échelle uniforme doit être effectuée pour s'adapter à la zone d'affichage.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### pattern

Pour [`<pattern>`](/fr/docs/Web/SVG/Element/pattern), `preserveAspectRatio` indique si une mise à l'échelle uniforme doit être effectuée pour s'adapter à la zone d'affichage.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### svg

Pour [`<svg>`](/fr/docs/Web/SVG/Element/svg), `preserveAspectRatio` indique si une mise à l'échelle uniforme doit être effectuée pour s'adapter à la zone d'affichage.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### symbol

Pour [`<symbol>`](/fr/docs/Web/SVG/Element/symbol), `preserveAspectRatio` indique si une mise à l'échelle uniforme doit être effectuée pour s'adapter à la zone d'affichage.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### view

Pour [`<view>`](/fr/docs/Web/SVG/Element/view), `preserveAspectRatio` indique si une mise à l'échelle uniforme doit être effectuée pour s'adapter à la zone d'affichage.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Spécification

| Spécification                                                                                                                        | Statut                           | Commentaire         |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName("Filters 1.0", "#element-attrdef-feimage-preserveaspectratio", "preserveAspectRatio")}} | {{Spec2('Filters 1.0')}} |                     |
| {{SpecName("SVG2", "coords.html#PreserveAspectRatioAttribute", "preserveAspectRatio")}}                 | {{Spec2("SVG2")}}         |                     |
| {{SpecName("SVG1.1", "coords.html#PreserveAspectRatioAttribute", "preserveAspectRatio")}}             | {{Spec2("SVG1.1")}}         | Définition initiale |
