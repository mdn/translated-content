---
title: filter
slug: Web/CSS/filter
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`filter`** permet d'appliquer des filtres et d'obtenir des effets graphiques de flou, de saturation, etc. Les filtres sont généralement utilisés pour ajuster le rendu d'une image, d'un arrière-plan ou des bordures.

Plusieurs [fonctions](#fonctions) comme `blur()` et `contrast()` sont incluses dans le standard CSS et permettent d'obtenir des effets prédéfinis.

{{InteractiveExample("CSS Demo: filter")}}

```css interactive-example-choice
filter: url("/shared-assets/images/examples/shadow.svg#element-id");
```

```css interactive-example-choice
filter: blur(5px);
```

```css interactive-example-choice
filter: contrast(200%);
```

```css interactive-example-choice
filter: grayscale(80%);
```

```css interactive-example-choice
filter: hue-rotate(90deg);
```

```css interactive-example-choice
filter: drop-shadow(16px 16px 20px red) invert(75%);
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <img
      id="example-element"
      src="/shared-assets/images/examples/firefox-logo.svg"
      width="200" />
  </div>
</section>
```

```css interactive-example
.example-container {
  background-color: #fff;
  width: 260px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#example-element {
  flex: 1;
  padding: 30px;
}
```

## Syntaxe

```css
/* Fonctions de filtre */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* URL vers un filtre SVG */
filter: url("filters.svg#filter-id");

/* On applique plusieurs filtres */
filter: contrast(175%) brightness(3%);
filter: drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue);

/* On utilise aucun filtre */
filter: none;

/* Valeurs globales */
filter: inherit;
filter: initial;
filter: revert;
filter: revert-layer;
filter: unset;
```

Avec une fonction, on utilisera la forme suivante&nbsp;:

```css-nolint
filter: <filter-function> [<filter-function>]* | none;
```

En utilisant un élément SVG [`<filter>`](/fr/docs/Web/SVG/Reference/Element/filter), on utilisera la forme suivante&nbsp;:

```css
filter: url(file.svg#filter-element-id);
```

## Fonctions

La propriété `filter` s'utilise avec le mot-clé `none` ou avec une à plusieurs fonctions parmi celles listées ensuite. Si le paramètre fourni à l'une de ces fonctions est invalide, la fonction reverra `none`. Sauf mention contraire, les fonctions qui acceptent une valeur exprimée en pourcentage (par exemple `34%`) acceptent également les valeurs exprimées en décimal (par exemple `0.34`).

Lorsque la valeur de la propriété `filter` contient plusieurs fonctions, les filtres sont appliqués dans l'ordre.

- [`blur()`](/fr/docs/Web/CSS/filter-function/blur)
  - : Applique un [flou gaussien](https://en.wikipedia.org/wiki/Gaussian_blur) à l'image.

    ```css
    filter: blur(5px);
    ```

- [`brightness()`](/fr/docs/Web/CSS/filter-function/brightness)
  - : Rend l'image plus claire ou plus sombre en utilisant un coefficient multiplicateur. L'effet est linéaire&nbsp;: `0%` créera une image complètement noire, `100%` ne modifiera pas l'image et les valeurs supérieures à 100% rendront l'image plus claire.

    ```css
    filter: brightness(2);
    ```

- [`contrast()`](/fr/docs/Web/CSS/filter-function/contrast)
  - : Ajuste le contraste de l'image. Une valeur de `0%` rendra l'image grise, `100%` n'aura pas d'effet et les valeurs supérieures à `100%` renforceront le contraste.

    ```css
    filter: contrast(200%);
    ```

- [`drop-shadow()`](/fr/docs/Web/CSS/filter-function/drop-shadow)
  - : Applique une ombre portée suivant les contours de l'image. Son paramètre suit la même syntaxe que celle de la propriété [`box-shadow`](/fr/docs/Web/CSS/box-shadow) (définie dans le module [Arrière-plans et bordures CSS](/fr/docs/Web/CSS/CSS_backgrounds_and_borders)), sauf que le mot-clé `inset` et le paramètre `spread` ne sont pas autorisés. Tous les filtres appliqués après `drop-shadow()` sont appliqués à l'ombre portée également.

    ```css
    filter: drop-shadow(16px 16px 10px black);
    ```

- [`grayscale()`](/fr/docs/Web/CSS/filter-function/grayscale)
  - : Convertit l'image en niveaux de gris. Un argument de `100%` rendra l'image uniquement avec des niveaux de gris. Un argument de `0%` ne modifiera pas l'image d'entrée. Les valeurs entre `0%` et `100%` appliquent un effet proportionnel.

    ```css
    filter: grayscale(100%);
    ```

- [`hue-rotate()`](/fr/docs/Web/CSS/filter-function/hue-rotate)
  - : Applique une rotation de teinte. L'argument angulaire définit le nombre de degrés pour la rotation sur le cercle des teintes. Une valeur de `0deg` n'aura pas d'effet sur l'image.

    ```css
    filter: hue-rotate(90deg);
    ```

- [`invert()`](/fr/docs/Web/CSS/filter-function/invert)
  - : Inverse les couleurs de l'image. Si l'argument vaut `100%`, on obtiendra le négatif complet de l'image. Si l'argument vaut `0%`, l'image sera inchangée. Les valeurs entre `0%` et `100%` ont des effets proportionnels.

    ```css
    filter: invert(100%);
    ```

- [`opacity()`](/fr/docs/Web/CSS/filter-function/opacity)
  - : Applique un niveau de transparence. Un coefficient de `0%` rendra l'image complètement transparente tandis qu'un coefficient de `100%` laissera l'image inchangée.

    ```css
    filter: opacity(50%);
    ```

- [`saturate()`](/fr/docs/Web/CSS/filter-function/saturate)
  - : Sature l'image. Avec un coefficient de `0%`, l'image sera complètement désaturée. `100%` n'aura pas d'effet sur l'image. Les valeurs supérieures à `100%` augmenteront la saturation.

    ```css
    filter: saturate(200%);
    ```

- [`sepia()`](/fr/docs/Web/CSS/filter-function/sepia)
  - : Convertit l'image en sépia. Un coefficient de `100%` rendra l'image complètement sépia tandis qu'un coefficient `0%` n'aura pas d'effet sur l'image.

    ```css
    filter: sepia(100%);
    ```

## Combiner les fonctions

On peut combiner autant de fonctions que nécessaire pour manipuler le rendu. Les filtres sont alors appliqués dans l'ordre de leur déclaration. Dans l'exemple suivant, on améliore le contraste et la luminosité de l'image&nbsp;:

```css
filter: contrast(175%) brightness(103%);
```

### Interpolation

Pour les animations, si les filtres du début et de la fin ont une liste de fonctions de la même taille, sans [`url()`](/fr/docs/Web/CSS/url_value) et dans le même ordre, chaque filtre est interpolé selon ses règles particulières.

Si les listes de filtres sont de longueurs différentes, la liste la plus courte est complétée à la fin par les filtres supplémentaires de la liste la plus longue. Les fonctions ajoutées utilisent leur valeur initiale (qui ne modifie pas l'image). Tous les filtres alors présents sont interpolés selon leurs règles particulières. Sinon, c'est une interpolation discrète qui est utilisée.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Appliquer des fonctions de filtre

On applique la propriété `filter` sur la deuxième image, en appliquant des niveaux de gris et un flou (à l'image et à la bordure).

```css
img {
  border: 5px solid yellow;
}
/* On passe à 40% de niveau de gris */
/* et un flou de 5px de rayon */
img:nth-of-type(2) {
  filter: grayscale(0.4) blur(5px);
}
```

```html
<img src="pencil.jpg" alt="L'image originale est nette" />
<img src="pencil.jpg" alt="L'image et la bordure sont floues et atténuées" />
```

{{EmbedLiveSample('','100%','229px')}}

### Répéter des filtres

Les fonctions de filtre sont appliquées selon leur ordre d'apparition. On peut donc appliquer plusieurs fois un même filtre.

```css
#MDN-logo {
  border: 1px solid blue;
  filter: drop-shadow(5px 5px 0 red) hue-rotate(180deg)
    drop-shadow(5px 5px 0 red);
}
```

```html hidden
<svg
  id="MDN-logo"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 361 104.2"
  xml:space="preserve"
  role="img">
  <title>MDN Web Docs</title>
  <path
    d="M197.6 73.2h-17.1v-5.5h3.8V51.9c0-3.7-.7-6.3-2.1-7.9-1.4-1.6-3.3-2.3-5.7-2.3-3.2 0-5.6 1.1-7.2 3.4s-2.4 4.6-2.5 6.9v15.6h6v5.5h-17.1v-5.5h3.8V51.9c0-3.8-.7-6.4-2.1-7.9-1.4-1.5-3.3-2.3-5.6-2.3-3.2 0-5.5 1.1-7.2 3.3-1.6 2.2-2.4 4.5-2.5 6.9v15.8h6.9v5.5h-20.2v-5.5h6V42.4h-6.1v-5.6h13.4v6.4c1.2-2.1 2.7-3.8 4.7-5.2 2-1.3 4.4-2 7.3-2s5.3.7 7.5 2.1c2.2 1.4 3.7 3.5 4.5 6.4 1.1-2.5 2.7-4.5 4.9-6.1s4.8-2.4 7.9-2.4c3.5 0 6.5 1.1 8.9 3.3s3.7 5.6 3.7 10.2v18.2h6.1v5.5zm42.5 0h-13.2V66c-1.2 2.2-2.8 4.1-4.9 5.6-2.1 1.6-4.8 2.4-8.3 2.4-4.8 0-8.7-1.6-11.6-4.9-2.9-3.2-4.3-7.7-4.3-13.3 0-5 1.3-9.6 4-13.7 2.6-4.1 6.9-6.2 12.8-6.2s9.8 2.2 12.3 6.5V22.7h-8.6v-5.6h15.8v50.6h6v5.5zm-13.3-16.8V52c-.1-3-1.2-5.5-3.2-7.3s-4.4-2.8-7.2-2.8c-3.6 0-6.3 1.3-8.2 3.9-1.9 2.6-2.8 5.8-2.8 9.6 0 4.1 1 7.3 3 9.5s4.5 3.3 7.4 3.3c3.2 0 5.8-1.3 7.8-3.8 2.1-2.6 3.1-5.3 3.2-8zm61.5 16.8H269v-5.5h6V51.9c0-3.7-.7-6.3-2.2-7.9-1.4-1.6-3.4-2.3-5.7-2.3-3.1 0-5.6 1-7.4 3s-2.8 4.4-2.9 7v15.9h6v5.5h-19.3v-5.5h6V42.4h-6.2v-5.6h13.6V43c2.6-4.6 6.8-6.9 12.7-6.9 3.6 0 6.7 1.1 9.2 3.3s3.7 5.6 3.7 10.2v18.2h6v5.4h-.2z"
    style="fill: var(--text-primary);"></path>
  <g style="fill:blue;">
    <path
      d="M42 .2 13.4 92.3H1.7L30.2.2H42zM52.4.2v92.1H42V.2h10.4zm40.3 0L64.2 92.3H52.5L81 .2h11.7zM103.1.2v92.1H92.7V.2h10.4zM294 95h67v8.8h-67V95z"></path>
  </g>
</svg>
```

{{EmbedLiveSample('','100%','229px')}}

Les filtres sont appliqués dans l'ordre, c'est pour cela que les ombres portées ne sont pas de la même couleur. La teinte de la première ombre portée est modifiée par la fonction `hue-rotate()`, mais pas la teinte de la deuxième.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS [`backdrop-filter`](/fr/docs/Web/CSS/backdrop-filter)
- [La composition et les modes de fusion en CSS](/fr/docs/Web/CSS/CSS_compositing_and_blending) avec les propriétés CSS [`background-blend-mode`](/fr/docs/Web/CSS/background-blend-mode) et [`mix-blend-mode`](/fr/docs/Web/CSS/mix-blend-mode)
- La propriété CSS [`mask`](/fr/docs/Web/CSS/mask)
- [SVG](/fr/docs/Web/SVG) et notamment l'élément [`<filter>`](/fr/docs/Web/SVG/Reference/Element/filter) et l'attribut [`filter`](/fr/docs/Web/SVG/Attribute/filter)
- [Appliquer des effets SVG à du contenu HTML](/fr/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
