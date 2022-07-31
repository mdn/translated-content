---
title: column-rule-style
slug: Web/CSS/column-rule-style
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/column-rule-style
---
{{CSSRef}}

La propriété **`column-rule-style`** permet de définir le style de la ligne tracée entre plusieurs colonnes lorsqu'on utilise une disposition en colonnes.

{{EmbedInteractiveExample("pages/css/column-rule-style.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
column-rule-style: none;
column-rule-style: hidden;
column-rule-style: dotted;
column-rule-style: dashed;
column-rule-style: solid;
column-rule-style: double;
column-rule-style: groove;
column-rule-style: ridge;
column-rule-style: inset;
column-rule-style: outset;

/* Valeurs globales */
column-rule-style: inherit;
column-rule-style: initial;
column-rule-style: unset;
```

La propriété `column-rule-style` avec une valeur unique de type `<br-style>`.

### Valeurs

- `<br-style>`
  - : Un mot-clé (défini comme pour {{cssxref("border-style")}}) qui permet de définir le style appliqué au trait. Les épaisseurs résultantes sont calculées avec la même méthode que pour les bordures (cf. _[collapsing border model](https://www.w3.org/TR/CSS2/tables.html#collapsing-borders)_).

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
  column-rule-style: dashed;
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

| Spécification                                                                | État                                 | Commentaires         |
| ---------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS3 Multicol', '#crs', 'column-rule-style')}} | {{Spec2('CSS3 Multicol')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.column-rule-style")}}
