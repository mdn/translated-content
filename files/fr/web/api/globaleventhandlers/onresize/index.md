---
title: element.onresize
slug: Web/API/GlobalEventHandlers/onresize
tags:
  - DOM
  - DOM_0
translation_of: Web/API/window.onresize
translation_of_original: Web/API/Element.onresize
---
{{ ApiRef() }}

### Résumé

La propriété **onresize** renvoie le code de gestion `onresize` de l'élément. Il sert également à définir le code devant s'exécuter lorsqu'un évènement de redimensionnement survient.

Seul l'objet _window_ possède un évènement `onresize`.

### Syntaxe

    // attribue une fonction anonyme à onresize
    window.onresize = function(){alert('Redimensionnement de la fenêtre')}

    // Attribue la référence d'une fonction à onresize
    function sayHi(){alert('Hi')}

    window.onresize = sayHi;

    // Montre la valeur de window.onresize
    alert(window.onresize);

Un évènement onresize employé avec des cadres sera lancé à chaque fois que le cadre sera redimensionné soit directement, soit comme résultant du redimensionnement de la fenêtre.

### Exemple

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
 "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<title>exemple avec onresize</title>
<script type="text/javascript">

function sayHi(){
  alert('Hi');
}

window.onresize = sayHi;

</script>
</head>
<body>
<input type="button"
 value="Cliquez ici pour voir window.onresize"
 onclick="alert(window.onresize);"
>
</body>
</html>
```

### Notes

Un attribut onresize peut être placé sur n'importe quel élément, mais seul l'objet `window` possède un évènement sur le redimensionnement. Le rédimensionnement d'autres éléments (par exemple, la modification de la largeur ou de la hauteur d'un élément img par un script) ne lancera aucun évènement de redimensionnement.

### Spécification

{{ DOM0() }}
