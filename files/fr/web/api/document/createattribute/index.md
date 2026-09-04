---
title: "Document : méthode createAttribute()"
short-title: createAttribute()
slug: Web/API/Document/createAttribute
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("DOM")}}

La méthode **`createAttribute()`** de l'interface {{DOMxRef("Document")}} crée un nouveau nœud d'attribut.
L'objet créé est un nœud implémentant l'interface {{DOMxRef("Attr")}}.
Le DOM n'impose pas le type d'attribut à ajouter à un élément particulier de cette manière.

> [!NOTE]
> La chaîne de caractères donnée en paramètre est convertie en minuscules.

## Syntaxe

```js-nolint
createAttribute(localName)
```

### Paramètres

- `localName`
  - : Une chaîne de caractères contenant le nom de l'attribut.
    La valeur est utilisée pour initialiser la propriété {{DOMxRef("Attr.localName", "localName")}} du nouvel attribut.

### Valeur de retour

Un nœud {{DOMxRef("Attr")}}.

### Exceptions levées

- `InvalidCharacterError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur de [`localName`](#localname) n'est pas un nom d'attribut valide.
    Elle doit contenir au moins un caractère et ne peut pas contenir d'espaces ASCII, `NULL`, `/`, `=` ou `>` (U+0000, U+002F, U+003D ou U+003E, respectivement).

    > [!NOTE]
    > Les versions antérieures de la spécification étaient plus restrictives, exigeant que le `localName` soit un [nom XML <sup>(angl.)</sup>](https://www.w3.org/TR/xml/#dt-name) valide.

## Exemples

### Exemple simple

```js
const noeud = document.getElementById("div1");
const a = document.createAttribute("mon_attribut");
a.value = "nouvelleValeur";
noeud.setAttributeNode(a);
console.log(noeud.getAttribute("mon_attribut")); // "nouvelleValeur"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.createAttributeNS()")}}
- La méthode {{DOMxRef("Document.createElement()")}}
- La méthode {{DOMxRef("Element.setAttribute()")}}
- La méthode {{DOMxRef("Element.setAttributeNode()")}}
