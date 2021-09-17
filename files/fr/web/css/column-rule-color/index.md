---
title: column-rule-color
slug: Web/CSS/column-rule-color
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/column-rule-color
---
{{CSSRef}}

La propriété** `column-rule-color`** permet de définir la couleur de la ligne tracée entre les colonnes lorsqu'on utilise une disposition en colonnes.

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
column-rule-color: unset;
```

### Valeurs

- `<color>`
  - : Une valeur de couleur (type {{cssxref("&lt;color&gt;")}}) qui indique la couleur du trait entre les colonnes.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.exemple {
  border: 10px solid #000000;

  columns:3;
  column-rule-width: thick;
  column-rule-color: blue;
  column-rule-style: solid;
}
```

### HTML

```html
<p class=exemple>
  « Mais alors, » pensa Alice, « ne serai-je donc
  jamais plus vieille que je ne le suis maintenant ?
  D’un côté cela aura ses avantages, ne jamais être
  une vieille femme. Mais alors avoir toujours des
  leçons à apprendre ! Oh, je n’aimerais pas cela du
  tout. »
  « Oh ! Alice, petite folle, » se répondit-elle.
  « Comment pourriez-vous apprendre des leçons ici ?
  Il y a à peine de la place pour vous, et il n’y en
  a pas du tout pour vos livres de leçons. »
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                | État                                 | Commentaires |
| ---------------------------------------------------------------------------- | ------------------------------------ | ------------ |
| {{SpecName('CSS3 Multicol', '#crc', 'column-rule-color')}} | {{Spec2('CSS3 Multicol')}} |              |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.column-rule-color")}}

## Voir aussi

- Le type de donnée {{cssxref("&lt;color&gt;")}}
- Les autres propriétés relatives aux couleurs : {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}} et {{cssxref("caret-color")}}
- [Appliquer des couleurs aux éléments HTML grâce à CSS](/fr/docs/Web/HTML/Applying_color)
