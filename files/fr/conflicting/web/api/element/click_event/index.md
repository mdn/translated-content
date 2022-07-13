---
title: element.onclick
slug: conflicting/Web/API/Element/click_event
translation_of: Web/API/GlobalEventHandlers/onclick
original_slug: Web/API/GlobalEventHandlers/onclick
---
{{ ApiRef() }}

### Résumé

La propriété **onclick** représente le gestionnaire d'évènement onClick de l'élément courant.

### Syntaxe

`element.onclick = functionRef`

où _functionRef_ est une fonction ou une expression de type _function._ Consulter la [référence des fonctions](/en-US/docs/JavaScript/Reference/Functions_and_function_scope) pour plus de détails.

Le paramètre fourni au gestionnaire d'évènement _functionRef_ lors du déclenchement de l'évènement est un objet qui représente l'évènement de click, de type {{ domxref("MouseEvent") }}.

### Exemple

```html
<!doctype html>
<html>
<head>
<title>onclick event example</title>
<script type="text/javascript">
function initElement()
{
  var p = document.getElementById("foo");
  // NOTE: showAlert(); ou showAlert(param); NE fonctionne PAS ici.
  // Il faut fournir une valeur de type function (nom de fonction déclaré ailleurs ou declaration en ligne de fonction).
  p.onclick = showAlert;
};

function showAlert()
{
  alert("Evènement de click détecté");
}
</script>
<style type="text/css">
#foo {
border: solid blue 2px;
}
</style>
</head>
<body onload="initElement();">
<span id="foo">Mon Span à cliquer</span>
<p>Cliquez sur l'élément ci-dessus.</p>
</body>
</html>
```

Vous pouvez aussi utiliser la syntaxe des fonctions déclarées en ligne, anonymes ou non.

```js
// affectation de fonction anonyme declarée en ligne
p.onclick = function() { alert("moot!"); };
```

### Notes

L'évènement `click` est déclenché lorsque l'utilisateur clique sur un élément.

Avec cette syntaxe un seul gestionnaire d'évènement click peut être assigné à un élement . Pour gérer plusieurs fonctions gestionnaires d'évènements click sur un même élément, utilisez {{ domxref("EventTarget.addEventListener()") }} qui fait partie de la spécification DOM Events.

### Spécification

Defini en [HTML](http://w3c.github.io/html/webappapis.html#dom-globaleventhandlers-onclick).
