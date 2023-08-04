---
title: column-rule-width
slug: Web/CSS/column-rule-width
---

{{CSSRef}}

La propriété **`column-rule-width`** permet de définir la largeur du trait tracé entre les colonnes lorsqu'on utilise une disposition en colonnes.

{{EmbedInteractiveExample("pages/css/column-rule-width.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;

/* Valeurs de longueurs */
/* Type <length>        */
column-rule-width: 1px;
column-rule-width: 2.5em;

/* Valeurs globales */
column-rule-width: inherit;
column-rule-width: initial;
column-rule-width: unset;
```

La propriété `column-rule-width` est définie grâce à une valeur de type `<br-width>`.

### Valeurs

- `<br-width>`
  - : Une valeur de longueur (type {{cssxref("&lt;length&gt;")}}) ou un mot-clé parmi `thin`, `medium` ou `thick` qui décrit l'épaisseur du trait séparant deux colonnes. C'est le type de valeur qui sera également utilisé pour la propriété {{cssxref("border-width")}}.

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
