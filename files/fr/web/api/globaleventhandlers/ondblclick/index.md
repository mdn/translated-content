---
title: element.ondblclick
slug: Web/API/GlobalEventHandlers/ondblclick
tags:
  - DOM
  - DOM_0
  - Référence_du_DOM_Gecko
translation_of: Web/API/GlobalEventHandlers/ondblclick
---
{{ ApiRef() }}

### Résumé

La propriété **ondblclick** renvoie le gestionnaire d'évènement `dblclick` de l'élément courant.

### Syntaxe

    element.ondblclick = nomDeFonction;

- `nomDeFonction` est le nom d'une fonction définie par l'utilisateur, sans les parenthèses ni aucun paramètre. Il peut également s'agir d'une déclaration de fonction anonyme, comme :

<!---->

    element.ondblclick = function() { alert("Évènement dblclick détecté"); };

### Exemple

```html
<html>

<head>
<title>ondblclick event example</title>

<script type="text/javascript">

function initElement() {
 var p = document.getElementById("foo");
 // Attention : showAlert(); ou showAlert(param); ne fonctionneront pas ici,
 // il doit s'agir d'une référence à un nom de fonction, pas un appel de fonction.
 p.ondblclick = showAlert;
};

function showAlert() {
 alert("Évènement dblclick détecté")
}
</script>

<style type="text/css">
<!--
#foo {
border: solid blue 2px;
}
-->
</style>
</head>

<body onload="initElement()";>
<span id="foo">Mon élément</span>
<p>Double-cliquez sur l'élément ci-dessus.</p>
</body>
</html>
```

### Notes

L'évènement `dblclick` est déclenché lorsque l'utilisateur double-clique sur un élément.

### Spécification

{{ DOM0() }}
