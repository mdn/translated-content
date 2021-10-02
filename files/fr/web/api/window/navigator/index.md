---
title: Window.navigator
slug: Web/API/Window/navigator
tags:
  - API
  - HTML DOM
  - Property
  - Read-only
  - Reference
  - Window
translation_of: Web/API/Window/navigator
---
{{APIRef}}

La propriété en lecture-seule **`Window.navigator`** renvoie une référence à un objet qui est une instance de {{domxref("Navigator")}} et possède des méthodes et propriétés à propos de l'application qui exécute le script.

## Syntaxe

```js
navigatorObject = window.navigator
```

## Exemple

```js
var sUsrAg = navigator.userAgent;
console.log("Voici l'agent utilisateur du navigateur courant", sUsrAg);
```

## Spécifications

| Spécification                                                                            | Statut                           | Commentaires |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', '#dom-navigator', 'Window: navigator')}} | {{Spec2('HTML WHATWG')}} |              |

## Compatibilité des navigateurs

{{Compat("api.Window.navigator")}}
