---
title: Window.menubar
slug: Web/API/Window/menubar
tags:
  - API
  - HTML DOM
  - Propriété
  - Reference
  - Window
translation_of: Web/API/Window/menubar
---
{{ APIRef() }}

La propriété **`Window.menubar`** renvoie l'objet `menubar`, dont la visibilité peut être vérifiée.

## Syntaxe

    objRef = window.menubar

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

| Spécification                                                                                                | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', 'browsers.html#dom-window-menubar', 'Window.menubar')}} | {{Spec2('HTML WHATWG')}} |             |
| {{SpecName('HTML5 W3C', 'browsers.html#dom-window-menubar', 'Window.menubar')}}     | {{Spec2('HTML5 W3C')}}     |             |

## Compatibilité des navigateurs

{{Compat("api.Window.menubar")}}

## Voir également

- {{domxref("Window.locationbar")}}
- {{domxref("Window.personalbar")}}
- {{domxref("Window.scrollbars")}}
- {{domxref("Window.statusbar")}}
- {{domxref("Window.toolbar")}}
