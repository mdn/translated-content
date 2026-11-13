---
title: "Document : méthode getElementsByTagName()"
short-title: getElementsByTagName()
slug: Web/API/Document/getElementsByTagName
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

La méthode **`getElementsByTagName`** de l'interface {{DOMxRef("Document")}} retourne une collection ({{DOMxRef("HTMLCollection")}}) d'éléments ayant le nom de balise donné.

Le document complet est recherché, y compris le nœud racine. La collection ({{DOMxRef("HTMLCollection")}}) retournée est dynamique, ce qui signifie qu'elle se met automatiquement à jour pour rester synchronisée avec l'arborescence DOM sans avoir à rappeler `document.getElementsByTagName()`.

## Syntaxe

```js-nolint
getElementsByTagName(name)
```

### Paramètres

- `name`
  - : Une chaîne de caractères représentant le nom des éléments. La chaîne spéciale `"*"` représente tous les éléments.

### Valeur de retour

Une collection dynamique ({{DOMxRef("HTMLCollection")}}) des éléments trouvés dans l'ordre dans lequel ils apparaissent dans l'arbre.

## Exemples

Dans l'exemple suivant, `getElementsByTagName()` commence à partir d'un élément parent particulier et parcourt récursivement l'arbre DOM depuis cet élément parent, en construisant une collection de tous les éléments descendants qui correspondent au paramètre `name` de la balise. Cela montre à la fois `document.getElementsByTagName()` et la méthode {{DOMxRef("Element.getElementsByTagName()")}}, qui commence la recherche à un élément spécifique dans l'arbre DOM.

Cliquer sur les boutons utilise `getElementsByTagName()` pour compter les éléments paragraphe descendants d'un parent particulier (soit le document lui-même, soit l'un des deux éléments HTML {{HTMLElement("div")}} imbriqués).

```html
<p>Du texte extérieur</p>
<p>Du texte extérieur</p>

<div id="div1">
  <p>Du texte div1</p>
  <p>Du texte div1</p>
  <p>Du texte div1</p>

  <div id="div2">
    <p>Du texte div2</p>
    <p>Du texte div2</p>
  </div>
</div>

<p>Du texte extérieur</p>
<p>Du texte extérieur</p>

<button id="btn1">Afficher tous les éléments p du document</button>
<br />
<button id="btn2">Afficher tous les éléments p dans l'élément div1</button>
<br />
<button id="btn3">Afficher tous les éléments p dans l'élément div2</button>
```

```css
body {
  border: solid green 3px;
}

#div1 {
  border: solid blue 3px;
}

#div2 {
  border: solid red 3px;
}
```

```js
function obtenirTousLesParagraphes() {
  const tousLesPara = document.getElementsByTagName("p");
  const num = tousLesPara.length;
  alert(`Il y a ${num} paragraphes dans ce document`);
}

function obtenirParagraphesDiv1() {
  const div1 = document.getElementById("div1");
  const paraDiv1 = div1.getElementsByTagName("p");
  const num = paraDiv1.length;
  alert(`Il y a ${num} paragraphes dans #div1`);
}

function obtenirParagraphesDiv2() {
  const div2 = document.getElementById("div2");
  const paraDiv2 = div2.getElementsByTagName("p");
  const num = paraDiv2.length;
  alert(`Il y a ${num} paragraphes dans #div2`);
}

document
  .getElementById("btn1")
  .addEventListener("click", obtenirTousLesParagraphes);
document
  .getElementById("btn2")
  .addEventListener("click", obtenirParagraphesDiv1);
document
  .getElementById("btn3")
  .addEventListener("click", obtenirParagraphesDiv2);
```

## Notes

Lorsqu'elle est appelée sur un document HTML, `getElementsByTagName()` met son argument en minuscules avant de continuer. Cela n'est pas souhaitable lorsque vous essayez de faire correspondre des éléments SVG en {{Glossary("camel_case", "camel case")}} dans un sous-arbre d'un document HTML. {{DOMxRef("document.getElementsByTagNameNS()")}} est utile dans ce cas. Voir aussi [le bogue Firefox 499656 <sup>(angl.)</sup>](https://bugzil.la/499656).

`document.getElementsByTagName()` est similaire à {{DOMxRef("Element.getElementsByTagName()")}}, sauf que sa recherche englobe tout le document.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.getElementsByTagName()")}}
- La méthode {{DOMxRef("document.getElementById()")}} pour obtenir une référence à un élément par son `id`
- La méthode {{DOMxRef("document.getElementsByName()")}} pour obtenir une référence à un élément par son `name`
- La méthode {{DOMxRef("document.querySelector()")}} pour des sélecteurs puissants avec des requêtes comme `"div.maclasse"`
