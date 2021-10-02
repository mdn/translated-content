---
title: Window.scrollbars
slug: Web/API/Window/scrollbars
tags:
  - API
  - HTML DOM
  - Propriété
  - Reference
  - Window
translation_of: Web/API/Window/scrollbars
---
{{APIRef()}}

La propriété **`Window.scrollbars`** renvoie l'objet `scrollbars`, dont la visibilité peut être vérifié.

## Syntaxe

    objRef = window.scrollbars

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

| Spécification                                                                                                        | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', 'browsers.html#dom-window-scrollbars', 'Window.scrollbars')}} | {{Spec2('HTML WHATWG')}} |             |
| {{SpecName('HTML5 W3C', 'browsers.html#dom-window-scrollbars', 'Window.scrollbars')}}     | {{Spec2('HTML5 W3C')}}     |             |

## Compatibilité des navigateurs

{{Compat("api.Window.scrollbars")}}

## Voir également

- {{domxref("window.locationbar")}}
- {{domxref("window.menubar")}}
- {{domxref("window.personalbar")}}
- {{domxref("window.statusbar")}}
- {{domxref("window.toolbar")}}
