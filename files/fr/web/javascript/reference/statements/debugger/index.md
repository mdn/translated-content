---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
tags:
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/debugger
original_slug: Web/JavaScript/Reference/Instructions/debugger
---
{{jsSidebar("Statements")}}

L'instruction **`debugger`** permet de faire appel à un outil de débogage (qui peut par exemple permettre de placer un point d'arrêt). Si cette fonctionnalité de débogage n'est pas disponible, l'instruction n'aura aucun effet.

## Syntaxe

    debugger;

## Exemples

Dans l'exemple qui suit, on utilise un code avec l'instruction `debugger` qui permet de démarrer un débogueur (s'il existe) lorsque la fonction est appelée :

```js
function codeProbablementBogue() {
    debugger;
    // exécuter des instructions qu'on veut
    // examiner, exécuter pas à pas etc.
}
```

Lors que le débogueur est lancé, l'exécution est interrompue au niveau de l'instruction `debugger`. Cela agit comme un point d'arrêt dans le code du script :

[![Paused at a debugger statement.](https://mdn.mozillademos.org/files/6963/Screen%20Shot%202014-02-07%20at%209.14.35%20AM.png)](<https://mdn.mozillademos.org/files/6963/Screen Shot 2014-02-07 at 9.14.35 AM.png>)

## Spécifications

| Spécification                                                                                    | Statut                       | Commentaires                                |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------- |
| {{SpecName('ESDraft', '#sec-debugger-statement', 'Debugger statement')}} | {{Spec2('ESDraft')}} |                                             |
| {{SpecName('ES6', '#sec-debugger-statement', 'instruction debugger')}}     | {{Spec2('ES6')}}         |                                             |
| {{SpecName('ES5.1', '#sec-12.15', 'instruction debugger')}}                 | {{Spec2('ES5.1')}}     | Définition initiale                         |
| {{SpecName('ES3', '#sec-7.5.3', 'instruction debugger')}}                     | {{Spec2('ES3')}}         |                                             |
| {{SpecName('ES1', '#sec-7.4.3', 'instruction debugger')}}                     | {{Spec2('ES1')}}         | Uniquement mentionné comme mot-clé réservé. |

## Compatibilité des navigateurs

{{Compat("javascript.statements.debugger")}}

## Voir aussi

- [Le débogueur des outils de développement Firefox](/fr/docs/Outils/Debugger)
