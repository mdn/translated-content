---
title: break-after
slug: Web/CSS/break-after
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/break-after
---
{{CSSRef}}

La propriété CSS **`break-after`** définit la façon dont la page, la colonne ou la région se fragmente après la boîte générée. S'il n'y a aucune boîte générée, la propriété est ignorée.

```css
/* Valeurs génériques */
break-after: auto;
break-after: avoid;
break-after: always;
break-after: all;

/* Valeurs de rupture liées aux pages */
break-after: avoid-page;
break-after: page;
break-after: always;
break-after: left;
break-after: right;
break-after: recto;
break-after: verso;

/* Valeurs de rupture liées aux colonnes */
break-after: avoid-column;
break-after: column;

/* Valeurs de rupture liées aux régions */
break-after: avoid-region;
break-after: region;

/* Valeurs globales */
break-after: inherit;
break-after: initial;
break-after: unset;
```

Chaque point de rupture éventuel (c'est-à-dire chaque frontière d'élément) est influencé par trois propriétés : la valeur de {{cssxref("break-after")}} de l'élément précédent, la valeur de {{cssxref("break-before")}} de l'élément suivant et la valeur de `break-inside` de l'élément englobant.

Pour déterminer si on a une rupture, on applique les règles suivantes :

1.  Si l'une des trois valeurs correspond à une rupture forcée (`always`, `left`, `right`, `page`, `column` ou `region`), cette valeur l'emporte. Si plusieurs valeurs décrivent une rupture forcée, c'est celle de l'élément qui apparaît le plus tard dans le flux qui est prise en compte (autrement dit, {{cssxref("break-before")}} l'emporte sur {{cssxref("break-after")}} qui l'emporte sur {{cssxref("break-inside")}}).
2.  Si l'une des trois valeurs correspond à une valeur visant à éviter une rupture (`avoid`, `avoid-page`, `avoid-region`, `avoid-column`), aucune rupture ne sera appliquée à cet endroit.

Une fois que les ruptures forcées ont été appliquées, le moteur peut ajouter des ruptures « douces » sauf aux endroits où les propriétés empêchent les ruptures.

## Syntaxe

### Valeurs

- `auto`
  - : Valeur initiale qui ne force ni n'interdit de rupture (de page, de colonne ou de région) après la boîte.
- `always`{{experimental_inline}}
  - : Force la rupture après la boîte principale. Le type de rupture dépend du contexte de fragmentation. Si on est dans un conteneur multi-colonne, il y aura une rupture de colonne et si on est à l'intérieur d'un média paginé, il y aura une rupture de page.
- `all`{{experimental_inline}}
  - : Force la rupture de page après la boîte principale. La rupture a lieu quel que soit le contexte de fragmentation. Ainsi, si on a un élément dans un conteneur multi-colonne lui-même situé dans un média paginé, il y aura une rupture de colonne et une rupture de page.
- `avoid`
  - : Empêche toute rupture (de page, de colonne ou de région) après la boîte.
- `left`
  - : Force un ou deux saut de page après la boîte de l'élément afin que la prochaine page soit une page gauche.
- `right`
  - : Force un ou deux saut de page après la boîte de l'élément afin que la prochaine page soit une page droite.
- `page`
  - : Force un saut de page après la boîte de l'élément.
- `column`
  - : Force une rupture de colonne de page après la boîte de l'élément.
- `region` {{experimental_inline}}
  - : Force une rupture de région après la boîte de l'élément.
- `recto` {{experimental_inline}}
  - : Force un ou deux sauts de page après la boîte de l'élément afin que la prochaine page soit une page recto (une page droite pour le sens de lecture gauche à droite et une page gauche pour le sens de lecture droite à gauche).
- `verso` {{experimental_inline}}
  - : Force un ou deux sauts de page après la boîte de l'élément afin que la prochaine page soit une page verso (une page gauche pour le sens de lecture gauche à droite et une page droite pour le sens de lecture droite à gauche).
- `avoid-page`
  - : Empêche toute saut de page après la boîte de l'élément.
- `avoid-column`
  - : Empêche toute rupture de colonne après la boîte de l'élément.
- `avoid-region` {{experimental_inline}}
  - : Empêche toute rupture de région après boîte de l'élément.

### Syntaxe formelle

{{csssyntax}}

## Synonymes pour `page-break-after`

Pour des raisons de compatibilité, la propriété historique {{cssxref("page-break-after")}} devrait être traitée par les navigateurs comme un alias de `break-after`. Cela permet de s'assurer que les sites qui utilisaient `page-break-after` continuent de fonctionner. Voici un sous-ensemble des valeurs avec leurs alias :

| `page-break-after` | `break-after` |
| ------------------ | ------------- |
| `auto`             | `auto`        |
| `left`             | `left`        |
| `right`            | `right`       |
| `avoid`            | `avoid`       |
| `always`           | `page`        |

> **Note :** La valeur `always` de `page-break-*` a été implémenté par les navigateurs comme une rupture de page et pas comme une rupture de colonne. C'est pourquoi l'alias correspondant à cette valeur est `page` et pas `always`.

## Exemples

### CSS

```css
.exemple {
  -webkit-column-count: 4;
  -moz-column-count: 4;
  column-count: 4;
}

p {
  break-after: avoid-column;
  /* Pour Firefox : */
  page-break-after: avoid;
  /* Pour WebKit : */
  -webkit-column-break-after: avoid;
}
```

### HTML

```html
<div class="exemple">
  <p>« Mais alors, » pensa Alice, « ne serai-je donc
  jamais plus vieille que je ne le suis maintenant ?
  D’un côté cela aura ses avantages, ne jamais être
  une vieille femme. Mais alors avoir toujours des
  leçons à apprendre ! Oh, je n’aimerais pas cela du
  tout. »</p>
  <p>« Oh ! Alice, petite folle, » se répondit-elle.
  « Comment pourriez-vous apprendre des leçons ici ?
  Il y a à peine de la place pour vous, et il n’y en
  a pas du tout pour vos livres de leçons. »</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples","400","300")}}

## Spécifications

| Spécification                                                                            | État                                     | Commentaires                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Fragmentation', '#break-after', 'break-after')}} | {{Spec2('CSS3 Fragmentation')}} | Ajouts des mots-clés `recto` et `verso`. Le type de média pour cette propriété est passé de `paged` à `visual`. L'algorithme de rupture est précisé afin de gérer les différents types de rupture. |
| {{SpecName('CSS3 Regions', '#region-flow-break', 'break-after')}} | {{Spec2('CSS3 Regions')}}         | La spécification étend la propriété pour gérer les sauts de région. Les mots-clés `avoid-region` et `region` sont ajoutés.                                                                         |
| {{SpecName('CSS3 Multicol', '#break-after', 'break-after')}}         | {{Spec2('CSS3 Multicol')}}     | Définition initiale. La spécification étend la propriété {{cssxref("page-break-after")}} de CSS 2.1 afin de gérer les sauts de page ou de colonne.                                        |

{{cssinfo}}

## Compatibilité des navigateurs

### Prise en charge pour une disposition multi-colonnes

{{Compat("css.properties.break-after.multicol_context")}}

### Prise en charge pour les média paginés

{{Compat("css.properties.break-after.paged_context")}}
