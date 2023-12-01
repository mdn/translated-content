---
title: background-position-x
slug: Web/CSS/background-position-x
---

{{CSSRef}}

La propriété **`background-position-x`** définit la position horizontale initiale de chaque image d'arrière-plan par rapport à l'origine, définie avec {{cssxref("background-origin")}}.

Pour plus d'informations, se référer à la documentation de la propriété {{cssxref("background-position")}} qui existe depuis plus longtemps.

{{EmbedInteractiveExample("pages/css/background-position-x.html")}}

> **Note :** La valeur de cette propriété sera surchargée par n'importe quelle déclaration avec {{cssxref("background")}} ou {{cssxref("background-position")}} située après la déclaration de `background-position-x`.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-position-x: left;
background-position-x: right;
background-position-x: center;

/* Valeurs proportionnelles */
/* Type <percentage>        */
background-position-x: 25%;

/* Valeurs de longueur */
/* Type <length>       */
background-position-x: 0px;
background-position-x: 1cm;
background-position-x: 8em;

/* Déclaration indiquant un décalage  */
/* relatif à un des côtés de la boîte */
background-position-x: right 3px;

/* Gestion de plusieurs valeurs */
/* pour plusieurs arrières-plan */
background-position-x: 0px, center;

/* Valeurs globales */
background-position-x: inherit;
background-position-x: initial;
background-position-x: unset;
```

### Valeurs

- `left`
  - : Le bord gauche de l'image d'arrière-plan est aligné avec le bord gauche de la zone dédiée à l'arrière-plan.
- `center`
  - : L'image d'arrière-plan est centrée horizontalement par rapport à la zone dédiée à l'arrière-plan.
- `right`
  - : Le côté droit de l'image d'arrière-plan est aligné avec le côté droit de la zone dédiée à l'arrière-plan.
- `<length>`
  - : Une valeur de longueur (type {{cssxref("&lt;length&gt;")}}) qui définit le décalage horizontal de l'arrière-plan correspondant par rapport à un bord vertical de la zone d'arrière-plan. Si aucun côté n'est indiqué, l'écart fera référence au côté gauche.
- `<percentage>`
  - : Une valeur en pourcentages (type {{cssxref("&lt;percentage&gt;")}}) qui définit le décalage horizontal de l'arrière-plan correspondant par rapport à un bord vertical de la zone d'arrière-plan, proportionnellement à la largeur de la zone. Si aucun côté n'est indiqué, l'écart fera référence au côté gauche.

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
- {{cssxref("background-position-y")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}
- [Manipuler plusieurs arrière-plans](/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
