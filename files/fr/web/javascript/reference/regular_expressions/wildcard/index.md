---
title: "Joker : ."
slug: Web/JavaScript/Reference/Regular_expressions/Wildcard
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Un **joker** (<i lang="en">wildcard</i> en anglais) correspond à tous les caractères sauf les terminaisons de ligne. Il correspond également aux terminaisons de ligne si le drapeau `s` est défini.

## Syntaxe

```regex
.
```

## Description

`.` correspond à tous les caractères sauf les [terminaisons de ligne](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#terminateurs_de_ligne). Si le drapeau [`s`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) est défini, `.` correspond également aux terminaisons de ligne.

L'ensemble exact de caractères auquel correspond `.` dépend du fait que l'expression soit ou non [sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode). Si elle l'est, `.` correspond à n'importe quel point de code Unicode&nbsp;; sinon, elle correspond à n'importe quelle unité de code UTF-16. Par exemple&nbsp;:

```js
/../.test("😄"); // true ; correspond à deux unités de code UTF-16 formant une paire de substituts
/../u.test("😄"); // false ; l'entrée ne contient qu'un caractère Unicode
```

## Exemples

### Utiliser avec des quantificateurs

Les jokers sont souvent utilisés avec des [quantificateurs](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) pour faire correspondre une séquence quelconque de caractères jusqu'au prochain caractère recherché. Par exemple, l'exemple suivant extrait le titre d'une page Markdown sous la forme `# Titre`&nbsp;:

```js
function analyserTitre(entree) {
  // Utilisez le mode sur plusieurs lignes, car le titre peut ne pas se trouver au début du
  // fichier. Notez que l'indicateur m ne fait pas correspondre . aux terminaisons de
  // ligne, le titre doit donc tenir sur une seule ligne
  // Retournez le texte correspondant au premier groupe de capture.
  return /^#[ \t]+(.+)$/m.exec(entree)?.[1];
}

analyserTitre("# Bonjour le monde"); // "Bonjour le monde"
analyserTitre("## Sous-section"); // undefined
analyserTitre(`
---
slug: Web/JavaScript/Reference/Regular_expressions/Wildcard
---

# Joker : .

Un **joker** correspond à tous les caractères sauf les terminaisons de ligne.
`); // "Joker : ."
```

### Faire correspondre le contenu d'un bloc de code

L'exemple suivant fait correspondre le contenu d'un bloc de code délimité par trois accents graves en Markdown. Il utilise l'indicateur `s` pour que `.` corresponde aux terminaisons de ligne, car le contenu d'un bloc de code peut s'étendre sur plusieurs lignes&nbsp;:

````js
function analyserBlocDeCode(entree) {
  return /^```.*?^(.+?)\n```/ms.exec(entree)?.[1];
}

analyserBlocDeCode(`
\`\`\`js
console.log("Bonjour le monde");
\`\`\`
`); // "console.log("Bonjour le monde");"

analyserBlocDeCode(`
Une instruction \`try...catch\` doit encadrer ses blocs avec des accolades.

\`\`\`js example-bad
try
  faireQuelqueChose();
catch (e)
  console.log(e);
\`\`\`
`); // "try\n  faireQuelqueChose();\ncatch (e)\n  console.log(e);"
````

> [!WARNING]
> Ces exemples servent uniquement à la démonstration. Pour analyser du Markdown, utilisez un analyseur Markdown dédié, car il faut tenir compte de nombreux cas particuliers.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Classe de caractères&nbsp;: `[...]`, `[^...]`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Échappement de classe de caractères&nbsp;: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
