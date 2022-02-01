---
title: box-pack
slug: Web/CSS/box-pack
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/box-pack
---
{{CSSRef}}{{Non-standard_header}}

> **Attention :** Cette propriété fait partie de la première version du standard pour les boîtes flexibles (_flexbox_) et sera remplacée dans une prochaine version.

Les propriétés CSS **`-moz-box-pack`** et **`-webkit-box-pack`** définissent la façon dont une boîte `-moz-box` ou `-webkit-box` groupe son contenu dans la direction de la disposition. L'effet de cette propriété n'est visible que s'il reste de l'espace supplémentaire dans la boîte. Pour plus de détails, se référer à la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) qui décrit les différentes propriétés des boîtes flexibles.

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

Voir la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) pour plus d'informations.

La direction de la disposition dépend de l'orientation de l'élément : horizontale ou verticale.

## Syntaxe

Cette propriété se définit grâce à l'un des mots-clés définis ci-après.

### Valeurs

- `start`
  - : La boîte regroupe son contenu au début. L'espace restant est donc laissé à la fin.
- `center`
  - : La boîte regroupe son contenu au centre. L'espace restant est divisé de façon égale entre le début et la fin.
- `end`
  - : La boîte regroupe son contenu à la fin. L'espace restant est donc laissé au début.
- `justify`
  - : L'espace est réparti entre chacun des éléments fils sans qu'un espace soit placé avant le premier fils ou après le dernier. S'il y a un seul élément fils, la valeur est synonyme de `start`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

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
  -moz-box-pack: end;             /* Mozilla */
  -webkit-box-pack: end;          /* WebKit */
}

div.exemple p {
  /* On réduit les éléments fils, pour
     qu'il y ait de la place pour box-align */
  width: 200px;
}
```

### HTML

```html
<div class="exemple">
  <p>Je serai 2nd en partant du bas de div.exemple, centré horizontalement.</p>
  <p>Je serai tout en bas de div.exemple, centré horizontalement.</p>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples', 310, 310)}}

## Notes

Le « début » et la « fin » de la boîte dépendent de l'orientation et de la direction de la boîte. Voici le tableau indiquant le début de la boîte en fonction de l'orientation et de la direction :

<table class="standard-table">
  <tbody>
    <tr>
      <th> </th>
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

Si le regroupement utilise l'attribut `pack` de l'élément, le style est ignoré.

## Spécifications

Cette propriété n'est pas standard mais une propriété semblable est apparue [avec les brouillons de spécification pour les boîtes flexibles CSS3](https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/) et a été remplacée dans les versions suivantes de la spécification.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.box-pack")}}

## Voir aussi

- {{cssxref("box-orient")}},
- {{cssxref("box-direction")}},
- {{cssxref("box-align")}}
