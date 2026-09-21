---
title: stroke-linejoin
slug: Web/SVG/Reference/Attribute/stroke-linejoin
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

L'attribut **`stroke-linejoin`** est un attribut de présentation qui définit la forme utilisée aux coins des chemins lorsque ceux-ci sont tracés.

> [!NOTE]
> En tant qu'attribut de présentation, `stroke-linejoin` possède une propriété CSS équivalente&nbsp;: {{cssxref("stroke-linejoin")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte.

Cet attribut peut être utilisé avec les éléments SVG suivants&nbsp;:

- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tspan')}}

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
  <!--
  Chemin en haut à gauche :
  effet de la valeur "miter"
  -->
  <path
    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!--
  Chemin au centre :
  effet de la valeur "round"
  -->
  <path
    d="M7,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="round" />

  <!--
  Chemin en haut à droite :
  effet de la valeur "bevel"
  -->
  <path
    d="M13,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="bevel" />

  <!--
  Chemin en bas à gauche :
  effet de la valeur "miter-clip",
  avec repli sur "miter" si elle n'est pas prise en charge.
  -->
  <path
    d="M3,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!--
  Chemin en bas à droite :
  effet de la valeur "arcs",
  avec repli sur "miter" si elle n'est pas prise en charge.
  -->
  <path
    d="M9,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="arcs" />

  <!--
  Les lignes roses suivantes mettent en évidence
  la position du chemin pour chaque trait
  -->
  <g id="highlight">
    <path
      d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5.5" r="0.05" fill="pink" />
  </g>
  <use href="#highlight" x="6" />
  <use href="#highlight" x="12" />
  <use href="#highlight" x="2" y="6" />
  <use href="#highlight" x="8" y="6" />
</svg>
```

{{EmbedLiveSample("Exemple", '100%', 400)}}

## Contexte d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code>arcs</code> | <code>bevel</code> | <code>miter</code> |
        <code>miter-clip</code> | <code>round</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>miter</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>discrète</td>
    </tr>
  </tbody>
</table>

### arcs

> [!NOTE]
> La valeur `arcs` n'est pas encore largement prise en charge.

La valeur `arcs` indique qu'un coin en arc est utilisé pour joindre les segments du chemin. La forme en arc est obtenue en prolongeant les bords extérieurs du trait au point de jonction par des arcs ayant la même courbure que ces bords extérieurs en ce point.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la valeur "arcs" -->
  <path
    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="arcs" />

  <!--
  Les lignes roses suivantes mettent en évidence
  la position du chemin pour chaque trait
  -->
  <g id="p">
    <path
      d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('arcs', '100%', 200)}}

### bevel

La valeur `bevel` indique qu'un coin biseauté est utilisé pour joindre les segments du chemin.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la valeur "bevel" -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="bevel" />

  <!--
  Les lignes roses suivantes mettent en évidence
  la position du chemin pour chaque trait
  -->
  <g id="p">
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('bevel', '100%', 200)}}

### miter

La valeur `miter` indique qu'un coin pointu est utilisé pour joindre les segments du chemin. Le coin est formé en prolongeant les bords extérieurs du trait le long des tangentes aux segments du chemin, jusqu'à ce qu'ils se croisent.

> [!NOTE]
> Si {{SVGAttr('stroke-miterlimit')}} est dépassé, la jonction se replie sur `bevel`.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 10 7" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la valeur "miter" -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!-- Effet de la valeur "miter" sur un angle aigu
       où la limite miter par défaut est dépassée -->
  <path
    d="M7,5 l0.75,-3 l0.75,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!-- La ligne pointillée rouge suivante indique où
       la valeur miter se replie sur la valeur bevel -->
  <path
    d="M0,0 h10"
    stroke="red"
    stroke-dasharray="0.05"
    stroke-width="0.025" />

  <!-- Les lignes roses suivantes mettent en évidence la position du chemin pour chaque trait -->
  <g>
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />

    <path
      d="M7,5 l0.75,-3 l0.75,3"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="7" cy="5" r="0.05" fill="pink" />
    <circle cx="7.75" cy="2" r="0.05" fill="pink" />
    <circle cx="8.5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('miter', '100%', 200)}}

### miter-clip

> [!NOTE]
> La valeur `miter-clip` n'est pas encore largement prise en charge.

La valeur `miter-clip` indique qu'un coin pointu est utilisé pour joindre les segments du chemin. Le coin est formé en prolongeant les bords extérieurs du trait le long des tangentes aux segments du chemin, jusqu'à ce qu'ils se croisent.

Si {{SVGAttr('stroke-miterlimit')}} est dépassé, la pointe est tronquée à une distance égale à la moitié de la valeur de {{SVGAttr('stroke-miterlimit')}} multipliée par l'épaisseur du trait, à partir de l'intersection des segments du chemin. Cela produit un meilleur rendu que `miter` sur les jonctions très aiguës ou dans le cas d'une animation.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 10 7" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la valeur "miter-clip" -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!-- Effet de la valeur "miter-clip" sur un angle aigu
       où la limite miter par défaut est dépassée -->
  <path
    d="M7,5 l0.75,-3 l0.75,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!-- La ligne pointillée rouge suivante indique où la troncature doit avoir lieu -->
  <path
    d="M0,0 h10"
    stroke="red"
    stroke-dasharray="0.05"
    stroke-width="0.025" />

  <!-- Les lignes roses suivantes mettent en évidence la position du chemin pour chaque trait -->
  <g>
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />

    <path
      d="M7,5 l0.75,-3 l0.75,3"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="7" cy="5" r="0.05" fill="pink" />
    <circle cx="7.75" cy="2" r="0.05" fill="pink" />
    <circle cx="8.5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('miter-clip', '100%', 200)}}

### round

La valeur `round` indique qu'un coin arrondi est utilisé pour joindre les segments du chemin.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la valeur "round" -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="round" />

  <!--
  Les lignes roses suivantes mettent en évidence
  la position du chemin pour chaque trait
  -->
  <g id="p">
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('round', '100%', 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("stroke-linejoin")}}
