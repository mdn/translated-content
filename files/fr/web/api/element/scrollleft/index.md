---
title: element.scrollLeft
slug: Web/API/Element/scrollLeft
tags:
  - DOM
  - DOM_0
translation_of: Web/API/Element/scrollLeft
---
{{ ApiRef() }}

### Résumé

Définit ou obtient le nombre de pixels dont le contenu est défilé vers la gauche.

### Syntaxe

    // Obtient le nombre de pixels défilés
    var sLeft = element.scrollLeft;

_sLeft_ est un entier représentant le nombre de pixels dont _element_ a été défilé vers la gauche.

    // Définit le nombre de pixels défilés
    element.scrollLeft = 10;

**scrollLeft** peut être n'importe quelle valeur entière, cependant :

- Si l'élément ne peut pas défiler (par exemple parce qu'il ne déborde pas), `scrollLeft` est mis à 0.
- S'il reçoit une valeur inférieure à 0, `scrollLeft` est mis à 0.
- S'il reçoit une valeur plus grande que le maximum dont le contenu peut défiler, `scrollLeft` est mis au maximum.

### Exemple

```html
<script type="text/javascript">

function doScrollLeft(el, p)
{
  el.scrollLeft = p;
}

</script>

<div id="aDiv"
     style="width: 100px; height: 200px; overflow: auto;"
>
<script type="text/javascript">
for (var i=0; i<100; ++i){
  document.write(i + '-FooBar-FooBar-FooBar<br>');
}
</script>
</div>
<br>
<input type="button" value="Défile de 50 pixels"
       onclick="doScrollLeft(document.getElementById('aDiv'), 50);"
>
```

### Spécification

{{ DOM0() }}

### Références

- [_scrollLeft_ sur MSDN](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/scrollleft.asp)
