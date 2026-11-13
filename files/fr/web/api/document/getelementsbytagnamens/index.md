---
title: "Document : méthode getElementsByTagNameNS()"
short-title: getElementsByTagNameNS()
slug: Web/API/Document/getElementsByTagNameNS
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

La méthode **`getElementsByTagNameNS()`** de l'interface {{DOMxRef("Document")}} retourne une liste d'éléments ayant le nom de balise donné et appartenant à l'espace de noms défini. Le document complet est recherché, y compris le nœud racine.

## Syntaxe

```js-nolint
getElementsByTagNameNS(namespace, name)
```

### Paramètres

- `namespace`
  - : L'URI de l'espace de noms des éléments à rechercher (voir {{DOMxRef("Element.namespaceURI", "element.namespaceURI")}}).
- `name`
  - : Le nom local des éléments à rechercher ou la valeur spéciale `*`, qui cible tous les éléments (voir {{DOMxRef("Element.localName", "element.localName")}}).

    > [!NOTE]
    > Contrairement à {{DOMxRef("document.getElementsByTagName()")}}, les paramètres de `getElementsByTagNameNS()` sont sensibles à la casse.

### Valeur de retour

Une collection ({{DOMxRef("HTMLCollection")}}) dynamique des éléments trouvés, dans l'ordre dans lequel ils apparaissent dans l'arbre.

## Exemples

Dans l'exemple qui suit, on utilise `getElementsByTagNameNS()` à partir d'un élément parent donné puis on recherche récursivement dans le DOM les éléments enfants dont la balise correspond au paramètre `name`.

On notera que lorsque `getElementsByTagName()` est appelée sur un nœud qui n'est pas `document`, c'est en réalité la méthode {{DOMxRef("Element.getElementsByTagNameNS()")}} qui est utilisée.

Vous pouvez enregistrer le code qui suit dans un fichier avec l'extension `.xhtml` afin d'essayer l'exemple.

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
  const tousLesPara = document.getElementsByTagNameNS(
    "http://www.w3.org/1999/xhtml",
    "p",
  );
  const num = tousLesPara.length;
  alert(`Il y a ${num} paragraphes dans ce document`);
}

function obtenirParagraphesDiv1() {
  const div1 = document.getElementById("div1");
  const paraDiv1 = div1.getElementsByTagNameNS(
    "http://www.w3.org/1999/xhtml",
    "p",
  );
  const num = paraDiv1.length;
  alert(`Il y a ${num} paragraphes dans #div1`);
}

function obtenirParagraphesDiv2() {
  const div2 = document.getElementById("div2");
  const paraDiv2 = div2.getElementsByTagNameNS(
    "http://www.w3.org/1999/xhtml",
    "p",
  );
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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.getElementsByTagNameNS()")}}
