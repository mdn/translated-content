---
title: caption-side
slug: Web/CSS/caption-side
---

{{CSSRef}}

La propriété **`caption-side`** permet de choisir l'emplacement de la légende d'un tableau (représentée par l'élément [`<caption>`](/fr/docs/Web/HTML/Reference/Elements/caption) du tableau). Les valeurs sont relatives au mode d'écriture (cf. [`writing-mode`](/fr/docs/Web/CSS/writing-mode)) du tableau.

{{InteractiveExample("CSS Demo: caption-side")}}

```css interactive-example-choice
caption-side: top;
```

```css interactive-example-choice
caption-side: bottom;
```

```html interactive-example
<section class="default-example" id="default-example">
  <table class="transition-all" id="example-element">
    <caption>
      Famous animals
    </caption>
    <tr>
      <th>Name</th>
      <th>Location</th>
    </tr>
    <tr>
      <td>Giraffe</td>
      <td>Africa</td>
    </tr>
    <tr>
      <td>Penguin</td>
      <td>Antarctica</td>
    </tr>
    <tr>
      <td>Sloth</td>
      <td>South America</td>
    </tr>
    <tr>
      <td>Tiger</td>
      <td>Asia</td>
    </tr>
  </table>
</section>
```

```css interactive-example
table {
  font-size: 1.2rem;
  text-align: left;
  color: #000;
}

th,
td {
  padding: 0.2rem 1rem;
}

caption {
  background: #fc3;
  padding: 0.5rem 1rem;
}

tr {
  background: #eee;
}

tr:nth-child(even) {
  background: #ccc;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
/* Valeurs directionnelles */
caption-side: top;
caption-side: bottom;

/* Valeurs logiques */
caption-side: block-start;
caption-side: block-end;
caption-side: inline-start;
caption-side: inline-end;

/* Valeur globales */
caption-side: inherit;
caption-side: initial;
caption-side: revert;
caption-side: revert-layer;
caption-side: unset;
```

La propriété `caption-side` se paramètre à l'aide d'un des mots-clés suivants.

### Valeurs

- `top`
  - : Un mot-clé qui indique que la boîte de la légende doit être positionnée au-dessus du tableau.
- `bottom`
  - : Un mot-clé qui indique que la boîte de la légende doit être positionnée en dessous du tableau.
- `block-start`
  - : Un mot-clé qui indique que la boîte de la légende doit être positionnée au bord du tableau situé au début de l'axe de bloc.
- `block-end`
  - : Un mot-clé qui indique que la boîte de la légende doit être positionnée au bord du tableau situé à la fin de l'axe de bloc.
- `inline-start`
  - : Un mot-clé qui indique que la boîte de la légende doit être positionnée au bord du tableau situé au début de l'axe en ligne.
- `inline-end`
  - : Un mot-clé qui indique que la boîte de la légende doit être positionnée au bord du tableau situé à la fin de l'axe en ligne.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.top caption {
  caption-side: top;
}

.bottom caption {
  caption-side: bottom;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid blue;
}
```

### HTML

```html
<table class="top">
  <caption>
    Une légende au-dessus du tableau
  </caption>
  <tr>
    <td>Des données d'un tableau</td>
    <td>Pfiou encore des données</td>
  </tr>
</table>

<br />

<table class="bottom">
  <caption>
    Une légende en dessous du tableau
  </caption>
  <tr>
    <td>Des données d'un tableau</td>
    <td>Pfiou encore des données</td>
  </tr>
</table>
```

### Résultat

{{EmbedLiveSample("","auto","160")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
