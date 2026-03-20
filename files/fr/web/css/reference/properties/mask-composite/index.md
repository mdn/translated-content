---
title: mask-composite
slug: Web/CSS/Reference/Properties/mask-composite
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-composite`** permet d'effectuer une opération de composition entre le masque situé sur la couche de l'élément et le masque présent en dessous.

## Syntaxe

```css
/* Valeurs avec un mot-clé*/
mask-composite: add;
mask-composite: subtract;
mask-composite: intersect;
mask-composite: exclude;

/* Valeurs globales */
mask-composite: inherit;
mask-composite: initial;
mask-composite: revert;
mask-composite: revert-layer;
mask-composite: unset;
```

### Valeurs

La propriété accepte une liste de mots-clés `<compositing-operator>` séparés par des virgules, chacun représentant un opérateur de composition Porter-Duff qui définit l'opération de composition utilisée sur la couche de masque actuelle avec les couches de masque en dessous, y compris&nbsp;:

- `add`
  - : L'image de masque associée est placée sur toutes les couches de masque en dessous (avec les opérateurs de composition correspondants appliqués). C'est la valeur par défaut.
- `subtract`
  - : L'image de masque associée est placée là où elle tombe en dehors de toutes les couches de masque en dessous (avec les opérateurs de composition correspondants appliqués).
- `intersect`
  - : Les parties de l'image de masque associée qui se chevauchent avec toutes les couches de masque composées en dessous remplacent celles précédemment composées.
- `exclude`
  - : Les régions de l'image de masque associée et des couches de masque en dessous qui ne se chevauchent pas, avec leurs opérateurs de composition correspondants appliqués, sont combinées.

## Description

Lorsqu'un élément a plusieurs couches de masque appliquées, la propriété `mask-composite` peut être utilisée pour définir comment les différents masques interagissent entre eux ou sont combinés pour créer l'effet de masque final.

Le nombre de couches est déterminé par le nombre de valeurs séparées par des virgules dans la valeur de la propriété `mask-image` (même si une valeur est `none`). Chaque valeur `mask-composite` dans la liste de valeurs séparées par des virgules est associée à une valeur `mask-image`, dans l'ordre. Si le nombre de valeurs dans `mask-composite` est égal ou supérieur au nombre de valeurs `mask-image`, les valeurs excédentaires sont ignorées. Si la propriété `mask-composite` n'a pas suffisamment de valeurs séparées par des virgules pour correspondre au nombre de couches, la liste des valeurs est répétée jusqu'à ce qu'il y en ait suffisamment.

Pour le traitement, la _couche source_, qui est l'image de la couche de masque actuelle ou associée, est soit ajoutée (par défaut), soustraite, intersectée ou exclue des couches de destination. Les _couches de destination_ sont les couches de masque situées en dessous de la source avec leurs opérateurs de composition correspondants appliqués&nbsp;; cela inclut toutes les couches précédentes, composées dans l'ordre d'apparition dans la liste de masques séparés par des virgules. Toutes les couches de masque situées en dessous de la couche de masque actuelle doivent être composées avant d'appliquer l'opération de composition pour la couche de masque actuelle. Les images des couches de masque sont transformées en masques alpha pour le traitement avant d'être combinées selon la valeur de composition définie.

Les multiples couches de masque appliquées à un élément ou pseudo-élément agissent comme si elles étaient rendues dans un groupe isolé. En d'autres termes, les couches de masque sont composées avec d'autres couches de masque, et non avec le contenu de l'élément ou le contenu derrière l'élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple démontre l'utilisation de base de la propriété `mask-composite`.

#### HTML

Nous incluons un élément HTML {{HTMLElement("div")}}, que nous allons ensuite mettre en forme.

```html
<div></div>
```

#### CSS

Nous définissons la taille et la couleur de notre `<div>`, puis ajoutons deux {{CSSxRef("mask-image")}}, et faisons en sorte que leur taille corresponde à celle de l'élément qu'ils masquent avec la propriété {{CSSxRef("mask-size")}}. Enfin, nous soustrayons la deuxième image de masque de la première image de masque avec la propriété `mask-composite` définie sur `subtract`.

```css
div {
  width: 100px;
  height: 100px;
  background-color: red;

  mask-image:
    url("https://mdn.github.io/shared-assets/images/examples/mdn.svg"),
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
  mask-size: 100% 100%;

  mask-composite: subtract;
}
```

#### Résultat

{{EmbedLiveSample("Utilisation simple", "", 150)}}

### Comparaison des valeurs

Cet exemple démontre les quatre valeurs de mot-clé `<compositing-operator>` de la propriété `mask-composite`, ainsi que la comparaison des effets des modes de masque [`alpha` et `luminance`](/fr/docs/Web/CSS/Reference/Properties/mask-type).

#### HTML

Nous avons un tableau ({{HTMLElement("table")}}) qui contient huit images. Le `<table>` a été masqué pour plus de concision.

```html hidden
<table>
  <tbody>
    <tr>
      <th colspan="4">mask-type: alpha</th>
    </tr>
    <tr>
      <th>mask-composite: add</th>
      <th>mask-composite: subtract</th>
      <th>mask-composite: intersect</th>
      <th>mask-composite: exclude</th>
    </tr>
    <tr class="alphaMaskType">
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Drapeau de la fierté" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Drapeau de la fierté" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Drapeau de la fierté" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Drapeau de la fierté" />
      </td>
    </tr>

    <tr>
      <th colspan="4">
        <code>mask-type: luminance</code>
      </th>
    </tr>
    <tr>
      <th>mask-composite: add</th>
      <th>mask-composite: subtract</th>
      <th>mask-composite: intersect</th>
      <th>mask-composite: exclude</th>
    </tr>
    <tr class="luminanceMaskType">
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Drapeau de la fierté" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Drapeau de la fierté" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Drapeau de la fierté" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Drapeau de la fierté" />
      </td>
    </tr>
  </tbody>
