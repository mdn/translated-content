---
title: column-rule
slug: Web/CSS/column-rule
---

{{CSSRef}}

Lorsqu'on utilise une disposition sur plusieurs colonnes, la [propriété raccourcie](/fr/docs/Web/CSS/Propriétés_raccourcies) **`column-rule`** permet de définir l'affichage d'une ligne droite (aussi appelée « règle ») entre chaque colonne.

{{EmbedInteractiveExample("pages/css/column-rule.html")}}

Cette propriété est une propriété raccourcie qui permet de définir {{cssxref("column-rule-width")}}, {{cssxref("column-rule-style")}} et {{cssxref("column-rule-color")}} (plutôt que d'avoir à les définir une par une, ce qui est plus laborieux).

> **Note :** Cette propriété étant une propriété raccourcie, elle surcharge toutes les déclarations avec les propriétés individuelles écrites avant au sein d'une même règle.

## Syntaxe

```css
/* Syntaxe avec des mots-clés */
column-rule: dotted;
column-rule: solid blue;
column-rule: solid 8px;
column-rule: thick inset blue;

/* Valeurs globales */
column-rule: inherit;
column-rule: initial;
column-rule: unset;
```

Cette propriété peut être définie avec une, deux ou trois valeurs telles que définies ci-après, dans n'importe quel ordre.

### Valeurs

- `<'column-rule-width'>`
  - : Une valeur de longueur (type {{cssxref("&lt;length&gt;")}}) ou l'un des mots-clés `thin`, `medium` ou `thick`. Pour plus de détails, voir {{cssxref("border-width")}}.
- `<'column-rule-style'>`
  - : Voir {{cssxref("border-style")}} pour les différentes valeurs possibles.
- `<'column-rule-color'>`
  - : Une valeur de couleur (type {{cssxref("&lt;color&gt;")}}).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<div id="col_rul">
  <p>column one</p>
  <p>column two</p>
  <p>column three</p>
</div>
```

### CSS

```css
#col_rul {
  padding: 0.3em;
  background: gold;
  border: groove 2px gold;
  column-rule: inset 2px gold;
  column-count: 3;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
