---
title: box-sizing
slug: Web/CSS/box-sizing
tags:
  - Boîtes
  - CSS
  - Mocèle de Boîte CSS
  - Propriété CSS
  - Reference
  - border-box
  - box-sizing
  - content-box
  - height
  - modèle de boîte
  - size
  - width
translation_of: Web/CSS/box-sizing
---
{{CSSRef}}

La propriété CSS **`box-sizing`** définit la façon dont la hauteur et la largeur totale d'un élément est calculée (avec [le modèle de boîte CSS](/fr/docs/CSS/Modèle_de_boîte)).

{{EmbedInteractiveExample("pages/css/box-sizing.html")}}

En CSS, la largeur et la hauteur affectées à un élément s'appliquent par défaut à la boîte de contenu (_content box_) de l'élément. Si l'élément possède une bordure (_border_) ou du remplissage (_padding_), celui-ci est ajouté à la largeur et/ou à la hauteur de la boîte affichée à l'écran. Cela signifie qu'il faut ajuster les valeurs de hauteur et de largeur afin qu'elles permettent d'ajouter n'importe quelle bordure ou n'importe quel remplissage qui serait ajouté par la suite.

La propriété `box-sizing` peut être utilisée afin d'ajuster ce comportement :

- `content-box` est la valeur par défaut et correspond au comportement par défaut décrit ci-avant. Si on définit un élément avec une largeur de 100 pixels, la boîte de contenu de cet élément mesurera 100 pixels de large et la largeur de la bordure et/ou du remplissage sera alors ajoutée pour constituer la largeur finalement affichée.
- `border-box` indique au navigateur de prendre en compte la bordure et le remplissage dans la valeur définie pour la largeur et la hauteur. Autrement dit, si on définit un élément avec une largeur de 100 pixels, ces 100 pixels inclueront la bordure et le remplissage éventuellement ajoutés et c'est le contenu de la boîte qui sera compressé pour absorber cette largeur supplémentaire. Cela permet généralement de simplifier le dimensionnement des éléments.

> **Note :** Il est souvent utile de définir `box-sizing` à `border-box` aux éléments de mise en page. Cela facilite grandement la gestion de la taille des éléments et élimine généralement un certain nombre d'écueils que vous pouvez rencontrer lors de la mise en page de votre contenu.  D'autre part, lors de l'utilisation de la `position: relative` ou `position: absolute`, l'utilisation de `box-sizing: content-box` permet aux valeurs de positionnement d'être relatives au contenu, et indépendantes des changements de taille des bordures et de la taille de la marge interne, ce qui est parfois souhaitable.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
box-sizing: content-box;
box-sizing: border-box;

/* Valeurs globales */
box-sizing: inherit;
box-sizing: initial;
box-sizing: unset;
```

La propriété `box-sizing` peut être définie avec l'un des mots-clés suivants.

### Valeurs

- `content-box`
  - : C'est la valeur initiale et la valeur par défaut, spécifiée dans le standard CSS. Les propriétés {{cssxref("width")}} et {{cssxref("height")}} sont mesurées en incluant le contenu, mais pas le remplissage, la bordure, la marge extérieure ou intérieure. Les dimensions de l'élément sont donc calculées à partir de la hauteur et de la largeur du contenu (on ne tient pas compte de la bordure ou du remplissage (_padding_)). Ainsi, `.box {width: 350px; border:10px solid black;}` fournira une boîte dont la largeur vaut  `370px`.
- `border-box`

  - : Les propriétés {{cssxref("width")}} et {{cssxref("height")}} incluent le contenu, le remplissage (_padding_), la bordure, mais pas la marge. C'est le [modèle de boîte](/fr/docs/CSS/Modèle_de_boîte) utilisé par Internet Explorer lorsque le document est en mode de compatibilité (Quirks). La boîte de contenu ne peut pas être négative et est ramenée à 0 si nécessaire, il est donc impossible d'utiliser `border-box` pour faire disparaître l'élément. Les dimensions de l'élément sont calculées comme la somme de la bordure, du remplissage (_padding_) et du contenu.

    Ici, les dimensions de l'élément sont calculées comme suit : _largeur = bordure + marge interne + largeur du contenu_, et _hauteur = bordure + marge interne + hauteur du contenu_.

### Syntaxe formelle

{{csssyntax}}

> **Note :** La valeur `padding-box` a été dépréciée.

## Exemples

### CSS

```css
div {
  width: 160px;
  height: 80px;
  padding: 20px;
  border: 8px solid red;
  background: yellow;
}

.content-box {
  box-sizing: content-box;
  /* Largeur totale : 160px + (2 * 20px) + (2 * 8px) = 216px
     Hauteur totale : 80px + (2 * 20px) + (2 * 8px) = 136px
     Largeur de la boîte de contenu : 160px
     Hauteur de la boîte de contenu : 80px */
}

.border-box {
  box-sizing: border-box;
  /* Largeur totale : 160px
     Hauteur totale : 80px
     Largeur de la boîte de contenu : 160px - (2 * 20px) - (2 * 8px) = 104px
     Hauteur de la boîte de contenu : 80px - (2 * 20px) - (2 * 8px) = 24px */
}
```

### HTML

```html
<div class="content-box">Content box</div>
<br>
<div class="border-box">Border box</div>
```

### Résultat

{{EmbedLiveSample("Exemples","auto","200")}}

## Spécifications

| Spécification                                                                | État                                 | Commentaires         |
| ---------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS3 Basic UI', '#box-sizing', 'box-sizing')}} | {{Spec2('CSS3 Basic UI')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.box-sizing")}}

## Voir aussi

- [Apprendre : Le modèle de boîte CSS](/fr/Apprendre/CSS/Les_bases/Le_modèle_de_boîte)
