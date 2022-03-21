---
title: bottom
slug: Web/CSS/bottom
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/bottom
---
{{CSSRef}}

La propriété **`bottom`** contribue à la définition de l'emplacement vertical des [éléments positionnés](/fr/docs/Web/CSS/position). Elle n'a aucun effet pour les éléments non-positionnés.

{{EmbedInteractiveExample("pages/css/bottom.html")}}Pour les **éléments positionnés de façon absolue**, c'est-à-dire ceux dont la valeur de la propriété {{cssxref("position")}} vaut `absolute` ou `fixed`, la propriété `bottom` définit la distance entre le bord bas de la marge de l'élément et le bord bas du bloc qui contient l'élément.

Pour les **éléments positionnés de façon relative**, c'est-à-dire ceux dont la valeur de propriété {{cssxref("position")}} est `relative`, la propriété `bottom` définit la distance dont le bord bas de l'élément est déplacé au-dessus de sa position normale.

Pour les éléments adhérents, c'est-à-dire ceux dont la valeur de la propriété {{cssxref("position")}} est `sticky`

Lorsque les propriétés {{cssxref("top")}} et `bottom` sont définies et que {{cssxref("height")}} n'est pas définie ou vaut `auto` ou `100%`, les distances indiquées par {{cssxref("top")}} et `bottom` sont respectées. Dans les autres cas, si {{cssxref("height")}} est contrainte, la propriété {{cssxref("top")}} prendra le pas sur la propriété `bottom` qui sera alors ignorée.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
bottom: 3px;
bottom: 2.4em;

/* Valeurs proportionnelles à la hauteur */
/* du bloc englobant                     */
/* Type <percentages>                    */
bottom: 10%;

/* Valeurs avec un mot-clé */
bottom: auto;

/* Valeurs globales */
bottom: inherit;
bottom: initial;
bottom: unset;
```

### Valeurs

- `<length>`

  - : Une longueur (type {{cssxref("&lt;length&gt;")}} qui représente :

    - La distance depuis le bord bas du bloc englobant pour les éléments positionnés de façon absolue
    - Le décalage avec lequel l'élément est déplacé au-dessus de sa position normale dans le flux pour pour les éléments positionnés de façon relative.

- `<percentage>`
  - : Une valeur de pourcentage (type {{cssxref("&lt;percentage&gt;")}} exprimée par rapport à la hauteur du bloc englobant.
- `auto`

  - : Indique pour :

    - Les éléments positionnés de façon absolue : la position de l'élément se base sur la propriété {{cssxref("top")}} et `height: auto` est traitée comme une hauteur basée sur la taille du contenu
    - Les éléments positionnés de façon relative : le décalage avec lequel l'élément est déplacé est construit à partir de la propriété {{cssxref("top")}} et si celle-ci vaut également `auto`, l'élément n'est pas déplacé verticalement.

- `inherit`
  - : Cette valeur indique que la valeur est la même que la valeur calculée pour l'élément parent (qui peut ne pas être le bloc englobant). Cette valeur calculée est gérée comme si elle était une longueur, un pourcentage ou le mot-clé `auto`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

Dans l'exemple qui suit, on illustre la différence de comportement de la propriété `bottom` lorsque {{cssxref("position")}} vaut `absolute` ou lorsqu'elle vaut `fixed`. When the regular text becomes taller than the viewable portion of the page (that is, the browser window's viewport), blocks positioned with `position:absolute` scroll with the page, while blocks positioned with `position:fixed` don't.

### CSS

```css
p {
  font-size:30px;
  line-height:3em;
}

div.pos {
  width:49%;
  text-align:center;
  border:2px solid #00f;
}

div#abs {
  position:absolute;
  bottom:0;
  left:0;
}

div#fix {
  position:fixed;
  bottom:0;
  right:0;
}
```

### HTML

```html
<p>
  Voici <br>un<br>grand<br>grand,<br>grand,
  <br>grand,<br>grand,<br>grand<br>contenu.
</p>

<div id="fix" class="pos">
  <p>Fixe</p>
</div>

<div id="abs" class="pos">
  <p>Absolu</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples","300","300")}}

## Spécifications

| Spécification                                                                        | État                                     | Commentaires                                                       |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------ |
| {{SpecName('CSS2.1', 'visuren.html#choose-position', 'bottom')}} | {{Spec2('CSS2.1')}}                 | Définition initiale.                                               |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'bottom')}}     | {{Spec2('CSS3 Transitions')}} | `bottom` peut désormais être animée.                               |
| {{SpecName('CSS3 Positioning', '#propdef-bottom', 'bottom')}}     | {{Spec2('CSS3 Positioning')}} | Décrit le comportement pour le positionnement adhérent (_sticky_). |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.bottom")}}

## Voir aussi

- {{cssxref("position")}},
- {{cssxref("top")}},
- {{cssxref("left")}},
- {{cssxref("right")}}
