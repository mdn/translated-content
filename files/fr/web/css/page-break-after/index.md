---
title: page-break-after
slug: Web/CSS/page-break-after
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/page-break-after
---
{{CSSRef}}

> **Attention :** Cette propriété a été remplacée par la propriété {{cssxref("break-after")}}.

La propriété CSS **`page-break-after`** permet d'ajuster les sauts de page placés _après_ l'élément courant.

```css
/* Valeurs avec un mot-clé */
page-break-after: auto;
page-break-after: always;
page-break-after: avoid;
page-break-after: left;
page-break-after: right;
page-break-after: recto;
page-break-after: verso;

/* Valeurs globales */
page-break-after: inherit;
page-break-after: initial;
page-break-after: unset;
```

Cette propriété s'applique aux éléments de blocs qui génèrent une boîte. Elle ne s'appliquera pas à un {{HTMLElement("div")}} qui ne génère pas de boîte.

## Synonymes avec `break-after`

La propriété `page-break-after` est désormais remplacée par {{cssxref("break-after")}}.

Si pour des raisons de compatibilité, on doit traiter `page-break-after` comme synonyme, on pourra utiliser le tableau de correspondance des valeurs suivant :

| `page-break-after` | `break-after` |
| ------------------ | ------------- |
| `auto`             | `auto`        |
| `left`             | `left`        |
| `right`            | `right`       |
| `avoid`            | `avoid`       |
| `always`           | `page`        |

## Syntaxe

### Valeurs

- `auto`
  - : Valeur initiale. Les sauts de page sont automatiques (ni forcés, ni interdits).
- `always`
  - : Le saut de page est toujours forcé après l'élément.
- `avoid`
  - : Les sauts de page sont évités après l'élément.
- `left`
  - : Le saut de page est forcé après l'élément afin que la prochaine page soit mise en forme comme une page gauche.
- `right`
  - : Le saut de page est forcé après l'élément afin que la prochaine page soit mise en forme comme une page droite.
- `recto` {{experimental_inline}}
  - : Si la page progresse de gauche à droite, cette valeur est équivalente à `right`. Si la page progresse de droite à gauche, elle est synonyme de `left`.
- `verso` {{experimental_inline}}
  - : Si la page progresse de gauche à droite, cette valeur est équivalente à `left`. Si la page progresse de droite à gauche, elle est synonyme de `right`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
/* On force une nouvelle page à la suite */
/* d'une note en bas de page             */
div.footnotes {
  page-break-after: always;
}
```

## Spécifications

| Spécification                                                                                                | État                                             | Commentaires                                                                                           |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS Logical Properties', '#page', 'recto and verso')}}                     | {{Spec2('CSS Logical Properties')}} | Ajout des valeurs `recto` et `verso`.                                                                  |
| {{SpecName('CSS3 Paged Media', '#page-break-after', 'page-break-after')}}             | {{Spec2('CSS3 Paged Media')}}         | Cette propriété peut désormais être étendues aux lignes de tableau et aux groupe de lignes de tableau. |
| {{SpecName('CSS2.1', 'page.html#propdef-page-break-after', 'page-break-after')}} | {{Spec2('CSS2.1')}}                         | Définition initiale.                                                                                   |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.page-break-after")}}

## Voir aussi

- {{cssxref("break-before")}}
- {{cssxref("break-after")}}
- {{cssxref("break-inside")}}
- {{cssxref("page-break-before")}}
- {{cssxref("page-break-inside")}}
- {{cssxref("orphans")}}
- {{cssxref("widows")}}
