---
title: box-decoration-break
slug: Web/CSS/box-decoration-break
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/box-decoration-break
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`box-decoration-break`** définit la façon dont les propriétés {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}}, {{cssxref("border-image")}}, {{cssxref("box-shadow")}}, {{cssxref("margin")}} et {{cssxref("clip")}} sont appliquées sur un élément lorsque la boîte de celui-ci est fragmentée. La fragmentation apparaît lorsqu'une boîte en ligne s'étend sur plusieurs lignes ou lorsqu'un bloc s'étend sur plus d'une colonne lorsque qu'il est dans conteneur disposé en colonne ou lorsqu'un bloc déclenche un saut de page sur un média imprimé. Chaque « morceau » de l'élément est alors appelé un fragment.

{{EmbedInteractiveExample("pages/css/box-decoration-break.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
box-decoration-break: slice;
box-decoration-break: clone;

/* Valeurs globales */
box-decoration-break: initial;
box-decoration-break: inherit;
box-decoration-break: unset;
```

La propriété `box-decoration-break` est définie avec l'un des mots-clés définis ci-après.

### Valeurs

- `clone`
  - : Le rendu de chaque fragment de boîte est obtenu indépendamment avec la bordure, le remplissage, la marge indiqués pour chacun des fragments. Les propriétés {{cssxref("border-radius")}}, {{cssxref("border-image")}} et {{cssxref("box-shadow")}} sont appliquées indépendamment à chaque fragment. L'arrière-plan est dessiné indépendamment pour chaque fragment (ainsi, une image d'arrière-plan avec {{cssxref("background-repeat")}}: `no-repeat` pourra être présente à plusieurs reprises).
- `slice`
  - : L'élément est initialement affiché comme si la boîte n'était pas fragmentée puis le rendu de cette boîte hypothétique est découpé en fragments pour chaque ligne/colonne/page. On notera que la boîte hypothétique peut être différente pour chaque fragment car elle utilise sa propre hauteur (si la rupture apparaît dans la direction de l'élément) ou sa propre largeur (si la rupture apparaît dans la direction orthogonale). C'est la valeur initiale de la propriété.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Gestion des fragments pour les boîtes en ligne

#### Avec `slice` (valeur initiale)

##### CSS

```css
.exemple {
  background: linear-gradient(to bottom right, yellow, green);
  box-shadow: 8px 8px 10px 0px deeppink, -5px -5px 5px 0px blue, 5px 5px 15px 0px yellow;
  padding: 0em 1em;
  border-radius: 16px;
  border-style: solid;
  margin-left: 10px;
  font: 24px sans-serif;
  line-height: 2;
}
```

##### HTML

```html
<span class="exemple">The<br>quick<br>orange fox</span>
```

##### Résultat _live_

{{EmbedLiveSample("Avec_slice_(valeur_initiale)","200","200")}}

##### Image équivalente

![A screenshot of the rendering of an inline element styled with box-decoration-break:slice and styles given in the example.](box-decoration-break-inline-slice.png)

#### Avec `clone`

##### CSS

```css
.exemple {
  background: linear-gradient(to bottom right, yellow, green);
  box-shadow: 8px 8px 10px 0px deeppink, -5px -5px 5px 0px blue, 5px 5px 15px 0px yellow;
  padding: 0em 1em;
  border-radius: 16px;
  border-style: solid;
  margin-left: 10px;
  font: 24px sans-serif;
  line-height: 2;

 -webkit-box-decoration-break: clone;
 -o-box-decoration-break: clone;
  box-decoration-break: clone;
}
```

##### HTML

```html
<span class="exemple">The<br>quick<br>orange fox</span>
```

##### Résultat _live_

{{EmbedLiveSample("Avec_clone","200","200")}}

##### Image équivalente

![A screenshot of the rendering of an inline element styled with box-decoration-break:clone and styles given in the example](box-decoration-break-inline-clone.png)

### Gestion des fragments pour les boîtes en bloc

Voici ce qu'on pourra obtenir de façon analogue avec un élément de bloc sans fragmentation:

![A screenshot of the rendering of the block element used in the examples without any fragmentation.](box-decoration-break-block.png)

En décomposant le bloc sur trois colonnes, normalement (`slice`), on aura :

![A screenshot of the rendering of the fragmented block used in the examples styled with box-decoration-break:slice.](box-decoration-break-block-slice.png)

Si on applique `box-decoration-break:clone`, voici le résultat :

![A screenshot of the rendering of the fragmented block used in the examples styled with box-decoration-break:clone.](box-decoration-break-block-clone.png)

## Spécifications

| Spécification                                                                                            | État                                     | Commentaires        |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------- |
| {{SpecName('CSS3 Fragmentation', '#break-decoration', 'box-decoration-break')}} | {{Spec2('CSS3 Fragmentation')}} | Définition initiale |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.box-decoration-break")}}

## Voir aussi

- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
