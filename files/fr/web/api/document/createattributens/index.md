---
title: "Document : méthode createAttributeNS()"
short-title: createAttributeNS()
slug: Web/API/Document/createAttributeNS
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("DOM")}}

La méthode **`createAttributeNS()`** de l'interface {{DOMxRef("Document")}} crée un nouveau nœud d'attribut avec l'URI de l'espace de noms et le nom qualifié définis, et le retourne. L'objet créé est un nœud implémentant l'interface {{DOMxRef("Attr")}}. Le DOM n'impose pas le type d'attribut à ajouter à un élément particulier de cette manière.

## Syntaxe

```js-nolint
createAttributeNS(namespaceURI, qualifiedName)
```

### Paramètres

- `namespaceURI`
  - : Une chaîne de caractères qui définit le {{DOMxRef("Attr.namespaceURI", "namespaceURI")}} à associer à l'attribut. Certains URI d'espace de noms importants sont&nbsp;:
    - [HTML](/fr/docs/Web/HTML)
      - : `http://www.w3.org/1999/xhtml`
    - [SVG](/fr/docs/Web/SVG)
      - : `http://www.w3.org/2000/svg`
    - [MathML](/fr/docs/Web/MathML)
      - : `http://www.w3.org/1998/Math/MathML`
- `qualifiedName`
  - : Une chaîne de caractères qui définit le nom de l'attribut à créer.
    La propriété {{DOMxRef("Attr.name", "name")}} de l'attribut créé est initialisée avec la valeur de `qualifiedName`.

### Valeur de retour

Le nouveau nœud {{DOMxRef("Attr")}}.

### Exceptions

- `NamespaceError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur de [`namespaceURI`](#namespaceuri) n'est pas un URI d'espace de noms valide.
- `InvalidCharacterError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur de [`qualifiedName`](#qualifiedname) n'est pas un [nom XML <sup>(angl.)</sup>](https://www.w3.org/TR/xml/#dt-name) valide&nbsp;; par exemple, si elle commence par un chiffre, un tiret ou un point, ou contient des caractères autres que des caractères alphanumériques, des tirets bas (`_`), des tirets (`-`) ou des points (`.`).

## Exemples

```js
const noeud = document.getElementById("svg");
const a = document.createAttributeNS("http://www.w3.org/2000/svg", "viewBox");
a.value = "0 0 100 100";
noeud.setAttributeNode(a);
console.log(noeud.getAttribute("viewBox")); // "0 0 100 100"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.createAttribute()")}}
- La méthode {{DOMxRef("Document.createElementNS()")}}
- La méthode {{DOMxRef("Element.setAttributeNS()")}}
- La méthode {{DOMxRef("Element.setAttributeNode()")}}
- La méthode {{DOMxRef("Element.setAttributeNodeNS()")}}
