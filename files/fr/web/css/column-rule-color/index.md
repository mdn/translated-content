---
title: column-rule-color
slug: Web/CSS/column-rule-color
---

{{CSSRef}}

La propriété **`column-rule-color`** permet de définir la couleur de la ligne tracée entre les colonnes lorsqu'on utilise une disposition en colonnes.

{{EmbedInteractiveExample("pages/css/column-rule-color.html")}}

## Syntaxe

```css
/* Valeurs de couleur */
/* Type <color> */
column-rule-color: red;
column-rule-color: rgb(192, 56, 78);
column-rule-color: transparent;
column-rule-color: hsla(0, 100%, 50%, 0.6);

/* Valeurs globales */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: revert;
column-rule-color: unset;
```

La propriété `column-rule-color` se définit grâce à une valeur de type `<color>`.

### Valeurs

- [`<color>`](/fr/docs/Web/CSS/color_value)
  - : Une valeur de couleur qui indique la couleur du trait entre les colonnes.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p>
  « Mais alors, » pensa Alice, « ne serai-je donc jamais plus vieille que je ne
  le suis maintenant ? D'un côté cela aura ses avantages, ne jamais être une
  vieille femme. Mais alors avoir toujours des leçons à apprendre ! Oh, je
  n'aimerais pas cela du tout. » « Oh ! Alice, petite folle, » se répondit-elle.
  « Comment pourriez-vous apprendre des leçons ici ? Il y a à peine de la place
  pour vous, et il n'y en a pas du tout pour vos livres de leçons. »
</p>
```

### CSS

```css
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-color: blue;
}
```

### Résultat

{{EmbedLiveSample("","100%","200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée [`<color>`](/fr/docs/Web/CSS/color_value)
- Les autres propriétés relatives aux couleurs&nbsp;: [`color`](/fr/docs/Web/CSS/color), [`background-color`](/fr/docs/Web/CSS/background-color), [`border-color`](/fr/docs/Web/CSS/border-color), [`outline-color`](/fr/docs/Web/CSS/outline-color), [`text-decoration-color`](/fr/docs/Web/CSS/text-decoration-color), [`text-emphasis-color`](/fr/docs/Web/CSS/text-emphasis-color), [`text-shadow`](/fr/docs/Web/CSS/color) et [`caret-color`](/fr/docs/Web/CSS/caret-color)
- [Appliquer des couleurs sur des éléments HTML grâce à CSS](/fr/docs/Web/HTML/Applying_color)
