---
title: 'SyntaxError: illegal character'
slug: Web/JavaScript/Reference/Errors/Illegal_character
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Illegal_character
original_slug: Web/JavaScript/Reference/Erreurs/Illegal_character
---
{{jsSidebar("Errors")}}

## Message

    SyntaxError: Invalid character (Edge)
    SyntaxError: illegal character (Firefox)
    SyntaxError: Invalid or unexpected token (Chrome)

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

Dans le code, il y a un élément de la syntaxe qui n'est pas à la bonne place. Pour détecter les erreurs de ce type, vous pouvez utiliser un éditeur de texte qui prend en charge la coloration syntaxique et qui met en évidence les caractères problématiques (par exemple si on a utilisé un tiret (` – `) au lieu d'un moins ( - ) ou des guillemets anglais (` “ `) à la place de doubles quotes ( " ).

## Exemples

### Caractères ressemblants

Certains caractères ressemblent à des caractères spéciaux en JavaScript mais n'en sont pas. Dans ce cas, lorsque le moteur analysera le code, il échouera.

```js example-bad
“Ceci ressemble à une chaîne de caractères.”;
// “ n'est pas le caractère "
// SyntaxError: illegal character

42 – 13;
// – n'est pas le caractère -
// SyntaxError: illegal character

var toto = "truc";
// ; (<37e>) n'est pas le caractère ;
// SyntaxError: illegal character
```

On peut corriger ce point en utilisant les bons caractères :

```js example-good
"Ceci est vraiment une chaîne de caractères.";
42 - 13;
var toto = "truc";
```

Certains éditeurs et environnements de développement intégrés indiqueront la présence de tels caractères avec une coloration syntaxique différente. Toutefois, tous les éditeurs n'ont pas une telle fonctionnalité et si vous n'arrivez pas à déterminer l'origine du problème, il vaudra sans doute mieux supprimer la ligne incriminée et la resaisir manuellement.

### Caractères oubliés

On oublie parfois un caractère.

```js example-bad
var couleurs = ['#000', #333', '#666'];
// SyntaxError: illegal character
```

Dans ce cas, il suffit de rajouter la quote pour `'#333'`.

```js example-good
var couleurs = ['#000', '#333', '#666'];
```

### Caractères cachés

Lorsque vous copiez/collez du code depuis des sources externes, celles-ci peuvent contenir des caractères invalides difficiles à discerner.

```js example-bad
var toto = 'truc';​
// SyntaxError: illegal character
```

Lorsqu'on inspecte ce code grâce à un éditeur de texte (par exemple Vim), on peut voir qu'il y en fait un [espace sans chasse (ZWSP) (U+200B)](https://fr.wikipedia.org/wiki/Espace_sans_chasse).

```js
var toto = 'truc';​<200b>
```

## Voir aussi

- [La grammaire lexicale de JavaScript](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale)
