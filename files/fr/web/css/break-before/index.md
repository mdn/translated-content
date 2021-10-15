---
title: break-before
slug: Web/CSS/break-before
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/break-before
---
{{CSSRef}}

La propriété** `break-before`** décrit la façon dont la page, la colonne ou la région se fragmente avant la boîte générée. S'il n'y a aucune boîte générée, la propriété est ignorée.

```css
/* Valeurs de rupture génériques */
break-before: auto;
break-before: avoid;
break-before: always;
break-before: all;

/* Valeurs de rupture pour les pages */
break-before: avoid-page;
break-before: page:
break-before: left;
break-before: right;
break-before: recto;
break-before: verso;

/* Valeurs de rupture pour les colonnes */
break-before: avoid-column;
break-before: column;

/* Valeurs de rupture pour les régions */
break-before: avoid-region;
break-before: region;

/* Valeurs globales */
break-before: inherit;
break-before: initial;
break-before: unset;
```

Chaque point de rupture éventuel (c'est-à-dire chaque frontière d'élément) est influencé par trois propriétés : la valeur de {{cssxref("break-after")}} de l'élément précédent, la valeur de {{cssxref("break-before")}} de l'élément suivant et la valeur de `break-inside` de l'élément englobant.

Pour déterminer si on a une rupture, on applique les règles suivantes :

1.  Si l'une des trois valeurs correspond à une rupture forcée (`always`, `left`, `right`, `page`, `column` ou `region`), cette valeur l'emporte. Si plusieurs valeurs décrivent une rupture forcée, c'est celle de l'élément qui apparaît le plus tard dans le flux qui est prise en compte (autrement dit, {{cssxref("break-before")}} l'emporte sur {{cssxref("break-after")}} qui l'emporte sur {{cssxref("break-inside")}}).
2.  Si l'une des trois valeurs correspond à une valeur visant à éviter une rupture (`avoid`, `avoid-page`, `avoid-region`, `avoid-column`), aucune rupture ne sera appliquée à cet endroit.

Une fois que les ruptures forcées ont été appliquées, le moteur peut ajouter des ruptures « douces » sauf aux endroits où les propriétés empêchent les ruptures.

## Syntaxe

La propriété `break-before` se paramètre avec un des mots-clés définis ci-après.

### Valeurs

#### Valeurs de rupture génériques

- `auto`
  - : Valeur initiale qui ne force ni n'interdit de rupture (de page, de colonne ou de région) avant la boîte.
- `all`{{experimental_inline}}
  - : Force la rupture juste avant la boîte principale. La rupture a lieu pour l'ensemble des contextes de fragmentation. Ainsi si l'élément concerné est dans un conteneur multi-colonnes dans un média paginé, il y aura une rupture de colonne et une rupture de page.
- `always`{{experimental_inline}}
  - : Force la rupture juste avant la boîte principale. Le type de rupture dépend du contexte de fragmentation englobant l'élément. Si l'élément est situé dans un conteneur multi-colonne, une rupture de colonne sera ajoutée. Si l'élément est situé dans un média paginé (mais pas dans un conteneur multi-colonnes), la rupture introduite sera une rupture de page.
- `avoid`
  - : Empêche toute rupture (de page, de colonne ou de région) avant la boîte.

#### Valeurs de rupture liées aux médias paginés

- `avoid-page`
  - : Empêche toute saut de page avant la boîte de l'élément.
- `page`
  - : Force un saut de page avant la boîte de l'élément
- `left`
  - : Force un ou deux saut de page avant la boîte de l'élément afin que la prochaine page soit une page gauche.
- `recto` {{experimental_inline}}
  - : Force un ou deux sauts de page avant la boîte de l'élément afin que la prochaine page soit une page recto (une page droite pour le sens de lecture gauche à droite et une page gauche pour le sens de lecture droite à gauche).
- `right`
  - : Force un ou deux saut de page avant la boîte de l'élément afin que la prochaine page soit une page droite.
- `verso`{{experimental_inline}}
  - : Force un ou deux sauts de page avant la boîte de l'élément afin que la prochaine page soit une page verso (une page gauche pour le sens de lecture gauche à droite et une page droite pour le sens de lecture droite à gauche).

#### Valeurs de ruptures relatives aux dispositions en colonnes

- `avoid-column`
  - : Empêche toute rupture de colonne avant la boîte de l'élément.
- `column`
  - : Force une rupture de colonne de page avant la boîte de l'élément.

#### Valeurs de ruptures relatives aux régions

- `region`{{experimental_inline}}
  - : Force une rupture de région avant la boîte de l'élément.
- `avoid-region`{{experimental_inline}}
  - : Empêche toute rupture de région avant la boîte de l'élément.

### Syntaxe formelle

{{csssyntax}}

## Alias/synonymes pour les ruptures de page

Pour des raisons de compatibilité, la propriété historique {{cssxref("page-break-before")}} devrait être considérée par les navigateurs comme un synonyme de `break-before`. Cela permet aux sites utilisant `page-break-before` de continuer à fonctionner comme précédemment. Voici un sous-ensemble des valeurs avec leurs alias :

| `page-break-before` | `break-before` |
| ------------------- | -------------- |
| `auto`              | `auto`         |
| `left`              | `left`         |
| `right`             | `right`        |
| `avoid`             | `avoid`        |
| `always`            | `page`         |

> **Note :** La valeur `always` pour `page-break-before` a été implémentée par les navigateurs comme une rupture de page et non comme une rupture de colonne. C'est pourquoi l'alias ici utilisé est `page` et non `always`.

## Exemples

### CSS

```css
.exemple {
  -webkit-column-count: 4;
  -moz-column-count: 4;
  column-count: 4;
}

p {
  break-before: avoid-column;
  /* Pour Firefox : */
  page-break-before: avoid;
  /* Pour WebKit : */
  -webkit-column-break-before: avoid;
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

| Spécification                                                                                                        | État                                     | Commentaires                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Fragmentation', '#break-between', 'break-before')}}                         | {{Spec2('CSS3 Fragmentation')}} | Ajouts des mots-clés `recto` et `verso`. Le type de média pour cette propriété est passé de `paged` à `visual`. L'algorithme de rupture est précisé afin de gérer les différents types de rupture. |
| {{SpecName('CSS3 Regions', '#region-flow-break', 'break-before')}}                             | {{Spec2('CSS3 Regions')}}         | La spécification étend la propriété pour gérer les sauts de région. Les mots-clés `avoid-region` et `region` sont ajoutés.                                                                         |
| {{SpecName('CSS3 Multicol', '#break-before-break-after-break-inside', 'break-before')}} | {{Spec2('CSS3 Multicol')}}     | Définition initiale. La spécification étend la propriété {{cssxref("page-break-before")}} de  CSS 2.1 afin de gérer les sauts de page ou de colonne.                                   |

{{cssinfo}}

## Compatibilité des navigateurs

### Prise en charge pour une disposition multi-colonnes

{{Compat("css.properties.break-before.multicol_context")}}

### Prise en charge pour les média paginés

{{Compat("css.properties.break-before.paged_context")}}
