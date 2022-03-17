---
title: columns
slug: Web/CSS/columns
tags:
  - CSS
  - Propriété
  - Propriété raccourcie
  - Reference
translation_of: Web/CSS/columns
---
{{CSSRef}}

La propriété **`columns`** est une propriété raccourcie permettant de définir les deux propriétés {{cssxref('column-width')}} (qui définit la largeur des colonnes) et {{cssxref("column-count")}} (qui définit le nombre de colonnes) en même temps.

{{EmbedInteractiveExample("pages/css/columns.html")}}

Comme pour toute propriété raccourcie, toute propriété détaillée qui n'est pas définie se voit réinitialisée à sa valeur par défaut (surchargeant ainsi les éventuelles règles déclarées avant).

## Syntaxe

```css
/* Largeur */
columns: 18em;

/* Nombre de colonnes */
columns: 1;
columns: auto;

/* Combinaison d'une largeur et d'un nombre */
columns: 1 auto;
columns: auto 12em;
columns: auto auto;


/* Valeurs globales */
columns: inherit;
columns: initial;
columns: unset;
```

La propriété `columns` se définit avec un ou deux valeurs parmi celles décrites ci-après. L'ordre de ces valeurs n'a pas d'importance.

### Valeurs

- `<'column-width'>`
  - : Une valeur de longueur (type {{cssxref("&lt;length&gt;")}}) fournissant une indication quant à la largeur optimale de la colonne ou le mot-clé auto. La colonne réelle peut être plus large (pour remplir l'espace disponible) ou plus étroite (s'il n'y a pas suffisamment d'espace disponible). La longueur exprimée doit être strictement positive, dans le cas contraire, la déclaration sera invalide.
- `<'column-count'>`
  - : Une quantité (type {{cssxref("&lt;integer&gt;")}}) strictement positive qui décrit le nombre idéal de colonnes parmi lesquelles disposer le contenu de l'élément. Si la valeur de {{cssxref("column-width")}} n'est pas une valeur automatique, cette valeur indique simplement le nombre maximal de colonnes.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.exemple {
  margin: 0;
  height: 90px;
  border: 3px solid black;
  columns: 3;
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

{{EmbedLiveSample("Exemples",300,120)}}

## Spécifications

| Spécification                                                        | État                                 | Commentaires         |
| -------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS3 Multicol', '#columns', 'columns')}} | {{Spec2('CSS3 Multicol')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.columns")}}
