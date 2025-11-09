---
title: column-gap (grid-column-gap)
slug: Web/CSS/Reference/Properties/column-gap
original_slug: Web/CSS/column-gap
---

{{CSSRef}}

La propriété **`column-gap`** permet de définir la taille des espaces ([gouttières](/fr/docs/Glossary/Gutters)) entre les colonnes d'un élément.

{{InteractiveExample("CSS Demo: column-gap")}}

```css interactive-example-choice
column-gap: 0;
```

```css interactive-example-choice
column-gap: 10%;
```

```css interactive-example-choice
column-gap: 1em;
```

```css interactive-example-choice
column-gap: 20px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 200px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

La propriété `column-gap` était initialement définie dans le module de spécification [Colonnes CSS](/fr/docs/Web/CSS/Guides/Multicol_layout). Cette définition a depuis été élargie afin de pouvoir être utilisée dans les différents modes de disposition et fait désormais partie du module de spécification [_Box Alignment_ (alignement des boîtes en CSS)](/fr/docs/Web/CSS/Guides/Box_alignment). Cette propriété peut être utilisée pour les dispositions multi-colonnes, les dispositions flexibles et les dispositions en grille.

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
- [`<length>`](/fr/docs/Web/CSS/Reference/Values/length)
  - : Une valeur de longueur (type [`<length>`](/fr/docs/Web/CSS/Reference/Values/length)) qui définit la taille de l'espace entre les colonnes. Cette valeur peut être nulle mais ne doit pas être négative.
- [`<percentage>`](/fr/docs/Web/CSS/Reference/Values/percentage)
  - : Une valeur de pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/Reference/Values/percentage)) qui définit la taille de l'espace entre les colonnes. Cette valeur peut être nulle mais ne doit pas être négative.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

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

{{EmbedLiveSample("disposition_flexible","auto","130px")}}

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

{{EmbedLiveSample("disposition_en_grille","auto", "130px")}}

### Disposition multi-colonnes

#### HTML

```html
<p class="content-box">
  Un texte sur plusieurs colonnes avec une gouttière de 40px paramétrée grâce à
  la propriété `column-gap`. C'est plutôt pas mal comme effet non ?
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

{{EmbedLiveSample("disposition_multi-colonnes", "auto", "130px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés relatives aux gouttières&nbsp;: [`row-gap`](/fr/docs/Web/CSS/Reference/Properties/row-gap), [`gap`](/fr/docs/Web/CSS/Reference/Properties/gap)
- Guide sur les grilles&nbsp;: _[Les concepts de base des grilles CSS&nbsp;: les gouttières](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#les_gouttières)_
- Guide sur la disposition multi-colonnes&nbsp;: _[Mettre en forme les colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)_
