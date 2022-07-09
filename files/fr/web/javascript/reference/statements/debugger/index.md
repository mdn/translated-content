---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
translation_of: Web/JavaScript/Reference/Statements/debugger
original_slug: Web/JavaScript/Reference/Instructions/debugger
browser-compat: javascript.statements.debugger
---
{{jsSidebar("Statements")}}

L'instruction **`debugger`** permet de faire appel à un outil de débogage (qui peut par exemple permettre de placer un point d'arrêt). Si cette fonctionnalité de débogage n'est pas disponible, l'instruction n'aura aucun effet.

## Syntaxe

```js
debugger;
```

## Exemples

Dans l'exemple qui suit, on utilise un code avec l'instruction `debugger` qui permet de démarrer un débogueur (s'il existe) lorsque la fonction est appelée&nbsp;:

```js
function codeProbablementBogue() {
    debugger;
    // exécuter des instructions qu'on veut
    // examiner, exécuter pas à pas etc.
}
```

Lorsque le débogueur est lancé, l'exécution est interrompue au niveau de l'instruction `debugger`. Cela agit comme un point d'arrêt dans le code du script&nbsp;:

[![Pause sur une instruction debugger.](screen_shot_2014-02-07_at_9.14.35_am.png)](screen_shot_2014-02-07_at_9.14.35_am.png)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le débogueur des outils de développement Firefox](/fr/docs/Tools/Debugger)
