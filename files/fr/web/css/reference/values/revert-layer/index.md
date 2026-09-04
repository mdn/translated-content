---
title: Mot-clé CSS `revert-layer`
short-title: revert-layer
slug: Web/CSS/Reference/Values/revert-layer
l10n:
  sourceCommit: 0aa8517faf9d7d15c745ac94db7014d3a2d2085f
---

Le [mot-clé global CSS](/fr/docs/Web/CSS/Reference/Values/Data_types#mots-clés_globaux_css) **`revert-layer`** annule la valeur d'une propriété dans une [couche de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer) pour revenir à la valeur de la propriété dans une règle CSS correspondant à l'élément dans une couche de cascade précédente. La valeur d'une propriété avec ce mot-clé est recalculée comme si aucune règle n'était définie sur l'élément cible dans la couche de cascade actuelle.

Si aucune autre couche de la cascade n'est disponible pour revenir à la règle CSS correspondante, la valeur de la propriété revient à la [valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée) dérivée de la couche actuelle. De plus, si aucune règle CSS correspondante n'existe dans la couche actuelle, la valeur de la propriété pour l'élément revient au style défini dans une [origine de style](/fr/docs/Glossary/Style_origin) précédente.

Ce mot-clé peut être appliqué à n'importe quelle propriété CSS, y compris la propriété raccourcie CSS {{CSSxRef("all")}}.

## `revert-layer` et `revert`

Le mot-clé `revert-layer` permet de revenir aux styles définis dans les couches précédentes de la cascade dans [l'origine de l'auteur·ice](/fr/docs/Glossary/Style_origin). Le mot-clé {{CSSxRef("revert")}}, en comparaison, permet de revenir aux styles appliqués dans l'origine de l'auteur·ice vers ceux définis dans l'origine de l'utilisateur·ice ou l'origine de l'agent utilisateur.

Le mot-clé `revert-layer` est idéalement destiné à être appliqué aux propriétés à l'intérieur d'une couche de la cascade. Cependant, s'il est appliqué à des propriétés en dehors d'une couche de la cascade, il annule les valeurs des propriétés pour revenir à celles définies par les indices de présentation (tels que les attributs `width` et `height` ou l'élément `<s>` en HTML), en revenant par défaut aux valeurs établies par la feuille de style de l'agent utilisateur ou les styles de l'utilisateur·ice. Contrairement au mot-clé `revert`, qui considère les indices de présentation comme faisant partie de l'origine de l'auteur·ice et les annule également, le mot-clé `revert-layer` ignore les indices de présentation en dehors de la couche de la cascade, donc il ne les annule pas.

## Exemples

### Comportement par défaut des couches de la cascade

Dans l'exemple ci-dessous, deux couches de la cascade sont définies dans le CSS, `base` et `special`. Par défaut, les règles de la couche `special` remplacent les règles concurrentes de la couche `base`, car `special` est listée après `base` dans la déclaration `@layer`.

#### HTML

```html
<p>Ce exemple contient une liste.</p>

<ul>
  <li class="item feature">Premier élément</li>
  <li class="item">Deuxième élément</li>
  <li class="item">Troisième élément</li>
</ul>
```

#### CSS

```css
@layer base, special;

@layer special {
  .item {
    color: red;
  }
}

@layer base {
  .item {
    color: blue;
  }
  .feature {
    color: green;
  }
}
```

#### Résultat

{{EmbedLiveSample("Comportement par défaut des couches de la cascade")}}

Tous les éléments HTML `<li>` correspondent à la règle `item` dans la couche `special` et sont rouges. Il s'agit du comportement par défaut des couches de la cascade, où les règles de la couche `special` prennent le pas sur les règles de la couche `base`.

### Revenir au style dans la couche de la cascade précédente

Examinons comment le mot-clé `revert-layer` modifie le comportement par défaut des couches de la cascade. Dans cet exemple, la couche `special` contient une règle supplémentaire `feature` ciblant le premier élément `<li>`. La propriété `color` dans cette règle est définie sur `revert-layer`.

#### HTML

```html
<p>Ce exemple contient une liste.</p>

<ul>
  <li class="item feature">Premier élément</li>
  <li class="item">Deuxième élément</li>
  <li class="item">Troisième élément</li>
</ul>
```

#### CSS

```css
@layer base, special;

@layer special {
  .item {
    color: red;
  }
  .feature {
    color: revert-layer;
  }
}

@layer base {
  .item {
    color: blue;
  }
  .feature {
    color: green;
  }
}
```

#### Résultat

{{EmbedLiveSample("Revenir au style dans la couche de la cascade précédente")}}

Avec `color` défini sur `revert-layer`, la valeur de la propriété `color` revient à la valeur de la règle `feature` correspondante dans la couche précédente `base`, et donc «&nbsp;Premier élément&nbsp;» est maintenant vert.

### Revenir au style dans l'origine précédente

Cet exemple montre le comportement du mot-clé `revert-layer` lorsqu'il n'y a pas de couche de cascade à laquelle revenir _et_ qu'il n'y a pas de règle CSS correspondante dans la couche actuelle pour hériter de la valeur de la propriété.

#### HTML

```html
<p>Ce exemple contient une liste.</p>

<ul>
  <li class="item feature">Premier élément</li>
  <li class="item">Deuxième élément</li>
  <li class="item">Troisième élément</li>
</ul>
```

#### CSS

```css
@layer base {
  .item {
    color: revert-layer;
  }
}
```

#### Résultat

{{EmbedLiveSample("Revenir au style dans l'origine précédente")}}

Le style de tous les éléments `<li>` revient aux valeurs par défaut dans l'origine de l'agent utilisateur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le mot-clé {{CSSxRef("initial")}}
- Le mot-clé {{CSSxRef("inherit")}}
- Le mot-clé {{CSSxRef("revert")}}
- Le mot-clé {{CSSxRef("revert-rule")}}
- Le mot-clé {{CSSxRef("unset")}}
- La propriété {{CSSxRef("all")}}
- Le module [de cascade et d'héritage CSS](/fr/docs/Web/CSS/Guides/Cascade)