</table>
```

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />
```

Et un SVG avec 4 masques&nbsp;; un cœur et un cercle alpha et un cœur et un cercle luminance. Les masques de cœur sont définis en utilisant des couleurs unies. Les masques de cercle sont créés en utilisant des couleurs {{SVGAttr("stroke")}} et {{SVGAttr("fill")}} semi-transparentes blanches et noires.

```html
<svg height="0" width="0">
  <mask id="heartAlpha" class="alpha">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
  </mask>
  <mask id="circleAlpha" class="alpha">
    <circle
      cx="130"
      cy="130"
      r="50"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
  <mask id="heartLuminance" class="luminance">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
  </mask>
  <mask id="circleLuminance" class="luminance">
    <circle
      cx="130"
      cy="130"
      r="50"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
</svg>
```

```css
/* apply the mask images */
tr.alphaMaskType img {
  mask-image: url("#heartAlpha"), url("#circleAlpha");
}

tr.luminanceMaskType img {
  mask-image: url("#heartLuminance"), url("#circleLuminance");
}
```

Enfin, nous composons les masques en utilisant la propriété `mask-composite`, en appliquant les quatre valeurs énumérées différentes de `mask-composite` par colonne de tableau.

```css
/* propriété que nous testons */
td:nth-of-type(1) img {
  mask-composite: add;
}
td:nth-of-type(2) img {
  mask-composite: subtract;
}
td:nth-of-type(3) img {
  mask-composite: intersect;
}
td:nth-of-type(4) img {
  mask-composite: exclude;
}
```

Les styles du tableau ont été masqués pour plus de concision.

```css hidden
mask {
  height: 50%;
}

table,
td,
th {
  border: 1px solid;
}
th {
  font-family: monospace;
}
th {
  color: green;
}
body > img {
  display: none;
}
```

#### Résultats

{{EmbedLiveSample("Comparaison des valeurs", "", 600)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("mask")}}
- La propriété {{CSSxRef("mask-type")}}
- La propriété {{CSSxRef("mask-mode")}}
- [Introduction au masquage CSS](/fr/docs/Web/CSS/Guides/Masking/Introduction)
- [Les propriétés CSS `mask`](/fr/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Déclarer plusieurs masques](/fr/docs/Web/CSS/Guides/Masking/Multiple_masks)
- Le module [de masquage CSS](/fr/docs/Web/CSS/Guides/Masking)
