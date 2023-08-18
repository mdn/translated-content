---
title: <string>
slug: Web/CSS/string
---

{{CSSRef}}

Le type de donnée CSS **`<string>`** représente une chaîne de caractères. En CSS, les chaînes de caractères sont présentes dans de nombreuses propriétés comme {{cssxref("content")}}, {{cssxref("font-family")}} et {{cssxref("quotes")}}.

## Syntaxe

Une chaîne de caractères CSS est formée d'un ou plusieurs caractères [Unicode](https://fr.wikipedia.org/wiki/Unicode) délimités par des quotes (`'`) ou des doubles quotes (`"`). Une chaîne délimitée par des doubles quotes ne peut pas contenir de double quotes à moins qu'elles soient échappées à l'aide d'une barre oblique inversée (`\`). Le même principe s'applique aux chaînes délimitées par des quotes simples, qui ne peuvent contenir de quotes simples sans qu'elles soient échappés à l'aide d'une barre oblique inversée (`\`).

Le caractère barre oblique inversée doit être échappé afin de faire partie d'une chaîne de caractère.

Les nouvelles lignes ne sont pas acceptées, sauf si elles sont échappées à l'aide d'un caractère de saut de ligne tel que `\A` ou `\00000a`. Toutefois, des chaînes de caractères peuvent s'étendre sur plusieurs lignes. Dans ce cas, il est possible de couper la chaîne en plusieurs lignes en utilisant une barre oblique inversée (`\`) comme dernier caractère de chaque ligne.

Les caractères peuvent être décrits en utilisant leur [point de code Unicode](https://fr.wikipedia.org/wiki/Unicode#Partitionnement) hexadécimal, qui doit alors être échappé à l'aide du caractère `\`. `\27` représente par exemple le guillemet droit simple (`'`) et `\A9` le symbole du _copyright_ ©.

> **Note :** Les [entités](/fr/docs/Glossary/Entity) telles que `&nbsp;` ou `&#8212;` ne peuvent pas être utilisées pour les chaînes de caractères CSS.

## Exemples

```css
"Chaîne avec des guillemets doubles"
"Chaîne avec plusieurs \" guillemets doubles"
'Chaîne avec des guillemets simples'
'Chaîne avec plusieurs \' guillemets simples'

"Chaîne avec une \Anouvelle ligne"

"Une grande chaîne \
de caractères"
"Une grande chaîne de caractères"
```

> **Note :** on peut également échapper des doubles quotes avec `\22` et les simples quotes avec `\27`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Valeurs et unités en CSS](/fr/docs/Web/CSS/CSS_Values_and_Units)
- [Tutoriel - Introduction aux valeurs et unités CSS](/fr/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Types de donnée en CSS](/fr/docs/Web/CSS/CSS_Types)
