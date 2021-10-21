---
title: Window.locationbar
slug: Web/API/Window/locationbar
tags:
  - API
  - HTML DOM
  - Propriété
  - Reference
  - Window
translation_of: Web/API/Window/locationbar
---
{{APIRef}}

Renvoie l'objet `locationbar`, dont la visibilité peut être vérifiée.

## Syntaxe

    objRef = window.locationbar

## Exemple

L'exemple HTML complet suivant montre comment la propriété `visible` de l'objet `locationbar` est utilisée.

```html
<!DOCTYPE html>
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

| Spécification                                                                                                            | Statut                           | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'browsers.html#dom-window-locationbar', 'Window.locationbar')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'browsers.html#dom-window-locationbar', 'Window.locationbar')}}     | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("api.Window.locationbar")}}

## Voir également

- {{domxref("window.locationbar")}}, {{domxref("window.menubar")}}, {{domxref("window.personalbar")}}, {{domxref("window.scrollbars")}}, {{domxref("window.statusbar")}}, {{domxref("window.toolbar")}}
