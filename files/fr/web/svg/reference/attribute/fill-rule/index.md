---
title: fill-rule
slug: Web/SVG/Reference/Attribute/fill-rule
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

L'attribut **`fill-rule`** est un attribut de présentation qui définit l'algorithme à utiliser pour déterminer la partie _intérieure_ d'une forme.

> [!NOTE]
> En tant qu'attribut de présentation, `fill-rule` possède une propriété CSS équivalente&nbsp;: {{cssxref("fill-rule")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte.

Cet attribut peut être utilisé avec les éléments SVG suivants&nbsp;:

- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
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
<svg viewBox="-10 -10 220 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Valeur par défaut de fill-rule -->
  <polygon
    fill-rule="nonzero"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  Le centre de la forme est séparé de l'infini
  par deux segments de chemin (matérialisés par
  le trait rouge). Il est donc considéré comme
  extérieur à la forme, et n'est pas rempli.
  -->
  <polygon
    fill-rule="evenodd"
    stroke="red"
    points="150,0 121,90 198,35 102,35 179,90" />
</svg>
```

{{EmbedLiveSample("Exemple", '100%', 200)}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><code>nonzero</code> | <code>evenodd</code></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>nonzero</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>discrète</td>
    </tr>
  </tbody>
</table>

L'attribut `fill-rule` offre deux façons de déterminer l'intérieur d'une forme, c'est-à-dire la zone à remplir&nbsp;:

### nonzero

La valeur `nonzero` détermine si un point appartient à l'intérieur de la forme en traçant, depuis ce point, un rayon vers l'infini dans une direction quelconque, puis en examinant les endroits où un segment de la forme croise ce rayon. En partant d'un compte à zéro, on ajoute un chaque fois qu'un segment du chemin croise le rayon de gauche à droite, et on retranche un chaque fois qu'un segment croise le rayon de droite à gauche. Une fois les croisements comptés, si le résultat est zéro, le point est à l'extérieur du chemin. Sinon, il est à l'intérieur.

#### Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 320 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la règle nonzero sur des segments de chemin qui se croisent -->
  <polygon
    fill-rule="nonzero"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  Effet de la règle nonzero sur une forme dans une forme,
  les segments allant dans la même direction
  (les deux carrés dessinés dans le sens horaire, vers la droite)
  -->
  <path
    fill-rule="nonzero"
    stroke="red"
    d="M110,0  h90 v90 h-90 z
           M130,20 h50 v50 h-50 z" />

  <!--
  Effet de la règle nonzero sur une forme dans une forme,
  les segments allant dans des directions opposées
  (un carré dans le sens horaire, l'autre dans le sens antihoraire)
  -->
  <path
    fill-rule="nonzero"
    stroke="red"
    d="M210,0  h90 v90 h-90 z
           M230,20 v50 h50 v-50 z" />
</svg>
```

{{EmbedLiveSample('nonzero', '100%', 200)}}

### evenodd

La valeur `evenodd` détermine si un point appartient à l'intérieur de la forme en traçant, depuis ce point, un rayon vers l'infini dans une direction quelconque, et en comptant le nombre de segments de la forme que ce rayon croise. Si ce nombre est impair (_odd_ en anglais), le point est à l'intérieur&nbsp;; s'il est pair (_even_ en anglais), le point est à l'extérieur.

#### Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 320 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la règle evenodd sur des segments de chemin qui se croisent -->
  <polygon
    fill-rule="evenodd"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  Effet de la règle evenodd sur une forme dans une forme,
  les segments allant dans la même direction
  (les deux carrés dessinés dans le sens horaire, vers la droite)
  -->
  <path
    fill-rule="evenodd"
    stroke="red"
    d="M110,0  h90 v90 h-90 z
           M130,20 h50 v50 h-50 z" />

  <!--
  Effet de la règle evenodd sur une forme dans une forme,
  les segments allant dans des directions opposées
  (un carré dans le sens horaire, l'autre dans le sens antihoraire)
  -->
  <path
    fill-rule="evenodd"
    stroke="red"
    d="M210,0  h90 v90 h-90 z
           M230,20 v50 h50 v-50 z" />
</svg>
```

{{EmbedLiveSample('evenodd', '100%', 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("fill-rule")}}
