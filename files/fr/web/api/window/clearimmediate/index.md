---
title: Window.clearImmediate()
slug: Web/API/Window/clearImmediate
---

{{APIRef("HTML DOM")}}{{Non-standard_header}}

Cette méthode efface l'action spécifiée par {{DOMxRef("window.setImmediate")}}.

> **Note :** Cette méthode ne devrait pas devenir standard et n'est implémentée que par les versions récentes d'Internet Explorer et de Node.js 0.10+. Il rencontre la résistance à la fois de [Gecko](https://bugzilla.mozilla.org/show_bug.cgi?id=686201) (Firefox) et [Webkit](http://code.google.com/p/chromium/issues/detail?id=146172) (Google/Apple).

## Syntaxe

```js
window.clearImmediate(immediateID);
```

où immediateID est un ID retourné par {{DOMxRef("window.setImmediate")}}.

## Exemples

```js
let immediateID = setImmediate(() => {
  // Exécute du code
}

document.getElementById("bouton")
  .addEventListener(() => {
  clearImmediate(immediateID);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("Window.setImmediate()")}}
