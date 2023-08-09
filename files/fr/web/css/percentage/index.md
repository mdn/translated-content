---
title: <percentage>
slug: Web/CSS/percentage
---

{{CSSRef}}

Le type de données CSS **`<percentage>`** représente une valeur exprimée en pourcentages. De nombreuses propriétés CSS utilisent des valeurs en pourcentages, la plupart du temps pour déterminer des tailles en fonction de la taille des éléments parent.

De nombreuses propriétés CSS utilisent des pourcentages : {{cssxref("width")}}, {{cssxref("margin")}}, {{cssxref("padding")}}, etc.. Les pourcentages peuvent aussi être vus avec {{cssxref("font-size")}}, où la taille du texte est directement en relation avec celle de son parent.

> **Note :** Seules les valeurs calculées sont héritées. Ainsi, même si une valeur en pourcentage est utilisée sur la propriété parent, une valeur réelle, comme une largeur en pixel pour une valeur {{cssxref("&lt;length&gt;")}}, sera accessible sur la propriété héritée, pas la valeur en pourcentage.

## Syntaxe

Les valeurs de type `<percentage>` sont formées d'un {{cssxref("&lt;number&gt;")}} immédiatement suivi par le signe pourcentage `%`. Comme pour toutes les valeurs avec unité en CSS, il n'y a aucun espace entre le '%' et le nombre.

## Interpolation

Les valeurs du type `<percentage>` peuvent être interpolées de manière à rendre les animations possibles. Dans ce cas l'interpolation se fait par des nombres réels à virgule flottante. La rapidité de l'interpolation est déterminée par la {{cssxref("timing-function","fonction de temporisation","",1)}} associée à l'animation.

## Exemples

### `width` et `margin-left`

```html
<div style="background-color:#0000FF;">
  <div style="width:50%;margin-left:20%;background-color:#00FF00;">
    width : 50%, left-margin : 20%
  </div>
  <div style="width:30%;margin-left:60%;background-color:#FF0000;">
    width : 30%, left-margin : 60%
  </div>
</div>
```

Le fragment de HTML précédent sera affiché de cette façon :

{{EmbedLiveSample('width_et_margin-left', '100%', '140')}}

### `font-size`

```html
<div style="font-size:18px;">
  <p>Texte en taille normale (18px)</p>
  <p><span style="font-size:50%;">50%</span></p>
  <p><span style="font-size:200%;">200%</span></p>
</div>
```

Le fragment HTML précédent donnera ce résultat :

{{EmbedLiveSample('font-size')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
