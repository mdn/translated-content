---
title: "Document : méthode createDocumentFragment()"
short-title: createDocumentFragment()
slug: Web/API/Document/createDocumentFragment
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("DOM WHATWG")}}

La méthode **`createDocumentFragment()`** de l'interface {{DOMxRef("Document")}} crée un nouvel objet vide de type {{DOMxRef("DocumentFragment")}} dans lequel des nœuds du DOM peuvent être ajoutés pour construire un arbre DOM hors écran.

## Syntaxe

```js-nolint
createDocumentFragment()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("DocumentFragment")}} nouvellement créé et vide, prêt à recevoir des nœuds.

## Description

Les objets `DocumentFragment` sont des objets {{DOMxRef("Node")}} du DOM qui ne font jamais partie de l'arbre DOM principal. Le cas d'utilisation habituel consiste à créer le fragment de document, à y ajouter des éléments, puis à ajouter le fragment de document à l'arbre DOM.
Dans l'arbre DOM, le fragment de document est remplacé par tous ses enfants.

Étant donné que le fragment de document est _en mémoire_ et ne fait pas partie de l'arbre DOM principal, l'utilisation de fragments de document peut entraîner une [meilleure performance <sup>(angl.)</sup>](https://johnresig.com/blog/dom-documentfragments/) dans certains anciens moteurs.

Vous pouvez également utiliser le constructeur `DocumentFragment` pour créer un nouveau fragment&nbsp;:

```js
const fragment = new DocumentFragment();
```

## Exemples

Cet exemple crée une liste des principaux navigateurs du web dans un `DocumentFragment`, puis ajoute le nouveau sous-arbre DOM au document pour l'afficher.

### HTML

```html
<ul id="ul"></ul>
```

### JavaScript

```js
const element = document.getElementById("ul"); // en supposant qu'ul existe
const fragment = document.createDocumentFragment();
const navigateurs = ["Firefox", "Chrome", "Opera", "Safari"];

navigateurs.forEach((navigateur) => {
  const li = document.createElement("li");
  li.textContent = navigateur;
  fragment.appendChild(li);
});

element.appendChild(fragment);
```

### Résultat

{{EmbedLiveSample("Exemple", 600, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("DOMImplementation.createDocument", "document.implementation.createDocument()")}}
- L'interface {{DOMxRef("DocumentFragment")}}
