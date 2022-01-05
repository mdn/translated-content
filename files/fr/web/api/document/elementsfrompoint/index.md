---
title: DocumentOrShadowRoot.elementsFromPoint()
slug: Web/API/Document/elementsFromPoint
tags:
  - API
  - Document
  - DocumentOrShadowRoot
  - Méthode
  - Reference
  - ShadowRoot
  - elementsFromPoint
  - elementsFromPoint()
  - shadow dom
translation_of: Web/API/DocumentOrShadowRoot/elementsFromPoint
original_slug: Web/API/DocumentOrShadowRoot/elementsFromPoint
---
{{APIRef("DOM")}}{{SeeCompatTable}}

La propriété **`elementsFromPoint()`** de l'interface {{domxref("DocumentOrShadowRoot")}}  renvoie un tableau (_array_) de tous les éléments présents sous le point fourni en paramètre (relatif au _viewport_).

## Syntaxe

    var elements = document.elementsFromPoint(x, y);

### Paramètres

- x
  - : L'abscisse du point (coordonnée horizontale).
- y
  - : L'ordonnée du point (coordonnée verticale).

### Valeur de retour

Un tableau (_array_) d'objets {{domxref('element')}} représentants les éléments du DOM concernés.

## Exemples

### HTML

```html
<div>
  <p>Du texte</p>
</div>
<p>Éléments au point 30, 20:</p>
<div id="output"></div>
```

### JavaScript

```js
var output = document.getElementById("output");
if (document.elementsFromPoint) {
  var elements = document.elementsFromPoint(30, 20);
  for(var i = 0; i < elements.length; i++) {
    output.textContent += elements[i].localName;
    if (i < elements.length - 1) {
      output.textContent += " < ";
    }
  }
} else {
  output.innerHTML = "<span style=\"color: red;\">" +
     "Votre navigateur ne prend pas en charge <code>document.elementsFromPoint()</code>" +
     "</span>";
}
```

### Résultat

{{EmbedLiveSample('Exemples', '420', '120')}}

## Spécifications

| Spécification                                                                                                                    | État                             | Commentaires                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------ |
| {{SpecName('Shadow DOM','#extensions-to-the-documentorshadowroot-mixin','DocumentOrShadowRoot')}} | {{Spec2('Shadow DOM')}} | Définition initiale                                    |
| {{SpecName('CSSOM View', '#dom-document-elementsfrompoint', 'Document')}}                                 | {{Spec2('CSSOM View')}} | Précise l'ordre selon lequel les éléments sont peints. |

## Compatibilité des navigateurs

{{Compat("api.DocumentOrShadowRoot.elementsFromPoint")}}

## Voir aussi

- {{DOMxRef("DocumentOrShadowRoot.elementFromPoint()")}}
- {{DOMxRef("DocumentOrShadowRoot.msElementsFromRect()")}} {{Non-standard_Inline}}
