---
title: column-gap (grid-column-gap)
slug: Web/CSS/column-gap
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/column-gap
---
{{CSSRef}}

La propriété **`column-gap`** permet de définir la taille des espaces ({{glossary("gutters", "gouttières")}}) entre les colonnes d'un élément.

{{EmbedInteractiveExample("pages/css/column-gap.html")}}

La propriété `column-gap` était initialement définie dans le module de spécification [Colonnes CSS](/fr/docs/Web/CSS/CSS_Columns). Cette définition a depuis été élargie afin de pouvoir être utilisée dans les différents modes de disposition et fait désormais partie du module de spécification [_Box Alignment_ (alignement des boîtes en CSS)](/fr/docs/Web/CSS/CSS_Box_Alignment). Cette propriété peut être utilisée pour les dispositions multi-colonnes, les dispositions flexibles et les dispositions en grille.

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
column-gap: revert;
column-gap: unset;
```

### Valeurs

- `normal`
  - : Un mot-clé qui indique qu'on souhaite utiliser l'espacement par défaut créé par le navigateur. Pour les dispositions en colonnes, cette valeur correspond à `1em`, sinon elle correspond à `0`.
- {{CSSxRef("&lt;length&gt;")}}
  - : Une valeur de longueur (type {{CSSxRef("&lt;length&gt;")}}) qui définit la taille de l'espace entre les colonnes. Cette valeur peut être nulle mais ne doit pas être négative.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Une valeur de pourcentage (type {{CSSxRef("&lt;percentage&gt;")}}) qui définit la taille de l'espace entre les colonnes. Cette valeur peut être nulle mais ne doit pas être négative.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Disposition flexible

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
  border: 1px solid green;
  background-color: lime;
  flex: auto;
}
```

#### Résultat

{{EmbedLiveSample("Disposition_flexible","auto","120px")}}

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
  border: 1px solid green;
  background-color: lime;
}
```

#### Résultat

{{EmbedLiveSample("Disposition_en_grille", "auto", "120px")}}

### Disposition multi-colonnes

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

## Spécifications

{{Specifications("css.properties.column-gap.grid_context")}}

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés relatives aux gouttières : {{CSSxRef("row-gap")}}, {{CSSxRef("gap")}}
- Guide sur les grilles : _[Les concepts de base des grilles CSS : les gouttières](/fr/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#les_gouttières)_
- Guide sur la disposition multi-colonnes : _[Mettre en forme les colonnes](/fr/docs/Web/CSS/CSS_Columns/Styling_Columns)_
