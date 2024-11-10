---
title: ":lang"
slug: Web/CSS/:lang
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:lang`** permet de définir la mise en forme d'un élément selon la langue dans laquelle il est écrit.

```css
/* Correspond aux paragraphes, uniquement si ceux-ci */
/* sont indiqués comme étant en anglais (en) */
p:lang(en) {
  quotes: "\201C" "\201D" "\2018" "\2019";
}
```

> [!NOTE]
> En HTML, la langue d'un élément est déterminée par l'attribut [`lang`](/fr/docs/Web/HTML/Global_attributes#lang), l'élément {{HTMLElement("meta")}} et d'autres informations comme les en-têtes HTTP ; pour les autres types de documents, d'autres méthodes peuvent être utilisées.
>
> Les chaînes de caractères admissibles pour définir des langues sont définies dans la spécification HTML 4.0.

## Syntaxe

### Syntaxe formelle

{{csssyntax}}

### Paramètre

- `language-code`
  - : La chaîne de caractères ({{cssxref("&lt;string&gt;")}}) qui définit la langue des éléments qu'on veut sélectionner.

## Exemples

Dans cet exemple, la pseudo-classe `:lang` est utilisée pour faire correspondre le parent d'une citation en utilisant {{cssxref(":first-child")}}. Il ne s'agit pas de la seule solution pour ce type de problème, ni même de la meilleure (qui dépendra du type de document). Les valeurs Unicode sont utilisées pour certains caractères spéciaux de citation.

### CSS

```css
:lang(fr) > Q {
  quotes: "« " " »";
}

:lang(de) > Q {
  quotes: "»" "«" "\2039" "\203A";
}

:lang(en) > Q {
  quotes: "\201C" "\201D" "\2018" "\2019";
}
```

### HTML

```html
<div lang="fr">
  <q>
    Cette citation française a
    <q>une citation</q>
    imbriquée.
  </q>
</div>

<div lang="de">
  <q>
    Cette citation allemande a
    <q>une citation</q>
    imbriquée.
  </q>
</div>

<div lang="en">
  <q>
    Cette citation anglaise a
    <q>une citation</q>
    imbriquée.
  </q>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples', '350')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":dir")}}
- L'attribut HTML [`lang`](/fr/docs/Web/HTML/Global_attributes#lang)
- [Propriété `lang` du DOM](/fr/docs/Web/API/HTMLElement/lang)
- [Les codes de langues selon W3C HTML4 (en anglais)](https://www.w3.org/TR/REC-html40/struct/dirlang.html#h-8.1.1)
- [L'attribut `lang` selon W3C DOM Level 2 HTML (en anglais)](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-59132807)
- [Les codes de langues BCP 47](https://tools.ietf.org/html/bcp47)
