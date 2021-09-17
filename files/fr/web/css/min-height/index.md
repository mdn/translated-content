---
title: min-height
slug: Web/CSS/min-height
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/min-height
---
{{CSSRef}}

La propriété** `min-height`** est utilisée afin de définir la hauteur minimale d'un élément. Elle empêche ainsi que la valeur de la propriété {{cssxref("height")}} devienne inférieure à `min-height`.

{{EmbedInteractiveExample("pages/css/min-height.html")}}

La valeur de la propriété `min-height` surcharge celles de {{cssxref("max-height")}} et {{cssxref("height")}} lorsque `min-height` est supérieure.

## Syntaxe

```css
/* Valeur de longueur */
/* Type <length>      */
min-height: 3.5em;

/* Valeur relative au bloc */
/* Type <percentage>       */
min-height: 10%;

/* Valeurs avec un mot-clé */
min-height: max-content;
min-height: min-content;
min-height: fit-content;
min-height: fill-available;

/* Valeurs globales */
min-height: inherit;
min-height: initial;
min-height: unset;
```

### Valeurs

- `<length>`
  - : La hauteur minimale exprimée de façon absolue. Voir la page {{cssxref("&lt;length&gt;")}} pour les différentes unités. Les valeurs négatives sont interdites, si elles sont utilisées, la déclaration sera considérée comme invalide.
- `<percentage>`
  - : La hauteur minimale exprimée de façon relative à la hauteur du bloc englobant grâce à une valeur de type {{cssxref("&lt;percentage&gt;")}}. Les valeurs négatives sont interdites, si elles sont utilisées, la déclaration sera considérée comme invalide.
- `max-content` {{experimental_inline}}
  - : La hauteur intrinsèque préférée.
- `min-content` {{experimental_inline}}
  - : La hauteur intrinsèque minimale préférée.
- `fill-available`{{experimental_inline}}
  - : La hauteur du bloc englobant moins celle de la marge verticale, de la bordure et du remplissage (_padding_). Certains navigateurs implémentent cette valeur avec un mot-clé d'une ancienne version : `available`.
- `fit-content` {{experimental_inline}}
  - : Selon la spécification CSS3 sur les boîtes (CSS3 Box), cette valeur est synonyme de `min-content.` La spécification CSS3 sur le dimensionnement (CSS3 Sizing) définit un algorithme plus complexe mais qui n'est implémenté par aucun navigateur, y compris de façon expérimentale.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div> Lorem ipsum tralala
<p class="exemple">toto</p>
 Duis aute irure dolor in reprehender
</div>
```

### CSS

```css
div {
  height: 150px;
  border: solid 1px red;
}

.exemple {
  min-height: 70%;
  border: solid 1px blue;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaires</th>
    </tr>
    <tr>
      <td>
        {{SpecName('CSS3 Sizing', '#width-height-keywords', 'min-height')}}
      </td>
      <td>{{Spec2('CSS3 Sizing')}}</td>
      <td>
        Ajout des mots-clés <code>max-content</code>, <code>min-content</code>,
        <code>fit-content</code> et <code>fill-available</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('CSS3 Flexbox', '#min-auto', 'min-height')}}
      </td>
      <td>{{Spec2('CSS3 Flexbox')}}</td>
      <td>
        <p>
          Ajout du mot-clé <code>auto</code> et définition de ce mot-clé comme
          valeur initiale.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('CSS3 Transitions', '#animatable-css', 'min-height')}}
      </td>
      <td>{{Spec2('CSS3 Transitions')}}</td>
      <td><code>min-height</code> peut désormais être animée.</td>
    </tr>
    <tr>
      <td>
        {{SpecName('CSS2.1', 'visudet.html#min-max-heights', 'min-height')}}
      </td>
      <td>{{Spec2('CSS2.1')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.min-height")}}

## Voir aussi

- {{cssxref("width")}}
- {{cssxref("height")}}
- {{cssxref("max-height")}}
- [Le modèle de boîtes](/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- {{cssxref("min-width")}}
- {{cssxref("box-sizing")}}
- {{cssxref("height")}}
- {{cssxref("max-height")}}
