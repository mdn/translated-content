---
title: Window.directories
slug: Web/API/Window/directories
tags:
  - API
  - HTML DOM
  - NeedsCompatTable
  - NeedsExample
  - NeedsMarkupWork
  - NeedsSpecTable
  - Obsolete
  - Propriété
  - Reference
  - Window
translation_of: Web/API/Window/directories
---
{{ obsolete_header("2.0") }}

{{ APIRef() }}

Retourne l'objet de la barre d'outils de la barre personnelle de la fenêtre. Utilisez plutôt {{ domxref("window.personalbar") }}.

### Syntaxe

```js
var dirBar = window.directories;
```

### Paramètres

_dirBar_ est un objet du type `BarProp`.

### Exemple

```html
<script>
 function dirs() {
  alert(window.directories);
 }
</script>
```

### Spécification

Ne fait pas partie des spécifications.
