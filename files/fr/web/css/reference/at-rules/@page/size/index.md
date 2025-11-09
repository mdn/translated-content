---
title: size
slug: Web/CSS/Reference/At-rules/@page/size
original_slug: Web/CSS/@page/size
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`size`** associé à la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{cssxref("@page")}}, permet de définir les dimensions et l'orientation de la boîte utilisée pour représenter une page. La plupart du temps, cette taille correspondra à la totalité de la taille de la page imprimée.

Les dimensions de cette boîte peuvent être définies de façon absolues ou relatives (dans ce cas, la page occupera l'espace disponible).

## Syntaxe

```css
/* Des mots-clés qui peuvent être utilisées
   pour remplir l'espace disponible */
size: auto;
size: portrait;
size: landscape;

/* Des valeurs de longueur */
/* Type <length> */
/* 1 valeur : hauteur = largeur */
size: 6in;

/* 2 valeurs : la largeur puis la hauteur */
size: 4in 6in;

/* Des mots-clés qui représentent des dimensions absolues */
size: A4;
size: B5;
size: JIS-B4;
size: letter;

/* Une déclaration incluant la taille et l'orientation */
size: A4 portrait;
```

### Valeurs

- `auto`
  - : L'agent utilisateur décidera de la taille de page. En général, ce seront les dimensions de la page cible (celle sur laquelle imprimer/afficher) qui seront utilisées.
- `landscape`
  - : Le contenu de la page est affiché en paysage (le côté le plus long de la page sera le côté horizontal).
- `portrait`
  - : Le contenu de la page est affiché en portrait (le côté le plus long de la page sera le côté vertical).
- `<length>`
  - : Une valeur de longueur (cf. {{cssxref("&lt;length&gt;")}}). La première valeur utilisée correspond à la largeur de la boîte de la page et la deuxième correspond à la hauteur. Si une seule valeur est fournie, celle-ci sera utilisée pour la largeur et pour la hauteur.
- `<page-size>`
  - : Un mot-clé avec l'une des valeurs suivantes&nbsp;:
    - `A5`
      - : Ce mot-clé correspond aux dimensions ISO standard&nbsp;: 148mm x 210mm.
    - `A4`
      - : Ce mot-clé correspond aux dimensions ISO standard&nbsp;: 210mm x 297mm (c'est le format le plus utilisé pour les impressions occasionnelles sur les imprimantes personnelles).
    - `A3`
      - : Ce mot-clé correspond aux dimensions ISO standard&nbsp;: 297mm x 420mm.
    - `B5`
      - : Ce mot-clé correspond aux dimensions ISO standard&nbsp;: 176mm x 250mm.
    - `B4`
      - : Ce mot-clé correspond aux dimensions ISO standard&nbsp;: 250mm x 353mm.
    - `JIS-B5`
      - : Ce mot-clé correspond aux dimensions JIS standard&nbsp;: 182mm x 257mm.
    - `JIS-B4`
      - : Ce mot-clé correspond aux dimensions JIS standard&nbsp;: 257mm x 364mm.
    - `letter`
      - : Ce mot-clé correspond à la taille standard du papier à lettre aux États-Unis&nbsp;: 8.5in x 11in.
    - `legal`
      - : Ce mot-clé correspond à la taille standard des documents légaux aux États-Unis&nbsp;: 8.5in par 14in.
    - `ledger`
      - : Ce mot-clé correspond à la taille standard des pages d'un livre en grand format aux États-Unis. Cela correspond à&nbsp;: 11in x 17in.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la taille et l'orientation

```css
@page {
  size: 4cm 6cm landscape;
}
```

### Définir une taille personnalisée

```css
@page {
  size: 4in 6in;
}
```

### Imbrication dans une règle @media

```css
@media print {
  @page {
    size: 50mm 150mm;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
