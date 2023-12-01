---
title: clear
slug: Web/CSS/clear
---

{{CSSRef}}

La propriété **`clear`** indique si un élément peut être situé à côté d'éléments [flottants](/fr/docs/Web/CSS/float) qui le précèdent ou s'il doit être déplacé vers le bas pour être en dessous de ces éléments. La propriété `clear` s'applique aux éléments flottants comme aux éléments non-flottants.

{{EmbedInteractiveExample("pages/css/clear.html")}}

Lorsqu'elle est appliquée aux blocs non-flottants, elle déplace [le bord de la bordure](/fr/docs/Learn/CSS/Building_blocks/The_box_model) de l'élément sous [le bord de la marge](/fr/docs/Learn/CSS/Building_blocks/The_box_model) de tous les éléments flottants concernés. Il y aura [fusion des marges (_margin collapsing_)](/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing) verticales entre l'élément flottant et le bloc non-flottant mais pas entre les élément flottants.

Lorsqu'elle est appliquée aux éléments flottants, elle déplace [le bord de la marge](/fr/Apprendre/CSS/Les_bases/Le_modèle_de_boîte) de l'élément sous [le bord de la marge](/fr/Apprendre/CSS/Les_bases/Le_modèle_de_boîte) de tous les éléments flottants concernés. Cela impacte la position des éléments flottants suivants car ceux-ci ne peuvent pas être situés plus haut que les éléments flottants qui les précèdent.

Les éléments flottants qui sont dégagés sont les éléments flottants précédant l'élément ciblé, au sein de du [même contexte de formatage](/fr/docs/Web/Guide/CSS/Block_formatting_context).

> **Note :** Si un élément ne contient que des éléments flottants, sa hauteur sera nulle. Si on souhaite redimensionner l'élément afin qu'il contienne tous les éléments flottants à l'intérieur, on peut faire flotter ce conteneur ou utiliser `clear` sur un pseudo-élément remplacé {{cssxref("::after")}}.
>
> ```css
> #conteneur::after {
>   content: "";
>   display: block;
>   clear: both;
> }
> ```

## Syntaxe

```css
/* Valeurs avec mot-clé */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

/* Valeurs globales */
clear: inherit;
clear: initial;
clear: unset;
```

### Valeurs

- `none`
  - : Un mot-clé qui indique que l'élément n'est pas déplacé vers le bas pour dégager le flottement.
- `left`
  - : Un mot-clé qui indique que l'élément est déplacé vers le bas afin de dégager les flottements à gauche.
- `right`
  - : Un mot-clé qui indique que l'élément est déplacé vers le bas afin de dégager les flottements à droite.
- `both`
  - : Un mot-clé qui indique que l'élément est déplacé vers le bas afin de dégager les flottements à gauche et à droite.
- `inline-start`
  - : Un mot-clé qui indique que l'élément est déplacé vers le bas pour dégager le contenu vers le début du bloc englobant. Autrement dit, cela dégage à gauche pour les scripts de gauche à droite (_LTR_ pour _left to right_) et dégage à droite pour les scripts de droite à gauche (_RTL_ pour _droite à gauche_).
- `inline-end`
  - : Un mot-clé qui indique que l'élément est déplacé vers le bas pour dégager le contenu du côté de la fin du bloc englobant. Autrement dit, cela dégage à droite pour les scripts de gauche à droite (_LTR_ pour _left to right_) et dégage à gauche pour les scripts de droite à gauche (_RTL_ pour _droite à gauche_).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### `clear: left`

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="left">Ce paragraphe est dégagé à gauche.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.left {
  border: 1px solid black;
  clear: left;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: left;
  margin: 0;
  background-color: red;
  width: 20%;
}
p {
  width: 50%;
}
```

{{EmbedLiveSample('clear_left','100%','250')}}

### `clear: right`

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="right">Ce paragraphe est dégagé à droite.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.right {
  border: 1px solid black;
  clear: right;
}
.black {
  float: right;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: red;
  width: 20%;
}
p {
  width: 50%;
}
```

{{EmbedLiveSample('clear_right','100%','250')}}

### `clear: both`

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor. Fusce pulvinar lacus
    ac dui.
  </p>
  <p class="red">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="both">Ce paragraphe est dégagé de chaque côté.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.both {
  border: 1px solid black;
  clear: both;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: red;
  width: 20%;
}
p {
  width: 45%;
}
```

{{EmbedLiveSample('clear_both','100%','300')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le modèle de boîtes](/fr/docs/Learn/CSS/Building_blocks/The_box_model)
