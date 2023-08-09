---
title: Element.outerHTML
slug: Web/API/Element/outerHTML
---

{{APIRef("DOM")}}

L'attribut `outerHTML` de l'interface DOM {{domxref("element")}} récupère le fragment HTML sérialisé décrivant l'élément ainsi que ses descendants. Il peut aussi être utilisé pour remplacer l'élément avec les noeuds générés de la chaîne fournie.

Pour obtenir uniquement la représentation HTML du contenu d'un élément ou pour remplacer le contenu d'un élément, utilisez plutôt la propriété {{domxref ("Element.innerHTML", "innerHTML")}}.

## Syntaxe

```js
var content = element.outerHTML;
element.outerHTML = htmlString;
```

### Valeur

La lecture de la valeur de `outerHTML` renvoie une {{domxref("DOMString")}} contenant la sérialisation HTML des descendants de l'élément. Définir la valeur de `innerHTML` supprime tous les descendants et les remplace par les noeuds construits en analysant le HTML donné dans la chaîne `htmlString`.

### Exceptions

- `SyntaxError`
  - : Une tentative a été faite de définir la valeur de `outerHTML` en utilisant une chaîne qui n'est pas correctement formée HTML.
- `NoModificationAllowedError`
  - : Une tentative a été faite de définir `outerHTML` sur un élément qui est enfant direct du {{domxref("Document")}}, tel que {{domxref("Document.documentElement")}}.

## Exemples

Récupérer la valeur de la propriété `outerHTML` d'un élément :

```js
// HTML:
// <div id="d"><p>Contenu</p><p>Plus Complexe</p></div>

d = document.getElementById("d");
dump(d.outerHTML);

// la chaîne '<div id="d"><p>Contenu</p><p>Plus Complexe</p></div>'
// est affichée dans la fenêtre console
```

Remplacer un noeud en modifiant la propriété `outerHTML` :

```js
// HTML:
// <div id="container"><div id="d">Ceci est un div.</div></div>

container = document.getElementById("container");
d = document.getElementById("d");
console.log(container.firstChild.nodeName); // affiche "DIV"

d.outerHTML = "<p>Ce paragraphe remplace le div original.</p>";
console.log(container.firstChild.nodeName); // affiche "P"

// Le div #d ne fait plus partie de l'arbre décrivant le document,
// le nouveau paragraphe l'ayant remplacé.
```

## Notes

Si un élément n'a pas de noeud parent, définir sa propriété `outerHTML` ne le modifiera pas, ni ses descendants. De nombreux navigateurs déclencheront aussi une exception. Par exemple :

```js
var div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
console.log(div.outerHTML); // output: "<div></div>"
```

Aussi, lorsqu'un élément va être remplacé dans le document, la variable dont la propriété `outerHTML` a été modifiée contiendra toujours une référence à l'élément initial :

```js
var p = document.getElementsByTagName("p")[0];
console.log(p.nodeName); // affiche: "P"
p.outerHTML = "<div>Ce div remplace un paragraph.</div>";
console.log(p.nodeName); // toujours "P";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Sérialisation de l'arborescence DOM en XML ou HTML : {{domxref("XMLSerializer")}}
- Analyse XML ou HTML dans l'arborescence DOM : {{domxref("DOMParser")}}
- {{domxref("HTMLElement.outerText")}}
