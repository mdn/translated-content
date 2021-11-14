---
title: column-gap
slug: Web/CSS/column-gap
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/column-gap
---
{{CSSRef}}

La propriété **`column-gap`** permet de définir l'espace entre les colonnes d'un élément.

{{EmbedInteractiveExample("pages/css/column-gap.html")}}{{EmbedInteractiveExample("pages/css/grid-column-gap.html")}}

La propriété `column-gap` était initialement définie dans le module de spécification [_Multi-column Layout_ (disposition en colonnes)](/fr/docs/Web/CSS/Colonnes_CSS). Cette définition a depuis été élargie afin de pouvoir être utilisée dans les différents modes de disposition et fait désormais partie du module de spécification _[Box Alignment](/fr/docs/Web/CSS/CSS_Box_Alignment)_. Cette propriété peut être utilisée pour les dispositions en colonnes, les dispositions flexibles ou les disposition en grille.

> **Note :** Le module de spécification _[CSS Grid Layout](/fr/docs/Web/CSS/CSS_Grid_Layout)_ définissait initialement la propriété `grid-column-gap`. Cette version préfixée a été remplacée par `column-gap`. Toutefois, à des fins de compatibilité envers les navigateurs qui ne prendraient pas en charge cette évolution, mieux vaut utiliser les deux versions (voir l'exemple interactif ci-avant).

## Syntaxe

```css
/* Valeur avec un mot-clé */
column-gap: normal;

/* Valeurs de longueur */
/* Type <length>       */
column-gap: 3px;
column-gap: 2.5em;

/* Valeurs de pourcentage */
/* Type <percentage> */
column-gap: 3%;

/* Valeurs globales */
column-gap: inherit;
column-gap: initial;
column-gap: unset;
```

### Valeurs

- `normal`
  - : Un mot-clé qui indique qu'on souhaite utiliser l'espacement par défaut créé par le navigateur. Pour les dispositions en colonnes, cette valeur correspond à `1em`, sinon elle correspond à `0`.
- `<length>`
  - : Une valeur de longueur (type {{cssxref("&lt;length&gt;")}}) qui définit la taille de l'espace entre les colonnes. Cette valeur peut être nulle mais ne doit pas être négative.
- `<percentage>`
  - : Une valeur de pourcentage (type {{cssxref("&lt;percentage&gt;")}} qui définit la taille de l'espace entre les colonnes. Cette valeur peut être nulle mais ne doit pas être négative.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Disposition flexible

{{SeeCompatTable}}

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  height: 100px;
  column-gap: 20px;
}

#flexbox > div {
  border: 1opx solid green;
  background-color: lime;
  flex: auto;
}
```

#### Résultat

{{EmbedLiveSample("Disposition_flexible","auto","120px")}}

### Disposition en colonnes

#### HTML

```html
<p class="content-box">
  Un texte sur plusieurs colonnes avec une gouttière
  de 40px paramétrée grâce à la propriété `column-gap`.
  C'est plutôt pas mal comme effet non ?
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  column-gap: 40px;
}
```

#### Résultat

{{EmbedLiveSample("Disposition_en_colonnes", "auto", "120px")}}

### Disposition en grille

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  column-gap: 20px;
}

#grid > div {
  background-color: lime;
}
```

```css hidden
#grid {
  grid-column-gap: 20px;
}
```

#### Résultat

{{EmbedLiveSample("Disposition_en_grille", "auto", "120px")}}

## Spécifications

| Spécification                                                                            | État                                     | Commentaires                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------- |
| {{SpecName("CSS3 Box Alignment", "#column-row-gap", "column-gap")}} | {{Spec2("CSS3 Box Alignment")}} | Applique cette propriété aux grilles et aux boîtes flexibles (_flexbox_). |
| {{SpecName("CSS3 Grid", "#gutters", "column-gap")}}                     | {{Spec2("CSS3 Grid")}}             | Définition de l'impact de cette propriété sur les dispositions en grille. |
| {{SpecName("CSS3 Multicol", "#column-gap", "column-gap")}}             | {{Spec2("CSS3 Multicol")}}     | Définition initiale.                                                      |

{{cssinfo}}

## Compatibilité des navigateurs

### Prise en charge pour les dispositions flexibles

{{Compat("css.properties.column-gap.flex_context")}}

### Prise en charge pour les dispositions en grille

{{Compat("css.properties.column-gap.grid_context")}}

### Prise en charge pour les dispositions en colonnes

{{Compat("css.properties.column-gap.multicol_context")}}

## Voir aussi

- {{cssxref("row-gap")}}
- {{cssxref("gap")}}
- Guide sur les boîtes flexibles : _[Concepts de base des flexbox](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Concepts_de_base_flexbox)_
- Guide sur les grilles : _[Concepts de base des grilles : les gouttières](/fr/docs/Web/CSS/CSS_Grid_Layout/Les_concepts_de_base#Les_gouttières)_
- Guide sur la disposition multi-colonnes : _[Mettre en forme les colonnes](/fr/docs/Web/CSS/CSS_Columns/Styling_Columns)_
