---
title: "Document : méthode createElement()"
short-title: createElement()
slug: Web/API/Document/createElement
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("DOM")}}

Dans un document [HTML](/fr/docs/Web/HTML), la méthode **`createElement()`** de l'interface {{DOMxRef("Document")}} crée l'élément HTML défini par `localName`, ou un {{DOMxRef("HTMLUnknownElement")}} si `localName` n'est pas reconnu.

## Syntaxe

```js-nolint
createElement(localName)
createElement(localName, options)
```

### Paramètres

- `localName`
  - : Une chaîne de caractères définissant le type d'élément à créer. N'utilisez pas de noms qualifiés (comme «&nbsp;html:a&nbsp;») avec cette méthode. Lorsqu'elle est appelée sur un document HTML, `createElement()` convertit `localName` en minuscules avant de créer l'élément. Dans Firefox, Opera et Chrome, `createElement(null)` fonctionne comme `createElement("null")`.
- `options` {{Optional_Inline}}
  - : Un objet avec les propriétés suivantes&nbsp;:
    - `is`
      - : Le nom de balise d'un élément personnalisé précédemment défini via `customElements.define()`.
        Voir [Exemple de composant web](#exemple_de_composant_web) pour plus de détails.

### Valeur de retour

L'objet {{DOMxRef("Element")}} créé.

> [!NOTE]
> Un nouvel {{DOMxRef("HTMLElement", "élément HTML", "", "1")}} est retourné si le document est un {{DOMxRef("HTMLDocument", "document HTML", "", "1")}}, ce qui est le cas le plus courant. Sinon, un nouvel {{DOMxRef("Element","élément","","1")}} est retourné.

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

Le nouvel élément donnera un attribut [`is`](/fr/docs/Web/HTML/Reference/Global_attributes/is) dont la valeur est la balise de nom de l'élément personnalisé.

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
