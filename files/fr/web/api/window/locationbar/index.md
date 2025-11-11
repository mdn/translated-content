---
title: Window.locationbar
slug: Web/API/Window/locationbar
---

{{APIRef}}

Renvoie l'objet `locationbar`, dont la visibilité peut être vérifiée.

## Syntaxe

```js
objRef = window.locationbar;
```

## Exemple

L'exemple HTML complet suivant montre comment la propriété `visible` de l'objet `locationbar` est utilisée.

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Divers tests DOM</title>

    <script>
      var visible = window.locationbar.visible;
    </script>
  </head>
  <body>
    <p>Divers tests DOM</p>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("window.locationbar")}}, {{domxref("window.menubar")}}, {{domxref("window.personalbar")}}, {{domxref("window.scrollbars")}}, {{domxref("window.statusbar")}}, {{domxref("window.toolbar")}}
