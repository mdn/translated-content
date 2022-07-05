---
title: Window.clearImmediate()
slug: Web/API/Window/clearImmediate
tags:
  - API
  - HTML DOM
  - Méthode
  - Window
translation_of: Web/API/Window/clearImmediate
---
{{APIRef("HTML DOM")}}{{Non-standard_header}}

Cette méthode efface l'action spécifiée par {{DOMxRef("window.setImmediate")}}.

> **Note :** Cette méthode ne devrait pas devenir standard et n'est implémentée que par les versions récentes d'Internet Explorer et de Node.js 0.10+. Il rencontre la résistance à la fois de [Gecko](https://bugzilla.mozilla.org/show_bug.cgi?id=686201) (Firefox) et [Webkit](http://code.google.com/p/chromium/issues/detail?id=146172) (Google/Apple).

## Syntaxe

    window.clearImmediate( immediateID )

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

| Spécification                                                                                                                              | Statut         | Commentaire         |
| ------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ------------------- |
| [Efficient Script Yielding La définition de `setImmediate` dans cette spécification.](https://w3c.github.io/setImmediate/#si-setImmediate) | Editor's Draft | Initial definition. |

## Compatibilité des navigateurs

{{Compat("api.Window.clearImmediate")}}

## Voir également

- {{DOMxRef("Window.setImmediate()")}}
