---
title: column-rule-color
slug: Web/CSS/Reference/Properties/column-rule-color
original_slug: Web/CSS/column-rule-color
---

{{CSSRef}}

La propriété **`column-rule-color`** permet de définir la couleur de la ligne tracée entre les colonnes lorsqu'on utilise une disposition en colonnes.

{{InteractiveExample("CSS Demo: column-rule-color")}}

```css interactive-example-choice
column-rule-color: red;
```

```css interactive-example-choice
column-rule-color: rgb(48, 125, 222);
```

```css interactive-example-choice
column-rule-color: hsla(120, 80%, 40%, 0.6);
```

```css interactive-example-choice
column-rule-color: currentcolor;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 3;
  column-rule: solid;
  text-align: left;
}
```

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

- [`<color>`](/fr/docs/Web/CSS/Reference/Values/color_value)
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

- Le type de donnée [`<color>`](/fr/docs/Web/CSS/Reference/Values/color_value)
- Les autres propriétés relatives aux couleurs&nbsp;: [`color`](/fr/docs/Web/CSS/Reference/Properties/color), [`background-color`](/fr/docs/Web/CSS/Reference/Properties/background-color), [`border-color`](/fr/docs/Web/CSS/Reference/Properties/border-color), [`outline-color`](/fr/docs/Web/CSS/Reference/Properties/outline-color), [`text-decoration-color`](/fr/docs/Web/CSS/Reference/Properties/text-decoration-color), [`text-emphasis-color`](/fr/docs/Web/CSS/Reference/Properties/text-emphasis-color), [`text-shadow`](/fr/docs/Web/CSS/Reference/Properties/color) et [`caret-color`](/fr/docs/Web/CSS/Reference/Properties/caret-color)
- [Appliquer des couleurs sur des éléments HTML grâce à CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color)
