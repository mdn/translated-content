---
title: background-position-y
slug: Web/CSS/background-position-y
---

{{CSSRef}}

La propriété **`background-position-y`** définit la position verticale initiale de chaque image d'arrière-plan. La position est relative à l'origine définie par {{cssxref("background-origin")}}.

{{EmbedInteractiveExample("pages/css/background-position-y.html")}}

> **Note :** La valeur de cette propriété sera surchargée par n'importe quelle déclaration avec {{cssxref("background")}} ou {{cssxref("background-position")}} située après la déclaration.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-position-y: top;
background-position-y: bottom;
background-position-y: center;

/* Valeurs proportionnelles */
/* Type <percentage>        */
background-position-y: 25%;

/* Valeurs de longueur */
/* Type <length>       */
background-position-y: 0px;
background-position-y: 1cm;
background-position-y: 8em;

/* Déclaration indiquant un décalage  */
/* relatif à un des côtés de la boîte */
background-position-y: bottom 3px;
background-position-y: bottom 10%;

/* Gestion de plusieurs valeurs */
/* pour plusieurs arrières-plan */
background-position-y: 0px, center;

/* Valeurs globales */
background-position-y: inherit;
background-position-y: initial;
background-position-y: unset;
```

### Valeurs

- `top`
  - : Le bord haut de l'image d'arrière-plan est aligné avec le bord haut de la zone dédiée à l'arrière-plan.
- `center`
  - : L'image d'arrière-plan est centrée verticalement par rapport à la zone dédiée à l'arrière-plan.
- `bottom`
  - : Le bas de l'image d'arrière-plan est aligné avec le bas de la zone dédiée à l'arrière-plan.
- `<length>`
  - : Une valeur de longueur (type {{cssxref("&lt;length&gt;")}}) qui définit le décalage vertical de l'arrière-plan correspondant par rapport au bord haut de la zone d'arrière-plan. Si aucun côté n'est indiqué, l'écart fera référence au bord haut. Certains navigateurs permettent d'indiquer un décalage par rapport au côté bas.
- `<percentage>`
  - : Une valeur en pourcentages (type {{cssxref("&lt;percentage&gt;")}}) qui définit le décalage vertical de l'arrière-plan correspondant par rapport à un bord horizontal de la zone d'arrière-plan, proportionnellement à la hauteur de la zone. Si aucun côté n'est indiqué, l'écart fera référence au bord haut. Une valeur de 100% indique que le bas de l'image d'arrière-plan sera aligné avec le bas du conteneur et une valeur de 50% centrera l'image.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("background-position")}}
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}
- [Manipuler plusieurs arrière-plans](/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
