---
title: Utiliser plusieurs arrière-plans
slug: Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds
l10n:
  sourceCommit: 5ebca2edd6095fb3f61d442ed3146fa37fffbf7d
---

Vous pouvez appliquer **plusieurs arrière-plans** aux éléments. Ceux-ci sont superposés les uns sur les autres, le premier arrière-plan que vous fournissez étant au-dessus et le dernier arrière-plan listé étant en arrière-plan. Seul le dernier arrière-plan peut inclure une couleur de fond.

Les arrières plans multiples sont définis comme une liste séparée par des virgules, tels que `background: background1, background2, …;`. Cette syntaxe est acceptée à la fois par la propriété raccourcie {{CSSxRef("background")}} et par chacune de ses propriétés individuelles, à l'exception de {{CSSxRef("background-color")}}&nbsp;: {{CSSxRef("background-attachment")}}, {{CSSxRef("background-clip")}}, {{CSSxRef("background-image")}}, {{CSSxRef("background-origin")}}, {{CSSxRef("background-position")}}, {{CSSxRef("background-repeat")}}, {{CSSxRef("background-size")}}.

## Exemples

Dans cet exemple, trois arrière-plans sont superposés&nbsp;: le logo de Firefox, une image de bulles et un [dégradé linéaire](/fr/docs/Web/CSS/Reference/Values/gradient/linear-gradient).

### HTML

```html
<div class="multi-bg-example"></div>
```

### CSS

```css
.multi-bg-example {
  width: 100%;
  height: 400px;
  background-image:
    url("firefox.png"), url("bubbles.png"),
    linear-gradient(to right, rgb(30 75 115 / 100%), transparent);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    bottom right,
    left,
    right;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 440)}}

Comme vous pouvez le voir ici, le logo Firefox (listé en premier dans {{CSSxRef("background-image")}}) est au‑dessus, directement au‑dessus du graphique de bulles, suivi par le dégradé (listé en dernier) qui se trouve sous toutes les «&nbsp;images&nbsp;» précédentes. Chaque sous-propriété suivante ({{CSSxRef("background-repeat")}} et {{CSSxRef("background-position")}}) s'applique aux arrière-plans correspondants. Ainsi, la première valeur listée pour {{CSSxRef("background-repeat")}} s'applique au premier arrière-plan (le plus en avant), et ainsi de suite.

## Répéter les valeurs pour les arrière-plans multiples

Lors de l'utilisation d'arrière-plans multiples, si une propriété liée à l'arrière-plan reçoit moins de valeurs séparées par des virgules que le nombre de calques d'arrière-plan, l'agent utilisateur répète la liste des valeurs jusqu'à ce qu'il y en ait suffisamment pour tous les calques.

Par exemple&nbsp;:

```css
.element {
  background-image: url(a.png), url(b.png), url(c.png);
  background-position: left top;
}
```

Cela équivaut à&nbsp;:

```css
.element {
  background-position:
    left top,
    left top,
    left top;
}
```

## Voir aussi

- Le module [des arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
