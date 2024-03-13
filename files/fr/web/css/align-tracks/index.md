---
title: align-tracks
slug: Web/CSS/align-tracks
l10n:
  sourceCommit: 02024642bdb12940509cb4c7e2e60cbc3d62bf21
---

{{CSSRef}}

{{SeeCompatTable}}

La propriété CSS **`align-tracks`** définit l'alignement dans l'axe de maçonnerie pour les conteneurs de grille qui ont [`masonry`](/fr/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout) comme axe de bloc.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
align-tracks: start;
align-tracks: space-between;
align-tracks: center;
align-tracks: start, center, end;

/* Valeurs globales */
align-tracks: inherit;
align-tracks: initial;
align-tracks: revert;
align-tracks: unset;
```

La propriété peut prendre une seule valeur, auquel cas les pistes sont toutes alignées de la même façon. Si c'est une liste de valeur qui est utilisée, la première s'applique à la première piste selon l'axe de la grille, la deuxième valeur à la deuxième piste et ainsi de suite.

S'il y a moins de valeurs que de pistes, la dernière valeur est utilisée pour l'ensemble des pistes restantes. S'il y a plus de valeurs que de pistes, les valeurs en excès sont ignorées.

### Valeur

- `start`
  - : Les éléments sont regroupés ensemble au début du conteneur d'alignement selon l'axe de maçonnerie.
- `end`
  - : Les éléments sont regroupés ensemble à la fin du conteneur d'alignement selon l'axe de maçonnerie.
- `center`
  - : Les éléments sont regroupés ensemble au centre du conteneur d'alignement selon l'axe de maçonnerie.
- `normal`
  - : Agit comme `start`.
- `baseline first baseline`
  `last baseline`
  - : Indique la participation à l'alignement par rapport à la ligne de base. Aligne la ligne de base de l'alignement de la boîte par rapport à la première ou à la dernière ligne de base définie selon la ligne de base correspondante dans le premier ou dernier ensemble de lignes de base partagées parmi les boîtes du groupe de partage pour les lignes de base.
    L'alignement par défaut pour `first baseline` correspond à `start`, celui par défaut pour `last baseline` correspond à `end`.
- `space-between`
  - : Les éléments sont distribués de façon homogène au sein du conteneur le long de l'axe de maçonnerie. L'espacement est le même entre les éléments adjacents. Le premier élément est collé au bord du début et le dernier élément est collé au bord de fin.
- `space-around`
  - : Les éléments sont distribués de façon homogène au sein du conteneur le long de l'axe de maçonnerie. L'espacement est le même entre les éléments adjacents. L'espacement avant le premier élément et après le dernier élément est égal à la moitié de l'espacement entre les éléments adjacents.
- `space-evenly`
  - : Les éléments sont distribués de façon homogène au sein du conteneur le long de l'axe de maçonnerie. L'espacement est le même entre les éléments adjacents, entre le bord de début et le premier élément, et entre le bord de fin et le dernier élément.
- `stretch`
  - : Les éléments sont étirés le long de l'axe de maçonnerie pour remplir la boîte de contenu. Les éléments avec une taille définie ne sont pas étirés.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Disposition en maçonnerie avec plusieurs valeurs pour `align-tracks`

{{EmbedGHLiveSample("css-examples/grid/masonry/align-tracks.html", '100%', 900)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés CSS associées&nbsp;:
  - [`justify-tracks`](/fr/docs/Web/CSS/justify-tracks)
  - [`masonry-auto-flow`](/fr/docs/Web/CSS/masonry-auto-flow)
