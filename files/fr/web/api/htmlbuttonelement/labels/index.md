---
title: HTMLButtonElement.labels
slug: Web/API/HTMLButtonElement/labels
translation_of: Web/API/HTMLButtonElement/labels
---
{{APIRef("DOM")}}

La propriété en lecture seule **`HTMLButtonElement.labels`** renvoie une {{domxref("NodeList")}} (_liste de noeuds_) des éléments {{HTMLElement("label")}} (_étiquette_) associés avec l'élément {{HTMLElement("button")}} (_bouton_).

## Syntaxe

    var labelElements = button.labels;

### Valeur de retour

Une {{domxref("NodeList")}} contenant les éléments `<label>` associés avec l'élément `<button>`.

## Exemple

### HTML

```html
<label id="label1" for="test">Label 1</label>
<button id="test">Button</button>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("test");
  for(var i = 0; i < button.labels.length; i++) {
    console.log(button.labels[i].textContent); // "Label 1" et "Label 2"
  }
});
```

{{EmbedLiveSample("Exemple", "100%", 30)}}

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire          |
| ---------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName("HTML WHATWG", "forms.html#dom-lfe-labels", "labels")}} | {{Spec2("HTML WHATWG")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.HTMLButtonElement.labels")}}
