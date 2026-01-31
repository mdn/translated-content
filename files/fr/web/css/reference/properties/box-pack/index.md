---
title: box-pack
slug: Web/CSS/Reference/Properties/box-pack
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Cette propriété fait partie de la première version du standard pour les boîtes flexibles (<i lang="en">flexbox</i> en anglais) et sera remplacée dans une prochaine version.

Les propriétés [CSS](/fr/docs/Web/CSS) **`-moz-box-pack`** et **`-webkit-box-pack`** définissent la façon dont une boîte `-moz-box` ou `-webkit-box` groupe son contenu dans la direction de la disposition. L'effet de cette propriété n'est visible que s'il reste de l'espace supplémentaire dans la boîte. Pour plus de détails, se référer à la page [Flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) qui décrit les différentes propriétés des boîtes flexibles.

La direction de la disposition dépend de l'orientation de l'élément&nbsp;: horizontale ou verticale.

## Syntaxe

```css
/*  Valeurs avec un mot-clé */
box-pack: start;
box-pack: center;
box-pack: end;
box-pack: justify;

/* Valeurs globales */
box-pack: inherit;
box-pack: initial;
box-pack: unset;
```

La propriété `box-pack` est définie avec l'une des valeurs de mot-clé listées ci-dessous.

### Valeurs

- `start`
  - : La boîte regroupe son contenu au début. L'espace restant est donc laissé à la fin.
- `center`
  - : La boîte regroupe son contenu au centre. L'espace restant est divisé de façon égale entre le début et la fin.
- `end`
  - : La boîte regroupe son contenu à la fin. L'espace restant est donc laissé au début.
- `justify`
  - : L'espace est réparti entre chacun des éléments fils sans qu'un espace soit placé avant le premier fils ou après le dernier. S'il y a un seul élément fils, la valeur est synonyme de `start`.

## Notes

Le bord de la boîte désigné comme _début_ pour le regroupement dépend de l'orientation et de la direction de la boîte&nbsp;:

- Pour les éléments horizontaux, le _début_ est le bord supérieur.
- Pour les éléments verticaux, le _début_ est le bord gauche.

<table class="standard-table">
  <tbody>
    <tr>
      <th></th>
      <th><strong>Normal</strong></th>
      <th><strong>Inverse</strong></th>
    </tr>
    <tr>
      <th><strong>Horizontal</strong></th>
      <td>gauche</td>
      <td>droit</td>
    </tr>
    <tr>
      <th><strong>Vertical</strong></th>
      <td>hau</td>
      <td>bas</td>
    </tr>
  </tbody>
</table>

Le bord opposé au début est désigné comme la _fin_.

Si le regroupement utilise l'attribut `pack` de l'élément, le style est ignoré.

## Définition formelle

{{CSSInfo}}

### Syntaxe formelle

{{CSSSyntaxRaw(`box-pack = start | center | end | justify`)}}

## Exemples

### Exemples avec `box-pack`

```css
div.exemple {
  border-style: solid;

  display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */

  /* On rend la boîte plus grande que son
     contenu pour avoir de l'espace pour box-pack */
  height: 300px;
  /* On rend la boîte suffisament large pour que
     contenu soit centré horizontalemen */
  width: 300px;

  /* On oriente les éléments fils verticalement */
  -moz-box-orient: vertical; /* Mozilla */
  -webkit-box-orient: vertical; /* WebKit */

  /* On aligne les fils sur le centre horizontal */
  -moz-box-align: center; /* Mozilla */
  -webkit-box-align: center; /* WebKit */

  /* On groupe les éléments fils en bas de la boîte */
  -moz-box-pack: end; /* Mozilla */
  -webkit-box-pack: end; /* WebKit */
}

div.exemple p {
  /* On réduit les éléments fils, pour
     qu'il y ait de la place pour box-align */
  width: 200px;
}
```

```html
<div class="exemple">
  <p>Je serai 2nd en partant du bas de div.exemple, centré horizontalement.</p>
  <p>Je serai tout en bas de div.exemple, centré horizontalement.</p>
</div>
```

{{EmbedLiveSample("Exemples avec `box-pack`", 310, 310)}}

## Spécifications

Ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("box-orient")}}
- La propriété {{CSSxRef("box-direction")}}
- La propriété {{CSSxRef("box-align")}}
