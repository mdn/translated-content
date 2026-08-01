---
title: "Document : méthode createElement()"
short-title: createElement()
slug: Web/API/Document/createElement
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("DOM")}}

La méthode **`createElement()`** de l'interface {{DOMxRef("Document")}} crée un nouvel {{DOMxRef("HTMLElement")}} ayant le `localName` défini.

Si le `localName` n'est pas reconnu, la méthode crée un {{DOMxRef("HTMLUnknownElement")}}.

## Syntaxe

```js-nolint
createElement(localName)
createElement(localName, options)
```

### Paramètres

- `localName`
  - : Une chaîne de caractères définissant le type d'élément à créer.
    N'utilisez pas de noms qualifiés (comme «&nbsp;html:a&nbsp;») avec cette méthode.
    Lorsqu'elle est appelée sur un document HTML, `createElement()` convertit `localName` en minuscules avant de créer l'élément.
    Dans Firefox, Opera et Chrome, `createElement(null)` fonctionne comme `createElement("null")`.
- `options` {{Optional_Inline}}
  - : Un objet avec les propriétés optionnelles suivantes (notez que seule l'une des propriétés `is` et `customElementRegistry` peut être définie)&nbsp;:
    - `is` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le nom de balise d'un élément personnalisé précédemment défini avec {{DOMxRef("CustomElementRegistry/define", "customElements.define()")}}.
        Le nouvel élément reçoit un attribut `is` dont la valeur est le nom de balise de l'élément personnalisé.
        Voir [Exemple de composant web](#exemple_de_composant_web) pour plus de détails.
    - `customElementRegistry` {{Optional_Inline}}
      - : Un objet {{DOMxRef("CustomElementRegistry")}} qui définit le [registre d'éléments personnalisés à portée locale](/fr/docs/Web/API/Web_components/Using_custom_elements#registres_déléments_personnalisés_avec_portée) d'un élément personnalisé.

### Valeur de retour

L'objet {{DOMxRef("Element")}} créé.

> [!NOTE]
> Un nouvel {{DOMxRef("HTMLElement", "élément HTML", "", "1")}} est retourné si le document est un {{DOMxRef("HTMLDocument", "document HTML", "", "1")}}, ce qui est le cas le plus courant.
> Sinon, un nouvel {{DOMxRef("Element","élément","","1")}} est retourné.

### Exceptions

- `InvalidCharacterError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur de [`localName`](#localname) n'est pas un nom d'élément valide.
    Une chaîne de caractères est un nom d'élément valide si sa longueur est d'au moins 1 et&nbsp;:
    - elle commence par un caractère alphabétique et ne contient pas d'espaces ASCII, `NULL`, `/` ou `>` (U+0000, U+002F ou U+003E, respectivement).
    - elle commence par `:` (U+003A), `_` (U+005F), ou tout caractère dans la plage U+0080 à U+10FFFF (inclus), _et_ les points de code restants ne contiennent que ces mêmes caractères ainsi que les caractères alphanumériques ASCII, `-` (U+002D) et `.` (U+002E),

    > [!NOTE]
    > Les versions antérieures de la spécification étaient plus restrictives, exigeant que le `localName` soit un [nom XML <sup>(angl.)</sup>](https://www.w3.org/TR/xml/#dt-name) valide.

- `NotSupportedError` {{DOMxRef("DOMException")}}
  - : Levée si les options [`is`](#is) et [`customElementRegistry`](#customelementregistry) sont toutes deux définies.

## Exemples

### Exemple simple

Ici est créé un nouveau `<div>` qui est inséré avant l'élément avec l'identifiant `"div1"`.

#### HTML

```html
<!doctype html>
<html lang="fr">
  <head>
    <title>||Travailler avec les éléments||</title>
  </head>
  <body>
    <div id="div1">Le texte ci-dessus a été créé dynamiquement.</div>
  </body>
</html>
```

#### JavaScript

```js
document.body.onload = addElement;

function addElement() {
  // crée un nouvel élément div
  const newDiv = document.createElement("div");

  // et lui donne un peu de contenu
  const newContent = document.createTextNode("Bonjour et salutations !");

  // ajoute le nœud texte au nouveau div créé
  newDiv.appendChild(newContent);

  // ajoute le nouvel élément créé et son contenu dans le DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

### Résultat

{{EmbedLiveSample("Exemple simple", 500, 80)}}

### Exemple de composant web

> [!NOTE]
> Vérifiez la section [compatibilité des navigateurs](#compatibilité_des_navigateurs) pour le support, et la référence de l'attribut [`is`](/fr/docs/Web/HTML/Reference/Global_attributes/is) pour les mises en garde sur la réalité de l'implémentation des éléments intégrés personnalisés.

L'exemple de fragment suivant est extrait de notre exemple [expanding-list-web-component <sup>(angl.)</sup>](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component) ([voir également en direct <sup>(angl.)</sup>](https://mdn.github.io/web-components-examples/expanding-list-web-component/)). Dans ce cas, notre élément personnalisé étend la {{DOMxRef("HTMLUListElement")}}, qui représente l'élément HTML {{HTMLElement("ul")}}.

```js
// Crée une classe pour l'élément
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
let expandingList = document.createElement("ul", { is: "expanding-list" });
```

Le nouvel élément donne un attribut [`is`](/fr/docs/Web/HTML/Reference/Global_attributes/is) dont la valeur est la balise de nom de l'élément personnalisé.

> [!NOTE]
> Pour la rétrocompatibilité, certains navigateurs permettent de passer une chaîne de caractères ici à la place d'un objet, où la valeur de la chaîne de caractères est le nom de la balise de l'élément personnalisé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Node.removeChild()")}}
- La méthode {{DOMxRef("Node.replaceChild()")}}
- La méthode {{DOMxRef("Node.appendChild()")}}
- La méthode {{DOMxRef("Node.insertBefore()")}}
- La méthode {{DOMxRef("Node.hasChildNodes()")}}
- La méthode {{DOMxRef("document.createElementNS()")}} — pour définir explicitement l'URI de l'espace de noms de l'élément.
