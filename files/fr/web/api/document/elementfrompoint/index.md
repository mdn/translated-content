---
title: document.elementFromPoint
slug: Web/API/Document/elementFromPoint
tags:
  - Référence_du_DOM_Gecko
translation_of: Web/API/DocumentOrShadowRoot/elementFromPoint
translation_of_original: Web/API/Document/elementFromPoint
original_slug: Web/API/DocumentOrShadowRoot/elementFromPoint
---
{{ ApiRef() }}

### Résumé

Renvoie l'élément visible au point donné, spécifié relativement au point supérieur gauche visible dans le document.

### Syntaxe

    element = document.elementFromPoint(x,y);

where

- `element` est un objet [element](fr/DOM/element).
- `x` et `y` spécifient les coordonnées à vérifier.

### Exemple

```html
<html>
<head>
<title>Exemple d'utilisation d'elementFromPoint</title>

<script type="text/javascript">

function changeColor(newColor)
{
 elem = document.elementFromPoint(2, 2);
 elem.style.color = newColor;
}
</script>
</head>

<body>
<p id="para1">Un peu de texte ici</p>
<button onclick="changeColor('blue');">bleu</button>
<button onclick="changeColor('red');">rouge</button>
</body>
</html>
```

### Notes

Si l'élément au point spécifié appartient à un autre document (par exemple, les sous-document d'un iframe), l'élément dans le DOM du document appelant (l'iframe lui-même) est renvoyé. Si l'élément au point donné est anonyme ou du contenu généré par XBL, comme la barre de défilement d'une boîte de texte, le premier élément parent non anonyme (par exemple, la boîte de texte) est renvoyé.

Si le point spécifié est en dehors de la portion visible du document ou que l'une ou l'autre des coordonnées est négative, le résultat est `NULL`.

{{ Note("Les appelants qui sont des documents XUL devraient attendre que l\'évènement <code>onload</code> se soit déclenché avant d\'appeler cette méthode.") }}

### Spécification

- Spécification préliminaire&nbsp;: [`elementFromPoint`](http://dev.w3.org/csswg/cssom/#documentlayout-elementfrompoint)
