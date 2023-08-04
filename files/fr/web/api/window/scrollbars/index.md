---
title: Window.scrollbars
slug: Web/API/Window/scrollbars
---

{{APIRef()}}

La propriété **`Window.scrollbars`** renvoie l'objet `scrollbars`, dont la visibilité peut être vérifié.

## Syntaxe

```js
objRef = window.scrollbars;
```

## Exemple

L'exemple HTML complet suivant montre comment la propriété `visible` de l'objet scrollbars est utilisée.

```html
<!doctype html>
<html>
  <head>
    <title>Divers Tests DOM</title>
    <script>
      let visibleScrollbars = window.scrollbars.visible;
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

- {{domxref("window.locationbar")}}
- {{domxref("window.menubar")}}
- {{domxref("window.personalbar")}}
- {{domxref("window.statusbar")}}
- {{domxref("window.toolbar")}}
