---
title: Console.trace()
slug: Web/API/Console/trace
tags:
  - API
  - DOM
  - Développement
  - Méthode
  - console
  - débogage
  - trace
translation_of: Web/API/Console/trace
---
{{ APIRef("Console API") }}

Affiche la _stack trace_ dans la [Web Console](/fr/docs/Outils/Console_Web).

{{AvailableInWorkers}}

Voir [Stack traces](/fr/docs/Web/API/console#Stack_traces) dans la documentation de {{ domxref("console") }} pour plus de détails et d'exemples.

## Syntaxe

    console.trace();

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

```html
bar
foo
<anonymous>
```

## Spécification

| Spécification                                                                | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Console API", "#trace", "console.trace()")}} | {{Spec2("Console API")}} | Définition Initiale |

## Compatibilité des navigateurs

{{Compat("api.Console.trace")}}

## Voir aussi

[Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
