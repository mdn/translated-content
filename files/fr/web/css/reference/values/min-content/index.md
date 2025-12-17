---
title: min-content
slug: Web/CSS/Reference/Values/min-content
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le mot-clé de dimensionnement `min-content` représente la [taille intrinsèque minimale](/fr/docs/Glossary/Intrinsic_Size#taille_intrinsèque_minimale) d'un élément.
Ce mot-clé réduit l'élément à la plus petite taille possible sans provoquer de dépassement évitable de son contenu.
Pour le contenu textuel, ce mot-clé force le retour à la ligne à chaque opportunité (comme les espaces entre les mots), et l'élément sera seulement aussi large que le mot le plus long.

La propriété {{CSSxRef("interpolate-size")}} et la fonction {{CSSxRef("calc-size()")}} peuvent être utilisées pour permettre des animations vers et depuis `min-content`.

## Syntaxe

```css
/* Utilisé comme valeur de longueur */
width: min-content;
inline-size: min-content;
height: min-content;
block-size: min-content;

/* Utilisé dans les pistes de grille */
grid-template-columns: 200px 1fr min-content;
```

## Exemples

### Dimensionner des boîtes avec `min-content`

#### HTML

```html
<div class="item">Élément</div>
<div class="item">Élément avec plus de texte.</div>
```

#### CSS

```css
.item {
  width: min-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### Résultat

{{EmbedLiveSample("Dimensionner des boîtes avec `min-content`", "100%", 200)}}

### Dimensionner des colonnes de grille avec `min-content`

#### HTML

```html
<div id="container">
  <div>Élément</div>
  <div>Élément avec plus de texte.</div>
  <div>Élément flexible</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: min-content min-content 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

#### Résultat

{{EmbedLiveSample("Dimensionner des colonnes de grille avec `min-content`", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Mots-clés de dimensionnement apparentés&nbsp;: {{CSSxRef("max-content")}}, {{CSSxRef("fit-content")}}
- [Module de dimensionnement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_sizing)
