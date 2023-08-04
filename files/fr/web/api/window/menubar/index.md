---
title: Window.menubar
slug: Web/API/Window/menubar
---

{{ APIRef() }}

La propriété **`Window.menubar`** renvoie l'objet `menubar`, dont la visibilité peut être vérifiée.

## Syntaxe

```js
objRef = window.menubar;
```

## Exemple

L'exemple HTML complet suivant montre comment la propriété `visible` de l'objet `menubar` est utilisée.

```html
<html>
  <head>
    <title>Divers Tests DOM</title>
    <script>
      var visible = window.menubar.visible;
    </script>
  </head>
  <body>
    <p>Divers Tests DOM</p>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Window.locationbar")}}
- {{domxref("Window.personalbar")}}
- {{domxref("Window.scrollbars")}}
- {{domxref("Window.statusbar")}}
- {{domxref("Window.toolbar")}}
