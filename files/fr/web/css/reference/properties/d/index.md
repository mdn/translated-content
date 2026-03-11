---
title: d
slug: Web/CSS/Reference/Properties/d
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`d`** définit un tracé à dessiner par l'élément SVG {{SVGElement("path")}}. Si elle est présente, elle remplace l'attribut SVG {{SVGAttr("d")}} de l'élément.

> [!NOTE]
> La propriété `d` ne s'applique qu'aux éléments SVG {{SVGElement("path")}} imbriqués dans un {{SVGElement("svg")}}. Elle ne s'applique ni aux autres éléments SVG, ni aux éléments HTML ou pseudo-éléments.

## Syntaxe

```css
/* Valeur par défaut */
d: none;

/* Utilisation simple */
d: path("m 5,5 h 35 L 20,30 z");
d: path("M 0,25 l 50,150 l 200,50 z");
d: path("M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z");

/* Valeurs globales */
d: inherit;
d: initial;
d: revert;
d: revert-layer;
d: unset;
```

### Valeurs

La valeur est soit une fonction {{CSSxRef("basic-shape/path", "path()")}} avec un unique paramètre {{CSSxRef("&lt;string&gt;")}}, soit le mot-clé `none`.

- `none`
  - : Aucun tracé n'est dessiné.
- `path(<string>)`
  - : Une fonction `path()` avec une [chaîne de données](/fr/docs/Web/SVG/Reference/Attribute/d) entre guillemets. La chaîne de données définit un [tracé SVG](/fr/docs/Web/SVG/Reference/Element/path). La chaîne de données du tracé SVG contient des [commandes de tracé](/fr/docs/Web/SVG/Reference/Attribute/d#commandes_de_tracé) qui utilisent implicitement des unités en pixels. Un tracé vide est considéré comme invalide.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les données de tracé

Cet exemple montre le cas d'utilisation simple de `d`, et comment la propriété CSS `d` prend le dessus sur l'attribut `d`.

#### HTML

Nous incluons deux éléments SVG `<path>` identiques dans un SVG&nbsp;; leurs valeurs d'attribut `d` sont `"m 5,5 h 90 v 90 h -90 v -90 z"`, ce qui crée un carré de `90px`.

```html
<svg>
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
</svg>
```

#### CSS

Avec CSS, nous mettons en forme les deux tracés, en appliquant un {{CSSxRef("stroke")}} noir et un {{CSSxRef("fill")}} rouge semi-opaque. Nous utilisons ensuite la propriété `d` pour remplacer la valeur de l'attribut SVG {{SVGAttr("d")}} uniquement pour le dernier tracé. Le navigateur affiche les images SVG avec une largeur de `300px` et une hauteur de `150px` par défaut.

```css
svg {
  border: 1px solid;
}

path {
  fill: #ff333388;
  stroke: black;
}

path:last-of-type {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z"
  );
}
```

#### Résultats

{{EmbedLiveSample("Définir les données de tracé", 300, 180)}}

Le second `<path>` est un cœur, tel que défini par la valeur de la fonction `path()` de la propriété CSS `d`. Le tracé du `<path>` non stylisé reste un carré, comme défini dans la valeur de son attribut SVG `d`.

### Animer les tracés de données

Cet exemple montre comment animer la valeur de l'attribut `d`.

#### HTML

Nous créons un `<svg>` contenant un unique élément `<path>`.

```html
<svg>
  <path />
</svg>
```

#### CSS

Nous utilisons l'attribut `d` pour définir un cœur traversé par une ligne. Nous utilisons CSS pour définir le {{CSSxRef("fill")}}, le {{CSSxRef("stroke")}} et le {{CSSxRef("stroke-width")}} de ce tracé, et ajoutons une {{CSSxRef("transition")}} de deux secondes. Nous ajoutons un style {{CSSxRef(":hover")}} qui contient une fonction {{CSSxRef("basic-shape/path", "path()")}} légèrement différente&nbsp;; le tracé possède le même nombre de points de données que l'état par défaut, ce qui rend le tracé animable.

```css
svg {
  border: 1px solid;
}

path {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M90,5 L5,90"
  );
  transition: all 2s;
  fill: none;
  stroke: red;
  stroke-width: 3px;
}

svg:hover path {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M5,5 L90,90"
  );
  stroke: black;
}
```

#### Résultats

{{EmbedLiveSample("Animer les tracés de données", 300, 180)}}

Pour voir l'animation, survolez le SVG.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG {{SVGAttr("d")}}
- La propriété {{CSSxRef("fill")}}
- La propriété {{CSSxRef("stroke")}}
- La fonction {{CSSxRef("basic-shape/path", "path()")}}
- Le type de données {{CSSxRef("basic-shape")}}
- [Aperçu des formes CSS](/fr/docs/Web/CSS/Guides/Shapes/Overview)
- Le module [des formes CSS](/fr/docs/Web/CSS/Guides/Shapes)
