---
title: image-rendering
slug: Web/CSS/Reference/Properties/image-rendering
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`image-rendering`** fournit une indication au navigateur à propos de l'algorithme qui devrait être utilisé pour redimensionner les images. Elle s'applique à l'élément visé, aux images fournies via les autres propriétés CSS et aux éléments descendants de l'élément ciblé.

{{InteractiveExample("Démonstration CSS&nbsp;: image-rendering")}}

```css interactive-example-choice
image-rendering: auto;
```

```css interactive-example-choice
image-rendering: smooth;
```

```css interactive-example-choice
image-rendering: crisp-edges;
```

```css interactive-example-choice
image-rendering: pixelated;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/lizard.png" />
</section>
```

```css interactive-example
#example-element {
  height: 480px;
  object-fit: cover;
}
```

{{Glossary("user agent", "L'agent utilisateur")}} agrandira ou réduira une image lorsque l'auteur·ice de la page définit des dimensions différentes de sa taille naturelle. Un redimensionnement peut aussi se produire lors d'une interaction utilisateur (zoom). Par exemple, si la taille naturelle d'une image est de `100×100px`, mais que ses dimensions réelles sont de `200×200px` (ou `50×50px`), alors l'image sera agrandie (ou réduite) en utilisant l'algorithme défini par `image-rendering`. Cette propriété n'a aucun effet sur les images non redimensionnées.

## Syntaxe

```css
/*Valeurs avec un mot-clé*/
image-rendering: auto;
image-rendering: smooth;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* Valeurs globales */
image-rendering: inherit;
image-rendering: initial;
image-rendering: revert;
image-rendering: revert-layer;
image-rendering: unset;
```

### Valeurs

- `auto`
  - : L'algorithme utilisé dépend de l'agent utilisateur. Depuis la version 1.9 (Firefox 3.0), Gecko utilise un algorithme de rééchantillonnage _bilinéaire_ (haute qualité).
- `smooth` {{Experimental_Inline}}
  - : L'algorithme utilisé pour le redimensionnement doit maximiser l'apparence de l'image. Les algorithmes qui adoucissent les couleurs (l'interpolation bilinéaire par exemple) sont acceptables. Cette valeur est destinée aux images telles que les photos.
- `crisp-edges`
  - : L'image est agrandie avec un algorithme tel que le «&nbsp;plus proche voisin&nbsp;» qui préserve le contraste et les contours de l'image. Généralement destiné aux images comme le pixel art ou les dessins au trait, aucun flou ni adoucissement des couleurs n'est appliqué.
- `pixelated`
  - : L'image est agrandie avec l'algorithme du «&nbsp;plus proche voisin&nbsp;» ou un algorithme similaire jusqu'au multiple entier le plus proche de la taille d'origine, puis une interpolation douce est utilisée pour atteindre la taille finale souhaitée. Cela permet de préserver un aspect «&nbsp;pixelisé&nbsp;» sans introduire d'artefacts de redimensionnement lorsque la résolution agrandie n'est pas un multiple entier de la taille d'origine.

> [!NOTE]
> Les valeurs `optimizeQuality` et `optimizeSpeed` présentes dans un brouillon précoce (et issues de l'équivalent SVG {{SVGAttr("image-rendering")}}) sont définies comme synonymes respectivement des valeurs `smooth` et `pixelated`.

> [!NOTE]
> Le module [des images CSS](/fr/docs/Web/CSS/Guides/Images) définit une valeur `high-quality` pour la propriété `image-rendering` afin de privilégier un redimensionnement de meilleure qualité, cependant, cette valeur n'est prise en charge par aucun navigateur.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Paramétrer l'algorithme de redimensionnement des images

Dans cet exemple, une image est répétée trois fois, chacune ayant une valeur différente de `image-rendering` appliquée.

```html hidden
<div>
  <img
    class="auto"
    alt="Une petite photo de fleurs blanches et jaunes sur un fond vert feuillu. L'image est environ 33% plus petite que la taille à laquelle elle est affichée. Cet agrandissement rend l'image floue, avec des contours doux entre les objets."
    src="blumen.jpg" />
  <img
    class="smooth"
    alt="La même photo que l'image précédente, également agrandie de la même façon. Les navigateurs qui prennent en charge la valeur smooth pour la propriété image-rendering affichent l'image avec une apparence optimisée."
    src="blumen.jpg" />
  <img
    class="pixelated"
    alt="La même photo que l'image précédente, également agrandie de la même façon. Les navigateurs qui prennent en charge la valeur pixelated pour la propriété image-rendering affichent l'image avec un effet très pixelisé. Les pixels individuels sont clairement visibles et les contours paraissent beaucoup plus nets."
    src="blumen.jpg" />
  <img
    class="crisp-edges"
    alt="La même photo que les images précédentes, également agrandie de la même façon. Les navigateurs qui prennent en charge la valeur crisp-edges pour la propriété image-rendering affichent l'image comme très pixelisée. Dans ces exemples, il n'y a pratiquement aucune différence perceptible entre les versions pixelated et crisp-edges."
    src="blumen.jpg" />
</div>
```

```css hidden
img {
  height: 200px;
}
```

#### CSS

```css
.auto {
  image-rendering: auto;
}

.smooth {
  image-rendering: smooth;
}

.pixelated {
  image-rendering: pixelated;
}

.crisp-edges {
  image-rendering: crisp-edges;
}
```

#### Résultat

{{EmbedLiveSample("Paramétrer l'algorithme de redimensionnement des images", 260, 260)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("object-fit")}}
- La propriété {{CSSxRef("object-position")}}
- La propriété {{CSSxRef("image-orientation")}}
- La propriété {{CSSxRef("image-resolution")}}
- Le module [des images CSS](/fr/docs/Web/CSS/Guides/Images)
- L'attribut SVG {{SVGAttr("image-rendering")}}
