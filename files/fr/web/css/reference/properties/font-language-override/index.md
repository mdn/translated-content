---
title: font-language-override
slug: Web/CSS/Reference/Properties/font-language-override
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-language-override`** contrôle l'utilisation des glyphes spécifiques à une langue dans une police de caractères.

Par défaut, l'attribut `lang` de HTML indique aux navigateurs d'afficher les glyphes conçus spécifiquement pour cette langue. Par exemple, de nombreuses polices possèdent un caractère spécial pour la ligature `fi` qui fusionne le point du «&nbsp;i&nbsp;» avec le «&nbsp;f&nbsp;». Cependant, si la langue est définie sur le turc, la police saura probablement ne pas utiliser cette ligature&nbsp;; le turc possède deux versions du «&nbsp;i&nbsp;», une avec un point (`i`) et une sans point (`ı`), et utiliser la ligature transformerait incorrectement un «&nbsp;i&nbsp;» pointé en «&nbsp;i&nbsp;» non pointé.

La propriété `font-language-override` permet de surcharger le comportement de la police pour une langue spécifique. Cela est utile, par exemple, lorsque la police utilisée ne prend pas correctement en charge la langue. Par exemple, si une police ne possède pas de règles adaptées pour la langue azérie, vous pouvez forcer la police à utiliser les glyphes turcs, qui suivent des règles similaires.

## Syntaxe

```css
/* Valeur avec un mot-clé */
font-language-override: normal;

/* Valeurs de type <string> */
font-language-override: "ENG"; /* Utiliser les glyphes anglais */
font-language-override: "TRK"; /* Utiliser les glyphes turcs */

/* Valeurs globales */
font-language-override: inherit;
font-language-override: initial;
font-language-override: revert;
font-language-override: revert-layer;
font-language-override: unset;
```

Cette propriété est définie avec le mot-clé `normal` ou avec une chaîne de caractères (`<string>`).

### Valeurs

- `normal`
  - : Indique au navigateur d'utiliser les glyphes de police adaptés à la langue définie par l'attribut `lang`. Il s'agit de la valeur par défaut.
- {{CSSxRef("string")}}
  - : Indique au navigateur d'utiliser les glyphes de police pour la langue définie par la chaîne de caractères. La chaîne doit correspondre à une balise de langue du [système de langue OpenType <sup>(angl.)</sup>](https://learn.microsoft.com/fr-fr/typography/opentype/spec/languagetags). Par exemple, «&nbsp;ENG&nbsp;» correspond à l'anglais et «&nbsp;KOR&nbsp;» au coréen.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser les glyphes danois

#### HTML

```html
<p class="para1">Réglage par défaut.</p>
<p class="para2">
  Un paragraphe pour lequel <code>font-language-override</code>
  cible le danois.
</p>
```

#### CSS

```css
p.para1 {
  font-language-override: normal;
}

p.para2 {
  font-language-override: "DAN";
}
```

#### Résultat

{{EmbedLiveSample("Utiliser les glyphes danois")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("font-variant")}}, {{CSSxRef("font-variant-position")}}, {{CSSxRef("font-variant-east-asian")}}, {{CSSxRef("font-variant-caps")}}, {{CSSxRef("font-variant-ligatures")}}, {{CSSxRef("font-variant-numeric")}}, {{CSSxRef("font-variant-alternates")}}, {{CSSxRef("font-synthesis")}}, {{CSSxRef("font-kerning")}}.
