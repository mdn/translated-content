---
title: Caractère d'échappement
slug: Glossary/Escape_character
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **caractère d'échappement** est un {{Glossary("character", "caractère")}} qui fait que le ou les caractères qui le suivent sont interprétés différemment. Cela forme une **séquence d'échappement**, qui est souvent utilisée pour représenter un caractère ayant une signification alternative lorsqu'il est affiché littéralement, comme le guillemet dans une chaîne de caractères littérale. Les séquences d'échappement peuvent aussi avoir d'autres usages, notamment dans les [expressions régulières](/fr/docs/Web/JavaScript/Reference/Regular_expressions#séquences_déchappement).

- En JavaScript, dans les [expressions régulières](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), les [littéraux de chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#chaînes_de_caractère_littérales) et les [identifiants](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#identifiants), on peut utiliser la barre oblique inverse (`\`) pour échapper des caractères comme `\'`, `\"`, `\u0026`, etc.
- Dans les identifiants CSS, on peut utiliser la barre oblique inverse (`\`) pour échapper des caractères comme `\\`, `\n`, `\26`, etc. Voir [caractères d'échappement](/fr/docs/Web/CSS/Reference/Values/ident#escaping_characters) pour plus d'informations.
- Dans le contenu textuel HTML et les valeurs d'attributs, on peut utiliser des {{Glossary("character reference", "références de caractères")}} comme `&lt;`, `&#60;` ou `&#x3C;`.
- Dans les {{Glossary("URL")}}, on peut utiliser le signe pour cent (`%`) pour échapper des caractères comme `%20`, `%3C`, `%3E`, etc.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Character", "Caractère")}}
  - {{Glossary("Character reference", "Référence de caractère")}}
  - {{Glossary("Code point", "Point de code")}}
- [Caractère d'échappement](https://fr.wikipedia.org/wiki/Caract%C3%A8re_d%27%C3%A9chappement) sur Wikipédia
- [Séquence d'échappement](https://fr.wikipedia.org/wiki/S%C3%A9quence_d%27%C3%A9chappement) sur Wikipédia
