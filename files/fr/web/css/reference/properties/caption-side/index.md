---
title: caption-side
slug: Web/CSS/Reference/Properties/caption-side
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`caption-side`** place le contenu de la {{HTMLElement("caption", "légende")}} d'un tableau sur le côté défini. Les valeurs sont relatives au mode d'écriture ({{CSSxRef("writing-mode")}}) du tableau.

{{InteractiveExample("Démonstration CSS&nbsp;: caption-side")}}

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
      Animaux célèbres
    </caption>
    <tr>
      <th>Nom</th>
      <th>Lieu</th>
    </tr>
    <tr>
      <td>Girafe</td>
      <td>Afrique</td>
    </tr>
    <tr>
      <td>Manchot</td>
      <td>Antarctique</td>
    </tr>
    <tr>
      <td>Paresseux</td>
      <td>Amérique du Sud</td>
    </tr>
    <tr>
      <td>Tigre</td>
      <td>Asie</td>
    </tr>
  </table>
</section>
```

```css interactive-example
table {
  font-size: 1.2rem;
  text-align: left;
  color: black;
}

th,
td {
  padding: 0.2rem 1rem;
}

caption {
  background: #ffcc33;
  padding: 0.5rem 1rem;
}

tr {
  background: #eeeeee;
}

tr:nth-child(even) {
  background: #cccccc;
}
```

## Syntaxe

```css
/* Valeurs directionnelles */
caption-side: top;
caption-side: bottom;

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

> [!NOTE]
> Le module [des propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values) définit deux valeurs logiques, `inline-start` et `inline-end`, pour placer la boîte de légende respectivement au début et à la fin de l'axe en ligne du tableau. Ces valeurs ne sont prises en charge par aucun navigateur.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les légendes au-dessus et en dessous

#### HTML

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

#### CSS

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

#### Résultat

{{EmbedLiveSample("Définir les légendes au-dessus et en dessous", "auto", 160)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("caption")}}
- [Les tableaux CSS](/fr/docs/Web/CSS/Guides/Table)
- [Les propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
