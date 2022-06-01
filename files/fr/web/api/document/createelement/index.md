---
title: document.createElement
slug: Web/API/Document/createElement
translation_of: Web/API/Document/createElement
---
{{APIRef("DOM")}}

Dans un document [HTML](/fr/docs/Web/HTML), la méthode **`document.createElement()`** crée un élément HTML du type spécifié par `tagName` ou un {{domxref("HTMLUnknownElement")}} si `tagName` n’est pas reconnu.

## Syntaxe

    var element = document.createElement(tagName[, options]);

### Paramètres

- tagName
  - : Une chaîne de caractères ({{domxref("DOMString")}}) spécifiant le type d’élément à créer. Le {{domxref("Node.nodeName", "nodeName")}} (_nom du noeud_) de l’élément créé est initialisé avec la valeur de `tagName`. N’utilisez pas le nom qualifié (comme `"html:a"`) avec cette méthode. Quand elle est appelée sur un document HTML, `createElement()` convertit `tagName` en minuscules avant de créer l’élément. Dans Firefox, Opera et Chrome, `createElement(null)` fonctionne comme `createElement("null")`.
- options{{optional_inline}}
  - : Un objet `ElementCreationOptions` facultatif contenant une seule propriété nommée `is` dont la valeur est le nom de balise d’un élément personnalisé précédemment défini avec `customElements.define()`. Voir [Exemple de composant web](#exemple_de_composant_web) pour plus de détails.

### Valeur de retour

L’objet {{domxref("Element")}} créé.

## Exemples

### Exemple de base

Ici est créé un nouveau `<div>` qui est inséré avant l’élément avec l’identifiant `"div1"`.

#### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>||Working with elements||</title>
</head>
<body>
  <div id="div1">The text above has been created dynamically.</div>
</body>
</html>
```

#### JavaScript

```js
document.body.onload = addElement;

function addElement () {
  // crée un nouvel élément div
  var newDiv = document.createElement("div");
  // et lui donne un peu de contenu
  var newContent = document.createTextNode('Hi there and greetings!');
  // ajoute le nœud texte au nouveau div créé
  newDiv.appendChild(newContent);

  // ajoute le nouvel élément créé et son contenu dans le DOM
  var currentDiv = document.getElementById('div1');
  document.body.insertBefore(newDiv, currentDiv);
}
```

{{EmbedLiveSample("Exemple_de_base", 500, 50)}}

### Exemple de composant web

L’exemple de fragment suivant est extrait de notre exemple expanding-list-web-component (voir aussi en direct). Dans ce cas, notre élément personnalisé étend la {{domxref("HTMLUListElement")}} qui représente l’élément {{htmlelement("ul")}}.

```js
// Crée une classe pour l’élément
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Toujours appeler « super » en premier dans le constructeur
    super();

    // définition du constructeur omise pour la brièveté
    ...
  }
}

// Définit le nouvel élément
customElements.define('expanding-list', ExpandingList, { extends: 'ul' });
```

Si nous cherchons à créer une instance de cet élément par programmation, nous devons utiliser un appel tel que montré dans la ligne suivante&nbsp;:

```js
let expandingList = document.createElement('ul', { is : 'expanding-list' })
```

Le nouvel élément donnera un attribut [`is`](/docs/Web/HTML/Global_attributes/is) dont la valeur est la balise de nom de l’élément personnalisé.

> **Note :** Pour la rétrocompatibilité avec les versions précédentes de la [spécification des éléments personnalisés](https://www.w3.org/TR/custom-elements/), quelques navigateurs permettent de passer une chaîne de caractères ici, à la place d’un objet, dont la valeur est la balise de nom de l’élément personnalisé.

## Spécification

| Spécification                                                                                                    | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('DOM WHATWG', "#dom-document-createelement", "Document.createElement")}} | {{Spec2('DOM WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.Document.createElement")}}

### Notes CSS Quantum

- Dans Gecko, quand vous voulez créer un sous-arbre détaché (par exemple, un {{htmlelement("div")}} créé avec `createElement()` qui n’est pas encore inséré dans le DOM), l’élément racine du sous-arbre est défini comme un élément de niveau bloc. Dans le nouveau moteur CSS parallèle de Firefox (aussi connu comme [Quantum CSS](https://wiki.mozilla.org/Quantum) ou [Stylo](https://wiki.mozilla.org/Quantum/Stylo), prévu pour être publié dans Firefox 57), il est défini comme "inline", ({{bug(1374994)}}) selon la spécification.

## Voir aussi

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("document.createElementNS()")}} — pour spécifier explicitement l’URI de l’espace de noms de l’élément.
