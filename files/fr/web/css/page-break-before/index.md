---
title: page-break-before
slug: Web/CSS/page-break-before
---

{{CSSRef}}

> [!WARNING]
> Cette propriété a été remplacée par la propriété {{cssxref("break-before")}}.

La propriété CSS **`page-break-before`** permet d'ajuster les sauts de page placés _avant_ l'élément courant.Cette propriété s'applique aux éléments de blocs qui génèrent une boîte. Elle ne s'appliquera pas à un {{HTMLElement("div")}} qui ne génère pas de boîte.

```css
/* Valeurs avec un mot-clé */
page-break-before: auto;
page-break-before: always;
page-break-before: avoid;
page-break-before: left;
page-break-before: right;
page-break-before: recto;
page-break-before: verso;

/* Valeurs globales */
page-break-before: inherit;
page-break-before: initial;
page-break-before: unset;
```

## Synonymes avec `break-before`

La propriété `page-break-before` est désormais remplacée par {{cssxref("break-before")}}.

Pour des raisons de compatibilité, si on traite `page-break-before` comme un synonyme de `break-before`, on pourra utiliser le tableau de correspondance suivant :

| `page-break-before` | `break-before` |
| ------------------- | -------------- |
| `auto`              | `auto`         |
| `left`              | `left`         |
| `right`             | `right`        |
| `avoid`             | `avoid`        |
| `always`            | `page`         |

## Syntaxe

### Valeurs

- `auto`
  - : Valeur initiale. Les sauts de page sont automatiques (ni forcés, ni interdits).
- `always`
  - : Le saut de page est toujours forcé avant l'élément.
- `avoid`
  - : Les sauts de page sont évités avant l'élément.
- `left`
  - : Le saut de page est forcé avant l'élément afin que la prochaine page soit mise en forme comme une page gauche.
- `right`
  - : Le saut de page est forcé avant l'élément afin que la prochaine page soit mise en forme comme une page droite.
- `recto` {{experimental_inline}}
  - : Si la page progresse de gauche à droite, cette valeur est équivalente à `right`. Si la page progresse de droite à gauche, elle est synonyme de `left`.
- `verso` {{experimental_inline}}
  - : Si la page progresse de gauche à droite, cette valeur est équivalente à `left`. Si la page progresse de droite à gauche, elle est synonyme de `right`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

```css
/* Pour éviter d'avoir un saut de page avant */
/* une note dans un div                      */
div.note {
  page-break-before: avoid;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("break-before")}}
- {{cssxref("break-after")}}
- {{cssxref("break-inside")}}
- {{cssxref("page-break-after")}}
- {{cssxref("page-break-inside")}}
- {{cssxref("orphans")}}
- {{cssxref("widows")}}
