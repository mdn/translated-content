---
title: break-inside
slug: Web/CSS/break-inside
---

{{CSSRef}}

La propriété CSS **`break-inside`** définit comment la page, la colonne ou la région se fragmente au sein de la boîte générée. S'il n'y a aucune boîte générée, la propriété est ignorée.

```css
/* Valeurs avec un mot-clé */
break-inside: auto;
break-inside: avoid;
break-inside: avoid-page;
break-inside: avoid-column;
break-inside: avoid-region;

/* Valeurs globales */
break-inside: inherit;
break-inside: initial;
break-inside: unset;
```

Chaque point de rupture éventuel (c'est-à-dire chaque frontière d'élément) est influencé par trois propriétés : la valeur de {{cssxref("break-after")}} de l'élément précédent, la valeur de {{cssxref("break-before")}} de l'élément suivant et la valeur de `break-inside` de l'élément englobant.

Pour déterminer si on a une rupture, on applique les règles suivantes :

1. Si l'une des trois valeurs correspond à une rupture forcée (`always`, `left`, `right`, `page`, `column` ou `region`), cette valeur l'emporte. Si plusieurs valeurs décrivent une rupture forcée, c'est celle de l'élément qui apparaît le plus tard dans le flux qui est prise en compte (autrement dit, {{cssxref("break-before")}} l'emporte sur {{cssxref("break-after")}} qui l'emporte sur `break-inside`).
2. Si l'une des trois valeurs correspond à une valeur visant à éviter une rupture (`avoid`, `avoid-page`, `avoid-region` ou `avoid-column`), aucune rupture ne sera appliquée à cet endroit.

Une fois que les ruptures forcées ont été appliquées, le moteur peut ajouter des ruptures « douces » sauf aux endroits où les propriétés empêchent les ruptures.

## Syntaxe

La propriété `break-inside` se définit avec un mot-clé parmi ceux de la liste ci-après.

### Valeurs

- `auto`
  - : Cette valeur n'interdit ni ne force une rupture (pour une page, une colonne ou une région).
- `avoid`
  - : Cette valeur interdit toute rupture (de page, de colonne ou de région) dans la boîte principale.
- `avoid-page`
  - : Cette valeur interdit toute rupture de page au sein de la boîte.
- `avoid-column`
  - : Cette valeur interdit toute rupture de colonne au sein de la boîte.
- `avoid-region` {{experimental_inline}}
  - : Cette valeur interdit toute rupture de région au sein de la boîte.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Synonymes pour `page-break-inside`

Pour des raisons de compatibilité, la propriété historique {{cssxref("page-break-inside")}} devrait être traitée par les navigateurs comme `break-inside`. De cette façon, cela permet aux sites qui utilisaient `page-break-inside` de continuer à fonctionner. Voici un sous-ensemble de valeurs avec leurs alias :

| `page-break-inside` | `break-inside` |
| ------------------- | -------------- |
| `auto`              | `auto`         |
| `avoid`             | `avoid`        |

## Exemples

### CSS

```css
.exemple {
  -webkit-column-count: 4;
  -moz-column-count: 4;
  column-count: 4;
}

p {
  break-inside: avoid-column;
  /* Pour Firefox : */
  page-break-inside: avoid;
  /* Pour WebKit : */
  -webkit-column-break-inside: avoid;
}
```

### HTML

```html
<div class="exemple">
  <p>
    « Mais alors, » pensa Alice, « ne serai-je donc jamais plus vieille que je
    ne le suis maintenant ? D’un côté cela aura ses avantages, ne jamais être
    une vieille femme. Mais alors avoir toujours des leçons à apprendre ! Oh, je
    n’aimerais pas cela du tout. »
  </p>
  <p>
    « Oh ! Alice, petite folle, » se répondit-elle. « Comment pourriez-vous
    apprendre des leçons ici ? Il y a à peine de la place pour vous, et il n’y
    en a pas du tout pour vos livres de leçons. »
  </p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples","400","300")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
