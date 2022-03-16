---
title: Document.caretRangeFromPoint()
slug: Web/API/Document/caretRangeFromPoint
translation_of: Web/API/Document/caretRangeFromPoint
---
{{APIRef("DOM")}}{{Non-standard_header}}

La méthode **`caretRangeFromPoint()`** de l'interface {{domxref("Document")}} renvoie un objet "Range" (_chaîne_) pour le fragment de document aux coordonnées spécifiées.

## Syntaxe

```js
var range = document.caretRangeFromPoint(float x, float y);
```

### Retourne

Une des réponses suivantes :

- Un {{domxref("Range")}}.
- `Null` si **x** ou **y** sont négatifs, hors de la fenêtre, ou s'il n'y a pas de noeud d'entrée de texte.

### Paramètres

- x
  - : Une position horizontale dans la fenêtre courante.
- y
  - : Une position verticale dans la fenêtre courante.

## Exemple

Démonstration de base : lorsque vous cliquez dans un paragraphe, insérez un saut de ligne à la position du curseur :

### Contenu HTML

```html
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
```

### Contenu JavaScript

```js
function insertBreakAtPoint(e) {

    var range;
    var textNode;
    var offset;
    
    if (document.caretPositionFromPoint) {
        range = document.caretPositi
        textNode = range.offset
        offset = range.offset;
    
    } else if (document.caretRangeFromPo
        range = document.caretRange
      
        offset = range.startOffset;
    }
    
    // divise seulement les TEXT_NODE (noeuds 
    if (textNode && textNode.nodeType == 3) {
        var replacement = textNode.splitText(offset);
        var br = document.createElement('br');
        textNode.parentNode.insertBefore(br, replacement);
    }
}

var paragraphs = document.getElementsByTagName("p");
for (i=0 ; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", insertBreakAtPoint, false);
}
```

{{ EmbedLiveSample('Exemple', '', '', '', 'Web/API/Document/caretRangeFromPoint') }}

## Compatibilité des navigateurs

{{Compat("api.Document.caretRangeFromPoint")}}
