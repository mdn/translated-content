---
title: path()
slug: Web/CSS/path
---

{{CSSRef}}

La [fonction](/fr/docs/Web/CSS/CSS_Functions) [CSS](/fr/docs/Web/CSS) **`path()`** accepte comme paramètre une chaîne représentant un tracé SVG. Elle est utilisée dans les formes CSS et les animations de tracés CSS pour permettre de dessiner une forme.

## Syntaxe

```css
path( [[<'fill-rule'>,]?<string>)
```

### Paramètres

- `<'fill-rule'>`
  - : La règle de remplissage de l'intérieur du tracé. Les valeurs possibles sont `nonzero` ou `evenodd`. La valeur par défaut est `nonzero`. Voir [fill-rule](/fr/docs/Web/SVG/Attribute/fill-rule) pour plus de détails.
- `<string>`
  - : Doit être une [chaîne représentant les données d'un chemin SVG](/fr/docs/Web/SVG/Element/path).

## Exemples

### Exemples de valeurs correctes pour path()

```css
path("M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
path(evenodd,"M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
```

### Utilisation en tant que valeur de offset-path

La fonction `path()` est utilisée pour créer un tracé à suivre pour l'élément. La modification de l'une de ces valeurs conduira celui-ci à ne pas pouvoir suivre le tracé de façon nette lors de l'animation.

{{EmbedGHLiveSample("css-examples/path/offset-path.html", '100%', 960)}}

## Spécifications

{{Specifications}}

## Voir aussi

- {{cssxref("&lt;shape-outside&gt;")}}
- [Formes CSS](/fr/docs/Web/CSS/CSS_Shapes)
- [Vue d'ensemble des formes CSS](/fr/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes)
- <i lang="en">SVG Path Syntax Illustrated Guide</i>

  [<i lang="en">SVG Path Syntax Illustrated Guide</i> (en anglais)](https://css-tricks.com/svg-path-syntax-illustrated-guide/)
