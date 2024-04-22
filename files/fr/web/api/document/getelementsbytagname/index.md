---
title: document.getElementsByTagName
slug: Web/API/Document/getElementsByTagName
---

{{ ApiRef("DOM") }}

Renvoie une {{domxref ("HTMLCollection")}} des éléments avec le nom de balise donné. Le document complet est recherché, y compris le nœud racine. Le `HTMLCollection` renvoyée est en direct, ce qui signifie qu'elle se met à jour automatiquement pour rester synchronisée avec l'arborescence DOM sans avoir à rappeler document.getElementsByTagName ().

## Syntaxe

```js
var elements = document.getElementsByTagName(name);
```

- `elements` est une liste de nœuds (`NodeList`) des éléments trouvés dans l'ordre dans lequel ils apparaissent dans l'arbre.
- `nom` est une chaîne représentant le nom des éléments. La chaîne spéciale `"*"` représente «&nbsp;tous les éléments&nbsp;».

> **Note :** [La dernière spécification W3C](https://dom.spec.whatwg.org/) dit que `elements` est une `HTMLCollection` ; cependant cette méthode renvoie une {{domxref("NodeList")}} dans les navigateurs WebKit. Voir [bug Firefox 14869](https://bugzil.la/14869) pour plus de détails.

## Exemple

Dans l'exemple suivant, `getElementsByTagName()` commence à partir d'un élément parent particulier et effectue une recherche descendante récursive dans le DOM à partir de cet élément parent, en créant une collection de tous les éléments descendants qui correspondent au paramètre de `name`. Cela démontre à la fois `document.getElementsByTagName()` et son homologue {{domxref ("Element.getElementsByTagName ()")}}, qui lance la recherche sur un élément spécifique dans l'arbre DOM.

Cliquer sur les boutons utilise `getElementsByTagName()` pour compter les éléments de paragraphe descendant d'un parent particulier (le document lui-même ou l'un des éléments {{HTMLElement ("div")}} imbriqués).

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>getElementsByTagName example</title>
    <script>
      function getAllParaElems() {
        var allParas = document.getElementsByTagName("p");
        var num = allParas.length;
        alert("There are " + num + " paragraph in this document");
      }

      function div1ParaElems() {
        var div1 = document.getElementById("div1");
        var div1Paras = div1.getElementsByTagName("p");
        var num = div1Paras.length;
        alert("There are " + num + " paragraph in #div1");
      }

      function div2ParaElems() {
        var div2 = document.getElementById("div2");
        var div2Paras = div2.getElementsByTagName("p");
        var num = div2Paras.length;
        alert("There are " + num + " paragraph in #div2");
      }
    </script>
  </head>
  <body style="border: solid green 3px">
    <p>Some outer text</p>
    <p>Some outer text</p>

    <div id="div1" style="border: solid blue 3px">
      <p>Some div1 text</p>
      <p>Some div1 text</p>
      <p>Some div1 text</p>

      <div id="div2" style="border: solid red 3px">
        <p>Some div2 text</p>
        <p>Some div2 text</p>
      </div>
    </div>

    <p>Some outer text</p>
    <p>Some outer text</p>

    <button onclick="getAllParaElems();">show all p elements in document</button
    ><br />

    <button onclick="div1ParaElems();">
      show all p elements in div1 element</button
    ><br />

    <button onclick="div2ParaElems();">
      show all p elements in div2 element
    </button>
  </body>
</html>
```

## Notes

Lorsqu'elle est appelée sur un document HTML, `getElementsByTagName()` classe son argument avant de continuer. Cela n'est pas souhaitable lorsque vous essayez de faire correspondre des éléments camelCase SVG dans un sous-arbre dans un document HTML. {{Domxref ("document.getElementsByTagNameNS ()")}} est utile dans ce cas. Voir aussi le [bug Firefox 499656](https://bugzil.la/499656).

`document.getElementsByTagName()` est similaire à {{domxref ("element.getElementsByTagName ()")}}, sauf que sa recherche englobe tout le document.

## Spécifications

- [DOM Level 2 Core&nbsp;: getElementsByTagName](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-A6C9094) — [traduction](http://www.yoyodesign.org/doc/w3c/dom2/core/core.html#ID-A6C9094) (non normative)
- [HTML 5: APIs in HTML documents](http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents)

## Voir aussi

- {{domxref("Element.getElementsByTagName()")}}
- {{domxref("document.getElementById()")}} pour renvoyer une référence à un élément par son `id` (_identifiant_)
- {{domxref("document.getElementsByName()")}} pour renvoyer une référence à un élément par son `name` (_nom_)
- {{domxref("document.querySelector()")}} pour les sélecteurs puissants via des requêtes comme `'div.myclass'`
