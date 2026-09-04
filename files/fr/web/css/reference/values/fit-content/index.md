---
title: Mot-clé CSS `fit-content`
short-title: fit-content
slug: Web/CSS/Reference/Values/fit-content
l10n:
  sourceCommit: aaedffba9f47d6dce7967a4191963378026d9406
---

Le mot-clé [CSS](/fr/docs/Web/CSS) `fit-content` représente une taille d'élément qui s'adapte à son contenu tout en restant dans les limites de son conteneur.
Le mot-clé garantit que l'élément n'est jamais plus petit que sa taille intrinsèque minimale ({{CSSxRef("min-content")}}) ou plus grand que sa taille intrinsèque maximale ({{CSSxRef("max-content")}}).

> [!NOTE]
> Ce mot-clé est différent de la fonction {{CSSxRef("fit-content()")}}. La fonction est utilisée pour le dimensionnement des pistes de grille (par exemple dans {{CSSxRef("grid-template-columns")}} et {{CSSxRef("grid-auto-rows")}}) et pour le dimensionnement des boîtes mises en page pour des propriétés telles que {{CSSxRef("width")}}, {{CSSxRef("height")}}, {{CSSxRef("min-width")}} et {{CSSxRef("max-height")}}.

## Syntaxe

```css
/* Utilisé dans les propriétés de dimensionnement */
width: fit-content;
height: fit-content;
inline-size: fit-content;
block-size: fit-content;
```

## Description

Ce mot-clé est utilisé avec des propriétés de dimensionnement telles que {{CSSxRef("width")}}, {{CSSxRef("height")}}, {{CSSxRef("block-size")}}, {{CSSxRef("inline-size")}}, {{CSSxRef("min-width")}} et {{CSSxRef("max-width")}}. Lorsqu'il est utilisé sur ces propriétés, la taille calculée se réfère à la [boîte de contenu](/fr/docs/Web/CSS/Reference/Values/box-edge#content-box) de l'élément.

Lorsque `fit-content` est défini, l'élément grandit ou rétrécit pour s'adapter à son contenu, mais cesse de s'étendre une fois que la dimension pertinente atteint la limite de taille de son conteneur.

La taille `fit-content` est calculée en utilisant la formule suivante&nbsp;:

```plain
min(max-content, max(min-content, stretch))
```

où, [`stretch`](/fr/docs/Web/CSS/Reference/Properties/width#stretch) correspond à la [marge de boîte](/fr/docs/Web/CSS/Reference/Values/box-edge#margin-box) de l'élément par rapport à la largeur de son [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block#identifier_le_bloc_englobant). Le mot-clé est essentiellement équivalent à `fit-content(stretch)`.

Vous pouvez activer les animations vers et depuis `fit-content` en utilisant la propriété {{CSSxRef("interpolate-size")}} et la fonction {{CSSxRef("calc-size()")}}.

## Exemple

### Dimensionner des boîtes avec `fit-content`

#### HTML

```html
<div class="container">
  <div class="item">Texte</div>
  <div class="item">Un peu plus de texte</div>
  <div class="item">
    Voyons maintenant le comportement avec du texte long, permettant ainsi de
    montrer le fonctionnement de fit-content !
  </div>
</div>
```

#### CSS

```css
.container {
  border: 2px solid #cccccc;
  padding: 10px;
  width: 20em;
}

.item {
  width: fit-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### Résultat

{{EmbedLiveSample("Dimensionner des boîtes avec `fit-content`", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Mot-clés de dimensionnement associés&nbsp;: {{CSSxRef("min-content")}}, {{CSSxRef("max-content")}}
- Le module [de dimensionnement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_sizing)
