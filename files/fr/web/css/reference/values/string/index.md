---
title: <string>
slug: Web/CSS/Reference/Values/string
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<string>`** représente une suite de caractères. Les chaînes de caractères sont utilisées dans de nombreuses propriétés CSS, telles que {{CSSxRef("content")}}, {{CSSxRef("font-family")}} et {{CSSxRef("quotes")}}.

## Syntaxe

Le type de données `<string>` est composé d'un nombre quelconque de caractères [Unicode](https://en.wikipedia.org/wiki/Unicode) entourés soit de guillemets doubles (`"`) soit de guillemets simples (`'`).

La plupart des caractères peuvent être représentés littéralement. Tous les caractères peuvent aussi être représentés par leurs points de code Unicode en hexadécimal, précédés d'un antislash (`\`). Par exemple, `\22` représente un guillemet double, `\27` un guillemet simple (`'`), et `\A9` le symbole de copyright (`©`).

Il est important de noter que certains caractères normalement invalides peuvent être échappés avec un antislash. Cela inclut le guillemet double lorsqu'il est utilisé dans une chaîne délimitée par des guillemets doubles, le guillemet simple lorsqu'il est utilisé dans une chaîne délimitée par des guillemets simples, et l'antislash lui‑même. Par exemple, `\\` produit un antislash unique.

Pour produire des retours à la ligne, vous devez les échapper avec un caractère de saut de ligne tel que `\A` ou `\00000A`. Dans votre code, cependant, les chaînes peuvent s'étendre sur plusieurs lignes, auquel cas chaque nouvelle ligne doit être échappée par un `\` placé en fin de ligne.

Cependant, pour obtenir des retours à la ligne, vous devez également définir la propriété {{CSSxRef("white-space", "propriété white-space")}} sur une valeur appropriée.

> [!NOTE]
> {{Glossary("character reference", "Références de caractères")}} (comme `&nbsp;` ou `&#8212;`) ne peuvent pas être utilisés dans une `<string>` CSS.

## Exemples

### Exemples de chaînes de caractères valides

```css
/* Chaînes de caractères de base */
"Cette chaîne de caractères est délimitée par des guillemets doubles."
'Cette chaîne de caractères est délimitée par des guillemets simples.'

/* Échappement de caractères */
"Ceci est une chaîne de caractères avec \" un guillemet double échappé."
"Cette chaîne de caractères contient aussi \22 un guillemet double échappé."
'Ceci est une chaîne de caractères avec \' un guillemet simple échappé.'
'Cette chaîne de caractères contient aussi \27 un guillemet simple échappé.'
"Ceci est une chaîne de caractères avec \\ un antislash échappé."

/* Nouvelle ligne dans une chaîne de caractères */
"Cette chaîne de caractères contient une\A nouvelle ligne."

/* Chaîne de caractères sur deux lignes de code (ces deux chaînes de caractères auront une sortie identique) */
"Une très longue \
chaîne de caractères géniale"
"Une très longue chaîne de caractères géniale"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module des [valeurs et unités en CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
- [Types de donnée en CSS](/fr/docs/Web/CSS/Reference/Values/Data_types)
- [Introduction à CSS&nbsp;: Valeurs et unités](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
