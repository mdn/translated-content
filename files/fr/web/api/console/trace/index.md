---
title: Console.trace()
slug: Web/API/console/trace
---

{{ APIRef("Console API") }}

Affiche la _stack trace_ dans la [Web Console](/fr/docs/Outils/Console_Web).

{{AvailableInWorkers}}

Voir [Stack traces](/fr/docs/Web/API/console#Stack_traces) dans la documentation de {{ domxref("console") }} pour plus de détails et d'exemples.

## Syntaxe

```js
console.trace();
```

## Exemple

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

Dans la console, la trace suivante sera affichée :

```plain
bar
foo
<anonymous>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

[Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
