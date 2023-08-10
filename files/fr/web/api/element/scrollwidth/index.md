---
title: element.scrollWidth
slug: Web/API/Element/scrollWidth
---

{{ ApiRef() }}

### Résumé

**scrollWidth** est une propriété en lecture seule qui renvoie, parmi la largeur en pixels du contenu d'un élément, et la largeur de l'élément, celle qui est la plus grande.

### Syntaxe

```js
var xScrollWidth = element.scrollWidth;
```

_xScrollWidth_ est la largeur du contenu d'_element_ en pixels.

### Exemple

```html
<div id="aDiv" style="width: 100px; height: 200px; overflow: auto;">
  -FooBar-FooBar-FooBar
</div>
<br />
<input
  type="button"
  value="Show scrollWidth"
  onclick="alert(document.getElementById('aDiv').scrollWidth);" />
```

### Spécification

Il n'y a pas de spécification du W3C pour **scrollWidth**.

Un brouillon de l'éditeur existe cependant&nbsp;: [Cascading Style Sheets Object Model (CSSOM)](http://dev.w3.org/cvsweb/~checkout~/csswg/cssom/Overview.src.html)

### Références

- [_scrollWidth_
  sur MSDN](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/scrollwidth.asp)
