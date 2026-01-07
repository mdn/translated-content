---
title: -webkit-mask-box-image
slug: Web/CSS/Reference/Properties/-webkit-mask-box-image
original_slug: Web/CSS/-webkit-mask-box-image
---

{{Non-standard_header}}

La propriété **`-webkit-mask-box-image`** permet de définir l'image de masque utilisée pour la boîte de bordure d'un élément.

- Valeur initiale : `none`
- Applicabilité : à tous les éléments
- Héritée : non
- Type de média : visuel
- Valeur calculée : comme la valeur définie

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

- `<uri>`
  - : L'emplacement de la ressource qui doit être utilisée comme image de masque.
- `<gradient>`
  - : Une fonction `-webkit-gradient` utilisée pour générer l'image de masque.
- `none`
  - : Ce mot-clé indique que la boîte de bordure n'a pas de masque.
- `<length>`
  - : Le décalage à appliquer à l'image de masque (cf. {{cssxref("&lt;length&gt;")}} pour les unités possibles).
- `<percentage>`
  - : Le décalage de l'image exprimé en pourcentages relatifs à la dimension de la boîte de bordure de l'élément (la largeur ou la hauteur selon l'axe).
- `repeat`
  - : L'image est répétée autant de fois que nécessaire pour remplir la boîte de bordure. On pourra avoir des morceaux d'image si les dimensions de celle-ci ne permettent pas d'en copier un nombre entier sur la boîte.
- `stretch`
  - : L'image de masque est étirée pour être contenue exactement dans la boîte de bordure.
- `round`
  - : L'image de masque est étirée et répétée de telle façon à ce qu'il n'y ait pas de morceaux d'image vers la fin de la boîte de bordure.

## Définition formelle

- [Valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)&nbsp;: `none`
- Appliqué à&nbsp;: tous les éléments
- [Hérité](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)&nbsp;: non
- [Valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée)&nbsp;: comme la valeur définie

## Syntaxe formelle

{{CSSSyntaxRaw(`-webkit-mask-box-image = <mask-image-source> [ <mask-image-offset>{4} <mask-border-repeat>{1,2} ]`)}}

## Exemples

```css
.exempleUn {
  -webkit-mask-box-image: url("mask.png");
}

.exempleDeux {
  -webkit-mask-box-image: url("logo.png") 100 100 0 0 round round;
}
```

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("mask-border")}}
- La propriété CSS {{cssxref("border-image")}}
- [La référence CSS `-webkit-mask-box-image` pour Safari <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
