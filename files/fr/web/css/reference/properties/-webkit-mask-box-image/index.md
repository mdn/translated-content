---
title: -webkit-mask-box-image
slug: Web/CSS/Reference/Properties/-webkit-mask-box-image
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{Non-standard_Header}}

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) préfixée non standard **`-webkit-mask-box-image`** permet de définir l'image de masque pour la boîte de bordure d'un élément.

> [!NOTE]
> Cette propriété n'est pas standard et n'est pas en cours de normalisation. Il est recommandé d'utiliser la propriété {{CSSxRef("mask-border")}} à la place.

## Propriétés constitutives

Cette propriété est une propriété abrégée pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("mask-border-source", "-webkit-mask-border-source")}}
- {{CSSxRef("mask-border-outset", "-webkit-mask-border-outset")}}
- {{CSSxRef("mask-border-repeat", "-webkit-mask-border-repeat")}}

Les valeurs incluent le `<image>` à utiliser comme bordure de masque, et éventuellement quatre valeurs de décalage de bordure et jusqu'à deux styles de répétition de bordure.

## Syntaxe

```css
/* par défaut */
-webkit-mask-box-image: none;

/* image */
-webkit-mask-box-image: url("image.png");

/* image edge-offset */
-webkit-mask-box-image: url("image.png") 10 20 20 10;
-webkit-mask-box-image: url("image.png") 10px 20px 20px 10px;

/* image repeat-style */
-webkit-mask-box-image: url("image.png") space repeat;

/* image edge-offset repeat-style */
-webkit-mask-box-image: url("image.png") 10px 20px 20px 10px space repeat;

/* Valeurs globales */
-webkit-mask-box-image: inherit;
-webkit-mask-box-image: initial;
-webkit-mask-box-image: revert;
-webkit-mask-box-image: revert-layer;
-webkit-mask-box-image: unset;
```

### Valeurs

- {{CSSxRef("&lt;image&gt;")}}
  - : L'emplacement de la ressource image à utiliser comme image de masque, {{CSSxRef("&lt;gradient&gt;")}}, ou toute autre valeur {{CSSxRef("&lt;image&gt;")}}.
- `none`
  - : Ce mot-clé indique que la boîte de bordure n'a pas de masque.
- {{CSSxRef("&lt;length&gt;")}}
  - : Le décalage à appliquer à l'image de masque. Voir {{CSSxRef("&lt;length&gt;")}} pour les unités possibles.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Le décalage de l'image exprimé en pourcentages relatifs à la dimension de la boîte de bordure de l'élément (la largeur ou la hauteur selon l'axe).
- {{CSSxRef("&lt;number&gt;")}}
  - : La taille du décalage de l'image de masque en pixels.
- `repeat`
  - : L'image est répétée autant de fois que nécessaire pour remplir la boîte de bordure. On pourra avoir des morceaux d'image si les dimensions de celle-ci ne permettent pas d'en copier un nombre entier sur la boîte.
- `stretch`
  - : L'image de masque est étirée pour être contenue exactement dans la boîte de bordure.
- `round`
  - : L'image de masque est étirée et répétée de telle façon à ce qu'il n'y ait pas de morceaux d'image vers la fin de la boîte de bordure.
- `space`
  - : L'image de masque est répétée autant de fois que possible sans être étirée. Il n'y a pas d'image de masque partielle à la fin de la boîte de bordure.

Les valeurs de décalage, ou décalages de bord, définissent les distances depuis les bords supérieur, droit, inférieur et gauche de l'image, dans cet ordre. Les valeurs peuvent être définies comme {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;number&gt;")}} ou {{CSSxRef("&lt;percentage&gt;")}}, les nombres étant interprétés comme des longueurs en pixels.

Les styles de répétition de bordure, lorsqu'ils sont inclus, sont interprétés dans l'ordre `<repeat-x> <repeat-y>`. Si une seule valeur est déclarée, elle s'applique aux deux axes. Bien que similaire à {{CSSxRef("background-repeat")}}, les valeurs `cover` et `contain` ne sont pas prises en charge.

## Définition formelle

- [Valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale)&nbsp;: `none`
- Appliqué à&nbsp;: tous les éléments
- [Hérité](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)&nbsp;: non
- [Valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée)&nbsp;: comme la valeur définie

## Syntaxe formelle

{{CSSSyntaxRaw(`-webkit-mask-box-image = <mask-image-source> [ <mask-image-offset>{4} <mask-border-repeat>{1,2} ]`)}}

## Exemples

### Définir une image

```css
.exemple-un {
  -webkit-mask-box-image: url("mask.png");
}
```

### Définir un décalage et remplir une image

```css
.exemple-deux {
  -webkit-mask-box-image: url("logo.png") 100 100 0 0 round round;
}
```

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("mask-border")}}
- La propriété {{CSSxRef("border-image")}}
- [La référence CSS `-webkit-mask-box-image` pour Safari <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
