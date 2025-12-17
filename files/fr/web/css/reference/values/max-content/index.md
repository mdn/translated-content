---
title: max-content
slug: Web/CSS/Reference/Values/max-content
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le mot-clé de dimensionnement `max-content` représente la [taille intrinsèque maximale](/fr/docs/Glossary/Intrinsic_Size#taille_intrinsèque_maximale) d'un élément.
Ce mot-clé étend l'élément à la plus grande taille nécessaire pour afficher son contenu sans retour à la ligne souple.
Pour le contenu textuel, ce mot-clé n'effectue aucun retour à la ligne, même si cela provoque un dépassement.

La propriété {{CSSxRef("interpolate-size")}} et la fonction {{CSSxRef("calc-size()")}} peuvent être utilisées pour permettre des animations vers et depuis `max-content`.

## Syntaxe

```css
/* Utilisé comme valeur de longueur */
width: max-content;
inline-size: max-content;
height: max-content;
block-size: max-content;

/* Utilisé dans les pistes de grille */
grid-template-columns: 200px 1fr max-content;
```

## Exemples

### Dimensionner des boîtes avec `max-content`

#### HTML

```html
<div id="container">
  <div class="item">Élément</div>
  <div class="item">
    Élément avec plus de texte qui dépassera la boîte à largeur fixe.
  </div>
</div>
```

#### CSS

```css
#container {
  background-color: #8cffa0;
  padding: 10px;
  width: 200px;
}

.item {
  width: max-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### Résultat

{{EmbedLiveSample("Dimensionner des boîtes avec `max-content`", "100%", 200)}}

### Dimensionner des colonnes de grille avec `max-content`

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
  grid-template-columns: max-content max-content 1fr;
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

{{EmbedLiveSample("Dimensionner des colonnes de grille avec `max-content`", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Mots-clés de dimensionnement apparentés&nbsp;: {{CSSxRef("min-content")}}, {{CSSxRef("fit-content")}}
- [Module de dimensionnement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_sizing)
