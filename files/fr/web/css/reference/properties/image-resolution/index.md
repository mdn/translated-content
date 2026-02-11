---
title: image-resolution
slug: Web/CSS/Reference/Properties/image-resolution
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`image-resolution`** définit la résolution intrinsèque de toutes les images matricielles utilisée dans l'élément. Cela affecte les images de contenu comme les éléments remplacés et le contenu généré, ainsi que les images décoratives générées à l'aide de la propriété `background-image`.

La résolution de l'image est définie par le nombre de pixels par unité de longueur de l'image, par exemple exprimé en pixels par pouce. Par défaut, CSS part du principe que la résolution d'une image est d'un pixel image par unité de pixel CSS. Cependant, la propriété `image-resolution` permet de définir une résolution différente.

## Syntaxe

```css
image-resolution: from-image;
image-resolution: 300dpi;
image-resolution: from-image 300dpi;
image-resolution: 300dpi snap;

/* Valeurs globales */
image-resolution: inherit;
image-resolution: initial;
image-resolution: revert;
image-resolution: revert-layer;
image-resolution: unset;
```

### Valeurs

- {{CSSxRef("&lt;resolution&gt;")}}
  - : Définit explicitement la résolution intrinsèque.
- `from-image`
  - : Utilise la résolution intrinsèque comme spécifié par le format de l'image. Si l'image ne spécifie pas elle-même sa propre résolution, alors la résolution explicitement spécifiée sera utilisée, si elle a été fournie. Sinon, la résolution par défaut sera de `1dppx` (1 pixel image par unité de pixel CSS).
- `snap`
  - : Si le mot-clé `snap` est fourni, la résolution calculée sera la résolution spécifiée arrondie à la valeur la plus proche correspondant à un {{Glossary("device pixel", "pixel image")}} défini sous la forme d'un nombre entier de pixels de l'appareil. Si la résolution est récupérée à partir de l'image, alors la résolution intrinsèque utilisée est la résolution native de l'image, arrondie de la même façon.

> [!NOTE]
> Les formats vectoriels tels que SVG n'ont pas de résolution intrinsèque, cette propriété n'a aucun effet sur les images vectorielles.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir une haute résolution pour l'impression

Lors de l'impression du document, utiliser une résolution plus élevée.

```css
@media print {
  .mon-image {
    image-resolution: 300dpi;
  }
}
```

### Utiliser la propriété image-resolution avec des solutions de repli

L'exemple ci-dessous utilise la résolution définie par l'image. Si l'image ne spécifie aucune résolution, alors la valeur de `300dpi` est utilisée à la place de la valeur par défaut de `1dppx`.

```css
.mon-image {
  image-resolution: from-image 300dpi;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres propriétés CSS liées aux images&nbsp;: {{CSSxRef("object-fit")}}, {{CSSxRef("object-position")}}, {{CSSxRef("image-orientation")}}, {{CSSxRef("image-rendering")}}.
- [Boggue sur Chromium&nbsp;: 1086473 <sup>(angl.)</sup>](https://bugs.chromium.org/p/chromium/issues/detail?id=1086473)
