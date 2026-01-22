---
title: column-rule-style
slug: Web/CSS/Reference/Properties/column-rule-style
original_slug: Web/CSS/column-rule-style
---

{{CSSRef}}

La propriété **`column-rule-style`** permet de définir le style de la ligne tracée entre plusieurs colonnes lorsqu'on utilise une disposition en colonnes.

{{InteractiveExample("CSS Demo: column-rule-style")}}

```css interactive-example-choice
column-rule-style: none;
```

```css interactive-example-choice
column-rule-style: dotted;
```

```css interactive-example-choice
column-rule-style: solid;
```

```css interactive-example-choice
column-rule-style: double;
```

```css interactive-example-choice
column-rule-style: ridge;
column-rule-color: #88f;
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

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.exemple {
  border: 10px solid #000000;

  columns: 3;
  column-rule-width: thick;
  column-rule-color: blue;
  column-rule-style: dashed;
}
```

### HTML

```html
<p class="exemple">
  « Mais alors, » pensa Alice, « ne serai-je donc jamais plus vieille que je ne
  le suis maintenant ? D’un côté cela aura ses avantages, ne jamais être une
  vieille femme. Mais alors avoir toujours des leçons à apprendre ! Oh, je
  n’aimerais pas cela du tout. » « Oh ! Alice, petite folle, » se répondit-elle.
  « Comment pourriez-vous apprendre des leçons ici ? Il y a à peine de la place
  pour vous, et il n’y en a pas du tout pour vos livres de leçons. »
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
